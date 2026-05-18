import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThreeBackground from '../components/ThreeBackground';
import WhatsAppIcon from '../components/WhatsAppIcon';
import ProductImage from '../components/ProductImage';
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { useEffect } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
        <Link to="/" className="text-gold hover:underline">Voltar para o início</Link>
      </div>
    );
  }

  const encodedMsg = encodeURIComponent(`Olá CH IPHONES! Tenho interesse no ${product.name} (${product.badge}) que vi na vitrine VIP por R$ ${product.price}. Pode me passar mais detalhes?`);
  const whatsappUrl = `https://wa.me/5521967156951?text=${encodedMsg}`;

  return (
    <div className="relative font-sans text-white antialiased">
      <ThreeBackground />
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-gold hover:text-gold-light transition-colors group">
            <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
            <span>Voltar para Vitrine</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gold/10 blur-[100px] rounded-full z-[-1] opacity-50" />
            <div className="glass-card rounded-[3rem] overflow-hidden border-gold/10 p-4">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                <ProductImage 
                  src={product.image} 
                  secondarySrc={product.secondaryImage}
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest backdrop-blur-md shadow-xl ${
                    product.badge === 'Lacrado' ? 'bg-green-500/80 text-white' : 
                    product.badge === 'Vitrine' ? 'bg-gold/80 text-black' : 
                    'bg-blue-500/80 text-white'
                  }`}>
                    {product.badge}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-10">
            <div>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 leading-tight">{product.name}</h1>
              <div className="flex items-center space-x-2 text-gold">
                <CheckCircle2 size={18} />
                <span className="text-sm font-medium tracking-widest uppercase">Garantia CH IPHONES inclusa</span>
              </div>
            </div>

            <div className="space-y-4">
               <span className="text-gray-500 text-sm uppercase tracking-widest">Valor à Vista</span>
               <div className="flex items-baseline space-x-2">
                 <span className="text-gold text-2xl font-bold">R$</span>
                 <span className="text-6xl font-black tracking-tighter">{product.price}</span>
               </div>
               <p className="text-gray-400 text-sm italic">Parcelamento facilitado em até 18x no cartão de crédito.</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold border-b border-white/10 pb-2">Descrição do Especialista</h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specs.map((spec, i) => (
                <div key={i} className="glass-card p-4 rounded-2xl flex items-center space-x-4 border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gold">
                    {i === 0 && <Zap size={20} />}
                    {i === 1 && <ShieldCheck size={20} />}
                    {i === 2 && <Zap size={20} />}
                    {i === 3 && <ShieldCheck size={20} />}
                  </div>
                  <div>
                    <p className="text-[10px] text-gold uppercase tracking-widest font-bold">{spec.label}</p>
                    <p className="text-sm font-medium">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow gold-button flex items-center justify-center space-x-3 px-10 py-6 rounded-2xl text-black font-black text-lg uppercase tracking-wider shadow-[0_20px_50px_rgba(212,175,55,0.2)]"
              >
                <WhatsAppIcon size={24} />
                <span>Reservar via WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8 border-t border-white/5">
               <div className="text-center">
                 <p className="text-gold text-xs font-bold uppercase mb-1">Entrega</p>
                 <p className="text-white text-xs">Expressa em todo o RJ</p>
               </div>
               <div className="w-px h-8 bg-white/10" />
               <div className="text-center">
                 <p className="text-gold text-xs font-bold uppercase mb-1">Qualidade</p>
                 <p className="text-white text-xs">Padrão Elite Apple</p>
               </div>
               <div className="w-px h-8 bg-white/10" />
               <div className="text-center">
                 <p className="text-gold text-xs font-bold uppercase mb-1">Confiança</p>
                 <p className="text-white text-xs">+26k Seguidores</p>
               </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
