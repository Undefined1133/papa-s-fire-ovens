import { useState } from "react";
import { Link } from "react-router-dom";
import mangal1 from "@/assets/product-mangal-1.jpg";
import mangal2 from "@/assets/product-mangal-2.jpg";
import pech1 from "@/assets/product-pech-1.jpg";
import pech2 from "@/assets/product-pech-2.jpg";
import pech3 from "@/assets/product-pech-3.jpg";
import { productTypes, categories } from "@/data/products";

const productImages: Record<string, string> = {
  "/product-mangal-1.jpg": mangal1,
  "/product-mangal-2.jpg": mangal2,
  "/product-pech-1.jpg": pech1,
  "/product-pech-2.jpg": pech2,
  "/product-pech-3.jpg": pech3,
};

const CatalogSection = () => {
  const [filter, setFilter] = useState<"all" | "mangal" | "pech">("all");

  const filteredTypes = productTypes.filter((pt) => 
    filter === "all" ? true : pt.categoryId === filter
  );

  const getCategorySlug = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.slug || "";
  };

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
            { key: "all", label: "Все типы" },
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

        {/* Product Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTypes.map((productType) => (
            <Link
              key={productType.id}
              to={`/catalog/${getCategorySlug(productType.categoryId)}/${productType.slug}`}
              className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-card hover:shadow-glow transition-all duration-500 animate-scale-in"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={productImages[productType.image]}
                  alt={productType.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full uppercase tracking-wide">
                    {categories.find((c) => c.id === productType.categoryId)?.title}
                  </span>
                </div>

                {/* Works count */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-background/80 text-foreground text-xs font-semibold rounded-full">
                    {productType.works.length} работ
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {productType.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {productType.description}
                </p>
                
                {/* Hover Action */}
                <div className="mt-4 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Смотреть работы</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-fire text-primary-foreground font-semibold rounded-xl shadow-fire hover:shadow-glow transition-all"
          >
            Смотреть весь каталог
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
