export interface Product {
  id: number;
  name: string;
  badge: 'Lacrado' | 'Vitrine' | 'Seminovo';
  image: string;
  secondaryImage?: string;
  price: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export const products: Product[] = [
  { 
    id: 1, 
    name: 'iPhone 15 Pro Max 256GB', 
    badge: 'Lacrado', 
    image: 'https://images.unsplash.com/photo-1696429175928-793a1cdef1d3?q=80&w=600&auto=format&fit=crop', 
    secondaryImage: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=600&auto=format&fit=crop',
    price: '8.490', 
    description: 'O mais potente iPhone já criado, com chip A17 Pro e sistema de câmera Pro de 48 MP com zoom óptico de 5x. Design robusto e leve em titânio aeroespacial.',
    specs: [
      { label: 'Processador', value: 'Chip A17 Pro com GPU de 6 núcleos' },
      { label: 'Câmera', value: 'Sistema de câmera Pro (48 MP Principal)' },
      { label: 'Tela', value: 'Super Retina XDR de 6,7 polegadas' },
      { label: 'Material', value: 'Titânio Aeroespacial' }
    ]
  },
  { 
    id: 2, 
    name: 'iPhone 15 Pro 128GB', 
    badge: 'Lacrado', 
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop', 
    secondaryImage: 'https://images.unsplash.com/photo-1695048133170-658a55427977?q=80&w=600&auto=format&fit=crop',
    price: '6.990', 
    description: 'Tudo o que o Pro oferece em um tamanho mais compacto. Forjado em titânio e equipado com o revolucionário chip A17 Pro.',
    specs: [
      { label: 'Processador', value: 'Chip A17 Pro' },
      { label: 'Câmera', value: '48 MP, Ultra-angular e Teleobjetiva' },
      { label: 'Tela', value: '6,1 polegadas ProMotion' },
      { label: 'Bateria', value: 'Até 23 horas de vídeo' }
    ]
  },
  { 
    id: 3, 
    name: 'iPhone 14 Pro Max 256GB', 
    badge: 'Vitrine', 
    image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?q=80&w=600&auto=format&fit=crop', 
    secondaryImage: 'https://images.unsplash.com/photo-1678652197821-2d180705cd2c?q=80&w=600&auto=format&fit=crop',
    price: '5.890', 
    description: 'Dynamic Island e tela Sempre Ativa. Uma forma mágica de interagir com o iPhone e sensores de segurança pioneiros.',
    specs: [
      { label: 'Destaque', value: 'Dynamic Island' },
      { label: 'Tela', value: 'LTPO Super Retina XDR OLED' },
      { label: 'Câmera', value: '48 MP (Principal) + 12 MP (Teleobjetiva)' },
      { label: 'Segurança', value: 'Detecção de Acidentes' }
    ]
  },
  { 
    id: 4, 
    name: 'iPhone 13 Pro 128GB', 
    badge: 'Seminovo', 
    image: 'https://images.unsplash.com/photo-1662035987163-9e4e69d763ee?q=80&w=600&auto=format&fit=crop', 
    secondaryImage: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=600&auto=format&fit=crop',
    price: '4.290', 
    description: 'O maior upgrade do sistema de câmera Pro até hoje. Tela Super Retina XDR com ProMotion para uma experiência mais rápida e responsiva.',
    specs: [
      { label: 'Tela', value: '120Hz ProMotion' },
      { label: 'Gravação', value: 'Vídeo ProRes e Modo Cinema' },
      { label: 'Resistência', value: 'Ceramic Shield, IP68' },
      { label: 'Bateria', value: 'Melhor durabilidade da categoria' }
    ]
  },
  { 
    id: 5, 
    name: 'iPhone 14 128GB', 
    badge: 'Vitrine', 
    image: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=600&auto=format&fit=crop', 
    secondaryImage: 'https://images.unsplash.com/photo-1664219460010-749e7b237f37?q=80&w=600&auto=format&fit=crop',
    price: '3.990', 
    description: 'Sistema de câmera dupla avançado para fotos impressionantes em qualquer luz. Detecção de Acidentes e maior duração de bateria.',
    specs: [
      { label: 'Chips', value: 'A15 Bionic com GPU de 5 núcleos' },
      { label: 'Fotos', value: 'Novo modo Ação para vídeos estáveis' },
      { label: 'Segurança', value: 'SOS de Emergência via satélite' },
      { label: 'Câmeras', value: 'Câmera TrueDepth com foco automático' }
    ]
  },
  { 
    id: 6, 
    name: 'Apple Watch Ultra 2', 
    badge: 'Lacrado', 
    image: 'https://images.unsplash.com/photo-1695663737035-77983637e721?q=80&w=600&auto=format&fit=crop', 
    secondaryImage: 'https://images.unsplash.com/photo-1695663738018-77983637e721?q=80&w=600&auto=format&fit=crop',
    price: '5.490', 
    description: 'O Apple Watch mais robusto e versátil de todos. Caixa de titânio de 49mm, GPS de precisão e dupla frequência e até 36 horas de bateria.',
    specs: [
      { label: 'Caixa', value: 'Titânio Aeroespacial 49mm' },
      { label: 'Brilho', value: 'Até 3000 nits' },
      { label: 'Autonomia', value: 'Até 36h (Normal) / 72h (Economia)' },
      { label: 'Resistência', value: 'WR100, MIL-STD 810H' }
    ]
  },
  { 
    id: 7, 
    name: 'iPhone 12 Pro 128GB', 
    badge: 'Seminovo', 
    image: 'https://images.unsplash.com/photo-1611791484670-ce49b7aa132e?q=80&w=600&auto=format&fit=crop', 
    secondaryImage: 'https://images.unsplash.com/photo-1603919306047-9934c6ad8020?q=80&w=600&auto=format&fit=crop',
    price: '3.190', 
    description: 'Design plano clássico, Ceramic Shield e scanner LiDAR para experiências de RA aprimoradas e fotos incríveis em pouca luz.',
    specs: [
      { label: 'Rede', value: 'Conectividade 5G rápida' },
      { label: 'Design', value: 'Aço inoxidável de qualidade cirúrgica' },
      { label: 'Fotografia', value: 'ProRAW da Apple' },
      { label: 'Sensor', value: 'Scanner LiDAR' }
    ]
  },
  { 
    id: 8, 
    name: 'AirPods Pro (2ª Geração)', 
    badge: 'Lacrado', 
    image: 'https://images.unsplash.com/photo-1610492103183-9111abb903d1?q=80&w=600&auto=format&fit=crop', 
    secondaryImage: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=600&auto=format&fit=crop',
    price: '1.690', 
    description: 'Cancelamento Ativo de Ruído até duas vezes melhor. Áudio Espacial Personalizado e maior duração da bateria.',
    specs: [
      { label: 'Áudio', value: 'Driver de baixa distorção exclusivo' },
      { label: 'Ruído', value: 'Cancelamento Ativo e Transparência' },
      { label: 'Chip', value: 'Novo chip H2' },
      { label: 'Estojo', value: 'MagSafe com som e busca' }
    ]
  },
  { 
    id: 9, 
    name: 'iPhone 11 64GB', 
    badge: 'Vitrine', 
    image: 'https://images.unsplash.com/photo-1573148723045-f012cc493630?q=80&w=600&auto=format&fit=crop', 
    secondaryImage: 'https://images.unsplash.com/photo-1574755393849-623942496936?q=80&w=600&auto=format&fit=crop',
    price: '1.990', 
    description: 'Sistema de câmera dupla para capturar mais do que você vê e ama. Chip mais rápido em um smartphone e bateria para o dia todo.',
    specs: [
      { label: 'Vídeo', value: 'Qualidade 4K em todas as câmeras' },
      { label: 'Resistência', value: 'IP68 (até 2 metros por 30 min)' },
      { label: 'Cores', value: '6 novas opções vibrantes' },
      { label: 'ID', value: 'Face ID seguro' }
    ]
  },
  { 
    id: 10, 
    name: 'iPhone 15 128GB Blue', 
    badge: 'Lacrado', 
    image: 'https://images.unsplash.com/photo-1695048133103-62502693895e?q=80&w=600&auto=format&fit=crop', 
    secondaryImage: 'https://images.unsplash.com/photo-1695048133092-27027aa2ad3a?q=80&w=600&auto=format&fit=crop',
    price: '4.890', 
    description: 'Dynamic Island chega ao iPhone 15. Câmera principal de 48MP com teleobjetiva de 2x e design em vidro com infusão de cor e alumínio.',
    specs: [
      { label: 'Conector', value: 'USB-C universal' },
      { label: 'Câmera', value: '48 MP Principal com 2x zoom' },
      { label: 'Segurança', value: 'Detecção de Acidentes' },
      { label: 'Chip', value: 'A16 Bionic (o mesmo do 14 Pro)' }
    ]
  },
  { 
    id: 11, 
    name: 'Apple Watch Series 9', 
    badge: 'Lacrado', 
    image: 'https://images.unsplash.com/photo-1434493907317-a46b53b81882?q=80&w=600&auto=format&fit=crop', 
    secondaryImage: 'https://images.unsplash.com/photo-1544117518-2b47abc7458b?q=80&w=600&auto=format&fit=crop',
    price: '3.290', 
    description: 'O Apple Watch mais potente de sempre. O chip S9 permite um ecrã superbrilhante e um novo gesto de duplo toque mágico.',
    specs: [
      { label: 'Chipset', value: 'S9 SiP de alto desempenho' },
      { label: 'Ação', value: 'Novo gesto de Toque Duplo' },
      { label: 'Siri', value: 'Siri no dispositivo com acesso a saúde' },
      { label: 'Tela', value: 'Até 2000 nits de brilho' }
    ]
  },
  { 
    id: 12, 
    name: 'iPhone 13 128GB Graphite', 
    badge: 'Vitrine', 
    image: 'https://images.unsplash.com/photo-1640539121768-e564bd804b3a?q=80&w=600&auto=format&fit=crop', 
    secondaryImage: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=600&auto=format&fit=crop',
    price: '3.390', 
    description: 'Arquitetura de câmera reimaginada com Modo Cinema e Estilos Fotográficos. Um salto gigante na autonomia da bateria.',
    specs: [
      { label: 'Design', value: 'Bordas planas e duráveis' },
      { label: 'Vídeo', value: 'Modo Cinema com foco automático' },
      { label: 'CPU', value: 'A15 Bionic ultra veloz' },
      { label: 'Display', value: 'Super Retina XDR mais brilhante' }
    ]
  },
];
