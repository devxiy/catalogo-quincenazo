'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Sobre AKÍ', href: '#' },
      { name: 'Nuestras Tiendas', href: '#' },
      { name: 'Trabaja con Nosotros', href: '#' },
      { name: 'Proveedores', href: '#' },
    ],
    help: [
      { name: 'Centro de Ayuda', href: '#' },
      { name: 'Cómo Comprar', href: '#' },
      { name: 'Envíos y Devoluciones', href: '#' },
      { name: 'Garantías', href: '#' },
    ],
    legal: [
      { name: 'Términos y Condiciones', href: '#' },
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Política de Cookies', href: '#' },
      { name: 'Defensa del Consumidor', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' },
    { name: 'TikTok', icon: '🎵', href: '#' },
  ];

  const paymentMethods = ['💳 Visa', '💳 Mastercard', '💳 American Express', '🏦 PayPal', '💰 Efectivo'];

  return (
    <footer className="bg-black-secondary border-t border-gray-800">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-black-primary via-black-secondary to-black-primary py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 20px,
              rgba(255, 215, 0, 0.1) 20px,
              rgba(255, 215, 0, 0.1) 40px
            )`
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display mb-4 gradient-text"
            >
              SUSCRÍBETE Y AHORRA MÁS
            </motion.h3>
            <p className="text-gray-300 mb-8 text-lg">
              Recibe ofertas exclusivas y cupones de descuento directo en tu correo
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 bg-black border-2 border-gray-700 text-white px-6 py-3 rounded focus:border-accent-yellow focus:outline-none transition-colors"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                className="btn-primary px-8"
              >
                SUSCRIBIRME
              </motion.button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              *Al suscribirte aceptas recibir comunicaciones promocionales. Puedes cancelar en cualquier momento.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-accent-yellow to-accent-orange p-3 rounded">
                  <span className="font-display text-3xl font-bold text-black">AKÍ</span>
                </div>
                <span className="ml-3 text-xl font-display text-accent-yellow">BLACK DAYS</span>
              </div>
              <p className="text-gray-400 mb-6">
                Las mejores ofertas del año están en AKÍ. Aprovecha los BLACK DAYS 2025 con descuentos de hasta 80% OFF en miles de productos.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black-primary border border-gray-700 p-2 rounded hover:border-accent-yellow transition-colors"
                    aria-label={social.name}
                  >
                    <span className="text-2xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-bold text-white mb-4 text-lg">Empresa</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-accent-yellow transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-lg">Ayuda</h4>
              <ul className="space-y-2">
                {footerLinks.help.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-accent-yellow transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-lg">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-accent-yellow transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-sm font-bold text-white mb-3">Métodos de Pago</h4>
                <div className="flex flex-wrap gap-3">
                  {paymentMethods.map((method) => (
                    <span key={method} className="text-gray-400 text-sm">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <div className="flex items-center gap-2 text-neon-green font-bold mb-2">
                  <span>🔒</span>
                  <span>COMPRA 100% SEGURA</span>
                </div>
                <p className="text-xs text-gray-500">
                  Tus datos están protegidos con encriptación SSL
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {currentYear} AKÍ Ecuador. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-accent-yellow transition-colors">
                  Mapa del Sitio
                </a>
                <a href="#" className="text-gray-500 hover:text-accent-yellow transition-colors">
                  Accesibilidad
                </a>
                <a href="#" className="text-gray-500 hover:text-accent-yellow transition-colors">
                  Preferencias
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-accent-yellow to-accent-orange text-black p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;