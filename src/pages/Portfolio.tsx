import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PortfolioHeader from "@/components/PortfolioHeader";
import PropertyCarousel from "@/components/PropertyCarousel";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <PortfolioHeader />
        <PropertyCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
