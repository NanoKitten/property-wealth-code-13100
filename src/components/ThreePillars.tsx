import { Brain, Dna, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const ThreePillars = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Regulating the Female Nervous System",
      description: "81% of UK women felt overwhelmed by stress in the past year. Chronic dysregulated nervous systems make it difficult to create your entrepreneurial property business. Learn techniques to regulate your nervous system and oxytocin levels—creating a calming platform to build from, without stress and burnout.",
      link: "/nervous-system"
    },
    {
      icon: Dna,
      title: "The Generational Curse Blocking Your Property Growth",
      description: "No-one is talking about this apart from ME. I was raised in a traditional Irish family where boys inherited wealth and property. Knowing my place was engrained from my generational female bloodline. This work finally released me, and now I want to do the same for all women experiencing this—normally without even realising.",
      link: "/bloodline"
    },
    {
      icon: Lock,
      title: "Your Property Personality Code",
      description: "Property educators portray a lavish lifestyle but have a completely different fundamental belief system. Following them isn't guaranteed if you have money blocks, success blocks, or fear of standing out. I've created a way to test your fundamental belief code and identify what personality you're showing up as in property.",
      link: "/belief-system"
    }
  ];

  return (
    <section className="pt-20 pb-0 md:pb-20 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            The 3 Pillars I Help You Unlock
            <span className="text-primary block mt-2">To Build Your Property Empire and Limitless Success</span>
          </h2>
          <div className="text-lg text-muted-foreground max-w-4xl mx-auto mt-6 space-y-4">
            <p>
              Traditional property training does not work for the majority of women. NOW I unlock why. Ground breaking work so that all women find their personal success in property and not just a few. I go to such a deeper level to unlock what is really holding you back and believe me NO-ONE is working with women in property at this level.
            </p>
            <p>
              Property training is surface level but this gives you the foundations you have to have in place in order to succeed and not just succeed but to do so with ease and flow, no more grind, no more hustle just true alignment and results.
            </p>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
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

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {pillars.map((pillar, index) => (
                <CarouselItem key={index} className="pl-2 basis-[85%] max-w-[85vw]">
                  <Card className="bg-background border-0 shadow-soft h-full">
                    <CardContent className="p-8 space-y-6 h-full flex flex-col">
                      <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center">
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
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <p className="text-center text-xs text-muted-foreground mt-4">← Swipe to see more →</p>
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
