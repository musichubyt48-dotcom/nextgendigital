export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type LeadFormType = "contact" | "start-project";

export type LeadStatus =
  "new" | "contacted" | "interested" | "demo_sent" | "proposal" | "negotiation" | "won" | "lost";

export interface Database {
  public: {
    Tables: {
      // 1. Unified Table
      leads: {
        Row: {
          id: string;
          created_at: string;
          form_type: LeadFormType;
          name: string;
          business_name: string;
          email: string;
          phone: string;
          project_type: string | null;
          investment_preference: string | null;
          budget_range: string | null;
          timeline: string | null;
          business_integrations: string | null;
          project_details: string | null;
          status: LeadStatus;
        };
        Insert: {
          id?: string;
          created_at?: string;
          form_type: LeadFormType;
          name: string;
          business_name: string;
          email: string;
          phone: string;
          project_type?: string | null;
          investment_preference?: string | null;
          budget_range?: string | null;
          timeline?: string | null;
          business_integrations?: string | null;
          project_details?: string | null;
          status?: LeadStatus;
        };
        Update: {
          id?: string;
          created_at?: string;
          form_type?: LeadFormType;
          name?: string;
          business_name?: string;
          email?: string;
          phone?: string;
          project_type?: string | null;
          investment_preference?: string | null;
          budget_range?: string | null;
          timeline?: string | null;
          business_integrations?: string | null;
          project_details?: string | null;
          status?: LeadStatus;
        };
      };

      // 2. Dedicated Table for "Send Us a Message" (Contact Form)
      contact_messages: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          business_name: string;
          email: string;
          phone: string;
          project_type: string | null;
          investment_preference: string | null;
          project_details: string | null;
          status: LeadStatus;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          business_name: string;
          email: string;
          phone: string;
          project_type?: string | null;
          investment_preference?: string | null;
          project_details?: string | null;
          status?: LeadStatus;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          business_name?: string;
          email?: string;
          phone?: string;
          project_type?: string | null;
          investment_preference?: string | null;
          project_details?: string | null;
          status?: LeadStatus;
        };
      };

      // 3. Dedicated Table for "Start a Project" (Project Form)
      project_inquiries: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          business_name: string;
          email: string;
          phone: string;
          project_type: string | null;
          budget_range: string | null;
          timeline: string | null;
          business_integrations: string | null;
          project_details: string | null;
          status: LeadStatus;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          business_name: string;
          email: string;
          phone: string;
          project_type?: string | null;
          budget_range?: string | null;
          timeline?: string | null;
          business_integrations?: string | null;
          project_details?: string | null;
          status?: LeadStatus;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          business_name?: string;
          email?: string;
          phone?: string;
          project_type?: string | null;
          budget_range?: string | null;
          timeline?: string | null;
          business_integrations?: string | null;
          project_details?: string | null;
          status?: LeadStatus;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      lead_form_type: LeadFormType;
      lead_status: LeadStatus;
    };
  };
}
