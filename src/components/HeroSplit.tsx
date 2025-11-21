'use client';

import Image from 'next/image';
import { HeroPromo } from '../data/catalog';

const HeroSplit = ({ items }: { items: HeroPromo[] }) => {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      {items.map((card) => (
        <article
          key={card.id}
          className="rounded-[32px] overflow-hidden relative"
        >
          <div className="relative h-[320px]">
            <Image src={card.image} alt={card.title} fill className="" sizes="(max-width: 768px) 100vw, 720px" />            
          </div>
        </article>
      ))}
    </section>
  );
};

export default HeroSplit;

