import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      {/* Hero Section with Video */}
      <section id="home" className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen pt-16 min-h-[85vh] flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <iframe 
            title="vimeo-player" 
            src="https://player.vimeo.com/video/1129536015?h=180320caca&autoplay=1&loop=1&muted=1&controls=0&background=1" 
            className="w-full h-full object-cover"
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 w-full px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-black/90 leading-tight" style={{ filter: 'blur(0.6px)' }}>
                HELPING WOMAN
                <span className="text-black/90 block">REWRITE THE PLAYBOOK to CREATE</span>
                <span className="text-black/90 block">LIMITLESS SUCCESS in PROPERTY</span>
              </h1>

              {/* Keyword Carousel */}
              <div className="relative overflow-hidden py-4" style={{ 
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
              }}>
                <div className="flex items-center gap-6 whitespace-nowrap animate-scroll" style={{ filter: 'blur(0.8px)' }}>
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
                  {/* Duplicate for seamless loop */}
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
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ filter: 'blur(0.5px)' }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold px-8 py-4 shadow-elegant"
                  asChild
                >
                  <a href="https://aistudio.google.com/app/apps/drive/1vITpYOLMNFvUUAYemhI3wJnaApha1j_J?showPreview=true&showAssistant=true" target="_blank" rel="noopener noreferrer">
                    Take the Quiz
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="accent" 
                  size="lg"
                  className="border border-accent/30"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Mary's Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Below Video */}
      <section className="bg-background py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                For Women 40+ Ready to Build Wealth
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Discover your personalised 9-number Property Code and transform your financial future through strategic property investment – without sacrificing your family life.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-foreground bg-background/80 backdrop-blur-md px-8 py-4 rounded-full border border-accent/30 shadow-soft mx-auto">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full shadow-lg shadow-accent/50"></div>
                <span>15+ years property experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full shadow-lg shadow-accent/50"></div>
                <span>£2M+ portfolio built</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full shadow-lg shadow-accent/50"></div>
                <span>500+ women empowered</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="inline-block mx-auto">
              <div className="bg-background/80 backdrop-blur-md px-8 py-4 rounded-full border border-accent/30 shadow-soft">
                <p className="text-sm text-foreground mb-2 text-center">Trusted by ambitious women nationwide</p>
                <div className="flex items-center gap-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-foreground">4.9/5 from 200+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;