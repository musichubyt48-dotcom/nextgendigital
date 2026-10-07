import { useState, useEffect } from "react";
import { Send, CheckCircle2, MessageCircle, AlertCircle, Sparkles, ArrowRight } from "lucide-react";

export interface EnquiryPayload {
  name: string;
  businessName: string;
  businessType: string;
  phone: string;
  email: string;
  projectType: string;
  budget: string;
  requirements: string;
  submittedAt: string;
}

interface EnquiryFormProps {
  initialProjectType?: string;
  initialBudget?: string;
  onSubmitted?: (payload: EnquiryPayload) => void;
}

const businessTypes = [
  "Hospitality & Hotel / Resort",
  "Healthcare Clinic & Dental Practice",
  "Fitness, Gym & Athletics Club",
  "Beauty Salon, Spa & Wellness",
  "Construction & Infrastructure",
  "Professional Services & Consultancy",
  "E-commerce & Retail Brand",
  "Technology & Startup",
  "Other Local / Growing Enterprise",
];

const projectTypes = [
  "Business Corporate Website",
  "High-Impact Landing Page",
  "Reservation & Booking Engine",
  "High-Speed E-commerce Storefront",
  "Custom Web System / Portal",
  "Website Maintenance & Technical Care",
];

const budgetRanges = [
  "Starter Package (₹4,999+)",
  "Growth Package (₹14,999+)",
  "Premium Package (₹24,999+)",
  "Custom Quotation / Enterprise",
];

export function EnquiryForm({ initialProjectType, initialBudget, onSubmitted }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessType: businessTypes[0],
    phone: "",
    email: "",
    projectType: initialProjectType || projectTypes[0],
    budget: initialBudget || budgetRanges[1],
    requirements: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<EnquiryPayload | null>(null);

  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, budget: initialBudget }));
    }
  }, [initialProjectType, initialBudget]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = "Please specify your business name.";
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      newErrors.phone = "Please enter a valid phone or WhatsApp number.";
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      newErrors.email = "Please provide a valid email address.";
    }
    if (!formData.requirements.trim() || formData.requirements.trim().length < 10) {
      newErrors.requirements =
        "Please provide brief details (10+ characters) about your requirements.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    const payload: EnquiryPayload = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    setTimeout(() => {
      setSubmitting(false);
      setSubmittedData(payload);
      if (onSubmitted) onSubmitted(payload);
    }, 400);
  };

  const generateWhatsAppUrl = () => {
    if (!submittedData) return "https://wa.me/918509332038";

    const text = `*New Project Inquiry — JIVDEV*
---------------------------------------
• *Name:* ${submittedData.name}
• *Business:* ${submittedData.businessName} (${submittedData.businessType})
• *Project Type:* ${submittedData.projectType}
• *Budget Range:* ${submittedData.budget}
• *Phone/WhatsApp:* ${submittedData.phone}
• *Email:* ${submittedData.email}

*Project Requirements:*
${submittedData.requirements}
---------------------------------------
Sent via JIVDEV Inquiry Portal`;

    return `https://wa.me/918509332038?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      id="enquiry-form"
      className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-[#00D285]/20 relative shadow-2xl"
    >
      {!submittedData ? (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="border-b border-[#00D285]/15 pb-4 sm:pb-5 mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00D285]" />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#00D285] font-bold">
                Project Intake
              </span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-3xl text-[#041510] mt-1">
              Start Your Project Consultation
            </h3>
            <p className="text-xs sm:text-sm text-[#0A241D]/75 mt-1 font-sans">
              Share your project details. We review your requirements and respond within 24 hours
              with an honest scope and transparent proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Name */}
            <div>
              <label
                htmlFor="client-name"
                className="block text-xs font-mono uppercase tracking-wider text-[#041510] mb-1.5 font-bold"
              >
                Your Full Name <span className="text-[#00D285]">*</span>
              </label>
              <input
                id="client-name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rajesh Sharma"
                className={`w-full bg-[#F8FAF9] border rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-sm text-[#041510] placeholder-[#0A241D]/40 focus:outline-none focus:ring-1 focus:ring-[#00D285] focus:border-[#00D285] transition-all ${
                  errors.name ? "border-red-500/80 bg-red-50" : "border-[#00D285]/20"
                }`}
              />
              {errors.name && (
                <p className="text-[0.75rem] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.name}
                </p>
              )}
            </div>

            {/* Business Name */}
            <div>
              <label
                htmlFor="business-name"
                className="block text-xs font-mono uppercase tracking-wider text-[#041510] mb-1.5 font-bold"
              >
                Business Name <span className="text-[#00D285]">*</span>
              </label>
              <input
                id="business-name"
                type="text"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                placeholder="e.g. Apex Enterprise"
                className={`w-full bg-[#F8FAF9] border rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-sm text-[#041510] placeholder-[#0A241D]/40 focus:outline-none focus:ring-1 focus:ring-[#00D285] focus:border-[#00D285] transition-all ${
                  errors.businessName ? "border-red-500/80 bg-red-50" : "border-[#00D285]/20"
                }`}
              />
              {errors.businessName && (
                <p className="text-[0.75rem] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.businessName}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Business Type */}
            <div>
              <label
                htmlFor="business-type"
                className="block text-xs font-mono uppercase tracking-wider text-[#041510] mb-1.5 font-bold"
              >
                Business Type
              </label>
              <select
                id="business-type"
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                className="w-full bg-[#F8FAF9] border border-[#00D285]/20 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-sm text-[#041510] focus:outline-none focus:ring-1 focus:ring-[#00D285] focus:border-[#00D285] transition-all"
              >
                {businessTypes.map((type, i) => (
                  <option key={i} value={type} className="bg-white text-[#041510]">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Phone / WhatsApp */}
            <div>
              <label
                htmlFor="contact-phone"
                className="block text-xs font-mono uppercase tracking-wider text-[#041510] mb-1.5 font-bold"
              >
                Phone / WhatsApp <span className="text-[#00D285]">*</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className={`w-full bg-[#F8FAF9] border rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-sm text-[#041510] placeholder-[#0A241D]/40 focus:outline-none focus:ring-1 focus:ring-[#00D285] focus:border-[#00D285] transition-all ${
                  errors.phone ? "border-red-500/80 bg-red-50" : "border-[#00D285]/20"
                }`}
              />
              {errors.phone && (
                <p className="text-[0.75rem] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-mono uppercase tracking-wider text-[#041510] mb-1.5 font-bold"
              >
                Email Address <span className="text-[#00D285]">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rajesh@resort.com"
                className={`w-full bg-[#F8FAF9] border rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-sm text-[#041510] placeholder-[#0A241D]/40 focus:outline-none focus:ring-1 focus:ring-[#00D285] focus:border-[#00D285] transition-all ${
                  errors.email ? "border-red-500/80 bg-red-50" : "border-[#00D285]/20"
                }`}
              />
              {errors.email && (
                <p className="text-[0.75rem] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.email}
                </p>
              )}
            </div>

            {/* Project Type */}
            <div>
              <label
                htmlFor="project-type"
                className="block text-xs font-mono uppercase tracking-wider text-[#041510] mb-1.5 font-bold"
              >
                Project Type <span className="text-[#00D285]">*</span>
              </label>
              <select
                id="project-type"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-[#F8FAF9] border border-[#00D285]/20 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-sm text-[#041510] focus:outline-none focus:ring-1 focus:ring-[#00D285] focus:border-[#00D285] transition-all"
              >
                {projectTypes.map((type, i) => (
                  <option key={i} value={type} className="bg-white text-[#041510]">
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label
              htmlFor="budget-range"
              className="block text-xs font-mono uppercase tracking-wider text-[#041510] mb-1.5 font-bold"
            >
              Budget Range
            </label>
            <select
              id="budget-range"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full bg-[#F8FAF9] border border-[#00D285]/20 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-sm text-[#041510] focus:outline-none focus:ring-1 focus:ring-[#00D285] focus:border-[#00D285] transition-all"
            >
              {budgetRanges.map((range, i) => (
                <option key={i} value={range} className="bg-white text-[#041510]">
                  {range}
                </option>
              ))}
            </select>
          </div>

          {/* Requirements */}
          <div>
            <label
              htmlFor="requirements"
              className="block text-xs font-mono uppercase tracking-wider text-[#041510] mb-1.5 font-bold"
            >
              Project Requirements & Goals <span className="text-[#00D285]">*</span>
            </label>
            <textarea
              id="requirements"
              rows={4}
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              placeholder="Tell us what you are looking to build (e.g. 5-page hotel website with direct WhatsApp room booking, existing domain, ready in 2-3 weeks)..."
              className={`w-full bg-[#F8FAF9] border rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-sm text-[#041510] placeholder-[#0A241D]/40 focus:outline-none focus:ring-1 focus:ring-[#00D285] focus:border-[#00D285] transition-all resize-none ${
                errors.requirements ? "border-red-500/80 bg-red-50" : "border-[#00D285]/20"
              }`}
            />
            {errors.requirements && (
              <p className="text-[0.75rem] text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.requirements}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 rounded-full bg-[#00D285] hover:bg-[#00e599] text-[#041510] text-xs font-mono font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,210,133,0.3)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {submitting ? (
              <span>Preparing Consultation Brief...</span>
            ) : (
              <>
                <Send size={14} />
                <span>Submit Project Brief</span>
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="text-center py-8 space-y-6 animate-in fade-in duration-500">
          <div className="h-16 w-16 rounded-full bg-[#00D285]/20 flex items-center justify-center text-[#00D285] mx-auto border border-[#00D285]/30">
            <CheckCircle2 size={32} />
          </div>

          <div className="space-y-2">
            <h3 className="font-display font-bold text-3xl text-[#041510]">Inquiry Received</h3>
            <p className="text-sm text-[#0A241D]/80 max-w-md mx-auto font-sans">
              Thank you, <strong className="text-[#041510]">{submittedData.name}</strong>. We have
              received your brief for{" "}
              <strong className="text-[#041510]">{submittedData.businessName}</strong>.
            </p>
          </div>

          {/* Forward via WhatsApp for instant review */}
          <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#00D285]/30 max-w-md mx-auto space-y-4 text-left">
            <div className="text-xs font-mono uppercase tracking-wider text-[#00D285] font-bold flex items-center gap-2">
              <MessageCircle size={14} />
              <span>Instant WhatsApp Handoff</span>
            </div>
            <p className="text-xs text-[#0A241D]/75 leading-relaxed font-sans">
              Want an immediate response? You can send this completed brief directly to our
              founder's WhatsApp with one click:
            </p>
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#00D285] hover:bg-[#00e599] text-[#041510] text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,210,133,0.3)]"
            >
              <MessageCircle size={15} />
              <span>Forward Brief via WhatsApp</span>
            </a>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setSubmittedData(null);
                setFormData({
                  name: "",
                  businessName: "",
                  businessType: businessTypes[0],
                  phone: "",
                  email: "",
                  projectType: projectTypes[0],
                  budget: budgetRanges[1],
                  requirements: "",
                });
              }}
              className="text-xs font-mono uppercase tracking-wider text-[#0A241D]/60 hover:text-[#00D285] transition-colors cursor-pointer"
            >
              Submit another project brief
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
