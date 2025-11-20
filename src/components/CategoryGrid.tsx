'use client';

import Image from 'next/image';

export type GridProduct = {
  codigo: string;
  nombre: string;
  precio_oferta: string;
  precio_normal: string;
  descuento: string;
  imagen: string;
};

export type CategoryGridProps = {
  categoryId: string;
  categoryName: string;
  bannerImage: string;
  featuredImage?: string;
  featuredPosition?: 'start' | 'middle' | 'end';
  products: GridProduct[];
  accentColor: string;
};

const ProductCard = ({ product }: { product: GridProduct }) => (
  <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-b from-[#1B001B] to-[#050105] p-[2px] shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
    {/* Badge Días Negros */}
    <div className="absolute top-2 left-2 z-10 w-14 h-14 rounded-full bg-gradient-to-br from-[#FF008C] to-[#FFDE00] flex items-center justify-center shadow-lg">
      <span className="text-[7px] font-black text-black text-center leading-tight px-1">
        DÍAS<br/>NEGROS
      </span>
    </div>

    <div className="rounded-[23px] bg-white overflow-hidden flex flex-col h-full">
      {/* Imagen del producto */}
      <div className="relative h-[180px] bg-white flex items-center justify-center px-4 pt-8 pb-4">
        <Image
          src={product.imagen}
          alt={product.nombre}
          width={160}
          height={160}
          className="object-contain max-h-[140px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
        />
      </div>

      {/* Ícono Tipti */}
      <div className="flex flex-col items-center gap-1 pb-3">
        <div className="w-9 h-9 rounded-full bg-[#FFDE00] flex items-center justify-center shadow-md">
          <span className="text-[8px] font-black text-black">TIPTI</span>
        </div>
        <span className="text-[9px] text-gray-600 font-semibold">Pídelo por</span>
      </div>

      {/* Info del producto */}
      <div className="bg-black rounded-t-[20px] px-4 py-4 space-y-1 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-white font-bold text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
            {product.nombre}
          </p>
          <p className="text-[9px] text-gray-400 uppercase tracking-wider mt-1">
            CÓD. {product.codigo}
          </p>
        </div>
        <div className="space-y-0.5">
          <div className="flex items-baseline gap-2">
            <span className="text-[#FFDE00] text-2xl font-black">
              ${parseFloat(product.precio_oferta).toFixed(2)}
            </span>
            {product.descuento && (
              <span className="text-[#FF008C] text-xs font-bold">
                {product.descuento}% DTO
              </span>
            )}
          </div>
          <p className="text-[9px] text-gray-400">Precio normal unitario</p>
          <p className="text-sm text-gray-300 line-through">
            ${parseFloat(product.precio_normal).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedProduct = ({ product, accent }: { product: GridProduct; accent: string }) => (
  <div
    className="relative rounded-[32px] overflow-hidden p-[3px] shadow-[0_15px_45px_rgba(0,0,0,0.5)]"
    style={{
      background: `linear-gradient(135deg, ${accent}40 0%, ${accent}20 100%)`,
    }}
  >
    {/* Badge Días Negros */}
    <div className="absolute top-4 left-4 z-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#FF008C] to-[#FFDE00] flex items-center justify-center shadow-xl">
      <span className="text-[10px] font-black text-black text-center leading-tight">
        DÍAS<br/>NEGROS
      </span>
    </div>

    <div className="rounded-[30px] bg-gradient-to-br from-gray-100 to-white overflow-hidden h-full min-h-[420px] flex flex-col">
      {/* Imagen grande */}
      <div className="relative flex-1 flex items-center justify-center p-8 pt-16">
        <Image
          src={product.imagen}
          alt={product.nombre}
          width={320}
          height={320}
          className="object-contain max-h-[280px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
        />
      </div>

      {/* Ícono Tipti */}
      <div className="flex flex-col items-center gap-2 pb-4">
        <div className="w-12 h-12 rounded-full bg-[#FFDE00] flex items-center justify-center shadow-lg">
          <span className="text-[10px] font-black text-black">TIPTI</span>
        </div>
        <span className="text-xs text-gray-600 font-semibold">Pídelo por</span>
      </div>

      {/* Info destacada */}
      <div className="bg-black rounded-t-[28px] px-6 py-6 space-y-2">
        <p className="text-white font-black text-lg leading-tight line-clamp-2">
          {product.nombre}
        </p>
        <p className="text-xs text-gray-400 uppercase tracking-wider">
          CÓD. {product.codigo}
        </p>
        <div className="pt-2 space-y-1">
          <div className="flex items-baseline gap-3">
            <span className="text-[#FFDE00] text-4xl font-black">
              ${parseFloat(product.precio_oferta).toFixed(2)}
            </span>
            {product.descuento && (
              <span className="text-[#FF008C] text-base font-bold">
                {product.descuento}% DTO
              </span>
            )}
          </div>
          <p className="text-xs text-gray-400">Precio normal unitario</p>
          <p className="text-base text-gray-300 line-through">
            ${parseFloat(product.precio_normal).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const CategoryBanner = ({ image, categoryName, accent }: { image: string; categoryName: string; accent: string }) => (
  <div
    className="relative rounded-[32px] overflow-hidden border-[4px] shadow-[0_15px_45px_rgba(0,0,0,0.5)]"
    style={{ borderColor: accent }}
  >
    <div className="relative h-[200px]">
      <Image
        src={image}
        alt={categoryName}
        fill
        className="object-cover"
        sizes="(max-width: 1536px) 100vw, 1536px"
      />
    </div>
  </div>
);

const CategoryGrid = ({
  categoryId,
  categoryName,
  bannerImage,
  featuredImage,
  featuredPosition = 'start',
  products,
  accentColor,
}: CategoryGridProps) => {
  // Determinar dónde insertar el producto destacado
  const shouldShowFeatured = featuredImage && products.length > 0;
  let featuredIndex = 0;

  if (featuredPosition === 'middle') {
    featuredIndex = Math.floor(products.length / 2);
  } else if (featuredPosition === 'end') {
    featuredIndex = Math.max(0, products.length - 6);
  }

  return (
    <section id={categoryId} className="space-y-6 scroll-mt-20">
      {/* Banner de categoría */}
      <CategoryBanner image={bannerImage} categoryName={categoryName} accent={accentColor} />

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-fr">
        {products.map((product, index) => {
          // Insertar producto destacado en la posición correcta
          if (shouldShowFeatured && index === featuredIndex) {
            return (
              <>
                <div key={`featured-${categoryId}`} className="lg:col-span-2 lg:row-span-2">
                  <FeaturedProduct product={products[0]} accent={accentColor} />
                </div>
                <ProductCard key={product.codigo} product={product} />
              </>
            );
          }

          return <ProductCard key={product.codigo} product={product} />;
        })}
      </div>
    </section>
  );
};

export default CategoryGrid;

