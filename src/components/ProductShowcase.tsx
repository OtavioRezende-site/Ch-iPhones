import { useEffect, useRef } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import gsap from 'gsap';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import ProductImage from './ProductImage';

export default function ProductShowcase() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.product-card');
    if (!cards) return;

    gsap.fromTo(cards, 
      { y: 60, opacity: 0 },
      { 
        y: 0, opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="vitrine" ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 space-y-4 md:space-y-0 text-center md:text-left">
        <div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Escolha seu <span className="text-gold">Novo Estilo</span></h2>
          <p className="text-gray-400 max-w-xl">Produtos Apple originais com o mais alto padrão de qualidade CH IPHONES.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="product-card group relative flex flex-col glass-card rounded-[2rem] overflow-hidden border-white/5 hover:border-gold/20 transition-all duration-500">
            <Link to={`/produto/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-white/5 block">
              <ProductImage 
                src={product.image} 
                secondarySrc={product.secondaryImage}
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  product.badge === 'Lacrado' ? 'bg-green-500/80 text-white' : 
                  product.badge === 'Vitrine' ? 'bg-gold/80 text-black' : 
                  'bg-blue-500/80 text-white'
                }`}>
                  {product.badge}
                </span>
              </div>
            </Link>
            
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <Link to={`/produto/${product.id}`}>
                  <h3 className="text-base font-bold mb-2 group-hover:text-gold transition-colors line-clamp-1">{product.name}</h3>
                </Link>
                <div className="flex flex-col mb-6">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Valor à Vista</span>
                  <span className="text-2xl font-bold text-white tracking-tighter">
                    <span className="text-gold text-sm align-top mr-1">R$</span>
                    {product.price}
                  </span>
                </div>
              </div>
              
              <Link 
                to={`/produto/${product.id}`}
                className="w-full py-3 rounded-2xl border border-gold/40 text-gold font-bold text-sm tracking-wide flex items-center justify-center space-x-2 transition-all hover:bg-gold hover:text-black hover:border-gold"
              >
                <span>Ver Detalhes</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
