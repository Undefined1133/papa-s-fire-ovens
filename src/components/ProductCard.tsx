interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

const ProductCard = ({ image, title, category, description }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-card hover:shadow-glow transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full uppercase tracking-wide">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Hover Action */}
        <div className="mt-4 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span>Подробнее</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
