import dinamicosRaw from './dinamicos-ultra.json';

export type HeroPromo = {
  id: string;
  title: string;
  description: string;
  period: string;
  image: string;
  imageMobile?: string;
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

type DinamicosCategory = 'Alimentos' | 'Bebidas' | 'Higiene' | 'Limpieza' | 'Hogar';

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
    imageMobile: '/assets/banner-blackdays-mobile.png',
    border: '#FF70C4',
  },
  {
    id: 'hero-75',
    title: 'AKÍ BLACK DAYS',
    description: 'APROVECHA HASTA EL 75% DTO.',
    period: 'DEL 27 DE NOVIEMBRE AL 3 DE DICIEMBRE 2025',
    image: '/assets/banner-ultrablackdays.png',
    imageMobile: '/assets/banner-ultrablackdays-mobile.png',
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
    discountLabel: 'HASTA CON EL 50% DTO.',
    gradient: 'linear-gradient(180deg, #52004F 0%, #1a001b 60%, #090009 100%)',
    image: '/assets/categoria-big-alimentos.jpg',
    sourceKey: 'Alimentos',
    highlight: {
      image: '/assets/categoria-big-alimentos.jpg',
      product: 'Sabor intenso para compartir',
      description: 'Snacks, lácteos y despensa listos para tu carrito.',
      price: 0,
      regularPrice: 0,
      badge: 'NUEVO',
    },
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    accent: '#5DECFF',
    discountLabel: 'HASTA CON EL 50% DTO.',
    gradient: 'linear-gradient(180deg, #0b3351 0%, #081326 60%, #05000d 100%)',
    image: '/assets/categoria-big-bebidas.jpg',
    sourceKey: 'Bebidas',
    highlight: {
      image: '/assets/categoria-big-bebidas.jpg',
      product: 'Brindis ultra negros',
      description: 'Refrescos, cervezas y sidras con precios imbatibles.',
      price: 0,
      regularPrice: 0,
    },
    reverseLayout: true,
  },
  {
    id: 'higiene',
    title: 'Higiene',
    accent: '#FFB23E',
    discountLabel: 'HASTA CON EL 50% DTO.',
    gradient: 'linear-gradient(180deg, #613000 0%, #2c1200 70%, #090100 100%)',
    image: '/assets/categoria-big-higiene.jpg',
    sourceKey: 'Higiene',
    highlight: {
      image: '/assets/categoria-big-higiene.jpg',
      product: 'Rutina personal premium',
      description: 'Fragancias, cuidado capilar y corporal para tu día.',
      price: 0,
      regularPrice: 0,
    },
  },
  {
    id: 'limpieza',
    title: 'Limpieza',
    accent: '#25FF87',
    discountLabel: 'HASTA CON EL 50% DTO.',
    gradient: 'linear-gradient(180deg, #0b4024 0%, #042015 70%, #010805 100%)',
    image: '/assets/categoria-big-limpieza.jpg',
    sourceKey: 'Limpieza',
    highlight: {
      image: '/assets/categoria-big-limpieza.jpg',
      product: 'Combo limpieza profunda',
      description: 'Detergentes, suavizantes y multiusos para tu hogar.',
      price: 0,
      regularPrice: 0,
    },
    reverseLayout: true,
  },
  /*{
    id: 'hogar',
    title: 'Hogar',
    accent: '#F22921',
    discountLabel: 'HASTA CON EL 50% DTO.',
    gradient: 'linear-gradient(180deg, #330009 0%, #120006 70%, #040003 100%)',
    image: '/assets/categoria-big-hogar.jpg',
    sourceKey: 'Hogar',
    highlight: {
      image: '/assets/categoria-big-hogar.jpg',
      product: 'Todo para tu casa',
      description: 'Fragancias, textiles y accesorios para cada ambiente.',
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

