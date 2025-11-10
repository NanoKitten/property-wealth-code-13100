import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dna, Home, Scale, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import irishHeritage from "@/assets/irish-heritage.jpg";
import youngMary from "@/assets/young-mary.jpg";

const Bloodline = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      
      {/* Bottom Right Corner Image */}
      <div className="absolute bottom-32 right-8 md:right-12 w-56 md:w-72 lg:w-80 z-0">
        <img 
          src={youngMary} 
          alt="Young Mary as a child" 
          className="w-full h-auto rounded-3xl shadow-soft opacity-80"
          style={{
            filter: 'blur(0.3px)',
            maskImage: 'linear-gradient(to top left, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top left, black 60%, transparent 100%)'
          }}
        />
      </div>
      
      <main className="pt-24 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 md:px-20">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
              <Dna className="h-12 w-12 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
              Your Generational
              <span className="text-primary block">Bloodline</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              How it is affecting your results in property investment
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              {/* Irish Heritage Image - Float Left */}
              <img 
                src={irishHeritage} 
                alt="Irish heritage site representing generational roots" 
                className="float-left w-64 md:w-80 lg:w-96 h-auto rounded-3xl shadow-soft opacity-80 mr-6 mb-4"
                style={{
                  filter: 'blur(0.3px)',
                  shapeOutside: 'margin-box',
                  shapeMargin: '1rem'
                }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed">
                A woman's bloodline significantly influenced her historical access to property and, consequently, her ability to build a property business, largely because most societies favored patrilineal inheritance and male ownership for centuries.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Until the late 19th century in the UK and similar jurisdictions, married women could not own property outright due to legal doctrines like coverture, which subsumed a woman's legal and economic identity under her husband's. As a result, property, wealth, and business assets were mostly passed through the male line, and daughters were often excluded from direct inheritance or involvement in family businesses.
              </p>
            </section>

            {/* Historical Barriers */}
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-foreground flex items-center gap-3">
                <Scale className="h-7 w-7 text-primary" />
                Historical Barriers for Women
              </h2>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Legal structures, like entailment and primogeniture, prioritized sons over daughters in property inheritance.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>The Married Women's Property Acts of the late 19th century finally allowed women—in particular, married women—to own and manage property independently, shifting the legal environment but not erasing entrenched social norms.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Trusts and specific legal instruments were sometimes used by families to ensure property remained in the bloodline, even allowing some women to benefit, but these were exceptions, not the rule.</span>
                </li>
              </ul>
            </section>

            {/* Modern Impact */}
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-foreground flex items-center gap-3">
                <Home className="h-7 w-7 text-primary" />
                Bloodline Effects on Modern Business
              </h2>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Many women today lack ancestral wealth or property-based business legacies, meaning less generational capital to start or grow property businesses.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Where women did inherit property, this was often conditional or restricted, limiting full entrepreneurial freedom. Only in the last few generations have more women begun inheriting and actively managing property assets.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Recent data suggests a growing share of family business wealth and property is passing to women, but daughters are still treated differently than sons in many cultures when it comes to leadership succession and ownership.</span>
                </li>
              </ul>
            </section>

            {/* Lasting Impact */}
            <div className="p-8 bg-secondary/30 rounded-2xl my-12 space-y-4">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">Lasting Impact</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    These historical limitations mean that, for many women, there is still a gap in inherited property capital and the familial business networks that often fuel successful property ventures.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Despite these obstacles, women have demonstrated tenacity and innovation in entering property businesses, particularly when given equal footing in inheritance and family business succession planning.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-primary rounded-2xl text-primary-foreground">
              <h3 className="text-2xl font-semibold mb-3">Summary</h3>
              <p className="text-lg leading-relaxed">
                Because women were historically excluded from property ownership along bloodlines, many today start with less generational wealth or established business footing in the property sector. However, evolving legal and social attitudes have begun to change this landscape in recent decades.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 space-y-6">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Ready to Break Free From Generational Limitations?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold px-8">
                  Book a Consultation
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bloodline;
