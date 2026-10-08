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
    const phone = sanitizeText(body.phone || body.contact);
    const projectType = sanitizeText(body.projectType) || "Business Website";
    const budgetRange = sanitizeText(body.budgetRange) || "Growth (₹14,999 - ₹24,999)";
    const timeline = sanitizeText(body.timeline) || "Standard (2–4 Weeks)";

    let businessIntegrations: string | null = null;
    const rawFeatures = body.businessIntegrations || body.extraFeatures;
    if (Array.isArray(rawFeatures)) {
      businessIntegrations = rawFeatures.map(sanitizeText).filter(Boolean).join(", ");
    } else if (rawFeatures) {
      businessIntegrations = sanitizeText(rawFeatures);
    }

    const projectDetails = sanitizeText(body.projectDetails);

    if (!name || !businessName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields (Name, Business Name, Email, and Phone).",
      });
    }

    // 1. Insert into dedicated project_inquiries table
    const { error: projErr } = await supabaseServer.from("project_inquiries").insert({
      name,
      business_name: businessName,
      email,
      phone,
      project_type: projectType,
      budget_range: budgetRange,
      timeline: timeline,
      business_integrations: businessIntegrations || null,
      project_details: projectDetails || null,
      status: "new",
    });

    if (projErr) {
      console.error("[Vercel API] Error inserting project inquiry:", projErr);
      return res.status(500).json({
        success: false,
        message:
          projErr.message ||
          "Failed to save project brief to database. Please reach out on WhatsApp.",
      });
    }

    // 2. Mirror into unified leads table (non-blocking)
    try {
      await supabaseServer.from("leads").insert({
        form_type: "start-project",
        name,
        business_name: businessName,
        email,
        phone,
        project_type: projectType,
        budget_range: budgetRange,
        timeline: timeline,
        business_integrations: businessIntegrations || null,
        project_details: projectDetails || null,
        status: "new",
      });
    } catch {
      // non-critical mirror
    }

    return res.status(200).json({
      success: true,
      message:
        "Thank you! Your project brief has been submitted successfully. We will prepare your scope and reach out soon.",
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error("[Vercel API] Exception in /api/start-project:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "An internal error occurred while processing your project brief.",
    });
  }
}
