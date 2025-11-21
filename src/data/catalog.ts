import dinamicosRaw from './dinamicos.json';

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
  validFrom?: string;
  validTo?: string;
  discount?: number;
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

type DinamicosCategory = 'Alimentos' | 'Higiene' | 'Limpieza' | 'Hogar';

type RawProduct = {
  codigo: string;
  nombre: string;
  categoria: string;
  vigencia: { inicio: string; fin: string };
  imagen: string;
  descuento: string;
  precio_normal: string;
  precio_oferta: string;
};

type DinamicosData = Record<DinamicosCategory, RawProduct[]>;

const dinamicos = dinamicosRaw as DinamicosData;

const FALLBACK_IMAGE = '/assets/producto.png';

const fallbackProduct: Product = {
  id: 'placeholder',
  name: 'Producto próximamente',
  code: 'Cod. 0000000000000',
  price: 0,
  regularPrice: 0,
  image: FALLBACK_IMAGE,
};

const toProduct = (item: RawProduct): Product => ({
  id: item.codigo,
  name: item.nombre,
  code: `Cod. ${item.codigo}`,
  price: parseFloat(item.precio_oferta) || 0,
  regularPrice: parseFloat(item.precio_normal) || 0,
  image: item.imagen || FALLBACK_IMAGE,
  validFrom: item.vigencia?.inicio,
  validTo: item.vigencia?.fin,
  discount: parseFloat(item.descuento) || undefined,
});

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

type CategoryConfig = Omit<CategoryBlock, 'featured' | 'products'> & {
  sourceKey: DinamicosCategory;
};

const categoryConfig: CategoryConfig[] = [
  {
    id: 'alimentos',
    title: 'Alimentos',
    accent: '#FF70C4',
    discountLabel: 'HASTA CON EL 40% DTO.',
    gradient: 'linear-gradient(180deg, #52004F 0%, #1a001b 60%, #090009 100%)',
    image: '/assets/producto-big.png',
    sourceKey: 'Alimentos',
    highlight: {
      image: '/assets/producto-big.png',
      product: 'Alimentos destacados',
      description: 'Sabor intenso para compartir durante tus Black Days.',
      price: 0,
      regularPrice: 0,
      badge: 'NUEVO',
    },
  },
  {
    id: 'higiene',
    title: 'Higiene',
    accent: '#FFB23E',
    discountLabel: 'HASTA CON EL 40% DTO.',
    gradient: 'linear-gradient(180deg, #613000 0%, #2c1200 70%, #090100 100%)',
    image: '/assets/producto-big.png',
    sourceKey: 'Higiene',
    highlight: {
      image: '/assets/producto-big.png',
      product: 'Set cuidado personal diario',
      description: 'Refuerza tu rutina con productos premium a precio AKÍ.',
      price: 0,
      regularPrice: 0,
    },
  },
  {
    id: 'limpieza',
    title: 'Limpieza',
    accent: '#25FF87',
    discountLabel: 'HASTA CON EL 40% DTO.',
    gradient: 'linear-gradient(180deg, #0b4024 0%, #042015 70%, #010805 100%)',
    image: '/assets/producto-big.png',
    sourceKey: 'Limpieza',
    highlight: {
      image: '/assets/producto-big.png',
      product: 'Combo limpieza profunda',
      description: 'Mantén cada rincón impecable con descuentos 4x3.',
      price: 0,
      regularPrice: 0,
    },
    reverseLayout: true,
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    accent: '#5DECFF',
    discountLabel: 'HASTA CON EL 40% DTO.',
    gradient: 'linear-gradient(180deg, #0b4024 0%, #042015 70%, #010805 100%)',
    image: '/assets/producto-big.png',
    sourceKey: 'Limpieza',
    highlight: {
      image: '/assets/producto-big.png',
      product: 'Combo limpieza profunda',
      description: 'Mantén cada rincón impecable con descuentos 4x3.',
      price: 0,
      regularPrice: 0,
    },
    reverseLayout: true,
  },
  /*{
    id: 'hogar',
    title: 'Hogar',
    accent: '#F22921',
    discountLabel: 'HASTA CON EL 40% DTO.',
    gradient: 'linear-gradient(180deg, #330009 0%, #120006 70%, #040003 100%)',
    image: '/assets/producto-big.png',
    sourceKey: 'Hogar',
    highlight: {
      image: '/assets/producto-big.png',
      product: 'Electrodomésticos destacados',
      description: 'Renueva tu hogar con precios de Black Days.',
      price: 0,
      regularPrice: 0,
    },
    reverseLayout: true,
  },*/
];

export const categories: CategoryBlock[] = categoryConfig.map((category) => {
  const rawItems = dinamicos[category.sourceKey] ?? [];
  const mappedProducts = rawItems.map(toProduct);
  const featured = mappedProducts[0] ?? fallbackProduct;
  const highlightSource = mappedProducts[1] ?? featured;

  return {
    id: category.id,
    title: category.title,
    accent: category.accent,
    discountLabel: category.discountLabel,
    gradient: category.gradient,
    image: category.image,
    reverseLayout: category.reverseLayout,
    products: mappedProducts,
    featured,
    highlight: {
      ...category.highlight,
      product: highlightSource.name,
      price: highlightSource.price,
      regularPrice: highlightSource.regularPrice,
      image: highlightSource.image || category.highlight.image,
    },
  };
});

