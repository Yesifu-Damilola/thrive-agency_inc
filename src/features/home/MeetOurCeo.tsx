"use client";

import Image from "next/image";
import { socialmedia } from "@/components/constant/TrustedByItems";
// import agencylogo from "/images/agencylogo.png";
// import ceoimage from "/images/ceoimage.png";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "animate.css";

const MeetOurCeo = () => {
  const { ref, inView } = useScrollAnimation();
  return (
    <section ref={ref} className="w-full bg-success-700">
      <div className="wrapper h-auto lg:h-[657px] py-12 md:py-[100px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1164px] flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 mx-auto overflow-hidden">
          {/* Text Content - Now comes second on mobile */}
          <div className="w-full lg:w-[596px] space-y-6 md:space-y-10">
            <div
              className={`w-full space-y-6 md:space-y-8 ${
                inView ? "animate__animated animate__slideInLeft" : "opacity-0"
              }`}
            >
              <div className="w-[38px] h-[2px] rounded-[50px] bg-success-500 my-2 ml-4 sm:ml-10"></div>
              <div className="w-full max-w-[474px] space-y-4 md:space-y-5">
                <h3
                  className={`font-open-sans font-bold text-sm sm:text-base leading-[120%] bg-gradient-to-r from-success-300 to-success-400 text-transparent bg-clip-text ${
                    inView ? "animate-bounce-less" : "opacity-0"
                  }`}
                >
                  MEET OUR CEO
                </h3>
                <h2 className="font-open-sans font-bold text-2xl sm:text-3xl md:text-[40px] leading-[130%] text-dark-200">
                  Our Creative Agency Expertise
                </h2>
              </div>
              <p className="w-full lg:w-[505px] font-open-sans font-normal text-base md:text-xl leading-[160%] text-dark-200">
                Our services are the best you will ever find if you truly want
                sales, growth, and success. We don’t just deliver results — we
                partner with you to elevate your brand, expand your reach, and
                turn your vision into measurable impact. With a focus on
                innovation, strategy, and consistency, we help you stand out in
                a crowded market and achieve long-term success.
              </p>
            </div>

            {/* Trusted By Section */}
            <div className="lg:w-full w-full overflow-hidden rounded-[8.68px] lg:rounded-2xl border-[0.54px] lg:border px-[6.51px] py-2.5 lg:p-2.5 border-dark-200/15">
              <div className="flex items-center">
                <p className="font-bold text-sm sm:text-lg lg:text-xl leading-[99%] text-dark-200 py-[4.34px] px-[6.51px] lg:py-2 lg:px-3 shrink-0">
                  Trusted by:
                </p>
                <div className="inline-flex flex-nowrap overflow-hidden">
                  <div className="flex animate-infinite-scroll items-center">
                    {socialmedia.map((company, index) => (
                      <span
                        key={index}
                        className="font-open-sans font-normal text-sm lg:text-base leading-[99%] text-dark-200 py-[4.34px] px-[6.51px] lg:py-2 lg:px-3"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content - Now comes first on mobile */}
          <div
            className={`${
              inView ? "animate__animated animate__flash" : "opacity-0"
            } w-full lg:w-[520px] h-full sm:h-full rounded-2xl lg:h-[453px]  lg:rounded-[100px] bg-success-300 relative flex items-center justify-center `}
          >
            <Image
              src="/images/ceoprofileimg.png"
              alt="ceo image"
              className="w-full h-full object-contain "
              width={520}
              height={453}
            />
            <Image
              src="/images/agencylogo.png"
              alt="agency logo"
              className="absolute bottom-0 "
              width={251.13}
              height={294}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurCeo;
