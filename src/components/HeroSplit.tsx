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
          <div className="">
            <Image src={card.image} alt={card.title} className="relative" sizes="(max-width: 768px) 100vw, 720px" />
          </div>
        </article>
      ))}
    </section>
  );
};

export default HeroSplit;

