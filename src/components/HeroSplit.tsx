"use client";

import Image from "next/image";
import { HeroPromo } from "../data/catalog";

const HeroSplit = ({ items }: { items: HeroPromo[] }) => {
  const hero = items[0];
  if (!hero) return null;

  return (
    <section className="w-full">
      <article
        className="rounded-[32px] border-[4px] overflow-hidden relative shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
        style={{ borderColor: hero.border }}
      >
        <div className="relative w-full">
          {/* Imagen desktop */}
          <Image
            src={hero.image}
            alt={hero.title}
            className="hidden md:block w-full"
            priority
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
          />

          {/* Imagen mobile */}
          <Image
            src={hero.imageMobile ?? hero.image}
            alt={`${hero.title} mobile`}
            className="md:hidden w-full"
            priority
            fill
            sizes="100vw"
          />
        </div>
      </article>
    </section>
  );
};

export default HeroSplit;
