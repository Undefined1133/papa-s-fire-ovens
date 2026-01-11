import heroImage from "@/assets/hero-mangal.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Мангал с огнём"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Decorative Fire Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Ручная работа мастера</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            Мангалы и Печи
            <span className="block text-gradient-fire">для вашего дома</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Создаём уникальные мангалы и печи из металла и кирпича. 
            Каждое изделие — произведение искусства для настоящих ценителей.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#catalog"
              className="px-8 py-4 bg-gradient-fire text-primary-foreground rounded-lg font-semibold text-lg hover:opacity-90 transition-all shadow-fire hover:shadow-glow"
            >
              Смотреть каталог
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-primary/50 text-foreground rounded-lg font-semibold text-lg hover:bg-primary/10 transition-all"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Листайте вниз</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
