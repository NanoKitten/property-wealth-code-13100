import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Kinsella",
      title: "Jan 2025",
      location: "",
      rating: 5,
      text: "The Property Code experience was remarkable. I never thought I would gain so much value from the 2 sessions. Mary was excellent in her explanations of my identity. From 8 or so questions, she understood my primary personality, my high stress state and growth personality. Using Mary's technics, I am already trying to become more aware and neutralize the impact of my primary personality and high stress state to allow fast-track growth in my property business and the rest of life. Mary is an extremely supportive mentor and has a vast array of experience.",
      result: "Life-changing insights"
    },
    {
      name: "Le Elliott",
      title: "Vortee 2024",
      location: "",
      rating: 5,
      text: "Just want to say the BIGGEST shout out to the Marvelous Miraculous Mary Cullen, thank you thank you I've jumped 2 leagues beyond my comfort zone",
      result: "Beyond comfort zone"
    },
    {
      name: "Mary N.",
      title: "",
      location: "London",
      rating: 5,
      text: "I have taken a couple of sessions with Mary and I must say it has been an eye opening, thought provoking awakening. It has been more than I expected. If you don't know why you're stuck or not flowing in business/life, Mary's sessions WILL wake you up to the why. She is lovely and I would highly recommend her, if you want to make a change.",
      result: "Eye-opening awakening"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
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

        {/* Featured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <div className="lg:col-span-2">
            <Card className="bg-gradient-hero border-0 shadow-elegant h-full">
              <CardContent className="p-6 md:p-12 space-y-4 md:space-y-6">
                <Quote className="h-8 w-8 md:h-12 md:w-12 text-primary/20" />
                <p className="text-base md:text-xl text-foreground dark:text-black leading-relaxed italic">
                  "{testimonials[0].text}"
                </p>
                <div className="bg-primary/10 rounded-xl p-4 md:p-6 inline-block">
                  <p className="font-bold text-primary text-sm md:text-lg">✨ {testimonials[0].result}</p>
                </div>
                <div className="border-t border-border pt-4 md:pt-6">
                  <h4 className="text-xl md:text-2xl font-semibold text-foreground dark:text-black">{testimonials[0].name}</h4>
                  <p className="text-sm md:text-base text-foreground/70 dark:text-black/70">{testimonials[0].title}</p>
                  <p className="text-xs md:text-sm text-primary">{testimonials[0].location}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-3 md:space-y-4">
            {testimonials.slice(1, 4).map((testimonial, index) => (
              <Card key={index} className="bg-background border shadow-soft hover:shadow-elegant transition-all">
                <CardContent className="p-4 md:p-6 space-y-2 md:space-y-3">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground italic line-clamp-3">"{testimonial.text}"</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <h5 className="font-semibold text-foreground text-xs md:text-sm">{testimonial.name}</h5>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <p className="text-xs font-semibold text-primary">{testimonial.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-center">
          <div className="space-y-1 md:space-y-2">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-primary">500+</div>
            <p className="text-xs md:text-sm text-muted-foreground">Women Coached</p>
          </div>
          <div className="space-y-1 md:space-y-2">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-primary">£15M+</div>
            <p className="text-xs md:text-sm text-muted-foreground">Property Purchased</p>
          </div>
          <div className="space-y-1 md:space-y-2">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-primary">94%</div>
            <p className="text-xs md:text-sm text-muted-foreground">Success Rate</p>
          </div>
          <div className="space-y-1 md:space-y-2">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-primary">4.9★</div>
            <p className="text-xs md:text-sm text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;