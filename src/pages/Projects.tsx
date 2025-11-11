import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectsHeader from "@/components/ProjectsHeader";
import PropertyCarousel from "@/components/PropertyCarousel";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-16">
        <ProjectsHeader styleVariant="gradient" />
        <PropertyCarousel styleVariant="gradient" />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
