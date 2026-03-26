// import EcommerceProjectImage from '../assets/images/e-commerce-project-image.jpg';
// import EcommerceApiProjectImage from '../assets/images/ecommerce-api-project-image.jpg';
// import ChaAppProjectImage from '../assets/images/chat-application-project-image.jpg';
// import BankingProjectImage from '../assets/images/banking-project-image.jpg';

interface ProjecType {
  image?: string;
  url: string;
  githubUrl: string;
  title: string;
  alt?: string;
  description: string;
  frameworks: string[];
}

export const projects: Array<ProjecType> = [];

export const smallProjects: Array<ProjecType> = [];
