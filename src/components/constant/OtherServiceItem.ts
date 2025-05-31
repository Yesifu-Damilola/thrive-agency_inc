interface ServiceItem {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
  featured?: boolean;
}

export const OtherServiceItem: ServiceItem[] = [
  {
    id: 1,
    image: "/images/socialmedia.png",
    title: "Social Media Management",
    price: "$250",
    description:
      "Take your social media presence to the next level with our expert management services. We'll handle content creation, scheduling, engagement, and performance tracking across all major platforms. Our team will develop a tailored strategy to grow your audience, increase brand awareness, and drive meaningful interactions with your target customers.",
    featured: false,
  },
  {
    id: 2,
    image: "/images/socialmediabusiness.png",
    title: "Shopify Store Design",
    price: "$350",
    description:
      "Transform your e-commerce vision into a stunning Shopify store with our professional design services. We'll create a visually appealing, user-friendly storefront that converts visitors into customers. Our designs are mobile-optimized, brand-aligned, and focused on creating seamless shopping experiences that boost your sales and customer satisfaction.",
    featured: true,
  },
  {
    id: 3,
    image: "/images/googlemerchant.png",
    title: "SEO Specialist",
    price: "$300",
    description:
      "Dominate search engine rankings with our expert SEO services. Our specialists will optimize your website's technical structure, content, and backlink profile to improve visibility for your target keywords. We implement white-hat strategies that deliver sustainable growth in organic traffic and higher conversion rates for your business.",
    featured: false,
  },
  {
    id: 4,
    image: "/images/onpageandoffpageseo.png",
    title: "Content Writing",
    price: "$400",
    description:
      "Elevate your brand with compelling, SEO-optimized content that resonates with your audience. Our professional writers craft engaging website copy, blog posts, product descriptions, and marketing materials that inform, persuade, and convert. We tailor our writing to your brand voice while incorporating strategic keywords for maximum impact.",
    featured: false,
  },
  {
    id: 5,
    image: "/images/facebookandinstagram.png",
    title: "Graphic Design",
    price: "$275",
    description:
      "Make a lasting visual impression with our professional graphic design services. From logos and branding materials to social media graphics and marketing collateral, we create eye-catching designs that communicate your brand's identity and values. Our designs are not just beautiful - they're strategically crafted to support your business goals.",
    featured: true,
  },
  {
    id: 6,
    image: "/images/onpageandoffpageseo.png",
    title: "WordPress Web Design",
    price: "$400",
    description:
      "Get a powerful, custom WordPress website designed for performance and results. We build responsive, SEO-friendly sites with intuitive navigation and compelling layouts that showcase your business effectively. Whether you need a simple blog or a complex e-commerce site, we'll create a solution that meets your specific needs and goals.",
    featured: false,
  },
  {
    id: 7,
    image: "/images/onpageandoffpageseo.png",
    title: "Email Marketer",
    price: "$400",
    description:
      "Drive conversions and customer loyalty with strategic email marketing campaigns. We design and execute targeted email sequences that nurture leads, promote products, and keep your audience engaged. Our services include list segmentation, A/B testing, automation setup, and performance analysis to maximize your email marketing ROI.",
    featured: false,
  },
  {
    id: 8,
    image: "/images/onpageandoffpageseo.png",
    title: "App Development",
    price: "$400",
    description:
      "Bring your mobile app idea to life with our custom development services. We create user-friendly, high-performance applications for iOS and Android platforms, tailored to your specific business requirements. From concept to launch, we handle UI/UX design, coding, testing, and deployment to deliver a polished product that meets your goals.",
    featured: false,
  },
  {
    id: 9,
    image: "/images/onpageandoffpageseo.png",
    title: "Email Marketing",
    price: "$400",
    description:
      "Build stronger customer relationships and boost sales with our comprehensive email marketing services. We'll develop targeted campaigns, design eye-catching templates, and implement automation workflows that deliver the right message at the right time. Our data-driven approach ensures your emails achieve maximum open rates, click-throughs, and conversions.",
    featured: false,
  },
];
