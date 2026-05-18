import { ArrowLeft } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { Link } from 'react-router-dom';
import ThreeBackground from '../components/ThreeBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products } from '../data/products';
import ProductImage from '../components/ProductImage';

export default function Catalog() {
  return (
    <div className="relative font-sans text-white antialiased">
      <ThreeBackground />
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 text-center md:text-left">
          <div>
            <Link to="/" className="inline-flex items-center text-gold hover:text-gold-light transition-colors mb-6 group">
              <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
              <span>Voltar para Início</span>
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold">Catálogo <span className="text-gold">Premium</span></h1>
            <p className="text-gray-400 mt-2">Explore nossa linha completa de produtos Apple genuínos.</p>
          </div>
          
          <div className="glass-card px-6 py-3 rounded-full flex items-center justify-center space-x-4 border-gold/20 mx-auto md:mx-0">
            <span className="text-sm font-medium text-gold">{products.length} Produtos Disponíveis</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-full border-white/5 hover:border-gold/30 transition-all duration-500">
              <Link to={`/produto/${product.id}`} className="relative aspect-video overflow-hidden block">
                <ProductImage 
                  src={product.image} 
                  secondarySrc={product.secondaryImage}
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-md ${
                    product.badge === 'Lacrado' ? 'bg-green-500/60 text-white' : 
                    product.badge === 'Vitrine' ? 'bg-gold/60 text-black' : 
                    'bg-blue-500/60 text-white'
                  }`}>
                    {product.badge}
                  </span>
                </div>
              </Link>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <Link to={`/produto/${product.id}`}>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">Valor à Vista</span>
                    <span className="text-2xl font-bold text-white tracking-tighter">
                      <span className="text-gold text-sm align-top mr-1">R$</span>
                      {product.price}
                    </span>
                  </div>
                  
                  <Link 
                    to={`/produto/${product.id}`}
                    className="px-6 py-3 rounded-2xl bg-gold text-black hover:bg-gold-light transition-all font-bold text-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
