"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import Button from "@/components/ui/button";
import { socialmedia } from "@/components/constant/TrustedByItems";
import ClientDisplay from "./Clientsplay";
import AnimatedStats from "./AnimatedStats";
import "animate.css";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import AnimatedClients from "./AnimatedClients";

import { useEffect, useState } from "react";
import { SkeletonLoader } from "@/components/reusable/SkeletonLoader";
import { useRouter } from "next/navigation";

const RealExperts = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useRouter();
  const { ref, inView } = useScrollAnimation();
  const text = useTypewriter(
    ["Shopify Design", "Social Media", "SEO	", "Logo Design", "Brand Mgmt."],
    100,
    50,
    1500
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonLoader />;

  return (
    <section
      ref={ref}
      className="w-full bg-[url('/images/homebg.png')] bg-cover bg-no-repeat bg-center"
    >
      <div className="wrapper space-y-10 py-5 ">
        <div className="lg:w-[1164px] w-full pt-28 lg:pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[44px] items-center justify-center mx-auto lg:h-[912px]">
          <div className="lg:w-[596px] w-full space-y-5 lg:space-y-[28px]">
            <div className="w-full space-y-5 lg:space-y-8">
              <h1
                className={`font-open-sans font-bold text-[45px] lg:text-[80px] leading-[120%] text-dark-200 ${
                  inView
                    ? "animate__animated animate__fadeInTopLeft"
                    : "opacity-0"
                }`}
              >
                Real Experts Skilled In
                <p className="font-normal text-success-200">
                  {text}
                  <span className="ml-1 animate-pulse"></span>
                </p>
              </h1>
              <p
                className={`font-open-sans font-normal text-base lg:text-xl leading-[180%] lg:leading-[160%] text-dark-200 w-[323px] lg:w-[505px] ${
                  inView ? "animate__animated  animate__pulse" : "opacity-0"
                }`}
              >
                Our services is the best you will ever find if you truly want
                sales, growth, and success.
              </p>
            </div>

            <div className="md:flex gap-3 hidden">
              <Button
                className="text-base p-4 rounded-lg flex gap-[6.51px] cursor-pointer"
                onClick={() => navigate.push("/ourservices")}
              >
                All Services
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                width=""
                color=""
                onClick={() => navigate.push("/contact")}
                className="w-[216px] text-base sm:text-sm p-4 rounded-lg border-[0.54px] text-success-100 border-success-100 cursor-pointer"
              >
                Contact us
              </Button>
            </div>
            <ClientDisplay />

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
            <div className="flex gap-3 md:hidden">
              <Button className="text-base p-4 rounded-lg flex gap-[6.51px]">
                All Services
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                width=""
                color=""
                className="w-[216px] text-base p-4 rounded-lg border-[0.54px] text-success-100 border-success-100"
                onClick={() => navigate.push("/Contact")}
              >
                Contact us
              </Button>
            </div>
          </div>
          <div className="relative text-center justify-center mx-auto">
            <Image
              src="/images/Coverimage.png"
              alt="Coverimage"
              className={`lg:w-[524px] lg:h-[609px] w-[524px] h-[500px] ${
                inView ? "animate__animated animate__zoomIn" : "opacity-0"
              }`}
              width={524}
              height={609}
            />
            <div className="absolute bottom-0 w-full lg:w-[480px] flex gap-4 items-center justify-center mx-auto bg-light-300 py-1 px-2 rounded-lg lg:ml-5  ">
              <div className="">
                <AnimatedClients />
              </div>
              <div className="h-16 w-1 bg-gray-300 " />
              <div className="">
                <AnimatedStats />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealExperts;
