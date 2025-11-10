import { Brain, Dna, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ThreePillars = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Regulation of Your Nervous System",
      description: "Learn how your nervous system is intricately linked to your success in property investment. Discover how to regulate stress, emotional responses, and decision-making for optimal performance.",
      link: "/nervous-system"
    },
    {
      icon: Dna,
      title: "Your Generational Bloodline",
      description: "Understand how your ancestral patterns and historical barriers have shaped your relationship with property and wealth. Break free from inherited limitations.",
      link: "/bloodline"
    },
    {
      icon: Lock,
      title: "Your Property Belief System Code",
      description: "Recode your success blueprint by understanding how epigenetics shapes your business behaviors. Rewire inherited patterns and unlock your full potential.",
      link: "/belief-system"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            The 3 Pillars I Help You Unlock
            <span className="text-primary block mt-2">To Build Your Property Empire and Limitless Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
            Traditional property training does not work for the majority of women. NOW I unlock why. Ground breaking work so that all women find their personal success in property and not just a few.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="bg-background border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 space-y-6 h-full flex flex-col">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="space-y-4 flex-grow">
                  <h3 className="text-xl font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <Link to={pillar.link}>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
