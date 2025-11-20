'use client';

import Image from 'next/image';

const categories = [
  { label: 'Alimentos', color: '#FF70C4' },
  { label: 'Bebidas', color: '#25FF87' },
  { label: 'Higiene', color: '#FFB23E' },
  { label: 'Limpieza', color: '#5DECFF' },
];

const Header = () => {
  return (
    <header
      className="rounded-[36px] border border-[#00B4FF] px-6 py-5 flex flex-wrap items-center justify-between gap-6 shadow-[0_0_45px_rgba(0,180,255,0.35)]"
      style={{
        background:
          'linear-gradient(90deg, rgba(72,0,70,0.8) 0%, rgba(20,0,20,0.9) 45%, rgba(8,0,8,0.95) 100%)',
        boxShadow: 'inset 0 0 25px rgba(0,0,0,0.45)',
      }}
    >
      <div className="flex items-center gap-4 min-w-[200px]">
        <div className="bg-white rounded-xl px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          <Image src="/blackdays/imgLogoAki.png" alt="AKÍ" width={110} height={44} priority />
        </div>
        <div className="uppercase tracking-[0.4em] text-white/70 text-[11px]">Supermercados</div>
      </div>

      <nav className="flex flex-wrap gap-4 justify-center flex-1">
        {categories.map((category) => (
          <button
            key={category.label}
            className="relative px-8 py-2 rounded-full text-sm font-semibold text-white uppercase tracking-wide transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              border: `1px solid ${category.color}`,
              boxShadow: `0 0 18px ${category.color}55`,
            }}
          >
            <span
              className="absolute inset-0 rounded-full opacity-60 blur-2xl"
              style={{ background: category.color }}
            />
            <span className="relative z-10">{category.label}</span>
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;

