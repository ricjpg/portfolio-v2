import type {
  SkillSetProps,
  Social,
  ProjectProps,
  SummaryProps,
  Translations,
  PicProps,
} from "../interfaces/interface";

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
          { name: "JavaScript", level: 60 },
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
        tittle: "DevOps and cloud",
        skills: [
          { name: "Terraform", level: 50 },
          { name: "AzureCloud", level: 50 },
          { name: "AWS", level: 50 },
          { name: "CI/CD", level: 50 },
          { name: "Cloudflare tunnels and pages", level: 60 },
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
      {
        tittle: "Other technologies",
        skills: [
          { name: "Jira", level: 70 },
          { name: "Mermaid Diagram", level: 70 },
          { name: "Notion", level: 70 },
          { name: "Figma", level: 70 },
        ],
      },
    ],

    projects: [
      {
        slug: "/prosene",
        title: "PROSENE",
        description:
          "Accessible platform developed for PROSENE-UNAH, enabling students with special needs to submit and track requests online. Built with Vue.js, FastAPI and PostgreSQL, improving communication and management between students and special care program staff.",
        img: "prosene.png",
        href: "/projects/prosene",
        date: "2025-03-15T14:30:00.000Z",
        stack: ["AWS-RDS", "Postgres", "FastAPI", "VueJS", "Bootstrap"],
      },
      {
        slug: "/xatruch",
        title: "Xatruch",
        description:
          "Comprehensive system for managing flights, routes, schedules and passengers for Xatruch airline. Developed with Java, Spring, Laravel and MySQL, allowing registration of domestic and international flights, aircraft control and role-based access, optimizing operational and administrative processes.",
        img: "plane.jpg",
        href: "/projects/xatruch",
        date: "2023-09-15T14:30:00.000Z",
        stack: ["PHP/Laravel", "MySQL", "Java", "Spring"],
      },
      {
        slug: "/classifier",
        title: "Cats and dogs classifier",
        description:
          "Web application that uses neural networks and convolutional networks to classify whether what is seen by the camera is a cat or a dog. Developed in Python and web tools like HTML, CSS and JS",
        img: "classifier.png",
        href: "/projects/classifier",
        date: "2024-03-15T14:30:00.000Z",
        stack: ["Python", "Jupyter", "IA", "HTML/CSS/JS"],
      },
      {
        slug: "/ecommerce",
        title: "E-commerce Platform and Analytics",
        description:
          "Infrastructure for an e-commerce platform managed with Terraform",
        img: "general-diagram.png",
        href: "/projects/ecommerce",
        date: "2025-06-28T14:30:00.000Z",
        stack: ["Terraform", "Workers", "Azure", "Cloud"],
      },
      {
        slug: "/smart-cache",
        title: "Smart cache",
        description:
          "Creation of a data pipeline and API with intelligent cache, developed in Python, deployed in Azure",
        img: "smart-cache-low.gif",
        href: "/projects/smart-cache",
        date: "2025-07-22T14:30:00.000Z",
        stack: ["Azure", "REDIS", "Cache", "Cloud", "Data sets", "Auth"],
      },
      {
        slug: "/poke-q",
        title: "Poke Queue",
        description:
          "Asynchronous generation of CSV reports through consumption of PokeAPI, using Storage Account",
        img: "poke-q.gif",
        href: "/projects/poke-q",
        date: "2025-08-07T14:30:00.000Z",
        stack: ["Python", "Azure", "Serverless", "React/radix"],
      },
    ],
    summary: {
      title: "Professional Summary",
      content:
        "Results-driven Systems Engineering student with a strong foundation in web and mobile application development. Proficient in frontend and backend technologies including React, FastAPI, Spring Boot, and various SQL databases. Adept at quickly learning new technologies and adapting to dynamic project requirements. Ability to manage multiple projects effectively while maintaining high standards of quality. Committed to continuous improvement and passionate about leveraging technology to solve real-world problems.",
    },
    hero: {
      greeting: "Hello, I'm",
      recentProjects: "Recent Projects",
      aboutme: "About me",
      techSkill: "Tech Skills",
      softSkill: "Soft Skills",
    },
    education: [
      {
        title: "System Engineer",
        period: "2026",
        degree: "Engineer",
        institution: "National Autonomous University of Honduras",
        perks: [
          "Full-stack developer",
          "Specialized in backend development",
          "Committed to continuous improvement",
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
    ],
  },
  es: {
    skills: [
      {
        tittle: "Desarrollo Frontend",
        skills: [
          { name: "HTML+CSS", level: 60 },
          { name: "JavaScript", level: 60 },
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
        tittle: "DevOps",
        skills: [
          { name: "Terraform", level: 50 },
          { name: "AzureCloud", level: 50 },
          { name: "AWS", level: 55 },
          { name: "CI/CD", level: 50 },
          { name: "Cloudflare tunnels and pages", level: 60 },
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
      {
        tittle: "Otras tecnologías",
        skills: [
          { name: "Jira", level: 70 },
          { name: "Mermaid Diagram", level: 70 },
          { name: "Notion", level: 70 },
          { name: "Figma", level: 70 },
        ],
      },
    ],

    projects: [
      {
        slug: "/prosene",
        title: "PROSENE",
        description:
          "Plataforma accesible desarrollada para PROSENE-UNAH, que permite a estudiantes con necesidades especiales enviar y rastrear solicitudes en línea. Desarrollada con Vue.js, FastAPI y PostgreSQL, mejora la comunicación y gestión entre estudiantes y el personal del programa de atención especial.",
        img: "prosene.png",
        href: "/projects/prosene",
        date: "2025-03-15T14:30:00.000Z",
        stack: ["AWS-RDS", "Postgres", "FastAPI", "VueJS", "Bootstrap"],
      },
      {
        slug: "/xatruch",
        title: "Xatruch",
        description:
          "Sistema integral para la gestión de vuelos, rutas, horarios y pasajeros de la aerolínea Xatruch. Desarrollado con Java, Spring, Laravel y MySQL, permite registrar vuelos nacionales e internacionales, controlar aeronaves y ofrecer acceso por roles, optimizando procesos operativos y administrativos.",
        img: "plane.jpg",
        href: "/projects/xatruch",
        date: "2023-09-15T14:30:00.000Z",
        stack: ["PHP/Laravel", "MySQL", "Java", "Spring"],
      },
      {
        slug: "/classifier",
        title: "Clasificador de gatos y perros",
        description:
          "Aplicación web que usa redes neuronales y redes convolucionales para clasificar si lo visto por la cámara es un gato o un perro. Desarrollado en Python y herramientas web como HTML, CSS y JS",
        img: "classifier.png",
        href: "/projects/classifier",
        date: "2024-03-15T14:30:00.000Z",
        stack: ["Python", "Jupyter", "IA", "HTML/CSS/JS"],
      },
      {
        slug: "/ecommerce",
        title: "Plataforma de E-commerce y Analítica",
        description:
          "Infraestructura para una plataforma de e-commerce manejada con Terraform",
        img: "general-diagram.png",
        href: "/projects/ecommerce",
        date: "2025-06-28T14:30:00.000Z",
        stack: ["Terraform", "Workers", "Azure", "Cloud"],
      },
      {
        slug: "/smart-cache",
        title: "Smart cache",
        description:
          "Creación de un Pipeline de datos y API con cache inteligente, desarrollado en Python, desplegado en Azure",
        img: "smart-cache-low.gif",
        href: "/projects/smart-cache",
        date: "2025-07-22T14:30:00.000Z",
        stack: ["Azure", "REDIS", "Cache", "Cloud", "Data sets", "Auth"],
      },
      {
        slug: "/poke-q",
        title: "Poke Queue",
        description:
          "Generación asincrónica de reportes CSV mediante el consumo de PokeAPI, utilizando Storage Account",
        img: "poke-q.gif",
        href: "/projects/poke-q",
        date: "2025-08-07T14:30:00.000Z",
        stack: ["Python", "Azure", "Serverless", "React/radix"],
      },
    ],
    summary: {
      title: "Resumen Profesional",
      content:
        "Estudiante de Ingeniería en Sistemas orientado a resultados con una sólida base en desarrollo de aplicaciones web y móviles. Competente en tecnologías frontend y backend incluyendo React, FastAPI, Spring Boot, y varias bases de datos SQL. Hábil para aprender rápidamente nuevas tecnologías y adaptarse a requisitos dinámicos de proyectos. Capacidad para gestionar múltiples proyectos efectivamente manteniendo altos estándares de calidad. Comprometido con la mejora continua y apasionado por aprovechar la tecnología para resolver problemas del mundo real.",
    },
    hero: {
      greeting: "Hola, yo soy",
      recentProjects: "Proyectos Recientes",
      aboutme: "Acerca de mi",
      techSkill: "Habilidades Tecnicas",
      softSkill: "Habilidades Blandas",
    },
    education: [
      {
        title: "Ingeniero en Sistemas",
        degree: "Ingenieria",
        period: "2026",
        institution: "Universidad Nacional Autónoma de Honduras",
        perks: [
          "Desarrollador Full-Stack",
          "Orientado al desarrollo backend",
          "Comprometido a la mejora continua",
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
    ],
  },
};

// Exportar datos legacy para compatibilidad hacia atrás
export const skills = translations.en.skills;
export const softSkill = translations.en.softSkills;
export const projectsList = translations.en.projects;
export const summaryContent = translations.en.summary;

export const Pictures: PicProps[] = [
  {
    src: "/img/pp.jpeg",
    alt: "Profile picture",
    width: 400,
    height: 400,
    loading: "eager",
    className: "mask-radial-at-center mask-radial-from-100%",
  },
];
