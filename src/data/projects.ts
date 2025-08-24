import ProjectDemoImage from "../assets/images/project-demo-image.jpg";
import EcommerceProjectImage from "../assets/images/e-commerce-project-image.jpg";
import BankingProjectImage from "../assets/images/banking-project-image.jpg";

export const projects = [
  {
    image: EcommerceProjectImage,
    url: "https://cv-ecommerce-project.vercel.app/",
    githubUrl: "https://github.com/springboot20/cv-ecommerce-project",
    title: "E-commerce Online Shopping",
    alt: "E-commerce Online Shopping Platform",
    description:
      "A full-featured e-commerce platform that allows users to browse products, add items to cart, and complete purchases. The application includes user authentication, product filtering and search, user reviews, wishlist functionality, and a secure checkout process. The responsive design ensures optimal viewing across all device sizes, while the admin dashboard allows for inventory management and sales tracking.",
    frameworks: ["React.Js", "Redux", "Tailwind CSS", "TypeScript", "Headless UI"],
  },
  {
    image: ProjectDemoImage,
    url: "https://e-commerce-api-production-6f9e.up.railway.app/",
    githubUrl: "https://github.com/springboot20/e-commerce-api",
    title: "E-commerce RESTful API",
    alt: "E-commerce Backend API Service",
    description:
      "A comprehensive RESTful API service that powers the e-commerce platform. The API handles product management, user authentication and authorization, order processing, payment integration, and inventory control. It includes robust error handling, data validation, rate limiting, and comprehensive logging. The API documentation provides detailed endpoint descriptions, request/response examples, and testing capabilities for developers.",
    frameworks: ["Node.js", "Express.Js", "MongoDB", "JWT", "Swagger", "JavaScript"],
  },
  {
    image: BankingProjectImage,
    url: "https://affiliate-dashboard-4sgw.vercel.app",
    githubUrl: "https://github.com/springboot20/affiliate-dashboard",
    title: "Banking Web Application",
    alt: "Secure Banking Web Application",
    description:
      "A secure banking web application that enables users to manage their finances online. The platform includes account overview, transaction history, fund transfers between accounts, bill payments, and scheduled transactions. Security features include two-factor authentication, session timeouts, and encrypted data transmission. The application also provides spending analytics with visual representations, budget planning tools, and financial goal tracking for users to monitor their financial health.",
    frameworks: ["React.Js", "Redux", "Tailwind CSS", "TypeScript"],
  },
  {
    image: BankingProjectImage,
    url: "https://my-api-production-a8ed.up.railway.app/",
    githubUrl: "https://github.com/springboot20/my-api",
    title: "Banking Restful API",
    alt: "Secure Banking Restful API",
    description:
      "A robust and secure RESTful API designed to support a banking web application. This API handles user authentication, account management, transaction processing, and bill payments. It includes features such as two-factor authentication, encrypted data storage, and role-based access control to ensure security. The API also provides endpoints for generating financial reports, managing scheduled transactions, and tracking user activity. Comprehensive documentation and testing ensure seamless integration with frontend applications.",
    frameworks: ["Node.js", "Express", "MongoDB", "JWT", "JavaScript"],
  },
];
