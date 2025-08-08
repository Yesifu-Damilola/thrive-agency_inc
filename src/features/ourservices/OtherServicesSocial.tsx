"use client";

import { OtherServiceItem } from "@/components/constant/OtherServiceItem";
import { OtherServiceCard } from "../home/OtherServiceCard";

export const OtherServicesSocial = () => {
  return (
    <section className="w-full bg-success-700 relative">
      <div className="wrapper py-[100px] space-y-[10px] relative z-10">
        <div className="w-full max-w-[1164px] space-y-10 flex flex-col items-center justify-center mx-auto">
          <div className="w-full space-y-4">
            <div className="space-y-1">
              <div className="w-[38px] h-[2px] rounded-[50px] bg-success-500 my-1 ml-10"></div>
              <h3 className="font-open-sans font-bold text-base leading-[120%] bg-gradient-to-r from-success-300 to-success-400 text-transparent bg-clip-text tracking-wide">
                OTHER SERVICES
              </h3>
            </div>
            <div className="w-full flex items-center justify-between">
              <h1 className="font-open-sans font-bold text-[40px] leading-[130%] text-dark-200">
                Enjoy Our Extra Services
              </h1>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="w-full overflow-hidden p-2">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 space-y-5">
              {OtherServiceItem?.slice(0, 8).map((service) => (
                <div
                  key={service.id}
                  className="transition-all duration-900 hover:scale-105 hover:shadow-none"
                >
                  <OtherServiceCard
                    image={service.image}
                    title={service.title}
                    price={service.price}
                    description={service.description}
                    featured={service.featured}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
