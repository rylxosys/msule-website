// content/testimonials.ts
export type Testimonial = {
  name: string;
  designation: string;
  company: string;
  quote: string;
  photo?: string; // add real photo path once available
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Soubhik Kundu",
    designation: "Founder & CEO",
    company: "SWIS Foundation",
    photo: "/assets/souvik-kundu.png",
    quote:
      "Msule understood exactly what we needed — a platform that let us run our own campaigns and manage donations directly, without depending on a third party. They were patient with our questions and delivered something our team could actually use from day one.",
  },
  {
    name: "Anchit Ayush Guria",
    designation: "Co-founder & CTO",
    company: "Rylxo Pvt Ltd",
    photo: "/assets/anchit-ayush.webp",
    quote:
      "Building a clinic management system meant getting a lot of details right — scheduling, queues, patient communication. Msule took the time to understand the operational side, not just the technical requirements, and that showed in the final product.",
  },
  {
    name: "Haradhan Das",
    designation: "Proprietor",
    company: "AB Associates",
    photo: "/assets/haradhan-das.png",
    quote:
      "I needed a website that actually represented the work we do, not a generic template. Msule built something I could show clients with confidence, and made it simple enough that I can update it myself.",
  },
];
