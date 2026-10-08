import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://sisfdigevxswoekbnnli.supabase.co";
const SUPABASE_KEY =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  "sb_publishable_9YJGJUYHnmuIErN9lzsCDQ_ESKSVWtB";

export function cleanSupabaseUrl(url: string): string {
  const trimmed = (url || "").trim();
  if (!trimmed) return "https://sisfdigevxswoekbnnli.supabase.co";
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
