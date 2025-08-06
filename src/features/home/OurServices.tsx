"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "animate.css";
import { useRouter } from "next/navigation";

interface ServiceItem {
  img: string;
  title: string;
}

const OurServices = () => {
  const navigate = useRouter();
  const { ref, inView } = useScrollAnimation();

  const services: ServiceItem[] = [
    { img: "/images/content.png", title: "Content Creation" },
    { img: "/images/advertising.png", title: "Shopify Store Design" },
    { img: "/images/website.png", title: "Social Media Management" },
  ];

  return (
    <section
      ref={ref}
      className="w-full bg-[url('/images/genbackground.png')] bg-cover bg-center"
    >
      <div className="wrapper px-4 lg:px-4 py-8 md:py-16 space-y-4 md:space-y-[10px]">
        <div className="w-full max-w-[1164px] rounded-3xl md:rounded-[40px] p-6 md:p-10 bg-success-700 mx-auto overflow-hidden">
          <div className="max-w-[1084px] mx-auto space-y-6 md:space-y-8">
            {/* Top Row */}
            {/* Title Section */}
            <div
              className={`w-full lg:w-[340px] block md:hidden space-y-4 ${
                inView ? "animate__animated animate__backInDown" : "opacity-0"
              }`}
            >
              <div className="w-[38px] h-[2px] rounded-[50px] bg-success-500 my-2 lg:ml-10"></div>
              <h4
                className={`font-open-sans font-bold text-sm md:text-base leading-[120%] bg-gradient-to-r from-success-300 to-success-400 text-transparent bg-clip-text ${
                  inView ? "animate-bounce-less" : "opacity-0"
                }`}
              >
                OUR SERVICES
              </h4>
              <h2 className="font-open-sans font-bold text-2xl sm:text-3xl md:text-[40px] leading-[130%] text-dark-200">
                Our Creative Agency Expertise
              </h2>
            </div>
            <div className="w-full lg:w-[1084px] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 md:gap-8">
              {/* Service Card */}
              <div
                className={`w-full block sm:hidden lg:block lg:w-[712px] lg:h-[238px] bg-gradient-to-b from-success-100 to-success-800  rounded-2xl border p-4 space-y-3 ${
                  inView ? "animate__animated animate__backInDown" : "opacity-0"
                } `}
              >
                <Image
                  src="/images/socialmediaicon.png"
                  alt="socail media"
                  className="w-12 h-12"
                  width={48}
                  height={48}
                />
                <h3 className="font-open-sans font-bold text-lg md:text-xl leading-[120%] text-white">
                  Social Media Strategy
                </h3>
                <p className="font-open-sans font-normal text-base md:text-xl leading-[160%] text-white">
                  Our services is the best you will ever find if you truly want
                  sales, growth, and success
                </p>
                <a
                  href="#"
                  className="font-open-sans font-bold text-base md:text-lg leading-[99%] text-success-500"
                >
                  Learn more
                </a>
              </div>

              {/* Title Section */}
              <div
                className={`w-full lg:w-[340px] lg:h-[149px] hidden md:block space-y-5 ${
                  inView
                    ? "animate__animated animate__fadeInTopRight"
                    : "opacity-0"
                } `}
              >
                <div className="w-[38px] h-[2px] rounded-[50px] bg-success-500 my-2 lg:ml-10"></div>
                <h4
                  className={`font-open-sans font-bold text-sm md:text-base leading-[120%] bg-gradient-to-r from-success-300 to-success-800 bg-clip-text text-transparent ${
                    inView ? "animate-bounce-less" : "opacity-0"
                  }`}
                >
                  OUR SERVICES
                </h4>
                <h2 className="font-open-sans font-bold text-2xl sm:text-3xl md:text-[40px] leading-[130%] text-dark-200">
                  Our Creative Agency Expertise
                </h2>
              </div>
            </div>

            {/* Bottom Row - Services */}
            <div className="w-full flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5 items-center justify-center">
              <div
                className={`w-full sm:w-full lg:w-[348px] rounded-2xl p-4 space-y-3 bg-success-100 hidden sm:block lg:hidden from-success-100 border ${
                  inView
                    ? "animate__animated animate__fadeInBottomLeft"
                    : "opacity-0"
                }`}
              >
                <Image
                  src="/images/socialmediaicon.png"
                  alt="social media"
                  className="w-12 h-12"
                  width={48}
                  height={48}
                />
                <h3 className="font-open-sans font-bold text-lg md:text-xl leading-[120%] text-white">
                  Social Media Strategy
                </h3>
                <p className="font-open-sans font-normal text-base md:text-lg leading-[160%] text-white">
                  Our services is the best you will ever find if you truly want
                  sales, growth, and success
                </p>
                <a
                  href="#"
                  className="font-open-sans font-bold text-base md:text-lg leading-[99%] text-success-500"
                >
                  Learn more
                </a>
              </div>
              {services.map((service, id) => (
                <div
                  key={id}
                  className={`w-full sm:w-full lg:w-[348px] rounded-2xl p-4 space-y-3 bg-success-100 ${
                    inView ? "animate__animated animate__backInUp" : "opacity-0"
                  }`}
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    className="w-12 h-12"
                    width={48}
                    height={48}
                  />
                  <h3 className="font-open-sans font-bold text-lg md:text-xl leading-[120%] text-white">
                    {service.title}
                  </h3>
                  <p className="font-open-sans font-normal text-base md:text-lg leading-[160%] text-white">
                    Our services is the best you will ever find if you truly
                    want sales, growth, and success
                  </p>
                  <a
                    href="#"
                    className="font-open-sans font-bold text-base md:text-lg leading-[99%] text-success-500"
                  >
                    Learn more
                  </a>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="flex items-center justify-center">
              <Button
                className="p-4 rounded-lg cursor-pointer"
                onClick={() => navigate.push("/ourservices")}
              >
                All Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
