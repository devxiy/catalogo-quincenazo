'use client';

import { ComponentProps } from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

type Product = ComponentProps<typeof ProductCard>['product'];

interface SectionBlockProps {
  title: string;
  products: Product[];
  bgColor?: string;
  bgImage?: string;
}

const SectionBlock: React.FC<SectionBlockProps> = ({ title, products, bgColor, bgImage }) => {
  const backgroundStyle = bgImage
    ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: bgColor || '#f8f8f8' };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative py-16 mb-16 overflow-hidden"
      style={backgroundStyle}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-bold font-serif text-gray-900 mb-12 text-center drop-shadow-md"
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SectionBlock;
