"use client";

import { Star } from "lucide-react";
import { TestimonialsData } from "../../components/constant/TestimonialsData";
import { AdvertSubSection } from "../home/AdvertSubSection";
import { TestimonialsHome } from "../home/TestimonialHome";

const Testimonials = () => {
  return (
    <>
      <TestimonialsHome
        testimonials={TestimonialsData}
        StarComponent={Star}
        title="Hear From Our Clients"
        subtitle="TESTIMONIALS"
      />
      <AdvertSubSection />
    </>
  );
};
export default Testimonials;
