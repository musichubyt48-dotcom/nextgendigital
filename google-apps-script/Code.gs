/**
 * ============================================================================
 * NEXTGEN DIGITAL — GOOGLE SHEETS FORM SUBMISSION BACKEND
 * ============================================================================
 *
 * Google Apps Script Web App for handling submissions from:
 * 1. "Send Us a Message" Contact Form
 * 2. "Start a Project" Questionnaire Form
 *
 * SPREADSHEETS:
 * - Contact Form:  1xbBCpas0sTdItW6-myQIBQjpgELZpasBtiNsEd0HzEw
 * - Start Project: 1o9oU60M-l7vxpZXKHhKCriA-dNzkUwUttlXiDISL51s
 *
 * SECURITY & RELIABILITY FEATURES:
 * - Server-side timestamp generation
 * - Formula injection prevention (neutralizes =, +, -, @)
 * - Concurrency control with LockService to avoid dropped rows
 * - Auto-initializes header row if target sheet is empty
 * - Never overwrites or deletes existing rows
 * - Safe error handling with JSON responses
 * ============================================================================
 */

// CONFIGURATION: Set your Spreadsheet IDs and optional Tab/Sheet names here.
// Leave sheetName as "" (empty string) to automatically use the first active tab.
var CONFIG = {
  // Form 1: "Send Us a Message"
  contact: {
    spreadsheetId: "1xbBCpas0sTdItW6-myQIBQjpgELZpasBtiNsEd0HzEw",
    sheetName: "", // Optional: e.g. "Sheet1" or leave blank for first tab
    headers: [
      "Timestamp",
      "Your Name",
      "Business / Brand Name",
      "Email Address",
      "Phone / WhatsApp",
      "Project Type",
      "Investment Preference",
      "Project Brief & Requirements",
    ],
  },

  // Form 2: "Start a Project"
  "start-project": {
    spreadsheetId: "1o9oU60M-l7vxpZXKHhKCriA-dNzkUwUttlXiDISL51s",
    sheetName: "", // Optional: e.g. "Sheet1" or leave blank for first tab
    headers: [
      "Timestamp",
      "Your Name",
      "Business Name",
      "Email Address",
      "Phone / WhatsApp",
      "Project Type",
      "Budget Range",
      "Timeline",
      "Business Integrations",
      "Project Details",
    ],
  },
};

/**
 * Health check endpoint (GET)
 * Open the Web App URL in your browser to verify deployment status.
 */
function doGet(e) {
  var output = {
    status: "online",
    service: "NextGen Digital Google Sheets Web App Endpoint",
    configuredForms: Object.keys(CONFIG),
    timestamp: new Date().toISOString(),
  };
  return createJsonResponse(output);
}

/**
 * Main form submission handler (POST)
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 30 seconds for concurrent operations to complete
  var hasLock = lock.tryLock(30000);

  if (!hasLock) {
    return createJsonResponse({
      status: "error",
      message:
        "Server is currently busy processing other submissions. Please retry in a few moments.",
    });
  }

  try {
    // 1. Parse incoming payload safely
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        // Fallback if sent as urlencoded or form-data
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var formType = data.formType || "contact";
    var formConfig = CONFIG[formType];

    if (!formConfig) {
      return createJsonResponse({
        status: "error",
        message: "Invalid or unsupported formType: '" + formType + "'",
      });
    }

    // 2. Open Target Spreadsheet
    var spreadsheet;
    try {
      spreadsheet = SpreadsheetApp.openById(formConfig.spreadsheetId);
    } catch (ssErr) {
      console.error("Failed to open spreadsheet with ID: " + formConfig.spreadsheetId, ssErr);
      return createJsonResponse({
        status: "error",
        message:
          "Unable to access target Google Sheet. Please verify script permissions and spreadsheet ID.",
      });
    }

    // 3. Select Target Sheet/Tab
    var sheet = getSheet(spreadsheet, formConfig.sheetName);
    if (!sheet) {
      return createJsonResponse({
        status: "error",
        message: "Could not find a valid sheet tab in the target spreadsheet.",
      });
    }

    // 4. Initialize headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(formConfig.headers);
      // Format header row: bold, subtle grey background
      var headerRange = sheet.getRange(1, 1, 1, formConfig.headers.length);
      headerRange.setFontWeight("bold");
    }

    // 5. Generate server timestamp in Indian Standard Time (or script timezone)
    var timeZone = Session.getScriptTimeZone() || "Asia/Kolkata";
    var timestamp = Utilities.formatDate(new Date(), timeZone, "yyyy-MM-dd HH:mm:ss");

    // 6. Build Row Data according to strict column specifications
    var rowData = [];

    if (formType === "contact") {
      // Validate mandatory fields
      if (!data.name || !data.email || !data.message) {
        return createJsonResponse({
          status: "error",
          message: "Missing mandatory fields (Name, Email, or Project Brief).",
        });
      }

      // FORM 1: Send Us a Message
      // Columns:
      // 1. Timestamp
      // 2. Your Name
      // 3. Business / Brand Name
      // 4. Email Address
      // 5. Phone / WhatsApp
      // 6. Project Type
      // 7. Investment Preference
      // 8. Project Brief & Requirements
      rowData = [
        timestamp,
        sanitize(data.name),
        sanitize(data.businessName),
        sanitize(data.email),
        sanitize(data.phone),
        sanitize(data.projectType),
        sanitize(data.budget || data.investmentPreference),
        sanitize(data.message || data.projectBrief),
      ];
    } else if (formType === "start-project") {
      // Validate mandatory fields
      if (!data.name || !data.email || !data.projectDetails) {
        return createJsonResponse({
          status: "error",
          message: "Missing mandatory fields (Name, Email, or Project Details).",
        });
      }

      // FORM 2: Start a Project
      // Columns:
      // 1. Timestamp
      // 2. Your Name
      // 3. Business Name
      // 4. Email Address
      // 5. Phone / WhatsApp
      // 6. Project Type
      // 7. Budget Range
      // 8. Timeline
      // 9. Business Integrations
      // 10. Project Details
      rowData = [
        timestamp,
        sanitize(data.name),
        sanitize(data.businessName),
        sanitize(data.email),
        sanitize(data.phone || data.contact),
        sanitize(data.projectType),
        sanitize(data.budgetRange),
        sanitize(data.timeline),
        sanitize(data.businessIntegrations || data.extraFeatures),
        sanitize(data.projectDetails),
      ];
    }

    // 7. Append Row to Sheet (guaranteed append, never overwrites)
    sheet.appendRow(rowData);

    console.log("Successfully recorded submission for formType: " + formType);

    return createJsonResponse({
      status: "success",
      message: "Submission received and recorded successfully.",
      formType: formType,
      timestamp: timestamp,
    });
  } catch (error) {
    console.error("Critical error in doPost: " + error.toString(), error);
    return createJsonResponse({
      status: "error",
      message: "An internal server error occurred while processing the submission.",
    });
  } finally {
    // Always release the lock
    lock.releaseLock();
  }
}

/**
 * Sanitizes cell input to prevent CSV / Spreadsheet formula injection.
 * Any string beginning with =, +, -, @, \t, or \r is prefixed with a single quote.
 */
function sanitize(value) {
  if (value === null || value === undefined) {
    return "";
  }
  var str = String(value).trim();
  if (/^[=+\-@\t\r]/.test(str)) {
    return "'" + str;
  }
  return str;
}

/**
 * Finds sheet by name or falls back to first sheet
 */
function getSheet(spreadsheet, sheetName) {
  if (sheetName && sheetName.trim() !== "") {
    var namedSheet = spreadsheet.getSheetByName(sheetName.trim());
    if (namedSheet) return namedSheet;
  }
  var sheets = spreadsheet.getSheets();
  return sheets.length > 0 ? sheets[0] : null;
}

/**
 * Helper to build standard JSON response with proper MIME type
 */
function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
