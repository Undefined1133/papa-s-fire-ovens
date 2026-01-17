// Product data with detailed specifications

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  categoryId: string;
  image: string;
  gallery?: string[];
  description: string;
  specs: ProductSpec[];
}

export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "mangal",
    slug: "mangaly",
    title: "Мангалы",
    description: "Профессиональные мангалы ручной работы из высококачественной стали для идеального приготовления шашлыка и барбекю.",
    image: "/product-mangal-1.jpg",
  },
  {
    id: "pech",
    slug: "pechi",
    title: "Печи",
    description: "Традиционные и современные печи для выпечки хлеба, пиццы и приготовления блюд на открытом огне.",
    image: "/product-pech-1.jpg",
  },
];

export const products: Product[] = [
  // Мангалы
  {
    id: "mangal-premium",
    slug: "mangal-premium",
    title: "Мангал Премиум",
    categoryId: "mangal",
    image: "/product-mangal-1.jpg",
    description: "Современный мангал из высококачественной стали с удобной конструкцией для профессионального приготовления.",
    specs: [
      { label: "Материал", value: "Сталь 3мм" },
      { label: "Размеры", value: "100x40x90 см" },
      { label: "Вес", value: "45 кг" },
      { label: "Количество шампуров", value: "12" },
      { label: "Высота ножек", value: "70 см" },
      { label: "Толщина стенок", value: "3 мм" },
      { label: "Покрытие", value: "Термостойкая краска" },
      { label: "Гарантия", value: "5 лет" },
    ],
  },
  {
    id: "mangal-походный",
    slug: "mangal-pohodnyj",
    title: "Мангал Походный",
    categoryId: "mangal",
    image: "/product-mangal-2.jpg",
    description: "Компактный портативный мангал из нержавеющей стали. Идеален для пикников и выездов на природу.",
    specs: [
      { label: "Материал", value: "Нержавеющая сталь" },
      { label: "Размеры", value: "50x30x40 см" },
      { label: "Вес", value: "8 кг" },
      { label: "Количество шампуров", value: "6" },
      { label: "Складные ножки", value: "Да" },
      { label: "Толщина стенок", value: "2 мм" },
      { label: "Чехол в комплекте", value: "Да" },
      { label: "Гарантия", value: "3 года" },
    ],
  },
  {
    id: "mangal-korol",
    slug: "mangal-korol",
    title: "Мангал Король",
    categoryId: "mangal",
    image: "/product-mangal-1.jpg",
    description: "Роскошный мангал с декоративной ковкой и увеличенной рабочей зоной для больших компаний.",
    specs: [
      { label: "Материал", value: "Сталь 4мм + ковка" },
      { label: "Размеры", value: "150x50x100 см" },
      { label: "Вес", value: "85 кг" },
      { label: "Количество шампуров", value: "20" },
      { label: "Боковые столики", value: "2 шт" },
      { label: "Толщина стенок", value: "4 мм" },
      { label: "Декор", value: "Художественная ковка" },
      { label: "Гарантия", value: "10 лет" },
    ],
  },
  // Печи
  {
    id: "pech-tradicia",
    slug: "pech-tradicia",
    title: "Печь Традиция",
    categoryId: "pech",
    image: "/product-pech-1.jpg",
    description: "Классическая кирпичная печь для выпечки хлеба и пиццы. Аутентичный дизайн с современными технологиями.",
    specs: [
      { label: "Тип топлива", value: "Дрова" },
      { label: "Размер топки", value: "80x80 см" },
      { label: "Внутренний диаметр", value: "100 см" },
      { label: "Вес", value: "350 кг" },
      { label: "Дымоход", value: "Ø20 см" },
      { label: "Время нагрева", value: "45 мин" },
      { label: "Вместимость пицц", value: "4 шт" },
      { label: "Материал", value: "Шамотный кирпич" },
    ],
  },
  {
    id: "pech-kupolnaya",
    slug: "pech-kupolnaya",
    title: "Печь Купольная",
    categoryId: "pech",
    image: "/product-pech-2.jpg",
    description: "Большая садовая печь с куполом для приготовления на открытом воздухе. Включает место для хранения дров.",
    specs: [
      { label: "Тип топлива", value: "Дрова, Газ" },
      { label: "Размер топки", value: "100x100 см" },
      { label: "Внутренний диаметр", value: "120 см" },
      { label: "Вес", value: "500 кг" },
      { label: "Дымоход", value: "Ø25 см" },
      { label: "Время нагрева", value: "60 мин" },
      { label: "Вместимость пицц", value: "6 шт" },
      { label: "Хранение дров", value: "Встроенное" },
    ],
  },
  {
    id: "pech-dekorativnaya",
    slug: "pech-dekorativnaya",
    title: "Печь Декоративная",
    categoryId: "pech",
    image: "/product-pech-3.jpg",
    description: "Уличная печь с художественной ковкой и орнаментом. Станет украшением любого сада.",
    specs: [
      { label: "Тип топлива", value: "Дрова" },
      { label: "Размер топки", value: "70x70 см" },
      { label: "Внутренний диаметр", value: "90 см" },
      { label: "Вес", value: "280 кг" },
      { label: "Дымоход", value: "Ø18 см" },
      { label: "Время нагрева", value: "40 мин" },
      { label: "Вместимость пицц", value: "3 шт" },
      { label: "Декор", value: "Художественная ковка" },
    ],
  },
  {
    id: "pech-mini",
    slug: "pech-mini",
    title: "Печь Мини",
    categoryId: "pech",
    image: "/product-pech-1.jpg",
    description: "Компактная печь для небольших участков. Идеальна для дачи и загородного дома.",
    specs: [
      { label: "Тип топлива", value: "Дрова" },
      { label: "Размер топки", value: "50x50 см" },
      { label: "Внутренний диаметр", value: "60 см" },
      { label: "Вес", value: "150 кг" },
      { label: "Дымоход", value: "Ø15 см" },
      { label: "Время нагрева", value: "30 мин" },
      { label: "Вместимость пицц", value: "2 шт" },
      { label: "Мобильная", value: "Да" },
    ],
  },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.categoryId === categoryId);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((category) => category.slug === slug);
};
