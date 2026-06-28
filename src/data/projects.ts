export interface ProjectType {
  image: string;
  url: string;
  alt: string;
  'project-description': string;
  frameworks: string[];
  'github-url': string;
  'project-title': string;
  company: string;
  role: string;
  year: string;
  type: string;
}

export const projects: Array<ProjectType> = [
  {
    image: './assets/dreamlink.jpg',
    url: 'https://fit.dreamlink.com.ng/',
    'github-url': 'https://github.com/springboot20',
    'project-title': 'Dreamlink — Real Estate Platform',
    company: 'Dreamlink',
    role: 'Frontend Engineer',
    year: '2025 – Present',
    type: 'professional',
    alt: 'Dreamlink Real Estate Platform',
    'project-description':
      'Contributed to a production-scale real estate platform serving property discovery, bookings, and customer engagement workflows. Built reusable WebSocket-powered messaging and notification systems, implemented multi-step onboarding flows with Formik and Yup, integrated Google OAuth and two-factor authentication, and optimized Redux Toolkit state management to reduce unnecessary re-renders and improve application responsiveness.',
    frameworks: [
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'RTK Query',
      'Tailwind CSS',
      'WebSocket',
      'Formik',
      'Yup',
    ],
  },
  {
    image: './assets/dfosh.jpg',
    url: 'https://dfosh-webapp.netlify.app',
    'github-url': 'https://github.com/springboot20',
    'project-title': 'DfOSH-CMI — Construction Safety Assessment Platform',
    company: 'Alkaios',
    role: 'Lead Frontend Engineer',
    year: '2026 – Present',
    type: 'professional',
    alt: 'DfOSH Construction Safety Assessment Tool',
    'project-description':
      'Led frontend architecture and implementation of a safety assessment platform for construction projects. Built custom SVG analytics visualizations without charting libraries, implemented IndexedDB-powered offline data persistence, resolved PDF export workflows, and delivered multilingual support using next-intl. Designed a scalable component architecture focused on performance, accessibility, and maintainability.',
    frameworks: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS v4',
      'Framer Motion',
      'IndexedDB',
      'next-intl',
      'React Hook Form',
    ],
  },
  {
    image: './assets/chat-app.jpg',
    url: 'https://codesuite-chatting-application.vercel.app/',
    'github-url': 'https://github.com/springboot20',
    'project-title': 'CodeSuite — Real-Time Messaging Platform',
    company: 'Personal Project',
    role: 'Full-Stack Developer',
    year: '2024 – 2025',
    type: 'personal',
    alt: 'CodeSuite Real-Time Chat Application',
    'project-description':
      'Developed a full-stack real-time communication platform featuring instant messaging, file sharing, voice messages, email verification, persistent chat history, and optimistic UI updates. Implemented Socket.IO-powered communication channels and IndexedDB-based local persistence for improved reliability and seamless user experience across sessions.',
    frameworks: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'RTK Query',
      'Socket.IO',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
  },
];

export const smallProjects: Array<ProjectType> = [];
