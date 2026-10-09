import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://ydodkggouwxfywsrvbat.supabase.co";
const SUPABASE_KEY =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlkb2RrZ2dvdXd4Znl3c3J2YmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0NzQ2NTEsImV4cCI6MjEwNzA1MDY1MX0.psDxwrVhNW5QPujFloUT7JD4DoITVh2G5nqIxcC89Tc";

export function cleanSupabaseUrl(url: string): string {
  const trimmed = (url || "").trim();
  if (!trimmed) return "https://ydodkggouwxfywsrvbat.supabase.co";
  const match = trimmed.match(/\/project\/([a-z0-9_-]+)/i);
  if (match && match[1]) {
    return `https://${match[1]}.supabase.co`;
  }
  return trimmed;
}

export const supabaseServer = createClient(cleanSupabaseUrl(SUPABASE_URL), SUPABASE_KEY);

export function sanitizeText(val: unknown): string {
  if (val === null || val === undefined) return "";
  return String(val).trim();
}

export function setCorsHeaders(res: { setHeader?: (k: string, v: string) => void }) {
  if (typeof res.setHeader === "function") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }
}
