-- ==============================================================================
-- SUPABASE SCHEMA FOR ZIVDEV / NEXTGEN DIGITAL
-- Run this in the Supabase Dashboard -> SQL Editor (Click "New query" -> "Run")
-- Project: https://ydodkggouwxfywsrvbat.supabase.co
-- ==============================================================================

-- 1. Table for Contact Form ("Send Us a Message" on /contact)
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_type TEXT,
  investment_preference TEXT,
  project_details TEXT,
  status TEXT NOT NULL DEFAULT 'new'
);

-- 2. Table for "Start a Project" Questionnaire Form (/start-project)
CREATE TABLE IF NOT EXISTS public.project_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_type TEXT,
  budget_range TEXT,
  timeline TEXT,
  business_integrations TEXT,
  project_details TEXT,
  status TEXT NOT NULL DEFAULT 'new'
);

-- 3. Unified leads table (captures submissions from all forms in one centralized place)
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  form_type TEXT NOT NULL, -- 'contact' or 'start-project'
  name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_type TEXT,
  investment_preference TEXT,
  budget_range TEXT,
  timeline TEXT,
  business_integrations TEXT,
  project_details TEXT,
  status TEXT NOT NULL DEFAULT 'new'
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous and authenticated users to submit inquiries (INSERT)
DROP POLICY IF EXISTS "Allow anon inserts to contact_messages" ON public.contact_messages;
CREATE POLICY "Allow anon inserts to contact_messages"
  ON public.contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow anon inserts to project_inquiries" ON public.project_inquiries;
CREATE POLICY "Allow anon inserts to project_inquiries"
  ON public.project_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow anon inserts to leads" ON public.leads;
CREATE POLICY "Allow anon inserts to leads"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated dashboard users to read submissions
DROP POLICY IF EXISTS "Allow authenticated read on contact_messages" ON public.contact_messages;
CREATE POLICY "Allow authenticated read on contact_messages"
  ON public.contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Allow authenticated read on project_inquiries" ON public.project_inquiries;
CREATE POLICY "Allow authenticated read on project_inquiries"
  ON public.project_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Allow authenticated read on leads" ON public.leads;
CREATE POLICY "Allow authenticated read on leads"
  ON public.leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Indexes for lightning-fast queries
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON public.contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_project_inquiries_created_at ON public.project_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
