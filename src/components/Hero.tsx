'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: 'BLACK DAYS',
      subtitle: '¡LAS MEJORES OFERTAS DEL AÑO!',
      highlight: 'HASTA 80% OFF',
      description: 'Del 15 de mayo al 11 de junio 2025',
      image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1920&q=80',
      cta: 'COMPRAR AHORA',
      badge: '¡MEGA OFERTAS!'
    },
    {
      id: 2,
      title: 'ELECTRO HOGAR',
      subtitle: 'TECNOLOGÍA AL MEJOR PRECIO',
      highlight: '50% DESCUENTO',
      description: 'Smart TVs, Laptops, Smartphones y más',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80',
      cta: 'VER OFERTAS',
      badge: 'ENVÍO GRATIS'
    },
    {
      id: 3,
      title: 'SUPER COMBOS',
      subtitle: 'LLEVA MÁS, PAGA MENOS',
      highlight: '3x2 y 4x3',
      description: 'En productos seleccionados de supermercado',
      image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=1920&q=80',
      cta: 'APROVECHAR',
      badge: 'STOCK LIMITADO'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[700px] md:h-[800px] overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255, 215, 0, 0.1) 35px,
            rgba(255, 215, 0, 0.1) 70px
          )`
        }} />
      </div>

      {/* Background Images */}
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1 : 1.1
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            style={{ objectFit: 'cover' }}
            className="brightness-50"
          />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: -5 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <span className="mega-badge">
                {slides[currentSlide].badge}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-7xl md:text-9xl lg:text-[10rem] mb-4 leading-none"
            >
              <span className="neon-text">{slides[currentSlide].title}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-3xl font-oswald mb-6 text-accent-yellow"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {/* Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
              className="mb-8"
            >
              <p className="text-5xl md:text-7xl font-display gradient-text animate-pulse">
                {slides[currentSlide].highlight}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl mb-10 text-gray-300"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button className="btn-primary text-xl px-8 py-4 group">
                <span className="flex items-center justify-center gap-3">
                  {slides[currentSlide].cta}
                  <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
              <button className="btn-secondary text-xl px-8 py-4">
                VER CATÁLOGO COMPLETO
              </button>
            </motion.div>

            {/* Flash Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                delay: 1.5, 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 3 
              }}
              className="absolute top-10 right-10 text-accent-yellow"
            >
              <div className="text-6xl animate-pulse">⚡</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                delay: 2, 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 4 
              }}
              className="absolute bottom-20 left-10 text-accent-orange"
            >
              <div className="text-6xl animate-pulse">💥</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-30">
        <div className="flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 h-3 bg-accent-yellow' 
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50'
              } rounded-full`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-red animate-pulse" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-accent-yellow animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;