export type HeroPromo = {
  id: string;
  title: string;
  description: string;
  period: string;
  image: string;
  border: string;
};

export type Product = {
  id: string;
  name: string;
  code: string;
  price: number;
  regularPrice: number;
  image: string;
};

export type CategoryBlock = {
  id: string;
  title: string;
  accent: string;
  discountLabel: string;
  gradient: string;
  image: string;
  reverseLayout?: boolean;
  highlight: {
    image: string;
    product: string;
    description: string;
    price: number;
    regularPrice: number;
    badge?: string;
  };
  featured: Product;
  products: Product[];
};

export const heroPromos: HeroPromo[] = [
  {
    id: 'hero-40',
    title: 'AKÍ BLACK DAYS',
    description: 'APROVECHA HASTA EL 40% DTO.',
    period: 'DEL 13 DE NOVIEMBRE AL 3 DE DICIEMBRE 2025',
    image: '/assets/banner-blackdays.png',
    border: '#FF70C4',
  },
  {
    id: 'hero-75',
    title: 'AKÍ BLACK DAYS',
    description: 'APROVECHA HASTA EL 75% DTO.',
    period: 'DEL 27 DE NOVIEMBRE AL 3 DE DICIEMBRE 2025',
    image: '/assets/banner-ultrablackdays.png',
    border: '#FFDE00',
  },
];

const placeholderProducts = (prefix: string): Product[] => [
  {
    id: `${prefix}-1`,
    name: `${prefix} Producto 1`,
    code: 'Cod. 7861001300932',
    price: 1.29,
    regularPrice: 2.59,
    image: '/assets/producto.png',
  },
  {
    id: `${prefix}-2`,
    name: `${prefix} Producto 2`,
    code: 'Cod. 7861001300932',
    price: 0.99,
    regularPrice: 1.89,
    image: '/assets/producto.png',
  },
  {
    id: `${prefix}-3`,
    name: `${prefix} Producto 3`,
    code: 'Cod. 7861001300932',
    price: 2.49,
    regularPrice: 3.99,
    image: '/assets/producto.png',
  },
  {
    id: `${prefix}-4`,
    name: `${prefix} Producto 4`,
    code: 'Cod. 7861001300932',
    price: 3.19,
    regularPrice: 4.29,
    image: '/assets/producto.png',
  },
  {
    id: `${prefix}-5`,
    name: `${prefix} Producto 5`,
    code: 'Cod. 7861001300932',
    price: 1.49,
    regularPrice: 2.49,
    image: '/assets/producto.png',
  },
  {
    id: `${prefix}-6`,
    name: `${prefix} Producto 6`,
    code: 'Cod. 7861001300932',
    price: 2.19,
    regularPrice: 3.39,
    image: '/assets/producto.png',
  },
];

export const categories: CategoryBlock[] = [
  {
    id: 'alimentos',
    title: 'Alimentos y Despensa',
    accent: '#FF70C4',
    discountLabel: 'HASTA CON EL 40% DTO.',
    gradient: 'linear-gradient(180deg, #52004F 0%, #1a001b 60%, #090009 100%)',
    image: '/assets/producto.png',
    highlight: {
      image: '/assets/producto-big.png',
      product: 'Doritos Mega Queso 500 g.',
      description: 'Sabor intenso para compartir durante tus Black Days.',
      price: 1.29,
      regularPrice: 4.08,
      badge: 'NUEVO',
    },
    featured: {
      id: 'bonella',
      name: 'Bonella Margarina 320 g',
      code: 'Cod. 7861001300932',
      price: 1.29,
      regularPrice: 4.08,
      image: '/assets/producto.png',
    },
    products: placeholderProducts('Alimentos'),
  },
  {
    id: 'bebidas',
    title: 'Variedad de Bebidas',
    accent: '#5DECFF',
    discountLabel: 'HASTA CON EL 40% DTO.',
    gradient: 'linear-gradient(180deg, #0b3351 0%, #081326 60%, #05000d 100%)',
    image: '/assets/producto.png',
    reverseLayout: true,
    highlight: {
      image: '/assets/producto-big.png',
      product: 'Pack refrescante cítrico',
      description: 'Combos familiares 3x2 para cada celebración.',
      price: 12.9,
      regularPrice: 18.5,
    },
    featured: {
      id: 'cola-mega',
      name: 'Cola Mega 3 L x2',
      code: 'Cod. 7861001300932',
      price: 5.49,
      regularPrice: 8.5,
      image: '/assets/producto.png',
    },
    products: placeholderProducts('Bebidas'),
  },
  {
    id: 'higiene',
    title: 'Productos de Higiene',
    accent: '#FFB23E',
    discountLabel: 'HASTA CON EL 40% DTO.',
    gradient: 'linear-gradient(180deg, #613000 0%, #2c1200 70%, #090100 100%)',
    image: '/assets/producto.png',
    highlight: {
      image: '/assets/producto-big.png',
      product: 'Set cuidado personal diario',
      description: 'Refuerza tu rutina con productos premium a precio AKÍ.',
      price: 1.29,
      regularPrice: 3.2,
    },
    featured: {
      id: 'deodorante',
      name: 'Deodorante en barra 70 g',
      code: 'Cod. 7861001300932',
      price: 1.29,
      regularPrice: 2.95,
      image: '/assets/producto.png',
    },
    products: placeholderProducts('Higiene'),
  },
  {
    id: 'limpieza',
    title: 'Productos de Limpieza',
    accent: '#25FF87',
    discountLabel: 'HASTA CON EL 40% DTO.',
    gradient: 'linear-gradient(180deg, #0b4024 0%, #042015 70%, #010805 100%)',
    image: '/assets/producto.png',
    reverseLayout: true,
    highlight: {
      image: '/assets/producto-big.png',
      product: 'Combo limpieza profunda',
      description: 'Mantén cada rincón impecable con descuentos 4x3.',
      price: 1.29,
      regularPrice: 3.9,
    },
    featured: {
      id: 'ultra-clean',
      name: 'Jabón Ultra Clean 3 kg',
      code: 'Cod. 7861001300932',
      price: 1.29,
      regularPrice: 4.08,
      image: '/assets/producto.png',
    },
    products: placeholderProducts('Limpieza'),
  },
];

