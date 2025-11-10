import { ArrowRight, Calendar, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactMethods = [
    {
      icon: Calendar,
      title: "Book a Strategy Call",
      description: "45-minute deep dive into your property goals",
      action: "Book Now - £35",
      primary: true
    },
    {
      icon: MessageCircle,
      title: "Join the Community",
      description: "Connect with like-minded women building wealth",
      action: "Join Community"
    },
    {
      icon: Mail,
      title: "Email Mary Directly",
      description: "Get in touch for partnership opportunities",
      action: "Send Email"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Ready to Start?
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            Let's Build Your
            <span className="text-primary block">Property Empire</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take the first step toward financial freedom. Whether you're ready to book a call or just want to learn more, I'm here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Methods */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className={`bg-background border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group ${method.primary ? 'ring-2 ring-primary/20' : ''}`}>
                  <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${method.primary ? 'bg-gradient-primary' : 'bg-accent'}`}>
                      <method.icon className={`h-6 w-6 ${method.primary ? 'text-primary-foreground' : 'text-accent-foreground'}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-foreground">{method.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      className={`w-full ${method.primary ? 'bg-gradient-primary hover:opacity-90 text-primary-foreground' : 'bg-accent hover:bg-accent/80 text-accent-foreground'} transition-all font-semibold`}
                      size="lg"
                    >
                      {method.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Contact Info */}
            <div className="bg-gradient-hero rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Quick Contact
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Available for calls Mon-Fri, 9am-5pm</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">WhatsApp support for coaching clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="space-y-8">
            <Card className="bg-background border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-foreground">
                  Send a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Have questions? Want to learn more? I'd love to hear from you.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="+44 7XXX XXXXXX" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">What are you interested in?</Label>
                  <select 
                    id="subject" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select an option</option>
                    <option value="strategy-call">Property Strategy Call (£35)</option>
                    <option value="property-code">Property Code Test (£250)</option>
                    <option value="community">Monthly Community (£97)</option>
                    <option value="coaching">1:1 Coaching Programs</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your property goals and how I can help..."
                    rows={4}
                  />
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  I respect your privacy. Your information will never be shared and you can unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;