'use client';

import Image from 'next/image';
import CategoryModule, { CategoryModuleProps } from '../components/CategoryModule';

const navFilters = [
  { label: 'Alimentos', color: '#FF70C4' },
  { label: 'Bebidas', color: '#25FF87' },
  { label: 'Higiene', color: '#FFB23E' },
  { label: 'Limpieza', color: '#5DECFF' }
];

const heroBanners = [
  {
    image: '/blackdays/imgBannerBlackdays1.png',
    border: '#FF70C4',
    title: 'AKÍ BLACK DAYS',
    description: 'APROVECHA HASTA EL 40% DTO.',
    date: 'DEL 13 DE NOVIEMBRE AL 3 DE DICIEMBRE 2025'
  },
  {
    image: '/blackdays/imgBannerBlackdays2.png',
    border: '#FFDE00',
    title: 'AKÍ BLACK DAYS',
    description: 'APROVECHA HASTA EL 75% DTO.',
    date: 'DEL 27 DE NOVIEMBRE AL 3 DE DICIEMBRE 2025'
  }
];

const topProducts = [
  {
    id: 'tp-1',
    name: 'Arroz Macareño Cocolón 1810 g',
    code: 'Cod. 7861048610087',
    price: 2.09,
    regularPrice: 2.59,
    image: '/blackdays/img01ArrozMacareno1.png',
    border: '#FF70C4'
  },
  {
    id: 'tp-2',
    name: 'Yogurt Toni Frutilla 190 g',
    code: 'Cod. 7861048610087',
    price: 0.72,
    regularPrice: 0.9,
    image: '/blackdays/img01ArrozMacareno2.png',
    border: '#25FF87'
  },
  {
    id: 'tp-3',
    name: 'Jabón Suavizante Deja 1200 g',
    code: 'Cod. 7861001300932',
    price: 1.29,
    regularPrice: 4.08,
    image: '/blackdays/img01ArrozMacareno3.png',
    border: '#FFB23E'
  },
  {
    id: 'tp-4',
    name: 'Pan Dulce Gourmet 800 g',
    code: 'Cod. 7861001300932',
    price: 4.99,
    regularPrice: 6.9,
    image: '/blackdays/img01ArrozMacareno4.png',
    border: '#5DECFF'
  }
];

const sections: CategoryModuleProps[] = [
  {
    id: 'alimentos',
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
      badge: 'NUEVO'
    },
    featured: {
      id: 'bonella',
      name: 'Bonella Margarina 320 g',
      code: 'Cod. 7861001300932',
      price: 1.29,
      regularPrice: 4.08,
      image: '/blackdays/imgLimpiezaBig2.png'
    },
    products: [
      {
        id: 'al1',
        name: 'Aceite Botanico 900 ml',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.99,
        image: '/blackdays/img01ArrozMacareno19.png'
      },
      {
        id: 'al2',
        name: 'Galletas Club Social',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.19,
        image: '/blackdays/img01ArrozMacareno20.png'
      },
      {
        id: 'al3',
        name: 'Café Tradición 250 g',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 3.49,
        image: '/blackdays/img01ArrozMacareno17.png'
      },
      {
        id: 'al4',
        name: 'Harina PAN 1 kg',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.6,
        image: '/blackdays/img01ArrozMacareno18.png'
      },
      {
        id: 'al5',
        name: 'Doritos Mega Pack 250 g',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.99,
        image: '/blackdays/img01ArrozMacareno33.png'
      },
      {
        id: 'al6',
        name: 'Chocolate en polvo 300 g',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.99,
        image: '/blackdays/img01ArrozMacareno34.png'
      },
      {
        id: 'al7',
        name: 'Snacks Club Social',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.2,
        image: '/blackdays/img01ArrozMacareno22.png'
      },
      {
        id: 'al8',
        name: 'Galletas Nestlé 6 pack',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.4,
        image: '/blackdays/img01ArrozMacareno23.png'
      }
    ]
  },
  {
    id: 'bebidas',
    title: 'Variedad de Bebidas',
    accent: '#5DECFF',
    discountLabel: 'HASTA CON EL 40% DTO.',
    gradient: 'linear-gradient(180deg, #0b3351 0%, #081326 60%, #05000d 100%)',
    highlight: {
      image: '/blackdays/imgLimpiezaBig4.png',
      product: 'Pack refrescante cítrico',
      description: 'Combos familiares 3x2 para cada celebración.',
      price: 12.9,
      regularPrice: 18.5
    },
    featured: {
      id: 'beb-ft',
      name: 'Cola Mega 3 L x2',
      code: 'Cod. 7861001300932',
      price: 5.49,
      regularPrice: 8.5,
      image: '/blackdays/img01ArrozMacareno24.png'
    },
    products: [
      {
        id: 'beb1',
        name: 'Gaseosa Citrus 3 L',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.9,
        image: '/blackdays/img01ArrozMacareno26.png'
      },
      {
        id: 'beb2',
        name: 'Jugo Néctar Tropical 1 L',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.75,
        image: '/blackdays/img01ArrozMacareno29.png'
      },
      {
        id: 'beb3',
        name: 'Bebida Energética 473 ml',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.8,
        image: '/blackdays/img01ArrozMacareno30.png'
      },
      {
        id: 'beb4',
        name: 'Café Helado Ready to go',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.95,
        image: '/blackdays/img01ArrozMacareno31.png'
      },
      {
        id: 'beb5',
        name: 'Bebida Láctea Vainilla 1 L',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.8,
        image: '/blackdays/img01ArrozMacareno38.png'
      },
      {
        id: 'beb6',
        name: 'Bebida Sabor Mora 1 L',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.8,
        image: '/blackdays/img01ArrozMacareno39.png'
      }
    ]
  },
  {
    id: 'higiene',
    title: 'Productos de Higiene',
    accent: '#FFB23E',
    discountLabel: 'HASTA CON EL 40% DTO.',
    gradient: 'linear-gradient(180deg, #613000 0%, #2c1200 70%, #090100 100%)',
    highlight: {
      image: '/blackdays/imgLayer1.png',
      product: 'Set cuidado personal diario',
      description: 'Refuerza tu rutina con productos premium a precio AKÍ.',
      price: 1.29,
      regularPrice: 3.2
    },
    featured: {
      id: 'hig-ft',
      name: 'Deodorante en barra 70 g',
      code: 'Cod. 7861001300932',
      price: 1.29,
      regularPrice: 2.95,
      image: '/blackdays/img01ArrozMacareno25.png'
    },
    products: [
      {
        id: 'hig1',
        name: 'Toallas Nosotras x24',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.6,
        image: '/blackdays/img01ArrozMacareno22.png'
      },
      {
        id: 'hig2',
        name: 'Ego Styling Cera 150 g',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.8,
        image: '/blackdays/img01ArrozMacareno23.png'
      },
      {
        id: 'hig3',
        name: 'Shampoo Repair 350 ml',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 3.1,
        image: '/blackdays/img01ArrozMacareno24.png'
      },
      {
        id: 'hig4',
        name: 'Crema Corporal Karité',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.9,
        image: '/blackdays/img01ArrozMacareno25.png'
      },
      {
        id: 'hig5',
        name: 'Toallas Húmedas Kids',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 1.9,
        image: '/blackdays/img01ArrozMacareno6.png'
      },
      {
        id: 'hig6',
        name: 'Crema Facial Día 50 ml',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.49,
        image: '/blackdays/img01ArrozMacareno7.png'
      }
    ]
  },
  {
    id: 'limpieza',
    title: 'Productos de Limpieza',
    accent: '#25FF87',
    discountLabel: 'HASTA CON EL 40% DTO.',
    gradient: 'linear-gradient(180deg, #0b4024 0%, #042015 70%, #010805 100%)',
    highlight: {
      image: '/blackdays/imgLimpiezaBig1.png',
      product: 'Combo limpieza profunda',
      description: 'Mantén cada rincón impecable con descuentos 4x3.',
      price: 1.29,
      regularPrice: 3.9
    },
    featured: {
      id: 'lim-ft',
      name: 'Jabón Ultra Clean 3 kg',
      code: 'Cod. 7861001300932',
      price: 1.29,
      regularPrice: 4.08,
      image: '/blackdays/img01ArrozMacareno5.png'
    },
    products: [
      {
        id: 'lim1',
        name: 'Suavizante Brisa 3 L',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 3.9,
        image: '/blackdays/img01ArrozMacareno38.png'
      },
      {
        id: 'lim2',
        name: 'Detergente Ultra 3 L',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 3.99,
        image: '/blackdays/img01ArrozMacareno39.png'
      },
      {
        id: 'lim3',
        name: 'Quitamanchas concentrado',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 3.15,
        image: '/blackdays/img01ArrozMacareno33.png'
      },
      {
        id: 'lim4',
        name: 'Cloro desinfectante 1 L',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.3,
        image: '/blackdays/img01ArrozMacareno34.png'
      },
      {
        id: 'lim5',
        name: 'Lavaplatos Limón 1.2 L',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.0,
        image: '/blackdays/img01ArrozMacareno27.png'
      },
      {
        id: 'lim6',
        name: 'Limpiador Multiusos 900 ml',
        code: 'Cod. 7861001300932',
        price: 1.29,
        regularPrice: 2.4,
        image: '/blackdays/img01ArrozMacareno20.png'
      }
    ]
  }
];

const TopProductCard = ({ product }: { product: (typeof topProducts)[number] }) => (
  <div className="rounded-[28px] border-[4px] bg-white text-black flex flex-col" style={{ borderColor: product.border }}>
    <div className="relative px-6 pt-8 pb-4 text-center">
      <Image src="/blackdays/imgIconDiasNegros1.png" alt="Días Negros" width={80} height={80} className="absolute -top-10 left-4" />
      <div className="h-[200px] flex items-center justify-center">
        <Image src={product.image} alt={product.name} width={210} height={210} className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)]" />
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-[#B3B3B3]">{product.code}</p>
      <p className="font-black leading-tight mt-2">{product.name}</p>
      <div className="mt-4 flex flex-col items-center text-xs text-[#828282] gap-1">
        <Image src="/blackdays/imgTipti1.png" alt="Tipti" width={48} height={48} />
        <span className="text-black font-semibold">Pídelo por</span>
      </div>
    </div>
    <div className="bg-black rounded-b-[24px] px-6 py-5 space-y-1">
      <span className="text-[#FFDE00] text-3xl font-black">${product.price.toFixed(2)}</span>
      <p className="text-xs text-white/70">Precio normal unitario</p>
      <p className="text-sm font-semibold text-[#FFDE00]">${product.regularPrice.toFixed(2)}</p>
    </div>
  </div>
);

export default function BlackDaysCatalogPage() {
  return (
    <main className="bg-[#05000D] text-white font-gabarito">
      <div className="bg-[radial-gradient(circle_at_top,_rgba(247,28,197,0.12),_rgba(5,0,13,0.95))]">
        <div className="max-w-[1512px] mx-auto px-4 lg:px-10 py-10 space-y-16">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl px-4 py-2">
                <Image src="/blackdays/imgLogoAki.png" alt="AKÍ" width={90} height={36} priority />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">AKÍ BLACK DAYS</p>
                <p className="text-lg font-black">Tus productos favoritos al precio más bajo</p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-3">
              {navFilters.map((filter) => (
                <button
                  key={filter.label}
                  className="px-6 py-3 rounded-2xl border text-sm font-bold bg-black/50 hover:bg-white/10 transition"
                  style={{ borderColor: filter.color }}
                >
                  {filter.label}
                </button>
              ))}
            </nav>
          </header>

          <section className="grid md:grid-cols-2 gap-6">
            {heroBanners.map((banner) => (
              <div key={banner.description} className="rounded-[32px] border-[4px] overflow-hidden" style={{ borderColor: banner.border }}>
                <div className="relative h-[320px]">
                  <Image src={banner.image} alt={banner.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 720px" />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
                    <p className="text-sm uppercase tracking-[0.5em] text-white/70">{banner.title}</p>
                    <h2 className="text-3xl font-black text-[#FFDE00]">{banner.description}</h2>
                    <p className="text-sm text-white/80">{banner.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.5em] text-white/60">DÍAS MÁS BLACK QUE NUNCA</p>
            <h2 className="text-4xl font-black">Lleva más, paga menos en todo tu catálogo</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Descubre combos 3x2, 4x3 y descuentos únicos en alimentos, bebidas, higiene y limpieza. Todo en un solo lugar y disponible para compra en tienda o delivery.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {topProducts.map((product) => (
              <TopProductCard key={product.id} product={product} />
            ))}
          </section>

          {sections.map((section) => (
            <CategoryModule key={section.id} {...section} />
          ))}

          <footer className="py-10 text-center space-y-2">
            <p className="text-sm uppercase tracking-[0.5em] text-white/50">AKÍ BLACK DAYS</p>
            <p className="text-white/70 text-sm">© {new Date().getFullYear()} AKÍ. Todos los derechos reservados.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
