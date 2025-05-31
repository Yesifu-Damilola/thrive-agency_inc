"use client";

import { ReactNode } from "react";
import { Star } from "lucide-react";
// import { FaqItems } from "../../../components/constant/FaqItems";
// import { TestimonialsData } from "../../../components/constant/TestimonialsData";
// import FrequentlyAskedQuestions from "../../../components/features/home/FrequentlyAskedQuestions";
// import { TestimonialsHome } from "../../../components/features/home/TestimonialHome";
import { OtherServicesSocial } from "../OtherServicesSocial";
import { SocialMediaMarketing } from "./SocialMediaMarketing";
import FrequentlyAskedQuestions from "@/features/home/FrequentlyAskedQuestions";
import { FaqItems } from "@/components/constant/FaqItems";
import { TestimonialsHome } from "@/features/home/TestimonialHome";
import { TestimonialsData } from "@/components/constant/TestimonialsData";
import { AdvertSubSection } from "@/features/home/AdvertSubSection";
// import { AdvertSubSection } from "../../../components/features/home/AdvertSubSection";

interface SocialMediaMarketingManagementProps {
  children?: ReactNode;
}

export const SocialMediaMarketingManagement = ({
  children,
}: SocialMediaMarketingManagementProps) => {
  return (
    <>
      {children}
      <SocialMediaMarketing />
      <OtherServicesSocial />
      <FrequentlyAskedQuestions faqItems={FaqItems} />
      <TestimonialsHome testimonials={TestimonialsData} StarComponent={Star} />
      <AdvertSubSection />
    </>
  );
};
