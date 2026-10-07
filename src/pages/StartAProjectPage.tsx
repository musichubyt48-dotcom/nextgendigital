import { useState, useEffect, FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Clock,
  Briefcase,
  Layers,
  Send,
  Copy,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { submitProjectForm } from "@/lib/leadService";

interface StartAProjectPageProps {
  initialBundle?: string;
  onNavigate: (path: string) => void;
}

const PROJECT_TYPES = [
  "Business Website",
  "Landing Page",
  "Direct Booking Platform",
  "E-commerce Store",
  "Custom Web System",
  "Website Redesign",
];

const BUDGET_RANGES = [
  {
    id: "Starter",
    label: "Starter (₹4,999 - ₹9,999)",
    tier: "Starter Tier",
    desc: "Single page / high-converting landing page",
  },
  {
    id: "Growth",
    label: "Growth (₹14,999 - ₹24,999)",
    tier: "Growth Tier (Most Popular)",
    desc: "5-8 page bespoke commercial website",
  },
  {
    id: "Premium",
    label: "Premium (₹24,999 - ₹49,999)",
    tier: "Premium Tier",
    desc: "Direct booking engine, e-commerce, or portal",
  },
  {
    id: "Custom",
    label: "Custom Enterprise (₹50,000+)",
    tier: "Custom Engineering",
    desc: "Complex digital operating systems & APIs",
  },
];

const TIMELINE_OPTIONS = [
  { id: "urgent", label: "Urgent (1–2 Weeks)", note: "Fast-track sprint delivery" },
  { id: "standard", label: "Standard (2–4 Weeks)", note: "Balanced design & testing" },
  { id: "flexible", label: "Flexible (1–2 Months)", note: "Phased corporate build" },
  { id: "discovery", label: "Discovery Stage", note: "Exploring scope & architecture" },
];

const AVAILABLE_EXTRA_FEATURES = [
  "Direct WhatsApp Booking",
  "Google Calendar Sync",
  "Payment Gateway (UPI/Razorpay)",
  "Admin Dashboard",
  "SEO & Google Search Console",
  "Interactive BMI/Calculator",
];

export function StartAProjectPage({ initialBundle = "", onNavigate }: StartAProjectPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    contact: "",
    projectType: "Business Website",
    budgetRange: initialBundle || "Growth (₹14,999 - ₹24,999)",
    timeline: "Standard (2–4 Weeks)",
    projectDetails: "",
    extraFeatures: [] as string[],
  });

  const [submittedData, setSubmittedData] = useState(formData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    if (initialBundle) {
      const match = BUDGET_RANGES.find((b) => b.id.toLowerCase() === initialBundle.toLowerCase());
      if (match) {
        setFormData((prev) => ({ ...prev, budgetRange: match.label }));
      }
    }
  }, [initialBundle]);

  const toggleFeature = (feature: string) => {
    setFormData((prev) => {
      const exists = prev.extraFeatures.includes(feature);
      return {
        ...prev,
        extraFeatures: exists
          ? prev.extraFeatures.filter((f) => f !== feature)
          : [...prev.extraFeatures, feature],
      };
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Full name is required";
    }
    if (!formData.businessName.trim()) {
      errs.businessName = "Business or project name is required";
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "A valid business email address is required";
    }
    if (!formData.contact.trim() || formData.contact.replace(/\D/g, "").length < 8) {
      errs.contact = "A valid WhatsApp or phone number is required";
    }
    if (!formData.projectType) {
      errs.projectType = "Please select a project type";
    }
    if (!formData.budgetRange) {
      errs.budgetRange = "Please select your expected budget range";
    }
    if (!formData.timeline) {
      errs.timeline = "Please choose your expected timeline";
    }
    if (!formData.projectDetails.trim() || formData.projectDetails.trim().length < 15) {
      errs.projectDetails = "Please describe your business goals in at least 15 characters";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const result = await submitProjectForm(formData);

      if (result.success) {
        setSubmittedData({ ...formData });

        // Also archive to localStorage as safety backup
        try {
          const stored = JSON.parse(localStorage.getItem("nextgen_client_enquiries") || "[]");
          stored.unshift({
            ...formData,
            submittedAt: new Date().toISOString(),
          });
          localStorage.setItem("nextgen_client_enquiries", JSON.stringify(stored));
        } catch {
          // Storage fallback
        }

        setIsSuccess(true);

        // Reset form inputs
        setFormData({
          name: "",
          businessName: "",
          email: "",
          contact: "",
          projectType: "Business Website",
          budgetRange: initialBundle || "Growth (₹14,999 - ₹24,999)",
          timeline: "Standard (2–4 Weeks)",
          projectDetails: "",
          extraFeatures: [],
        });
      } else {
        setSubmitError(
          result.message ||
            "Failed to submit project brief. Please try again or connect via WhatsApp.",
        );
      }
    } catch (err: unknown) {
      const errorObj = err as Error;
      setSubmitError(errorObj.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppHandoff = () => {
    const dataToUse = submittedData.name ? submittedData : formData;
    const message = `Hello NextGen Digital!%0A%0A*Project Request Submission:*%0A*Name:* ${encodeURIComponent(dataToUse.name)}%0A*Business:* ${encodeURIComponent(dataToUse.businessName)}%0A*Email:* ${encodeURIComponent(dataToUse.email)}%0A*Phone:* ${encodeURIComponent(dataToUse.contact)}%0A*Project Type:* ${encodeURIComponent(dataToUse.projectType)}%0A*Budget Range:* ${encodeURIComponent(dataToUse.budgetRange)}%0A*Timeline:* ${encodeURIComponent(dataToUse.timeline)}%0A*Addons:* ${encodeURIComponent(dataToUse.extraFeatures.join(", ") || "None")}%0A*Details:* ${encodeURIComponent(dataToUse.projectDetails)}%0A%0AReady to discuss the architecture!`;
    return `https://wa.me/918509332038?text=${message}`;
  };

  const handleCopySummary = () => {
    const dataToUse = submittedData.name ? submittedData : formData;
    const text = `NextGen Digital Project Brief\nName: ${dataToUse.name}\nBusiness: ${dataToUse.businessName}\nEmail: ${dataToUse.email}\nPhone: ${dataToUse.contact}\nType: ${dataToUse.projectType}\nBudget: ${dataToUse.budgetRange}\nTimeline: ${dataToUse.timeline}\nDetails: ${dataToUse.projectDetails}`;
    navigator.clipboard.writeText(text);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  return (
    <div className="pt-24 pb-12 sm:py-28 md:py-36 bg-[#FFFFFF] min-h-screen grain-overlay">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#DAF1DE] border border-[#8EB69B]/30 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#0B2B26]">
            <Sparkles size={13} className="text-[#235347]" />
            <span>Start a Project · 24-Hour Scope Response</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-fluid-section font-display font-extrabold uppercase text-[#0B2B26] tracking-tight leading-tight">
            Let's Build Something <br />
            <span className="underline decoration-[#8EB69B] decoration-4 underline-offset-8">
              For Your Business.
            </span>
          </h1>

          <p className="text-xs sm:text-base text-[#235347] max-w-xl mx-auto font-sans leading-relaxed">
            Tell us about your target audience, commercial requirements, and expectations. We review
            every enquiry directly with engineering proposals and transparent milestones.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 md:p-12 border border-[#235347]/15 shadow-card relative">
          {isSuccess ? (
            <div className="text-center py-8 sm:py-12 space-y-6">
              <div className="h-16 w-16 rounded-full bg-[#DAF1DE] border border-[#8EB69B]/30 text-[#0B2B26] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 size={36} className="text-[#235347]" />
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#235347] font-bold block">
                  Enquiry Successfully Logged
                </span>
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B2B26]">
                  Project Request Confirmed
                </h3>
                <p className="text-base text-[#235347] max-w-lg mx-auto font-sans leading-relaxed">
                  Thank you,{" "}
                  <span className="font-bold text-[#0B2B26]">
                    {submittedData.name || formData.name}
                  </span>
                  ! Our technical lead has received the project brief for{" "}
                  <span className="font-bold text-[#0B2B26]">
                    {submittedData.businessName || formData.businessName}
                  </span>{" "}
                  and will reach out via email (
                  <span className="underline">{submittedData.email || formData.email}</span>) and
                  WhatsApp within 24 business hours.
                </p>
              </div>

              {/* Brief Summary Box */}
              <div className="my-6 p-5 rounded-2xl bg-[#DAF1DE]/40 border border-[#235347]/15 text-left max-w-lg mx-auto space-y-2 text-xs font-mono text-[#0B2B26]">
                <div className="flex items-center justify-between pb-2 border-b border-[#235347]/15">
                  <span className="font-bold uppercase tracking-wider text-[#0B2B26]">
                    Submitted Scope Summary
                  </span>
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-1 text-[0.6875rem] font-bold text-[#235347] hover:text-[#0B2B26] cursor-pointer"
                  >
                    {copiedBrief ? (
                      <>
                        <Check size={12} className="text-[#235347]" />
                        <span className="text-[#235347]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy Brief</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 text-[0.75rem] text-[#235347]">
                  <div>
                    <span className="text-[#235347]/70 font-semibold">Type:</span>{" "}
                    {submittedData.projectType || formData.projectType}
                  </div>
                  <div>
                    <span className="text-[#235347]/70 font-semibold">Timeline:</span>{" "}
                    {submittedData.timeline || formData.timeline}
                  </div>
                  <div className="col-span-2">
                    <span className="text-[#235347]/70 font-semibold">Budget:</span>{" "}
                    {submittedData.budgetRange || formData.budgetRange}
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Handoff CTA */}
              <div className="pt-2 max-w-md mx-auto space-y-3">
                <a
                  href={generateWhatsAppHandoff()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#235347] text-[#FFFFFF] hover:bg-[#163832] font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-sm"
                >
                  <MessageCircle size={16} />
                  <span>Send Direct Copy to Lead on WhatsApp</span>
                </a>
                <p className="text-xs font-mono text-[#235347]/70">
                  Prefer real-time chat? Connect with our technical lead directly on WhatsApp.
                </p>
              </div>

              <div className="pt-6 border-t border-[#235347]/15">
                <button
                  type="button"
                  onClick={() => onNavigate("/")}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-[#235347] hover:text-[#0B2B26] hover:underline cursor-pointer"
                >
                  ← Return to NextGen Digital Home
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {/* Row 1: Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="client-name"
                    className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0B2B26]"
                  >
                    Your Name *
                  </label>
                  <div
                    className={`relative rounded-xl transition-all duration-200 ${
                      focusedField === "name"
                        ? "ring-2 ring-[#235347] shadow-sm"
                        : "hover:border-[#235347]/40"
                    }`}
                  >
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={formData.name}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      placeholder="e.g. Anand Sen"
                      className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3.5 rounded-xl border text-base sm:text-sm font-sans text-[#0B2B26] bg-[#DAF1DE]/25 focus:bg-white focus:outline-none transition-all ${
                        errors.name ? "border-red-500 bg-red-50/40" : "border-[#235347]/20"
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.name && (
                      <motion.span
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-red-600 font-mono block flex items-center gap-1"
                      >
                        <AlertCircle size={12} />
                        <span>{errors.name}</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Business Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="business-name"
                    className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0B2B26]"
                  >
                    Business Name *
                  </label>
                  <div
                    className={`relative rounded-xl transition-all duration-200 ${
                      focusedField === "businessName"
                        ? "ring-2 ring-[#235347] shadow-sm"
                        : "hover:border-[#235347]/40"
                    }`}
                  >
                    <input
                      id="business-name"
                      type="text"
                      required
                      value={formData.businessName}
                      onFocus={() => setFocusedField("businessName")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => {
                        setFormData({ ...formData, businessName: e.target.value });
                        if (errors.businessName) setErrors({ ...errors, businessName: "" });
                      }}
                      placeholder="e.g. Himalaya Heights Retreat"
                      className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3.5 rounded-xl border text-base sm:text-sm font-sans text-[#0B2B26] bg-[#DAF1DE]/25 focus:bg-white focus:outline-none transition-all ${
                        errors.businessName ? "border-red-500 bg-red-50/40" : "border-[#235347]/20"
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.businessName && (
                      <motion.span
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-red-600 font-mono block flex items-center gap-1"
                      >
                        <AlertCircle size={12} />
                        <span>{errors.businessName}</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Row 2: Email & Phone / WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="client-email"
                    className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0B2B26]"
                  >
                    Email Address *
                  </label>
                  <div
                    className={`relative rounded-xl transition-all duration-200 ${
                      focusedField === "email"
                        ? "ring-2 ring-[#235347] shadow-sm"
                        : "hover:border-[#235347]/40"
                    }`}
                  >
                    <input
                      id="client-email"
                      type="email"
                      required
                      value={formData.email}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder="e.g. anand@business.com"
                      className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3.5 rounded-xl border text-base sm:text-sm font-sans text-[#0B2B26] bg-[#DAF1DE]/25 focus:bg-white focus:outline-none transition-all ${
                        errors.email ? "border-red-500 bg-red-50/40" : "border-[#235347]/20"
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.email && (
                      <motion.span
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-red-600 font-mono block flex items-center gap-1"
                      >
                        <AlertCircle size={12} />
                        <span>{errors.email}</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="client-contact"
                    className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0B2B26]"
                  >
                    Phone / WhatsApp *
                  </label>
                  <div
                    className={`relative rounded-xl transition-all duration-200 ${
                      focusedField === "contact"
                        ? "ring-2 ring-[#235347] shadow-sm"
                        : "hover:border-[#235347]/40"
                    }`}
                  >
                    <input
                      id="client-contact"
                      type="tel"
                      required
                      value={formData.contact}
                      onFocus={() => setFocusedField("contact")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => {
                        setFormData({ ...formData, contact: e.target.value });
                        if (errors.contact) setErrors({ ...errors, contact: "" });
                      }}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3.5 rounded-xl border text-base sm:text-sm font-sans text-[#0B2B26] bg-[#DAF1DE]/25 focus:bg-white focus:outline-none transition-all ${
                        errors.contact ? "border-red-500 bg-red-50/40" : "border-[#235347]/20"
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.contact && (
                      <motion.span
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-red-600 font-mono block flex items-center gap-1"
                      >
                        <AlertCircle size={12} />
                        <span>{errors.contact}</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Project Type */}
              <div className="space-y-2.5 pt-1">
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0B2B26]">
                  Project Type *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {PROJECT_TYPES.map((type) => {
                    const isSelected = formData.projectType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, projectType: type });
                          if (errors.projectType) setErrors({ ...errors, projectType: "" });
                        }}
                        className={`p-3.5 rounded-xl border text-xs font-mono font-medium text-left transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#235347] text-[#FFFFFF] border-[#235347] shadow-sm font-bold scale-102"
                            : "bg-[#DAF1DE]/30 text-[#0B2B26] border-[#235347]/15 hover:bg-[#DAF1DE]"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
                {errors.projectType && (
                  <span className="text-xs text-red-600 font-mono block">{errors.projectType}</span>
                )}
              </div>

              {/* Budget Range */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0B2B26]">
                    Budget Range *
                  </label>
                  <span className="text-[0.6875rem] font-mono text-[#235347]/70">
                    Transparent milestones
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BUDGET_RANGES.map((range) => {
                    const isSelected = formData.budgetRange.includes(range.id);
                    return (
                      <button
                        key={range.id}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, budgetRange: range.label });
                          if (errors.budgetRange) setErrors({ ...errors, budgetRange: "" });
                        }}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-[#235347] text-[#FFFFFF] border-[#235347] shadow-md ring-2 ring-[#8EB69B]"
                            : "bg-[#DAF1DE]/25 text-[#0B2B26] border-[#235347]/15 hover:bg-[#DAF1DE]/60"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="font-mono text-xs font-bold uppercase tracking-wider">
                            {range.tier}
                          </span>
                          {isSelected && (
                            <span className="h-2 w-2 rounded-full bg-[#8EB69B] animate-ping" />
                          )}
                        </div>
                        <div className="mt-2 space-y-0.5">
                          <span className="font-display font-bold text-base sm:text-lg block">
                            {range.label}
                          </span>
                          <span
                            className={`text-[0.6875rem] block font-sans ${
                              isSelected ? "text-[#DAF1DE]/80" : "text-[#235347]/80"
                            }`}
                          >
                            {range.desc}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {errors.budgetRange && (
                  <span className="text-xs text-red-600 font-mono block">{errors.budgetRange}</span>
                )}
              </div>

              {/* Timeline */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0B2B26] flex items-center gap-1.5">
                    <Clock size={13} className="text-[#235347]" />
                    <span>Timeline *</span>
                  </label>
                  <span className="text-[0.6875rem] font-mono text-[#235347]/70">
                    Expected launch date
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {TIMELINE_OPTIONS.map((opt) => {
                    const isSelected = formData.timeline === opt.label;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, timeline: opt.label });
                          if (errors.timeline) setErrors({ ...errors, timeline: "" });
                        }}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-[#235347] text-[#FFFFFF] border-[#235347] shadow-sm font-bold"
                            : "bg-[#DAF1DE]/25 text-[#0B2B26] border-[#235347]/15 hover:bg-[#DAF1DE]"
                        }`}
                      >
                        <span className="font-mono text-xs font-bold block">{opt.label}</span>
                        <span
                          className={`text-[0.625rem] mt-1 block font-sans ${
                            isSelected ? "text-[#DAF1DE]/80" : "text-[#235347]/70"
                          }`}
                        >
                          {opt.note}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {errors.timeline && (
                  <span className="text-xs text-red-600 font-mono block">{errors.timeline}</span>
                )}
              </div>

              {/* Extra Features / Addons */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0B2B26]">
                    Business Integrations (Optional)
                  </label>
                  <span className="text-[0.6875rem] font-mono text-[#235347]/70">
                    Select any that apply
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {AVAILABLE_EXTRA_FEATURES.map((feat) => {
                    const isSelected = formData.extraFeatures.includes(feat);
                    return (
                      <button
                        key={feat}
                        type="button"
                        onClick={() => toggleFeature(feat)}
                        className={`px-3.5 py-2 rounded-full text-xs font-mono transition-all border cursor-pointer ${
                          isSelected
                            ? "bg-[#235347] text-[#FFFFFF] border-[#235347] shadow-xs"
                            : "bg-[#DAF1DE]/30 text-[#0B2B26] border-[#235347]/15 hover:bg-[#DAF1DE]"
                        }`}
                      >
                        {isSelected ? "✓ " : "+ "}
                        {feat}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Details with Character Counter & Animated Focus */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="project-details"
                    className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0B2B26]"
                  >
                    Project Details *
                  </label>
                  <span className="text-[0.6875rem] font-mono text-[#235347]/70">
                    {formData.projectDetails.length} characters
                  </span>
                </div>
                <div
                  className={`relative rounded-xl transition-all duration-200 ${
                    focusedField === "projectDetails"
                      ? "ring-2 ring-[#235347] shadow-sm"
                      : "hover:border-[#235347]/40"
                  }`}
                >
                  <textarea
                    id="project-details"
                    required
                    rows={4}
                    value={formData.projectDetails}
                    onFocus={() => setFocusedField("projectDetails")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => {
                      setFormData({ ...formData, projectDetails: e.target.value });
                      if (errors.projectDetails) setErrors({ ...errors, projectDetails: "" });
                    }}
                    placeholder="Describe your business model, customer booking flow, reference websites, or special requirements (e.g., 'We operate a 12-suite boutique resort and want direct bookings to replace high OTA commission fees')..."
                    className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3.5 rounded-xl border text-base sm:text-sm font-sans text-[#0B2B26] bg-[#DAF1DE]/25 focus:bg-white focus:outline-none transition-all resize-none ${
                      errors.projectDetails ? "border-red-500 bg-red-50/40" : "border-[#235347]/20"
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {errors.projectDetails && (
                    <motion.span
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-red-600 font-mono block flex items-center gap-1"
                    >
                      <AlertCircle size={12} />
                      <span>{errors.projectDetails}</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Trust Guarantee & Submit Button */}
              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#235347]">
                  <ShieldCheck size={14} className="text-[#235347]" />
                  <span>
                    Zero spam guarantee · Direct engineering consultation · Full asset ownership
                  </span>
                </div>

                {/* Submission Error Banner */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-rose-50 border border-rose-200/80 text-rose-800 text-xs font-sans flex items-start gap-3"
                  >
                    <AlertCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-bold">Submission could not be completed</p>
                      <p className="text-rose-700 leading-relaxed">{submitError}</p>
                    </div>
                  </motion.div>
                )}

                <MagneticButton
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full !py-4.5 text-xs sm:text-sm font-mono tracking-wider font-bold"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-[#FFFFFF] border-t-transparent animate-spin" />
                      <span>Transmitting Project Brief to Studio...</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <Send size={15} />
                      <span>SUBMIT PROJECT BRIEF</span>
                      <ArrowRight size={15} />
                    </span>
                  )}
                </MagneticButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default StartAProjectPage;
