import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database.types";

/**
 * Normalizes Supabase project URL.
 * Automatically resolves dashboard URLs (e.g., https://supabase.com/dashboard/project/<ref>)
 * into standard API endpoint format: https://<ref>.supabase.co
 */
export function normalizeSupabaseUrl(rawUrl: string): string {
  const trimmed = (rawUrl || "").trim();
  if (!trimmed) return "https://sisfdigevxswoekbnnli.supabase.co";

  const dashboardMatch = trimmed.match(/\/project\/([a-z0-9_-]+)/i);
  if (dashboardMatch && dashboardMatch[1]) {
    return `https://${dashboardMatch[1]}.supabase.co`;
  }

  return trimmed;
}

const getEnv = (key: string): string => {
  if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env[key]) {
    return String(import.meta.env[key]);
  }
  if (typeof process !== "undefined" && process.env && process.env[key]) {
    return String(process.env[key]);
  }
  return "";
};

const DEFAULT_SUPABASE_URL = "https://sisfdigevxswoekbnnli.supabase.co";
const DEFAULT_SUPABASE_KEY = "sb_publishable_9YJGJUYHnmuIErN9lzsCDQ_ESKSVWtB";

const rawUrl = getEnv("VITE_SUPABASE_URL") || DEFAULT_SUPABASE_URL;
export const supabaseUrl = normalizeSupabaseUrl(rawUrl);

export const supabasePublishableKey = (
  getEnv("VITE_SUPABASE_PUBLISHABLE_KEY") ||
  getEnv("VITE_SUPABASE_ANON_KEY") ||
  DEFAULT_SUPABASE_KEY
).trim();

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabasePublishableKey &&
  supabaseUrl.startsWith("http") &&
  !supabaseUrl.includes("placeholder"),
);

export const supabase: SupabaseClient<Database> = createClient<Database>(
  supabaseUrl,
  supabasePublishableKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  },
);
