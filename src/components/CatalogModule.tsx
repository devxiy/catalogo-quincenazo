'use client';

import NeonHeader from './NeonHeader';
import HeroSplit from './HeroSplit';
import ProductHighlightGrid from './ProductHighlightGrid';
import CategorySection, { CategorySectionProps } from './CategorySection';

const sections: CategorySectionProps[] = [
  {
    title: 'Alimentos y Despensa',
    accent: '#FF70C4',
    discountLabel: 'HASTA CON EL 40% DTO.',
    gradient: 'linear-gradient(180deg, #52004F 0%, #1a001b 60%, #090009 100%)',
    highlight: {
      image: '/blackdays/imgLayer2.png',
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
      image: '/blackdays/imgLimpiezaBig2.png',
    },
    products: [
      {
        id: 'al1',
        name: 'Aceite Botanico 900 ml',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.99,
        image: '/blackdays/img01ArrozMacareno19.png',
      },
      {
        id: 'al2',
        name: 'Galletas Club Social',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.19,
        image: '/blackdays/img01ArrozMacareno20.png',
      },
      {
        id: 'al3',
        name: 'Café Tradición 250 g',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 3.49,
        image: '/blackdays/img01ArrozMacareno17.png',
      },
      {
        id: 'al4',
        name: 'Harina PAN 1 kg',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.6,
        image: '/blackdays/img01ArrozMacareno18.png',
      },
      {
        id: 'al5',
        name: 'Doritos Mega Pack 250 g',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.99,
        image: '/blackdays/img01ArrozMacareno33.png',
      },
      {
        id: 'al6',
        name: 'Chocolate en polvo 300 g',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.99,
        image: '/blackdays/img01ArrozMacareno34.png',
      },
      {
        id: 'al7',
        name: 'Snacks Club Social',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.2,
        image: '/blackdays/img01ArrozMacareno22.png',
      },
      {
        id: 'al8',
        name: 'Galletas Nestlé 6 pack',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.4,
        image: '/blackdays/img01ArrozMacareno23.png',
      },
    ],
  },
  {
    title: 'Variedad de Bebidas',
    accent: '#5DECFF',
    discountLabel: 'HASTA CON EL 40% DTO.',
    gradient: 'linear-gradient(180deg, #0b3351 0%, #081326 60%, #05000d 100%)',
    highlight: {
      image: '/blackdays/imgLimpiezaBig4.png',
      product: 'Pack refrescante cítrico',
      description: 'Combos familiares 3x2 para cada celebración.',
      price: 12.9,
      regularPrice: 18.5,
    },
    featured: {
      id: 'beb-ft',
      name: 'Cola Mega 3 L x2',
      code: 'Cod. 7861001300932',
      price: 5.49,
      regularPrice: 8.5,
      image: '/blackdays/img01ArrozMacareno24.png',
    },
    products: [
      {
        id: 'beb1',
        name: 'Gaseosa Citrus 3 L',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.9,
        image: '/blackdays/img01ArrozMacareno26.png',
      },
      {
        id: 'beb2',
        name: 'Jugo Néctar Tropical 1 L',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.75,
        image: '/blackdays/img01ArrozMacareno29.png',
      },
      {
        id: 'beb3',
        name: 'Bebida Energética 473 ml',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.8,
        image: '/blackdays/img01ArrozMacareno30.png',
      },
      {
        id: 'beb4',
        name: 'Café Helado Ready to go',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.95,
        image: '/blackdays/img01ArrozMacareno31.png',
      },
      {
        id: 'beb5',
        name: 'Bebida Láctea Vainilla 1 L',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.8,
        image: '/blackdays/img01ArrozMacareno38.png',
      },
      {
        id: 'beb6',
        name: 'Bebida Sabor Mora 1 L',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.8,
        image: '/blackdays/img01ArrozMacareno39.png',
      },
    ],
  },
  {
    title: 'Productos de Higiene',
    accent: '#FFB23E',
    discountLabel: 'HASTA CON EL 40% DTO.',
    gradient: 'linear-gradient(180deg, #613000 0%, #2c1200 70%, #090100 100%)',
    highlight: {
      image: '/blackdays/imgLayer1.png',
      product: 'Set cuidado personal diario',
      description: 'Refuerza tu rutina con productos premium a precio AKÍ.',
      price: 1.29,
      regularPrice: 3.2,
    },
    featured: {
      id: 'hig-ft',
      name: 'Deodorante en barra 70 g',
      code: 'Cod. 7861001300932',
      price: 1.29,
      regularPrice: 2.95,
      image: '/blackdays/img01ArrozMacareno25.png',
    },
    products: [
      {
        id: 'hig1',
        name: 'Toallas Nosotras x24',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.6,
        image: '/blackdays/img01ArrozMacareno22.png',
      },
      {
        id: 'hig2',
        name: 'Ego Styling Cera 150 g',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.8,
        image: '/blackdays/img01ArrozMacareno23.png',
      },
      {
        id: 'hig3',
        name: 'Shampoo Repair 350 ml',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 3.1,
        image: '/blackdays/img01ArrozMacareno24.png',
      },
      {
        id: 'hig4',
        name: 'Crema Corporal Karité',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.9,
        image: '/blackdays/img01ArrozMacareno25.png',
      },
      {
        id: 'hig5',
        name: 'Toallas Húmedas Kids',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.9,
        image: '/blackdays/img01ArrozMacareno6.png',
      },
      {
        id: 'hig6',
        name: 'Crema Facial Día 50 ml',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.49,
        image: '/blackdays/img01ArrozMacareno7.png',
      },
    ],
  },
  {
    title: 'Productos de Limpieza',
    accent: '#25FF87',
    discountLabel: 'HASTA CON EL 40% DTO.',
    gradient: 'linear-gradient(180deg, #0b4024 0%, #042015 70%, #010805 100%)',
    highlight: {
      image: '/blackdays/imgLimpiezaBig1.png',
      product: 'Combo limpieza profunda',
      description: 'Mantén cada rincón impecable con descuentos 4x3.',
      price: 1.29,
      regularPrice: 3.9,
    },
    featured: {
      id: 'lim-ft',
      name: 'Jabón Ultra Clean 3 kg',
      code: 'Cod. 7861001300932',
      price: 1.29,
      regularPrice: 4.08,
      image: '/blackdays/img01ArrozMacareno5.png',
    },
    products: [
      {
        id: 'lim1',
        name: 'Suavizante Brisa 3 L',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 3.9,
        image: '/blackdays/img01ArrozMacareno38.png',
      },
      {
        id: 'lim2',
        name: 'Detergente Ultra 3 L',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 3.99,
        image: '/blackdays/img01ArrozMacareno39.png',
      },
      {
        id: 'lim3',
        name: 'Quitamanchas concentrado',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 3.15,
        image: '/blackdays/img01ArrozMacareno33.png',
      },
      {
        id: 'lim4',
        name: 'Cloro desinfectante 1 L',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.3,
        image: '/blackdays/img01ArrozMacareno34.png',
      },
      {
        id: 'lim5',
        name: 'Lavaplatos Limón 1.2 L',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.0,
        image: '/blackdays/img01ArrozMacareno27.png',
      },
      {
        id: 'lim6',
        name: 'Limpiador Multiusos 900 ml',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.4,
        image: '/blackdays/img01ArrozMacareno20.png',
      },
    ],
  },
];

const CatalogModule = () => (
  <div className="bg-gradient-to-b from-[#10001A] via-[#05000D] to-[#05000D]">
    <div className="max-w-[1512px] mx-auto px-4 lg:px-10 py-10 space-y-16">
      <NeonHeader />
      <HeroSplit />
      <section className="text-center space-y-4">
        <p className="text-sm uppercase tracking-[0.5em] text-white/60">DÍAS MÁS BLACK QUE NUNCA</p>
        <h2 className="text-4xl font-black">Lleva más, paga menos en todo tu catálogo</h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          Descubre combos 3x2, 4x3 y descuentos únicos en alimentos, bebidas, higiene y limpieza. Todo en un
          solo lugar y disponible para compra en tienda o delivery.
        </p>
      </section>
      <ProductHighlightGrid />
      {sections.map((section) => (
        <CategorySection key={section.title} {...section} />
      ))}
      <footer className="py-10 text-center space-y-2">
        <p className="text-sm uppercase tracking-[0.5em] text-white/50">AKÍ BLACK DAYS</p>
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} AKÍ. Todos los derechos reservados.</p>
      </footer>
    </div>
  </div>
);

export default CatalogModule;

