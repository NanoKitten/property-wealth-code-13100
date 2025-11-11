import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectsHeader from "@/components/ProjectsHeader";
import PropertyCarousel from "@/components/PropertyCarousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type StyleVariant = "minimalist" | "bold" | "elegant" | "corporate" | "luxury" | "cards" | "gradient" | "timeline" | "stats";

const Projects = () => {
  const [selectedStyle, setSelectedStyle] = useState<StyleVariant>("gradient");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Style Selector - Fixed Position */}
      <div className="fixed top-20 right-6 z-50 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg p-4">
        <p className="text-xs text-muted-foreground mb-2 font-medium">Projects Style:</p>
        <Select value={selectedStyle} onValueChange={(value) => setSelectedStyle(value as StyleVariant)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-background border-border z-50">
            <SelectItem value="minimalist">Minimalist</SelectItem>
            <SelectItem value="bold">Bold & Vibrant</SelectItem>
            <SelectItem value="elegant">Elegant & Classic</SelectItem>
            <SelectItem value="corporate">Modern Corporate</SelectItem>
            <SelectItem value="luxury">Luxury Magazine</SelectItem>
            <SelectItem value="cards">Dynamic Cards</SelectItem>
            <SelectItem value="gradient">Gradient Hero</SelectItem>
            <SelectItem value="timeline">Timeline Story</SelectItem>
            <SelectItem value="stats">Stats Focused</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="pt-16">
        <ProjectsHeader styleVariant={selectedStyle} />
        <PropertyCarousel styleVariant={selectedStyle} />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
