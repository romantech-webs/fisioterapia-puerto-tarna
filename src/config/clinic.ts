export const clinic = {
  name: "Fisioterapia Puerto Tarna",
  logo: "/images/logo.png",
  tagline: "Fisioterapia holística en Asturias que cuida cuerpo y alma",
  description: "Fisioterapia Puerto Tarna es tu centro de fisioterapia en Asturias especializado en tratamientos manuales y terapia liberadora de nudos (LNT). Cova, nuestra fisioterapeuta, combina técnicas avanzadas con un enfoque integral que aborda tanto el dolor físico como el equilibrio emocional. Con 5 estrellas en Google y 143 reseñas, nuestros pacientes destacan el ambiente sanador y los resultados desde la primera sesión.",
  colors: {
    primary: "#d6982c",
    secondary: "#402e0d",
    accent: "#d7d7df",
    neutral: "#fcf7ee"
  },
  phone: "685 16 15 00",
  whatsapp: "+34685161500",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "Lugar, C. Puerto de Tarna, 10, C, Gijon-Sur, 33207 Gijón, Asturias, España",
    city: "Asturias",
    province: "Álava",
    postalCode: "33207",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=10969315888244931572&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Fisioterapia%20Puerto%20Tarna%20%4043.532%2C-5.67412&z=16&output=embed",
  coordinates: {
    lat: 43.532,
    lng: -5.67412
  },
  schedule: [
    {
      days: "Lunes - Viernes",
      hours: "09:00 - 20:00"
    },
    {
      days: "Sábado",
      hours: "Consultar"
    },
    {
      days: "Domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 143,
    url: "https://maps.google.com/?cid=10969315888244931572&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Virginia Pérez",
        rating: 5,
        text: "Cinco estrellas no son nada para dar valor a lo que hace Cova.\n\nEntrar en su consulta ya es sanador. Notas como el cuerpo se afloja, la energía se recoloca, la mente respira y el alma encuentra un lugar donde descansar.\nEs un espacio seguro en todas las capas: física, emocional y mental.\n\nCova tiene esa mezcla única de conocimiento, intuición y humanidad que te hace salir siempre mejor de lo que entraste.\nEn dos sesiones me recuperé de mi lesión y, además, salí con una sensación de equilibrio que iba más allá de lo físico.\n\nSolo puedo hablar de gratitud y admiración hacia una profesional tan honesta, efectiva y profundamente humana.",
        date: "Hace 2 meses"
      },
      {
        author: "Maria Victoria Lopez Fernandez",
        rating: 5,
        text: "No puedo estar más agradecida a Cova por el trato recibido, tanto a nivel físico como mental.\nNada más entrar en la clínica hay un ambiente que te transmite relajación y sensación de bienestar.\nEs una persona que sabe escuchar y entender al paciente, dando los consejos necesarios para mejorar en todos los aspectos.\nTe das cuenta, ya en la primera consulta, que conoce todas las partes del cuerpo a la perfección, trabajando con sus manos, que irradian un fuente potente de calor y localizando aquellas zonas donde se produce el dolor.\nAsí que, sólo puedo decir, gracias Cova por toda esa energía positiva que posees y transmites.",
        date: "Hace 9 meses"
      },
      {
        author: "maria morato",
        rating: 5,
        text: "Estoy encantada, por fin una profesional que me ayuda a mejorar mis dolencias.\nMi problema de migraña, cervicales, pie, me los está solucionando de maravilla.\nMuy amable, agradable ambiente de total relajación lo que contribuye a salir de allí totalmente nueva y con la sensación de que te han solucionado la dolencia con la que entré.",
        date: "Hace 8 meses"
      },
      {
        author: "María C",
        rating: 5,
        text: "Una experiencia increíble.\nCovadonga crea un ambiente único, en el que es capaz de aliviar el cuerpo y el alma. He notado una mejoría enorme desde que me puse en sus manos.\nGracias por ofrecer un espacio donde poder conectar con uno mismo y detenerse un instante en un mundo que va tan deprisa.\nEres mágica ✨️",
        date: "Hace 2 meses"
      },
      {
        author: "Marina",
        rating: 5,
        text: "Hice varias sesiones de LNT con Cova, y me fueron súper bien. Desde la primera sesión ya sentí mejorías, más relajada y mejor físicamente. Además el trato es increíble, Cova te hace sentir muy cómoda y sus palabras son pura sabiduría, un lugar sagrado🥰",
        date: "Hace 5 meses"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas donde las manos de Cova irradian calor terapéutico para localizar y tratar las zonas de dolor. Un tratamiento que combina conocimiento anatómico profundo con intuición profesional para aliviar tensiones y mejorar la movilidad. Cada sesión está personalizada según las necesidades específicas de tu cuerpo.",
      benefits: [
        "Alivio del dolor desde la primera sesión",
        "Mejora de la movilidad articular y muscular",
        "Tratamiento personalizado de cada zona afectada"
      ],
      icon: "Hand"
    },
    {
      id: "lnt-terapia",
      name: "LNT - Liberación de Nudos y Tensiones",
      description: "Terapia especializada de Liberación de Nudos y Tensiones que trabaja las capas profundas del tejido. Esta técnica permite liberar bloqueos físicos y emocionales, proporcionando una sensación de relajación profunda y bienestar integral. Ideal para personas que buscan un tratamiento que vaya más allá del dolor físico.",
      benefits: [
        "Liberación de tensiones físicas y emocionales",
        "Sensación de relajación profunda y duradera",
        "Mejora del equilibrio energético corporal"
      ],
      icon: "Activity"
    },
    {
      id: "tratamiento-migranas",
      name: "Tratamiento de Migrañas y Cervicales",
      description: "Abordaje específico para dolores de cabeza, migrañas y problemas cervicales que afectan tu calidad de vida. Utilizamos técnicas manuales especializadas que trabajan la musculatura cervical y craneal para reducir la frecuencia e intensidad de las migrañas. Tratamiento efectivo respaldado por resultados reales de nuestros pacientes.",
      benefits: [
        "Reducción significativa de migrañas y cefaleas",
        "Alivio de tensión cervical y contracturas",
        "Mejora de la movilidad del cuello y hombros"
      ],
      icon: "Target"
    },
    {
      id: "fisioterapia-integral",
      name: "Fisioterapia Integral Cuerpo-Mente",
      description: "Enfoque holístico que entiende que el cuerpo y la mente están conectados. Tratamos no solo el síntoma físico, sino que buscamos el origen del dolor considerando aspectos emocionales y mentales. Un espacio seguro donde poder conectar contigo mismo y encontrar el equilibrio que necesitas para sanar completamente.",
      benefits: [
        "Tratamiento del origen real del dolor",
        "Equilibrio físico, emocional y mental",
        "Sensación de bienestar que va más allá de lo físico"
      ],
      icon: "Heart"
    },
    {
      id: "lesiones-deportivas",
      name: "Recuperación de Lesiones",
      description: "Tratamiento especializado para lesiones agudas y crónicas con resultados visibles desde las primeras sesiones. Ya sea una lesión deportiva o una dolencia persistente, diseñamos un plan de recuperación adaptado a tus necesidades. Nuestros pacientes destacan recuperarse completamente en pocas sesiones.",
      benefits: [
        "Recuperación efectiva en pocas sesiones",
        "Tratamiento personalizado según tu lesión",
        "Seguimiento continuo hasta la recuperación total"
      ],
      icon: "Dumbbell"
    },
    {
      id: "dolor-cronico",
      name: "Tratamiento del Dolor Crónico",
      description: "Abordaje especializado para dolores persistentes que afectan tu día a día. Trabajamos con técnicas manuales avanzadas para tratar problemas de espalda, articulaciones, pies y otras zonas de dolor crónico. El ambiente de relajación de la consulta potencia los efectos del tratamiento físico.",
      benefits: [
        "Solución efectiva para dolores persistentes",
        "Mejora notable desde la primera consulta",
        "Tratamiento de múltiples zonas afectadas"
      ],
      icon: "Zap"
    },
    {
      id: "terapia-relajacion",
      name: "Terapia de Relajación Profunda",
      description: "Sesiones diseñadas para personas que necesitan detenerse en un mundo que va demasiado deprisa. El ambiente único de nuestra consulta ya es sanador por sí mismo: notas cómo el cuerpo se afloja, la energía se recoloca y la mente respira. Un lugar sagrado donde encontrar paz y reconexión.",
      benefits: [
        "Ambiente sanador que transmite bienestar inmediato",
        "Reducción del estrés y la ansiedad",
        "Espacio para conectar contigo mismo"
      ],
      icon: "Heart"
    },
    {
      id: "tratamiento-pie",
      name: "Fisioterapia Podológica",
      description: "Tratamiento especializado para problemas y dolencias del pie que afectan tu movilidad y calidad de vida. Abordamos fascitis plantar, esguinces, problemas de pisada y otras patologías del pie con técnicas manuales efectivas. Recupera la funcionalidad completa de tus pies.",
      benefits: [
        "Solución efectiva para dolencias del pie",
        "Mejora de la pisada y la movilidad",
        "Tratamiento manual sin necesidad de plantillas"
      ],
      icon: "Activity"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llámanos al 685 16 15 00 o escríbenos por WhatsApp para solicitar tu primera cita. Te atenderemos personalmente y encontraremos el mejor horario para ti."
    },
    {
      step: 2,
      title: "Primera Consulta Personalizada",
      description: "Cova te escuchará con atención para entender tu dolencia y conocer todas las partes de tu cuerpo que necesitan tratamiento. Desde el primer momento notarás el ambiente de relajación y bienestar de la consulta."
    },
    {
      step: 3,
      title: "Tratamiento Manual Especializado",
      description: "Aplicamos las técnicas manuales más adecuadas para tu caso concreto, trabajando tanto el aspecto físico como el equilibrio emocional. Sentirás mejorías desde la primera sesión gracias al tratamiento personalizado."
    },
    {
      step: 4,
      title: "Recuperación y Seguimiento",
      description: "Te acompañamos en todo el proceso hasta tu completa recuperación, ofreciéndote consejos y pautas para mejorar en todos los aspectos. Saldrás de cada sesión sintiéndote mejor física y emocionalmente."
    }
  ],
  whyUs: [
    {
      title: "5 Estrellas en Google con 143 Reseñas",
      description: "Nuestros pacientes avalan nuestro trabajo con valoraciones perfectas. Destacan los resultados desde la primera sesión, el trato cercano y profesional, y el ambiente único que hace de cada visita una experiencia sanadora. La confianza de quienes ya han pasado por nuestra consulta es nuestra mejor carta de presentación.",
      icon: "Heart"
    },
    {
      title: "Enfoque Holístico Cuerpo-Mente-Alma",
      description: "No tratamos solo síntomas, buscamos el origen real del dolor considerando las dimensiones física, emocional y mental. Cova combina su profundo conocimiento anatómico con la intuición y humanidad necesarias para crear un espacio seguro donde tu cuerpo encuentra lo que necesita para sanar completamente.",
      icon: "Target"
    },
    {
      title: "Resultados Visibles desde la Primera Sesión",
      description: "Nuestros pacientes destacan sentir mejorías notables ya en la primera consulta. Muchas lesiones se resuelven en 2-3 sesiones gracias a técnicas manuales especializadas y un tratamiento verdaderamente personalizado. No aplicamos protocolos genéricos: cada sesión está diseñada específicamente para lo que tu cuerpo necesita.",
      icon: "Zap"
    },
    {
      title: "Un Espacio Único que Ya es Sanador",
      description: "El ambiente de Fisioterapia Puerto Tarna transmite relajación y bienestar desde el momento en que entras. Un lugar sagrado donde poder detenerte, conectar contigo mismo y permitir que tu cuerpo se afloje, tu mente respire y tu alma encuentre un espacio donde descansar. La sanación comienza en el ambiente que hemos creado para ti.",
      icon: "Heart"
    }
  ],
  team: [
    {
      name: "Covadonga (Cova)",
      role: "Fisioterapeuta y Directora",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Fisioterapia Puerto Tarna nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "Fisioterapia Puerto Tarna - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Fisioterapia Puerto Tarna - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Fisioterapia Puerto Tarna - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Fisioterapia Puerto Tarna - Imagen 4"
    },
    {
      src: "/images/hero.webp",
      alt: "Fisioterapia Puerto Tarna - Imagen 5"
    }
  ],
  faq: [
    {
      question: "¿Qué hace diferente a Fisioterapia Puerto Tarna?",
      answer: "En Fisioterapia Puerto Tarna ofrecemos un enfoque holístico que va más allá del tratamiento físico. Cova combina su profundo conocimiento anatómico con técnicas que abordan también el equilibrio emocional y mental. Nuestros pacientes destacan el ambiente sanador de la consulta y cómo desde el primer momento sienten que están en un espacio seguro donde cuerpo, mente y alma encuentran su lugar para sanar. Con 5 estrellas en Google y 143 reseñas, nuestros resultados hablan por sí solos."
    },
    {
      question: "¿En cuántas sesiones notaré mejoría?",
      answer: "La mayoría de nuestros pacientes notan mejorías significativas desde la primera sesión. Muchos casos de lesiones se resuelven completamente en 2-3 sesiones, como destacan nuestras reseñas. Sin embargo, cada persona y cada dolencia es diferente, por lo que en la primera consulta evaluaremos tu caso específico y te daremos una estimación realista del tratamiento necesario."
    },
    {
      question: "¿Qué es la terapia LNT que ofrecéis?",
      answer: "LNT (Liberación de Nudos y Tensiones) es una terapia especializada que trabaja las capas profundas del tejido para liberar bloqueos físicos y emocionales. Esta técnica permite una relajación profunda y duradera, mejorando tanto el dolor físico como el equilibrio energético. Nuestros pacientes que han probado LNT destacan sentirse más relajados y mejor físicamente desde la primera sesión."
    },
    {
      question: "¿Tratáis migrañas y dolores de cabeza crónicos?",
      answer: "Sí, el tratamiento de migrañas, cefaleas y problemas cervicales es una de nuestras especialidades. Utilizamos técnicas manuales específicas que trabajan la musculatura cervical y craneal para reducir tanto la frecuencia como la intensidad de las migrañas. Muchos de nuestros pacientes con migrañas crónicas han experimentado mejorías notables y duraderas con nuestro tratamiento."
    },
    {
      question: "¿Cómo es el ambiente de la consulta?",
      answer: "Nuestros pacientes coinciden en que el ambiente de Fisioterapia Puerto Tarna es único y sanador. Desde que entras en la consulta notas una sensación de relajación y bienestar que potencia los efectos del tratamiento. Hemos creado un espacio seguro donde poder desconectar del ritmo acelerado del día a día, reconectar contigo mismo y permitir que tu cuerpo y mente se abran a la sanación."
    },
    {
      question: "¿Necesito que me derive el médico?",
      answer: "No es necesario tener una derivación médica para acudir a Fisioterapia Puerto Tarna. Puedes solicitar cita directamente llamando al 685 16 15 00 o por WhatsApp. En la primera consulta evaluaremos tu caso y diseñaremos el plan de tratamiento más adecuado para ti."
    },
    {
      question: "¿Qué tipo de lesiones tratáis?",
      answer: "Tratamos una amplia variedad de dolencias: lesiones deportivas, dolores de espalda, problemas cervicales, migrañas, dolencias del pie, dolor crónico en diferentes zonas del cuerpo, y también trabajamos aspectos emocionales que pueden estar afectando a tu bienestar físico. Si tienes dudas sobre si podemos ayudarte con tu caso concreto, no dudes en contactarnos."
    },
    {
      question: "¿Dónde estáis ubicados en Asturias?",
      answer: "Fisioterapia Puerto Tarna está ubicada en Asturias. Para conocer nuestra dirección exacta y cómo llegar, puedes llamarnos al 685 16 15 00 o buscarnos en Google Maps donde encontrarás nuestra ubicación precisa y las 143 reseñas de 5 estrellas de nuestros pacientes."
    }
  ],
  seo: {
    titleTemplate: "%s | Fisioterapia Puerto Tarna",
    defaultTitle: "Fisioterapia Puerto Tarna - Fisioterapia Holística Asturias",
    defaultDescription: "Fisioterapia holística en Asturias. Tratamiento manual, LNT, migrañas y lesiones. 5★ en Google con 143 reseñas. Resultados desde la primera sesión. ☎ 685 16 15 00",
    keywords: [
      "fisioterapia Asturias",
      "fisioterapeuta Asturias",
      "Fisioterapia Puerto Tarna",
      "fisioterapia holística Asturias",
      "tratamiento migrañas Asturias",
      "LNT terapia Asturias",
      "fisioterapia manual Asturias",
      "dolor cervical Asturias",
      "fisioterapia integral Asturias",
      "Cova fisioterapeuta",
      "lesiones deportivas Asturias",
      "dolor crónico Asturias"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Fisioterapia Puerto Tarna",
    cif: "",
    registeredAddress: "Lugar, C. Puerto de Tarna, 10, C, Gijon-Sur, 33207 Gijón, Asturias, España, Asturias, Álava"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Asturias"
  ],
  heroDescription: "En Fisioterapia Puerto Tarna encontrarás un espacio seguro donde recuperarte de lesiones, aliviar dolores crónicos y reconectar con tu bienestar integral. Cova te ofrece tratamientos personalizados que van más allá de lo físico, creando un ambiente único de relajación donde tu cuerpo y mente encuentran el equilibrio necesario para sanar.",
  specialty: "Fisioterapia Holística",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu bienestar completo?",
  ctaDescription: "Solicita tu primera consulta en Fisioterapia Puerto Tarna y descubre cómo podemos ayudarte a aliviar el dolor y recuperar tu equilibrio. Llámanos al 685 16 15 00 o escríbenos por WhatsApp.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
