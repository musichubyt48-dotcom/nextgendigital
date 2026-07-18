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
import { StructuredData } from "@/components/portfolio/StructuredData";
import {
  Process,
  Industries,
  Technologies,
  Benefits,
  ClientExperience,
  FutureSupport,
  FAQ,
} from "@/components/portfolio/SeoSections";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Skills />
        <Technologies />
        <Projects />
        <Industries />
        <WhyChoose />
        <Benefits />
        <Testimonials />
        <ClientExperience />
        <FutureSupport />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
