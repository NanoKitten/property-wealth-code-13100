import { Award, Heart, TrendingUp, Users, Mic, BookOpen, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutMary = () => {
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

  return (
    <section id="about" className="py-20 bg-secondary/30">
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

              {/* Right Achievements Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            </div>

            {/* Featured In Section */}
            <div className="mt-20 text-center">
              <p className="text-sm text-muted-foreground mb-8">As featured in</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-lg font-semibold text-muted-foreground">Property Investor Today</div>
                <div className="text-lg font-semibold text-muted-foreground">Women's Business Daily</div>
                <div className="text-lg font-semibold text-muted-foreground">Financial Freedom Magazine</div>
                <div className="text-lg font-semibold text-muted-foreground">Property Hub Podcast</div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="speaking">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                  Speaking Engagements & Mentoring
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Empowering women to achieve financial freedom through property investment and personal development
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-background border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <Mic className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Keynote Speaking</h3>
                    <p className="text-muted-foreground">
                      Inspiring talks on property investment, wealth building, and women's financial empowerment
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Workshops & Training</h3>
                    <p className="text-muted-foreground">
                      Hands-on property investment workshops and wealth creation masterclasses
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <Lightbulb className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">1-on-1 Mentoring</h3>
                    <p className="text-muted-foreground">
                      Personalized guidance to help you build your property portfolio with confidence
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-soft space-y-6">
                <h3 className="text-2xl font-semibold text-foreground text-center">Speaking Topics</h3>
                <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Building wealth through strategic property investment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Overcoming limiting beliefs around money</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Balancing family life and business success</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Women's financial empowerment and independence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>The psychology of wealth creation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Creating passive income through property</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold px-8"
                >
                  Book Mary to Speak
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AboutMary;