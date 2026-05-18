import WhatsAppIcon from './WhatsAppIcon';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between backdrop-blur-sm bg-black/20 border-b border-white/10">
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center">
          <img 
            src="/file_000000009af8720e99b962e3bbecccc9.png" 
            alt="CH IPHONES Logo" 
            className="h-12 w-auto object-contain"
          />
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
        <Link to="/#inicio" className="hover:text-gold transition-colors">Início</Link>
        <Link to="/#diferenciais" className="hover:text-gold transition-colors">Diferenciais</Link>
        <Link to="/produtos" className="hover:text-gold transition-colors">Catálogo</Link>
        <Link to="/#clientes" className="hover:text-gold transition-colors">Feedback</Link>
        <Link to="/#localizacao" className="hover:text-gold transition-colors">Loja</Link>
      </div>

      <a 
        href={`https://wa.me/5521967156951?text=${encodeURIComponent('Olá CH IPHONES! Gostaria de falar com um consultor sobre os produtos Apple disponíveis na vitrine.')}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="gold-button flex items-center space-x-2 px-6 py-2.5 rounded-full text-black font-bold text-sm"
      >
        <WhatsAppIcon size={18} />
        <span>Comprar Agora</span>
      </a>
    </nav>
  );
}
