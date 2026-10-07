import { useState, useEffect } from "react";
import { Navbar } from "@/components/studio/Navbar";
import { Footer } from "@/components/studio/Footer";
import { WhatsAppButton } from "@/components/studio/WhatsAppButton";
import { StructuredData } from "@/components/portfolio/StructuredData";
import { PageTransition } from "@/components/motion/PageTransition";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { WorkPage } from "@/pages/WorkPage";
import { CaseStudyPage } from "@/pages/CaseStudyPage";
import { PricingPage } from "@/pages/PricingPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { StartAProjectPage } from "@/pages/StartAProjectPage";
import { LegalPage } from "@/pages/LegalPage";
import { ProjectItem } from "@/data/projectsData";
import { LogoIntro } from "@/components/studio/LogoIntro";

export default function App() {
  const getInitialPath = () => {
    if (typeof window === "undefined") return "/";
    const path = window.location.pathname;
    const hash = window.location.hash;

    // Support both direct path and hash fallback (e.g. /#services or /services)
    if (path && path !== "/") return path;
    if (hash && hash.startsWith("#/")) return hash.replace("#", "");
    return "/";
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath());

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (hash && hash.startsWith("#/")) {
        setCurrentPath(hash.replace("#", ""));
      } else {
        setCurrentPath(path || "/");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path.startsWith("#")) {
      // Internal section scroll on home page
      if (currentPath !== "/") {
        window.history.pushState({}, "", "/");
        setCurrentPath("/");
        setTimeout(() => {
          const el = document.getElementById(path.replace("#", ""));
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById(path.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenCaseStudy = (project: ProjectItem) => {
    navigate(`/work/${project.slug}`);
  };

  // Render Page by Route
  const renderCurrentPage = () => {
    // Dynamic Case Study Route: /work/:project
    if (currentPath.startsWith("/work/")) {
      const slug = currentPath.replace("/work/", "").split("?")[0];
      if (slug) {
        return (
          <CaseStudyPage
            slug={slug}
            onNavigate={navigate}
            onOpenNextProject={handleOpenCaseStudy}
          />
        );
      }
    }

    const cleanPath = currentPath.split("?")[0].split("#")[0];

    // Extract query parameters if any (e.g. ?bundle=Growth, ?service=business-websites)
    let queryBundle = "";
    let queryService = "";
    if (currentPath.includes("?")) {
      const params = new URLSearchParams(currentPath.split("?")[1]);
      queryBundle = params.get("bundle") || "";
      queryService = params.get("service") || "";
    }
    if (!queryService && currentPath.includes("#")) {
      queryService = currentPath.split("#")[1] || "";
    }

    switch (cleanPath) {
      case "/services":
        return <ServicesPage onNavigate={navigate} initialService={queryService} />;
      case "/work":
        return <WorkPage onOpenCaseStudy={handleOpenCaseStudy} onNavigate={navigate} />;
      case "/pricing":
        return <PricingPage onNavigate={navigate} />;
      case "/about":
        return <AboutPage onNavigate={navigate} />;
      case "/contact":
        return <ContactPage onNavigate={navigate} />;
      case "/start-a-project":
        return <StartAProjectPage initialBundle={queryBundle} onNavigate={navigate} />;
      case "/privacy-policy":
        return <LegalPage type="privacy" onNavigate={navigate} />;
      case "/terms-and-conditions":
        return <LegalPage type="terms" onNavigate={navigate} />;
      case "/cancellation-refund":
        return <LegalPage type="refund" onNavigate={navigate} />;
      case "/":
      default:
        return <HomePage onNavigate={navigate} onOpenCaseStudy={handleOpenCaseStudy} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0A241D] flex flex-col selection:bg-[#00D285] selection:text-[#041510] font-sans antialiased">
      <LogoIntro />
      <StructuredData />
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      <main className="flex-1">
        <PageTransition key={currentPath.split("?")[0]}>{renderCurrentPage()}</PageTransition>
      </main>
      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </div>
  );
}
