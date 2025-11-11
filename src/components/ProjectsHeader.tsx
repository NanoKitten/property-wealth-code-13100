import { useState } from "react";
import { Building2, TrendingUp, Award, Target, Users, Star, Sparkles, Home, BarChart3 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type StyleVariant = "minimalist" | "bold" | "elegant" | "corporate" | "luxury" | "cards" | "gradient" | "timeline" | "stats";

interface ProjectsHeaderProps {
  styleVariant?: StyleVariant;
}

const ProjectsHeader = ({ styleVariant = "minimalist" }: ProjectsHeaderProps) => {

  const renderMinimalist = () => (
    <section className="py-20 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Projects Showcase
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            Mary's Property Projects
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
              <p className="text-sm text-muted-foreground">Total Value</p>
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
            <span className="text-sm font-semibold uppercase tracking-wide">Award-Winning Projects</span>
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
              <p className="text-sm text-muted-foreground font-medium">Total Value</p>
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
                Projects Excellence
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-6 leading-tight">
              A Legacy of
              <br />
              <span className="text-primary italic">Strategic Investment</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With over fifteen years of expertise in property investment, Mary has cultivated 
              a distinguished collection of projects that exemplifies the art of wealth creation through 
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
                  <p className="text-muted-foreground text-sm">Total valued at over £2M with consistent returns</p>
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

  const renderCorporate = () => (
    <section className="py-16 bg-background border-b-2 border-primary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-primary"></div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Investment Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Professional Property Investment Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Delivering exceptional returns through strategic property acquisition and expert project management since 2008.
            </p>
          </div>
          <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Key Metrics</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline border-b border-border pb-2">
                <span className="text-sm text-muted-foreground">Total Value</span>
                <span className="text-xl font-bold text-foreground">£2M+</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-border pb-2">
                <span className="text-sm text-muted-foreground">Properties</span>
                <span className="text-xl font-bold text-foreground">20+</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">Experience</span>
                <span className="text-xl font-bold text-foreground">15+ years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderLuxury = () => (
    <section className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <Star className="w-4 h-4 text-primary fill-primary" />
            <Star className="w-3 h-3 text-primary fill-primary" />
          </div>
          <h2 className="text-6xl md:text-7xl font-serif text-foreground mb-6 leading-tight italic">
            The Projects
          </h2>
          <p className="text-2xl text-primary font-light tracking-wide">Est. 2008</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <p className="text-4xl font-serif text-foreground mb-2">£2M+</p>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">Total Valuation</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Home className="w-10 h-10 text-primary" />
            </div>
            <p className="text-4xl font-serif text-foreground mb-2">20+</p>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">Premium Properties</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Award className="w-10 h-10 text-primary" />
            </div>
            <p className="text-4xl font-serif text-foreground mb-2">15+</p>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">Years Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderCards = () => (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-foreground mb-4">Investment Projects Overview</h2>
          <p className="text-xl text-muted-foreground">Building wealth through strategic property investments</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-background border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Property Count</h3>
            <p className="text-5xl font-bold text-primary mb-2">20+</p>
            <p className="text-muted-foreground">Residential and commercial properties across multiple markets</p>
          </div>
          <div className="bg-background border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Total Value</h3>
            <p className="text-5xl font-bold text-primary mb-2">£2M+</p>
            <p className="text-muted-foreground">Consistent growth through strategic acquisitions and management</p>
          </div>
          <div className="bg-background border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Experience</h3>
            <p className="text-5xl font-bold text-primary mb-2">15+</p>
            <p className="text-muted-foreground">Years of proven expertise in property investment and wealth creation</p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderGradient = () => (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/80 to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center text-primary-foreground">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Mary's Projects
          </h2>
          <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Over 15 years of building sustainable wealth through strategic property investments
          </p>
          <div className="flex flex-wrap justify-center gap-12 mt-16">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border-4 border-white/20">
                <p className="text-5xl font-bold">20+</p>
              </div>
              <p className="text-lg font-semibold">Properties</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border-4 border-white/20">
                <p className="text-5xl font-bold">£2M</p>
              </div>
              <p className="text-lg font-semibold">Total Value</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border-4 border-white/20">
                <p className="text-5xl font-bold">15+</p>
              </div>
              <p className="text-lg font-semibold">Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderTimeline = () => (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">Projects Journey</h2>
          <p className="text-xl text-muted-foreground">15 years of strategic growth and success</p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary"></div>
          
          <div className="space-y-16">
            <div className="flex items-center gap-8">
              <div className="flex-1 text-right">
                <h3 className="text-3xl font-bold text-primary mb-2">2008</h3>
                <p className="text-muted-foreground">Started property investment journey</p>
              </div>
              <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1"></div>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex-1"></div>
              <div className="relative z-10 w-16 h-16 bg-accent rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                <Building2 className="w-8 h-8 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-accent mb-2">10 Properties</h3>
                <p className="text-muted-foreground">Reached first major milestone</p>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex-1 text-right">
                <h3 className="text-3xl font-bold text-primary mb-2">£1M</h3>
                <p className="text-muted-foreground">Total valuation milestone</p>
              </div>
              <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1"></div>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex-1"></div>
              <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center border-4 border-background shadow-xl">
                <Award className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">Today</h3>
                <p className="text-lg text-foreground font-semibold">20+ properties • £2M+ total value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderStats = () => (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wide">Data-Driven Success</span>
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
              Projects Performance
              <br />
              <span className="text-primary">By The Numbers</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Real results from 15+ years of strategic property investment. Every number tells 
              a story of calculated decisions and sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background border-2 border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <Building2 className="w-8 h-8 text-primary" />
                <div className="h-12 w-12 bg-primary/10 rounded-lg"></div>
              </div>
              <p className="text-4xl font-bold text-foreground mb-1">20+</p>
              <p className="text-sm text-muted-foreground font-medium">Active Properties</p>
            </div>
            
            <div className="bg-background border-2 border-accent/20 rounded-2xl p-6 hover:border-accent/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
                <div className="h-12 w-12 bg-accent/10 rounded-lg"></div>
              </div>
              <p className="text-4xl font-bold text-foreground mb-1">£2M+</p>
              <p className="text-sm text-muted-foreground font-medium">Total Value</p>
            </div>
            
            <div className="bg-background border-2 border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-primary" />
                <div className="h-12 w-12 bg-primary/10 rounded-lg"></div>
              </div>
              <p className="text-4xl font-bold text-foreground mb-1">500+</p>
              <p className="text-sm text-muted-foreground font-medium">Women Mentored</p>
            </div>
            
            <div className="bg-background border-2 border-accent/20 rounded-2xl p-6 hover:border-accent/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8 text-accent" />
                <div className="h-12 w-12 bg-accent/10 rounded-lg"></div>
              </div>
              <p className="text-4xl font-bold text-foreground mb-1">15+</p>
              <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      {styleVariant === "minimalist" && renderMinimalist()}
      {styleVariant === "bold" && renderBold()}
      {styleVariant === "elegant" && renderElegant()}
      {styleVariant === "corporate" && renderCorporate()}
      {styleVariant === "luxury" && renderLuxury()}
      {styleVariant === "cards" && renderCards()}
      {styleVariant === "gradient" && renderGradient()}
      {styleVariant === "timeline" && renderTimeline()}
      {styleVariant === "stats" && renderStats()}
    </>
  );
};

export default ProjectsHeader;