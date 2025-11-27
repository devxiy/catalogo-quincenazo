'use client';

import NeonHeader from './NeonHeader';
import HeroSplit from './HeroSplit';
import CategoryGrid from './CategoryGrid';
import SiteFooter from './SiteFooter';
import { heroPromos } from '../data/catalog';
import dinamicos from '../data/dinamicos-ultra.json';

// Mapeo de categorías del CSV a IDs y colores
const categoryConfig = {
  Alimentos: {
    id: 'alimentos',
    name: 'Alimentos',
    accentColor: '#FF2600', // Rosa
  },
  Bebidas: {
    id: 'bebidas',
    name: 'Bebidas',
    accentColor: '#25FF87', // Cyan
  },
  Higiene: {
    id: 'higiene',
    name: 'Higiene',
    accentColor: '#FFB23E', // Naranja
  },
  Limpieza: {
    id: 'limpieza',
    name: 'Limpieza',
    accentColor: '#41E9FF', // Verde
  },
  Hogar: {
    id: 'hogar',
    name: 'Hogar',
    accentColor: '#FFE95D', // Rojo
  },
};

const categoryOrder: Array<keyof typeof categoryConfig> = [
  'Alimentos',
  'Bebidas',
  'Higiene',
  'Limpieza',
  'Hogar',
];

const CatalogModule = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #10001A 0%, #05000D 50%, #05000D 100%)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-4 py-0 space-y-4">
        {/* Header con categorías */}
        <NeonHeader />

        {/* Hero banners */}
        <HeroSplit items={heroPromos} />

        {/* Sección intro */}
        <section className="text-center space-y-4 py-8 hidden">
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
        {categoryOrder.map((categoryKey) => {
          const config = categoryConfig[categoryKey];
          const products = dinamicos[categoryKey];
          if (!config || !products || products.length === 0) return null;

          return (
            <CategoryGrid
              key={config.id}
              categoryId={config.id}
              categoryName={config.name}
              accentColor={config.accentColor}
              products={products}
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
