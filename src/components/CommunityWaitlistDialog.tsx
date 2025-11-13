import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

interface CommunityWaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CommunityWaitlistDialog = ({ open, onOpenChange }: CommunityWaitlistDialogProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    emailConsent: false,
    phoneConsent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.emailConsent && !formData.phoneConsent) {
      toast({
        title: "Consent Required",
        description: "Please consent to at least one contact method to join the waitlist.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        sheet: 'communityWaitlist',
        name: formData.name || 'Not provided',
        email: formData.email || 'Not provided',
        phone: formData.phone || 'Not provided',
        emailConsent: formData.emailConsent.toString(),
        phoneConsent: formData.phoneConsent.toString(),
        timestamp: new Date().toISOString()
      };

      const response = await fetch("https://script.google.com/macros/s/AKfycbw2entStb5qXFZBZtw6iZoRLy6X7tCCe_V6ZDRrZ251uo8_Yv2ZARaeOsStNlcxg6J1ig/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      toast({
        title: "You're on the waitlist!",
        description: "Thank you for joining. We'll be in touch soon with exciting updates about the community.",
      });

      setFormData({ name: "", email: "", phone: "", emailConsent: false, phoneConsent: false });
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting to waitlist:", error);
      toast({
        title: "Request Sent",
        description: "Your waitlist request has been submitted. We'll be in touch soon!",
      });
      setFormData({ name: "", email: "", phone: "", emailConsent: false, phoneConsent: false });
      onOpenChange(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-background border-0 shadow-elegant">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-foreground">
            Join the Community Waitlist
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Be the first to know when our exclusive community launches. Connect with like-minded women building wealth through property.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              type="text" 
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="+44 7XXX XXXXXX"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">Contact Preferences</p>
            
            <div className="flex items-start space-x-3 space-y-0">
              <Checkbox
                id="emailConsent"
                checked={formData.emailConsent}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, emailConsent: checked as boolean }))
                }
              />
              <div className="space-y-1 leading-none">
                <Label
                  htmlFor="emailConsent"
                  className="text-sm font-normal text-foreground cursor-pointer"
                >
                  Email Contact Consent
                </Label>
              </div>
            </div>

            <div className="flex items-start space-x-3 space-y-0">
              <Checkbox
                id="phoneConsent"
                checked={formData.phoneConsent}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, phoneConsent: checked as boolean }))
                }
              />
              <div className="space-y-1 leading-none">
                <Label
                  htmlFor="phoneConsent"
                  className="text-sm font-normal text-foreground cursor-pointer"
                >
                  Phone Contact Consent
                </Label>
              </div>
            </div>
          </div>
          
          <Button 
            type="submit"
            size="lg" 
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold"
            disabled={isSubmitting || (!formData.emailConsent && !formData.phoneConsent)}
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CommunityWaitlistDialog;
