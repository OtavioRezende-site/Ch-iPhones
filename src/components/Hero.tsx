import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.5 }
    )
    .fromTo(subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo(highlightRef.current,
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' },
      '-=0.6'
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    );

    gsap.to('.hero-video-overlay', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      opacity: 0.8,
      backgroundColor: '#050505'
    });

  }, []);

  return (
    <section id="inicio" ref={containerRef} className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Video Placeholder Background */}
      <div className="absolute inset-0 z-[-2]">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60 scale-110"
        >
          <source src="/Smartphone_floating_in_studio_202605171249.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-[-1]" />
      </div>

      <div className="max-w-4xl pt-20">
        <h1 ref={titleRef} className="font-display text-4xl md:text-7xl font-bold leading-tight mb-6">
          A Excelência em <br />
          <span className="premium-gradient">Tecnologia</span> ao Seu Alcance.
        </h1>
        
        <p ref={subRef} className="text-gray-300 text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
          Especialistas em iPhones e Ecossistema Apple. <br />
          Lacrados, Vitrine e Seminovos com garantia de elite.
        </p>

        <div ref={highlightRef} className="glass-card inline-block px-6 py-4 rounded-2xl mb-10 border-gold/30">
          <p className="text-gold-light font-medium text-sm md:text-base">
            ✨ Aqui você marca de manhã e recebe seu pedido no mesmo dia!
            <span className="block text-white/60 text-xs mt-1">(Entregamos em mãos em todo RJ)</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            ref={ctaRef}
            href={`https://wa.me/5521967156951?text=${encodeURIComponent('Olá! Gostaria de um atendimento VIP para escolher meu novo iPhone na CH IPHONES.')}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="gold-button flex items-center space-x-3 px-10 py-5 rounded-full text-black font-extrabold text-lg uppercase tracking-wide w-full sm:w-auto"
          >
            <WhatsAppIcon size={24} />
            <span>Falar com Consultor VIP</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
