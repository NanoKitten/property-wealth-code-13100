import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => setShowConsent(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowConsent(false);
  };

  const handleClose = () => {
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md animate-in slide-in-from-bottom-5">
      <Card className="bg-background border shadow-elegant p-6 space-y-4">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="pr-6">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Cookie Notice
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and analyze website traffic. By clicking "Accept," you agree to our website's cookie use as described in our Cookie Policy.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleAccept}
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold flex-1"
          >
            Accept Cookies
          </Button>
          <Button
            onClick={handleReject}
            variant="outline"
            className="flex-1"
          >
            Reject Non-Essential
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          You can change your preferences at any time by clearing your browser cookies.
        </p>
      </Card>
    </div>
  );
};

export default CookieConsent;
