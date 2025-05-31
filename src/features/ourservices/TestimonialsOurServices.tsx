"use client";

import { Star } from "lucide-react";
import { TestimonialsData } from "../../components/constant/TestimonialsData";
import { TestimonialsHome } from "../home/TestimonialHome";

export const TestimonialsOurServices = () => {
  return (
    <TestimonialsHome
      testimonials={TestimonialsData}
      StarComponent={Star}
      title="Hear From Our Clients"
      subtitle="TESTIMONIALS"
    />
  );
};
