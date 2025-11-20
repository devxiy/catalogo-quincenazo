'use client';

import Image from 'next/image';

type HighlightProduct = {
  id: string;
  name: string;
  code: string;
  price: number;
  regularPrice: number;
  image: string;
  border: string;
};

const tiptiIcon = '/blackdays/imgTipti1.png';
const badgeIcon = '/blackdays/imgIconDiasNegros1.png';

const highlightProducts: HighlightProduct[] = [
  {
    id: 'hp1',
    name: 'Arroz Macareño Cocolón 1810 g',
    code: 'Cod. 7861048610087',
    price: 2.09,
    regularPrice: 2.59,
    image: '/blackdays/img01ArrozMacareno1.png',
    border: '#FF70C4',
  },
  {
    id: 'hp2',
    name: 'Yogurt Toni Frutilla 190 g',
    code: 'Cod. 7861048610087',
    price: 0.72,
    regularPrice: 0.9,
    image: '/blackdays/img01ArrozMacareno2.png',
    border: '#25FF87',
  },
  {
    id: 'hp3',
    name: 'Jabón Suavizante Deja 1200 g',
    code: 'Cod. 7861001300932',
    price: 1.29,
    regularPrice: 4.08,
    image: '/blackdays/img01ArrozMacareno3.png',
    border: '#FFB23E',
  },
  {
    id: 'hp4',
    name: 'Pan Dulce Gourmet 800 g',
    code: 'Cod. 7861001300932',
    price: 4.99,
    regularPrice: 6.9,
    image: '/blackdays/img01ArrozMacareno4.png',
    border: '#5DECFF',
  },
];

const ProductHighlightCard = ({ product }: { product: HighlightProduct }) => (
  <div className="rounded-[28px] bg-white text-black flex flex-col border-[4px]" style={{ borderColor: product.border }}>
    <div className="relative px-6 pt-10 pb-4 text-center">
      <Image src={badgeIcon} alt="Días Negros" width={80} height={80} className="absolute -top-10 left-4" />
      <div className="h-[200px] flex items-center justify-center">
        <Image src={product.image} alt={product.name} width={210} height={210} className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)]" />
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-[#B3B3B3]">{product.code}</p>
      <p className="font-black leading-tight mt-2">{product.name}</p>
      <div className="mt-4 flex flex-col items-center text-xs text-[#828282] gap-1">
        <Image src={tiptiIcon} alt="Tipti" width={48} height={48} />
        <span className="text-black font-semibold">Pídelo por</span>
      </div>
    </div>
    <div className="bg-black rounded-b-[24px] px-6 py-5 space-y-1">
      <span className="text-[#FFDE00] text-3xl font-black">${product.price.toFixed(2)}</span>
      <p className="text-xs text-white/70">Precio normal unitario</p>
      <p className="text-sm font-semibold text-[#FFDE00]">${product.regularPrice.toFixed(2)}</p>
    </div>
  </div>
);

const ProductHighlightGrid = () => (
  <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    {highlightProducts.map((product) => (
      <ProductHighlightCard key={product.id} product={product} />
    ))}
  </section>
);

export default ProductHighlightGrid;

