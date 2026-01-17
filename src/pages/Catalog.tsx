import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories } from "@/data/products";
import mangal1 from "@/assets/product-mangal-1.jpg";
import pech1 from "@/assets/product-pech-1.jpg";

const categoryImages: Record<string, string> = {
  mangal: mangal1,
  pech: pech1,
};

const Catalog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                Каталог
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Наши изделия
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Выберите категорию для просмотра всех доступных моделей
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/catalog/${category.slug}`}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-card hover:shadow-glow transition-all duration-500"
                >
                  <img
                    src={categoryImages[category.id]}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span>Смотреть все</span>
                      <svg 
                        className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
