import { useState } from "react";
import { Building2, TrendingUp, Award } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type StyleVariant = "minimalist" | "bold" | "elegant";

const PortfolioHeader = () => {
  const [selectedStyle, setSelectedStyle] = useState<StyleVariant>("minimalist");

  const renderMinimalist = () => (
    <section className="py-20 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Portfolio Showcase
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            Mary's Property Portfolio
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A carefully curated collection of successful property investments, 
            demonstrating strategic growth and sustainable wealth building over 15+ years.
          </p>
          <div className="mt-8 flex gap-8">
            <div>
              <p className="text-3xl font-light text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-light text-primary">£2M+</p>
              <p className="text-sm text-muted-foreground">Portfolio Value</p>
            </div>
            <div>
              <p className="text-3xl font-light text-primary">20+</p>
              <p className="text-sm text-muted-foreground">Properties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderBold = () => (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wide">Award-Winning Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transform Your Financial Future
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            See how Mary built a <span className="text-primary font-semibold">£2M+ property empire</span> and 
            learn the exact strategies you can use to create your own success story.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-background/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg border border-border">
              <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">20+</p>
              <p className="text-sm text-muted-foreground font-medium">Properties Managed</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg border border-border">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">15+</p>
              <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg border border-border">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">£2M+</p>
              <p className="text-sm text-muted-foreground font-medium">Portfolio Value</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderElegant = () => (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-6">
              <div className="h-px w-16 bg-primary mb-4"></div>
              <p className="text-sm font-serif text-primary uppercase tracking-widest">
                Portfolio Excellence
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-6 leading-tight">
              A Legacy of
              <br />
              <span className="text-primary italic">Strategic Investment</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With over fifteen years of expertise in property investment, Mary has cultivated 
              a distinguished portfolio that exemplifies the art of wealth creation through 
              strategic property acquisition and management.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-foreground text-lg mb-1">Proven Track Record</h3>
                  <p className="text-muted-foreground text-sm">20+ successful property investments across diverse markets</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-foreground text-lg mb-1">Sustainable Growth</h3>
                  <p className="text-muted-foreground text-sm">Portfolio valued at over £2M with consistent returns</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-foreground text-lg mb-1">Expert Guidance</h3>
                  <p className="text-muted-foreground text-sm">Mentored 500+ women to achieve their property goals</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"></div>
            <div className="absolute -bottom-6 -right-6 bg-background border border-border p-6 rounded-lg shadow-xl">
              <p className="text-4xl font-serif text-primary mb-1">15+</p>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="relative">
      {/* Style Selector */}
      <div className="fixed top-20 right-6 z-50 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg p-4">
        <p className="text-xs text-muted-foreground mb-2 font-medium">Portfolio Style:</p>
        <Select value={selectedStyle} onValueChange={(value) => setSelectedStyle(value as StyleVariant)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-background border-border">
            <SelectItem value="minimalist">Minimalist</SelectItem>
            <SelectItem value="bold">Bold & Vibrant</SelectItem>
            <SelectItem value="elegant">Elegant & Classic</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Render selected style */}
      {selectedStyle === "minimalist" && renderMinimalist()}
      {selectedStyle === "bold" && renderBold()}
      {selectedStyle === "elegant" && renderElegant()}
    </div>
  );
};

export default PortfolioHeader;