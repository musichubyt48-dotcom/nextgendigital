-- ============================================================================
-- Migration: Create Two Separate Tables for Form Submissions
-- 1. contact_messages  -> For "Send Us a Message" (Contact Form)
-- 2. project_inquiries -> For "Start a Project" (Project Questionnaire)
-- ============================================================================

-- ----------------------------------------------------------------------------
-- TABLE 1: contact_messages (Send Us a Message)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_type TEXT,
  investment_preference TEXT,
  project_details TEXT,
  status TEXT NOT NULL DEFAULT 'new',

  CONSTRAINT contact_status_check CHECK (status IN (
    'new', 'contacted', 'interested', 'demo_sent', 'proposal', 'negotiation', 'won', 'lost'
  )),
  CONSTRAINT contact_name_not_empty CHECK (length(trim(name)) > 0),
  CONSTRAINT contact_business_name_not_empty CHECK (length(trim(business_name)) > 0),
  CONSTRAINT contact_email_not_empty CHECK (length(trim(email)) > 0),
  CONSTRAINT contact_phone_not_empty CHECK (length(trim(phone)) > 0)
);

-- Performance Indexes
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON public.contact_messages (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON public.contact_messages (status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON public.contact_messages (email);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies
DROP POLICY IF EXISTS "Allow public contact submissions" ON public.contact_messages;
CREATE POLICY "Allow public contact submissions"
  ON public.contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (status = 'new');

DROP POLICY IF EXISTS "Allow authenticated to read contact submissions" ON public.contact_messages;
CREATE POLICY "Allow authenticated to read contact submissions"
  ON public.contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Allow authenticated to update contact submissions" ON public.contact_messages;
CREATE POLICY "Allow authenticated to update contact submissions"
  ON public.contact_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated to delete contact submissions" ON public.contact_messages;
CREATE POLICY "Allow authenticated to delete contact submissions"
  ON public.contact_messages
  FOR DELETE
  TO authenticated
  USING (true);

COMMENT ON TABLE public.contact_messages IS 'Submissions from "Send Us a Message" contact form';

-- ----------------------------------------------------------------------------
-- TABLE 2: project_inquiries (Start a Project)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.project_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_type TEXT,
  budget_range TEXT,
  timeline TEXT,
  business_integrations TEXT,
  project_details TEXT,
  status TEXT NOT NULL DEFAULT 'new',

  CONSTRAINT project_status_check CHECK (status IN (
    'new', 'contacted', 'interested', 'demo_sent', 'proposal', 'negotiation', 'won', 'lost'
  )),
  CONSTRAINT project_name_not_empty CHECK (length(trim(name)) > 0),
  CONSTRAINT project_business_name_not_empty CHECK (length(trim(business_name)) > 0),
  CONSTRAINT project_email_not_empty CHECK (length(trim(email)) > 0),
  CONSTRAINT project_phone_not_empty CHECK (length(trim(phone)) > 0)
);

-- Performance Indexes
CREATE INDEX IF NOT EXISTS idx_project_inquiries_created_at ON public.project_inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_project_inquiries_status ON public.project_inquiries (status);
CREATE INDEX IF NOT EXISTS idx_project_inquiries_email ON public.project_inquiries (email);

-- Enable RLS
ALTER TABLE public.project_inquiries ENABLE ROW LEVEL SECURITY;

-- RLS Policies
DROP POLICY IF EXISTS "Allow public project inquiries" ON public.project_inquiries;
CREATE POLICY "Allow public project inquiries"
  ON public.project_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (status = 'new');

DROP POLICY IF EXISTS "Allow authenticated to read project inquiries" ON public.project_inquiries;
CREATE POLICY "Allow authenticated to read project inquiries"
  ON public.project_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Allow authenticated to update project inquiries" ON public.project_inquiries;
CREATE POLICY "Allow authenticated to update project inquiries"
  ON public.project_inquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated to delete project inquiries" ON public.project_inquiries;
CREATE POLICY "Allow authenticated to delete project inquiries"
  ON public.project_inquiries
  FOR DELETE
  TO authenticated
  USING (true);

COMMENT ON TABLE public.project_inquiries IS 'Submissions from "Start a Project" inquiry form';
