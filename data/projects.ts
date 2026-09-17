export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: "meams-tracking-forecasting",
    title: "MEAMS: Real-Time Tracking & Forecasting System",
    role: "Full-Stack Developer",
    period: "Aug 2025 – Nov 2025",
    description: "Core asset tracking and forecasting logic, frontend execution, and MongoDB architecture.",
    tags: ["Full-Stack", "MongoDB", "Forecasting", "UI/UX", "System Architecture"],
    link: "https://github.com/yelcaole27"
  },
  {
    id: "cubed-it-helpdesk-v2",
    title: "Cubed IT Helpdesk V2 & Employee Portal",
    role: "IT Intern / Frontend Prototyping",
    period: "Feb 2026 – May 2026",
    description: "Minimalist UI/UX prototypes designed in Figma and functional QA testing.",
    tags: ["Figma", "UI/UX Prototyping", "QA Testing", "Enterprise Portal"],
    link: "https://github.com/yelcaole27"
  },
  {
    id: "loela-ecommerce-operations",
    title: "Loela E-Commerce & Asset Operations",
    role: "Digital Asset Management & Launch",
    period: "2026",
    description: "SKU cataloging, price architecture, and product photography editing for Lazada/Shopee storefront launch.",
    tags: ["E-Commerce", "Asset Management", "Data Migration", "Product Photography"],
    link: "https://github.com/yelcaole27"
  },
  {
    id: "dasal-kasal-short-film",
    title: "Dasal/Kasal Short Film",
    role: "Digital Post-Production Lead",
    period: "Academic Multimedia",
    description: "End-to-end cinematography, CapCut video pacing, and technical audio/video export syncing.",
    tags: ["Multimedia", "Cinematography", "Post-Production", "Creative Direction"],
    link: "https://github.com/yelcaole27"
  }
];