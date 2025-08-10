import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-secondary to-accent">
      <div className="container max-w-6xl mx-auto text-center">
        <Card className="p-12 md:p-16 bg-background/80 backdrop-blur-sm border-border/50 shadow-lg">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo */}
            <div className="w-full max-w-md mx-auto">
              <img 
                src="/lovable-uploads/e58ba52c-c425-44b4-9f65-03e490062571.png" 
                alt="Zennoma - Secure. Anonymous. Yours." 
                className="w-full h-auto mx-auto"
              />
            </div>
            
            {/* Tagline */}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-light text-muted-foreground tracking-wider">
                SECURE. ANONYMOUS. YOURS.
              </p>
              <div className="w-24 h-0.5 bg-primary mx-auto"></div>
            </div>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Experience the future of secure, anonymous digital interactions. 
              Your privacy is our priority, your data remains yours.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;