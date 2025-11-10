import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";

const PropertyCarousel = () => {
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

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Property Portfolio
          </h2>
          <p className="text-lg text-muted-foreground">
            Properties I've worked on throughout my journey
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
                  {/* Image Container with Border */}
                  <div className="relative overflow-hidden rounded-2xl border-4 border-primary shadow-elegant transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                    <img
                      src={property.image}
                      alt={`Property in ${property.location}`}
                      className="w-full h-80 object-cover"
                    />
                    
                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/95 to-primary/60 backdrop-blur-sm p-4">
                      <p className="text-primary-foreground font-semibold text-lg">
                        {property.location}
                      </p>
                      <p className="text-primary-foreground/90 text-sm">
                        {property.year}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default PropertyCarousel;
