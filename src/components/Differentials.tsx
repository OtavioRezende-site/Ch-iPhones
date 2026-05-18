import { useEffect, useRef } from 'react';
import { Truck, Globe, CreditCard, Users } from 'lucide-react';
import gsap from 'gsap';

const data = [
  {
    icon: <Truck size={40} className="text-gold" />,
    title: "Entrega Expressa RJ",
    text: "Receba seu iPhone no mesmo dia em qualquer lugar do Rio de Janeiro."
  },
  {
    icon: <Globe size={40} className="text-gold" />,
    title: "Envio Nacional",
    text: "Enviamos via Sedex com seguro para todo o Brasil. Rapidez e segurança."
  },
  {
    icon: <CreditCard size={40} className="text-gold" />,
    title: "Parcelamento VIP",
    text: "Flexibilidade total: Parcelamos em até 18x no cartão de crédito."
  },
  {
    icon: <Users size={40} className="text-gold" />,
    title: "+26k Clientes Satisfeitos",
    text: "Confiança comprovada com mais de 26 mil seguidores reais no Instagram."
  }
];

export default function Differentials() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.diff-card');
    if (!cards) return;

    gsap.fromTo(cards, 
      { y: 50, opacity: 0, scale: 0.9 },
      { 
        y: 0, opacity: 1, scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="diferenciais" ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Por que a <span className="text-gold">CH IPHONES</span>?</h2>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div key={index} className="diff-card glass-card p-8 rounded-3xl flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-white/5 rounded-2xl border border-white/10">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
