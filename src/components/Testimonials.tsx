import { useRef } from 'react';
import { motion } from 'framer-motion';

const customerPhotos = [
  "/AISelect_20260517_130217_Instagram.jpg",
  "/AISelect_20260517_130226_Instagram.jpg",
  "/AISelect_20260517_130238_Instagram.jpg",
  "/AISelect_20260517_130248_Instagram.jpg",
  "/AISelect_20260517_130259_Instagram.jpg",
  "/AISelect_20260517_130308_Instagram.jpg",
  "/AISelect_20260517_130318_Instagram.jpg",
  "/AISelect_20260517_130335_Instagram.jpg",
  "/AISelect_20260517_130343_Instagram.jpg",
  "/AISelect_20260517_130354_Instagram.jpg",
  "/AISelect_20260517_130409_Instagram.jpg",
  "/AISelect_20260517_130419_Instagram.jpg",
  "/AISelect_20260517_130429_Instagram.jpg",
  "/AISelect_20260517_130441_Instagram.jpg",
  "/AISelect_20260517_130448_Instagram.jpg",
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section id="clientes" ref={containerRef} className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Comunidade <span className="text-gold">CH IPHONES</span></h2>
        <p className="text-gray-400 text-lg">Quem compra uma vez, vira cliente para sempre.</p>
        <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full" />
      </div>

      {/* Customer Photos Slider */}
      <div className="relative py-10 bg-white/5 backdrop-blur-3xl overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
        
        <motion.div 
          className="flex space-x-6 w-fit h-[400px]"
          animate={{ x: [0, -2500] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...customerPhotos, ...customerPhotos].map((src, idx) => (
            <div key={idx} className="relative w-72 h-full flex-shrink-0 group overflow-hidden rounded-3xl border border-gold/10 shadow-2xl">
              <img 
                src={src} 
                alt={`Cliente CH IPHONES ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="mt-20 text-center px-6">
        <p className="text-white/60 text-sm mb-4">Junte-se a mais de 26 mil seguidores no Instagram</p>
        <a 
          href="https://instagram.com/ch_iphones_" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gold font-bold hover:text-gold-light transition-colors underline decoration-gold/30 underline-offset-8"
        >
          Ver stories de entregas reais @ch_iphones_
        </a>
      </div>
    </section>
  );
}
