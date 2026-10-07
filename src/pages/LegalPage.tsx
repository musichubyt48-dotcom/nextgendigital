import { ArrowLeft, Shield, FileText, RefreshCw, Mail, MessageCircle } from "lucide-react";

interface LegalPageProps {
  type: "privacy" | "terms" | "refund";
  onNavigate: (path: string) => void;
}

export function LegalPage({ type, onNavigate }: LegalPageProps) {
  const content = {
    privacy: {
      tag: "Governance & Data Protection",
      title: "Privacy Policy",
      updated: "Last Updated: 2026",
      icon: Shield,
      sections: [
        {
          heading: "1. Studio Commitment",
          body: "NextGen Digital ('we', 'us', or 'the Studio') respects the confidential nature of client data and enterprise projects. This Privacy Policy outlines our transparent standards for collecting, managing, and protecting information submitted through https://nextgendigital.services/ or direct communication channels.",
        },
        {
          heading: "2. Information We Collect",
          body: "When you initiate a project brief, request a consultation, or communicate via our contact portal or WhatsApp, we collect details necessary to evaluate and execute your digital project. This includes your name, business name, industry type, email address, telephone/WhatsApp number, and technical project requirements.",
        },
        {
          heading: "3. How We Use Information",
          body: "Client information is utilized solely to prepare technical proposals, communicate regarding active sprint milestones, provide post-launch warranty support, and issue official commercial invoices. We do NOT sell, rent, license, or barter your personal or corporate data to any third-party marketing brokers.",
        },
        {
          heading: "4. Project Confidentiality",
          body: "All proprietary business logic, unreleased product catalogs, client credentials, and financial metrics shared during project discovery are treated as strictly confidential. Upon request, we execute a mutual Non-Disclosure Agreement (NDA) prior to reviewing sensitive internal systems.",
        },
        {
          heading: "5. Analytics & Security",
          body: "Our web platforms employ privacy-first analytics to evaluate aggregated technical performance and Core Web Vitals without tracking intrusive personal identity cookies. We enforce HTTPS encryption, secure cloud infrastructure, and access-restricted development environments.",
        },
        {
          heading: "6. Direct Inquiries",
          body: "For privacy questions, data removal requests, or confidentiality queries, contact our principal founder directly at zivdevofficial@gmail.com or via WhatsApp at +91 85093 32038.",
        },
      ],
    },
    terms: {
      tag: "Commercial Terms of Service",
      title: "Terms & Conditions",
      updated: "Last Updated: 2026",
      icon: FileText,
      sections: [
        {
          heading: "1. Engagement Structure",
          body: "JIVDEV provides professional digital design, software engineering, and website development services. Each engagement is governed by an agreed written scope specifying deliverables, timeline estimates, and fixed commercial fees.",
        },
        {
          heading: "2. Payment Milestones",
          body: "Unless specified otherwise in a bespoke contract, standard projects follow a transparent milestone model: a deposit upon project kickoff to allocate dedicated development capacity, and the remaining balance upon final staging approval prior to live domain cutover.",
        },
        {
          heading: "3. Intellectual Property Transfer",
          body: "Upon full settlement of project fees, 100% of the custom design files, frontend source code, stylesheets, and authored digital assets are transferred to the client. JIVDEV retains no proprietary hostage claims, vendor lock-ins, or mandatory recurring royalties.",
        },
        {
          heading: "4. Client Assets & Approvals",
          body: "The client provides brand assets, logos, photographic imagery, and copy. Timely reviews ensure schedules stay on track. Revisions specified in the agreed package are incorporated prior to launch.",
        },
        {
          heading: "5. Post-Launch Warranty",
          body: "Every project includes a complimentary warranty (14 to 60 days depending on package) covering technical bug fixes, responsive alignment adjustments, and security verification at zero additional charge.",
        },
      ],
    },
    refund: {
      tag: "Cancellation & Refund Standards",
      title: "Cancellation & Refund Policy",
      updated: "Last Updated: 2026",
      icon: RefreshCw,
      sections: [
        {
          heading: "1. Fair Policy",
          body: "We maintain clear, fair commercial terms that protect both client investments and dedicated studio engineering hours.",
        },
        {
          heading: "2. Discovery Phase Cancellation",
          body: "If a project is cancelled during the initial discovery and wireframing phase before frontend code development begins, any deposit balance remaining after deducting committed design hours will be promptly refunded.",
        },
        {
          heading: "3. Milestone Approval & Handover",
          body: "Once staging milestones are approved and final production code is deployed to live domains, milestone payments represent completed senior engineering hours and are non-refundable.",
        },
        {
          heading: "4. Satisfaction Guarantee",
          body: "We work closely with you through iterative staging reviews to ensure the final digital platform matches your approved design brief and functional requirements before deployment.",
        },
      ],
    },
  }[type];

  const Icon = content.icon;

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#041510] pt-24 pb-12 sm:pt-32 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-12">
        <button
          type="button"
          onClick={() => onNavigate("/")}
          className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#00D285] hover:text-[#00B873] transition-colors cursor-pointer"
        >
          <ArrowLeft size={13} />
          <span>Return Home</span>
        </button>

        <div className="space-y-2.5 sm:space-y-4 pb-6 sm:pb-8 border-b border-[#00D285]/15">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#00D285]/10 border border-[#00D285]/25 px-3 sm:px-3.5 py-1 text-[10px] sm:text-[0.6875rem] font-mono uppercase tracking-wider text-[#00D285] font-semibold">
            <Icon size={12} className="text-[#00D285]" />
            <span>{content.tag}</span>
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-[#041510] uppercase tracking-tight leading-tight">
            {content.title}
          </h1>
          <p className="text-[11px] sm:text-xs font-mono text-[#0A241D]/60">{content.updated}</p>
        </div>

        <div className="space-y-4 sm:space-y-8">
          {content.sections.map((sec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-9 border border-[#00D285]/20 shadow-xs space-y-2 sm:space-y-3"
            >
              <h2 className="font-display font-bold text-lg sm:text-2xl text-[#041510]">
                {sec.heading}
              </h2>
              <p className="text-xs sm:text-sm text-[#0A241D]/80 leading-relaxed font-sans">
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-8 text-center text-xs font-mono text-[#0A241D]/70">
          Questions regarding these terms? Contact us at{" "}
          <a
            href="mailto:zivdevofficial@gmail.com"
            className="text-[#00D285] font-bold underline hover:text-[#041510]"
          >
            zivdevofficial@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default LegalPage;
