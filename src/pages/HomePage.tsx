import { HeroSection } from "@/components/studio/HeroSection";
import { StudioMarquee } from "@/components/studio/StudioMarquee";
import { WhoWeAreSection } from "@/components/studio/WhoWeAreSection";
import { WhatWeDoSection } from "@/components/studio/WhatWeDoSection";
import { SelectedWorkSection } from "@/components/studio/SelectedWorkSection";
import { HowWeWorkSection } from "@/components/studio/HowWeWorkSection";
import { PricingSection } from "@/components/studio/PricingSection";
import { FaqSection } from "@/components/studio/FaqSection";
import { FinalCtaSection } from "@/components/studio/FinalCtaSection";
import { ProjectItem } from "@/data/projectsData";

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export function HomePage({ onNavigate, onOpenCaseStudy }: HomePageProps) {
  const handleStartProject = () => {
    onNavigate("/start-a-project");
  };

  const handleExploreWork = () => {
    onNavigate("/work");
  };

  const handleExploreAbout = () => {
    onNavigate("/about");
  };

  const handleExploreServices = () => {
    onNavigate("/services");
  };

  const handleExplorePricing = () => {
    onNavigate("/pricing");
  };

  const handleSelectPlan = (planName: string, budgetRange: string) => {
    // Navigate to start-a-project with preselected bundle
    onNavigate(`/start-a-project?bundle=${encodeURIComponent(planName)}`);
  };

  return (
    <div className="w-full flex flex-col bg-[#FAF9F6]">
      {/* 1. Hero */}
      <HeroSection onStartProject={handleStartProject} onViewWork={handleExploreWork} />

      {/* Subtle Marquee */}
      <StudioMarquee />

      {/* 2. Who We Are */}
      <WhoWeAreSection onExploreAbout={handleExploreAbout} />

      {/* 3. What We Do */}
      <WhatWeDoSection
        onExploreServices={handleExploreServices}
        onSelectService={(service) =>
          onNavigate(`/services#${service.toLowerCase().replace(/\s+/g, "-")}`)
        }
      />

      {/* 4. Selected Work (Sticky Project Stacking) */}
      <SelectedWorkSection onOpenCaseStudy={onOpenCaseStudy} onViewAllWork={handleExploreWork} />

      {/* 5. How We Work */}
      <HowWeWorkSection />

      {/* 6. Pricing */}
      <PricingSection onSelectPlan={handleSelectPlan} onExploreFullPricing={handleExplorePricing} />

      {/* 7. FAQ */}
      <FaqSection onContactClick={() => onNavigate("/contact")} />

      {/* 8. Final CTA */}
      <FinalCtaSection onStartProject={handleStartProject} onExploreWork={handleExploreWork} />
    </div>
  );
}
