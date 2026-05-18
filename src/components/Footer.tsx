import { MapPin, Instagram, Mail } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  return (
    <footer id="contato" className="bg-black/60 border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="/file_000000009af8720e99b962e3bbecccc9.png" 
                alt="CH IPHONES Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sua referência premium em tecnologia no Rio de Janeiro. Especialistas em Apple com atendimento personalizado.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/ch_iphones_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/5521967156951" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <WhatsAppIcon size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-display font-bold text-gold uppercase tracking-widest text-sm">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#vitrine" className="hover:text-white transition-colors">Produtos</a></li>
              <li><a href="https://wa.me/5521967156951" target="_blank" className="hover:text-white transition-colors">Suporte VIP</a></li>
            </ul>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <h4 className="font-display font-bold text-gold uppercase tracking-widest text-sm">Contatos VIP</h4>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-gold/10 rounded-2xl text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <WhatsAppIcon size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">WhatsApp</p>
                  <p className="text-gray-400 text-sm">+55 21 96715-6951</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-gold/10 rounded-2xl text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">E-mail</p>
                  <p className="text-gray-400 text-sm">contato@chiphones.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-[10px] text-gray-500 uppercase tracking-[0.2em]">
          <p>© 2026 CH IPHONES - Todos os direitos reservados.</p>
          <p>Desenvolvido por Elite Tech LP</p>
        </div>
      </div>
    </footer>
  );
}
