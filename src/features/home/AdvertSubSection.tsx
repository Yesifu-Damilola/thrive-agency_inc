"use client";

import { Circle } from "lucide-react";

export const AdvertSubSection = () => {
  return (
    <section
      className="w-full h-[209px] relative overflow-hidden bg-[url('/images/advertbg.png')]"
      style={{
        // backgroundImage: 'url("/images/advertbg.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute insect-0">
        <div className="whitespace-nowrap animate-infinite-scroll flex items-center">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="inline-flex items-center py-6">
              <span className="font-open-sans font-normal text-[60px] leading-[99%] text-dark-500 ml-4">
                Social Media Strategy
              </span>
              <Circle
                width={26}
                height={26}
                className="fill-dark-500 shrink-0 mx-8"
              />
              <span className="font-open-sans font-normal text-[60px] leading-[99%] text-dark-500">
                Paid Advertising
              </span>
              <Circle
                width={26}
                height={26}
                className="fill-dark-500 shrink-0 mx-8"
              />
              <span className="font-open-sans font-normal text-[60px] leading-[99%] text-dark-500">
                Content Creation
              </span>
              <Circle
                width={26}
                height={26}
                className="fill-dark-500 shrink-0 ml-4"
              />
            </span>
          ))}
        </div>
        <div className="whitespace-nowrap animate-infinite-scroll-reverse flex items-center bg-dark-200">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="inline-flex items-center py-6">
              <span className="font-open-sans font-normal text-[60px] leading-[99%]  ml-4 text-white ">
                Social Media Strategy
              </span>
              <Circle
                width={26}
                height={26}
                className="fill-white shrink-0 mx-8"
              />
              <span className="font-open-sans font-normal text-[60px] leading-[99%] text-white">
                Paid Advertising
              </span>
              <Circle
                width={26}
                height={26}
                className="fill-white shrink-0 mx-8"
              />
              <span className="font-open-sans font-normal text-[60px] leading-[99%] text-white">
                Content Creation
              </span>
              <Circle
                width={26}
                height={26}
                className="fill-white shrink-0 ml-4"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
