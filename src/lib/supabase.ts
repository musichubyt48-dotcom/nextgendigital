import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database.types";

const DEFAULT_SUPABASE_URL = "https://ydodkggouwxfywsrvbat.supabase.co";
const DEFAULT_SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlkb2RrZ2dvdXd4Znl3c3J2YmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0NzQ2NTEsImV4cCI6MjEwNzA1MDY1MX0.psDxwrVhNW5QPujFloUT7JD4DoITVh2G5nqIxcC89Tc";

/**
 * Normalizes Supabase project URL.
 * Automatically resolves dashboard URLs (e.g., https://supabase.com/dashboard/project/<ref>)
 * into standard API endpoint format: https://<ref>.supabase.co
 */
export function normalizeSupabaseUrl(rawUrl: string): string {
  const trimmed = (rawUrl || "").trim();
  if (!trimmed || trimmed.includes("sisfdigevxswoekbnnli") || trimmed.includes("placeholder")) {
    return DEFAULT_SUPABASE_URL;
  }

  const dashboardMatch = trimmed.match(/\/project\/([a-z0-9_-]+)/i);
  if (dashboardMatch && dashboardMatch[1]) {
    if (dashboardMatch[1] === "sisfdigevxswoekbnnli") return DEFAULT_SUPABASE_URL;
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

const rawUrl = getEnv("VITE_SUPABASE_URL") || DEFAULT_SUPABASE_URL;
export const supabaseUrl = normalizeSupabaseUrl(rawUrl);

export function resolveSupabaseKey(rawKey: string): string {
  const trimmed = (rawKey || "").trim();
  if (
    !trimmed ||
    trimmed.includes("sb_publishable_9YJGJUYHnmuIErN9lzsCDQ") ||
    trimmed.includes("placeholder")
  ) {
    return DEFAULT_SUPABASE_KEY;
  }
  return trimmed;
}

const rawKey =
  getEnv("VITE_SUPABASE_ANON_KEY") ||
  getEnv("VITE_SUPABASE_PUBLISHABLE_KEY") ||
  DEFAULT_SUPABASE_KEY;

export const supabasePublishableKey = resolveSupabaseKey(rawKey);

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
