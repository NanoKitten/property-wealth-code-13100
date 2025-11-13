import { LayoutVariant } from "./ProjectStyleSelector";
import basementDerelict from "@/assets/projects/before/basement-derelict.jpg";
import doorDamaged from "@/assets/projects/before/door-damaged.jpg";
import scaffoldingExterior from "@/assets/projects/before/scaffolding-exterior.jpg";
import roomMidRenovation from "@/assets/projects/during/room-mid-renovation.jpg";
import livingAreaProgress from "@/assets/projects/during/living-area-progress.jpg";
import staircaseWork from "@/assets/projects/during/staircase-work.jpg";
import diningRoomFinished from "@/assets/projects/after/dining-room-finished.jpg";
import hallwayComplete from "@/assets/projects/after/hallway-complete.jpg";
import bedroomStyled from "@/assets/projects/after/bedroom-styled.jpg";
import nearComplete from "@/assets/projects/after/near-complete.jpg";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TransformationStoryProps {
  variant: LayoutVariant;
}

const storyData = {
  intro: {
    title: "The Transformation Journey: From Vision to Reality",
    description: "The path from a derelict property to a stunning home is rarely straightforward. It's filled with unexpected challenges, countless decisions, and moments of doubt. But when you finally stand in that transformed space-with warm light flooding through the windows, beautiful finishes catching your eye, and the smell of fresh paint in the air-every obstacle, every late night, every difficult choice becomes absolutely worth it.\n\nThis is the journey I've walked over 20 times. And each transformation tells a story of perseverance, strategy, and the powerful feeling of turning potential into reality."
  },
  before: {
    title: "The Beginning",
    subtitle: "Seeing Potential Where Others Don't",
    description: "Every transformation starts with a property others have walked away from. Damaged ceilings, exposed walls, structural concerns-these are the diamonds in the rough that most investors miss. While others see problems, I see possibilities.",
    images: [
      { src: basementDerelict, alt: "Derelict basement with exposed walls and damaged ceiling" },
      { src: doorDamaged, alt: "Damaged door and deteriorating entrance" },
      { src: scaffoldingExterior, alt: "Exterior with scaffolding for structural work" }
    ]
  },
  during: {
    title: "The Journey",
    subtitle: "When Things Get Real",
    description: "This is where the vision meets reality. Unexpected structural issues. Budget recalculations. Design pivots. The middle phase is messy, confusing, and often overwhelming. But it's also where the magic starts to take shape-where chaos gradually transforms into order, and you can finally start to see your vision emerging.",
    images: [
      { src: roomMidRenovation, alt: "Room mid-renovation with visible progress" },
      { src: livingAreaProgress, alt: "Living area under construction showing transformation" },
      { src: staircaseWork, alt: "Staircase and hallway renovation in progress" }
    ]
  },
  after: {
    title: "The Reward",
    subtitle: "Standing in Your Success",
    description: "Then comes the moment that makes it all worthwhile. The chaos transforms into beauty. The stress melts into pride. You're standing in a space you created from nothing, knowing you turned a derelict building into someone's future home-and significant wealth for yourself. The bumpy, confusing, long journey suddenly feels like the shortest path when you see the finished result.",
    images: [
      { src: diningRoomFinished, alt: "Beautifully finished dining room with modern design" },
      { src: hallwayComplete, alt: "Completed hallway with elegant finishes" },
      { src: bedroomStyled, alt: "Styled bedroom showcasing the final transformation" },
      { src: nearComplete, alt: "Near-complete property interior with stunning details" }
    ]
  }
};

const TransformationStory = ({ variant }: TransformationStoryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (variant === "journey") {
    return (
      <div className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Intro */}
          <div className="mb-20 max-w-4xl mx-auto">
            <div className="bg-gradient-primary rounded-3xl p-12 text-primary-foreground shadow-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{storyData.intro.title}</h2>
              <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line opacity-95">
                {storyData.intro.description}
              </p>
            </div>
          </div>

          {/* Before Section */}
          <div className="mb-24 animate-fade-in">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-semibold mb-4">
                Stage 1
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{storyData.before.title}</h3>
              <p className="text-xl text-primary font-semibold mb-4">{storyData.before.subtitle}</p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{storyData.before.description}</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {storyData.before.images.map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover-scale cursor-pointer">
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    onClick={() => setSelectedImage(img.src)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* During Section */}
          <div className="mb-24 animate-fade-in">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
                Stage 2
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{storyData.during.title}</h3>
              <p className="text-xl text-primary font-semibold mb-4">{storyData.during.subtitle}</p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{storyData.during.description}</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {storyData.during.images.map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover-scale cursor-pointer">
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    onClick={() => setSelectedImage(img.src)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* After Section */}
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Stage 3
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{storyData.after.title}</h3>
              <p className="text-xl text-primary font-semibold mb-4">{storyData.after.subtitle}</p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{storyData.after.description}</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {storyData.after.images.map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover-scale cursor-pointer">
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                    onClick={() => setSelectedImage(img.src)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <img 
              src={selectedImage} 
              alt="Full size view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    );
  }

  if (variant === "sidebyside") {
    return (
      <div className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Intro */}
          <div className="mb-20 max-w-4xl mx-auto">
            <div className="bg-gradient-primary rounded-3xl p-12 text-primary-foreground shadow-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{storyData.intro.title}</h2>
              <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line opacity-95">
                {storyData.intro.description}
              </p>
            </div>
          </div>

          {/* Side by Side Comparison */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Before Side */}
            <div className="space-y-6">
              <div className="bg-destructive/10 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-destructive mb-2">Before</h3>
                <p className="text-muted-foreground">{storyData.before.subtitle}</p>
              </div>
              {storyData.before.images.map((img, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img src={img.src} alt={img.alt} className="w-full h-72 object-cover" />
                </div>
              ))}
            </div>

            {/* After Side */}
            <div className="space-y-6">
              <div className="bg-primary/10 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">After</h3>
                <p className="text-muted-foreground">{storyData.after.subtitle}</p>
              </div>
              {storyData.after.images.map((img, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img src={img.src} alt={img.alt} className="w-full h-72 object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* During Section Full Width */}
          <div className="mt-16">
            <div className="bg-accent/20 rounded-2xl p-8 text-center mb-8">
              <h3 className="text-2xl font-bold text-accent-foreground mb-2">{storyData.during.title}</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">{storyData.during.description}</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {storyData.during.images.map((img, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img src={img.src} alt={img.alt} className="w-full h-80 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "grid") {
    const allImages = [
      ...storyData.before.images.map(img => ({ ...img, stage: "Before" })),
      ...storyData.during.images.map(img => ({ ...img, stage: "During" })),
      ...storyData.after.images.map(img => ({ ...img, stage: "After" }))
    ];

    return (
      <div className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Intro */}
          <div className="mb-20 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {storyData.intro.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {storyData.intro.description}
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {allImages.map((img, idx) => (
              <div 
                key={idx} 
                className="group relative break-inside-avoid overflow-hidden rounded-2xl shadow-lg cursor-pointer hover-scale"
                onClick={() => setSelectedImage(img.src)}
              >
                <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground">
                      {img.stage}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <img src={selectedImage} alt="Full size" className="max-w-full max-h-full object-contain rounded-lg" />
          </div>
        )}
      </div>
    );
  }

  if (variant === "carousel") {
    const carouselSlides = [
      { ...storyData.before, image: storyData.before.images[0] },
      { ...storyData.during, image: storyData.during.images[0] },
      { ...storyData.after, image: storyData.after.images[0] }
    ];

    return (
      <div className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Intro */}
          <div className="mb-20 max-w-4xl mx-auto">
            <div className="bg-gradient-primary rounded-3xl p-12 text-primary-foreground shadow-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{storyData.intro.title}</h2>
              <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line opacity-95">
                {storyData.intro.description}
              </p>
            </div>
          </div>

          {/* Story Carousel */}
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {carouselSlides.map((slide, idx) => (
                <CarouselItem key={idx}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                      <img src={slide.image.src} alt={slide.image.alt} className="w-full h-[500px] object-cover" />
                    </div>
                    <div className="space-y-6 p-8">
                      <div>
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                          Stage {idx + 1}
                        </span>
                        <h3 className="text-3xl font-bold text-foreground mb-3">{slide.title}</h3>
                        <p className="text-xl text-primary font-semibold mb-4">{slide.subtitle}</p>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">{slide.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-24 h-2 bg-destructive/20 rounded-full overflow-hidden">
              <div className="h-full bg-destructive w-full" />
            </div>
            <div className="w-24 h-2 bg-accent/20 rounded-full overflow-hidden">
              <div className="h-full bg-accent w-full" />
            </div>
            <div className="w-24 h-2 bg-primary/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "fullstory") {
    return (
      <div className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Article Style Long Form */}
          <article className="prose prose-lg max-w-none">
            <div className="mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
                {storyData.intro.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed whitespace-pre-line">
                {storyData.intro.description}
              </p>
            </div>

            {/* Before Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">{storyData.before.title}: {storyData.before.subtitle}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{storyData.before.description}</p>
              <div className="grid lg:grid-cols-3 gap-4 mb-8">
                {storyData.before.images.map((img, idx) => (
                  <img key={idx} src={img.src} alt={img.alt} className="rounded-xl shadow-lg w-full h-64 object-cover" />
                ))}
              </div>
            </div>

            {/* During Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">{storyData.during.title}: {storyData.during.subtitle}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{storyData.during.description}</p>
              <div className="grid lg:grid-cols-3 gap-4 mb-8">
                {storyData.during.images.map((img, idx) => (
                  <img key={idx} src={img.src} alt={img.alt} className="rounded-xl shadow-lg w-full h-64 object-cover" />
                ))}
              </div>
            </div>

            {/* After Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">{storyData.after.title}: {storyData.after.subtitle}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{storyData.after.description}</p>
              <div className="grid lg:grid-cols-2 gap-4">
                {storyData.after.images.map((img, idx) => (
                  <img key={idx} src={img.src} alt={img.alt} className="rounded-xl shadow-lg w-full h-80 object-cover" />
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-primary rounded-3xl p-12 text-primary-foreground shadow-xl">
              <h3 className="text-3xl font-bold mb-6">The Journey Is Worth It</h3>
              <p className="text-lg leading-relaxed opacity-95">
                Each property transformation teaches new lessons, reveals unexpected challenges, and ultimately rewards those who persist. 
                The journey from derelict to dream home is never easy-but standing in that finished space, knowing what it once was 
                and seeing what it's become, makes every struggle worthwhile.
              </p>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return null;
};

export default TransformationStory;
