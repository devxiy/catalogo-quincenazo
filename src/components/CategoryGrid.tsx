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

    <div className="rounded-[23px] bg-white overflow-hidden flex flex-col h-full">
      {/* Imagen del producto */}
      <div className="relative h-[280px] bg-white flex items-center justify-center px-6 pt-10 pb-6">
        <Image
          src={product.imagen}
          alt={product.nombre}
          width={320}
          height={320}
          className="object-contain max-h-[260px] w-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
        />
        {/* Botón Tipti - posición absoluta abajo derecha */}
        <div className="absolute bottom-6 right-6">
        <Image
          src="/assets/btn-tipti.png"
          alt="Pídelo por Tipti"
          width={70}
          height={92}
          className="object-contain drop-shadow-lg"
        />
      </div>
      </div>

      
      

      {/* Info del producto - 2 columnas */}
      <div className="bg-black rounded-t-[20px] px-5 py-5 flex-1 flex gap-3">
        {/* Columna izquierda: nombre y código */}
        <div className="flex-1 pr-2">
          <p className="text-white font-bold text-base leading-tight line-clamp-3">
            {product.nombre}
          </p>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-2">
            CÓD. {product.codigo}
          </p>
        </div>

        {/* Columna derecha: precios */}
        <div className="flex flex-col items-end justify-center text-right">
          <p className="text-[14px] text-gray-400 tracking-wider mt-1 text-[#FFFFFF]">
            Precio Akí
          </p>
          <span className="text-[#FFDE00] text-3xl font-black whitespace-nowrap">
            ${parseFloat(product.precio_oferta).toFixed(2)}
          </span>
          <p className="text-[10px] text-gray-400 tracking-wider mt-1 text-[#FFFFFF]">
            Precio normal unitario
          </p>
          <p className="text-base text-gray-300 line-through mt-1">
            ${parseFloat(product.precio_normal).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedBigProduct = ({ product, categoryId }: { product: GridProduct; categoryId: string }) => (
  <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-b from-[#1B001B] to-[#050105] p-[3px] shadow-[0_15px_45px_rgba(0,0,0,0.5)] col-span-2 row-span-2">
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
      <div className="relative w-full h-full">
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
        <div className="flex-1">
          <p className="text-white font-black text-lg leading-tight line-clamp-2 mb-2">
            {product.nombre}
          </p>
          <p className="text-xs text-gray-300 uppercase tracking-wider">
            CÓD. {product.codigo}
          </p>
        </div>

        {/* Columna derecha: precios */}
        <div className="flex flex-col items-end justify-center text-right">
          <span className="text-[#FFDE00] text-3xl font-black whitespace-nowrap">
            ${parseFloat(product.precio_oferta).toFixed(2)}
          </span>
          <p className="text-sm text-gray-400 line-through mt-1">
            ${parseFloat(product.precio_normal).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Botón Tipti - esquina inferior derecha */}
      <div className="absolute bottom-4 right-4 z-10">
        <Image
          src="/assets/btn-tipti.png"
          alt="Pídelo por Tipti"
          width={100}
          height={100}
          className="object-contain drop-shadow-2xl"
        />
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
            src={`/assets/categoria-${categoryId}.png`}
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
