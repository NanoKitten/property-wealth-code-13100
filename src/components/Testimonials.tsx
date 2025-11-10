import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "Marketing Director & Mum of 2",
      location: "Manchester",
      rating: 5,
      text: "Mary's Property Code revealed exactly why my previous attempts failed. Within 6 months, I completed my first BTL purchase and it's already producing 8% returns. The personalised approach made all the difference.",
      result: "First property purchased in 6 months"
    },
    {
      name: "Emma Thompson",
      title: "Business Owner",
      location: "Birmingham", 
      rating: 5,
      text: "I was overwhelmed by all the property 'strategies' out there. Mary's test showed me my exact numbers and I finally had clarity. Now I own 3 properties and my portfolio value has grown by £150k.",
      result: "£150k portfolio growth"
    },
    {
      name: "Lisa Chen",
      title: "Teacher & Property Investor", 
      location: "London",
      rating: 5,
      text: "The community support is incredible. Having Mary and other women on the same journey means I never feel alone. My confidence has skyrocketed and so has my property knowledge.",
      result: "Confidence transformed"
    },
    {
      name: "Rebecca Jones",
      title: "HR Manager",
      location: "Leeds",
      rating: 5,
      text: "Mary helped me structure a deal I thought was impossible. Her creative financing advice meant I could purchase without a huge deposit. The property is now worth £40k more than I paid!",
      result: "£40k instant equity"
    },
    {
      name: "Amanda Wilson",
      title: "Freelance Consultant",
      location: "Bristol",
      rating: 5,
      text: "The VIP program changed everything. Mary's hands-on support meant I went from complete beginner to owning 2 properties in 3 months. Her expertise saved me from costly mistakes.",
      result: "2 properties in 3 months"
    },
    {
      name: "Kate Morrison",
      title: "Accountant & Mum",
      location: "Edinburgh",
      rating: 5,
      text: "I loved that Mary understands the family balance. Her strategies worked around my commitments, not against them. I'm building wealth without sacrificing time with my children.",
      result: "Perfect work-life balance"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            Real Women,
            <span className="text-primary block">Real Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how The Property Code has transformed the lives of women just like you—busy professionals and mothers building wealth through strategic property investment.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-background border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Result Highlight */}
                <div className="bg-gradient-blush rounded-lg p-4">
                  <p className="text-blush-foreground font-semibold text-sm">
                    ✨ {testimonial.result}
                  </p>
                </div>

                {/* Author Info */}
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-xs text-primary">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold font-serif text-primary">500+</div>
            <p className="text-sm text-muted-foreground">Women Coached</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold font-serif text-primary">£15M+</div>
            <p className="text-sm text-muted-foreground">Property Purchased</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold font-serif text-primary">94%</div>
            <p className="text-sm text-muted-foreground">Success Rate</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold font-serif text-primary">4.9★</div>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;