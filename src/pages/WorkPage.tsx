import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getWorkBySlug, getProductTypeBySlug, getCategoryBySlug } from "@/data/products";
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

const WorkPage = () => {
  const { categorySlug, productTypeSlug, workSlug } = useParams();
  const work = getWorkBySlug(productTypeSlug || "", workSlug || "");
  const productType = getProductTypeBySlug(productTypeSlug || "");
  const category = getCategoryBySlug(categorySlug || "");
  const [copied, setCopied] = useState(false);

  if (!work || !productType || !category) {
    return <Navigate to="/catalog" replace />;
  }

  const otherWorks = productType.works.filter((w) => w.id !== work.id);

  const copySpecs = () => {
    const specsText = `${work.title}\n\n${work.specs
      .map((spec) => `${spec.label}:\n${spec.value}`)
      .join("\n\n")}`;
    
    navigator.clipboard.writeText(specsText);
    setCopied(true);
    toast.success("Характеристики скопированы!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">
              Каталог
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to={`/catalog/${categorySlug}`} className="text-muted-foreground hover:text-primary transition-colors">
              {category.title}
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to={`/catalog/${categorySlug}/${productTypeSlug}`} className="text-muted-foreground hover:text-primary transition-colors">
              {productType.title}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{work.title}</span>
          </nav>
        </div>

        {/* Work Details */}
        <section className="py-12 bg-gradient-dark">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Work Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={productImages[work.image]}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full uppercase tracking-wide">
                    {productType.title}
                  </span>
                </div>
              </div>

              {/* Work Info */}
              <div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {work.title}
                </h1>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {work.description}
                </p>

                {/* Specifications Card */}
                <div className="bg-card border border-border rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      Характеристики
                    </h2>
                    <button
                      onClick={copySpecs}
                      className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium"
                    >
                      {copied ? (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Скопировано
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Копировать ↓
                        </>
                      )}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {work.specs.map((spec, index) => (
                      <div
                        key={spec.label}
                        className={`p-4 rounded-lg ${
                          index % 2 === 0 ? "bg-muted/50" : "bg-muted/30"
                        }`}
                      >
                        <p className="text-muted-foreground text-sm mb-1">
                          {spec.label}:
                        </p>
                        <p className="text-foreground font-semibold text-lg">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/#contact"
                    className="flex-1 px-8 py-4 bg-gradient-fire text-primary-foreground font-semibold rounded-xl shadow-fire hover:shadow-glow transition-all text-center"
                  >
                    Заказать такой же
                  </a>
                  <a
                    href="tel:+79991234567"
                    className="flex-1 px-8 py-4 bg-muted text-foreground font-semibold rounded-xl hover:bg-muted/80 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Позвонить
                  </a>
                </div>
              </div>
            </div>

            {/* Other Works in this type */}
            {otherWorks.length > 0 && (
              <div className="mt-20">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
                  Другие работы: {productType.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {otherWorks.map((otherWork) => (
                    <Link
                      key={otherWork.id}
                      to={`/catalog/${categorySlug}/${productTypeSlug}/${otherWork.slug}`}
                      className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-card hover:shadow-glow transition-all duration-500"
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={productImages[otherWork.image]}
                          alt={otherWork.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {otherWork.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to product type */}
            <div className="mt-12 text-center">
              <Link
                to={`/catalog/${categorySlug}/${productTypeSlug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Все работы {productType.title}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WorkPage;
