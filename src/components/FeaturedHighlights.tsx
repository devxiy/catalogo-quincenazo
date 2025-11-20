'use client';

import Image from 'next/image';
import { CategoryBlock, Product } from '../data/catalog';

const BadgeIcon = () => (
  <Image
    src="/assets/icono-diasnegros.png"
    alt="Días Negros"
    width={70}
    height={70}
    className="absolute -top-10 left-4 drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]"
  />
);

const TiptiSeal = () => (
  <div className="mt-3 flex flex-col items-center text-xs text-[#828282] gap-1">
    <div className="w-10 h-10 rounded-full bg-black text-[#FFDE00] font-black text-[10px] flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.35)]">
      TIPTI
    </div>
    <span className="text-black font-semibold">Pídelo por</span>
  </div>
);

type HighlightCardProps = Product & { accent: string };

const HighlightCard = ({ name, code, price, regularPrice, image, accent }: HighlightCardProps) => (
  <div className="rounded-[28px] border-[4px] bg-white text-black flex flex-col" style={{ borderColor: accent }}>
    <div className="relative px-6 pt-8 pb-4 text-center">
      <BadgeIcon />
      <div className="h-[190px] flex items-center justify-center">
        <Image src={image} alt={name} width={180} height={180} className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)]" />
      </div>
      <p className="text-xs uppercase tracking-[0.35em] text-[#B3B3B3]">{code}</p>
      <p className="font-black leading-tight mt-2">{name}</p>
      <TiptiSeal />
    </div>
    <div className="bg-black rounded-b-[24px] px-6 py-5 space-y-1">
      <span className="text-[#FFDE00] text-3xl font-black">${price.toFixed(2)}</span>
      <p className="text-xs text-white/70">Precio normal unitario</p>
      <p className="text-sm font-semibold text-[#FFDE00]">${regularPrice.toFixed(2)}</p>
    </div>
  </div>
);

const FeaturedHighlights = ({ categories }: { categories: CategoryBlock[] }) => (
  <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    {categories.map((category) => {
      const products = category.products.length ? category.products : [category.featured];
      const pseudoRandomIndex = category.id.charCodeAt(0) % products.length;
      const product = products[pseudoRandomIndex];

      return (
        <HighlightCard
          key={category.id}
          accent={category.accent}
          {...product}
        />
      );
    })}
  </section>
);

export default FeaturedHighlights;

