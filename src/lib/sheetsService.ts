/**
 * Form Submission Service (Supabase Integration)
 *
 * Connects directly to Supabase tables:
 * - contact_messages (for "Send Us a Message")
 * - project_inquiries (for "Start a Project")
 * - leads (unified mirror)
 */

export { submitContactForm, submitProjectForm, sanitizeClientValue } from "./leadService";

export type { ContactFormData, ProjectFormData, SubmissionResult } from "./leadService";
