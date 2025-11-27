'use client';

import Image from 'next/image';

export type GridProduct = {
  codigo: string;
  nombre: string;
  precio_oferta: string;
  precio_normal: string;
  descuento: string;
  imagen: string;
  vigencia: {
    inicio: string;
    fin: string;
  };
};

export type CategoryGridProps = {
  categoryId: string;
  categoryName: string;
  accentColor: string;
  products: GridProduct[];
};

const TIPTI_URL = 'https://www.tipti.market/tienda/gran-aki?page=1';

const ProductCard = ({ product, accentColor, className = '' }: { product: GridProduct; accentColor: string; className?: string }) => (
  <div 
    className={`relative rounded-[24px] overflow-hidden bg-white shadow-[0_8px_24px_rgba(0,0,0,0.4)] flex flex-col ${className}`}
    style={{ 
      border: `3px solid ${accentColor}`
    }}
  >
    {/* Badge Días Negros - arriba derecha */}
    <div className="absolute top-0 right-0 z-10 w-14 h-14">
      <Image
        src="/assets/icono-diasnegros.png"
        alt="Días Negros"
        width={64}
        height={64}
        className="object-contain"
      />
    </div>

    {/* Imagen del producto */}
    <div className="relative h-[240px] bg-white flex items-center justify-center px-6 pt-10 pb-6">
      <Image
        src={product.imagen}
        alt={product.nombre}
        width={320}
        height={320}
        className="object-contain max-h-[240px] w-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
      />
      {/* Botón Tipti - posición absoluta abajo derecha */}
      <a
        href={TIPTI_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 right-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 rounded-2xl"
      >
        <Image
          src="/assets/btn-tipti.png"
          alt="Pídelo por Tipti"
          width={60}
          height={79}
          className="object-contain drop-shadow-lg"
        />
      </a>
    </div>

    {/* Info del producto - 2 columnas */}
    <div className="bg-black rounded-t-none rounded-b-[24px] px-5 py-5 flex gap-3">
      {/* Columna izquierda: nombre y código */}
      <div className="flex-1 pr-2 justify-center">
        <p className="text-white font-bold text-base leading-tight line-clamp-3">
          {product.nombre}
        </p>
        <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-2">
          CÓD. {product.codigo}
        </p>
      </div>

      {/* Columna derecha: precios */}
      <div className="flex-2 flex-col items-end justify-center text-right">
        <p className="text-[14px] text-gray-400 tracking-wider text-[#FFFFFF]">
          Precio Akí
        </p>
        <span className="text-[#FFDE00] text-3xl font-black whitespace-nowrap">
          ${parseFloat(product.precio_oferta).toFixed(2)}
        </span>
        <p className="text-[10px] text-gray-400 tracking-wider text-[#FFFFFF]">
          Precio normal unitario
        </p>
        <p className="text-base text-gray-300 line-through">
          ${parseFloat(product.precio_normal).toFixed(2)}
        </p>
      </div>
    </div>
  </div>
);

const FeaturedBigProduct = ({ product, categoryId, accentColor }: { product: GridProduct; categoryId: string; accentColor: string }) => (
  <div 
    className="relative rounded-[32px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.5)] col-span-1 xs:col-span-2 xs:row-span-2 min-h-[380px] xs:min-h-[520px]"
    style={{
      border: `3px solid ${accentColor}`
    }}
  >
    {/* Badge Días Negros - arriba derecha */}
    <div className="absolute top-4 right-4 z-10 w-20 h-20">
      <Image
        src="/assets/icono-diasnegros.png"
        alt="Días Negros"
        width={120}
        height={120}
        className="object-contain"
      />
    </div>

    <div className="rounded-[30px] bg-gradient-to-br from-gray-100 to-white overflow-hidden h-full flex flex-col relative">
      {/* Imagen grande de fondo */}
      <div className="relative w-full h-full min-h-[320px]">
        <Image
          src={`/assets/categoria-big-${categoryId}.png`}
          alt={product.nombre}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Textos encima de la imagen - 2 columnas */}
      <div className="absolute top-6 left-6 z-10 bg-black/90 backdrop-blur-sm rounded-2xl px-6 py-4 max-w-[320px] flex gap-4">
        {/* Columna izquierda: nombre y código */}
        <div className="flex-1 justify-center">
          <p className="text-white font-black text-lg leading-tight line-clamp-2 mb-2">
            {product.nombre}
          </p>
          <p className="text-xs text-gray-300 uppercase tracking-wider">
            CÓD. {product.codigo}
          </p>
        </div>

        {/* Columna derecha: precios */}
        <div className="flex-2 flex-col items-end justify-center text-right">
          <span className="text-[#FFDE00] text-3xl font-black whitespace-nowrap">
            ${parseFloat(product.precio_oferta).toFixed(2)}
          </span>
          <p className="text-sm text-gray-400 line-through">
            ${parseFloat(product.precio_normal).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Botón Tipti - esquina inferior derecha */}
      <a
        href={TIPTI_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 rounded-2xl"
      >
        <Image
          src="/assets/btn-tipti.png"
          alt="Pídelo por Tipti"
          width={60}
          height={79}
          className="object-contain drop-shadow-2xl"
        />
      </a>
    </div>
  </div>
);

const CategoryGrid = ({ categoryId, categoryName, accentColor, products }: CategoryGridProps) => {
  // Dividir productos según la estructura
  const productoBig = products[0]; // Producto grande derecho (2x2) - PRIMER ITEM DEL CSV
  const productosBanner = products.slice(1, 3); // Debajo del banner (fila 2)
  const productosRestantes = products.slice(3); // A partir de la fila 3 en adelante

  return (
    <section id={categoryId} className="space-y-6 scroll-mt-20">
      {/* Grid de 4 columnas base */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* FILA 1-2: Banner titular (2 cols x 1 fila) */}
        <div className="col-span-1 xs:col-span-2 row-span-1 rounded-[32px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.5)]">
          <Image
            src={`/assets/categoria-${categoryId}.png`}
            alt={categoryName}
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* FILA 1-2: Producto grande derecho (2 cols x 2 filas) */}
        {productoBig && <FeaturedBigProduct product={productoBig} categoryId={categoryId} accentColor={accentColor} />}

        {/* FILA 2: Productos debajo del banner (1 col cada uno) */}
        {productosBanner.map((product) => (
          <ProductCard key={`banner-${product.codigo}`} product={product} accentColor={accentColor} />
        ))}

        {/* FILA 3 en adelante: grilla normal de 4 columnas */}
        {productosRestantes.map((product) => (
          <ProductCard key={product.codigo} product={product} accentColor={accentColor} />
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
