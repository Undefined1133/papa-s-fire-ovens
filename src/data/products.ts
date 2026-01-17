// Product data with works/projects hierarchy

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Work {
  id: string;
  slug: string;
  title: string;
  image: string;
  gallery?: string[];
  description: string;
  specs: ProductSpec[];
}

export interface ProductType {
  id: string;
  slug: string;
  title: string;
  categoryId: string;
  image: string;
  description: string;
  works: Work[];
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

export const productTypes: ProductType[] = [
  // Мангалы
  {
    id: "mangal-premium",
    slug: "mangal-premium",
    title: "Мангал Премиум",
    categoryId: "mangal",
    image: "/product-mangal-1.jpg",
    description: "Современные мангалы из высококачественной стали с удобной конструкцией для профессионального приготовления.",
    works: [
      {
        id: "mangal-premium-1",
        slug: "mangal-premium-1",
        title: "Мангал Премиум 100",
        image: "/product-mangal-1.jpg",
        description: "Мангал на 12 шампуров, изготовлен для частного заказчика. Установлен на даче в Подмосковье.",
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
        id: "mangal-premium-2",
        slug: "mangal-premium-2",
        title: "Мангал Премиум 120",
        image: "/product-mangal-1.jpg",
        description: "Увеличенная версия для большой семьи. Выполнен с дополнительной полкой для аксессуаров.",
        specs: [
          { label: "Материал", value: "Сталь 3мм" },
          { label: "Размеры", value: "120x45x95 см" },
          { label: "Вес", value: "55 кг" },
          { label: "Количество шампуров", value: "15" },
          { label: "Высота ножек", value: "75 см" },
          { label: "Толщина стенок", value: "3 мм" },
          { label: "Покрытие", value: "Термостойкая краска" },
          { label: "Гарантия", value: "5 лет" },
        ],
      },
    ],
  },
  {
    id: "mangal-походный",
    slug: "mangal-pohodnyj",
    title: "Мангал Походный",
    categoryId: "mangal",
    image: "/product-mangal-2.jpg",
    description: "Компактные портативные мангалы из нержавеющей стали. Идеальны для пикников и выездов на природу.",
    works: [
      {
        id: "mangal-pohodnyj-1",
        slug: "mangal-pohodnyj-1",
        title: "Мангал Походный Мини",
        image: "/product-mangal-2.jpg",
        description: "Компактный мангал для 2-3 человек. Помещается в рюкзак.",
        specs: [
          { label: "Материал", value: "Нержавеющая сталь" },
          { label: "Размеры", value: "35x25x30 см" },
          { label: "Вес", value: "4 кг" },
          { label: "Количество шампуров", value: "4" },
          { label: "Складные ножки", value: "Да" },
          { label: "Толщина стенок", value: "1.5 мм" },
          { label: "Чехол в комплекте", value: "Да" },
          { label: "Гарантия", value: "2 года" },
        ],
      },
      {
        id: "mangal-pohodnyj-2",
        slug: "mangal-pohodnyj-2",
        title: "Мангал Походный Стандарт",
        image: "/product-mangal-2.jpg",
        description: "Оптимальный размер для компании 4-6 человек. С удобной ручкой для переноски.",
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
    ],
  },
  // Печи
  {
    id: "pech-tradicia",
    slug: "pech-tradicia",
    title: "Печь Традиция",
    categoryId: "pech",
    image: "/product-pech-1.jpg",
    description: "Классические кирпичные печи для выпечки хлеба и пиццы. Аутентичный дизайн с современными технологиями.",
    works: [
      {
        id: "pech-tradicia-80",
        slug: "pech-tradicia-80",
        title: "Печь Традиция 80",
        image: "/product-pech-1.jpg",
        description: "Компактная печь для небольшого участка. Установлена в саду частного дома.",
        specs: [
          { label: "Тип топлива", value: "Дрова" },
          { label: "Размер топки", value: "80x80 см" },
          { label: "Внутренний диаметр", value: "80 см" },
          { label: "Вес", value: "280 кг" },
          { label: "Дымоход", value: "Ø18 см" },
          { label: "Время нагрева", value: "35 мин" },
          { label: "Вместимость пицц", value: "3 шт" },
          { label: "Материал", value: "Шамотный кирпич" },
        ],
      },
      {
        id: "pech-tradicia-100",
        slug: "pech-tradicia-100",
        title: "Печь Традиция 100",
        image: "/product-pech-1.jpg",
        description: "Классическая модель среднего размера. Идеальна для семьи из 4-6 человек.",
        specs: [
          { label: "Тип топлива", value: "Дрова" },
          { label: "Размер топки", value: "100x100 см" },
          { label: "Внутренний диаметр", value: "100 см" },
          { label: "Вес", value: "350 кг" },
          { label: "Дымоход", value: "Ø20 см" },
          { label: "Время нагрева", value: "45 мин" },
          { label: "Вместимость пицц", value: "4 шт" },
          { label: "Материал", value: "Шамотный кирпич" },
        ],
      },
    ],
  },
  {
    id: "pech-kupolnaya",
    slug: "pech-kupolnaya",
    title: "Печь Купольная",
    categoryId: "pech",
    image: "/product-pech-2.jpg",
    description: "Большие садовые печи с куполом для приготовления на открытом воздухе. Включают место для хранения дров.",
    works: [
      {
        id: "pech-kupolnaya-100",
        slug: "pech-kupolnaya-100",
        title: "Печь Купольная 100",
        image: "/product-pech-2.jpg",
        description: "Средняя купольная печь для частного использования. Выложена декоративной мозаикой.",
        specs: [
          { label: "Тип топлива", value: "Дрова, Газ" },
          { label: "Размер топки", value: "100x100 см" },
          { label: "Внутренний диаметр", value: "100 см" },
          { label: "Вес", value: "400 кг" },
          { label: "Дымоход", value: "Ø20 см" },
          { label: "Время нагрева", value: "50 мин" },
          { label: "Вместимость пицц", value: "4 шт" },
          { label: "Хранение дров", value: "Встроенное" },
        ],
      },
      {
        id: "pech-kupolnaya-120",
        slug: "pech-kupolnaya-120",
        title: "Печь Купольная 120",
        image: "/product-pech-2.jpg",
        description: "Большая профессиональная печь. Установлена в загородном ресторане.",
        specs: [
          { label: "Тип топлива", value: "Дрова, Газ" },
          { label: "Размер топки", value: "120x120 см" },
          { label: "Внутренний диаметр", value: "120 см" },
          { label: "Вес", value: "500 кг" },
          { label: "Дымоход", value: "Ø25 см" },
          { label: "Время нагрева", value: "60 мин" },
          { label: "Вместимость пицц", value: "6 шт" },
          { label: "Хранение дров", value: "Встроенное" },
        ],
      },
    ],
  },
  {
    id: "pech-dekorativnaya",
    slug: "pech-dekorativnaya",
    title: "Печь Декоративная",
    categoryId: "pech",
    image: "/product-pech-3.jpg",
    description: "Уличные печи с художественной ковкой и орнаментом. Станут украшением любого сада.",
    works: [
      {
        id: "pech-dekorativnaya-1",
        slug: "pech-dekorativnaya-1",
        title: "Печь с виноградной лозой",
        image: "/product-pech-3.jpg",
        description: "Печь с художественной ковкой в виде виноградной лозы. Индивидуальный заказ.",
        specs: [
          { label: "Тип топлива", value: "Дрова" },
          { label: "Размер топки", value: "70x70 см" },
          { label: "Внутренний диаметр", value: "90 см" },
          { label: "Вес", value: "280 кг" },
          { label: "Дымоход", value: "Ø18 см" },
          { label: "Время нагрева", value: "40 мин" },
          { label: "Вместимость пицц", value: "3 шт" },
          { label: "Декор", value: "Виноградная лоза" },
        ],
      },
      {
        id: "pech-dekorativnaya-2",
        slug: "pech-dekorativnaya-2",
        title: "Печь с орнаментом",
        image: "/product-pech-3.jpg",
        description: "Печь с традиционным русским орнаментом. Выполнена для музея-усадьбы.",
        specs: [
          { label: "Тип топлива", value: "Дрова" },
          { label: "Размер топки", value: "80x80 см" },
          { label: "Внутренний диаметр", value: "100 см" },
          { label: "Вес", value: "320 кг" },
          { label: "Дымоход", value: "Ø20 см" },
          { label: "Время нагрева", value: "45 мин" },
          { label: "Вместимость пицц", value: "4 шт" },
          { label: "Декор", value: "Русский орнамент" },
        ],
      },
    ],
  },
];

export const getProductTypesByCategory = (categoryId: string): ProductType[] => {
  return productTypes.filter((pt) => pt.categoryId === categoryId);
};

export const getProductTypeBySlug = (slug: string): ProductType | undefined => {
  return productTypes.find((pt) => pt.slug === slug);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((category) => category.slug === slug);
};

export const getWorkBySlug = (productTypeSlug: string, workSlug: string): Work | undefined => {
  const productType = getProductTypeBySlug(productTypeSlug);
  return productType?.works.find((work) => work.slug === workSlug);
};
