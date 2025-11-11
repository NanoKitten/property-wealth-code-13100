import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectsHeader from "@/components/ProjectsHeader";
import PropertyCarousel from "@/components/PropertyCarousel";
import ProjectStyleSelector, { LayoutVariant } from "@/components/projects/ProjectStyleSelector";
import TransformationStory from "@/components/projects/TransformationStory";
import { useState } from "react";

const Projects = () => {
  const [layout, setLayout] = useState<LayoutVariant>("journey");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-16">
        <ProjectsHeader styleVariant="gradient" />
        <ProjectStyleSelector value={layout} onValueChange={setLayout} />
        <TransformationStory variant={layout} />
        <PropertyCarousel styleVariant="gradient" />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
