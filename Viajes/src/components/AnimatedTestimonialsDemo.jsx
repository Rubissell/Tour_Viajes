import { AnimatedTestimonials } from "./animated-testimonials";


export function AnimatedTestimonialsDemo() {
    const testimonials = [
    {
      quote:
        "TENGA UNA BONITA NOCHE Y EXPERIENCIA EN TODO SU VIAJE CON NOSOTROS. GRACIAS POR ELEGIRNOS PARA SER PARTE DE SUS AVENTURAS.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://i.pinimg.com/736x/68/b4/ce/68b4ce680bbae7b429561f584713908a.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://i.pinimg.com/736x/f4/ab/ba/f4abba1cffff3065096bb79d35002dfd.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://i.pinimg.com/1200x/c1/b7/59/c1b759325793866ffa85546c21e7ad25.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://i.pinimg.com/1200x/12/1a/68/121a6899046eb6ce11e62135e4b5e5fc.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://i.pinimg.com/1200x/8b/87/82/8b8782c0ba55164fdeddc3443249921b.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
