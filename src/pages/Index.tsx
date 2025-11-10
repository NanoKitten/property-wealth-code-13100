import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMary from "@/components/AboutMary";
import PropertyCarousel from "@/components/PropertyCarousel";
import ThreePillars from "@/components/ThreePillars";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ThreePillars />
      <AboutMary />
      <PropertyCarousel />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
