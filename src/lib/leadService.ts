import { supabase } from "./supabase";

export interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

export interface ProjectFormData {
  name: string;
  businessName: string;
  email: string;
  contact: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  extraFeatures: string[];
  projectDetails: string;
}

export interface SubmissionResult {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Sanitizes input text before saving
 */
export function sanitizeClientValue(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

/**
 * Submits "Send Us a Message" contact form directly to Supabase contact_messages table
 */
export async function submitContactForm(data: ContactFormData): Promise<SubmissionResult> {
  const name = sanitizeClientValue(data.name);
  const businessName = sanitizeClientValue(data.businessName);
  const email = sanitizeClientValue(data.email);
  const phone = sanitizeClientValue(data.phone);
  const projectType = sanitizeClientValue(data.projectType) || null;
  const investmentPreference = sanitizeClientValue(data.budget) || null;
  const projectDetails = sanitizeClientValue(data.message) || null;

  if (!name || !businessName || !email || !phone) {
    return {
      success: false,
      message: "Please fill in all required fields (Name, Business Name, Email, and Phone).",
    };
  }

  try {
    // Insert into dedicated contact_messages table
    const { error } = await supabase.from("contact_messages").insert({
      name,
      business_name: businessName,
      email,
      phone,
      project_type: projectType,
      investment_preference: investmentPreference,
      project_details: projectDetails,
      status: "new",
    });

    if (error) {
      console.error("[Supabase] Error inserting contact message:", error);
      return {
        success: false,
        message:
          error.message || "Failed to submit message. Please try again or reach out on WhatsApp.",
        error: error.code,
      };
    }

    // Mirror to unified leads table as backup (non-blocking)
    try {
      await supabase.from("leads").insert({
        form_type: "contact",
        name,
        business_name: businessName,
        email,
        phone,
        project_type: projectType,
        investment_preference: investmentPreference,
        project_details: projectDetails,
        status: "new",
      });
    } catch {
      // Non-critical mirror
    }

    return {
      success: true,
      message:
        "Your message has been received successfully! Our team will get back to you shortly.",
    };
  } catch (err: unknown) {
    const errorObj = err as Error;
    console.error("[Supabase] Unexpected error during contact submission:", errorObj);
    return {
      success: false,
      message:
        errorObj.message ||
        "An unexpected error occurred. Please try again or contact us directly on WhatsApp.",
      error: errorObj.name,
    };
  }
}

/**
 * Submits "Start a Project" questionnaire directly to Supabase project_inquiries table
 */
export async function submitProjectForm(data: ProjectFormData): Promise<SubmissionResult> {
  const name = sanitizeClientValue(data.name);
  const businessName = sanitizeClientValue(data.businessName);
  const email = sanitizeClientValue(data.email);
  const phone = sanitizeClientValue(data.contact);
  const projectType = sanitizeClientValue(data.projectType) || null;
  const budgetRange = sanitizeClientValue(data.budgetRange) || null;
  const timeline = sanitizeClientValue(data.timeline) || null;
  const businessIntegrations =
    Array.isArray(data.extraFeatures) && data.extraFeatures.length > 0
      ? data.extraFeatures.map(sanitizeClientValue).join(", ")
      : null;
  const projectDetails = sanitizeClientValue(data.projectDetails) || null;

  if (!name || !businessName || !email || !phone) {
    return {
      success: false,
      message: "Please fill in all required fields (Name, Business Name, Email, and Phone).",
    };
  }

  try {
    // Insert into dedicated project_inquiries table
    const { error } = await supabase.from("project_inquiries").insert({
      name,
      business_name: businessName,
      email,
      phone,
      project_type: projectType,
      budget_range: budgetRange,
      timeline: timeline,
      business_integrations: businessIntegrations,
      project_details: projectDetails,
      status: "new",
    });

    if (error) {
      console.error("[Supabase] Error inserting project inquiry:", error);
      return {
        success: false,
        message:
          error.message ||
          "Failed to submit project inquiry. Please try again or reach out on WhatsApp.",
        error: error.code,
      };
    }

    // Mirror to unified leads table as backup (non-blocking)
    try {
      await supabase.from("leads").insert({
        form_type: "start-project",
        name,
        business_name: businessName,
        email,
        phone,
        project_type: projectType,
        budget_range: budgetRange,
        timeline: timeline,
        business_integrations: businessIntegrations,
        project_details: projectDetails,
        status: "new",
      });
    } catch {
      // Non-critical mirror
    }

    return {
      success: true,
      message:
        "Your project brief has been submitted successfully! We will prepare your proposal and reach out soon.",
    };
  } catch (err: unknown) {
    const errorObj = err as Error;
    console.error("[Supabase] Unexpected error during project submission:", errorObj);
    return {
      success: false,
      message:
        errorObj.message ||
        "An unexpected error occurred. Please try again or contact us directly on WhatsApp.",
      error: errorObj.name,
    };
  }
}
