import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMary from "@/components/AboutMary";
import ThreePillars from "@/components/ThreePillars";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { analytics } from "@/lib/analytics";

const Index = () => {
  useEffect(() => {
    analytics.pageView('/');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ThreePillars />
      <AboutMary />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
