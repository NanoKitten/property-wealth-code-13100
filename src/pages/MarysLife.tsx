import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import timeline1 from "@/assets/timeline-1.jpg";
import timeline2 from "@/assets/timeline-2.jpg";
import timeline3 from "@/assets/timeline-3.jpg";
import timeline4 from "@/assets/timeline-4.jpg";
import timeline5 from "@/assets/timeline-5.jpg";

const MarysLife = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = contentRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: "-20% 0px -20% 0px",
        }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const timelineData = [
    {
      year: "1985",
      title: "The Beginning",
      image: timeline1,
      description: "This is where Mary's incredible journey began. Growing up with big dreams and even bigger ambitions, she learned early on that success requires dedication, resilience, and an unwavering commitment to growth.",
      bullets: [
        "Started with humble beginnings",
        "Developed a passion for property",
        "Learned the value of hard work",
      ],
    },
    {
      year: "1995",
      title: "First Steps",
      image: timeline2,
      description: "Taking her first bold steps into the world of property investment, Mary faced challenges head-on. Every obstacle became a learning opportunity, shaping her into the expert she is today.",
      bullets: [
        "Made her first property investment",
        "Built lasting relationships",
        "Overcame early challenges",
      ],
    },
    {
      year: "2005",
      title: "Building Momentum",
      image: timeline3,
      description: "As her portfolio grew, so did her expertise. Mary began helping others navigate the complex world of property investment, sharing the knowledge she'd gained through years of experience.",
      bullets: [
        "Expanded her property portfolio",
        "Started mentoring others",
        "Developed proven strategies",
      ],
    },
    {
      year: "2015",
      title: "Major Breakthrough",
      image: timeline4,
      description: "A pivotal moment in Mary's career came when she realized the power of sharing her knowledge at scale. This led to the creation of comprehensive training programs that have helped hundreds of women achieve financial freedom.",
      bullets: [
        "Launched mentoring programs",
        "Reached hundreds of women",
        "Created lasting impact",
      ],
    },
    {
      year: "2025",
      title: "Today",
      image: timeline5,
      description: "Today, Mary continues to empower women worldwide through The Property Wealth Code. Her mission remains clear: to help women achieve financial independence and create wealth through property investment.",
      bullets: [
        "Leading industry expert",
        "Empowering women globally",
        "Building a legacy of success",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Mary's Life Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to becoming a leading property investment expert, 
            discover the milestones that shaped Mary's remarkable career.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[400px_1fr] gap-8 md:gap-16">
            {/* Left Column - Stacking Images */}
            <div className="relative h-full hidden md:block">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="w-[400px] mb-16"
                  style={{
                    position: 'sticky',
                    top: '6rem',
                    zIndex: index + 1,
                  }}
                >
                  <div 
                    className="rounded-lg overflow-hidden transition-all duration-500"
                    style={{
                      boxShadow: index === activeIndex
                        ? '0 25px 50px -12px hsl(var(--primary) / 0.5)' 
                        : '0 10px 30px -5px hsl(var(--primary) / 0.15)',
                      transform: index === activeIndex ? 'scale(1.02)' : 'scale(1)',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  <div 
                    className="mt-4 text-center bg-background/95 backdrop-blur-sm rounded-lg py-3 shadow-md transition-all duration-500"
                    style={{
                      transform: index === activeIndex ? 'scale(1.05)' : 'scale(1)',
                    }}
                  >
                    <span className="text-3xl font-serif font-bold text-primary">
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Timeline Content */}
            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <div 
                  key={index} 
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="relative min-h-[400px] flex flex-col justify-start"
                >
                  {/* Mobile Image */}
                  <div className="md:hidden mb-6 rounded-lg overflow-hidden shadow-elegant">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="mt-4 text-center">
                      <span className="text-2xl font-serif font-bold text-primary">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute -left-6 top-0 hidden md:block">
                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                    {index < timelineData.length - 1 && (
                      <div className="absolute left-1/2 top-4 w-0.5 h-full bg-border -translate-x-1/2"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-soft hover:shadow-elegant transition-shadow duration-300">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {item.description}
                    </p>
                    
                    <div className="space-y-3">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <div key={bulletIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <p className="text-foreground text-base">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Start Your Own Success Story
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Let Mary's journey inspire yours. Begin your path to property wealth today.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:opacity-90 transition-opacity text-white font-semibold px-8 py-6 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarysLife;
