'use client';

import NeonHeader from './NeonHeader';
import HeroSplit from './HeroSplit';
import CategoryGrid from './CategoryGrid';
import SiteFooter from './SiteFooter';
import { heroPromos } from '../data/catalog';
import dinamicos from '../data/dinamicos.json';

// Mapeo de categorías del CSV a configuración visual
const categoryConfig = {
  Alimentos: {
    id: 'alimentos',
    name: 'Alimentos y Bebidas',
    accent: '#FF70C4',
    bannerImage: '/assets/categoria-alimentos.png',
    featuredPosition: 'start' as const,
  },
  Higiene: {
    id: 'higiene',
    name: 'Productos de Higiene',
    accent: '#5DECFF',
    bannerImage: '/assets/categoria-higiene.png',
    featuredPosition: 'middle' as const,
  },
  Limpieza: {
    id: 'limpieza',
    name: 'Productos de Limpieza',
    accent: '#25FF87',
    bannerImage: '/assets/categoria-limpieza.png',
    featuredPosition: 'start' as const,
  },
  Hogar: {
    id: 'hogar',
    name: 'Hogar y Electrodomésticos',
    accent: '#FFB23E',
    bannerImage: '/assets/categoria-hogar.png',
    featuredPosition: 'middle' as const,
  },
};

const CatalogModule = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #10001A 0%, #05000D 50%, #05000D 100%)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8 space-y-12">
        {/* Header con categorías */}
        <NeonHeader />

        {/* Hero banners */}
        <HeroSplit items={heroPromos} />

        {/* Sección intro */}
        <section className="text-center space-y-4 py-8">
          <p className="text-sm uppercase tracking-[0.5em] text-white/60">
            DÍAS MÁS BLACK QUE NUNCA
          </p>
          <h2 className="text-4xl font-black text-white">
            Lleva más, paga menos en todo tu catálogo
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Descubre combos 3x2, 4x3 y descuentos únicos en alimentos, bebidas, higiene y limpieza.
            Todo en un solo lugar y disponible para compra en tienda o delivery.
          </p>
        </section>

        {/* Grids de categorías con productos reales */}
        {Object.entries(dinamicos).map(([categoryKey, products]) => {
          const config = categoryConfig[categoryKey as keyof typeof categoryConfig];
          if (!config) return null;

          return (
            <CategoryGrid
              key={config.id}
              categoryId={config.id}
              categoryName={config.name}
              bannerImage={config.bannerImage}
              featuredPosition={config.featuredPosition}
              products={products}
              accentColor={config.accent}
            />
          );
        })}

        {/* Footer */}
        <SiteFooter />
      </div>
    </div>
  );
};

export default CatalogModule;
