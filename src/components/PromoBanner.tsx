'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set end date to June 11, 2025
    const endDate = new Date('2025-06-11T23:59:59');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const promotions = [
    {
      title: '3x2',
      subtitle: 'En productos seleccionados',
      icon: '🛒',
      color: 'from-[#FFD100] to-[#FF6900]'
    },
    {
      title: '4x3',
      subtitle: 'En marcas participantes',
      icon: '🎁',
      color: 'from-[#E30613] to-[#FF6900]'
    },
    {
      title: '50% OFF',
      subtitle: 'En segunda unidad',
      icon: '💥',
      color: 'from-[#FF6900] to-[#E30613]'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E30613] via-[#FF6900] to-[#FFD100] opacity-90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            ¡OFERTAS EXPLOSIVAS!
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 font-semibold">
            Las mejores promociones del año están aquí
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-12"
        >
          <p className="text-center text-white text-lg mb-4 font-medium">
            ⏰ La promoción termina en:
          </p>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-white text-[#E30613] rounded-lg p-3">
                  <span className="text-3xl md:text-4xl font-bold font-display">
                    {value.toString().padStart(2, '0')}
                  </span>
                </div>
                <p className="text-white text-sm mt-2 capitalize">{unit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Promotion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${promo.color}`}></div>
              <div className="relative z-10 p-8 text-center text-white">
                <div className="text-5xl mb-4">{promo.icon}</div>
                <h3 className="text-4xl font-bold font-display mb-2">
                  {promo.title}
                </h3>
                <p className="text-lg opacity-90">{promo.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="bg-white text-[#E30613] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl">
            Ver todas las promociones →
          </button>
          
          <p className="text-white/80 mt-4 text-sm">
            *Aplican términos y condiciones. Válido hasta agotar stock.
          </p>
        </motion.div>

        {/* Featured Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {['Electrodomésticos', 'Tecnología', 'Alimentos', 'Hogar'].map((category, index) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center cursor-pointer hover:bg-white/20 transition-all"
            >
              <p className="text-white font-semibold">{category}</p>
              <p className="text-white/70 text-sm mt-1">Hasta 50% OFF</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PromoBanner;