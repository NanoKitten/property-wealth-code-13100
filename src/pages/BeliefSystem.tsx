import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Lock, Lightbulb, Users, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BeliefSystem = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
              <Lock className="h-12 w-12 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
              Your Property Belief System Code
              <span className="text-primary block">Recoding Your Success Blueprint</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding how epigenetics shapes your business experience and success pathways
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Epigenetics profoundly shapes the business experience and success pathways for women by influencing how inherited and lived experiences, social stress, and trauma are expressed through gene activity. Changes in gene expression—rather than fixed genetic code—can make women more sensitive to stress, adversity, and behavioral traits inherited from previous generations, impacting decision-making, risk tolerance, resilience, and leadership style.
              </p>
            </section>

            {/* Inherited Patterns */}
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-foreground flex items-center gap-3">
                <Lightbulb className="h-7 w-7 text-primary" />
                Inherited Patterns and Business Behaviors
              </h2>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Women may inherit heightened stress responses or behavioral tendencies based on ancestral trauma, poverty, or chronic adversity, which can influence their interaction patterns, confidence, and capacity to handle business challenges.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Epigenetic modifications linked to adversity or social conditions can be passed to offspring, sometimes making women more prone to anxiety or burnout in high-pressure environments, especially if their bloodline has faced generations of social or financial exclusion.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Such inherited stress patterns can affect risk-taking, negotiation success, and business networking, requiring conscious intervention for women to reframe and transcend limiting behavioral cycles.</span>
                </li>
              </ul>
            </section>

            {/* Social Impact */}
            <div className="p-8 bg-secondary/30 rounded-2xl my-12 space-y-4">
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">Social, Gender, and Environmental Impacts</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>The business environment, leadership pressures, and workplace culture also shape gene expression patterns—meaning that female entrepreneurs' resilience and adaptive skills can be boosted or suppressed by social support, discrimination, or chronic stress.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Sex-specific social exposures, such as gendered expectations or unequal access to opportunity, interact with epigenetic regulation—making women more or less likely to experience burnout, depression, or self-doubt, particularly in male-dominated industries.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Rewiring Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-foreground flex items-center gap-3">
                <RefreshCw className="h-7 w-7 text-primary" />
                Rewiring Epigenetic Effects
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  Epigenetic inheritance is not destiny; awareness and intentional practices—such as targeted mentorship, therapy, mindfulness, and behavioral adaptation—can help women overwrite inherited limitations and optimize strengths for entrepreneurial and leadership success.
                </p>
                <p className="leading-relaxed">
                  Addressing epigenetic influences can support women in developing new "habit loops" and leadership styles, moving beyond inherited restrictions to maximize business performance and personal well-being.
                </p>
              </div>
            </section>

            <div className="p-8 bg-gradient-primary rounded-2xl text-primary-foreground my-12">
              <h3 className="text-2xl font-semibold mb-3">Summary</h3>
              <p className="text-lg leading-relaxed">
                Epigenetics can shape women's experiences in business by embedding ancestral and personal exposure to stress, adversity, and trauma in their behavioral tendencies and stress responses, but conscious strategies can help rewire these influences for limitless success.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 space-y-6">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Ready to Recode Your Success Blueprint?
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

export default BeliefSystem;
