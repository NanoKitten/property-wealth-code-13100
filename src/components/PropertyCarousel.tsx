import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { MapPin, Calendar } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";

type StyleVariant = "minimalist" | "bold" | "elegant" | "corporate" | "luxury" | "cards" | "gradient" | "timeline" | "stats";

interface PropertyCarouselProps {
  styleVariant?: StyleVariant;
}

const PropertyCarousel = ({ styleVariant = "minimalist" }: PropertyCarouselProps) => {
  const properties = [
    {
      image: property1,
      location: "Brighton",
      year: "2014"
    },
    {
      image: property2,
      location: "London",
      year: "2016"
    },
    {
      image: property3,
      location: "Manchester",
      year: "2018"
    },
    {
      image: property4,
      location: "Bath",
      year: "2019"
    },
    {
      image: property5,
      location: "Leeds",
      year: "2021"
    }
  ];

  const getCarouselStyles = () => {
    switch (styleVariant) {
      case "minimalist":
        return {
          section: "py-20 bg-background",
          title: "text-3xl md:text-4xl font-light text-foreground mb-2",
          subtitle: "text-base text-muted-foreground",
          card: "relative overflow-hidden rounded-lg border border-border transition-all duration-300 group-hover:shadow-lg",
          overlay: "absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm p-4 border-t border-border",
          location: "text-foreground font-medium text-base",
          year: "text-muted-foreground text-sm"
        };
      
      case "bold":
        return {
          section: "py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5",
          title: "text-4xl md:text-5xl font-bold text-foreground mb-3",
          subtitle: "text-lg text-foreground/80",
          card: "relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-2xl",
          overlay: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-transparent p-6",
          location: "text-primary-foreground font-bold text-xl",
          year: "text-primary-foreground/90 text-base flex items-center gap-1"
        };
      
      case "elegant":
        return {
          section: "py-24 bg-gradient-to-b from-muted/20 to-background",
          title: "text-5xl md:text-6xl font-serif italic text-foreground mb-4",
          subtitle: "text-lg text-muted-foreground font-serif",
          card: "relative overflow-hidden rounded-lg border-2 border-primary/20 transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-elegant",
          overlay: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 via-background/80 to-transparent p-5",
          location: "text-foreground font-serif text-xl mb-1",
          year: "text-muted-foreground text-sm font-serif italic"
        };
      
      case "corporate":
        return {
          section: "py-16 bg-background border-t border-border",
          title: "text-3xl md:text-4xl font-bold text-foreground mb-2 uppercase tracking-tight",
          subtitle: "text-base text-muted-foreground",
          card: "relative overflow-hidden rounded-none border-2 border-primary/20 transition-all duration-300 group-hover:border-primary",
          overlay: "absolute bottom-0 left-0 right-0 bg-background border-t-2 border-primary/20 p-4",
          location: "text-foreground font-bold text-base uppercase tracking-wide",
          year: "text-muted-foreground text-xs uppercase tracking-widest"
        };
      
      case "luxury":
        return {
          section: "py-32 bg-gradient-to-b from-background via-muted/10 to-background",
          title: "text-6xl md:text-7xl font-serif italic text-foreground mb-4",
          subtitle: "text-xl text-muted-foreground font-light tracking-wide",
          card: "relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]",
          overlay: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6",
          location: "text-white font-serif text-2xl mb-1",
          year: "text-white/80 text-sm tracking-widest uppercase"
        };
      
      case "cards":
        return {
          section: "py-20 bg-muted/30",
          title: "text-4xl md:text-5xl font-bold text-foreground mb-3",
          subtitle: "text-lg text-muted-foreground",
          card: "relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2",
          overlay: "absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md p-5 border-t border-border",
          location: "text-foreground font-bold text-lg mb-1 flex items-center gap-2",
          year: "text-muted-foreground text-sm flex items-center gap-1"
        };
      
      case "gradient":
        return {
          section: "-mt-32 pt-40 pb-24 bg-gradient-to-b from-transparent via-background/80 to-background relative",
          title: "text-5xl md:text-6xl font-bold text-foreground mb-4",
          subtitle: "text-xl text-foreground/80",
          card: "relative overflow-hidden rounded-2xl shadow-xl border-2 border-white/20 transition-all duration-300 group-hover:scale-[1.02]",
          overlay: "absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex flex-col justify-end p-6",
          location: "text-primary-foreground font-bold text-2xl",
          year: "text-primary-foreground/90 text-base"
        };
      
      case "timeline":
        return {
          section: "py-20 bg-background",
          title: "text-4xl md:text-5xl font-bold text-foreground mb-3",
          subtitle: "text-lg text-muted-foreground mb-8",
          card: "relative overflow-hidden rounded-xl border-l-4 border-primary shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-accent",
          overlay: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-5",
          location: "text-foreground font-bold text-lg mb-1",
          year: "text-primary text-sm font-bold flex items-center gap-1"
        };
      
      case "stats":
        return {
          section: "py-20 bg-gradient-to-b from-background to-muted/20",
          title: "text-4xl md:text-5xl font-bold text-foreground mb-3",
          subtitle: "text-lg text-muted-foreground",
          card: "relative overflow-hidden rounded-2xl border-2 border-border transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-xl",
          overlay: "absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm p-4 border-t-2 border-border",
          location: "text-foreground font-bold text-lg",
          year: "text-muted-foreground text-sm font-medium"
        };
      
      default:
        return getCarouselStyles();
    }
  };

  const styles = getCarouselStyles();

  return (
    <section className={styles.section}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={styles.title}>
            Property Portfolio
          </h2>
          <p className={styles.subtitle}>
            {styleVariant === "luxury" ? "Curated Collection" : 
             styleVariant === "corporate" ? "Investment Assets" :
             "Properties I've worked on throughout my journey"}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {properties.map((property, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="relative group">
                  <div className={styles.card}>
                    <img
                      src={property.image}
                      alt={`Property in ${property.location}`}
                      className="w-full h-80 object-cover"
                    />
                    
                    <div className={styles.overlay}>
                      <p className={styles.location}>
                        {(styleVariant === "cards" || styleVariant === "bold") && (
                          <MapPin className="w-4 h-4" />
                        )}
                        {property.location}
                      </p>
                      <p className={styles.year}>
                        {(styleVariant === "cards" || styleVariant === "timeline" || styleVariant === "bold") && (
                          <Calendar className="w-4 h-4" />
                        )}
                        {property.year}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default PropertyCarousel;
