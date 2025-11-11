import { Award, Heart, TrendingUp, Users, Mic, BookOpen, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import virtualCoaching from "@/assets/mary-virtual-coaching.jpg";
import keynoteSpeaking from "@/assets/mary-keynote-speaking.jpg";
import workshopEvent from "@/assets/mary-workshop-event.jpg";

const AboutMary = () => {
  const [speakingLayout, setSpeakingLayout] = useState<"gallery-grid" | "hero-split" | "carousel-showcase" | "magazine-style" | "timeline-story">("gallery-grid");

  const achievements = [
    {
      icon: TrendingUp,
      title: "£2M+ Portfolio",
      description: "Built from scratch while raising a family"
    },
    {
      icon: Users,
      title: "500+ Women Coached",
      description: "Helped achieve financial freedom through property"
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Property investment and business expertise"
    },
    {
      icon: Heart,
      title: "Family-First Approach",
      description: "Wealth building without sacrificing what matters"
    }
  ];

  const speakingPhotos = [
    { src: virtualCoaching, caption: "Virtual Coaching Sessions" },
    { src: keynoteSpeaking, caption: "Keynote Speaking Events" },
    { src: workshopEvent, caption: "Workshop & Training" }
  ];

  const renderGalleryGrid = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
          Speaking Engagements & Mentoring
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Empowering women to achieve financial freedom through property investment
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {speakingPhotos.map((photo, index) => (
          <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <img src={photo.src} alt={photo.caption} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground">{photo.caption}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-background border-0 shadow-soft">
          <CardContent className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
              <Mic className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Keynote Speaking</h3>
            <p className="text-muted-foreground">Inspiring talks on property investment and wealth building</p>
          </CardContent>
        </Card>
        <Card className="bg-background border-0 shadow-soft">
          <CardContent className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Workshops</h3>
            <p className="text-muted-foreground">Hands-on property investment workshops and masterclasses</p>
          </CardContent>
        </Card>
        <Card className="bg-background border-0 shadow-soft">
          <CardContent className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
              <Lightbulb className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">1-on-1 Mentoring</h3>
            <p className="text-muted-foreground">Personalized guidance for your property portfolio</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8">
          Book Mary to Speak
        </Button>
      </div>
    </div>
  );

  const renderHeroSplit = () => (
    <div className="space-y-12">
      <div className="relative overflow-hidden rounded-3xl h-[600px]">
        <img src={keynoteSpeaking} alt="Mary speaking" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent flex items-center">
          <div className="max-w-2xl p-12 text-primary-foreground space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold">Transform Your Financial Future</h2>
            <p className="text-xl opacity-90">Join hundreds of women who have built wealth through property investment with Mary's guidance</p>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-0 font-semibold px-8">
              Book Mary to Speak
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-96 rounded-2xl overflow-hidden group">
          <img src={virtualCoaching} alt="Virtual coaching" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
            <div className="text-white space-y-2">
              <h3 className="text-2xl font-bold">Virtual Coaching</h3>
              <p className="opacity-90">One-on-one mentoring from anywhere in the world</p>
            </div>
          </div>
        </div>
        <div className="relative h-96 rounded-2xl overflow-hidden group">
          <img src={workshopEvent} alt="Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
            <div className="text-white space-y-2">
              <h3 className="text-2xl font-bold">Interactive Workshops</h3>
              <p className="opacity-90">Engaging events that transform mindsets and strategies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCarouselShowcase = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Mary in Action</h2>
        <p className="text-xl text-muted-foreground">Inspiring women at events worldwide</p>
      </div>

      <div className="relative max-w-full">
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide max-w-full">
          {speakingPhotos.map((photo, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-2/3 snap-center">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                  <h3 className="text-white text-3xl font-bold mb-2">{photo.caption}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 space-y-6">
        <h3 className="text-2xl font-bold text-foreground text-center">What You'll Experience</h3>
        <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
          <div className="flex items-start gap-3">
            <span className="text-primary text-2xl">✓</span>
            <span>Real-world property investment strategies</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary text-2xl">✓</span>
            <span>Overcoming limiting beliefs about wealth</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary text-2xl">✓</span>
            <span>Work-life balance while building wealth</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary text-2xl">✓</span>
            <span>Actionable steps to start your journey</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-12 py-6 text-lg">
          Invite Mary to Your Event
        </Button>
      </div>
    </div>
  );

  const renderMagazineStyle = () => (
    <div className="space-y-16">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[700px] rounded-2xl overflow-hidden shadow-2xl">
          <img src={keynoteSpeaking} alt="Mary keynote" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6">
          <p className="text-primary font-bold uppercase tracking-wider text-sm">Featured Speaker</p>
          <h2 className="text-5xl md:text-6xl font-serif italic text-foreground leading-tight">
            Empowering Women Through Property
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Mary combines her 15+ years of property investment experience with deep understanding of the psychological barriers women face when building wealth.
          </p>
          <div className="flex gap-4">
            <div className="flex-1 bg-primary/10 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground mt-2">Women Coached</p>
            </div>
            <div className="flex-1 bg-primary/10 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground mt-2">Speaking Events</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-3xl font-serif font-bold text-foreground">Speaking Services</h3>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p className="leading-relaxed">
              From intimate workshops to large conference keynotes, Mary delivers powerful, transformative content that resonates with audiences seeking financial independence through property investment.
            </p>
            <p className="leading-relaxed">
              Her unique approach combines practical investment strategies with mindset work, helping women overcome generational beliefs about money and wealth.
            </p>
          </div>
        </div>
        <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
          <img src={virtualCoaching} alt="Virtual coaching" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
        <img src={workshopEvent} alt="Workshop" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-transparent flex items-center">
          <div className="max-w-xl p-12 text-primary-foreground">
            <h3 className="text-4xl font-bold mb-4">Ready to Transform Your Event?</h3>
            <p className="text-lg opacity-90 mb-6">Book Mary for your next conference, workshop, or corporate event.</p>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-0 font-semibold">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTimelineStory = () => (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Mary's Speaking Journey</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          From virtual sessions to international stages
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary to-accent hidden md:block"></div>

        <div className="space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:text-right space-y-4">
              <p className="text-primary font-bold text-sm uppercase tracking-wide">Virtual Coaching Era</p>
              <h3 className="text-3xl font-bold text-foreground">One-on-One Transformations</h3>
              <p className="text-lg text-muted-foreground">
                Started with intimate virtual coaching sessions, helping women worldwide overcome their fears and build property portfolios from the comfort of their homes.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img src={virtualCoaching} alt="Virtual coaching" className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                2020+
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 space-y-4">
              <p className="text-primary font-bold text-sm uppercase tracking-wide">Keynote Speaker</p>
              <h3 className="text-3xl font-bold text-foreground">Inspiring Thousands</h3>
              <p className="text-lg text-muted-foreground">
                Evolved to delivering powerful keynote presentations at major events, sharing the message that women deserve financial freedom and the tools to achieve it.
              </p>
            </div>
            <div className="md:order-1 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img src={keynoteSpeaking} alt="Keynote speaking" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-accent text-primary-foreground px-4 py-2 rounded-full font-bold">
                2021+
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:text-right space-y-4">
              <p className="text-primary font-bold text-sm uppercase tracking-wide">Interactive Workshops</p>
              <h3 className="text-3xl font-bold text-foreground">Hands-On Learning</h3>
              <p className="text-lg text-muted-foreground">
                Now facilitating immersive workshops where participants gain practical strategies and form supportive communities of like-minded property entrepreneurs.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img src={workshopEvent} alt="Workshop" className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                2022+
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary via-primary to-accent rounded-3xl p-12 text-center space-y-6 text-primary-foreground">
        <h3 className="text-4xl font-bold">Be Part of the Next Chapter</h3>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Invite Mary to speak at your event and inspire your audience to build generational wealth
        </p>
        <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-0 font-semibold px-12">
          Book Mary Now
        </Button>
      </div>
    </div>
  );

  const renderSpeakingLayout = () => {
    switch (speakingLayout) {
      case "gallery-grid":
        return renderGalleryGrid();
      case "hero-split":
        return renderHeroSplit();
      case "carousel-showcase":
        return renderCarouselShowcase();
      case "magazine-style":
        return renderMagazineStyle();
      case "timeline-story":
        return renderTimelineStory();
      default:
        return renderGalleryGrid();
    }
  };

  return (
    <section id="about" className="py-20 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="about">About Mary</TabsTrigger>
            <TabsTrigger value="speaking">Speaking & Mentoring</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-primary font-medium tracking-wide uppercase text-sm">
                    Meet Your Guide
                  </p>
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground leading-tight">
                    I'm Mary Cullen,
                    <span className="text-primary block">Your Property Wealth Mentor</span>
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Mary's passion for property was born when she was very young and would accompany her Mother who was a cleaner of a stately home near where Mary grew up in Ireland. By the time she was 15 she was doing her own bedroom interior designs but she wasn't encouraged to pursue this talent for interiors so instead spent the first part of her working life working in computers.
                    </p>
                    <p>
                      In her mid twenties now living in the UK she took a leap of faith and followed her dream to travel the world as a solo traveller. She hoped she would last 3 months in actual fact she lasted 3 years and became a avid traveller recognizing at the heart of being a woman is travel and freedom the one thing generationally woman have had to sacrifice.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold px-8"
                  >
                    Learn My Story
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
                    See My Portfolio
                  </Button>
                </div>
              </div>

              {/* Right Achievements - Desktop Grid */}
              <div className="hidden md:grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="bg-background border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
                        <achievement.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Right Achievements - Mobile Carousel */}
              <div className="md:hidden max-w-full overflow-hidden">
                <Carousel
                  opts={{
                    align: "start",
                    loop: false,
                  }}
                  className="w-full max-w-full"
                >
                  <CarouselContent className="ml-0 max-w-full">
                    {achievements.map((achievement, index) => (
                      <CarouselItem key={index} className="pl-2 basis-[85vw] md:basis-[75%] max-w-[85vw]">
                        <Card className="bg-background border-0 shadow-soft text-center h-full">
                          <CardContent className="p-6 space-y-4">
                            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
                              <achievement.icon className="h-8 w-8 text-primary-foreground" />
                            </div>
                            <div className="space-y-2">
                              <h3 className="text-lg font-semibold text-foreground">
                                {achievement.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {achievement.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <p className="text-center text-xs text-muted-foreground mt-3">← Swipe to see more →</p>
              </div>
            </div>

          </TabsContent>

          <TabsContent value="speaking">
            <div className="mb-8 flex justify-center">
              <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg p-4">
                <p className="text-xs text-muted-foreground mb-2 font-medium">Layout Style:</p>
                <Select value={speakingLayout} onValueChange={(value) => setSpeakingLayout(value as typeof speakingLayout)}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border z-50">
                    <SelectItem value="gallery-grid">Gallery Grid</SelectItem>
                    <SelectItem value="hero-split">Hero Split</SelectItem>
                    <SelectItem value="carousel-showcase">Carousel Showcase</SelectItem>
                    <SelectItem value="magazine-style">Magazine Style</SelectItem>
                    <SelectItem value="timeline-story">Timeline Story</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              {renderSpeakingLayout()}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AboutMary;
