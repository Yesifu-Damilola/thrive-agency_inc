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
      "📲 Social Media Management\nWe turn scrolls into clicks with platform-savvy strategies tailored to your brand. From content calendars to hashtag research, visual curation to audience engagement—we manage your social presence like a pro (because we are).",
    featured: false,
  },
  {
    id: 2,
    image: "/images/socialmediabusiness.png",
    title: "Shopify Store Design",
    price: "$350",
    description:
      " 🛒 Shopify Store Design & Optimization We build Shopify stores that do more than look pretty—they convert. From custom themes to seamless product pages and optimized checkout flows, we design every pixel with your customer's journey (and your revenue) in mind.",
    featured: true,
  },
  {
    id: 3,
    image: "/images/googlemerchant.png",
    title: "SEO Specialist",
    price: "$300",
    description: `📈 SEO (Search Engine Optimization)
       Ranking on Google isn’t magic—it’s method. We do the technical fixes, on-page optimization, and keyword targeting that make your site findable, clickable, and profitable. Organic traffic? Delivered.`,
    featured: false,
  },
  {
    id: 4,
    image: "/images/onpageandoffpageseo.png",
    title: "Content Writing",
    price: "$400",
    description: `✍️ Content Writing & Copywriting
        We don't write fluff. We write content that builds trust, earns clicks, and drives action. From product descriptions and landing pages to blogs and email copy, we bring your brand's voice to life and your readers to the checkout.`,
    featured: false,
  },
  {
    id: 5,
    image: "/images/facebookandinstagram.png",
    title: "Graphic Design",
    price: "$275",
    description: `🎨 Graphic Design & Branding
        Design that speaks louder than words. Logos, packaging, ad creatives, banners, social templates—you name it. We make sure your visuals aren’t just nice—they’re unforgettable and on-brand, every time.`,
    featured: true,
  },
  {
    id: 6,
    image: "/images/onpageandoffpageseo.png",
    title: "WordPress Web Design",
    price: "$400",
    description:
      "🌐 WordPress Design & Development\nNeed a sleek, high-performance site that’s easy to manage? We craft beautiful, fast, and SEO-friendly WordPress websites with clear structure, strong branding, and zero bloat. Perfect for blogs, service sites, and hybrid eComm.",
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
