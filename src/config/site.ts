export interface ServiceItem {
  id: string;
  category: 'herreria' | 'obra-seguridad' | 'albanileria';
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  gallerySecondary?: string;
  specs: string[];
  materialSpec: string;
  badge: string;
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'herreria' | 'albanileria' | 'estructuras' | 'seguridad';
  categoryName: string;
  image: string;
  description: string;
  tag: string;
}

export const siteConfig = {
  name: "Herrería Tony",
  tagline: "Más de 45 años forjando hierro y construyendo obras sólidas. Hechas para durar.",
  shortDescription: "Taller artesanal y de obra con más de 45 años de oficio. Trabajos de herrería pesada, forja, portones, rejas de seguridad, estructuras y albañilería general en Buenos Aires.",
  foundationYear: 1980,
  yearsExperience: 45,
  phone: "11 5564-5199",
  whatsappNumber: "5491155645199",
  whatsappDisplay: "+54 9 11 5564-5199",
  location: "Buenos Aires, Argentina",
  coverageArea: "CABA, Zona Norte, Zona Oeste y Gran Buenos Aires. (Envíos y colocación en obra)",
  workshopHours: "Lunes a Viernes: 08:00 a 18:00 hs | Sábados: 08:00 a 13:00 hs",
  defaultWhatsAppMessage: "Hola Tony! Estuve viendo los trabajos en la web y me gustaría pedir un presupuesto a medida.",
  
  metrics: [
    {
      value: "+45",
      unit: "Años",
      label: "Trayectoria y Oficio",
      description: "Taller familiar con experiencia ininterrumpida desde 1980 en herrería y construcción."
    },
    {
      value: "100%",
      unit: "A Medida",
      label: "Diseño & Fabricación",
      description: "Cada trabajo se ejecuta según el espacio, la necesidad y especificaciones exactas del cliente."
    },
    {
      value: "Real",
      unit: "Calidad",
      label: "Materiales Seleccionados",
      description: "Materiales de primera línea, espesores estructurales reales y mezclas de alta resistencia."
    },
    {
      value: "0$",
      unit: "Costo",
      label: "Presupuesto sin Cargo",
      description: "Nos enviás tu idea, foto o medidas por WhatsApp y te asesoramos sin cargo en el día."
    }
  ],

  services: [
    // 1. Herrería de Taller & Forja
    {
      id: "forja-artesanal",
      category: "herreria",
      categoryLabel: "Herrería Artesanal & Forja",
      title: "Forja Tradicional & Piezas de Autor",
      subtitle: "Herrería artística forjada a fuego y martillo",
      description: "Elaboración de piezas forjadas a mano, volutas decorativas, herrajes especiales, parrillas reforzadas a medida y mobiliario con maderas duras.",
      image: "/images/forja-hierro-forjado.webp",
      gallerySecondary: "/images/pexels-felipe-silva-1458994757-30056224.jpg",
      specs: ["Hierro forjado en caliente tradicional", "Diseño personalizado según boceto o foto", "Terminación con óxido controlado, cera o epoxi"],
      materialSpec: "Hierro Dulce & Aceros al Carbono",
      badge: "TRABAJO ARTESANAL",
      whatsappMessage: "Hola Tony! Me interesa pedir presupuesto para un trabajo de Forja Artesanal / Pieza a medida. Te paso los detalles:"
    },
    {
      id: "soldadura-taller",
      category: "herreria",
      categoryLabel: "Taller Metalúrgico",
      title: "Soldaduras TIG/MIG & Fabricación Pesada",
      subtitle: "Uniones estructurales de máxima resistencia",
      description: "Taller propio equipado para corte, biselado y soldadura continua limpia. Fabricación de bases de mesa, muebles industriales y ensambles para arquitectura.",
      image: "/images/pexels-felipe-silva-1458994757-30056224.jpg",
      gallerySecondary: "/images/pexels-kiefer-likens-533887648-16485052.jpg",
      specs: ["Soldadura MIG/MAG y TIG de alta penetración", "Corte milimétrico y desbaste pulido", "Tubo estructural de espesores reales (2mm+)"],
      materialSpec: "Perfiles SAE 1010 y Tubulares",
      badge: "ESPESOR ESTRUCTURAL",
      whatsappMessage: "Hola Tony! Quisiera cotizar una fabricación metalúrgica / soldadura en taller:"
    },

    // 2. Herrería de Obra & Seguridad
    {
      id: "portones-seguridad",
      category: "obra-seguridad",
      categoryLabel: "Herrería de Obra & Seguridad",
      title: "Portones Corredizos, Levadizos & Batientes",
      subtitle: "Estructuras rígidas con apertura suave",
      description: "Portones para cocheras y entradas vehiculares o peatonales. Fabricados sobre bastidores pesados que no se descuadran, con ruedas sobre rulemanes dobles blindados.",
      image: "/images/pexels-turker-buk-turgut-2155191955-35991219.jpg",
      gallerySecondary: "/images/pexels-turker-buk-turgut-2155191955-35991219.jpg",
      specs: ["Bastidor tubular de 80x40 / 100x50 mm", "Ruedas de acero torneadas con rulemanes", "Preparados para automatización o manuales"],
      materialSpec: "Chapa DD 16/18 + Hierro Forjado",
      badge: "ALTA RESISTENCIA",
      whatsappMessage: "Hola Tony! Me gustaría cotizar un Portón (corredizo / levadizo / batiente). Mis medidas aproximadas son:"
    },
    {
      id: "rejas-frentes",
      category: "obra-seguridad",
      categoryLabel: "Herrería de Obra & Seguridad",
      title: "Rejas de Seguridad, Frentes & Balcones",
      subtitle: "Protección perimetral con acabado estético",
      description: "Rejas para frentes domiciliarios, ventanas tipo pecho de paloma, paños coloniales y cerramientos de balcones con hierro macizo y anclajes empotrados antipalanca.",
      image: "/images/pexels-k-58495356-8573231.jpg",
      gallerySecondary: "/images/rejas-coloniales-frente.webp",
      specs: ["Barrotes macizos de 1/2\" o 5/8\" pasantes", "Planchuelas perforadas en prensa", "Grampas de amurado amoladas de por vida"],
      materialSpec: "Hierro Macizo Pasante",
      badge: "SEGURIDAD ANTIPALANCA",
      whatsappMessage: "Hola Tony! Necesito presupuesto para Rejas de seguridad para frente / ventanas / balcón:"
    },
    {
      id: "escaleras-estructuras",
      category: "obra-seguridad",
      categoryLabel: "Estructuras Metálicas",
      title: "Escaleras Metálicas, Techos & Tinglados",
      subtitle: "Entrepisos, tinglados y escaleras compensadas",
      description: "Cálculo, construcción y montaje de escaleras rectas o caracol con escalones en chapa antideslizante semilla de melón, barandas tubulares y techos de chapa o pérgolas.",
      image: "/images/pexels-labskiii-14362186.jpg",
      gallerySecondary: "/images/pexels-blue-10682522.jpg",
      specs: ["Zancas laterales en perfiles UPN 120/140", "Escalones en chapa plegada o estampada", "Estructuras para techos con perfiles C y vigas"],
      materialSpec: "Acero Laminado IRAM-IAS",
      badge: "CÁLCULO ESTRUCTURAL",
      whatsappMessage: "Hola Tony! Quiero consultar por una Escalera metálica / Techo / Estructura en hierro:"
    },

    // 3. Albañilería de Obra & Construcción
    {
      id: "albanileria-obra",
      category: "albanileria",
      categoryLabel: "Albañilería de Obra & Construcción",
      title: "Albañilería Integral, Mampostería & Losas",
      subtitle: "Obra gruesa, muros, vigas y encadenados",
      description: "Equipo completo para obras y reformas: levantamiento de paredes de ladrillo común, hueco o bloque, llenado de columnas, encadenados, contrapisos, losas y revoques.",
      image: "/images/pexels-jaimejoelvh18-39356775.jpg",
      gallerySecondary: "/images/pexels-construccion-total-2464540-10951145.jpg",
      specs: ["Llenado de columnas y vigas de hormigón armado", "Losas con viguetas pretensadas y ladrillo sapo", "Revoques gruesos, hidrófugos y finos"],
      materialSpec: "Hormigón H21 + Hierro de Obra",
      badge: "OBRA GRUESA & FINA",
      whatsappMessage: "Hola Tony! Me interesa pedir presupuesto para un trabajo de Albañilería / Obra:"
    }
  ],

  gallery: [
    {
      id: "g1",
      title: "Rejas Coloniales en Frente Restaurado",
      category: "seguridad",
      categoryName: "Herrería",
      image: "/images/rejas-coloniales-frente.webp",
      description: "Cerramiento de ventanas con barrotes y volutas forjadas sobre un frente colonial restaurado.",
      tag: "Seguridad y Diseño"
    },
    {
      id: "g2",
      title: "Armado de Muro & Columna de Hormigón Armado",
      category: "albanileria",
      categoryName: "Albañilería",
      image: "/images/pexels-jaimejoelvh18-39356775.jpg",
      description: "Albañil armando encofrado y estructura de hierro del 10 para columna de encadenado.",
      tag: "Obra Gruesa"
    },
    {
      id: "g3",
      title: "Reforma Interior y Mampostería",
      category: "albanileria",
      categoryName: "Albañilería",
      image: "/images/reforma-interior-mamposteria.webp",
      description: "Levantamiento de muros de ladrillo y preparación de revoques en una reforma interior.",
      tag: "Reformas"
    },
    {
      id: "g4",
      title: "Losa de Viguetas & Estructura de Techo",
      category: "albanileria",
      categoryName: "Albañilería",
      image: "/images/pexels-construccion-total-2464540-10951145.jpg",
      description: "Montaje de losa de viguetas pretensadas, ladrillos cerámicos y armadura perimetral.",
      tag: "Estructura Losa"
    },
    {
      id: "g5",
      title: "Portón de Dos Hojas en Hierro Forjado",
      category: "seguridad",
      categoryName: "Herrería",
      image: "/images/pexels-turker-buk-turgut-2155191955-35991219.jpg",
      description: "Instalación de portón de herrería pesada sobre marco de piedra con cerrojo de seguridad.",
      tag: "Colocación Final"
    },
    {
      id: "g6",
      title: "Corte y Desbaste con Amoladora Industrial",
      category: "herreria",
      categoryName: "Herrería",
      image: "/images/pexels-kiefer-likens-533887648-16485052.jpg",
      description: "Preparación de biseles en perfiles estructurales de espesor real previo al soldado.",
      tag: "Taller Metalúrgico"
    },
    {
      id: "g7",
      title: "Escalera Metálica con Chapa Antideslizante",
      category: "estructuras",
      categoryName: "Estructuras",
      image: "/images/pexels-labskiii-14362186.jpg",
      description: "Escalera compensada exterior con baranda curva y escalones en chapa semilla de melón.",
      tag: "A Medida"
    },
    {
      id: "g8",
      title: "Detalle de Reja Forjada con Volutas",
      category: "seguridad",
      categoryName: "Herrería",
      image: "/images/forja-hierro-forjado.webp",
      description: "Barrotes torneados y volutas forjadas a mano en una reja de protección para ventana.",
      tag: "Forja Artesanal"
    },
    {
      id: "g9",
      title: "Techo Estructural de Perfiles & Chapa Cincalum",
      category: "estructuras",
      categoryName: "Estructuras",
      image: "/images/pexels-blue-10682522.jpg",
      description: "Montaje de tinglado con vigas reticuladas y fijaciones autoperforantes.",
      tag: "Tinglados"
    },
    {
      id: "g10",
      title: "Preparación de Mezcla & Obra Integral",
      category: "albanileria",
      categoryName: "Albañilería",
      image: "/images/pexels-construccion-total-2464540-6034140.jpg",
      description: "Operario trabajando con hormigonera y acopio de materiales para contrapisos.",
      tag: "Construcción"
    },
    {
      id: "g11",
      title: "Soldadura de Precisión TIG para Acabados Finos",
      category: "herreria",
      categoryName: "Herrería",
      image: "/images/pexels-felipe-silva-1458994757-30056224.jpg",
      description: "Cordón de soldadura continuo sin salpicaduras para carpintería metálica de alta gama.",
      tag: "Soldadura TIG"
    },
    {
      id: "g12",
      title: "Frente de Obra con Andamios Tubulares",
      category: "albanileria",
      categoryName: "Albañilería",
      image: "/images/pexels-d-goug-211350543-39494030.jpg",
      description: "Revoques exteriores, hidrófugos y pintura de fachada en vivienda residencial.",
      tag: "Fachada & Reformas"
    }
  ],

  workSteps: [
    {
      step: "01",
      code: "PASO_01 // CONTACTO",
      title: "Nos enviás tu idea o fotos",
      description: "Por WhatsApp nos mandás fotos del lugar, medidas tentativas, un dibujo en papel o fotos de referencia de lo que querés construir.",
      tag: "Vía WhatsApp"
    },
    {
      step: "02",
      code: "PASO_02 // ASESORAMIENTO",
      title: "Visita o Presupuesto Exacto",
      description: "Tony te asesora directamente en los materiales más convenientes (espesores de hierro, mezclas y estructuras) y te pasa el presupuesto claro.",
      tag: "Sin cargo"
    },
    {
      step: "03",
      code: "PASO_03 // EJECUCIÓN",
      title: "Fabricación u Obra en Sitio",
      description: "Se fabrica en taller con corte milimétrico y soldaduras de calidad, o se avanza la obra en tu domicilio cuidando prolijidad y tiempos.",
      tag: "Oficio Real"
    },
    {
      step: "04",
      code: "PASO_04 // TERMINACIÓN",
      title: "Entrega y Colocación Final",
      description: "Instalación final con amurado preciso, pintura anticorrosiva y terminaciones de albañilería cuidadas.",
      tag: "Terminación de Oficio"
    }
  ]
};

export function buildWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message || siteConfig.defaultWhatsAppMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
