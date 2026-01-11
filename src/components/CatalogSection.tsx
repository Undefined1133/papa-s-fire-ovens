import { useState } from "react";
import ProductCard from "./ProductCard";
import mangal1 from "@/assets/product-mangal-1.jpg";
import mangal2 from "@/assets/product-mangal-2.jpg";
import pech1 from "@/assets/product-pech-1.jpg";
import pech2 from "@/assets/product-pech-2.jpg";
import pech3 from "@/assets/product-pech-3.jpg";

const products = [
  {
    id: 1,
    image: mangal1,
    title: "Мангал Премиум",
    category: "Мангалы",
    description: "Современный мангал из высококачественной стали с удобной конструкцией для профессионального приготовления.",
    filter: "mangal",
  },
  {
    id: 2,
    image: pech1,
    title: "Печь Традиция",
    category: "Печи",
    description: "Классическая кирпичная печь для выпечки хлеба и пиццы. Аутентичный дизайн с современными технологиями.",
    filter: "pech",
  },
  {
    id: 3,
    image: pech2,
    title: "Печь Купольная",
    category: "Печи",
    description: "Большая садовая печь с куполом для приготовления на открытом воздухе. Включает место для хранения дров.",
    filter: "pech",
  },
  {
    id: 4,
    image: mangal2,
    title: "Мангал Походный",
    category: "Мангалы",
    description: "Компактный портативный мангал из нержавеющей стали. Идеален для пикников и выездов на природу.",
    filter: "mangal",
  },
  {
    id: 5,
    image: pech3,
    title: "Печь Декоративная",
    category: "Печи",
    description: "Уличная печь с художественной ковкой и орнаментом. Станет украшением любого сада.",
    filter: "pech",
  },
];

const CatalogSection = () => {
  const [filter, setFilter] = useState<"all" | "mangal" | "pech">("all");

  const filteredProducts = products.filter((product) => 
    filter === "all" ? true : product.filter === filter
  );

  return (
    <section id="catalog" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Наш каталог
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Изделия ручной работы
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Каждое изделие создаётся вручную с любовью и вниманием к деталям. 
            Выбирайте из нашей коллекции мангалов и печей.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { key: "all", label: "Все изделия" },
            { key: "mangal", label: "Мангалы" },
            { key: "pech", label: "Печи" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as typeof filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                filter === tab.key
                  ? "bg-gradient-fire text-primary-foreground shadow-fire"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="animate-scale-in">
              <ProductCard
                image={product.image}
                title={product.title}
                category={product.category}
                description={product.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
