export interface Project {
  id: number;
  title: string;
  category: 'development' | 'design';
  thumbnail: string;
  image?: string;
  description: string;
  longDescription?: string;
  tags: string[];
  link?: string;
  client?: string;
  date?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "development",
    thumbnail: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A modern e-commerce platform with product management, cart functionality, and secure checkout.",
    longDescription: "This comprehensive e-commerce solution includes advanced features like inventory management, secure payment processing, user accounts, and order tracking. The platform is built with performance and scalability in mind, using React for the frontend and Node.js for the backend.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "#",
    client: "RetailTech Inc.",
    date: "March 2023"
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "development",
    thumbnail: "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image: "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Interactive dashboard for financial data visualization and analysis.",
    longDescription: "This dashboard provides real-time analytics and visualization tools for financial data, helping businesses make informed decisions. Features include customizable reports, trend analysis, and predictive modeling.",
    tags: ["React", "TypeScript", "D3.js", "Firebase", "Tailwind CSS"],
    link: "#",
    client: "FinViz Analytics",
    date: "November 2022"
  },
  {
    id: 3,
    title: "Travel Agency Rebrand",
    category: "design",
    thumbnail: "https://images.pexels.com/photos/3380740/pexels-photo-3380740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image: "https://images.pexels.com/photos/3380740/pexels-photo-3380740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Complete rebranding for a luxury travel agency, including logo, marketing materials, and website design.",
    longDescription: "This comprehensive rebrand transformed the agency's image from traditional to modern luxury. The project included a new logo, brand guidelines, print materials, digital assets, and a fully responsive website design.",
    tags: ["Branding", "UI/UX", "Logo Design", "Print", "Web Design"],
    link: "#",
    client: "Wanderlust Travels",
    date: "May 2023"
  },
  {
    id: 4,
    title: "Health & Fitness App",
    category: "development",
    thumbnail: "https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image: "https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Mobile application for tracking fitness goals, nutrition, and workouts.",
    longDescription: "This cross-platform fitness app helps users track their workouts, monitor nutrition, set goals, and view progress over time. The app includes features like workout plans, meal tracking, social sharing, and integration with fitness wearables.",
    tags: ["React Native", "Redux", "Firebase", "Health API", "Expo"],
    link: "#",
    client: "FitLife Solutions",
    date: "July 2022"
  },
  {
    id: 5,
    title: "Sustainable Product Packaging",
    category: "design",
    thumbnail: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Eco-friendly packaging design for an organic skincare product line.",
    longDescription: "This packaging project focused on sustainability while maintaining premium brand aesthetics. The design used recycled materials with minimal environmental impact, while the visual identity communicated the brand's natural and organic values.",
    tags: ["Packaging Design", "Sustainable Design", "Typography", "Illustration"],
    link: "#",
    client: "Pure Botanicals",
    date: "February 2023"
  },
  {
    id: 6,
    title: "Smart Home Control System",
    category: "development",
    thumbnail: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "IoT application for controlling and monitoring smart home devices.",
    longDescription: "This comprehensive smart home solution provides users with the ability to control and automate their home systems including lighting, climate, security, and entertainment. The application features voice control, scheduling, and energy usage analytics.",
    tags: ["IoT", "React", "Node.js", "WebSockets", "MQTT"],
    link: "#",
    client: "HomeConnect Technologies",
    date: "October 2022"
  }
];