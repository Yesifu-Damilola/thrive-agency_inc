export interface TeamMember {
  name: string;
  role: string;
  img: string; // You can make this optional if needed
}

export const teamMembers: TeamMember[] = [
  {
    name: "Faith Oladurotolu",
    role: "SEO Specialist",
    img: "/images/seoimg.png",
  },
  {
    name: "James Richard",
    role: "UI/UX Designer",
    img: "/images/uiuximg.png",
  },
  {
    name: "Faith Oladurotolu",
    role: "Content Writer",
    img: "/images/contentwriterimg.png",
  },
  {
    name: "Faith Oladurotolu",
    role: "Graphics Designer",
    img: "/images/graphicsdesignerimg.png",
  },
];
