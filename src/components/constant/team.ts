export interface TeamMember {
  name: string;
  role: string;
  img: string; // You can make this optional if needed
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ishola Idris Olakunmi",
    role: "SEO Optimization",
    img: "/images/seoimg.png",
  },
  {
    name: "Afolabi Ayobami",
    role: "Content Writer",
    img: "/images/uiuximg.png",
  },
  {
    name: "Adeniyi Abdullah Omolaja",
    role: "Graphics Designer",
    img: "/images/contentwriterimg.png",
  },
  {
    name: "Alao Ibrahim",
    role: "Shopify and website designer",
    img: "/images/graphicsdesignerimg.png",
  },
];
