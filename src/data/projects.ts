import EcommerceProjectImage from "../assets/images/e-commerce-project-image.jpg";
import EcommerceApiProjectImage from "../assets/images/ecommerce-api-project-image.jpg";
import ChaAppProjectImage from "../assets/images/chat-application-project-image.jpg";
import BankingProjectImage from "../assets/images/banking-project-image.jpg";

export const projects = [
  {
    image: EcommerceProjectImage,
    url: "https://cv-ecommerce-project.vercel.app/",
    githubUrl: "https://github.com/springboot20/cv-ecommerce-project",
    title: "E-commerce Online Shopping",
    alt: "E-commerce Online Shopping Platform",
    description:
      "A full-featured shopping platform with product browsing, cart functionality, secure checkout, user authentication, reviews, wishlist, responsive design, and an admin dashboard for inventory and sales management.",
    frameworks: ["React.Js", "Redux", "Tailwind CSS", "TypeScript", "Headless UI"],
  },
  {
    image: EcommerceApiProjectImage,
    url: "https://e-commerce-api-production-6f9e.up.railway.app/",
    githubUrl: "https://github.com/springboot20/e-commerce-api",
    title: "E-commerce RESTful API",
    alt: "E-commerce Backend API Service",
    description:
      "A backend service supporting the e-commerce platform. Handles products, authentication, orders, payments, and inventory. Features robust error handling, validation, rate limiting, logging, and complete API documentation.",
    frameworks: ["Node.js", "Express.Js", "MongoDB", "JWT", "Swagger", "JavaScript"],
  },
  {
    image: ChaAppProjectImage,
    url: "https://chat-application-wine-six.vercel.app/",
    githubUrl: "https://github.com/springboot20/chat-application",
    title: "Real-Time Chat Application",
    alt: "Real-Time Chat Application",
    description:
      "A Vite + React + TypeScript-based chat app with real-time messaging, responsive UI, and clean design. Built to demonstrate modern front-end and real-time communication capabilities.",
    frameworks: [
      "Vite",
      "React",
      "TypeScript",
      "Real-time messaging infrastructure (e.g., WebSocket, Socket.io)",
    ],
  },
  {
    image: BankingProjectImage,
    url: "https://affiliate-dashboard-4sgw.vercel.app",
    githubUrl: "https://github.com/springboot20/affiliate-dashboard",
    title: "Banking Web Application",
    alt: "Secure Banking Web Application",
    description:
      "A secure online banking platform with features like account overview, transaction history, fund transfers, bill payments, spending analytics, budget tools, and strong security (2FA, session timeouts, encryption).",
    frameworks: ["React.Js", "Redux", "Tailwind CSS", "TypeScript"],
  },
  {
    image: BankingProjectImage,
    url: "https://my-api-production-a8ed.up.railway.app/",
    githubUrl: "https://github.com/springboot20/my-api",
    title: "Banking Restful API",
    alt: "Secure Banking Restful API",
    description:
      "A secure API backend for a banking app. Manages authentication, accounts, transactions, and billing. Supports 2FA, encrypted storage, role-based access, reporting endpoints, and integration-ready documentation.",
    frameworks: ["Node.js", "Express", "MongoDB", "JWT", "JavaScript"],
  },
];

export const smallProjects = [
  {
    githubUrl: "https://github.com/springboot20/rest-countries",
    title: "Rest Countries Explorer",
    url: "https://rest-countries-hb96.vercel.app/",
    description:
      "A web application that provides information about countries, including population, area, and more. Built with React and Tailwind CSS.",
    frameworks: [
      "React",
      "Tailwind CSS",
      "Vite",
      "React",
      "TypeScript",
      "REST Countries API",
      "Responsive design",
      "Theme toggling",
    ],
  },
];
