import { MapPin, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelector('.location-content'),
      { x: -50, opacity: 0 },
      { 
        x: 0, opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
        }
      }
    );

    gsap.fromTo(el.querySelector('.map-container'),
      { x: 50, opacity: 0 },
      { 
        x: 0, opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section id="localizacao" ref={sectionRef} className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="location-content space-y-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Nossa <span className="text-gold">Loja Física</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Venha tomar um café conosco e conhecer de perto o seu próximo iPhone. Localização privilegiada no coração de Itaboraí.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 group">
              <div className="p-3 bg-gold/10 rounded-2xl text-gold group-hover:bg-gold group-hover:text-black transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Endereço</h4>
                <p className="text-gray-400">
                  Centro de Itaboraí - RJ. Rua Agenor de Abreu, nº 27 <br />
                  (Descendo a rua da Drogaria MAX, 1º rua à esquerda).
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="p-3 bg-gold/10 rounded-2xl text-gold group-hover:bg-gold group-hover:text-black transition-all">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Horário de Funcionamento</h4>
                <p className="text-gray-400">Segunda a Sexta: 09h às 18h<br />Sábado: 09h às 13h</p>
              </div>
            </div>

            <a 
              href="https://wa.me/5521967156951" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-start space-x-4 group"
            >
              <div className="p-3 bg-gold/10 rounded-2xl text-gold group-hover:bg-gold group-hover:text-black transition-all">
                <WhatsAppIcon size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">WhatsApp VIP</h4>
                <p className="text-gray-400 group-hover:text-gold transition-colors">+55 21 96715-6951</p>
              </div>
            </a>
          </div>

          <a 
            href="https://maps.app.goo.gl/YourActualGoogleMapsLink" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block gold-button px-8 py-4 rounded-full text-black font-bold uppercase tracking-widest text-sm"
          >
            Ver no Google Maps
          </a>
        </div>

        <div className="map-container relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden glass-card border border-gold/20 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.89531584988!2d-42.8596644!3d-22.7507316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9994c64379b33b%3A0xe5a1c0d8f6d6c8b!2sR.%20Agenor%20de%20Abreu%2C%2027%20-%20Centro%2C%20Itabora%C3%AD%20-%20RJ%2C%2024800-058!5e0!3m2!1spt-BR!2sbr!4v1715961300000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
            className="filter grayscale contrast-125 invert-[0.9] hue-rotate-180"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
