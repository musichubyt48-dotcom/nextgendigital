import { useState, FormEvent } from "react";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle2,
  AlertCircle,
  Send,
  Sparkles,
  Instagram,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { submitContactForm } from "@/lib/leadService";

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const shouldReduceMotion = useReducedMotion();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    projectType: "Business Website",
    budget: "Growth (₹14,999 - ₹24,999)",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(formData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const contactCards = [
    {
      icon: MessageCircle,
      title: "WhatsApp Direct",
      value: "+91 85093 32038",
      sub: "Typical response: Under 15 mins",
      link: "https://wa.me/918509332038?text=Hello%20ZIVDEV,%20I%20would%20like%20to%20discuss%20a%20website%20project.",
      cta: "Chat on WhatsApp",
    },
    {
      icon: Instagram,
      title: "Instagram Official",
      value: "@zivdevofficial",
      sub: "Follow updates, showcases & direct messages",
      link: "https://www.instagram.com/zivdevofficial?stkn=dDVtNHN6OGVrbHZ4",
      cta: "Open Instagram",
    },
    {
      icon: Mail,
      title: "Direct Email",
      value: "zivdevofficial@gmail.com",
      sub: "RFPs, formal briefs & proposals",
      link: "mailto:zivdevofficial@gmail.com",
      cta: "Send an Email",
    },
    {
      icon: Phone,
      title: "Studio Phone",
      value: "+91 85093 32038",
      sub: "Mon–Sat · 9:00 AM – 8:00 PM IST",
      link: "tel:+918509332038",
      cta: "Call Directly",
    },
    {
      icon: MapPin,
      title: "Studio Location",
      value: "West Bengal, India",
      sub: "Serving clients across India & worldwide",
      link: null,
      cta: "Remote-First Studio",
    },
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.businessName.trim()) errs.businessName = "Business name is required";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "Please provide a valid email";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = "Valid contact or WhatsApp number is required";
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = "Please include a brief description (10+ characters)";
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
      const result = await submitContactForm(formData);

      if (result.success) {
        setSubmittedData({ ...formData });
        setIsSuccess(true);
        // Reset form inputs
        setFormData({
          name: "",
          businessName: "",
          email: "",
          phone: "",
          projectType: "Business Website",
          budget: "Growth (₹14,999 - ₹24,999)",
          message: "",
        });
      } else {
        setSubmitError(
          result.message || "Failed to submit. Please try again or reach out on WhatsApp.",
        );
      }
    } catch (err: unknown) {
      const errorObj = err as Error;
      setSubmitError(errorObj.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenWhatsAppBrief = () => {
    const dataToUse = submittedData.name ? submittedData : formData;
    const text = `*New Website Inquiry from Contact Page*\n*Name:* ${dataToUse.name}\n*Business:* ${dataToUse.businessName}\n*Phone:* ${dataToUse.phone}\n*Email:* ${dataToUse.email}\n*Type:* ${dataToUse.projectType}\n*Budget:* ${dataToUse.budget}\n*Brief:* ${dataToUse.message}`;
    window.open(`https://wa.me/918509332038?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#FAF9F6] grain-overlay">
      {/* Subtle moving ambient glows */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [-12, 12, -12],
                y: [-8, 8, -8],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-96 h-96 bg-[#00D285]/10 rounded-full blur-[130px] pointer-events-none -z-10"
      />
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [10, -10, 10],
                y: [12, -12, 12],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#0E3D30]/20 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      <div className="pt-24 pb-12 sm:pt-32 md:pt-40 md:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* ================= LEFT SIDE: Editorial Info & Contact Cards ================= */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-5 sm:space-y-8"
          >
            {/* Small Contact Label / Badge */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#00D285]/10 border border-[#00D285]/25 px-3 sm:px-3.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#00D285] font-bold"
            >
              <span>Direct Studio Communication</span>
            </motion.div>

            {/* Large Heading */}
            <div className="space-y-2 sm:space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase text-[#041510] tracking-tight leading-[1.08]"
              >
                Get In Touch <br />
                <span className="underline decoration-[#00D285] decoration-4 underline-offset-8">
                  With Our Team.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-lg text-[#0A241D]/80 font-sans leading-relaxed pt-1 sm:pt-2"
              >
                Have a new project, booking engine, or custom digital system in mind? Speak directly
                with our lead developers for technical feasibility, honest timelines, and exact
                commercial investment.
              </motion.p>
            </div>

            {/* 4 Contact Information Cards (Staggered Entrance + Hover Feedback) */}
            <div className="space-y-2.5 sm:space-y-3.5 pt-1 sm:pt-2">
              {contactCards.map((card, idx) => {
                const IconComponent = card.icon;
                const CardWrapper = card.link ? "a" : "div";

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.22 + idx * 0.08,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <CardWrapper
                      href={card.link || undefined}
                      target={card.link?.startsWith("http") ? "_blank" : undefined}
                      rel={card.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`block p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-[#00D285]/20 shadow-xs transition-all duration-300 group transform-gpu ${
                        card.link
                          ? "hover:border-[#00D285]/60 hover:shadow-[0_10px_28px_rgba(0,210,133,0.12)] hover:-translate-y-1 cursor-pointer"
                          : ""
                      }`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-[#00D285]/15 flex items-center justify-center text-[#00D285] shrink-0 group-hover:bg-[#00D285] group-hover:text-[#041510] group-hover:scale-105 transition-all duration-300">
                          <IconComponent size={17} />
                        </div>
                        <div className="space-y-0.5 flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono text-[10px] sm:text-xs text-[#00D285] uppercase tracking-wider font-bold">
                              {card.title}
                            </span>
                            {card.link && (
                              <span className="text-[10px] sm:text-[0.6875rem] font-mono font-bold text-[#041510] group-hover:text-[#00D285] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                <span>{card.cta}</span>
                                <ArrowRight size={11} />
                              </span>
                            )}
                          </div>
                          <div className="font-display font-bold text-xs sm:text-base text-[#041510] truncate">
                            {card.value}
                          </div>
                          <div className="font-sans text-[11px] sm:text-xs text-[#0A241D]/70">
                            {card.sub}
                          </div>
                        </div>
                      </div>
                    </CardWrapper>
                  </motion.div>
                );
              })}
            </div>

            {/* Trust Assurances */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="pt-3 sm:pt-4 border-t border-[#00D285]/15 grid grid-cols-2 gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-[#0A241D]/80"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Shield size={14} className="text-[#00D285]" />
                <span>NDA & Confidentiality</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Clock size={14} className="text-[#00D285]" />
                <span>Direct Engineer Review</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE: Large Professional Contact Form ================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 28,
              scale: shouldReduceMotion ? 1 : 0.98,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-7 sm:p-10 md:p-12 border border-[#00D285]/20 shadow-card">
              {isSuccess ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-6"
                >
                  <div className="h-16 w-16 rounded-full bg-[#00D285]/15 border border-[#00D285]/30 flex items-center justify-center text-[#00D285] mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#041510]">
                      Inquiry Received Successfully
                    </h3>
                    <p className="text-sm sm:text-base font-sans text-[#0A241D]/80 max-w-md mx-auto">
                      Thank you,{" "}
                      <strong className="text-[#041510]">
                        {submittedData.name || formData.name}
                      </strong>
                      . Our engineering team will review your project brief and respond within 24
                      business hours.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleOpenWhatsAppBrief}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-[#041510] bg-[#00D285] hover:bg-[#00e599] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,210,133,0.3)]"
                    >
                      <MessageCircle size={15} />
                      <span>Send Summary to WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSuccess(false);
                        setSubmitError(null);
                        setFormData({
                          name: "",
                          businessName: "",
                          email: "",
                          phone: "",
                          projectType: "Business Website",
                          budget: "Growth (₹14,999 - ₹24,999)",
                          message: "",
                        });
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-[#041510] bg-white border border-[#00D285]/30 hover:bg-[#00D285]/10 transition-colors cursor-pointer"
                    >
                      <span>Send Another Inquiry</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Contact Form with Animated Fields */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#00D285]/15 pb-4">
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#041510] tracking-tight">
                      Send Us a Message
                    </h2>
                    <p className="text-xs sm:text-sm font-sans text-[#0A241D]/75 mt-1">
                      Fill out the form below. We provide concrete line-item scopes, not vague
                      estimates.
                    </p>
                  </div>

                  {/* 2-Column Inputs with Staggered Entrance */}
                  <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  >
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#041510] font-bold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Ashutosh Kumar"
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-sans text-[#041510] placeholder-[#0A241D]/40 outline-none transition-all duration-200 ${
                          focusedField === "name"
                            ? "border-[#00D285] ring-4 ring-[#00D285]/15 bg-white shadow-[0_0_15px_rgba(0,210,133,0.1)]"
                            : "border-[#00D285]/20 bg-[#F8FAF9] hover:border-[#00D285]/40"
                        } ${errors.name ? "!border-rose-500 !bg-rose-50/50" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-[0.6875rem] text-rose-600 flex items-center gap-1 font-sans">
                          <AlertCircle size={11} />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Business Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#041510] font-bold">
                        Business / Brand Name *
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        onFocus={() => setFocusedField("businessName")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Sungava Resort, Rawfit Gym, etc."
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-sans text-[#041510] placeholder-[#0A241D]/40 outline-none transition-all duration-200 ${
                          focusedField === "businessName"
                            ? "border-[#00D285] ring-4 ring-[#00D285]/15 bg-white shadow-[0_0_15px_rgba(0,210,133,0.1)]"
                            : "border-[#00D285]/20 bg-[#F8FAF9] hover:border-[#00D285]/40"
                        } ${errors.businessName ? "!border-rose-500 !bg-rose-50/50" : ""}`}
                      />
                      {errors.businessName && (
                        <p className="text-[0.6875rem] text-rose-600 flex items-center gap-1 font-sans">
                          <AlertCircle size={11} />
                          <span>{errors.businessName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#041510] font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="you@yourcompany.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-sans text-[#041510] placeholder-[#0A241D]/40 outline-none transition-all duration-200 ${
                          focusedField === "email"
                            ? "border-[#00D285] ring-4 ring-[#00D285]/15 bg-white shadow-[0_0_15px_rgba(0,210,133,0.1)]"
                            : "border-[#00D285]/20 bg-[#F8FAF9] hover:border-[#00D285]/40"
                        } ${errors.email ? "!border-rose-500 !bg-rose-50/50" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-[0.6875rem] text-rose-600 flex items-center gap-1 font-sans">
                          <AlertCircle size={11} />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#041510] font-bold">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-sans text-[#041510] placeholder-[#0A241D]/40 outline-none transition-all duration-200 ${
                          focusedField === "phone"
                            ? "border-[#00D285] ring-4 ring-[#00D285]/15 bg-white shadow-[0_0_15px_rgba(0,210,133,0.1)]"
                            : "border-[#00D285]/20 bg-[#F8FAF9] hover:border-[#00D285]/40"
                        } ${errors.phone ? "!border-rose-500 !bg-rose-50/50" : ""}`}
                      />
                      {errors.phone && (
                        <p className="text-[0.6875rem] text-rose-600 flex items-center gap-1 font-sans">
                          <AlertCircle size={11} />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#041510] font-bold">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#00D285]/20 bg-[#F8FAF9] text-sm font-sans text-[#041510] outline-none focus:border-[#00D285] focus:ring-4 focus:ring-[#00D285]/10 focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="Business Website">Business Website (Multi-Page)</option>
                        <option value="Landing Page">High-Converting Landing Page</option>
                        <option value="Booking Engine">Direct Booking Engine / Reservation</option>
                        <option value="E-commerce">E-commerce Storefront</option>
                        <option value="Custom Web System">Custom Web System / Portal</option>
                        <option value="Website Maintenance">Website Maintenance & Retainer</option>
                      </select>
                    </div>

                    {/* Budget Tier */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#041510] font-bold">
                        Investment Preference
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#00D285]/20 bg-[#F8FAF9] text-sm font-sans text-[#041510] outline-none focus:border-[#00D285] focus:ring-4 focus:ring-[#00D285]/10 focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="Starter (₹4,999+)">Starter Tier (₹4,999+)</option>
                        <option value="Growth (₹14,999 - ₹24,999)">
                          Growth Tier (₹14,999 - ₹24,999) · Most Popular
                        </option>
                        <option value="Premium (₹24,999+)">Premium Tier (₹24,999+)</option>
                        <option value="Custom Enterprise">Custom Enterprise (₹50,000+)</option>
                      </select>
                    </div>
                  </motion.div>

                  {/* Requirements / Brief */}
                  <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.32, duration: 0.5 }}
                    className="space-y-1.5"
                  >
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#041510] font-bold">
                      Project Brief & Requirements *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us what you want to achieve, target features (e.g. WhatsApp booking, payment gateway), and any reference links..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-sans text-[#041510] placeholder-[#0A241D]/40 outline-none transition-all duration-200 resize-none ${
                        focusedField === "message"
                          ? "border-[#00D285] ring-4 ring-[#00D285]/15 bg-white shadow-[0_0_15px_rgba(0,210,133,0.1)]"
                          : "border-[#00D285]/20 bg-[#F8FAF9] hover:border-[#00D285]/40"
                      } ${errors.message ? "!border-rose-500 !bg-rose-50/50" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-[0.6875rem] text-rose-600 flex items-center gap-1 font-sans">
                        <AlertCircle size={11} />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </motion.div>

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

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.38, duration: 0.5 }}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider uppercase cursor-pointer select-none bg-[#00D285] text-[#041510] border border-[#00D285] hover:bg-[#00e599] hover:border-[#00e599] hover:shadow-[0_8px_25px_rgba(0,210,133,0.35)] hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98] active:translate-y-0 disabled:opacity-50 transform-gpu"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                          <span>Transmitting Brief...</span>
                        </span>
                      ) : (
                        <>
                          <span>SUBMIT PROJECT BRIEF</span>
                          <Send
                            size={15}
                            className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                          />
                        </>
                      )}
                    </button>
                  </motion.div>

                  <div className="pt-2 text-center">
                    <p className="text-[0.6875rem] font-mono text-[#0A241D]/70">
                      Need a formal multi-step scoping breakdown?{" "}
                      <button
                        type="button"
                        onClick={() => onNavigate("/start-a-project")}
                        className="text-[#041510] underline font-bold hover:text-[#00D285] cursor-pointer transition-colors"
                      >
                        Open the Interactive Questionnaire →
                      </button>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
