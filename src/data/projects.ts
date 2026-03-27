import EcommerceProjectImage from '../assets/images/e-commerce-project-image.jpg';
import EcommerceAPIProjectImage from '../assets/ecommerce_api_placeholder.svg';
import ChaAppProjectImage from '../assets/images/chat-application-project-image.jpg';
import ChatAPIProjectImage from '../assets/chat_api_placeholder.svg';

interface ProjectType {
  image?: string;
  url: string;
  githubUrl: string;
  title: string;
  alt?: string;
  description: string;
  frameworks: string[];
}

export const projects: Array<ProjectType> = [
  {
    image: ChaAppProjectImage,
    url: 'https://codesuite-chatting-application.vercel.app/',
    githubUrl: 'https://github.com/springboot20/chat-application',
    title: 'Real-Time Chat Application',
    alt: 'Real-Time Chat Application preview',
    description:
      'A real-time chat application built with React and TypeScript, enabling users to send and receive messages instantly. Features a clean, responsive UI styled with Tailwind CSS and deployed on Vercel for fast, reliable access.',
    frameworks: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    image: EcommerceProjectImage,
    url: 'https://cv-ecommerce-project.vercel.app',
    githubUrl: 'https://github.com/springboot20/cv-ecommerce-project',
    title: 'E-Commerce Platform',
    alt: 'E-Commerce Platform preview',
    description:
      'A fully responsive e-commerce storefront built with React and TypeScript, featuring product listings, shopping cart functionality, and a smooth checkout flow. Styled with Tailwind CSS and deployed on Vercel.',
    frameworks: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    image: ChatAPIProjectImage,
    url: 'https://github.com/springboot20/chat-api',
    githubUrl: 'https://github.com/springboot20/chat-api',
    title: 'Chat REST API',
    alt: 'Chat API project preview',
    description:
      'A Node.js/Express backend powering the real-time chat application. Handles user authentication with JWT, room management, and message persistence via MongoDB, with Socket.io integrated for live event broadcasting.',
    frameworks: ['Node.js', 'Express', 'Socket.io', 'MongoDB', 'JWT'],
  },
  {
    image: EcommerceAPIProjectImage,
    url: 'https://e-commerce-api-psi-five.vercel.app',
    githubUrl: 'https://github.com/springboot20/e-commerce-api',
    title: 'E-Commerce REST API',
    alt: 'E-Commerce API project preview',
    description:
      'A scalable REST API for e-commerce operations built with Node.js and Express. Covers products, orders, cart, users, and payments — secured with JWT auth, input validation middleware, a clean service layer, and full Swagger/OpenAPI documentation.',
    frameworks: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
  },
];

export const smallProjects: Array<ProjectType> = [];
