import { Flame, Shield, Wrench, Award } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Ручная работа",
    description: "Каждое изделие создаётся вручную мастером с многолетним опытом работы.",
  },
  {
    icon: Shield,
    title: "Надёжность",
    description: "Используем только качественные материалы — сталь и кирпич высшего сорта.",
  },
  {
    icon: Flame,
    title: "Долговечность",
    description: "Наши мангалы и печи служат десятилетиями при правильном уходе.",
  },
  {
    icon: Award,
    title: "Гарантия качества",
    description: "Предоставляем гарантию на все изделия и консультируем по эксплуатации.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              О мастере
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Традиции и мастерство
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Более 15 лет создаю мангалы и печи для ценителей настоящего огня. 
              Каждое изделие — это сочетание традиционных техник и современных решений. 
              Работаю на заказ, учитывая все пожелания клиента.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-fire flex items-center justify-center shadow-fire">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-card border border-border overflow-hidden shadow-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-fire flex items-center justify-center shadow-glow">
                    <Flame className="w-16 h-16 text-primary-foreground" />
                  </div>
                  <p className="font-serif text-6xl font-bold text-gradient-fire">15+</p>
                  <p className="text-muted-foreground mt-2">лет опыта</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
