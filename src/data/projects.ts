import ProjectDemoImage from "../assets/images/project-demo-image.jpg";

export const projects = [
  {
    image: ProjectDemoImage,
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
    url: "https://e-commerce-api-6wjr.onrender.com",
    githubUrl: "https://github.com/springboot20/e-commerce-api",
    title: "E-commerce RESTful API",
    alt: "E-commerce Backend API Service",
    description:
      "A comprehensive RESTful API service that powers the e-commerce platform. The API handles product management, user authentication and authorization, order processing, payment integration, and inventory control. It includes robust error handling, data validation, rate limiting, and comprehensive logging. The API documentation provides detailed endpoint descriptions, request/response examples, and testing capabilities for developers.",
    frameworks: ["Node.js", "Express.Js", "MongoDB", "JWT", "Swagger", "JavaScript"],
  },
  {
    image: ProjectDemoImage,
    url: "https://github.com/springboot20/event-booking",
    githubUrl: "https://github.com/springboot20/event-booking",
    title: "Event Booking System",
    alt: "Event Booking and Management Platform",
    description:
      "An interactive event booking platform that allows users to discover, book, and manage event tickets. Features include event listings with detailed information, interactive seating maps, calendar integration, and QR code ticket generation. The system includes user profiles with booking history, event recommendations based on past attendance, and notification systems for upcoming events. For organizers, the platform offers tools for event creation, attendee management, and analytics.",
    frameworks: ["React.Js", "TypeScript", "Headless UI", "Tailwind CSS"],
  },
  {
    image: ProjectDemoImage,
    url: "https://github.com/springboot20/event-booking-api",
    githubUrl: "https://github.com/springboot20/event-booking-api",
    title: "Event Booking API",
    alt: "Event Booking Backend API Service",
    description:
      "A scalable API backend that powers the event booking platform. This service handles event creation and management, seat reservation, ticket generation, user authentication, and payment processing. The API implements real-time updates using WebSockets for seat availability, supports multiple payment gateways, and provides analytics endpoints for event organizers. The well-documented API allows for easy integration with mobile applications and third-party services.",
    frameworks: ["Node.js", "Express.Js", "TypeScript", "MongoDB", "Socket.io", "JWT"],
  },
  {
    image: ProjectDemoImage,
    url: "https://affiliate-dashboard-4sgw.vercel.app",
    githubUrl: "https://github.com/springboot20/affiliate-dashboard",
    title: "Banking Web Application",
    alt: "Secure Banking Web Application",
    description:
      "A secure banking web application that enables users to manage their finances online. The platform includes account overview, transaction history, fund transfers between accounts, bill payments, and scheduled transactions. Security features include two-factor authentication, session timeouts, and encrypted data transmission. The application also provides spending analytics with visual representations, budget planning tools, and financial goal tracking for users to monitor their financial health.",
    frameworks: ["React.Js", "Redux", "Tailwind CSS", "TypeScript"],
  },
  {
    image: ProjectDemoImage,
    url: "https://affiliate-dashboard-4sgw.vercel.app",
    githubUrl: "https://github.com/springboot20/my-api",
    title: "Banking Restful API",
    alt: "Secure Banking Restful API",
    description:
      "A robust and secure RESTful API designed to support a banking web application. This API handles user authentication, account management, transaction processing, and bill payments. It includes features such as two-factor authentication, encrypted data storage, and role-based access control to ensure security. The API also provides endpoints for generating financial reports, managing scheduled transactions, and tracking user activity. Comprehensive documentation and testing ensure seamless integration with frontend applications.",
    frameworks: ["Node.js", "Express", "MongoDB", "JWT", "JavaScript"],
  },
];
