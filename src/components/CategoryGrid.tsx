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
  products: GridProduct[];
};

const ProductCard = ({ product, className = '' }: { product: GridProduct; className?: string }) => (
  <div className={`relative rounded-[24px] overflow-hidden bg-gradient-to-b from-[#1B001B] to-[#050105] p-[2px] shadow-[0_8px_24px_rgba(0,0,0,0.4)] ${className}`}>
    {/* Badge Días Negros */}
    <div className="absolute top-2 left-2 z-10 w-14 h-14">
      <Image
        src="/assets/icono-diasnegros.png"
        alt="Días Negros"
        width={56}
        height={56}
        className="object-contain"
      />
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
          <p className="text-[8px] text-gray-500 mt-1">
            Vigencia: {product.vigencia.inicio} - {product.vigencia.fin}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedBigProduct = ({ product, categoryId }: { product: GridProduct; categoryId: string }) => (
  <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-b from-[#1B001B] to-[#050105] p-[3px] shadow-[0_15px_45px_rgba(0,0,0,0.5)] col-span-2 row-span-2">
    {/* Badge Días Negros - Posición superior */}
    <div className="absolute top-4 left-4 z-10 w-20 h-20">
      <Image
        src="/assets/icono-diasnegros.png"
        alt="Días Negros"
        width={80}
        height={80}
        className="object-contain"
      />
    </div>

    <div className="rounded-[30px] bg-gradient-to-br from-gray-100 to-white overflow-hidden h-full flex flex-col relative">
      {/* Textos encima de la imagen */}
      <div className="absolute top-6 right-6 z-10 bg-black/80 backdrop-blur-sm rounded-2xl px-6 py-4 max-w-[280px]">
        <p className="text-white font-black text-lg leading-tight line-clamp-2 mb-2">
          {product.nombre}
        </p>
        <p className="text-xs text-gray-300 uppercase tracking-wider mb-3">
          CÓD. {product.codigo}
        </p>
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-[#FFDE00] text-3xl font-black">
              ${parseFloat(product.precio_oferta).toFixed(2)}
            </span>
            {product.descuento && (
              <span className="text-[#FF008C] text-sm font-bold">
                {product.descuento}% DTO
              </span>
            )}
          </div>
          <p className="text-[10px] text-gray-300">Precio normal unitario</p>
          <p className="text-sm text-gray-400 line-through">
            ${parseFloat(product.precio_normal).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Imagen grande de fondo */}
      <div className="relative w-full h-full">
        <Image
          src={`/assets/producto-big-${categoryId}.png`}
          alt={product.nombre}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Ícono Tipti en la esquina inferior */}
      <div className="absolute bottom-4 left-4 flex flex-col items-center gap-1">
        <div className="w-12 h-12 rounded-full bg-[#FFDE00] flex items-center justify-center shadow-lg">
          <span className="text-[10px] font-black text-black">TIPTI</span>
        </div>
        <span className="text-xs text-gray-800 font-semibold bg-white/90 px-2 py-0.5 rounded-full">
          Pídelo por
        </span>
      </div>
    </div>
  </div>
);

const CategoryGrid = ({ categoryId, categoryName, products }: CategoryGridProps) => {
  // Dividir productos según la estructura
  const producto1 = products[0]; // Debajo del banner izquierdo (fila 1)
  const producto2 = products[1]; // Debajo del banner izquierdo (fila 2)
  const productoBig = products[2]; // Producto grande derecho (2x2)
  const producto3 = products[3]; // Fila 3 izquierda (2 columnas)
  const producto4 = products[4]; // Fila 3 derecha superior
  const producto5 = products[5]; // Fila 3 derecha inferior
  const productosRestantes = products.slice(6); // A partir de fila 4 (4 columnas)

  return (
    <section id={categoryId} className="space-y-6 scroll-mt-20">
      {/* Grid de 4 columnas base */}
      <div className="grid grid-cols-4 gap-5 auto-rows-fr">
        {/* FILA 1-2: Banner titular (2 cols x 1 fila) */}
        <div className="col-span-2 row-span-1 rounded-[32px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.5)]">
          <Image
            src={`/assets/categoria-titular-${categoryId}.png`}
            alt={categoryName}
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* FILA 1-2: Producto grande derecho (2 cols x 2 filas) */}
        {productoBig && <FeaturedBigProduct product={productoBig} categoryId={categoryId} />}

        {/* FILA 2: Producto 1 debajo del banner (1 col) */}
        {producto1 && <ProductCard product={producto1} />}

        {/* FILA 2: Producto 2 debajo del banner (1 col) */}
        {producto2 && <ProductCard product={producto2} />}

        {/* FILA 3: Producto destacado izquierda (2 cols) */}
        {producto3 && <ProductCard product={producto3} className="col-span-2" />}

        {/* FILA 3: Producto 4 derecha superior (1 col) */}
        {producto4 && <ProductCard product={producto4} />}

        {/* FILA 3: Producto 5 derecha inferior (1 col) */}
        {producto5 && <ProductCard product={producto5} />}

        {/* FILA 4+: Productos restantes (4 columnas normales) */}
        {productosRestantes.map((product) => (
          <ProductCard key={product.codigo} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
