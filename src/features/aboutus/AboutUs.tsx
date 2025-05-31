"use client";

import { FaqItems } from "@/components/constant/FaqItems";
import FrequentlyAskedQuestions from "../home/FrequentlyAskedQuestions";
import WhyChooseUs from "../home/WhyChooseUs";
import { BusinessStrategy } from "./BusinessStrategy";
import { MeetTheTeam } from "./MeetTheTeam";
import { TakeYourBusiness } from "./TakeYourBusiness";
import { AdvertSubSection } from "../home/AdvertSubSection";
import { TestimonialsOurServices } from "../ourservices/TestimonialsOurServices";

const AboutUs = () => {
  return (
    <>
      <div className="w-full h-[380px] lg:h-[528px] bg-[url('/images/aboutbg.png')] bg-cover lg:bg-cover bg-no-repeat bg-center relative">
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 ">
          <h1 className="font-bold text-4xl lg:text-[80px] leading-[120%] text-white text-center">
            ABOUT US
          </h1>
        </div>
      </div>
      <TakeYourBusiness />
      <BusinessStrategy />
      <WhyChooseUs />
      <MeetTheTeam />
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
export default AboutUs;
