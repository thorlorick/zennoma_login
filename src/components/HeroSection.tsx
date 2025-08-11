import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-secondary to-accent">
      <div className="container mx-auto px-4 py-8">
        {/* Logo positioned top left */}
        <div className="mb-16">
          <img 
            src="/img/logo.png" 
            alt="Zennoma Logo" 
            className="w-32 h-32 md:w-40 md:h-40"
          />
        </div>
        
        {/* Hero Text */}
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-8">
              Zennoma
            </h1>
            <p className="text-2xl md:text-4xl font-light text-muted-foreground tracking-wider">
              Secure. Anonymous. Yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
