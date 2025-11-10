import { ArrowRight, Calendar, MessageCircle, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      category: "Start Here",
      badge: "Most Popular",
      badgeColor: "bg-primary text-primary-foreground",
      services: [
        {
          icon: Calendar,
          name: "Property Strategy Call",
          price: "£35",
          duration: "45 minutes",
          description: "Get clarity on your property goals and discover if The Property Code is right for you. No pressure, just valuable insights.",
          features: [
            "Current situation analysis",
            "Goal-setting session",
            "Market insights", 
            "Next steps roadmap"
          ],
          cta: "Book Your Call"
        },
        {
          icon: Zap,
          name: "Property Code Test",
          price: "£250",
          duration: "Delivered in 24hrs",
          description: "Discover your unique 9-number Property Code with a comprehensive personalised strategy report.",
          features: [
            "Complete Property Code calculation",
            "15-page personalised report",
            "Investment strategy recommendations",
            "Risk assessment & timeline"
          ],
          cta: "Take The Test"
        }
      ]
    },
    {
      category: "Ongoing Support",
      services: [
        {
          icon: Users,
          name: "Property Wealth Community",
          price: "£97",
          duration: "per month",
          description: "Join our exclusive community of women building wealth through property. Monthly training, Q&As, and peer support.",
          features: [
            "Monthly group coaching calls",
            "Private community access",
            "Deal analysis support",
            "Resource library access"
          ],
          cta: "Join Community"
        },
        {
          icon: MessageCircle,
          name: "Creative Strategy Session",
          price: "£600",
          duration: "90 minutes",
          description: "Intensive one-on-one session to solve specific property challenges and unlock creative financing solutions.",
          features: [
            "Problem-solving focus",
            "Creative financing options",
            "Deal structuring advice",
            "Action plan creation"
          ],
          cta: "Book Session"
        }
      ]
    },
    {
      category: "Premium Coaching",
      badge: "Transformation Guaranteed",
      badgeColor: "bg-blush text-blush-foreground",
      services: [
        {
          icon: Users,
          name: "Monthly Mentorship",
          price: "£1,000",
          duration: "per month",
          description: "Regular one-on-one coaching to fast-track your property journey with personalised guidance and accountability.",
          features: [
            "2x monthly 1:1 calls",
            "WhatsApp support access",
            "Deal review & analysis",
            "Strategy refinement"
          ],
          cta: "Apply Now"
        },
        {
          icon: Zap,
          name: "VIP 3-Month Intensive",
          price: "£5,000",
          duration: "3 months",
          description: "Complete transformation program. From strategy to first deal completion with Mary's hands-on guidance.",
          features: [
            "Weekly 1:1 coaching calls",
            "Direct access to Mary",
            "Deal sourcing support",
            "Completion guarantee*"
          ],
          cta: "Apply for VIP"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Choose Your Path
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            Work With Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're just starting out or ready to accelerate your property journey, there's a path designed for your current situation and goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-serif font-semibold text-foreground">
                  {category.category}
                </h3>
                {category.badge && (
                  <Badge className={category.badgeColor}>
                    {category.badge}
                  </Badge>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {category.services.map((service, index) => (
                  <Card key={index} className="relative overflow-hidden bg-background border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group">
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{service.price}</div>
                          <div className="text-sm text-muted-foreground">{service.duration}</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold"
                        size="lg"
                      >
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 text-center bg-gradient-hero rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            💯 My Promise to You
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm so confident in The Property Code system that I offer a satisfaction guarantee on all coaching programs. If you don't see clear progress within 30 days, I'll work with you until you do—at no extra cost.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;