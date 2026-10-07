-- ============================================================================
-- Migration: Two Dedicated Tables for NextGen Digital
-- 1. contact_messages (Send Us a Message)
-- 2. project_inquiries (Start a Project)
-- ============================================================================

-- ============================================================================
-- TABLE 1: contact_messages ("Send Us a Message")
-- ============================================================================
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

  -- Database-level constraints
  CONSTRAINT contact_status_check CHECK (status IN (
    'new', 'contacted', 'interested', 'demo_sent', 'proposal', 'negotiation', 'won', 'lost'
  )),
  CONSTRAINT contact_name_not_empty CHECK (length(trim(name)) > 0),
  CONSTRAINT contact_business_name_not_empty CHECK (length(trim(business_name)) > 0),
  CONSTRAINT contact_email_not_empty CHECK (length(trim(email)) > 0),
  CONSTRAINT contact_phone_not_empty CHECK (length(trim(phone)) > 0)
);

-- Indexes for Table 1
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON public.contact_messages (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_status ON public.contact_messages (status);
CREATE INDEX IF NOT EXISTS idx_contact_email ON public.contact_messages (email);

-- RLS for Table 1
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public contact submissions" ON public.contact_messages;
CREATE POLICY "Allow public contact submissions"
  ON public.contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (status = 'new');

DROP POLICY IF EXISTS "Allow authenticated read contact" ON public.contact_messages;
CREATE POLICY "Allow authenticated read contact"
  ON public.contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Allow authenticated update contact" ON public.contact_messages;
CREATE POLICY "Allow authenticated update contact"
  ON public.contact_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated delete contact" ON public.contact_messages;
CREATE POLICY "Allow authenticated delete contact"
  ON public.contact_messages
  FOR DELETE
  TO authenticated
  USING (true);

COMMENT ON TABLE public.contact_messages IS 'Submissions from Send Us a Message form';


-- ============================================================================
-- TABLE 2: project_inquiries ("Start a Project")
-- ============================================================================
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

  -- Database-level constraints
  CONSTRAINT project_status_check CHECK (status IN (
    'new', 'contacted', 'interested', 'demo_sent', 'proposal', 'negotiation', 'won', 'lost'
  )),
  CONSTRAINT project_name_not_empty CHECK (length(trim(name)) > 0),
  CONSTRAINT project_business_name_not_empty CHECK (length(trim(business_name)) > 0),
  CONSTRAINT project_email_not_empty CHECK (length(trim(email)) > 0),
  CONSTRAINT project_phone_not_empty CHECK (length(trim(phone)) > 0)
);

-- Indexes for Table 2
CREATE INDEX IF NOT EXISTS idx_project_created_at ON public.project_inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_project_status ON public.project_inquiries (status);
CREATE INDEX IF NOT EXISTS idx_project_email ON public.project_inquiries (email);

-- RLS for Table 2
ALTER TABLE public.project_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public project submissions" ON public.project_inquiries;
CREATE POLICY "Allow public project submissions"
  ON public.project_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (status = 'new');

DROP POLICY IF EXISTS "Allow authenticated read project" ON public.project_inquiries;
CREATE POLICY "Allow authenticated read project"
  ON public.project_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Allow authenticated update project" ON public.project_inquiries;
CREATE POLICY "Allow authenticated update project"
  ON public.project_inquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated delete project" ON public.project_inquiries;
CREATE POLICY "Allow authenticated delete project"
  ON public.project_inquiries
  FOR DELETE
  TO authenticated
  USING (true);

COMMENT ON TABLE public.project_inquiries IS 'Submissions from Start a Project questionnaire form';
