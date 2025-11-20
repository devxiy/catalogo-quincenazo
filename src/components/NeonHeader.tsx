'use client';

interface Category {
  label: string;
  color: string;
  anchor: string;
}

const categories: Category[] = [
  { label: 'Alimentos', color: '#FF70C4', anchor: '#alimentos' },
  { label: 'Bebidas', color: '#25FF87', anchor: '#bebidas' },
  { label: 'Higiene', color: '#FFB23E', anchor: '#higiene' },
  { label: 'Limpieza', color: '#5DECFF', anchor: '#limpieza' },
];

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
        <div className="bg-white rounded-xl px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          <span className="text-3xl font-black text-[#FF0057] tracking-tight">AKÍ</span>
        </div>
        <div className="uppercase text-[10px] tracking-[0.45em] text-white/70">Supermercados</div>
      </div>

      <nav className="flex flex-wrap gap-4 justify-center flex-1">
        {categories.map((category) => (
          <a
            key={category.label}
            href={category.anchor}
            className="relative px-8 py-2 rounded-full text-sm font-semibold text-white tracking-wide transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              border: `1px solid ${category.color}`,
              boxShadow: `0 0 18px ${category.color}80`,
            }}
          >
            <span
              className="absolute inset-0 rounded-full opacity-60 blur-2xl"
              style={{ background: category.color }}
            />
            <span className="relative z-10">{category.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default NeonHeader;

