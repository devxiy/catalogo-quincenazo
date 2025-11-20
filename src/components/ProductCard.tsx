'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    category: string;
    subcategory: string;
    brand: string;
    price: number;
    regularPrice: number;
    discount: string;
    discountPercentage: number;
    imageUrl: string;
    additionalImages: string[];
    features: string[];
    tags: string[];
    stock: number;
    sku: string;
    isNew: boolean;
    isBestSeller: boolean;
    rating: number;
    reviewCount: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const handleAddToCart = () => {
    setIsInCart(true);
    setTimeout(() => setIsInCart(false), 2000);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < Math.floor(rating) ? 'text-accent-yellow' : 'text-gray-600'}>
        ★
      </span>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-black-secondary rounded-lg overflow-hidden product-card"
    >
      {/* Badges Container */}
      <div className="absolute top-3 left-3 right-3 z-20 flex items-start justify-between">
        <div className="flex flex-col gap-2">
          {/* Discount Badge */}
          {product.discountPercentage > 0 && (
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="discount-badge"
            >
              -{product.discountPercentage}%
            </motion.div>
          )}
          
          {/* Special Badges */}
          {product.tags.includes('3x6') && (
            <span className="bg-accent-purple text-white px-3 py-1 rounded font-bold text-sm animate-pulse">
              3x6
            </span>
          )}
          {product.isNew && (
            <span className="bg-neon-green text-black px-3 py-1 rounded font-bold text-sm">
              NUEVO
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-gradient-to-r from-accent-yellow to-accent-orange text-black px-3 py-1 rounded font-bold text-sm">
              ⭐ TOP
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-black/80 backdrop-blur-sm rounded-full hover:bg-accent-red/20 transition-all duration-200 group/wishlist"
        >
          <svg 
            className="w-5 h-5 text-gray-400 group-hover/wishlist:text-accent-red transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
            />
          </svg>
        </motion.button>
      </div>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-900">
        <Image
          src={!imageError ? product.imageUrl : '/placeholder.jpg'}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
          className={`transition-all duration-700 ${
            isHovered ? 'scale-110 brightness-110' : 'scale-100 brightness-90'
          }`}
          onError={() => setImageError(true)}
        />
        
        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end justify-center pb-4"
        >
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="bg-accent-yellow text-black px-6 py-2 rounded font-bold hover:bg-accent-orange transition-colors"
          >
            Vista Rápida
          </motion.button>
        </motion.div>

        {/* Stock Badge */}
        {product.stock < 10 && product.stock > 0 && (
          <div className="absolute bottom-3 right-3 bg-accent-red/90 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-bold animate-flash">
            ¡ÚLTIMAS {product.stock} UNIDADES!
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Category & Brand */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500 uppercase tracking-wider">
            {product.category}
          </span>
          <span className="text-accent-yellow font-medium">
            {product.brand}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-white line-clamp-2 min-h-[48px] group-hover:text-accent-yellow transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <div>{renderStars(product.rating)}</div>
          <span className="text-gray-400">({product.reviewCount})</span>
        </div>

        {/* Price Section */}
        <div className="space-y-2">
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-accent-yellow">
              ${product.price.toFixed(2)}
            </span>
            {product.regularPrice > product.price && (
              <span className="text-lg text-gray-500 line-through">
                ${product.regularPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Savings */}
          {product.regularPrice > product.price && (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-neon-green font-bold">
                AHORRAS ${(product.regularPrice - product.price).toFixed(2)}
              </span>
            </div>
          )}

          {/* Installments */}
          {product.tags.includes('12-meses') && (
            <p className="text-sm text-gray-300 flex items-center gap-1">
              💳 <span className="font-bold text-accent-orange">12 meses</span> de ${(product.price / 12).toFixed(2)}
            </p>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {product.tags.includes('envio-gratis') && (
            <span className="text-xs bg-black-tertiary text-accent-yellow px-2 py-1 rounded">
              🚚 Envío Gratis
            </span>
          )}
          {product.tags.includes('oferta-relampago') && (
            <span className="text-xs bg-accent-orange/20 text-accent-orange px-2 py-1 rounded animate-flash">
              ⚡ Oferta Relámpago
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCart}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 px-4 rounded font-bold text-lg transition-all duration-300 transform ${
            isInCart
              ? 'bg-neon-green text-black'
              : 'bg-gradient-to-r from-accent-yellow to-accent-orange text-black hover:from-accent-orange hover:to-accent-red'
          }`}
          disabled={isInCart || product.stock === 0}
        >
          <motion.div
            initial={false}
            animate={{ scale: isInCart ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-2"
          >
            {product.stock === 0 ? (
              <>
                <span>AGOTADO</span>
              </>
            ) : isInCart ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>¡AGREGADO!</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>AGREGAR AL CARRITO</span>
              </>
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/10 via-accent-orange/10 to-accent-red/10 blur-xl" />
      </div>
    </motion.div>
  );
};

export default ProductCard;