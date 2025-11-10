import { ArrowRight, Calculator, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import propertyCodeImage from "@/assets/property-code-visual.jpg";

const PropertyCode = () => {
  const codeElements = [
    {
      number: "1-3",
      title: "Your Foundation Numbers",
      description: "Current financial position, risk tolerance, and available capital"
    },
    {
      number: "4-6", 
      title: "Your Strategy Numbers",
      description: "Investment timeline, property types, and geographical focus"
    },
    {
      number: "7-9",
      title: "Your Growth Numbers", 
      description: "Target returns, exit strategies, and wealth acceleration factors"
    }
  ];

  const benefits = [
    "Stop wasting time on properties that don't fit your situation",
    "Make confident investment decisions backed by data",
    "Build wealth systematically without emotional investing",
    "Create a clear roadmap to your financial goals",
    "Avoid costly mistakes that drain your resources"
  ];

  return (
    <section id="property-code" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            The Game-Changing Framework
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            What Is Your 
            <span className="text-primary">Property Code?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your Property Code is a unique 9-number framework that reveals exactly which properties, strategies, and timelines will work for YOUR specific situation. No more guesswork—just a clear, personalised roadmap to wealth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Image */}
          <div className="relative">
            <img
              src={propertyCodeImage}
              alt="The Property Code Framework"
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {codeElements.map((element, index) => (
                <Card key={index} className="border-l-4 border-l-primary bg-secondary/30 border-t-0 border-r-0 border-b-0 shadow-none">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-sm">
                          {element.number}
                        </span>
                      </div>
                      {element.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground">
                      {element.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="p-6 bg-gradient-blush rounded-2xl">
              <h3 className="text-xl font-semibold text-blush-foreground mb-4">
                Why Your Code Matters
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-blush-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 shadow-elegant">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex justify-center">
              <Calculator className="h-16 w-16 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
              Ready to Discover Your Property Code?
            </h3>
            <p className="text-lg text-muted-foreground">
              Take our comprehensive Property Code Test and receive your personalised 9-number framework, plus a detailed strategy report worth £500.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold px-8 py-4"
              >
                Take The Test Now - £250
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
              >
                See Sample Report
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              ⏱️ Test takes 15 minutes • 📊 Get results within 24 hours • 💯 100% personalised to you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCode;