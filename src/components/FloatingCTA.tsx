import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <Button
        size="lg"
        className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold px-6 py-3 md:px-8 md:py-4 shadow-elegant shadow-primary/30 animate-pulse hover:animate-none"
        asChild
      >
        <a
          href="https://v22-the-property-wealth-code-next-best-move-plan-806236894411.us-west1.run.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Take the Quiz
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingCTA;
