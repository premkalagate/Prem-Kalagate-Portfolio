import { ProjectItem, SkillItem, EducationItem, ServiceItem, SocialLink } from '@/types';

export const personalInfo = {
  name: 'Prem Kalagate',
  role: 'Full-Stack Developer & Software Engineer',
  roles: [
    'Full-Stack Web Developer',
    'Mobile App Developer (Flutter)',
    'AI Systems & Integration Developer',
    'Next.js & React Specialist',
    'Software Engineer'
  ],
  bio: "Hi! I'm Prem Kalagate, a passionate Full-Stack, Mobile App, and AI Systems Developer. I build high-performance web applications, cross-platform mobile apps with Flutter & Firebase, and intelligent AI-powered solutions.",
  aboutDetailed: [
    "I am a Full-Stack Web, Mobile App, and AI Systems Developer with a passion for engineering high-impact digital products. My core stack includes Next.js, React, Node.js, Express, and MongoDB for scalable web applications.",
    "In mobile development, I build fast cross-platform iOS and Android applications using Flutter, Dart, and Firebase. I also specialize in developing custom AI systems—integrating LLMs, AI agents, and intelligent automation workflows directly into web and mobile products.",
    "With a strong foundation in computer science and modern software architecture, I focus on writing clean, maintainable code and delivering end-to-end digital solutions that turn complex ideas into production-ready software."
  ],
  email: 'premkalagate52@gmail.com',
  phone: '+91 8779326086',
  location: 'Mumbai',
  availability: 'Available for freelance & full-time roles',
  stats: [
    { value: '3+', label: 'Freelance Projects Delivered' },
    { value: '2+', label: 'Years Building Websites' },
  ],
  resumeUrl: '/Prem_Kalagate_CV.pdf',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://www.github.com/premkalagate',
    icon: 'Github',
    handle: '@premkalagate',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/premkalagate',
    icon: 'Linkedin',
    handle: 'in/premkalagate',
  },
  {
    name: 'X',
    url: 'https://www.x.com/premkalagate',
    icon: 'Twitter',
    handle: '@premkalagate',
  },
];

export const educationList: EducationItem[] = [
  {
    period: '2023 — 2026',
    degree: 'BSc Computer Science',
    institution: 'C.H.M College',
    description: 'Core Skills: Data Structures & Algorithms, Database Management Systems (DBMS), Software Engineering, Object-Oriented Programming (OOP), and Full-Stack Web Application Development.',
    badge: 'Current / Ongoing',
  },
];

export const skillsData: SkillItem[] = [
  // Mobile Development
  { name: 'Flutter', category: 'mobile', level: 88, iconName: 'Smartphone', highlight: true },
  { name: 'Dart', category: 'mobile', level: 86, iconName: 'Code', highlight: true },
  { name: 'Firebase', category: 'mobile', level: 85, iconName: 'Flame', highlight: true },

  // Frontend
  { name: 'React.js', category: 'frontend', level: 92, iconName: 'Atom', highlight: true },
  { name: 'Next.js', category: 'frontend', level: 88, iconName: 'Globe', highlight: true },
  { name: 'TypeScript', category: 'frontend', level: 85, iconName: 'FileCode2', highlight: true },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 95, iconName: 'Code', highlight: true },
  { name: 'Tailwind CSS', category: 'frontend', level: 94, iconName: 'Palette', highlight: true },
  { name: 'HTML5 & CSS3', category: 'frontend', level: 98, iconName: 'Layout' },
  { name: 'Framer Motion', category: 'frontend', level: 85, iconName: 'Sparkles' },

  // Backend
  { name: 'Node.js', category: 'backend', level: 88, iconName: 'Server', highlight: true },
  { name: 'Express.js', category: 'backend', level: 86, iconName: 'Zap', highlight: true },
  { name: 'MongoDB', category: 'backend', level: 84, iconName: 'Database', highlight: true },
  { name: 'REST APIs', category: 'backend', level: 90, iconName: 'Network' },
  { name: 'Mongoose', category: 'backend', level: 85, iconName: 'Layers' },

  // Programming Languages
  { name: 'Dart', category: 'languages', level: 86, iconName: 'Code' },
  { name: 'JavaScript', category: 'languages', level: 95, iconName: 'Code' },
  { name: 'TypeScript', category: 'languages', level: 85, iconName: 'FileCode2' },
  { name: 'Python', category: 'languages', level: 80, iconName: 'Terminal' },
  { name: 'C++', category: 'languages', level: 78, iconName: 'Cpu' },
  { name: 'Java', category: 'languages', level: 75, iconName: 'Coffee' },

  // Tools & DevOps
  { name: 'Git & GitHub', category: 'tools', level: 90, iconName: 'GitBranch', highlight: true },
  { name: 'Postman', category: 'tools', level: 88, iconName: 'Send' },
  { name: 'Vercel & Netlify', category: 'tools', level: 86, iconName: 'Cloud' },
  { name: 'Figma & UI Design', category: 'tools', level: 82, iconName: 'Figma' },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'mealhop',
    title: 'MealHop',
    subtitle: 'Full-Featured Online Food Delivery Platform',
    description: 'An interactive modern food ordering platform featuring real-time menu filtering, interactive cart management, dynamic checkout, and a seamless mobile-first experience.',
    longDescription: 'MealHop is a full-featured web application designed to offer a fluid food ordering experience. Features include categorized dish browsing, fast search, real-time total calculations, persistent cart state, responsive layouts, and modern glassmorphism aesthetics.',
    tags: ['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'UI/UX'],
    category: 'Full Stack',
    image: '/images/mealhop.png',
    liveUrl: 'https://www.mealhop.in',
    githubUrl: 'https://www.github.com/premkalagate',
    featured: true,
    highlights: [
      'Interactive cart with state persistence',
      'Dynamic menu filtering and fast search',
      'High-conversion mobile responsive design',
      'Optimized performance and snappy animations'
    ],
  },
  {
    id: 'skillup',
    title: 'SkillUp LMS',
    subtitle: 'Comprehensive Learning Management System',
    description: 'A complete educational platform designed for students and educators, offering interactive course management, student progress tracking, and structured modules.',
    longDescription: 'SkillUp is a modern LMS tailored for collaborative learning. Built with a powerful backend architecture and an intuitive dashboard that empowers users to explore lessons, submit assignments, and track academic milestones in real-time.',
    tags: ['Next.js', 'React', 'MongoDB', 'Express', 'Node.js'],
    category: 'Full Stack',
    image: '/images/skillup.png',
    liveUrl: 'https://www.github.com/premkalagate/SkillUp-LMS',
    githubUrl: 'https://www.github.com/premkalagate/SkillUp-LMS',
    featured: true,
    highlights: [
      'Modular course creation & video playback',
      'Student progress dashboard & quiz system',
      'Role-based access control (Admin, Student)',
      'RESTful backend architecture'
    ],
  },
  {
    id: 'pdfin',
    title: 'PDFin Online Tools',
    subtitle: 'Fast, Client-Side & Cloud PDF Utility Suite',
    description: 'An all-in-one web utility providing lightning-fast PDF manipulation tools including compression, merging, conversion, page splitting, and watermarking right in the browser.',
    longDescription: 'PDFin eliminates bloated software by providing an instant, secure, and privacy-conscious web suite for handling document transformations with zero waiting time and modern drag-and-drop ergonomics.',
    tags: ['JavaScript', 'HTML5/Canvas', 'Web APIs', 'Tailwind CSS'],
    category: 'Tools',
    image: '/images/pdfin.png',
    liveUrl: 'https://www.pdfin.online',
    githubUrl: 'https://github.com/premkalagate/pdfin',
    featured: true,
    highlights: [
      'Zero-installation client-side processing',
      'High-speed PDF merger & compression algorithms',
      'Privacy-first architecture (no file storage)',
      'Fluid drag-and-drop user interface'
    ],
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Full-Stack Web Development',
    tagline: 'Modern, high-performance web applications',
    description: 'Engineering responsive, lightning-fast web applications using Next.js, React, Node.js, and MongoDB with modern architectural patterns.',
    icon: 'CodeXml',
    features: [
      'Custom React / Next.js Web Apps',
      'Robust REST APIs & Database Design',
      'SEO & Performance Optimization',
      'Scalable & Maintainable Clean Code',
    ],
    gradient: 'from-purple-500/20 via-indigo-500/20 to-transparent',
  },
  {
    id: 'app-dev',
    title: 'Mobile App Development',
    tagline: 'Cross-platform iOS & Android mobile apps',
    description: 'Building high-performance cross-platform mobile applications using Flutter, Dart, and Firebase with clean UI and real-time backend integration.',
    icon: 'Smartphone',
    features: [
      'Cross-Platform iOS & Android Apps',
      'Flutter & Dart App Architecture',
      'Firebase Auth & Realtime Database',
      'Smooth UI Animations & API Integration',
    ],
    gradient: 'from-blue-500/20 via-indigo-500/20 to-transparent',
  },
  {
    id: 'ai-systems',
    title: 'AI Systems & Integration',
    tagline: 'Intelligent AI models & smart automation',
    description: 'Developing and integrating custom AI systems, LLM powered features, intelligent automation workflows, and machine learning solutions into web and mobile products.',
    icon: 'Bot',
    features: [
      'LLM & OpenAI API Integrations',
      'AI Agents & Automation Workflows',
      'Smart Data Processing & NLP Solutions',
      'Custom AI Model & API Connectivity',
    ],
    gradient: 'from-cyan-500/20 via-blue-500/20 to-transparent',
  },
];
