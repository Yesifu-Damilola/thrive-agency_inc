// Define tab types for type safety
type TabType =
  | "website"
  | "search-engine"
  | "social-media"
  | "logo-design"
  | "banner-design";

// Define content structure for each tab
interface TabContent {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  samples: Array<{
    title: string;
    description: string;
    linkText: string;
    linkUrl: string;
    imageAlt: string;
    imageUrl: string;
    isPrimary?: boolean;
  }>;
}

// Tab content data
export const tabContents: Record<TabType, TabContent> = {
  website: {
    title: "Shopify Sales Boosting Theme",
    description:
      "Looking for a professional Shopify store design or redesign? Look no further! We are experienced Shopify designer with a proven track record of success. We will create a beautiful, engaging, and user-friendly website that will help you boost your sales and grow your business.",
    buttonText: "Visit Service Page",
    buttonLink: "/SocialMediaMarketing",
    samples: [
      {
        title: "Website Sample 1",
        description:
          "Optimize your online store with our Facebook & Instagram Shop setup! We help businesses create seamless shopping",
        linkText: "Visit Website",
        linkUrl: "#",
        imageAlt: "Website sample 1",
        imageUrl: "/images/website-sample-1.jpg",
        isPrimary: true,
      },
      {
        title: "Website Sample 2",
        description:
          "Optimize your online store with our Facebook & Instagram Shop setup! We help businesses create seamless shopping",
        linkText: "Visit Website",
        linkUrl: "#",
        imageAlt: "Website sample 2",
        imageUrl: "/images/website-sample-2.jpg",
      },
      {
        title: "Website Sample 3",
        description:
          "Optimize your online store with our Facebook & Instagram Shop setup! We help businesses create seamless shopping",
        linkText: "Visit Website",
        linkUrl: "#",
        imageAlt: "Website sample 3",
        imageUrl: "/images/website-sample-3.jpg",
      },
      {
        title: "Website Sample 4",
        description:
          "Optimize your online store with our Facebook & Instagram Shop setup! We help businesses create seamless shopping",
        linkText: "Visit Website",
        linkUrl: "#",
        imageAlt: "Website sample 4",
        imageUrl: "/images/website-sample-4.jpg",
      },
    ],
  },
  "search-engine": {
    title: "Search Engine Optimization",
    description:
      "Improve your online visibility and drive more organic traffic to your Shopify store with our comprehensive SEO services. We'll optimize your product pages, improve site structure, and build quality backlinks to boost your search rankings.",
    buttonText: "View SEO Services",
    buttonLink: "/SEOServices",
    samples: [
      {
        title: "SEO Campaign 1",
        description:
          "Boost your search rankings with our comprehensive SEO strategy. We optimize your site structure, content, and backlinks.",
        linkText: "View Case Study",
        linkUrl: "#",
        imageAlt: "SEO sample 1",
        imageUrl: "/images/seo-sample-1.jpg",
        isPrimary: true,
      },
      {
        title: "Keyword Research",
        description:
          "Discover the most valuable keywords for your business with our in-depth keyword research and analysis.",
        linkText: "Learn More",
        linkUrl: "#",
        imageAlt: "SEO sample 2",
        imageUrl: "/images/seo-sample-2.jpg",
      },
      {
        title: "Local SEO",
        description:
          "Dominate local search results and attract nearby customers with our targeted local SEO strategies.",
        linkText: "See Results",
        linkUrl: "#",
        imageAlt: "Local SEO sample",
        imageUrl: "/images/local-seo.jpg",
      },
      {
        title: "Technical SEO",
        description:
          "Improve your site's technical foundation with our comprehensive site audits and optimization services.",
        linkText: "Learn More",
        linkUrl: "#",
        imageAlt: "Technical SEO sample",
        imageUrl: "/images/technical-seo.jpg",
      },
    ],
  },
  "social-media": {
    title: "Social Media Marketing",
    description:
      "Grow your brand presence and drive sales through strategic social media marketing. We create engaging content, manage your social profiles, and run targeted ad campaigns to connect with your audience where they spend their time.",
    buttonText: "Explore Social Media Services",
    buttonLink: "/SocialMediaMarketing",
    samples: [
      {
        title: "Instagram Campaign",
        description:
          "Engage your audience with eye-catching Instagram content and strategic hashtag campaigns.",
        linkText: "View Campaign",
        linkUrl: "#",
        imageAlt: "Social media campaign 1",
        imageUrl: "/images/instagram-campaign.jpg",
        isPrimary: true,
      },
      {
        title: "Facebook Ads",
        description:
          "Target your ideal customers with precision using our data-driven Facebook advertising strategies.",
        linkText: "See Results",
        linkUrl: "#",
        imageAlt: "Social media campaign 2",
        imageUrl: "/images/facebook-ads.jpg",
      },
      {
        title: "TikTok Strategy",
        description:
          "Tap into the fastest-growing social platform with creative TikTok content that resonates with your audience.",
        linkText: "View Examples",
        linkUrl: "#",
        imageAlt: "TikTok campaign",
        imageUrl: "/images/tiktok-strategy.jpg",
      },
      {
        title: "Content Calendar",
        description:
          "Stay consistent with a strategic content calendar designed to maximize engagement across platforms.",
        linkText: "Learn More",
        linkUrl: "#",
        imageAlt: "Content calendar",
        imageUrl: "/images/content-calendar.jpg",
      },
    ],
  },
  "logo-design": {
    title: "Professional Logo Design",
    description:
      "Make a lasting impression with a professional logo that represents your brand identity. Our designers create unique, versatile logos that work across all platforms and help your business stand out from the competition.",
    buttonText: "Explore Logo Services",
    buttonLink: "/LogoDesign",
    samples: [
      {
        title: "Minimalist Logo",
        description:
          "Clean, modern, and memorable logo designs that capture your brand's essence with simplicity.",
        linkText: "View Portfolio",
        linkUrl: "#",
        imageAlt: "Logo design 1",
        imageUrl: "/images/minimalist-logo.jpg",
        isPrimary: true,
      },
      {
        title: "Illustrated Logo",
        description:
          "Custom illustrated logos that tell your brand story through unique and creative visuals.",
        linkText: "See Examples",
        linkUrl: "#",
        imageAlt: "Logo design 2",
        imageUrl: "/images/illustrated-logo.jpg",
      },
      {
        title: "Typography Logo",
        description:
          "Elegant typography-based logos that communicate your brand's personality through custom lettering.",
        linkText: "View Samples",
        linkUrl: "#",
        imageAlt: "Typography logo",
        imageUrl: "/images/typography-logo.jpg",
      },
      {
        title: "Brand Identity",
        description:
          "Complete brand identity packages including logo, color palette, typography, and usage guidelines.",
        linkText: "Learn More",
        linkUrl: "#",
        imageAlt: "Brand identity",
        imageUrl: "/images/brand-identity.jpg",
      },
    ],
  },
  "banner-design": {
    title: "Banner Design Services",
    description:
      "Capture attention with professionally designed banners for your website, social media, and advertising campaigns. Our custom banner designs are optimized for each platform and designed to drive engagement and conversions.",
    buttonText: "View Banner Services",
    buttonLink: "/BannerDesign",
    samples: [
      {
        title: "Web Banners",
        description:
          "Eye-catching web banners designed to increase click-through rates and conversions on your site.",
        linkText: "View Examples",
        linkUrl: "#",
        imageAlt: "Banner design 1",
        imageUrl: "/images/web-banners.jpg",
        isPrimary: true,
      },
      {
        title: "Social Media Banners",
        description:
          "Custom banners optimized for each social platform to maintain consistent branding across channels.",
        linkText: "See Gallery",
        linkUrl: "#",
        imageAlt: "Banner design 2",
        imageUrl: "/images/social-media-banners.jpg",
      },
      {
        title: "Ad Campaign Banners",
        description:
          "High-converting banner ads designed for Google Display Network, Facebook, and other ad platforms.",
        linkText: "View Portfolio",
        linkUrl: "#",
        imageAlt: "Ad campaign banners",
        imageUrl: "/images/ad-campaign-banners.jpg",
      },
      {
        title: "Animated Banners",
        description:
          "Eye-catching animated banners that grab attention and communicate your message effectively.",
        linkText: "See Examples",
        linkUrl: "#",
        imageAlt: "Animated banners",
        imageUrl: "/images/animated-banners.jpg",
      },
    ],
  },
};
