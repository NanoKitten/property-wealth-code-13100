import { ArrowUp, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "About Mary", href: "#about" },
    { name: "The Property Code", href: "#property-code" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Strategy Call (£35)", href: "#services" },
    { name: "Property Code Test", href: "#services" },
    { name: "Monthly Community", href: "#services" },
    { name: "1:1 Coaching", href: "#services" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Disclaimer", href: "#" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-accent/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                The Property Wealth Code
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empowering women 40+ to build sustainable wealth through strategic property investment, without sacrificing family life.
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">Follow Mary's Journey</p>
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="p-2 hover:bg-primary hover:text-primary-foreground">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-primary hover:text-primary-foreground">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-primary hover:text-primary-foreground">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Stay Connected</h4>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Get weekly property insights and exclusive tips delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 The Property Wealth Code. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {legal.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pb-8">
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Important:</strong> Property investment carries risk. The value of property can go down as well as up, and you may not get back the amount originally invested. Past performance is not a guarantee of future results. Tax treatment depends on your individual circumstances and may be subject to change. Always seek independent financial and legal advice before making property investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;