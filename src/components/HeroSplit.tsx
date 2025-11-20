'use client';

import Image from 'next/image';

type HeroCard = {
  id: string;
  title: string;
  description: string;
  period: string;
  image: string;
  border: string;
};

const heroCards: HeroCard[] = [
  {
    id: 'hero-40',
    title: 'AKÍ BLACK DAYS',
    description: 'APROVECHA HASTA EL 40% DTO.',
    period: 'DEL 13 DE NOVIEMBRE AL 3 DE DICIEMBRE 2025',
    image: '/blackdays/imgBannerBlackdays1.png',
    border: '#FF70C4',
  },
  {
    id: 'hero-75',
    title: 'AKÍ BLACK DAYS',
    description: 'APROVECHA HASTA EL 75% DTO.',
    period: 'DEL 27 DE NOVIEMBRE AL 3 DE DICIEMBRE 2025',
    image: '/blackdays/imgBannerBlackdays2.png',
    border: '#FFDE00',
  },
];

const HeroSplit = () => {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      {heroCards.map((card) => (
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

