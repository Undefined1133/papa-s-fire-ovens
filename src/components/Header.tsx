import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-fire flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-xl">М</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl font-semibold text-foreground">Мангалы и Печи</span>
              <p className="text-xs text-muted-foreground">Ручная работа</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#catalog" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Каталог
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              О нас
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Контакты
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+37379217763" 
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-fire text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-fire"
            >
              <Phone className="w-4 h-4" />
              <span>Позвонить</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a 
                href="#catalog" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Каталог
              </a>
              <a 
                href="#about" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                О нас
              </a>
              <a 
                href="#contact" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Контакты
              </a>
              <a 
                href="tel:+79001234567" 
                className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-fire text-primary-foreground rounded-lg font-medium mt-2"
              >
                <Phone className="w-4 h-4" />
                <span>Позвонить</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
