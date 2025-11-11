import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import virtualCoaching from "@/assets/mary-virtual-coaching.jpg";
import keynoteSpeaking from "@/assets/mary-keynote-speaking.jpg";
import workshopEvent from "@/assets/mary-workshop-event.jpg";

const SpeakingMentoring = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            <div className="relative overflow-hidden rounded-3xl h-[600px]">
              <img src={workshopEvent} alt="Interactive workshops" className="w-full h-full object-contain object-center bg-muted" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent flex items-center">
                <div className="max-w-2xl p-12 text-primary-foreground space-y-6">
                  <h1 className="text-5xl md:text-6xl font-bold">Transform Your Financial Future</h1>
                  <p className="text-xl opacity-90">Join hundreds of women who have built wealth through property investment with Mary's guidance</p>
                  <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-0 font-semibold px-8">
                    Book Mary to Speak
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-96 rounded-2xl overflow-hidden group">
                <img src={virtualCoaching} alt="Virtual coaching" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div className="text-white space-y-2">
                    <h3 className="text-2xl font-bold">Virtual Coaching</h3>
                    <p className="opacity-90">One-on-one mentoring from anywhere in the world</p>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden group">
                <img src={keynoteSpeaking} alt="Keynote speaking" className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div className="text-white space-y-2">
                    <h3 className="text-2xl font-bold">Interactive Workshops</h3>
                    <p className="opacity-90">Engaging events that transform mindsets and strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SpeakingMentoring;
