"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { OtherServiceItem } from "@/components/constant/OtherServiceItem";
import { OtherServiceCard } from "./OtherServiceCard";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "animate.css";

interface SlideProps {
  children?: React.ReactNode;
  onNext?: () => void;
  onPrevious?: () => void;
  showNavigation?: boolean;
}

const OtherServices = ({
  children,
  onNext: externalOnNext,
  onPrevious: externalOnPrevious,
  showNavigation = true,
}: SlideProps) => {
  const { ref, inView } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, OtherServiceItem.length - itemsPerPage);

  const handleNext = () => {
    const nextIndex = Math.min(currentIndex + 1, maxIndex);
    setCurrentIndex(nextIndex);
    if (externalOnNext) externalOnNext();
  };

  const handlePrevious = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(prevIndex);
    if (externalOnPrevious) externalOnPrevious();
  };

  const canGoNext = currentIndex < maxIndex;
  const canGoPrevious = currentIndex > 0;

  return (
    <section ref={ref} className="w-full bg-success-700 relative">
      <div className="wrapper py-[100px] space-y-[10px] relative z-10">
        <div className="w-full max-w-[1164px] space-y-10 flex flex-col items-center justify-center mx-auto">
          <div className="w-full space-y-4 ">
            <div className="space-y-1">
              <div className="w-[38px] h-[2px] rounded-[50px] bg-success-500 my-2 ml-10"></div>
              <h3
                className={`font-open-sans font-bold text-base leading-[120%] bg-gradient-to-r from-success-300 to-success-400 text-transparent bg-clip-text tracking-wide ${
                  inView ? "animate-bounce-less" : "opacity-0"
                }`}
              >
                OTHER SERVICES
              </h3>
            </div>
            <div className="w-full flex items-center justify-between">
              <h1 className="font-open-sans font-bold text-[40px] leading-[130%] text-dark-200">
                Enjoy Our Extra Services
              </h1>
              {showNavigation && (
                <div className="flex gap-3">
                  <button
                    onClick={handlePrevious}
                    className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                      canGoPrevious
                        ? " cursor-pointer"
                        : " cursor-not-allowed opacity-50"
                    }`}
                    aria-label="Previous slide"
                    disabled={!canGoPrevious}
                  >
                    <ArrowLeft className="w-[52px] h-[52px] p-3 rounded-full text-white bg-success-100" />
                  </button>
                  <button
                    onClick={handleNext}
                    className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                      canGoNext
                        ? "cursor-pointer"
                        : " cursor-not-allowed opacity-50"
                    }`}
                    aria-label="Next slide"
                    disabled={!canGoNext}
                  >
                    <ArrowRight className="w-[52px] h-[52px] p-3 rounded-full text-white bg-success-100" />
                  </button>
                </div>
              )}
            </div>
            {children && <div className="w-full">{children}</div>}
          </div>

          <div className="w-full flex gap-5 overflow-auto py-2 px-1 lg:p-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <div
              className="flex gap-5 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 363}px)` }}
            >
              {OtherServiceItem.map((service) => (
                <div
                  key={service.id}
                  className="min-w-[343px] w-full transition-all duration-600 hover:scale-105 hover:shadow-none"
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

export default OtherServices;
