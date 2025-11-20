'use client';

import Image from 'next/image';
import { categories as categoryData } from '../data/catalog';

const NeonHeader = () => {
  return (
    <header
      className="rounded-[32px] border border-[#00B4FF] px-6 py-4 flex flex-wrap items-center justify-between gap-6 shadow-[0_0_45px_rgba(0,180,255,0.35)]"
      style={{
        background:
          'linear-gradient(90deg, rgba(87,0,75,0.85) 0%, rgba(24,0,28,0.9) 45%, rgba(8,0,12,0.95) 100%)',
        boxShadow: 'inset 0 0 30px rgba(0,0,0,0.55)',
      }}
    >
      <div className="flex items-center gap-3">
        <div className="">
          <Image src="/assets/logo-aki.png" alt="AKÍ" width={120} height={40} priority />
        </div>
      </div>

      <nav className="flex flex-wrap gap-4 justify-center flex-1">
        {categoryData.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="relative px-8 py-2 rounded-full text-sm font-semibold text-white tracking-wide transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              border: `1px solid ${category.accent}`,
              boxShadow: `0 0 18px ${category.accent}80`,
            }}
          >
            <span
              className="absolute inset-0 rounded-full opacity-60 blur-2xl"
              style={{ background: category.accent }}
            />
            <span className="relative z-10">{category.title}</span>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default NeonHeader;

