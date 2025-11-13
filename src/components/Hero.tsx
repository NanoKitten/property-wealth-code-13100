import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <>
      {/* Hero Section with Video */}
      <section id="home" className="relative w-full pt-16 min-h-[85vh] flex items-start md:items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 h-full min-h-[100vh] md:min-h-full">
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/1129536015?h=180320caca&autoplay=1&loop=1&muted=1&controls=0&background=1" className="w-full h-[150%] md:h-[130%] absolute top-[35%] md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[250%] md:min-w-[150%] object-cover scale-110" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowFullScreen />
          {/* Enhanced overlay for mobile */}
          <div className="absolute inset-0 bg-background/40 md:bg-background/30 backdrop-blur-[3px] md:backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 w-full px-6 lg:px-8 py-6 md:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <p className="text-black font-medium tracking-wide uppercase text-sm break-words">FOR WOMAN OVER 35+ READY TO BECOME PROPERTY ENTREPRENEURS</p>
              <h1 className="text-4xl md:text-6xl font-serif text-black leading-tight font-extrabold lg:text-5xl">
                <span className="text-primary-dark">IT'S TIME FOR WOMEN</span><br />
                TO BUILD GENERATIONAL WEALTH
              </h1>

              {/* Keyword Carousel */}
              <div className="relative overflow-hidden py-4 max-w-full" style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}>
                <div className="inline-flex items-center gap-6 whitespace-nowrap animate-scroll" style={{
                filter: 'blur(0.8px)'
              }}>
                  {/* First set */}
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Property Investment</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Financial Freedom</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Wealth Building</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Mindset Coaching</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Portfolio Growth</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Passive Income</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Subconscious Reprogramming</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Women Empowerment</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Legacy Building</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Life Balance</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  {/* Duplicate set for seamless loop */}
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Property Investment</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Financial Freedom</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Wealth Building</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Mindset Coaching</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Portfolio Growth</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Passive Income</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Subconscious Reprogramming</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Women Empowerment</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Legacy Building</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                  <span className="text-xl md:text-2xl font-semibold text-black/90">Life Balance</span>
                  <span className="text-xl md:text-2xl text-black/40">|</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold px-8 py-4 shadow-elegant" asChild>
                  <a href="https://v22-the-property-wealth-code-next-best-move-plan-806236894411.us-west1.run.app/" target="_blank" rel="noopener noreferrer">
                    Take the Free Quiz
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Below Video */}
      <section className="bg-background pb-6 md:pt-12 md:pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Discover your personalised 9-number Property Code and transform your financial future through strategic property investment – without sacrificing your family life.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-8">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold px-8 py-4 shadow-elegant" asChild>
                <a href="https://v22-the-property-wealth-code-next-best-move-plan-806236894411.us-west1.run.app/" target="_blank" rel="noopener noreferrer">
                  Take the Quiz
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </>;
};
export default Hero;