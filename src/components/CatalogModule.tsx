'use client';

import NeonHeader from './NeonHeader';
import HeroSplit from './HeroSplit';
import FeaturedHighlights from './FeaturedHighlights';
import CategorySection from './CategorySection';
import SiteFooter from './SiteFooter';
import { categories, heroPromos } from '../data/catalog';

const CatalogModule = () => (
  <div className="bg-gradient-to-b from-[#10001A] via-[#05000D] to-[#05000D]">
    <div className="max-w-[1512px] mx-auto px-4 lg:px-10 py-10 space-y-16">
      <NeonHeader />
      <HeroSplit items={heroPromos} />
      <section className="text-center space-y-4">
        <p className="text-sm uppercase tracking-[0.5em] text-white/60">DÍAS MÁS BLACK QUE NUNCA</p>
        <h2 className="text-4xl font-black">Lleva más, paga menos en todo tu catálogo</h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          Descubre combos 3x2, 4x3 y descuentos únicos en alimentos, bebidas, higiene y limpieza. Todo en un
          solo lugar y disponible para compra en tienda o delivery.
        </p>
      </section>
      <FeaturedHighlights categories={categories} />
      {categories.map((section) => (
        <CategorySection key={section.id} {...section} />
      ))}
      <SiteFooter />
    </div>
  </div>
);

export default CatalogModule;

