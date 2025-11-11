import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type LayoutVariant = "journey" | "sidebyside" | "grid" | "carousel" | "fullstory";

interface ProjectStyleSelectorProps {
  value: LayoutVariant;
  onValueChange: (value: LayoutVariant) => void;
}

const ProjectStyleSelector = ({ value, onValueChange }: ProjectStyleSelectorProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-12 relative z-30 mb-16">
      <div className="flex justify-center">
        <div className="bg-background/95 backdrop-blur-sm border border-border rounded-xl px-6 py-4 shadow-lg">
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground font-medium">View Style:</span>
            <Select value={value} onValueChange={(val) => onValueChange(val as LayoutVariant)}>
              <SelectTrigger className="w-64 border-primary/20 focus:ring-primary/30">
                <SelectValue placeholder="Choose viewing style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="journey">📖 Journey View</SelectItem>
                <SelectItem value="sidebyside">↔️ Side-by-Side</SelectItem>
                <SelectItem value="grid">⊞ Grid Gallery</SelectItem>
                <SelectItem value="carousel">🎠 Carousel Story</SelectItem>
                <SelectItem value="fullstory">📰 Full Story</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStyleSelector;
