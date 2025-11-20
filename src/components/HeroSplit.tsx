'use client';

import Image from 'next/image';
import { HeroPromo } from '../data/catalog';

const HeroSplit = ({ items }: { items: HeroPromo[] }) => {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      {items.map((card) => (
        <article
          key={card.id}
          className="rounded-[32px] border-[4px] overflow-hidden relative"
          style={{ borderColor: card.border }}
        >
          <div className="relative h-[320px]">
            <Image src={card.image} alt={card.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 720px" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
              <p className="text-sm uppercase tracking-[0.5em] text-white/70">{card.title}</p>
              <h2 className="text-3xl font-black text-[#FFDE00]">{card.description}</h2>
              <p className="text-sm text-white/80">{card.period}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default HeroSplit;

