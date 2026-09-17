import { Hero } from "@/components/home/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { SelectedWork } from "@/components/projects/SelectedWork";
import { EngineeringSection } from "@/components/home/EngineeringSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { AboutSection } from "@/components/home/AboutSection";
import { CallToActionSection } from "@/components/home/CallToActionSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <main id="home" className="min-h-screen overflow-hidden bg-ink text-primary-foreground">
      <Navbar />
      <Hero />
      <SelectedWork />
      <EngineeringSection />
      <ExperienceSection />
      <AboutSection />
      <CallToActionSection />
      <ContactSection />
    </main>
  );
}
