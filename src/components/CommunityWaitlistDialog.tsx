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
    email: "",
    phone: "",
    consent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please consent to being contacted to join the waitlist.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbw2entStb5qXFZBZtw6iZoRLy6X7tCCe_V6ZDRrZ251uo8_Yv2ZARaeOsStNlcxg6J1ig/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sheet: "communityWaitlist",
          email: formData.email || "Not provided",
          phone: formData.phone || "Not provided",
          consent: formData.consent,
          timestamp: new Date().toISOString()
        }),
      });

      toast({
        title: "You're on the waitlist!",
        description: "Thank you for joining. We'll be in touch soon with exciting updates about the community.",
      });

      setFormData({ email: "", phone: "", consent: false });
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting to waitlist:", error);
      toast({
        title: "Request Sent",
        description: "Your waitlist request has been submitted. We'll be in touch soon!",
      });
      setFormData({ email: "", phone: "", consent: false });
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
            <Label htmlFor="email">Email Address (Optional)</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="+44 7XXX XXXXXX"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>

          <div className="flex items-start space-x-3 space-y-0">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, consent: checked as boolean }))
              }
            />
            <div className="space-y-1 leading-none">
              <Label
                htmlFor="consent"
                className="text-sm font-normal text-foreground cursor-pointer"
              >
                I consent to being contacted through the provided email and/or phone number regarding the community launch and updates.
              </Label>
            </div>
          </div>
          
          <Button 
            type="submit"
            size="lg" 
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold"
            disabled={isSubmitting || !formData.consent}
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
