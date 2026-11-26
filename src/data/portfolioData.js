export const personalInfo = {
  name: "Carlos Noa",
  title: "Soluciones Tecnológicas Profesionales",
  tagline: "Soluciones digitales end-to-end: desarrollo web, redes, cloud, soporte TI y analítica de datos.",
  summary: "Servicios tecnológicos integrales para empresas y organizaciones: desarrollo de software, infraestructura de redes, soporte técnico, cloud computing, analítica y ciberseguridad.",
  location: "Orellana, Ecuador",
  address: "Orellana, Ecuador · Atención local y remota",
  email: "carlos.noa2001@gmail.com",
  phone: "0993480021",
  whatsappNumber: "593993480021",
  whatsappDisplay: "+593 993 480 021",
  whatsappDefaultMessage: "Hola, vi su sitio web y me gustaría cotizar un servicio de tecnología.",
  github: "https://github.com/Ca31Noah",
  githubUser: "Ca31Noah",
  linkedin: "https://linkedin.com/in/carlos-noa-87398a27b",
  linkedinUser: "carlos-noa-87398a27b",
  brandHandle: "Soluciones IT"
};

export const getWhatsAppUrl = (customMessage) => {
  const cleanNumber = personalInfo.whatsappNumber.replace(/[^0-9]/g, '');
  const msg = customMessage || personalInfo.whatsappDefaultMessage;
  const encodedMsg = encodeURIComponent(msg);
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
};

export const services = [
  {
    id: "web-development",
    title: "Desarrollo Web & Software a Medida",
    badge: "Soluciones Full Stack",
    shortDesc: "Aplicaciones web modernas, responsivas y de alto rendimiento desarrolladas con React, JavaScript y arquitecturas backend robustas.",
    description: "Diseño y desarrollo de sitios y plataformas web interactivas orientadas a la conversión y experiencia de usuario. Implementación con React, Vite, Tailwind CSS, integración de APIs REST en Python/PHP/Node.js y bases de datos seguras.",
    icon: "Code2",
    accentColor: "sky", // sky, indigo, emerald, amber, purple, rose
    deliverables: [
      "Single Page Applications (SPAs) interactivas con React",
      "Sitios corporativos y portales de servicios optimizados para SEO y móviles",
      "Integración de pasarelas de pago, formularios y APIs externas",
      "Plugins web dinámicos y extensiones a medida (ej. plataformas educativas)",
      "Código limpio, modular y mantenible con buenas prácticas de arquitectura"
    ],
    technologies: ["React", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "Python", "PHP", "APIs REST"],
    calculatorKey: "web"
  },
  {
    id: "networks-fiber",
    title: "Infraestructura de Redes & Fibra Óptica",
    badge: "Conectividad Empresarial",
    shortDesc: "Diseño, diagnóstico, soporte y mantenimiento preventivo/correctivo para redes de fibra óptica, Internet y conectividad LAN/Wi-Fi.",
    description: "Servicios especializados respaldados por experiencia técnica directa en empresas de telecomunicaciones (Cocateve S.A). Solución de caídas de enlace, optimización del ancho de banda y estructuración de redes confiables.",
    icon: "Network",
    accentColor: "indigo",
    deliverables: [
      "Mantenimiento preventivo y correctivo de enlaces de fibra óptica e Internet",
      "Configuración y diagnóstico de routers, switches y access points",
      "Resolución ágil de incidencias de conectividad y latencia",
      "Diseño de topologías de red para oficinas, comercios e instituciones",
      "Supervisión y control de estabilidad de red para continuidad de operaciones"
    ],
    technologies: ["Fibra Óptica", "Redes LAN/WLAN", "Cisco Routing & Switching", "TCP/IP", "Diagnóstico de Enlaces"],
    calculatorKey: "networks"
  },
  {
    id: "it-support-databases",
    title: "Soporte Técnico Especializado & Bases de Datos",
    badge: "Continuidad Operativa",
    shortDesc: "Mantenimiento preventivo de hardware y software, optimización de servidores y administración segura de bases de datos.",
    description: "Garantía de rendimiento y disponibilidad de la infraestructura tecnológica de tu empresa (experiencia en Crackmasternet y Servytec). Respaldo, depuración y afinamiento de bases de datos relacionales y no relacionales.",
    icon: "Wrench",
    accentColor: "emerald",
    deliverables: [
      "Mantenimiento preventivo y correctivo de estaciones de trabajo y servidores",
      "Administración, indexación y optimización de bases de datos (SQL, PostgreSQL, MySQL)",
      "Políticas de respaldo (backups) automáticos y planes de contingencia",
      "Migración y limpieza de datos estructurados",
      "Atención rápida de incidencias técnicas críticas para evitar paradas operativas"
    ],
    technologies: ["Bases de Datos SQL", "MySQL / PostgreSQL", "Hardware Diagnostic", "Windows/Linux Server", "Mantenimiento TI"],
    calculatorKey: "support"
  },
  {
    id: "cloud-microservices",
    title: "Cloud Computing & Microservicios",
    badge: "Escalabilidad en la Nube",
    shortDesc: "Arquitecturas distribuidas, despliegue de microservicios contenerizados y servicios en la nube de alta disponibilidad.",
    description: "Modernización de sistemas tradicionales hacia entornos cloud escalables. Implementación de microservicios independientes, desacoplados y fáciles de mantener para negocios en crecimiento.",
    icon: "Cloud",
    accentColor: "sky",
    deliverables: [
      "Contenedorización de aplicaciones y servicios con Docker",
      "Arquitectura de microservicios con APIs bien documentadas",
      "Despliegue y configuración en la nube (AWS / Google Cloud)",
      "Automatización de procesos y entornos de desarrollo/producción",
      "Optimización de consumo de recursos y reducción de costos en la nube"
    ],
    technologies: ["Cloud Computing", "Microservicios", "Docker", "Google Cloud / AWS", "Arquitectura Limpia"],
    calculatorKey: "cloud"
  },
  {
    id: "power-bi-analytics",
    title: "Business Intelligence & Analítica con Power BI",
    badge: "Decisiones con Datos",
    shortDesc: "Modelado de datos y diseño de dashboards ejecutivos interactivos para visualizar KPIs y tomar decisiones estratégicas.",
    description: "Transformación de datos dispersos en hojas de cálculo o bases de datos en cuadros de mando visuales, claros y accionables para directores de área, gerentes y dueños de negocio.",
    icon: "BarChart3",
    accentColor: "amber",
    deliverables: [
      "Modelado de datos relacionales y medidas analíticas DAX",
      "Dashboards interactivos en Power BI con filtros dinámicos",
      "Automatización de reportes periódicos de ventas, inventarios o rendimiento",
      "Integración de orígenes de datos heterogéneos (Excel, SQL, APIs)",
      "Capacitación a usuarios clave en la interpretación de los tableros"
    ],
    technologies: ["Power BI", "DAX", "Modelado de Datos", "Python Data Analysis", "Excel Avanzado"],
    calculatorKey: "analytics"
  },
  {
    id: "cybersecurity-consulting",
    title: "Ciberseguridad & Auditoría de Sistemas",
    badge: "Seguridad y Prevención",
    shortDesc: "Análisis del comportamiento de amenazas, simulación de riesgos (botnets) y auditoría preventiva de seguridad informática.",
    description: "Evaluación de riesgos y robustecimiento de sistemas informáticos para salvaguardar la integridad y confidencialidad de la información frente a ciberataques comunes.",
    icon: "ShieldCheck",
    accentColor: "purple",
    deliverables: [
      "Evaluación básica de vulnerabilidades en infraestructura y aplicaciones web",
      "Simulación y estudio de tráfico anómalo y comportamiento de bots",
      "Definición de políticas de acceso, contraseñas y permisos de usuarios",
      "Buenas prácticas de desarrollo seguro para evitar inyecciones e intrusiones",
      "Asesoría técnica para cumplimiento y protección de activos digitales"
    ],
    technologies: ["Ciberseguridad", "Simulación Botnet", "Python Security", "Análisis Forense", "Hardening"],
    calculatorKey: "security"
  }
];

export const projects = [
  {
    id: "moodle-plugin",
    title: "Plugin Web Moodle con Detección Facial & Deep Learning",
    category: "Desarrollo Web & IA",
    filterKey: "web",
    shortDesc: "Plugin para Moodle que integra modelos de Deep Learning para detección de rostros y control dinámico de interfaz en exámenes virtuales.",
    fullDesc: "Desarrollo de un plugin innovador enfocado en la supervisión de evaluaciones virtuales. Integra librerías de visión por computador y Deep Learning mediante JavaScript en el navegador para detectar el rostro del evaluado en tiempo real, adaptando la interfaz dinámicamente y alertando sobre anomalías sin saturar el servidor de Moodle.",
    image: null,
    badge: "Deep Learning & JS",
    tags: ["JavaScript", "Deep Learning", "Moodle API", "Computer Vision", "UI Dinámica"],
    challenge: "Ejecutar la inferencia facial de manera fluida directamente en el navegador del estudiante sin requerir hardware de alta gama ni sobrecargar la infraestructura institucional.",
    solution: "Optimización de modelos ligeros en JavaScript con Canvas HTML5 y consumo asíncrono con la API de Moodle.",
    impact: "Mayor integridad académica en evaluaciones remotas y experiencia de usuario transparente.",
    githubUrl: "https://github.com/Ca31Noah",
    liveUrl: null,
    highlight: true
  },
  {
    id: "waste-management",
    title: "Sistema de Gestión y Optimización de Rutas de Residuos",
    category: "Sistemas Web & Datos",
    filterKey: "web",
    shortDesc: "Plataforma diseñada para optimizar y gestionar las rutas de recolección de residuos sólidos en la provincia de Orellana.",
    fullDesc: "Solución de ingeniería orientada al sector público y ambiental de la provincia de Orellana. El sistema permite planificar, mapear y optimizar los trayectos de los camiones recolectores de basura, reduciendo tiempos de recorrido, consumo de combustible y asegurando una cobertura total en los sectores críticos.",
    image: null,
    badge: "Impacto Local Orellana",
    tags: ["JavaScript", "Algoritmos de Enrutamiento", "Mapas & GIS", "Gestión de Datos", "Frontend Interactivo"],
    challenge: "Modelar la red vial y los puntos de recolección urbanos de Orellana para encontrar las rutas más eficientes ante restricciones de tiempo y capacidad.",
    solution: "Algoritmos heurísticos de optimización de rutas integrados en una interfaz web intuitiva para los despachadores y supervisores de ruta.",
    impact: "Reducción significativa de tiempos de desplazamiento y mejor asignación de recursos logísticos en la provincia.",
    githubUrl: "https://github.com/Ca31Noah",
    liveUrl: null,
    highlight: true
  },
  {
    id: "botnet-simulation",
    title: "Simulación y Análisis de Redes Botnet",
    category: "Ciberseguridad & Python",
    filterKey: "security",
    shortDesc: "Proyecto de ciberseguridad enfocado en la simulación y análisis del comportamiento distribuido de redes de bots.",
    fullDesc: "Investigación aplicada y desarrollo de un entorno controlado para simular el comportamiento, propagación y patrones de comando y control (C2) de una red botnet. Desarrollado en Python, analiza paquetes de red y telemetría para evaluar mecanismos eficaces de detección y mitigación.",
    image: null,
    badge: "Investigación en Ciberseguridad",
    tags: ["Python", "Ciberseguridad", "Sockets & Networking", "Análisis de Tráfico", "Simulación C2"],
    challenge: "Emular la arquitectura distribuida y el tráfico anómalo sin poner en riesgo la red anfitriona.",
    solution: "Aislamiento de nodos y telemetría centralizada con scripts en Python para capturar y correlacionar eventos en tiempo real.",
    impact: "Comprensión profunda de vectores de ataque distribuidos y desarrollo de firmas heurísticas de protección.",
    githubUrl: "https://github.com/Ca31Noah",
    liveUrl: null,
    highlight: true
  },
  {
    id: "ecommerce-kotlin",
    title: "App Móvil E-Commerce Nativa en Android",
    category: "Desarrollo Móvil",
    filterKey: "mobile",
    shortDesc: "Aplicación móvil de comercio electrónico desarrollada de forma nativa para Android utilizando Kotlin.",
    fullDesc: "Aplicación nativa con interfaz moderna, arquitectura limpia (MVVM) y consumo de servicios REST. Incluye catálogo interactivo con filtros, carrito de compras persistente, flujo de pedidos y sincronización de inventarios.",
    image: null,
    badge: "Android Nativo",
    tags: ["Kotlin", "Android SDK", "Arquitectura MVVM", "Corrutinas", "REST API", "Material Design"],
    challenge: "Lograr un rendimiento fluido en dispositivos de gama media y baja manteniendo una experiencia de compra rápida y navegación reactiva.",
    solution: "Uso de RecyclerView eficiente, carga asíncrona de imágenes y almacenamiento en caché local.",
    impact: "Prototipo funcional listo para despliegue en tiendas de comercio electrónico locales.",
    githubUrl: "https://github.com/Ca31Noah",
    liveUrl: null,
    highlight: false
  }
];

export const experience = [
  {
    id: "cocateve",
    company: "Televisión por Cable 'COCATAVE S.A'",
    role: "Pasante de Ingeniería en Redes & Telecomunicaciones",
    period: "2024 - 2025",
    location: "Orellana, Ecuador",
    type: "Pasantía Profesional",
    summary: "Colaboró activamente en el soporte, desarrollo y mantenimiento preventivo de la infraestructura de redes de fibra óptica e Internet, mejorando la estabilidad de la conectividad en la zona.",
    achievements: [
      "Mantenimiento preventivo y correctivo sobre redes de fibra óptica e infraestructura de telecomunicaciones.",
      "Diagnóstico y resolución rápida de problemas de conectividad para clientes residenciales y comerciales.",
      "Asistencia técnica directa en enlaces troncales, contribuyendo a la estabilidad del servicio de Internet y televisión por cable.",
      "Documentación de incidencias y mejores prácticas de soporte de campo."
    ],
    technologies: ["Fibra Óptica", "Redes HFC / FTTH", "Routers & Switches", "Resolución de Conectividad", "Soporte de Campo"]
  },
  {
    id: "crackmasternet",
    company: "Crackmasternet",
    role: "Especialista en Soporte Técnico Avanzado & Bases de Datos",
    period: "2022 - 2025",
    location: "Ecuador",
    type: "Experiencia Profesional",
    summary: "Gestión de bases de datos y provisión de soporte técnico especializado para optimizar el rendimiento y confiabilidad de sistemas informáticos empresariales.",
    achievements: [
      "Administración y mantenimiento de bases de datos, garantizando integridad y velocidad de consulta.",
      "Soporte técnico avanzado a estaciones de trabajo y servidores, resolviendo incidencias complejas de hardware y software.",
      "Implementación de protocolos preventivos que redujeron las paradas operativas no programadas.",
      "Asesoramiento y soporte personalizado a usuarios y clientes para optimizar sus herramientas de trabajo."
    ],
    technologies: ["Gestión de Bases de Datos", "Soporte Nivel 2", "Optimización de Sistemas", "Windows / Linux", "Diagnóstico Técnico"]
  },
  {
    id: "tienda-genesis",
    company: "Comercial Tienda Genesis Nº2",
    role: "Gestión de Inventarios & Optimización de Procesos",
    period: "2022",
    location: "Ecuador",
    type: "Experiencia Laboral",
    summary: "Administración de inventarios físicos y optimización de los procesos de atención y registro sistemático de ventas.",
    achievements: [
      "Control y conciliación periódica de existencias de inventario físico.",
      "Optimización del flujo de registro de transacciones comerciales, reduciendo tiempos de atención al cliente.",
      "Manejo de herramientas informáticas para cuadre de caja y control de suministros."
    ],
    technologies: ["Control de Inventarios", "Sistemas de Facturación / Registro", "Optimización de Flujos", "Atención al Cliente"]
  },
  {
    id: "servytec",
    company: "Servytec",
    role: "Técnico en Mantenimiento de Hardware y Software",
    period: "2019",
    location: "Ecuador",
    type: "Experiencia Laboral",
    summary: "Mantenimiento preventivo y correctivo integral en equipos de computación y sistemas informáticos.",
    achievements: [
      "Ensamblaje, reparación y mantenimiento físico y lógico de computadoras de escritorio y portátiles.",
      "Instalación de sistemas operativos, controladores y suites de software empresarial.",
      "Diagnóstico inicial de fallas en placas, fuentes de alimentación y almacenamiento."
    ],
    technologies: ["Mantenimiento Preventivo/Correctivo", "Hardware de Computación", "Instalación de Sistemas", "Diagnóstico Técnico"]
  }
];

export const education = [
  {
    id: "espoch",
    title: "Ingeniería en Tecnologías de la Información",
    institution: "Escuela Superior Politécnica de Chimborazo (ESPOCH) - Sede Orellana",
    period: "2020 - 2026",
    badge: "Grado de Ingeniería",
    description: "Formación integral en desarrollo de software, redes de datos, sistemas distribuidos, bases de datos relacionales y no relacionales, seguridad de la información y gestión de proyectos tecnológicos."
  }
];

export const certifications = [
  {
    id: "unir-python",
    title: "Programación Python",
    institution: "UNIR (Universidad Internacional de La Rioja)",
    year: "2025",
    badge: "Programación Avanzada",
    icon: "FileCode"
  },
  {
    id: "orellana-tech",
    title: "Orellana Tech Talks",
    institution: "ESPOCH",
    year: "2024",
    badge: "Conferencia Tecnológica",
    icon: "Presentation"
  },
  {
    id: "cisco-js",
    title: "JavaScript Essentials",
    institution: "Academia Cisco (Networking Academy)",
    year: "2023",
    badge: "Certificación Oficial",
    icon: "BadgeCheck"
  },
  {
    id: "cisco-connected",
    title: "Get Connected",
    institution: "Academia Cisco (Networking Academy)",
    year: "2023",
    badge: "Certificación Oficial",
    icon: "Network"
  },
  {
    id: "espoch-marketing",
    title: "Marketing Digital y Redes Sociales",
    institution: "ESPOCH",
    year: "2023",
    badge: "Estrategia Digital",
    icon: "Share2"
  },
  {
    id: "google-progressio",
    title: "Progressio - Inspiring Study Conference With Google",
    institution: "Google",
    year: "2019",
    badge: "Conferencia Internacional",
    icon: "Award"
  }
];

export const skillsGrouped = {
  "Desarrollo & Web": [
    { name: "React.js", level: "Avanzado", highlight: true },
    { name: "JavaScript (ES6+)", level: "Avanzado", highlight: true },
    { name: "Tailwind CSS & Vite", level: "Avanzado", highlight: true },
    { name: "Python", level: "Intermedio / Avanzado", highlight: true },
    { name: "PHP", level: "Intermedio", highlight: false },
    { name: "Kotlin (Android)", level: "Intermedio", highlight: false },
    { name: "HTML5 & CSS3 Semántico", level: "Avanzado", highlight: false }
  ],
  "Redes & Telecomunicaciones": [
    { name: "Redes de Fibra Óptica (FTTH/HFC)", level: "Avanzado en Campo", highlight: true },
    { name: "Cisco Routing & Switching", level: "Intermedio / Avanzado", highlight: true },
    { name: "Topologías LAN & Wi-Fi Empresarial", level: "Avanzado", highlight: true },
    { name: "Diagnóstico de Enlaces & Latencia", level: "Avanzado", highlight: false },
    { name: "Protocolos TCP/IP, DNS, DHCP", level: "Avanzado", highlight: false }
  ],
  "Cloud, Datos & Arquitectura": [
    { name: "Microservicios & APIs REST", level: "Avanzado", highlight: true },
    { name: "Cloud Computing (AWS / GCP)", level: "Intermedio", highlight: true },
    { name: "Bases de Datos Relacionales (MySQL/PostgreSQL)", level: "Avanzado", highlight: true },
    { name: "Power BI & Analítica de Datos", level: "Intermedio / Avanzado", highlight: true },
    { name: "Docker & Contenedores", level: "Intermedio", highlight: false },
    { name: "Clean Architecture", level: "Buenas Prácticas", highlight: false }
  ],
  "Soporte & Ciberseguridad": [
    { name: "Soporte Técnico Especializado Nivel 1/2", level: "Avanzado", highlight: true },
    { name: "Mantenimiento Preventivo/Correctivo", level: "Avanzado", highlight: true },
    { name: "Simulación y Análisis de Botnets", level: "Seguridad Aplicada", highlight: true },
    { name: "Seguridad de Endpoints y Servidores", level: "Intermedio", highlight: false },
    { name: "Git & Control de Versiones", level: "Avanzado", highlight: false }
  ]
};

// Datos para el Cotizador Interactivo de Servicios
//
// Modelo: dos ejes independientes.
//   1. Servicio  -> horas base y tarifa hora del rubro
//   2. Perfil    -> cuánto trabajo adicional (hoursMultiplier) y cuánto puede/paga
//                   ese segmento por hora (rateMultiplier)
// Ver src/lib/pricing.js. Los precios y plazos se derivan de las HORAS.
//
// hourlyRate: USD/hora del mercado freelance Ecuador/Latam (ver nota de calibración).
// baseHours:  horas de esfuerzo del perfil "Comercio local"; los demás perfiles escalan.
export const calculatorOptions = {
  services: [
    {
      id: "web",
      name: "Desarrollo Web & Plataformas",
      hourlyRate: 30,
      baseHours: 40,
      icon: "Code2",
      description: "Sitios web interactivos, portales corporativos o aplicaciones web SPA con React."
    },
    {
      id: "networks",
      name: "Redes, Fibra Óptica & Conectividad",
      hourlyRate: 25,
      baseHours: 30,
      icon: "Network",
      description: "Diseño, diagnóstico, estructuración y soporte de redes LAN/Wi-Fi y fibra óptica."
    },
    {
      id: "support",
      name: "Soporte Técnico & Optimización de BD",
      hourlyRate: 25,
      baseHours: 32,
      icon: "Wrench",
      description: "Mantenimiento preventivo, afinamiento de bases de datos y soporte continuo."
    },
    {
      id: "cloud",
      name: "Cloud Computing & Microservicios",
      hourlyRate: 35,
      baseHours: 48,
      icon: "Cloud",
      description: "Arquitecturas escalables, APIs distribuidas y despliegue en la nube."
    },
    {
      id: "analytics",
      name: "Dashboard Power BI & Analítica",
      hourlyRate: 30,
      baseHours: 40,
      icon: "BarChart3",
      description: "Tableros de control ejecutivos y análisis de datos para toma de decisiones."
    },
    {
      id: "security",
      name: "Ciberseguridad & Auditoría de Sistemas",
      hourlyRate: 40,
      baseHours: 34,
      icon: "ShieldCheck",
      description: "Evaluación de vulnerabilidades y buenas prácticas de protección digital."
    }
  ],
  scopes: [
    {
      id: "small",
      name: "Comercio local / Emprendimiento",
      hoursMultiplier: 1.0,
      rateMultiplier: 0.7,
      calendarFactor: 1.15,
      desc: "Negocio de barrio, ferretería, restaurante o consultorio. Presupuesto acotado, decisiones rápidas."
    },
    {
      id: "medium",
      name: "Pyme establecida",
      hoursMultiplier: 1.8,
      rateMultiplier: 1.0,
      calendarFactor: 1.3,
      desc: "Clínica, colegio privado, distribuidora u hotel. Varias áreas involucradas y aprobaciones formales."
    },
    {
      id: "corporate",
      name: "Corporativo / Institucional",
      hoursMultiplier: 3.0,
      rateMultiplier: 1.4,
      calendarFactor: 1.45,
      desc: "Petrolera, GAD, cooperativa o banca. Compras, revisión legal, requisitos de seguridad y reportes."
    }
  ],
  addons: [
    {
      id: "cloudDeploy",
      name: "Despliegue y configuración en la nube / dominio",
      hours: 8
    },
    {
      id: "prioritySupport",
      name: "Soporte técnico prioritario (30 días post-entrega)",
      percentOfBase: 0.1
    },
    {
      id: "documentation",
      name: "Manual técnico y documentación de arquitectura",
      hours: 6
    },
    {
      id: "training",
      name: "Capacitación interactiva al equipo de trabajo",
      hours: 4
    }
  ]
};
