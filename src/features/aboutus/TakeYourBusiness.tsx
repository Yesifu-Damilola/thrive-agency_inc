"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "../../components/ui/button";
import { socialmedia } from "../../components/constant/TrustedByItems";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/navigation";

export const TakeYourBusiness = () => {
  const navigate = useRouter();
  return (
    <section className="w-full bg-[url('/images/genbackground.png')] bg-cover bg-no-repeat relative py-8 md:py-16 space-y-2.5 px-4 sm:px-6">
      <div className="w-full max-w-[1164px] rounded-[20px] md:rounded-[40px] p-5 md:p-[40px] space-y-2.5 bg-success-700 items-center justify-center mx-auto overflow-hidden">
        <div className="w-full space-y-6 md:space-y-8">
          {/* Trusted By Section */}
          <Fade direction={"top-right"}>
            <div className="w-full overflow-hidden rounded-[8px] lg:rounded-2xl border-[0.5px] lg:border p-2 sm:p-[6.51px] lg:p-3 border-dark-200/15 bg-success-1100">
              <div className="flex items-center">
                <p className="font-bold text-sm sm:text-lg lg:text-xl leading-[99%] text-white shrink-0">
                  Trusted by:
                </p>
                <div className="inline-flex flex-nowrap overflow-hidden">
                  <div className="flex animate-infinite-scroll">
                    {socialmedia.map((company, index) => (
                      <span
                        key={index}
                        className="font-open-sans font-normal text-sm sm:text-sm lg:text-base leading-[99%] text-white py-1 px-2 sm:py-[4.34px] sm:px-[6.51px] lg:py-2 lg:px-3 whitespace-nowrap"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <div className="w-full flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-[530px] space-y-4">
              <Fade direction={"down"}>
                <Image
                  src="/images/takebusiness.png"
                  alt="Take your business"
                  className="w-full h-auto"
                  width={530}
                  height={354}
                />
              </Fade>
              <Fade direction={"up"}>
                <Image
                  src="/images/nextlevel.png"
                  alt="Next Level"
                  className="w-full h-auto"
                  width={530}
                  height={354}
                />
              </Fade>
            </div>

            <div className="w-full lg:w-[530px] space-y-4 md:space-y-6">
              <Fade direction={"top-left"}>
                <h1 className="w-full font-bold text-2xl sm:text-3xl md:text-[40px] leading-[130%] text-dark-200">
                  We Take Your Business to the Next Level
                </h1>
              </Fade>

              <Fade direction={"up"}>
                <p className="font-normal text-base md:text-xl leading-[160%] text-dark-200">
                  About Us At Thrive Agency, we&#39;re eCommerce growth experts
                  who specialize in turning online stores into unstoppable sales
                  machines. From pixel-perfect Shopify design to CRO strategies
                  that actually convert, we bring the skills, the tools, and the
                  experience to help your brand thrive in a fiercely competitive
                  digital market. We partner with eCommerce founders, DTC
                  brands, and growth-stage businesses that are serious about
                  scaling.
                </p>
              </Fade>
              <Fade direction={"down"}>
                <p className="font-normal text-base md:text-xl leading-[160%] text-dark-200">
                  Whether you&#39;re stuck at 5K/month or pushing past 100K+,
                  we&#39;ll meet you where you are-and push you further. We
                  don&#39;t sell shiny websites or trendy hacks. We build
                  eCommerce ecosystems designed to convert, retain, and
                  grow-consistently. We prioritize building meaningful,
                  long-lasting relationships with our clients. impressive
                  results.
                </p>
              </Fade>
              <div>
                <Fade direction={"up"}>
                  <Button
                    width=""
                    onClick={() => navigate.push("/ourservices")}
                    className="w-[188px] lg:w-[282px] rounded-lg p-4 flex gap-[6.51px] lg:rounded-xl lg:py-5 lg:px-8 lg:gap-3 cursor-pointer"
                  >
                    All Services
                    <ArrowRight />
                  </Button>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
