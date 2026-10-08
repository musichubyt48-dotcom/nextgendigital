import { supabaseServer, sanitizeText, setCorsHeaders } from "./_supabase";

interface ServerlessRequest {
  method?: string;
  body?: Record<string, unknown>;
}

interface ServerlessResponse {
  setHeader?: (key: string, value: string) => void;
  status: (code: number) => { json: (data: unknown) => void };
}

export default async function handler(req: ServerlessRequest, res: ServerlessResponse) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(200).json({ status: "ok" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const body = (req.body && typeof req.body === "object" ? req.body : {}) as Record<
      string,
      unknown
    >;

    const name = sanitizeText(body.name);
    const businessName = sanitizeText(body.businessName);
    const email = sanitizeText(body.email);
    const phone = sanitizeText(body.phone);
    const projectType = sanitizeText(body.projectType) || "Business Website";
    const investmentPreference =
      sanitizeText(body.investmentPreference || body.budget) || "Growth (₹14,999 - ₹24,999)";
    const projectDetails = sanitizeText(body.projectBrief || body.message);

    if (!name || !businessName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields (Name, Business Name, Email, and Phone).",
      });
    }

    // 1. Insert into dedicated contact_messages table
    const { error: contactErr } = await supabaseServer.from("contact_messages").insert({
      name,
      business_name: businessName,
      email,
      phone,
      project_type: projectType,
      investment_preference: investmentPreference,
      project_details: projectDetails || null,
      status: "new",
    });

    if (contactErr) {
      console.error("[Vercel API] Error inserting contact message:", contactErr);
      return res.status(500).json({
        success: false,
        message:
          contactErr.message || "Failed to save message to database. Please reach out on WhatsApp.",
      });
    }

    // 2. Mirror into unified leads table (non-blocking)
    try {
      await supabaseServer.from("leads").insert({
        form_type: "contact",
        name,
        business_name: businessName,
        email,
        phone,
        project_type: projectType,
        investment_preference: investmentPreference,
        project_details: projectDetails || null,
        status: "new",
      });
    } catch {
      // non-critical mirror
    }

    return res.status(200).json({
      success: true,
      message:
        "Thank you! Your message has been received successfully. We will get back to you shortly.",
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error("[Vercel API] Exception in /api/contact:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "An internal error occurred while processing your request.",
    });
  }
}
