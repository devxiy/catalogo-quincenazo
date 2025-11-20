'use client';

import Image from 'next/image';
import { CategoryBlock, Product } from '../data/catalog';

export type CategorySectionProps = CategoryBlock;

const BadgeIcon = () => (
  <div className="absolute -top-10 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#FF008C] to-[#FFDE00] text-[9px] font-black text-black flex items-center justify-center text-center leading-tight shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
    DÍAS
    <br />
    NEGROS
  </div>
);

const TiptiSeal = () => (
  <div className="mt-4 flex flex-col items-center gap-1 text-xs text-[#828282]">
    <div className="w-10 h-10 rounded-full bg-white text-black font-black text-[10px] flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.35)]">
      TIPTI
    </div>
    <span className="text-white font-semibold">Pídelo por</span>
  </div>
);

const PriceTag = ({ value }: { value: number }) => (
  <span className="text-[#FFDE00] font-black text-3xl">${value.toFixed(2)}</span>
);

const SmallCard = ({ product }: { product: Product }) => (
  <div className="rounded-[26px] bg-gradient-to-b from-[#1B001B] to-[#050105] p-[1px] shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
    <div className="rounded-[26px] bg-black flex flex-col h-full">
      <div className="relative px-5 pt-10 pb-5 text-center">
        <BadgeIcon />
        <div className="h-[160px] flex items-center justify-center">
          <Image src={product.image} alt={product.name} width={160} height={160} className="object-contain" />
        </div>
        <p className="text-xs text-[#B3B3B3] uppercase tracking-[0.35em]">{product.code}</p>
        <p className="font-black text-white leading-tight mt-3">{product.name}</p>
        <TiptiSeal />
      </div>
      <div className="bg-black px-5 py-4 rounded-b-[24px] space-y-1 text-left">
        <PriceTag value={product.price} />
        <p className="text-xs text-white/70">Precio normal unitario</p>
        <p className="text-sm font-semibold text-[#FFDE00]">${product.regularPrice.toFixed(2)}</p>
      </div>
    </div>
  </div>
);

const FeaturedCard = ({ data, accent }: { data: Product; accent: string }) => (
  <div
    className="rounded-[32px] bg-white border-[4px] p-6 grid lg:grid-cols-[1fr_auto] gap-6 items-center"
    style={{ borderColor: accent }}
  >
    <div>
      <p className="text-xs text-[#B3B3B3] uppercase tracking-[0.35em]">{data.code}</p>
      <h4 className="text-3xl font-black text-black mt-2 leading-tight">{data.name}</h4>
      <div className="mt-4 text-black space-y-1">
        <PriceTag value={data.price} />
        <p className="text-xs text-black/60">Precio normal unitario</p>
        <p className="text-sm font-semibold text-[#FF008C]">${data.regularPrice.toFixed(2)}</p>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <Image src={data.image} alt={data.name} width={240} height={240} className="object-contain" />
    </div>
  </div>
);

const HighlightCard = ({ info, accent }: { info: CategorySectionProps['highlight']; accent: string }) => (
  <div
    className="relative rounded-[38px] border-[4px] min-h-[420px] overflow-hidden"
    style={{ borderColor: accent }}
  >
    <Image
      src={info.image}
      alt={info.product}
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 640px"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
    <div className="relative p-10 space-y-4 max-w-lg">
      <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full text-xs tracking-[0.4em] uppercase">
        <span>Quincenazo</span>
        <span>Días Negros</span>
      </div>
      <h3 className="text-3xl font-black">{info.product}</h3>
      <p className="text-sm text-white/80">{info.description}</p>
      <div className="flex items-center gap-4">
        <PriceTag value={info.price} />
        <div>
          <p className="text-xs text-white/60">Precio normal unitario</p>
          <p className="text-sm text-[#FFDE00] font-semibold">${info.regularPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
    {info.badge && (
      <span className="absolute top-4 right-4 bg-[#FFDE00] text-black text-xs font-black px-4 py-1 rounded-full">
        {info.badge}
      </span>
    )}
  </div>
);

const CategorySection = ({
  id,
  title,
  accent,
  discountLabel,
  gradient,
  image,
  highlight,
  featured,
  products,
}: CategorySectionProps) => {
  const smallGrid = products.slice(0, 2);
  const extraProducts = products.slice(2, 6);

  return (
    <section
      id={id}
      className="relative rounded-[48px] border-[6px] p-10 lg:p-12 overflow-hidden space-y-8 shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
      style={{ borderColor: accent, background: gradient }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '26px 26px',
        }}
      />
      <div className="relative space-y-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="px-5 py-2 rounded-full border text-xs tracking-[0.4em] uppercase" style={{ borderColor: accent }}>
            Quincenazo Días Negros
          </div>
          <h2 className="text-3xl font-black">{title.toUpperCase()}</h2>
          <div className="text-2xl font-black" style={{ color: accent }}>
            {discountLabel}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6">
            <div className="rounded-[32px] overflow-hidden border-[4px]" style={{ borderColor: accent }}>
              <Image src={image} alt={title} width={800} height={480} className="w-full h-64 object-cover" />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {smallGrid.map((product) => (
                <SmallCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <FeaturedCard data={featured} accent={accent} />
            <HighlightCard info={highlight} accent={accent} />
          </div>
        </div>

        {extraProducts.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {extraProducts.map((product) => (
              <SmallCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;

