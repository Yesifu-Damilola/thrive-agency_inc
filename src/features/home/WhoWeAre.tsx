"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
// import whoweareimg from "/images/whoweareimg.png";
import Button from "@/components/ui/button";
import { socialmedia } from "@/components/constant/TrustedByItems";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "animate.css";
import { useRouter } from "next/navigation";

const WhoWeAre = () => {
  const navigate = useRouter();
  const { ref, inView } = useScrollAnimation();
  return (
    <section ref={ref} className="w-full bg-success-700">
      <div className="wrapper py-12 lg:py-[100px] px-4 sm:px-6 lg:px-8 space-y-2.5 overflow-hidden">
        <div className="lg:w-[1164px] w-full flex flex-col lg:flex-row gap-8 lg:gap-12 mx-auto">
          {/* Image Container */}
          <div className="w-full lg:w-[520px] h-[300px] sm:h-[453px] lg:h-[453px] flex items-center justify-center mx-auto">
            <Image
              src="/images/whoweareimg.png"
              alt="who we are image"
              className={`w-full h-full object-cover rounded-[50px]  lg:rounded-[100px] ${
                inView ? "animate__animated animate__fadeInDown" : "opacity-0"
              } `}
              width={520}
              height={453}
            />
          </div>

          {/* Content Container */}
          <div
            className={`w-full lg:w-[596px] space-y-6 lg:space-y-5  ${
              inView ? "animate__animated animate__fadeInTopRight" : "opacity-0"
            }`}
          >
            <div className="w-full space-y-6 md:space-y-4">
              <div className="w-[38px] h-[2px] rounded-[50px] bg-success-500 my-2 ml-4 sm:ml-10"></div>
              <div className="w-full max-w-[474px] space-y-4 md:space-y-3">
                <h3
                  className={`font-open-sans font-bold text-sm sm:text-base leading-[120%] bg-gradient-to-r from-success-300 to-success-400 text-transparent bg-clip-text ${
                    inView ? "animate-bounce-less" : "opacity-0"
                  }`}
                >
                  WHO WE ARE
                </h3>
                <h2 className="font-open-sans font-bold text-2xl sm:text-3xl md:text-[40px] leading-[130%] text-dark-200">
                  We Take Your Business to the Next Level
                </h2>
              </div>
              <p className="w-full max-w-[505px] font-open-sans font-normal text-base md:text-xl leading-[160%] text-dark-200">
                You bring the vision. We bring the skills to execute it. Whether
                you’re launching something new or leveling up what already
                exists, Thrive Agency is your one-stop powerhouse for building
                brands that break through.
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

            {/* Buttons */}
            <div className="flex gap-3">
              <Button
                className="text-base p-4 rounded-lg flex gap-[6.51px] sm:w-full cursor-pointer"
                onClick={() => navigate.push("/aboutus")}
              >
                About us
                <ArrowRight className="w-5 h-5" />
              </Button>

              <a
                href="https://wa.me/2348160178065"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-[216px]" // Ensures link matches button width
              >
                <Button
                  width=""
                  color=""
                  className="w-[216px] text-base p-4 rounded-lg border-[0.54px] text-success-100 border-success-100 cursor-pointer"
                >
                  Chat Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
