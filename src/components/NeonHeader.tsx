'use client';

import { useState } from 'react';
import Image from 'next/image';
import { categories as categoryData } from '../data/catalog';

const PDF_URL = '/quincenazo-ultra-black-days.pdf';

const NeonHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className="relative px-6 py-0 flex flex-wrap items-center justify-between gap-2"
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

      <div className="hidden md:flex flex-1 items-center gap-4">
        <nav className="flex flex-wrap gap-4 justify-center flex-1">
          {categoryData.map((category) => (
            <a
              key={category.id}
              id={`menu-${category.id}-desktop`}
              href={`#${category.id}`}
              className="relative px-8 py-2 rounded-full text-sm font-semibold text-white tracking-wide transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                border: `1px solid ${category.accent}`,
                boxShadow: `0 0 18px ${category.accent}80`,
              }}
            >
              {category.title}
            </a>
          ))}
        </nav>
        <a
          id="menu-descargar-pdf-desktop"
          href={PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
        >
          Descargar PDF
        </a>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute left-0 top-full w-full border-t border-white/10 bg-black/95 shadow-[0_18px_40px_rgba(0,0,0,0.65)] max-h-[60vh] overflow-y-auto">
          <nav className="flex flex-col gap-2 p-3">
            {categoryData.map((category) => (
              <a
                key={`mobile-${category.id}`}
                id={`menu-${category.id}-mobile`}
                href={`#${category.id}`}
                onClick={handleLinkClick}
                className="relative px-4 py-2 rounded-xl text-sm font-semibold text-white tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  border: `1px solid ${category.accent}`,
                  boxShadow: `0 0 14px ${category.accent}80`,
                }}
              >{category.title}
              </a>
            ))}
            <a
              id="menu-descargar-pdf-mobile"
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="mt-2 inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            >
              Descargar PDF
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NeonHeader;

