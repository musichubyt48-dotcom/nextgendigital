/**
 * Server-Side Supabase Form Submission Handler
 *
 * Persists leads directly into Supabase tables:
 * - contact_messages (for "Send Us a Message")
 * - project_inquiries (for "Start a Project")
 * - leads (unified mirror)
 */

import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";

export interface ContactFormPayload {
  name?: string;
  businessName?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  investmentPreference?: string;
  message?: string;
  projectBrief?: string;
}

export interface ProjectFormPayload {
  name?: string;
  businessName?: string;
  email?: string;
  contact?: string;
  phone?: string;
  projectType?: string;
  budgetRange?: string;
  timeline?: string;
  extraFeatures?: string[] | string;
  businessIntegrations?: string[] | string;
  projectDetails?: string;
}

export interface BackendResult {
  success: boolean;
  message: string;
  status?: number;
  error?: string;
}

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://sisfdigevxswoekbnnli.supabase.co";
const SUPABASE_KEY =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY ||
  "sb_publishable_9YJGJUYHnmuIErN9lzsCDQ_ESKSVWtB";

// Normalize URL in case dashboard URL was provided in environment
function cleanSupabaseUrl(url: string): string {
  const match = url.match(/\/project\/([a-z0-9_-]+)/i);
  if (match && match[1]) {
    return `https://${match[1]}.supabase.co`;
  }
  return url;
}

const supabase = createClient(cleanSupabaseUrl(SUPABASE_URL), SUPABASE_KEY);

/**
 * Neutralizes characters that could be executed as formulas
 */
export function sanitizeSheetValue(value: unknown): string {
  if (value === null || value === undefined) return "";
  const str = String(value).trim();
  if (/^[=+\-@\t\r]/.test(str)) {
    return `'${str}`;
  }
  return str;
}

/**
 * Local file backup for safety
 */
export function recordSubmissionBackup(
  formType: "contact" | "start-project",
  data: Record<string, unknown>,
) {
  try {
    const backupDir = path.resolve(process.cwd(), "data");
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    const backupFile = path.join(backupDir, `${formType}-leads.jsonl`);
    const line = JSON.stringify({ ...data, savedAt: new Date().toISOString() }) + "\n";
    fs.appendFileSync(backupFile, line, "utf8");
  } catch (err) {
    console.warn("[Backup] Could not write local submission backup:", err);
  }
}

/**
 * Handle "Send Us a Message" Contact Form Submission
 */
export async function handleContactSubmission(body: ContactFormPayload): Promise<BackendResult> {
  const name = sanitizeSheetValue(body.name);
  const businessName = sanitizeSheetValue(body.businessName);
  const email = sanitizeSheetValue(body.email);
  const phone = sanitizeSheetValue(body.phone);
  const projectType = sanitizeSheetValue(body.projectType || "Business Website");
  const investmentPreference = sanitizeSheetValue(
    body.investmentPreference || body.budget || "Growth (₹14,999 - ₹24,999)",
  );
  const projectDetails = sanitizeSheetValue(body.projectBrief || body.message);

  if (!name) {
    return { success: false, status: 400, message: "Your Name is required." };
  }
  if (!businessName) {
    return { success: false, status: 400, message: "Business / Brand Name is required." };
  }
  if (!email || !email.includes("@")) {
    return { success: false, status: 400, message: "A valid Email Address is required." };
  }
  if (!phone || phone.length < 8) {
    return { success: false, status: 400, message: "A valid Phone / WhatsApp number is required." };
  }

  // Backup to disk
  recordSubmissionBackup("contact", {
    name,
    businessName,
    email,
    phone,
    projectType,
    investmentPreference,
    projectDetails,
  });

  try {
    // 1. Insert into dedicated contact_messages table
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
      console.error("[Supabase Backend] Error in contact_messages insert:", error);
      return {
        success: false,
        status: 500,
        message: "Failed to save message to database. Please reach out on WhatsApp.",
        error: error.message,
      };
    }

    // 2. Mirror into unified leads table
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
      // non-blocking
    }

    return {
      success: true,
      status: 200,
      message:
        "Thank you! Your message has been received successfully. We will get back to you shortly.",
    };
  } catch (err: unknown) {
    const errorObj = err as Error;
    console.error("[Supabase Backend] Exception in contact submission:", errorObj);
    return {
      success: false,
      status: 500,
      message: errorObj.message || "An unexpected error occurred while saving your submission.",
    };
  }
}

/**
 * Handle "Start a Project" Questionnaire Submission
 */
export async function handleProjectSubmission(body: ProjectFormPayload): Promise<BackendResult> {
  const name = sanitizeSheetValue(body.name);
  const businessName = sanitizeSheetValue(body.businessName);
  const email = sanitizeSheetValue(body.email);
  const phone = sanitizeSheetValue(body.phone || body.contact);
  const projectType = sanitizeSheetValue(body.projectType || "Business Website");
  const budgetRange = sanitizeSheetValue(body.budgetRange || "Growth (₹14,999 - ₹24,999)");
  const timeline = sanitizeSheetValue(body.timeline || "Standard (2–4 Weeks)");

  let businessIntegrations: string | null = null;
  const rawFeatures = body.businessIntegrations || body.extraFeatures;
  if (Array.isArray(rawFeatures)) {
    businessIntegrations = rawFeatures.map(sanitizeSheetValue).filter(Boolean).join(", ");
  } else if (rawFeatures) {
    businessIntegrations = sanitizeSheetValue(rawFeatures);
  }

  const projectDetails = sanitizeSheetValue(body.projectDetails);

  if (!name) {
    return { success: false, status: 400, message: "Your Name is required." };
  }
  if (!businessName) {
    return { success: false, status: 400, message: "Business / Brand Name is required." };
  }
  if (!email || !email.includes("@")) {
    return { success: false, status: 400, message: "A valid Email Address is required." };
  }
  if (!phone || phone.length < 8) {
    return { success: false, status: 400, message: "A valid Phone / WhatsApp number is required." };
  }

  // Backup to disk
  recordSubmissionBackup("start-project", {
    name,
    businessName,
    email,
    phone,
    projectType,
    budgetRange,
    timeline,
    businessIntegrations,
    projectDetails,
  });

  try {
    // 1. Insert into dedicated project_inquiries table
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
      console.error("[Supabase Backend] Error in project_inquiries insert:", error);
      return {
        success: false,
        status: 500,
        message: "Failed to save project brief to database. Please reach out on WhatsApp.",
        error: error.message,
      };
    }

    // 2. Mirror into unified leads table
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
      // non-blocking
    }

    return {
      success: true,
      status: 200,
      message:
        "Thank you! Your project brief has been submitted successfully. We will prepare your scope and reach out soon.",
    };
  } catch (err: unknown) {
    const errorObj = err as Error;
    console.error("[Supabase Backend] Exception in project submission:", errorObj);
    return {
      success: false,
      status: 500,
      message: errorObj.message || "An unexpected error occurred while saving your project brief.",
    };
  }
}
