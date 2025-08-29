"use client";

import { FaqItems } from "@/components/constant/FaqItems";
import { TestimonialsData } from "@/components/constant/TestimonialsData";
import Advert from "@/features/home/Advert";
import { AdvertSubSection } from "@/features/home/AdvertSubSection";
import FrequentlyAskedQuestions from "@/features/home/FrequentlyAskedQuestions";
import MeetOurCeo from "@/features/home/MeetOurCeo";
import OtherServices from "@/features/home/OtherServices";
import OurServices from "@/features/home/OurServices";
import RealExperts from "@/features/home/RealExperts";
import { TestimonialsHome } from "@/features/home/TestimonialHome";
import WhoWeAre from "@/features/home/WhoWeAre";
import WhyChooseUs from "@/features/home/WhyChooseUs";
import { Star } from "lucide-react";

const Home = () => {
  return (
    <main>
      <RealExperts />
      <OurServices />
      <WhoWeAre />
      <WhyChooseUs />
      <OtherServices />
      <Advert />
      <MeetOurCeo />
      <FrequentlyAskedQuestions faqItems={FaqItems} />
      <TestimonialsHome testimonials={TestimonialsData} StarComponent={Star} />
      <AdvertSubSection />
    </main>
  );
};

export default Home;
