"use client";

import { FaqItems } from "../../components/constant/FaqItems";
import { AdvertSubSection } from "../home/AdvertSubSection";
import FrequentlyAskedQuestions from "../home/FrequentlyAskedQuestions";
import { OtherServicesSocial } from "./OtherServicesSocial";
import { ShopifySales } from "./ShopifySales";
import { TestimonialsOurServices } from "./TestimonialsOurServices";

export const OurServices = () => {
  return (
    <>
      <div className="w-full h-[380px] lg:h-[528px] bg-[url('/images/aboutbg.png')] bg-cover lg:bg-cover bg-no-repeat bg-center relative">
        <div className="absolute inset-0 flex items-center justify-center ">
          <h1 className="font-bold text-4xl lg:text-[80px] leading-[120%] text-white text-center">
            Our Services
          </h1>
        </div>
      </div>
      <ShopifySales />
      <OtherServicesSocial />
      <FrequentlyAskedQuestions
        title="Frequently Asked Questions"
        subtitle="FAQS"
        faqItems={FaqItems}
        containerBgColor="bg-success-700"
        itemBgColor="bg-success-300"
        textColor="text-dark-200"
        borderColor="border-success-500"
      />
      <TestimonialsOurServices />
      <AdvertSubSection />
    </>
  );
};
