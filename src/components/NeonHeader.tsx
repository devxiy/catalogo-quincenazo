'use client';

import { useState } from 'react';
import Image from 'next/image';
import { categories as categoryData } from '../data/catalog';

const NeonHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className="relative px-6 py-4 flex flex-wrap items-center justify-between gap-2"
      style={{
        background: '#000000',
        boxShadow: 'inset 0 0 30px rgba(0,0,0,0.55)',
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 100,
      }}
    >
      <div className="flex items-center gap-3">
        <div className="">
          <Image src="/assets/logo-aki.png" alt="AKÍ" width={120} height={40} priority />
        </div>
      </div>

      <button
        type="button"
        className="md:hidden ml-auto inline-flex flex-col items-center justify-center gap-1 rounded-full border border-white/30 px-3 py-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
        aria-label={isMenuOpen ? 'Cerrar menú de categorías' : 'Abrir menú de categorías'}
        aria-expanded={isMenuOpen}
        onClick={handleToggleMenu}
      >
        <span className="w-6 h-0.5 bg-white transition" />
        <span className="w-6 h-0.5 bg-white transition" />
        <span className="w-6 h-0.5 bg-white transition" />
      </button>

      <nav className="hidden md:flex flex-wrap gap-4 justify-center flex-1">
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

      {isMenuOpen && (
        <div className="md:hidden absolute left-0 top-full w-full border-t border-white/10 bg-black/95 shadow-[0_18px_40px_rgba(0,0,0,0.65)]">
          <nav className="flex flex-col gap-3 p-4">
            {categoryData.map((category) => (
              <a
                key={`mobile-${category.id}`}
                href={`#${category.id}`}
                onClick={handleLinkClick}
                className="relative px-5 py-3 rounded-2xl text-base font-semibold text-white tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  border: `1px solid ${category.accent}`,
                  boxShadow: `0 0 14px ${category.accent}80`,
                }}
              >
                <span
                  className="absolute inset-0 rounded-2xl opacity-60 blur-2xl"
                  style={{ background: category.accent }}
                />
                <span className="relative z-10">{category.title}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default NeonHeader;

