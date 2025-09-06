import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { WorkExperienceSection } from "./components/WorkExperienceSection";
import { WhyHireMeSection } from "./components/WhyHireMeSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CallToActionSection } from "./components/CallToActionSection";
import { MovingTextSection } from "./components/MovingTextSection";

import { FooterSection } from "./components/FooterSection";

export default function App() {
  // Initialize Lenis smooth scrolling
  useEffect(() => {
    async function initLenis() {
      const Lenis = (await import("lenis")).default;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }

    initLenis();
  }, []);
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Navigation */}
      <section
        id="home"
        className="relative min-h-screen bg-white overflow-hidden"
      >
        <div className="absolute inset-0">
          {/* Background decorations */}
          <div
            className="absolute right-0 top-[146px] w-[873px] h-[873px] bg-center bg-cover bg-no-repeat opacity-30 lg:left-[954px]"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg viewBox='0 0 873 873' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='436.5' cy='436.5' r='436.5' fill='%23FEB273'/%3E%3C/svg%3E')",
            }}
          />
          <div
            className="absolute left-[327px] top-[21px] w-[251px] h-[251px] bg-center bg-cover bg-no-repeat blur-[2.5px] opacity-20 rotate-[213.6deg] lg:left-[527px]"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg viewBox='0 0 251 251' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='125.5' cy='125.5' r='125.5' fill='%23FEB273'/%3E%3C/svg%3E')",
            }}
          />
          <div
            className="absolute left-[-284px] top-0 w-[590px] h-[594px] bg-center bg-cover bg-no-repeat blur-[1.5px] opacity-15 rotate-[151.7deg] lg:left-[-184px]"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg viewBox='0 0 590 594' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='295' cy='297' r='295' fill='%23FEB273'/%3E%3C/svg%3E')",
            }}
          />
        </div>

        <div className="relative z-10">
          <Navigation />
          <HeroSection />
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <WhyHireMeSection />
      </section>

      {/* Services Section */}
      <section id="service">
        <ServicesSection />
      </section>

      {/* Resume Section */}
      <section id="resume">
        <WorkExperienceSection />
      </section>

      {/* Project Section */}
      <section id="project">
        <PortfolioSection />
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action Section */}
      <CallToActionSection />

      {/* Moving Text Section */}
      <div className="py-12 lg:py-24">
        <MovingTextSection />
      </div>

      {/* Contact Section */}
      <section id="contact">
        <FooterSection />
      </section>
    </div>
  );
}
