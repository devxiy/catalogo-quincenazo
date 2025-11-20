'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: '🔥 BLACK DAYS', href: '#blackdays', highlight: true },
    { name: 'Tecnología', href: '#tecnologia' },
    { name: 'Línea Blanca', href: '#lineablanca' },
    { name: 'Alimentos', href: '#alimentos' },
    { name: 'Hogar', href: '#hogar' },
    { name: 'Limpieza', href: '#limpieza' },
  ];

  return (
    <>
      {/* Top Banner - Animated */}
      <div className="bg-gradient-to-r from-accent-red via-accent-orange to-accent-yellow py-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.p 
            animate={{ x: [0, -100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-black font-bold text-sm md:text-base flex items-center justify-center gap-4"
          >
            <span>🔥 BLACK DAYS 2025 - HASTA 80% OFF</span>
            <span>⚡ ENVÍO GRATIS EN COMPRAS +$50</span>
            <span>💳 12 MESES SIN INTERESES</span>
            <span>🚀 OFERTAS RELÁMPAGO CADA HORA</span>
          </motion.p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-black/95 backdrop-blur-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg shadow-accent-yellow/20' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-accent-yellow to-accent-orange p-3 rounded"
                >
                  <span className="font-display text-3xl font-bold text-black">AKÍ</span>
                </motion.div>
                <div className="ml-3">
                  <span className="text-accent-yellow font-display text-2xl hidden sm:block">
                    BLACK DAYS
                  </span>
                  <span className="text-gray-400 text-xs">
                    15 Mayo - 11 Junio 2025
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 group ${
                      category.highlight
                        ? 'text-black'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {category.highlight && (
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-r from-accent-yellow to-accent-orange rounded"
                      />
                    )}
                    <span className="relative">{category.name}</span>
                    {!category.highlight && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side items */}
            <div className="flex items-center space-x-3">
              {/* Search Button */}
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400 hover:text-accent-yellow transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.button>

              {/* User Account */}
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400 hover:text-accent-yellow transition-colors hidden md:block"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </motion.button>

              {/* Cart with Animation */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link href="#" className="relative p-2 text-gray-400 hover:text-accent-yellow transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute -top-1 -right-1 bg-accent-red text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                  >
                    0
                  </motion.span>
                </Link>
              </motion.div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-400 hover:text-white"
              >
                <span className="sr-only">Abrir menú</span>
                {!isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-black-secondary border-t border-gray-800"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded text-base font-medium transition-colors ${
                      category.highlight
                        ? 'bg-gradient-to-r from-accent-yellow to-accent-orange text-black'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Quick Access Bar */}
      <div className="bg-black-secondary py-2 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start gap-6 overflow-x-auto scrollbar-hide">
            {[
              { icon: '⚡', text: 'Ofertas Flash', color: 'text-accent-yellow' },
              { icon: '🏷️', text: '3x2 y 4x3', color: 'text-accent-orange' },
              { icon: '💥', text: 'Liquidación', color: 'text-accent-red' },
              { icon: '🎯', text: 'Solo Hoy', color: 'text-accent-purple' },
              { icon: '📱', text: 'App Exclusivo', color: 'text-neon-green' },
              { icon: '🎁', text: 'Regalos', color: 'text-accent-yellow' },
            ].map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-3 py-1 rounded border border-gray-700 hover:border-current transition-all ${item.color} whitespace-nowrap`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Navbar;