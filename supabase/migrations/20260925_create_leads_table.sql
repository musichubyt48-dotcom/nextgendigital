-- ============================================================================
-- Migration: Create leads table for NextGen Digital
-- Description: Unified lead capture for "Send Us a Message" & "Start a Project"
-- ============================================================================

-- 1. Create leads table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  form_type TEXT NOT NULL,
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
  status TEXT NOT NULL DEFAULT 'new',

  -- Database-level constraints
  CONSTRAINT leads_form_type_check CHECK (form_type IN ('contact', 'start-project')),
  CONSTRAINT leads_status_check CHECK (status IN (
    'new',
    'contacted',
    'interested',
    'demo_sent',
    'proposal',
    'negotiation',
    'won',
    'lost'
  )),
  CONSTRAINT leads_name_not_empty CHECK (length(trim(name)) > 0),
  CONSTRAINT leads_business_name_not_empty CHECK (length(trim(business_name)) > 0),
  CONSTRAINT leads_email_not_empty CHECK (length(trim(email)) > 0),
  CONSTRAINT leads_phone_not_empty CHECK (length(trim(phone)) > 0)
);

-- 2. Performance indexes for lead management & queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads (status);
CREATE INDEX IF NOT EXISTS idx_leads_form_type ON public.leads (form_type);
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads (email);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 4. RLS Security Policies

-- Public / Anonymous submissions:
-- Website visitors can ONLY insert their own new lead.
-- Public users have ZERO select, update, or delete privileges.
DROP POLICY IF EXISTS "Allow public lead submissions" ON public.leads;
CREATE POLICY "Allow public lead submissions"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    form_type IN ('contact', 'start-project')
    AND status = 'new'
  );

-- Authenticated users (future admin/team):
-- Can view, update, and manage leads securely
DROP POLICY IF EXISTS "Allow authenticated users to read leads" ON public.leads;
CREATE POLICY "Allow authenticated users to read leads"
  ON public.leads
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Allow authenticated users to update leads" ON public.leads;
CREATE POLICY "Allow authenticated users to update leads"
  ON public.leads
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated users to delete leads" ON public.leads;
CREATE POLICY "Allow authenticated users to delete leads"
  ON public.leads
  FOR DELETE
  TO authenticated
  USING (true);

-- 5. Table comment for documentation
COMMENT ON TABLE public.leads IS 'Stores lead submissions from NextGen Digital Contact and Project Questionnaire forms';
