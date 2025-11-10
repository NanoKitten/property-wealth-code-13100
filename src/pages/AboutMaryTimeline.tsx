import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import timeline1 from "@/assets/timeline-1.jpg";
import timeline2 from "@/assets/timeline-2.jpg";
import timeline3 from "@/assets/timeline-3.jpg";
import timeline4 from "@/assets/timeline-4.jpg";
import timeline5 from "@/assets/timeline-5.jpg";

const AboutMaryTimeline = () => {
  const timelineData = [
    {
      year: "2010",
      title: "The Beginning",
      image: timeline1,
      description: "Started my property investment journey with my first rental property. This was the moment that changed everything and set me on the path to financial freedom.",
      bullets: [
        "Purchased first investment property",
        "Learned the fundamentals of property management",
        "Generated first passive income stream",
      ],
    },
    {
      year: "2013",
      title: "Building the Portfolio",
      image: timeline2,
      description: "Expanded to multiple properties, mastering the art of property selection and renovation strategies.",
      bullets: [
        "Acquired 3 additional properties",
        "Developed renovation and value-add strategies",
        "Achieved 25% ROI on portfolio",
      ],
    },
    {
      year: "2016",
      title: "Scaling Success",
      image: timeline3,
      description: "Transitioned to larger commercial investments and luxury residential properties, leveraging equity growth.",
      bullets: [
        "First commercial property acquisition",
        "Portfolio value exceeded £2M",
        "Established property mentorship program",
      ],
    },
    {
      year: "2019",
      title: "Empowering Others",
      image: timeline4,
      description: "Launched coaching programs to help others replicate my success and build generational wealth through property.",
      bullets: [
        "Coached over 100 aspiring investors",
        "Created The Property Wealth Code system",
        "Expanded portfolio to 15+ properties",
      ],
    },
    {
      year: "2024",
      title: "Legacy Building",
      image: timeline5,
      description: "Focused on creating lasting impact through education and helping thousands achieve financial independence.",
      bullets: [
        "Reached 1,000+ students worldwide",
        "Published property investment frameworks",
        "Building a legacy of financial empowerment",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Mary's Journey
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow the timeline of growth, challenges overcome, and success achieved through strategic property investment
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
                  className="relative mb-24 w-[300px] bg-background pb-2"
                  style={{
                    position: 'sticky',
                    top: `${6 + index * 1.5}rem`,
                    zIndex: index + 1,
                  }}
                >
                  <div className="rounded-lg overflow-hidden shadow-elegant">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-3xl font-serif font-bold text-primary">
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Timeline Content */}
            <div className="space-y-24">
              {timelineData.map((item, index) => (
                <div key={index} className="relative min-h-[350px] flex flex-col justify-start">
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

      <Footer />
    </div>
  );
};

export default AboutMaryTimeline;
