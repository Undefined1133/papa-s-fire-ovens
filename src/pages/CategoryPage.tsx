import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCategoryBySlug, getProductTypesByCategory, categories } from "@/data/products";
import mangal1 from "@/assets/product-mangal-1.jpg";
import mangal2 from "@/assets/product-mangal-2.jpg";
import pech1 from "@/assets/product-pech-1.jpg";
import pech2 from "@/assets/product-pech-2.jpg";
import pech3 from "@/assets/product-pech-3.jpg";

const productImages: Record<string, string> = {
  "/product-mangal-1.jpg": mangal1,
  "/product-mangal-2.jpg": mangal2,
  "/product-pech-1.jpg": pech1,
  "/product-pech-2.jpg": pech2,
  "/product-pech-3.jpg": pech3,
};

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug || "");
  
  if (!category) {
    return <Navigate to="/catalog" replace />;
  }

  const productTypes = getProductTypesByCategory(category.id);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">
              Каталог
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{category.title}</span>
          </nav>
        </div>

        {/* Category Header */}
        <section className="py-12 bg-gradient-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                Типы изделий
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                {category.title}
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                {category.description}
              </p>
            </div>

            {/* Product Types Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productTypes.map((productType) => (
                <Link
                  key={productType.id}
                  to={`/catalog/${categorySlug}/${productType.slug}`}
                  className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-card hover:shadow-glow transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={productImages[productType.image]}
                      alt={productType.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    
                    {/* Works count badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                        {productType.works.length} работ
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {productType.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                      {productType.description}
                    </p>

                    {/* Hover Action */}
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span>Смотреть работы</span>
                      <svg 
                        className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" 
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

            {/* Other Categories */}
            <div className="mt-16 text-center">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Другие категории
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {categories
                  .filter((c) => c.id !== category.id)
                  .map((c) => (
                    <Link
                      key={c.id}
                      to={`/catalog/${c.slug}`}
                      className="px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      {c.title}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
