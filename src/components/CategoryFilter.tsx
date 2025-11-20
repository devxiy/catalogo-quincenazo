'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  productCount: Record<string, number>;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  productCount 
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const priceRanges = [
    { label: 'Menos de $10', min: 0, max: 10 },
    { label: '$10 - $50', min: 10, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $500', min: 100, max: 500 },
    { label: 'Más de $500', min: 500, max: Infinity }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Filtros</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-1 hover:bg-gray-100 rounded"
        >
          <svg 
            className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Categories */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 mb-3">Categorías</h4>
            
            {/* All Products */}
            <label className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === 'all'}
                  onChange={() => onCategoryChange('all')}
                  className="w-4 h-4 text-[#E30613] border-gray-300 focus:ring-[#E30613]"
                />
                <span className="ml-3 text-gray-700 group-hover:text-gray-900">
                  Todos los productos
                </span>
              </div>
              <span className="text-sm text-gray-500">
                ({Object.values(productCount).reduce((a, b) => a + b, 0)})
              </span>
            </label>

            {categories.map((category) => (
              <label key={category} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => onCategoryChange(category)}
                    className="w-4 h-4 text-[#E30613] border-gray-300 focus:ring-[#E30613]"
                  />
                  <span className="ml-3 text-gray-700 group-hover:text-gray-900">
                    {category}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  ({productCount[category] || 0})
                </span>
              </label>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200"></div>

          {/* Price Range */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 mb-3">Rango de precio</h4>
            {priceRanges.map((range) => (
              <label key={range.label} className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#E30613] border-gray-300 rounded focus:ring-[#E30613]"
                />
                <span className="ml-3 text-gray-700 group-hover:text-gray-900">
                  {range.label}
                </span>
              </label>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200"></div>

          {/* Special Offers */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 mb-3">Ofertas especiales</h4>
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 text-[#E30613] border-gray-300 rounded focus:ring-[#E30613]"
              />
              <span className="ml-3 text-gray-700 group-hover:text-gray-900">
                Promociones 3x2
              </span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 text-[#E30613] border-gray-300 rounded focus:ring-[#E30613]"
              />
              <span className="ml-3 text-gray-700 group-hover:text-gray-900">
                Descuentos especiales
              </span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 text-[#E30613] border-gray-300 rounded focus:ring-[#E30613]"
              />
              <span className="ml-3 text-gray-700 group-hover:text-gray-900">
                Envío gratis
              </span>
            </label>
          </div>

          {/* Clear Filters Button */}
          <button className="mt-6 w-full text-center text-sm text-[#E30613] hover:text-[#C00000] font-medium transition-colors">
            Limpiar filtros
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default CategoryFilter;



