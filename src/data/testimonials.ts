export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO",
    company: "TechVision",
    quote: "Working with John was an absolute pleasure. His ability to blend technical expertise with creative design thinking resulted in a product that exceeded our expectations. Not only is he skilled, but he's also reliable and communicative throughout the entire process.",
    avatarUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Marketing Director",
    company: "Brandwave",
    quote: "John completely transformed our brand identity. His understanding of both design principles and the technical implementation made the process seamless. The new visual identity has significantly improved our customer engagement and online presence.",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "Product Manager",
    company: "InnovateSoft",
    quote: "We hired John to rebuild our e-commerce platform, and it was the best decision we made. Not only did he deliver a high-performing website, but his attention to design details created an exceptional user experience that has dramatically increased our conversion rates.",
    avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Founder",
    company: "StartupLaunch",
    quote: "John played a crucial role in bringing our startup's vision to life. His combined skills in development and design meant we got a cohesive, user-friendly product without having to hire multiple specialists. I highly recommend him for any creative tech project.",
    avatarUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];