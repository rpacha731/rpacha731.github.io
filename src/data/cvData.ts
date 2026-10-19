export const personalInfo = {
  name: 'Leonel Pacha',
  fullName: 'Roberto Leonel Pacha',
  title: 'Ingeniero Informático',
  subtitle: 'Desarrollador Full-Stack',
  email: 'leonelpacha14@gmail.com',
  linkedin: 'https://linkedin.com/in/leonel-pacha/',
  github: 'https://github.com/rpacha731'
};

export const summary =
  'Ingeniero Informático y Desarrollador Full-Stack con más de 5 años de experiencia en desarrollo de aplicaciones web, multiplataforma y e-commerce. Especializado en arquitectura de software, microservicios, DevOps y código full-stack con enfoque en soluciones tecnológicas seguras, innovadoras y eficientes. Combino habilidades técnicas y creatividad para abordar desafíos con una mentalidad única y perspectiva amplia.';

export interface Experience {
  role: string;
  company: string;
  period: string;
  tasks: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Tech Lead & Full-Stack Dev',
    company: 'Awer Reviews',
    period: '03/2023 – Actualidad',
    tasks: [
      'Desarrollo y mantenimiento de la aplicación y backoffice con Java, Spring, MySQL, Node.js, React y Docker.',
      'Diseño UX/UI para funcionalidades de la plataforma en Figma.',
      'Revisiones de código, mentoría y organización de desarrolladores junior y trato con el cliente.',
      'Mantenimiento y orquestación de servidores (UAT y Producción) con VPS y Docker, migración a Google Cloud.',
    ],
  },
  {
    role: 'Full-Stack Dev',
    company: 'Assess.ai - Credicycle',
    period: '08/2025 – 03/2026',
    tasks: [
      'Desarrollo y mantenimiento de e-commerce de cursos en línea con Docker, Java, Micronaut, PostgreSQL y Angular.',
      'Diseño arquitectónico y de base de datos para funcionalidades específicas.',
      'Revisiones de código, mantenimiento de servidores y auditorías de seguridad.',
    ],
  },
  {
    role: 'Full-Stack Dev',
    company: 'High Impact',
    period: '06/2022 – Actualidad',
    tasks: [
      'Desarrollo y mantenimiento de proyectos con Docker, Java, Spring, Micronaut, Python, Node.js, GraphQL/Apollo, PostgreSQL, MySQL, Angular, Vue y React.',
      'Diseño arquitectónico y de base de datos para funcionalidades específicas.',
      'Revisiones de código, mantenimiento de servidores y auditorías de seguridad.',
    ],
  },
  {
    role: 'Full-Stack Dev',
    company: 'Wantfrom Company SAS',
    period: '09/2021 – 06/2022',
    tasks: [
      'Dirección en el desarrollo backend y diseño de arquitectura y base de datos con Java y Angular.',
      'Integraciones con pasarelas de pago y desarrollo de aplicación móvil en Kotlin.',
    ],
  },
];

export interface Education {
  title: string;
  institution: string;
  period: string;
  note?: string;
}

export const education: Education[] = [
  {
    title: 'Analista en Sistemas Informáticos',
    institution: 'Instituto Universitario Aeronáutico',
    period: '2018 – 2021',
  },
  {
    title: 'Ingeniería Informática',
    institution: 'Instituto Universitario Aeronáutico',
    period: '2018 – 2025',
    note: 'Título en trámite',
  },
];

export const certifications = [
  'Vue 3 desde Cero (Udemy)',
  'GraphQL desde bases a APIs (Udemy)',
  'Nest - Backend escalable con Node (Udemy)',
  'Universidad Angular (Udemy, en curso)',
  'Grafana Beginners to Advance (Udemy)',
  'Introducción a Vyper (Seminario IUA)',
  'Ciberdefensa (Seminario IUA)',
  'Gestión Estratégica de Tecnologías (Seminario IUA)',
];

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const technicalSkills: SkillCategory[] = [
  {
    name: 'Lenguajes',
    icon: '💻',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Kotlin', 'Go'],
  },
  {
    name: 'Frameworks & Librerías',
    icon: '⚡',
    skills: ['React', 'Angular', 'Vue.js', 'Node.js', 'Nest.js', 'Spring', 'Micronaut', 'Quasar'],
  },
  {
    name: 'Bases de Datos',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'MariaDB', 'MongoDB'],
  },
  {
    name: 'DevOps & Cloud',
    icon: '☁️',
    skills: ['Docker', 'Google Cloud', 'Heroku', 'Azure', 'AWS', 'VPS Linux/Windows'],
  },
  {
    name: 'Control de Versiones',
    icon: '🔀',
    skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
  },
  {
    name: 'API & Seguridad',
    icon: '🔒',
    skills: ['REST', 'GraphQL', 'JSON', 'SSL', 'OAuth2', 'MFA'],
  },
];

export const softSkills = [
  { name: 'Trabajo en equipo', icon: '🤝' },
  { name: 'Comunicación efectiva', icon: '💬' },
  { name: 'Liderazgo y mentoría', icon: '🎯' },
  { name: 'Resolución de problemas', icon: '🧩' },
  { name: 'Gestión del tiempo', icon: '⏰' },
];

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  responsibilities: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'Awer Reviews',
    description: 'Plataforma de reviews de usuarios a empresas de diverso rubro.',
    technologies: ['Java', 'Docker', 'Kafka', 'MySQL', 'React', 'Node.js', 'Python'],
    responsibilities: 'Coordinación de equipo, diseño y desarrollo de funcionalidades.',
    featured: true,
  },
  {
    name: 'Credicycle',
    description: 'Plataforma e-commerce de cursos online.',
    technologies: ['Angular', 'Java', 'Micronaut', 'Docker', 'PostgreSQL'],
    responsibilities: 'Diseño y desarrollo de funcionalidades, mantenimiento y migración.',
    featured: true,
  },
  {
    name: 'Pixel Health',
    description: 'Plataforma de ayuda para estudiantes y profesores sobre salud digital.',
    technologies: ['Node.js', 'React', 'MySQL'],
    responsibilities: 'Coordinación de equipo, diseño y refactorización de encuestas y estadísticas.',
  },
  {
    name: 'Revendo',
    description: 'Tienda ecommerce de ventas por catálogo.',
    technologies: ['PostgreSQL', 'GraphQL', 'Vue.js', 'Docker'],
    responsibilities: 'Despliegue, diseño y arquitectura de datos y desarrollo de la plataforma.',
  },
  {
    name: 'UX Dual',
    description: 'Billetera virtual multiplataforma.',
    technologies: ['Java', 'PostgreSQL', 'Vue.js', 'Quasar', 'Capacitor'],
    responsibilities: 'Desarrollo de app multiplataforma con plugins nativos (cámara, biometría) y backend.',
  },
  {
    name: 'Telepase',
    description: 'Plataforma backoffice de peajes del país.',
    technologies: ['React', 'Node.js'],
    responsibilities: 'Desarrollo de planificador mensual de empleados.',
  },
  {
    name: 'Flashicar',
    description: 'Plataforma de reventa de automóviles.',
    technologies: ['Python'],
    responsibilities: 'Integración con banco Santander para simulación de propuestas crediticias.',
  },
  {
    name: 'e/vents',
    description: 'Plataforma de ventas de tickets online.',
    technologies: ['Java', 'MySQL', 'Angular', 'Kotlin'],
    responsibilities: 'Coordinación de equipo backend, diseño y desarrollo full-stack, app Android.',
    featured: true,
  },
];

export const personalProjects = [
  {
    name: 'TICKIFY',
    description: 'Plataforma de venta de tickets online.',
  },
  {
    name: 'AI – Sentiments',
    description: 'Inteligencia Artificial para analizar emociones y sentimientos en reviews.',
  },
];

export const languages = [
  { name: 'Español', level: 'Nativo', percentage: 100 },
  { name: 'Inglés', level: 'A2', percentage: 30 },
];
