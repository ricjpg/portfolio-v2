import type { Social, Translations, PicProps } from "../interfaces/interface";

export const SocialList: Social[] = [
  {
    name: "instagram",
    url: "https://www.instagram.com/ric.null",
    icon: "https://s.magecdn.com/social/tc-instagram.svg",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/@rictsx",
    icon: "https://s.magecdn.com/social/tc-youtube.svg",
  },
  {
    name: "github",
    url: "https://www.github.com/ricjpg",
    icon: "https://s.magecdn.com/social/tc-github.svg",
  },
  {
    name: "linkedIn",
    url: "https://www.linkedin.com/in/ricnull",
    icon: "https://s.magecdn.com/social/tc-linkedin.svg",
  },
];

export const translations: Translations = {
  en: {
    skills: [
      {
        tittle: "Frontend Development",
        skills: [
          { name: "HTML+CSS", level: 60 },
          { name: "TypeScript", level: 60 },
          { name: "React", level: 65 },
          { name: "AstroJS", level: 65 },
        ],
      },
      {
        tittle: "Backend Development",
        skills: [
          { name: "Python+FastAPI", level: 70 },
          { name: "Java+Spring", level: 70 },
          { name: "Python+Django", level: 60 },
          { name: "PHP+Laravel", level: 70 },
        ],
      },
      {
        tittle: "Cloud",
        skills: [
          { name: "Terraform", level: 50 },
          { name: "AzureCloud", level: 50 },
          { name: "AWS", level: 50 },
          { name: "CI/CD", level: 50 },
          { name: "Cloudflare", level: 60 },
        ],
      },
      {
        tittle: "Databases",
        skills: [
          { name: "SQL Server", level: 70 },
          { name: "Oracle", level: 70 },
          { name: "MySQL", level: 70 },
          { name: "PostgreSQL", level: 70 },
          { name: "PL/SQL", level: 50 },
        ],
      },
    ],

    projects: [
      {
        slug: "/prosene",
        title: "PROSENE",
        description:
          "Inclusive platform for PROSENE-UNAH letting students with special needs submit and track requests online. Built with Vue.js, FastAPI and PostgreSQL, it replaced an in-person process full of delays and poor case traceability.",
        img: "prosene.png",
        href: "/projects/prosene",
        date: "2025-03-15T14:30:00.000Z",
        stack: ["AWS-RDS", "Postgres", "FastAPI", "VueJS", "Bootstrap"],
      },
      {
        slug: "/xatruch",
        title: "Xatruch",
        description:
          "Full system for managing flights, routes, schedules, aircraft and passengers at Xatruch airline. Built with Java, Spring, Laravel and MySQL, it replaced error-prone spreadsheets with role-based access and centralized operational records.",
        img: "plane.jpg",
        href: "/projects/xatruch",
        date: "2023-09-15T14:30:00.000Z",
        stack: ["PHP/Laravel", "MySQL", "Java", "Spring"],
      },
      {
        slug: "/classifier",
        title: "Cats and dogs classifier",
        description:
          "Web application that classifies in real time whether the camera sees a cat or a dog, using convolutional neural networks with Python and a browser interface built in HTML, CSS and JavaScript, trained on labelled image data.",
        img: "classifier.png",
        href: "/projects/classifier",
        date: "2024-03-15T14:30:00.000Z",
        stack: ["Python", "Jupyter", "IA", "HTML/CSS/JS"],
      },
      {
        slug: "/ecommerce",
        title: "E-commerce Platform and Analytics",
        description:
          "Azure cloud architecture for an e-commerce platform, provisioned with Terraform across three layers: security and identity, core application, and data and analytics, built to scale while staying available and observable.",
        img: "general-diagram.png",
        href: "/projects/ecommerce",
        date: "2025-06-28T14:30:00.000Z",
        stack: ["Terraform", "Workers", "Azure", "Cloud"],
      },
      {
        slug: "/smart-cache",
        title: "Smart cache",
        description:
          "Data pipeline and API serving over 200,000 records, migrated with Azure Data Factory and exposed with FastAPI. Uses an intelligent Redis cache invalidation strategy to improve query responsiveness and scale in Azure.",
        img: "smart-cache-low.gif",
        href: "/projects/smart-cache",
        date: "2025-07-22T14:30:00.000Z",
        stack: ["Azure", "REDIS", "Cache", "Cloud", "Data sets", "Auth"],
      },
      {
        slug: "/poke-q",
        title: "Poke Queue",
        description:
          "Asynchronous service that generates CSV reports by consuming PokeAPI and writing them to Azure Storage. Uses queues and workers to process requests in the background, with a FastAPI backend and a Next.js interface.",
        img: "poke-q.gif",
        href: "/projects/poke-q",
        date: "2025-08-07T14:30:00.000Z",
        stack: ["Python", "Azure", "Serverless", "React/radix"],
      },
      {
        slug: "/quotation",
        title: "Quotation Platform",
        description:
          "Cloud platform for creating, tracking and exporting client quotes as PDF, with secure multi-tenant workflows. Built with Cloudflare Workers, Hono, React, TypeScript and SQLite to keep each tenant's data isolated.",
        img: "quotes-3.png",
        href: "/projects/quotation",
        date: "2026-09-06T14:30:00.000Z",
        stack: [
          "Workers",
          "Cloudflare",
          "React",
          "TypeScript",
          "SQLite",
          "Drizzle",
          "Hono",
          "PDF",
        ],
      },
      {
        slug: "/homelab",
        title: "Homelab Media Server",
        description:
          "Self-hosted media server assembled from recycled hardware, running Proxmox with LXC containers and Docker to serve the full open-source media stack, replacing commercial streaming with infrastructure I control.",
        img: "homelab-1.png",
        href: "/projects/homelab",
        date: "2025-11-29T14:30:00.000Z",
        stack: [
          "Linux",
          "Docker",
          "Proxmox",
          "Self-Hosting",
          "Networking",
          "Jellyfin",
          "Homelab",
        ],
      },
    ],
    summary: {
      title: "About me",
      content:
        "I'm a software engineer who likes understanding a system end to end — from the database schema to the pixel on screen. My background spans React/TypeScript and Ruby on Rails in production, plus personal projects built with Python/FastAPI, Java/Spring Boot, PHP/Laravel, Angular, and cloud infrastructure on Cloudflare and Azure. Outside of client work, I run a small homelab just to get my hands dirty with infrastructure — Docker, reverse proxies, the whole setup. I'm currently open to full-time opportunities, ideally on a remote or nearshore team, where I can keep building software that solves real problems.",
    },
    summaryExtended: {
      title: "More about me",
      content:
        "I got into software engineering for the same reason I stayed: there's always a next problem worth solving. Most recently that meant working as a full-stack developer on LynxLabs' R&D team, and outside of that, building out a handful of personal projects across React, FastAPI, Spring Boot, and cloud platforms like AWS and Azure just to see how the pieces fit together. I'm finishing a Systems Engineering degree at UNAH and now looking for my next full-time role — ideally somewhere I can keep growing as an engineer while working on products that matter.",
    },
    hero: {
      greeting: "Hello, I'm",
      recentProjects: "Recent Projects",
      aboutme: "About me",
      techSkill: "Tech Skills",
      softSkill: "Soft Skills",
      typeEd: [
        {
          type: "University",
          title: "Education",
        },
        {
          type: "Certificate",
          title: "Certifications",
        },
        {
          type: "Work Experience",
          title: "Work Experience",
        },
      ],
      backButton: "Go back",
      downloadCV: "Download my resume",
      moreProjectsTitle: "More projects",
      moreProjectsContent:
        "Check out other projects Ive recently worked on or collaborated on.",
      viewAllProjects: "View all projects",
      contactMeTitle: "Get in touch",
      contactMeContent: `I'm currently looking for new opportunities in System Engineering, web development and Cloud architecture.`,
    },
    education: [
      {
        type: "University",
        title: "System Engineer",
        period: "2026",
        degree: "Engineer",
        institution: "National Autonomous University of Honduras",
        perks: [
          "3rd Place, Startup Challenge IS UNAH (Sept. 2025)",
          "Software engineering coursework covering software development, databases, and networking, with an added focus on IT governance",
          "Additional certifications: CCNA – Introduction to Networks (Cisco) and Oracle Next Education (Oracle/Alura)",
        ],
      },
      {
        type: "Certificate",
        title: "Introduction  to Networks",
        degree: "CCNA Certification",
        period: "2025",
        institution: "Cisco - NetAcad",
        perks: [
          "Network Fundamentals",
          "Security Fundamentals",
          "Ethernet, IP Subnetting, Switching",
        ],
        url: "https://www.credly.com/badges/5e60098e-08cb-4291-b6a4-e805498d9b16/public_url",
      },
      {
        type: "Certificate",
        title: "Oracle - Next Education",
        degree: "Certificate",
        period: "2025",
        institution: "Oracle - Alura",
        perks: [
          "Frontend development",
          "Soft skills",
          "Entrepreneurship",
          "Agility and Professional Leadership",
        ],
        url: "https://app.aluracursos.com/program/certificate/8e8f0d61-363f-4619-ad15-848c3bda3bee",
      },
    ],
    experience: [
      {
        type: "Work Experience",
        title: "Full Stack Developer",
        period: "April 2026 - August 2026",
        institution: "LynxLabs · Research and Development",
        perks: [
          "Closed test coverage gaps in a multi-tenant Rails e-commerce backend, writing the missing specs with RSpec and Factory Bot so the team could refactor with confidence.",
          "Worked as a full-stack developer in the Research and Development department, primarily migrating an enterprise multi-tenant back office with React, TypeScript and TanStack Query, Router and Table, and shipping complete production modules built on scalable state management and data validation patterns.",
          "Covered each change with unit tests and Playwright end-to-end tests, collaborating with a multidisciplinary engineering team.",
        ],
      },
      {
        type: "Work Experience",
        title: "Operations Assistant",
        period: "January 2020 - January 2023",
        institution: "PPCCVM",
        perks: [
          "Was in charge of preparing payrolls and maintaining accurate employee records for the organization.",
          "Reviewed and verified attendance records and documentation required for government part-time job compliance.",
          "Organized personnel paperwork and operational documentation, ensuring proper records and smooth administrative follow-up.",
        ],
      },
      {
        type: "Work Experience",
        title: "IT Support",
        period: "October 2017 - December 2019",
        institution: "PPCCVM",
        perks: [
          "Provided technical support to staff and departments for hardware, software, and network issues, helping keep daily operations running smoothly.",
          "Installed, configured, and maintained computers, printers, and office equipment to ensure reliable workplace productivity.",
          "Managed user access, basic troubleshooting, backups, and system maintenance tasks across the organization.",
        ],
      },
    ],
    softSkills: [
      {
        title: "Collaboration",
        description:
          "I foster teamwork through active listening, clear communication, and respect for diverse perspectives to achieve shared goals efficiently.",
      },
      {
        title: "Problem Solving",
        description:
          "I approach challenges analytically, breaking down complex problems into manageable parts and proposing practical, well-reasoned solutions.",
      },
      {
        title: "Ethics",
        description:
          "I act with integrity and responsibility, ensuring transparency, accountability, and respect for confidentiality in every task I undertake.",
      },
      {
        title: "Patient Persistence",
        description:
          "I remain consistent and focused when facing obstacles, maintaining a steady effort until objectives are achieved.",
      },
      {
        title: "Leadership",
        description:
          "I lead by example, motivating others through clarity, organization, and a results-oriented mindset while supporting team growth.",
      },
      {
        title: "Continuous Learning",
        description:
          "I keep learning beyond the classroom, turning new technologies and methodologies into working solutions through hands-on projects.",
      },
    ],
    social: [
      {
        name: "mail",
        url: "mailto:ricardoguardiolahn@gmail.com",
        icon: "https://s.magecdn.com/social/tc-mail.svg",
      },
      {
        name: "youtube",
        url: "https://www.youtube.com/@rictsx",
        icon: "https://s.magecdn.com/social/tc-youtube.svg",
      },
      {
        name: "github",
        url: "https://www.github.com/ricjpg",
        icon: "https://s.magecdn.com/social/tc-github.svg",
      },
      {
        name: "linkedIn",
        url: "https://www.linkedin.com/in/ricnull",
        icon: "https://s.magecdn.com/social/tc-linkedin.svg",
      },
    ],
    projectsPage: {
      title: "Projects",
      subtitle:
        "Search my work by keyword or narrow it down by the technologies I used.",
      searchLabel: "Search projects",
      searchPlaceholder: "Search by name, description or technology",
      filterLabel: "Filter by technology",
      clearFilters: "Clear filters",
      resultsOne: "1 project",
      resultsMany: "{count} projects",
      noResultsTitle: "No projects found",
      noResultsContent:
        "Try another keyword or remove some filters to see more work.",
      back: "Back",
    },
    projectPage: {
      backToProjects: "Back to projects",
      backToTop: "Back to top",
      onThisPage: "On this page",
    },
    contactPage: {
      title: "Tell me about your project",
      subtitle:
        "Have an idea, a problem to solve, or a team that needs a hand? Write me a few lines about what you are building and I will gladly help.",
      emailTitle: "Send me an email",
      socialTitle: "Elsewhere",
      email: "ricardoguardiolahn@gmail.com",
    },
  },
  es: {
    skills: [
      {
        tittle: "Desarrollo Frontend",
        skills: [
          { name: "HTML+CSS", level: 60 },
          { name: "TypeScript", level: 60 },
          { name: "React", level: 65 },
          { name: "AstroJS", level: 65 },
        ],
      },
      {
        tittle: "Desarrollo Backend",
        skills: [
          { name: "Python+FastAPI", level: 70 },
          { name: "Java+Spring", level: 70 },
          { name: "Python+Django", level: 60 },
          { name: "PHP+Laravel", level: 70 },
        ],
      },
      {
        tittle: "Cloud",
        skills: [
          { name: "Terraform", level: 50 },
          { name: "AzureCloud", level: 50 },
          { name: "AWS", level: 55 },
          { name: "CI/CD", level: 50 },
          { name: "Cloudflare", level: 60 },
        ],
      },
      {
        tittle: "Bases de Datos",
        skills: [
          { name: "SQL Server", level: 70 },
          { name: "Oracle", level: 70 },
          { name: "MySQL", level: 70 },
          { name: "PostgreSQL", level: 70 },
          { name: "PL/SQL", level: 50 },
        ],
      },
    ],

    projects: [
      {
        slug: "/prosene",
        title: "PROSENE",
        description:
          "Plataforma accesible para PROSENE-UNAH que permite a estudiantes con necesidades especiales enviar y rastrear solicitudes en línea. Construida con Vue.js, FastAPI y PostgreSQL, sustituyó un proceso presencial con retrasos y baja trazabilidad.",
        img: "prosene.png",
        href: "/projects/prosene",
        date: "2025-03-15T14:30:00.000Z",
        stack: ["AWS-RDS", "Postgres", "FastAPI", "VueJS", "Bootstrap"],
      },
      {
        slug: "/xatruch",
        title: "Xatruch",
        description:
          "Sistema para gestionar vuelos, rutas, horarios, aeronaves y pasajeros de la aerolínea Xatruch. Desarrollado con Java, Spring, Laravel y MySQL, sustituyó hojas de cálculo propensas a errores con acceso por roles y registros centralizados.",
        img: "plane.jpg",
        href: "/projects/xatruch",
        date: "2023-09-15T14:30:00.000Z",
        stack: ["PHP/Laravel", "MySQL", "Java", "Spring"],
      },
      {
        slug: "/classifier",
        title: "Clasificador de gatos y perros",
        description:
          "Aplicación web que clasifica en tiempo real si la cámara observa un gato o un perro, usando redes neuronales convolucionales con Python e interfaz de navegador en HTML, CSS y JavaScript, entrenada con imágenes etiquetadas.",
        img: "classifier.png",
        href: "/projects/classifier",
        date: "2024-03-15T14:30:00.000Z",
        stack: ["Python", "Jupyter", "IA", "HTML/CSS/JS"],
      },
      {
        slug: "/ecommerce",
        title: "Plataforma de E-commerce y Analítica",
        description:
          "Arquitectura en la nube para una plataforma de e-commerce, aprovisionada con Terraform en tres capas: seguridad e identidad, aplicación principal y datos y analítica, para escalar, garantizar disponibilidad y observar el sistema.",
        img: "general-diagram.png",
        href: "/projects/ecommerce",
        date: "2025-06-28T14:30:00.000Z",
        stack: ["Terraform", "Workers", "Azure", "Cloud"],
      },
      {
        slug: "/smart-cache",
        title: "Smart cache",
        description:
          "Pipeline de datos y API que sirve más de 200,000 registros, migrados con Azure Data Factory y expuestos con FastAPI. Usa una estrategia inteligente de invalidación de caché en Redis para mejorar la respuesta en Azure.",
        img: "smart-cache-low.gif",
        href: "/projects/smart-cache",
        date: "2025-07-22T14:30:00.000Z",
        stack: ["Azure", "REDIS", "Cache", "Cloud", "Data sets", "Auth"],
      },
      {
        slug: "/poke-q",
        title: "Poke Queue",
        description:
          "Servicio asíncrono que genera reportes CSV consumiendo PokeAPI y guardándolos en Azure Storage. Usa colas y workers para procesar las solicitudes en segundo plano, con backend FastAPI en Azure e interfaz Next.js.",
        img: "poke-q.gif",
        href: "/projects/poke-q",
        date: "2025-08-07T14:30:00.000Z",
        stack: ["Python", "Azure", "Serverless", "React/radix"],
      },
      {
        slug: "/quotation",
        title: "Plataforma de cotizaciones",
        description:
          "Plataforma en la nube para crear, gestionar y exportar cotizaciones en PDF, con flujos seguros multi-tenant. Construida con Cloudflare Workers, Hono, React, TypeScript y SQLite para mantener aislados los datos de cada inquilino.",
        img: "quotes-3.png",
        href: "/projects/quotation",
        date: "2026-09-06T14:30:00.000Z",
        stack: [
          "Cloudflare",
          "Workers",
          "React",
          "TypeScript",
          "SQLite",
          "Drizzle",
          "Hono",
          "PDF",
        ],
      },
      {
        slug: "/homelab",
        title: "Servidor multimedia Homelab",
        description:
          "Servidor multimedia autoalojado armado con hardware reciclado, ejecutando Proxmox con contenedores LXC y Docker para servir un stack multimedia de software libre y sustituir servicios comerciales de streaming.",
        img: "homelab-1.png",
        href: "/projects/homelab",
        date: "2025-11-29T14:30:00.000Z",
        stack: [
          "Linux",
          "Docker",
          "Proxmox",
          "Self-Hosting",
          "Networking",
          "Jellyfin",
          "Homelab",
        ],
      },
    ],
    summary: {
      title: "Acerca de mi",
      content:
        "Soy ingeniero en sistemas y me gusta entender un sistema de principio a fin — desde el esquema de la base de datos hasta el pixel en pantalla. Mi experiencia abarca React/TypeScript y Ruby on Rails en producción, además de proyectos personales construidos con Python/FastAPI, Java/Spring Boot, PHP/Laravel, Angular e infraestructura en la nube con Cloudflare y Azure. Fuera del trabajo con clientes, mantengo un pequeño homelab solo por ensuciarme las manos con infraestructura — Docker, reverse proxies, todo el setup. Actualmente estoy en búsqueda de oportunidades de tiempo completo, idealmente en un equipo remoto o nearshore, donde pueda seguir construyendo software que resuelva problemas reales.",
    },
    summaryExtended: {
      title: "Acerca de mi",
      content:
        "Entré a la ingeniería de software por la misma razón que me quedé: siempre hay un próximo problema que vale la pena resolver. Más recientemente eso significó trabajar como desarrollador Full-Stack en el equipo de I+D de LynxLabs, y fuera de eso, construir varios proyectos personales con React, FastAPI, Spring Boot y plataformas en la nube como AWS y Azure, solo por entender cómo encajan las piezas. Estoy terminando mi carrera de Ingeniería en Sistemas en la UNAH y actualmente busco mi próxima posición de tiempo completo — idealmente en un lugar donde pueda seguir creciendo como ingeniero mientras trabajo en productos que importan.",
    },
    hero: {
      greeting: "Hola, yo soy",
      recentProjects: "Proyectos Recientes",
      aboutme: "Acerca de mi",
      techSkill: "Habilidades Tecnicas",
      softSkill: "Habilidades Blandas",
      typeEd: [
        {
          type: "Educacion Superior",
          title: "Educación",
        },
        {
          type: "Certificado",
          title: "Certificaciones",
        },
        {
          type: "Experiencia Laboral",
          title: "Experiencia Laboral",
        },
      ],
      backButton: "Atras",
      downloadCV: "Descarga mi CV",
      moreProjectsTitle: "Mas proyectos",
      moreProjectsContent:
        "Mira otros proyectos en los que he trabajado o colaborado recientemente",
      viewAllProjects: "Ver todos los proyectos",
      contactMeTitle: "Ponte en contacto!",
      contactMeContent: `Actualmente estoy buscando nuevas oportunidades en Ingeniería de Sistemas, desarrollo web y Arquitectura de Nube.`,
    },
    education: [
      {
        type: "Educacion Superior",
        title: "Ingeniero en Sistemas",
        degree: "Ingenieria",
        period: "2026",
        institution: "Universidad Nacional Autónoma de Honduras",
        perks: [
          "3er lugar, Startup Challenge IS UNAH (sept. 2025)",
          "Formación en desarrollo de software, bases de datos y redes, con un componente adicional en gobierno de TI",
          "Certificaciones complementarias: CCNA – Introducción a las Redes (Cisco) y Oracle Next Education (Oracle/Alura)",
        ],
      },
      {
        type: "Certificado",
        title: "Introduccion a las Redes",
        degree: "Certificacion CCNA",
        period: "2025",
        institution: "Cisco - NetAcad",
        perks: [
          "Fundamento de redes",
          "Fundamentos de seguridad",
          "Ethernet, Subneteo, Switching",
        ],
        url: "https://www.credly.com/badges/5e60098e-08cb-4291-b6a4-e805498d9b16/public_url",
      },
      {
        type: "Certificado",
        title: "Oracle - Next Education",
        degree: "Certificacion CCNA",
        period: "2025",
        institution: "Cisco - NetAcad",
        perks: [
          "Desarrollo web",
          "Habilidades blandas",
          "Emprendimiento",
          "Agilidad y protagonismo profesional",
        ],
        url: "https://app.aluracursos.com/program/certificate/8e8f0d61-363f-4619-ad15-848c3bda3bee",
      },
    ],
    experience: [
      {
        type: "Experiencia Laboral",
        title: "Full Stack Developer",
        period: "abril 2026 - agosto 2026",
        institution: "LynxLabs · Investigación y Desarrollo",
        perks: [
          "Cubrí huecos de cobertura de pruebas en un backend multi-tenant de e-commerce en Rails, escribiendo las pruebas que faltaban con RSpec y Factory Bot para que el equipo pudiera refactorizar con confianza.",
          "Desarrollador full-stack en el departamento de Investigación y Desarrollo, migrando principalmente un backoffice empresarial multi-tenant con React, TypeScript y TanStack Query/Router/Table, e implementando módulos completos de producción con patrones escalables de manejo de estado y validación de datos.",
          "Cubrí cada cambio con pruebas unitarias y end-to-end de Playwright, en colaboración con un equipo de ingeniería multidisciplinario.",
        ],
      },
      {
        type: "Experiencia Laboral",
        title: "Operative Assistant",
        period: "enero 2020 - enero 2023",
        institution: "PPCCVM",
        perks: [
          "Estuve a cargo de la elaboración de nóminas y el mantenimiento de registros precisos del personal de la organización.",
          "Revisé y validé registros de asistencia y documentación requerida para el cumplimiento de trabajos de medio tiempo auspiciados por el programa.",
          "Organicé la documentación administrativa y del personal, asegurando registros correctos y un seguimiento operativo fluido.",
        ],
      },
      {
        type: "Experiencia Laboral",
        title: "IT Support",
        period: "octubre 2017 - diciembre 2019",
        institution: "PPCCVM",
        perks: [
          "Brindé soporte técnico a personal y departamentos para solucionar problemas de hardware, software y red, manteniendo operativa la jornada diaria.",
          "Instalé, configuré y mantuve computadoras, impresoras y equipos de oficina para asegurar una productividad confiable en el trabajo.",
          "Gestioné accesos de usuario, soporte básico, respaldos y tareas de mantenimiento para mantener los sistemas funcionando correctamente.",
        ],
      },
    ],
    softSkills: [
      {
        title: "Colaboración",
        description:
          "Fomento el trabajo en equipo mediante la escucha activa, la comunicación clara y la valoración de distintas perspectivas para alcanzar objetivos comunes de manera eficiente.",
      },
      {
        title: "Resolución de Problemas",
        description:
          "Abordo los desafíos de forma analítica, descomponiendo problemas complejos en partes manejables y proponiendo soluciones prácticas y bien fundamentadas.",
      },
      {
        title: "Ética",
        description:
          "Actúo con integridad y responsabilidad, asegurando transparencia, rendición de cuentas y respeto por la confidencialidad en cada tarea que realizo.",
      },
      {
        title: "Persistencia Paciente",
        description:
          "Mantengo constancia y enfoque ante los obstáculos, sosteniendo un esfuerzo continuo hasta alcanzar los objetivos planteados.",
      },
      {
        title: "Liderazgo",
        description:
          "Lidero con el ejemplo, motivando a otros mediante claridad, organización y orientación a resultados, mientras impulso el crecimiento del equipo.",
      },
      {
        title: "Aprendizaje Continuo",
        description:
          "Sigo aprendiendo más allá del aula, convirtiendo nuevas tecnologías y metodologías en soluciones que funcionan a través de proyectos prácticos.",
      },
    ],
    social: [
      {
        name: "mail",
        url: "mailto:ricardoguardiolahn@gmail.com",
        icon: "https://s.magecdn.com/social/tc-mail.svg",
      },
      {
        name: "youtube",
        url: "https://www.youtube.com/@rictsx",
        icon: "https://s.magecdn.com/social/tc-youtube.svg",
      },
      {
        name: "github",
        url: "https://www.github.com/ricjpg",
        icon: "https://s.magecdn.com/social/tc-github.svg",
      },
      {
        name: "linkedIn",
        url: "https://www.linkedin.com/in/ricnull",
        icon: "https://s.magecdn.com/social/tc-linkedin.svg",
      },
    ],
    projectsPage: {
      title: "Proyectos",
      subtitle:
        "Busca mi trabajo por palabra clave o filtra por las tecnologías que utilicé.",
      searchLabel: "Buscar proyectos",
      searchPlaceholder: "Busca por nombre, descripción o tecnología",
      filterLabel: "Filtrar por tecnología",
      clearFilters: "Limpiar filtros",
      resultsOne: "1 proyecto",
      resultsMany: "{count} proyectos",
      noResultsTitle: "No se encontraron proyectos",
      noResultsContent:
        "Prueba con otra palabra clave o quita algunos filtros para ver más trabajo.",
      back: "Volver",
    },
    projectPage: {
      backToProjects: "Volver a proyectos",
      backToTop: "Volver arriba",
      onThisPage: "En esta página",
    },
    contactPage: {
      title: "Cuéntame sobre tu proyecto",
      subtitle:
        "¿Tienes una idea, un problema que resolver o un equipo que necesita apoyo? Escríbeme unas líneas sobre lo que estás construyendo y con gusto te ayudo.",
      emailTitle: "Envíame un correo",
      socialTitle: "En otros sitios",
      email: "ricardoguardiolahn@gmail.com",
    },
  },
};

// Exportar datos legacy para compatibilidad hacia atrás
export const skills = translations.en.skills;
export const softSkill = translations.en.softSkills;
export const projectsList = translations.en.projects;
export const summaryContent = translations.en.summary;
// export const social = translations.en.social;

export const Pictures: PicProps[] = [
  {
    src: "/img/pp-2.png",
    alt: "Profile picture",
    width: 400,
    height: 400,
    loading: "eager",
    className: "mask-radial-at-center mask-radial-from-100%",
  },
];
