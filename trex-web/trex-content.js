window.TREX_ICONS = {
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
  clapper: "M4 10h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z M4 10l-.6-3.3a1 1 0 0 1 .8-1.2l13.6-2.4a1 1 0 0 1 1.2.8L19.6 7 M8 4.8l2.2 3.6 M13 3.9l2.2 3.6",
  sparkle: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z",
  phone: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z M11 18h2",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3 12h18 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M21 21l-5-5",
  rocket: "M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z M12 15l-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2z M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0 M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5",
  mail: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z M3 7l9 6 9-6",
  link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1 M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  chart: "M3 21h18 M6 18v-6 M11 18V8 M16 18v-4 M20 18V5",
  bolt: "M13 2L4 14h7l-1 8 9-12h-7z",
  clipboard: "M9 3h6a1 1 0 0 1 1 1v1H8V4a1 1 0 0 1 1-1z M8 5H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2 M9 12h6 M9 16h4",
  send: "M22 2L11 13 M22 2l-7 20-4-9-9-4z",
  arrow: "M5 12h14 M13 6l6 6-6 6",
  check: "M5 12l5 5L20 7",
  users: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M2 21v-1a6 6 0 0 1 12 0v1 M16 3.1a4 4 0 0 1 0 7.8 M22 21v-1a6 6 0 0 0-4-5.6",
  chevron: "M6 9l6 6 6-6",
  camera: "M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 2",
  video: "M3 6h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z M16 10l6-3v10l-6-3",
  rotate: "M3 12a9 9 0 0 1 15.5-6.3L21 8 M21 3v5h-5 M21 12a9 9 0 0 1-15.5 6.3L3 16 M3 21v-5h5"
};

window.TREX_COLORS = { teal: "#2dd4bf", pink: "#d84fa6", violet: "#7c6cf0", amber: "#f5a524", indigo: "#818cf8", sky: "#38bdf8", yellow: "#eab308", orange: "#fb923c", purple: "#a78bfa", rose: "#f472b6", green: "#34d399", tangerine: "#f97316" };

(function () {
  const C = window.TREX_COLORS;
  const areas = {
    es: [
      ["target", C.teal, "Estrategia", ["Auditoría y diagnóstico inicial de marca", "Estrategia de redes sociales", "Definición de objetivos y planificación mensual", "Estrategia de contenido", "Calendario de contenidos", "Análisis de competencia y tendencias", "Optimización de perfiles", "Definición de canales según objetivo (Instagram, TikTok, LinkedIn, YouTube, Pinterest)"]],
      ["clapper", C.pink, "Creación de contenido", ["Conceptualización e ideas de contenido", "Guiones y storytelling", "Producción de contenido", "Grabación de reels/videos", "Dirección creativa", "Edición de video", "Fotografía y edición", "Fotografía de producto", "Diseño gráfico", "Carruseles, posts e historias", "Copywriting", "Adaptación de contenido a distintos formatos y plataformas"]],
      ["sparkle", C.amber, "Branding e identidad visual", ["Identidad visual para redes", "Diseño de logo y sistema de marca", "Paleta, tipografías y manual de marca", "Plantillas de diseño para la marca", "Aplicaciones gráficas: presentaciones, flyers, packaging"]],
      ["phone", C.indigo, "Social Media Management", ["Gestión integral de redes sociales", "Programación y publicación", "Community management", "Moderación de comentarios y respuesta a mensajes directos", "Seguimiento del contenido publicado", "Optimización continua según resultados"]],
      ["globe", C.sky, "Sitios web", ["Diseño y desarrollo de sitios web", "Landing pages", "Tiendas online / e-commerce", "Diseño UX/UI y arquitectura del sitio", "Copywriting web", "Dominio, hosting y puesta online", "Mantenimiento y actualizaciones", "SEO on-page y técnico", "Configuración de píxel de Meta, GA4 y Search Console", "Landing pages para campañas de pauta"]],
      ["search", C.yellow, "Presencia en Google", ["Google Business Profile: creación y optimización", "SEO local", "Gestión de reseñas y reputación online"]],
      ["rocket", C.orange, "Paid Media / Ads", ["Estrategia de pauta", "Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Creación y configuración de campañas", "Segmentación de audiencias", "Diseño de creatividades para campañas", "Optimización de campañas", "Retargeting", "Seguimiento de conversiones"]],
      ["mail", C.purple, "Email y mensajería", ["Email marketing y newsletters", "Automatizaciones y flujos", "Gestión de base de datos de contactos", "WhatsApp Business: catálogo, respuestas automáticas y embudos"]],
      ["link", C.rose, "Colaboraciones", ["Búsqueda y selección de influencers", "Contacto y gestión de colaboraciones", "Campañas de UGC"]],
      ["chart", C.green, "Analytics", ["Análisis de métricas y rendimiento", "Reportes mensuales", "Análisis de campañas", "Seguimiento de objetivos y conversiones", "Identificación de oportunidades", "Ajustes de estrategia basados en datos"]],
      ["bolt", C.tangerine, "Proyectos puntuales", ["Lanzamientos de producto o eventos", "Consultoría y asesorías", "Capacitación a equipos internos"]]
    ],
    en: [
      ["target", C.teal, "Strategy", ["Initial brand audit and diagnosis", "Social media strategy", "Goal setting and monthly planning", "Content strategy", "Content calendar", "Competitor and trend analysis", "Profile optimization", "Channel selection by goal (Instagram, TikTok, LinkedIn, YouTube, Pinterest)"]],
      ["clapper", C.pink, "Content creation", ["Content concepts and ideas", "Scripts and storytelling", "Content production", "Reels/video recording", "Creative direction", "Video editing", "Photography and editing", "Product photography", "Graphic design", "Carousels, posts and stories", "Copywriting", "Content adapted to every format and platform"]],
      ["sparkle", C.amber, "Branding & visual identity", ["Visual identity for social", "Logo design and brand system", "Palette, typography and brand guidelines", "Brand design templates", "Graphic applications: decks, flyers, packaging"]],
      ["phone", C.indigo, "Social Media Management", ["End-to-end social media management", "Scheduling and publishing", "Community management", "Comment moderation and DM replies", "Tracking of published content", "Ongoing optimization based on results"]],
      ["globe", C.sky, "Websites", ["Website design and development", "Landing pages", "Online stores / e-commerce", "UX/UI design and site architecture", "Web copywriting", "Domain, hosting and launch", "Maintenance and updates", "On-page and technical SEO", "Meta pixel, GA4 and Search Console setup", "Landing pages for ad campaigns"]],
      ["search", C.yellow, "Google presence", ["Google Business Profile: setup and optimization", "Local SEO", "Review and online reputation management"]],
      ["rocket", C.orange, "Paid Media / Ads", ["Media strategy", "Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Campaign creation and setup", "Audience targeting", "Ad creative design", "Campaign optimization", "Retargeting", "Conversion tracking"]],
      ["mail", C.purple, "Email & messaging", ["Email marketing and newsletters", "Automations and flows", "Contact database management", "WhatsApp Business: catalog, auto-replies and funnels"]],
      ["link", C.rose, "Collaborations", ["Influencer search and selection", "Outreach and collaboration management", "UGC campaigns"]],
      ["chart", C.green, "Analytics", ["Metrics and performance analysis", "Monthly reports", "Campaign analysis", "Goal and conversion tracking", "Opportunity spotting", "Data-driven strategy adjustments"]],
      ["bolt", C.tangerine, "One-off projects", ["Product launches or events", "Consulting and advisory", "Internal team training"]]
    ]
  };
  const mkAreas = (lang, word) => areas[lang].map(([icon, color, t, items]) => ({ icon, color, t, items, count: items.length + " " + word }));

  const chip = (icon, color, label) => ({ icon, color, label });
  window.TREX_I18N = {
    es: {
      intro: { enter: "ENTRAR", loading: "CARGANDO" },
      nav: { services: "Servicios", work: "Nuestro Trabajo", pricing: "Precios", contact: "Contacto", cta: "Llamada Estratégica Gratis", lang: "EN", flag: "🇺🇸" },
      hero: { badge: "CONTENT • SOCIAL MEDIA • PAID ADS", l1: "FROM", l2: "PROJECTS", l3: "TO DIGITAL", l4: "PRESENCE.", p: "Ayudamos a empresas de construcción, diseño y servicios para el hogar a convertir su trabajo en contenido que los hace visibles y les trae nuevas oportunidades.", strong: "Vamos a tus proyectos. Creamos el contenido. Gestionamos tus redes. Manejamos los anuncios.", b1: "Ver servicios", b2: "Ver nuestro trabajo" },
      marquee: ["CONTENT", "SOCIAL MEDIA", "PAID ADS", "BRANDING", "WEB", "ANALYTICS"],
      stats: [{ n: 360, suf: "°", label: "Visión integral de tu marca" }, { n: 2, suf: "×", label: "Experiencias unidas en un equipo" }, { n: 0, suf: "∞", label: "Posibilidades para tu negocio" }],
      video: { l1: "TU PROYECTO SE", l2: "CONVIERTE EN EL", l3: "CONTENIDO." },
      steps: [
        { icon: "camera", color: C.teal, n: "01", t: "Vamos a ti.", d: "Visitamos tu proyecto y capturamos el trabajo en tiempo real." },
        { icon: "sparkle", color: C.pink, n: "02", t: "Creamos.", d: "Convertimos tus proyectos, equipo y experiencia en contenido profesional." },
        { icon: "phone", color: C.teal, n: "03", t: "Publicamos.", d: "Gestionamos tu presencia digital para que tu negocio se mantenga activo y profesional online." },
        { icon: "rocket", color: C.pink, n: "04", t: "Promocionamos.", d: "Usamos publicidad segmentada para poner tu negocio frente a clientes potenciales." }
      ],
      work: { l1: "QUE NUESTRO TRABAJO HABLE POR", l2: "NOSOTROS.", sub: "Mirá cómo convertimos proyectos reales en contenido que la gente quiere ver.", before: "ANTES DE TREX", beforeSub: "Videos de celular · Posts genéricos", after: "CON TREX", afterSub: "Filmación cinematográfica · Storytelling de marca", client: "TERRA-BRITE · GENERAL CONTRACTOR, MIAMI", btn: "VER MÁS DE NUESTRO TRABAJO", dropBefore: "Video/foto de celular", dropAfter: "Video final con Trex" },
      process: [
        { n: "01", t: "FILMAMOS TUS PROYECTOS", d: "Contenido en obra, avances, antes y después, material del equipo y trabajos terminados." },
        { n: "02", t: "CREAMOS TU CONTENIDO", d: "Videos cortos profesionales, fotos, gráficas y contenido para redes sociales." },
        { n: "03", t: "GESTIONAMOS TUS REDES", d: "Estrategia, publicación y gestión continua en todas tus plataformas." },
        { n: "04", t: "MANEJAMOS TUS ADS", d: "Campañas segmentadas en Meta diseñadas para poner tu negocio frente a clientes potenciales en tu área." }
      ],
      cta: { l1: "¿LISTO PARA CONVERTIR TUS", l2: "PROYECTOS EN CONTENIDO", l3: "QUE HACE CRECER TU NEGOCIO?", p: "Reserva una llamada estratégica gratis de 30 minutos y hablemos de lo que TREX puede hacer por tu negocio.", btn: "RESERVA TU LLAMADA GRATIS", note: "CON BASE EN EL SUR DE FLORIDA.", drag: "Arrastra para girar", pixelHint: "Pasa el cursor o haz clic" },
      footer: "© 2026 Trex Marketing — Publicidad + Social Media que trabaja junto.",
      services: {
        eyebrow: "SERVICIOS", l1: "TODO LO QUE TU NEGOCIO", l2: "NECESITA PARA ESTAR", l3: "PRESENTE ONLINE.",
        cards: [
          { icon: "clapper", color: C.teal, t: "Creación de contenido", d: "Filmación en obra · Videos cortos · Antes y después · Showcase de proyectos · Fotografía · Drone" },
          { icon: "phone", color: C.pink, t: "Gestión de redes sociales", d: "Estrategia de contenido · Publicación · Gestión de perfiles · Community management" },
          { icon: "rocket", color: C.violet, t: "Publicidad paga", d: "Meta Ads · Segmentación local · Campañas de generación de leads · Gestión de campañas" },
          { icon: "search", color: C.amber, t: "Presencia digital", d: "Google Business · Reseñas · YouTube Shorts · Consistencia de marca" }
        ],
        whatT: "¿Qué hacemos?", whatSub: "Haz clic en cada área para ver el detalle.",
        areas: mkAreas("es", "servicios incluidos"),
        btn: "VER PAQUETES Y PRECIOS",
        packT: "Paquetes listos para empezar", packSub: "Combinaciones pensadas para cada etapa. Sin costos ocultos, sin sorpresas.",
        popular: "MÁS POPULAR", ideal: "Ideal para:", consult: "Consultar precio",
        packs: [
          { eyebrow: "PARA QUIEN ESTÁ EMPEZANDO", name: "Presencia", featured: false, chips: [chip("target", C.teal, "Estrategia"), chip("phone", C.indigo, "Social Media"), chip("search", C.yellow, "Google")], items: ["Auditoría y diagnóstico inicial de marca", "Estrategia de redes sociales", "Calendario de contenidos", "Optimización de perfiles", "Gestión de 2 redes sociales", "Programación y publicación", "Google Business Profile", "Reporte mensual"], ideal: "Emprendimientos y negocios que quieren comenzar con el pie derecho." },
          { eyebrow: "PARA QUIENES QUIEREN ESCALAR", name: "Crecimiento", featured: true, chips: [chip("target", C.teal, "Estrategia"), chip("clapper", C.pink, "Contenido"), chip("phone", C.indigo, "Social Media"), chip("rocket", C.orange, "Paid Media"), chip("chart", C.green, "Analytics")], items: ["Todo lo del plan Presencia", "Producción de contenido (reels, posts, historias)", "Fotografía y edición", "Diseño gráfico y copywriting", "Community management + DMs", "Meta Ads y Google Ads", "Segmentación y retargeting", "Análisis de competencia", "Reportes mensuales + reunión quincenal"], ideal: "Marcas consolidadas que necesitan amplificar su alcance y convertir." },
          { eyebrow: "TODO EL EQUIPO, TODO EL TIEMPO", name: "Integral", featured: false, chips: [chip("target", C.teal, "Estrategia"), chip("clapper", C.pink, "Contenido"), chip("sparkle", C.amber, "Branding"), chip("phone", C.indigo, "Social Media"), chip("globe", C.sky, "Web"), chip("rocket", C.orange, "Paid Media"), chip("mail", C.purple, "Email"), chip("chart", C.green, "Analytics")], items: ["Todo lo del plan Crecimiento", "Branding e identidad visual completa", "Sitio web o landing page", "Email marketing y automatizaciones", "TikTok Ads y LinkedIn Ads", "Campañas multi-canal con optimización continua", "Reportes semanales + reunión semanal", "Soporte prioritario"], ideal: "Empresas que quieren una agencia dedicada sin el overhead de tenerla in-house." }
        ],
        customT: "¿Necesitás algo a medida?", customD: "Cuéntanos sobre tu negocio y armamos una propuesta específica. Sin compromiso.", customBtn: "Hablar con nosotros"
      },
      workPage: { l1: "El trabajo", l2: "habla por sí solo.", sub: "Casos reales, resultados reales. Así es como ayudamos a las marcas a crecer.", count: "proyectos", e1: "No hay proyectos en esta categoría todavía.", e2: "Agregá tu primer trabajo y va a aparecer acá automáticamente.", ctaT: "¿Tu proyecto podría ser el próximo?", ctaD: "Cuéntanos en qué estás y vemos cómo podemos ayudarte.", ctaBtn: "Hablemos" },
      pricing: { l1: "El plan correcto", l2: "para tu negocio", p: "Estamos preparando nuestra guía completa de precios. Mientras tanto, contáctanos y armamos un paquete personalizado según tus objetivos y presupuesto.", cardT: "Guía de precios próximamente", cardD: "Nuestros paquetes detallados y precios estarán disponibles aquí pronto. Cada cliente es diferente — contáctanos y te armamos la solución ideal.", btn: "Solicitar presupuesto personalizado" },
      contact: { l1: "Cuéntanos qué", l2: "necesitas.", p1: "Completa el formulario y cuéntanos un poco sobre tu marca y tus objetivos.", p2: "Te responderemos en un plazo de 24 horas para definir los próximos pasos.", name: "NOMBRE *", namePh: "Tu nombre", email: "EMAIL *", emailPh: "tu@email.com", company: "EMPRESA / PROYECTO", companyPh: "¿Cómo se llama tu marca o negocio?", area: "¿QUÉ ÁREA TE INTERESA? *", areaPh: "Seleccioná un área de servicio", msg: "MENSAJE", msgPh: "Cuéntanos un poco sobre tu negocio y lo que quieres lograr...", send: "Enviar mensaje", callT: "¿Agendamos una llamada?", callD: "Si quieres coordinar una videollamada para conocernos antes, podemos agendar una reunión corta sin costo.", replyT: "Respondemos en", replyBig: "24 hs", replyD: "En días hábiles, lunes a viernes." }
    },
    en: {
      intro: { enter: "ENTER", loading: "LOADING" },
      nav: { services: "Services", work: "Our Work", pricing: "Pricing", contact: "Contact", cta: "Free Strategy Call", lang: "ES", flag: "🇪🇸" },
      hero: { badge: "CONTENT • SOCIAL MEDIA • PAID ADS", l1: "FROM", l2: "PROJECTS", l3: "TO DIGITAL", l4: "PRESENCE.", p: "We help construction, design and home service companies turn their work into content that makes them visible and brings them new opportunities.", strong: "We come to your projects. We create the content. We manage your socials. We run the ads.", b1: "See services", b2: "See our work" },
      marquee: ["CONTENT", "SOCIAL MEDIA", "PAID ADS", "BRANDING", "WEB", "ANALYTICS"],
      stats: [{ n: 360, suf: "°", label: "A complete view of your brand" }, { n: 2, suf: "×", label: "Two skill sets, one team" }, { n: 0, suf: "∞", label: "Possibilities for your business" }],
      video: { l1: "YOUR PROJECT", l2: "BECOMES THE", l3: "CONTENT." },
      steps: [
        { icon: "camera", color: C.teal, n: "01", t: "We come to you.", d: "We visit your project and capture the work in real time." },
        { icon: "sparkle", color: C.pink, n: "02", t: "We create.", d: "We turn your projects, team and expertise into professional content." },
        { icon: "phone", color: C.teal, n: "03", t: "We publish.", d: "We manage your digital presence so your business stays active and professional online." },
        { icon: "rocket", color: C.pink, n: "04", t: "We promote.", d: "We use targeted advertising to put your business in front of potential clients." }
      ],
      work: { l1: "LET OUR WORK SPEAK FOR", l2: "ITSELF.", sub: "See how we turn real projects into content people want to watch.", before: "BEFORE TREX", beforeSub: "Phone videos · Generic posts", after: "WITH TREX", afterSub: "Cinematic filming · Brand storytelling", client: "TERRA-BRITE · GENERAL CONTRACTOR, MIAMI", btn: "SEE MORE OF OUR WORK", dropBefore: "Phone video/photo", dropAfter: "Final video with Trex" },
      process: [
        { n: "01", t: "WE FILM YOUR PROJECTS", d: "On-site content, progress updates, before and after, team footage and finished work." },
        { n: "02", t: "WE CREATE YOUR CONTENT", d: "Professional short videos, photos, graphics and social media content." },
        { n: "03", t: "WE MANAGE YOUR SOCIALS", d: "Strategy, publishing and ongoing management across all your platforms." },
        { n: "04", t: "WE RUN YOUR ADS", d: "Targeted Meta campaigns designed to put your business in front of potential clients in your area." }
      ],
      cta: { l1: "READY TO TURN YOUR", l2: "PROJECTS INTO CONTENT", l3: "THAT GROWS YOUR BUSINESS?", p: "Book a free 30-minute strategy call and let's talk about what TREX can do for your business.", btn: "BOOK YOUR FREE CALL", note: "BASED IN SOUTH FLORIDA.", drag: "Drag to rotate", pixelHint: "Hover or click" },
      footer: "© 2026 Trex Marketing — Advertising + Social Media working together.",
      services: {
        eyebrow: "SERVICES", l1: "EVERYTHING YOUR BUSINESS", l2: "NEEDS TO STAY", l3: "PRESENT ONLINE.",
        cards: [
          { icon: "clapper", color: C.teal, t: "Content creation", d: "On-site filming · Short videos · Before and after · Project showcase · Photography · Drone" },
          { icon: "phone", color: C.pink, t: "Social media management", d: "Content strategy · Publishing · Profile management · Community management" },
          { icon: "rocket", color: C.violet, t: "Paid advertising", d: "Meta Ads · Local targeting · Lead generation campaigns · Campaign management" },
          { icon: "search", color: C.amber, t: "Digital presence", d: "Google Business · Reviews · YouTube Shorts · Brand consistency" }
        ],
        whatT: "What do we do?", whatSub: "Click each area to see the details.",
        areas: mkAreas("en", "services included"),
        btn: "SEE PACKAGES AND PRICING",
        packT: "Packages ready to start", packSub: "Combinations designed for every stage. No hidden costs, no surprises.",
        popular: "MOST POPULAR", ideal: "Ideal for:", consult: "Ask for pricing",
        packs: [
          { eyebrow: "FOR THOSE JUST STARTING", name: "Presence", featured: false, chips: [chip("target", C.teal, "Strategy"), chip("phone", C.indigo, "Social Media"), chip("search", C.yellow, "Google")], items: ["Initial brand audit and diagnosis", "Social media strategy", "Content calendar", "Profile optimization", "Management of 2 social networks", "Scheduling and publishing", "Google Business Profile", "Monthly report"], ideal: "Startups and businesses that want to start on the right foot." },
          { eyebrow: "FOR THOSE READY TO SCALE", name: "Growth", featured: true, chips: [chip("target", C.teal, "Strategy"), chip("clapper", C.pink, "Content"), chip("phone", C.indigo, "Social Media"), chip("rocket", C.orange, "Paid Media"), chip("chart", C.green, "Analytics")], items: ["Everything in Presence", "Content production (reels, posts, stories)", "Photography and editing", "Graphic design and copywriting", "Community management + DMs", "Meta Ads and Google Ads", "Targeting and retargeting", "Competitor analysis", "Monthly reports + biweekly meeting"], ideal: "Established brands that need to amplify their reach and convert." },
          { eyebrow: "THE WHOLE TEAM, ALL THE TIME", name: "Full Service", featured: false, chips: [chip("target", C.teal, "Strategy"), chip("clapper", C.pink, "Content"), chip("sparkle", C.amber, "Branding"), chip("phone", C.indigo, "Social Media"), chip("globe", C.sky, "Web"), chip("rocket", C.orange, "Paid Media"), chip("mail", C.purple, "Email"), chip("chart", C.green, "Analytics")], items: ["Everything in Growth", "Complete branding and visual identity", "Website or landing page", "Email marketing and automations", "TikTok Ads and LinkedIn Ads", "Multi-channel campaigns with ongoing optimization", "Weekly reports + weekly meeting", "Priority support"], ideal: "Companies that want a dedicated agency without the overhead of an in-house team." }
        ],
        customT: "Need something custom?", customD: "Tell us about your business and we'll put together a specific proposal. No commitment.", customBtn: "Talk to us"
      },
      workPage: { l1: "The work", l2: "speaks for itself.", sub: "Real cases, real results. This is how we help brands grow.", count: "projects", e1: "There are no projects in this category yet.", e2: "Add your first project and it will show up here automatically.", ctaT: "Could your project be next?", ctaD: "Tell us where you are and we'll see how we can help.", ctaBtn: "Let's talk" },
      pricing: { l1: "The right plan", l2: "for your business", p: "We're preparing our complete pricing guide. In the meantime, contact us and we'll build a custom package based on your goals and budget.", cardT: "Pricing guide coming soon", cardD: "Our detailed packages and pricing will be available here soon. Every client is different — contact us and we'll build the ideal solution for you.", btn: "Request a custom quote" },
      contact: { l1: "Tell us what", l2: "you need.", p1: "Fill out the form and tell us a bit about your brand and your goals.", p2: "We'll get back to you within 24 hours to define the next steps.", name: "NAME *", namePh: "Your name", email: "EMAIL *", emailPh: "you@email.com", company: "COMPANY / PROJECT", companyPh: "What's your brand or business called?", area: "WHICH AREA INTERESTS YOU? *", areaPh: "Select a service area", msg: "MESSAGE", msgPh: "Tell us a bit about your business and what you want to achieve...", send: "Send message", callT: "Shall we schedule a call?", callD: "If you'd like a video call to meet first, we can schedule a short meeting at no cost.", replyT: "We reply within", replyBig: "24 hrs", replyD: "On business days, Monday to Friday." }
    }
  };
})();
