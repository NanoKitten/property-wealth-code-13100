import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [layout, setLayout] = useState<string>("grid");
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
      name: "Mary N.",
      title: "",
      location: "London",
      rating: 5,
      text: "I have taken a couple of sessions with Mary and I must say it has been an eye opening, thought provoking awakening. It has been more than I expected. If you don't know why you're stuck or not flowing in business/life, Mary's sessions WILL wake you up to the why. She is lovely and I would highly recommend her, if you want to make a change.",
      result: "Eye-opening awakening"
    }
  ];

  // Layout 1: Grid (Default)
  const renderGridLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="relative bg-background border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group">
          <CardContent className="p-4 md:p-8 space-y-4 md:space-y-6">
            <div className="flex justify-between items-start">
              <Quote className="h-6 w-6 md:h-8 md:w-8 text-primary/30" />
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current" />
                ))}
              </div>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
              "{testimonial.text}"
            </p>
            <div className="bg-gradient-blush rounded-lg p-3 md:p-4">
              <p className="text-blush-foreground font-semibold text-xs md:text-sm">
                ✨ {testimonial.result}
              </p>
            </div>
            <div className="border-t border-border pt-4 md:pt-6">
              <h4 className="font-semibold text-sm md:text-base text-foreground">{testimonial.name}</h4>
              <p className="text-xs md:text-sm text-muted-foreground">{testimonial.title}</p>
              <p className="text-xs text-primary">{testimonial.location}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  // Layout 2: Carousel
  const renderCarouselLayout = () => (
    <div className="relative mb-16 overflow-hidden">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
              <Card className="bg-gradient-hero border-0 shadow-elegant max-w-4xl mx-auto">
                <CardContent className="p-6 md:p-12 space-y-4 md:space-y-8">
                  <Quote className="h-10 w-10 md:h-16 md:w-16 text-primary/20" />
                  <p className="text-lg md:text-2xl text-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-border pt-4 md:pt-8">
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm md:text-base text-muted-foreground">{testimonial.title}</p>
                      <p className="text-xs md:text-sm text-primary">{testimonial.location}</p>
                    </div>
                    <div className="bg-primary/10 rounded-xl p-3 md:p-4">
                      <p className="font-bold text-sm md:text-base text-primary">{testimonial.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex gap-2 items-center">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
              }`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentSlide(Math.min(testimonials.length - 1, currentSlide + 1))}
          disabled={currentSlide === testimonials.length - 1}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );

  // Layout 3: Featured with List
  const renderFeaturedLayout = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
      <div className="lg:col-span-2">
        <Card className="bg-gradient-hero border-0 shadow-elegant h-full">
          <CardContent className="p-6 md:p-12 space-y-4 md:space-y-6">
            <Quote className="h-8 w-8 md:h-12 md:w-12 text-primary/20" />
            <p className="text-base md:text-xl text-foreground leading-relaxed italic">
              "{testimonials[0].text}"
            </p>
            <div className="bg-primary/10 rounded-xl p-4 md:p-6 inline-block">
              <p className="font-bold text-primary text-sm md:text-lg">✨ {testimonials[0].result}</p>
            </div>
            <div className="border-t border-border pt-4 md:pt-6">
              <h4 className="text-xl md:text-2xl font-semibold text-foreground">{testimonials[0].name}</h4>
              <p className="text-sm md:text-base text-muted-foreground">{testimonials[0].title}</p>
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
  );

  // Layout 4: Masonry Style
  const renderMasonryLayout = () => (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mb-16">
      {testimonials.map((testimonial, index) => (
        <Card 
          key={index} 
          className="break-inside-avoid mb-6 bg-background border-0 shadow-soft hover:shadow-elegant transition-all"
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current" />
                ))}
              </div>
              <Quote className="h-6 w-6 text-primary/30" />
            </div>
            <p className="text-muted-foreground leading-relaxed italic text-sm">
              "{testimonial.text}"
            </p>
            <div className="bg-gradient-blush rounded-lg p-3">
              <p className="text-blush-foreground font-semibold text-xs">
                ✨ {testimonial.result}
              </p>
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  // Layout 5: Horizontal Scroll
  const renderHorizontalScrollLayout = () => (
    <div className="mb-16 max-w-full">
      <div className="flex gap-3 md:gap-6 overflow-x-auto pb-4 md:pb-6 snap-x snap-mandatory scrollbar-hide max-w-full">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={index} 
            className="flex-shrink-0 w-[280px] md:w-[400px] max-w-[90vw] snap-center bg-gradient-hero border-0 shadow-elegant"
          >
            <CardContent className="p-5 md:p-8 space-y-4 md:space-y-6 h-full flex flex-col">
              <div className="flex justify-between items-start">
                <Quote className="h-8 w-8 md:h-10 md:w-10 text-primary/30" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm md:text-base text-foreground leading-relaxed italic flex-grow">
                "{testimonial.text}"
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="bg-primary/10 rounded-lg p-3 md:p-4">
                  <p className="font-bold text-primary text-xs md:text-sm">
                    ✨ {testimonial.result}
                  </p>
                </div>
                <div className="border-t border-border pt-3 md:pt-4">
                  <h4 className="font-semibold text-sm md:text-base text-foreground">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-xs text-primary">{testimonial.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-xs md:text-sm text-muted-foreground">← Scroll to see more →</p>
    </div>
  );

  const renderLayout = () => {
    switch (layout) {
      case "carousel":
        return renderCarouselLayout();
      case "featured":
        return renderFeaturedLayout();
      case "masonry":
        return renderMasonryLayout();
      case "horizontal":
        return renderHorizontalScrollLayout();
      default:
        return renderGridLayout();
    }
  };

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

        {/* Layout Selector */}
        <div className="flex justify-center mb-12">
          <Select value={layout} onValueChange={setLayout}>
            <SelectTrigger className="w-[280px] bg-background border-border shadow-soft">
              <SelectValue placeholder="Choose layout style" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border z-50">
              <SelectItem value="grid">Grid Layout</SelectItem>
              <SelectItem value="carousel">Carousel Slider</SelectItem>
              <SelectItem value="featured">Featured with List</SelectItem>
              <SelectItem value="masonry">Masonry Style</SelectItem>
              <SelectItem value="horizontal">Horizontal Scroll</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Dynamic Layout */}
        {renderLayout()}

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
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