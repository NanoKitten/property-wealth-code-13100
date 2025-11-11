import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import irishHeritage from "@/assets/irish-heritage.jpg";
import youngMary from "@/assets/young-mary.jpg";
import maryCreativeDesign from "@/assets/timeline/mary-creative-design.jpg";
import maryFamilyTemple from "@/assets/mary-family-temple.jpg";
import timeline5 from "@/assets/timeline-5.jpg";
import scaffoldingExterior from "@/assets/projects/before/scaffolding-exterior.jpg";
import marySpeakingResilience from "@/assets/timeline/mary-speaking-resilience.jpg";
import timeline3 from "@/assets/timeline-3.jpg";
import maryZoomCoaching from "@/assets/timeline/mary-zoom-coaching.jpg";
import maryWomenCommunity from "@/assets/timeline/mary-women-community.jpg";

const AboutMaryTimeline = () => {
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
      year: "1980s - Rural Ireland",
      title: "The Dreamer in the National Park",
      image: irishHeritage,
      description: "Mary grew up in a national park in Ireland, not far from Dublin in Southern Ireland. She was brought up catholic and found as the youngest of 3, she struggled to fit in and would spend much time outdoors, day dreaming and imaging her life as very different.",
      bullets: [
        "Youngest of three in a strict Catholic family",
        "Found solace in nature and daydreaming",
        "Imagined a life far different from her surroundings",
      ],
    },
    {
      year: "Childhood - The Spark",
      title: "Derry Bawn - Where Dreams Took Shape",
      image: youngMary,
      description: "As a young girl she would accompany her Mother to clean a stately home in particular called Derry Bawn, where she fell in love with big houses and period features and would imagine herself living there and be scolded by her mom to get on and do some work.",
      bullets: [
        "Cleaned stately homes alongside her mother",
        "Fell deeply in love with period features and grand architecture",
        "Imagined herself living in these beautiful spaces",
      ],
    },
    {
      year: "Age 15-19",
      title: "Breaking Free from Restrictions",
      image: maryCreativeDesign,
      description: "By 15 Mary was designing bedrooms and loved art and crafts but her restrictive religious upbringing didn't entertain such carefree ways and she left at 19 to go work in England, working as a computer technician.",
      bullets: [
        "Discovered passion for design and creativity at 15",
        "Restrictive upbringing couldn't contain her dreams",
        "Made brave decision to leave Ireland at 19",
      ],
    },
    {
      year: "20s - 3 Years of Freedom",
      title: "Solo Journey Around the World",
      image: maryFamilyTemple,
      description: "Mary has always found that the one thing woman crave is freedom which is why her heart was aligned in her 20's to work hard and save for what turned into 3 years of travel solo travel around the world.",
      bullets: [
        "Recognized women's deep craving for freedom",
        "Worked hard and saved deliberately",
        "Spent 3 years traveling solo around the world",
      ],
    },
    {
      year: "Early 30s - City of London",
      title: "Trading Soul for Security",
      image: timeline5,
      description: "By her early 30's Mary was back in the corporate world of The City of London trading her time and soul for ruthless deadlines and corporate targets. She knew that freedom for Woman meant having your own business, creating your own success and having the flexibility to raise a family in the future.",
      bullets: [
        "Returned to ruthless corporate deadlines",
        "Realized time and soul were being traded away",
        "Understood true freedom comes from entrepreneurship",
      ],
    },
    {
      year: "2005-2006 - Montenegro",
      title: "Taking the Ultimate Leap of Faith",
      image: scaffoldingExterior,
      description: "Living the dream and creating your own reality came knocking again when Mary took the brave decision to leave all security behind and take a leap of faith by moving to the undiscovered Montenegro with little money, no prior property experience to create a dream life abroad 'doing property' and living in the Sun. Within less than one year Mary had bought a Palace in 2006 with two bags of cash raised from investors in the UK and a dream to renovate this historical building.",
      bullets: [
        "Left all security behind with little money",
        "Moved to Montenegro with no property experience",
        "Bought a Palace in 2006 with investor funding",
      ],
    },
    {
      year: "2007-2014 - Survival Mode",
      title: "When Everything Fell Apart",
      image: marySpeakingResilience,
      description: "But with success comes the ability to sustain yourself when the unexpected happens, the greatest property crash the world has ever experienced hit in 2007 decimating the market and the renovations. Holding your nerve in property is crucial and focusing always on the end result is what sustained Mary through this period and many more trials to come in this 'wild west new frontier' over the next 8 years.",
      bullets: [
        "2007 global crash decimated the market",
        "Held her nerve through 8 years of trials",
        "Learned resilience in the 'wild west' frontier",
      ],
    },
    {
      year: "2010s - Impossible Choices",
      title: "Standing Up to Corruption",
      image: timeline3,
      description: "Building a multi-million euro property business didn't come without its risk and unfortunately Mary eventually experienced violence by the Mafia and her commitment to stay true to her values of not paying bribery resulted in it making it impossible for her to continue to develop and live here with her young family and corruption pressure.",
      bullets: [
        "Built multi-million euro business despite risks",
        "Experienced mafia violence and bribery demands",
        "Chose values over safety - had to leave with young family",
      ],
    },
    {
      year: "2015-2018 - UK Return",
      title: "The Long Road Back",
      image: maryZoomCoaching,
      description: "In 2015 she arrived back in the UK pretty much to start again. Digging in and working many jobs whilst working for free for property developers was a long and at times very hard road back. The juggle of raising kids and travelling back and forth to places like Liverpool was not easy sometimes a 300 mile round trip in less than 24 hours. But the resilience of Woman is one of their superpowers and in early 2019 Mary returned full-time to property.",
      bullets: [
        "Returned to UK to start from scratch in 2015",
        "Worked multiple jobs plus free work for developers",
        "Juggled 300-mile round trips while raising kids",
      ],
    },
    {
      year: "2019-Present - Legacy",
      title: "Building Empire & Empowering Women",
      image: maryWomenCommunity,
      description: "Building again this time buy to lets, commercial conversion, serviced accommodation and HMO's created a wealth of knowledge and experience that resulted in Mary becoming a property Mentor in 2021. Today Mary runs a very successful strategic partnership business helping landlords turn properties into high yielding cash flowing units. Mary is a Mom to two teenagers and runs The Property Code mentoring business which now specialises in Woman's Mentoring and Support. Her wish is that all woman have the ability to create freedom through property and business enterprises so they can raise families, travel and use their creative talents to create what she calls 'A woman's world on her terms'.",
      bullets: [
        "Built portfolio: BTL, commercial, SA, HMOs",
        "Became property mentor in 2021",
        "Mom of two teenagers creating legacy for other women",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8">
            Mary's Journey
          </h1>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 border border-primary/20 shadow-elegant">
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-center leading-relaxed text-foreground">
              "YOU ARE AMAZING. YOUR STORY IS SO UNIQUE TO YOU. I HOPE MY STORY ENCOURAGES YOU TO WRITE NEW CHAPTERS AND MAKE THEM WHAT YOU REALLY WANT."
            </blockquote>
            <p className="text-center mt-6 text-lg text-muted-foreground font-medium">
              — Mary Cullen
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Intro */}
      <section className="pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            From a dreaming girl in rural Ireland to surviving mafia violence in Montenegro, to building a property empire while raising teenagers—this is the unfiltered journey of how one woman created freedom on her own terms.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-16">
            {/* Left Column - Stacking Images */}
            <div className="relative h-full hidden md:block">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="w-[300px] mb-16"
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
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <div 
                    className="mt-3 text-center bg-background/95 backdrop-blur-sm rounded-lg py-2 shadow-md transition-all duration-500"
                    style={{
                      transform: index === activeIndex ? 'scale(1.05)' : 'scale(1)',
                    }}
                  >
                    <span className="text-2xl font-serif font-bold text-primary">
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
                  className="relative min-h-[350px] flex flex-col justify-start"
                >
                  {/* Mobile Image */}
                  <div className="md:hidden mb-6 rounded-lg overflow-hidden shadow-elegant">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-square object-cover"
                    />
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
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider md:hidden">
                      {item.year}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 mt-2 md:mt-0">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="space-y-3">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <div key={bulletIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <p className="text-foreground">{bullet}</p>
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
            Ready to Write Your Own Story?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            If Mary can build a property empire from scratch—twice—while raising a family and surviving impossible odds, imagine what you can achieve with the right guidance.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:opacity-90 transition-opacity text-white font-semibold px-8 py-6 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Property Journey
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutMaryTimeline;
