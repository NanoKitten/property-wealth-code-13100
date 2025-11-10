import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Brain, Heart, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NervousSystem = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
              <Brain className="h-12 w-12 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
              Regulation of Your
              <span className="text-primary block">Nervous System</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding how your nervous system is intricately linked to your success in property investment
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A woman's nervous system is intricately linked to her success, particularly in how she manages stress, emotional responses, decision-making, and resilience. When the nervous system is regulated, women are better able to access clarity, confidence, and creativity, which are critical for high performance and leadership.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conversely, a dysregulated nervous system—one stuck in "fight, flight, or freeze"—can cause chronic stress, anxiety, burnout, overthinking, perfectionism, and imposter syndrome, making it harder for women to succeed despite their skills or experience.
              </p>
            </section>

            {/* Key Sections */}
            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="p-6 bg-secondary/30 rounded-xl space-y-3">
                <Heart className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Nervous System as Success Foundation</h3>
                <p className="text-muted-foreground">
                  The nervous system acts as the body's control center, governing how women respond to challenges, connect with others, and make important decisions. Polyvagal theory, for example, shows that emotional regulation depends on the nervous system's state—whether a woman feels safe and calm or threatened and anxious significantly influences her ability to be successful in property.
                </p>
              </div>

              <div className="p-6 bg-secondary/30 rounded-xl space-y-3">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Dysregulation</h3>
                <p className="text-muted-foreground">
                  Dysregulation manifests as overthinking, difficulty setting boundaries, fear of mistakes, imposter syndrome, and chronic self-doubt, which are nervous system responses learned from past experiences.
                </p>
              </div>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-foreground">Biological and Social Context</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Research shows biological and hormonal differences, such as the effects of progesterone and estrogen, influence how women's brains respond to stress, emotion, and cognition. Moreover, social expectations—like the pressure to balance home and professional life—may add layers of stress impacting nervous system health and, in turn, success outcomes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-foreground">Practical Approaches</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Regulating the nervous system, through practices such as mindfulness, breathwork, therapy (e.g., EFT tapping), exercise, or supportive networks, can help women move from survival mode into a state where clearer thinking, better decision-making, and authentic leadership becomes possible.
              </p>
            </section>

            <div className="p-8 bg-gradient-primary rounded-2xl text-primary-foreground my-12">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">Key Takeaway</h3>
                  <p className="text-lg leading-relaxed">
                    A woman's nervous system regulation is foundational to her success, affecting her ability to lead, think creatively, and manage complex demands in any environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 space-y-6">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Ready to Regulate Your Nervous System for Success?
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

export default NervousSystem;
