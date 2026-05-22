import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { WhyChoose } from "@/components/portfolio/WhyChoose";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nextgen Digital — Premium Websites for Local Businesses" },
      {
        name: "description",
        content:
          "Nextgen Digital by Ashutosh Kumar Srivastava. Premium, AI-powered websites that help local businesses build trust, attract customers, and grow online.",
      },
      { property: "og:title", content: "Nextgen Digital — Premium Websites for Local Businesses" },
      {
        property: "og:description",
        content:
          "Premium, AI-powered websites that turn local businesses into powerful online brands.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
