"use client";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";

interface Testimonial {
  id: number;
  rating: number;
  quote: string;
  name: string;
  position: string;
  image: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  StarComponent: React.ComponentType<{ className?: string }>;
}

export const TestimonialsHome: React.FC<TestimonialsProps> = ({
  title = "Hear From Our Clients",
  subtitle = "TESTIMONIALS",
  testimonials,
  StarComponent,
}) => {
  return (
    <section className="w-full bg-success-700 relative">
      {/* Gradient overlay at the bottom */}
      <div className="h-[350px] bg-gradient-to-t from-dark-500 to-dark-600 w-full absolute bottom-0 " />
      <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-15 ">
        {/* Section header */}
        <div className="max-w-[473px] pt-10 space-y-5 items-center justify-center mx-auto text-center ">
          <div className="w-[38px] h-[2px] rounded-[50px] bg-success-500 my-2 mx-auto" />
          <h4 className="font-open-sans font-bold text-base leading-[120%] bg-gradient-to-r from-success-300 to-success-400 text-transparent bg-clip-text">
            {subtitle}
          </h4>
          <h2 className="font-open-sans font-bold text-3xl md:text-4xl leading-[130%] text-dark-200">
            {title}
          </h2>
        </div>

        {/* Testimonials grid */}

        <div className="max-w-[1164px] mx-auto mt-10 lg:mt-16 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Fade direction={"up"}>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="rounded-2xl p-6 space-y-4 bg-success-300 "
                >
                  {/* Star rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarComponent
                        key={i}
                        className={
                          i < testimonial.rating
                            ? "text-yellow-100 fill-yellow-100 w-5 h-5"
                            : "text-gray-300 w-5 h-5"
                        }
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="font-open-sans font-normal text-base md:text-lg lg:text-xl leading-[160%] text-white">
                    {testimonial.quote}
                  </p>

                  {/* Author info */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} profile`}
                      width={48}
                      height={48}
                      className="rounded-full w-12 h-12 md:w-14 md:h-14"
                    />
                    <div>
                      <h4 className="font-open-sans font-bold text-lg md:text-xl leading-[120%] text-white">
                        {testimonial.name}
                      </h4>
                      <p className="font-open-sans text-base md:text-lg text-white">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
