"use client";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronDown, ChevronUp } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "animate.css";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface FrequentlyAskedQuestionsProps {
  title?: string;
  subtitle?: string;
  faqItems: FaqItem[];
  containerBgColor?: string;
  itemBgColor?: string;
  textColor?: string;
  borderColor?: string;
  accentColor?: string;
  FaqItems?: string;
}

const FrequentlyAskedQuestions = ({
  title = "Frequently Asked Questions",
  subtitle = "FAQS",
  faqItems,
  containerBgColor = "bg-success-700",
  itemBgColor = "bg-success-300",
  textColor = "text-dark-200",
  borderColor = "border-success-500",
}: FrequentlyAskedQuestionsProps) => {
  const { ref, inView } = useScrollAnimation();
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Simulate loading state for demonstration (replace with real loading logic if needed)
  const loading = !faqItems || faqItems.length === 0;

  return (
    <section
      ref={ref}
      className="w-full bg-cover bg-center bg-[url('/images/genbackground.png')]"
    >
      <div className="wrapper py-16 px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="space-y-5">
            <Skeleton className="h-8 w-1/2 mb-4" />
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-20 w-full mb-4" />
            ))}
          </div>
        ) : (
          <div
            className={`rounded-[40px] py-6 px-4 md:p-10 ${containerBgColor} max-w-6xl mx-auto space-y-8`}
          >
            <div className="max-w-2xl space-y-5 text-center mx-auto">
              <div>
                <div className="w-[38px] h-[2px] rounded-[50px] bg-success-500 mx-auto my-2"></div>
                {subtitle && (
                  <h2
                    className={`font-open-sans font-bold text-base leading-[120%] bg-gradient-to-r from-success-300 to-success-400 text-transparent bg-clip-text ${
                      inView ? "animate-bounce-less" : "opacity-0"
                    }`}
                  >
                    {subtitle}
                  </h2>
                )}
              </div>
              <h1
                className={`font-open-sans font-bold text-3xl md:text-4xl leading-[120%] text-center text-dark-200 ${textColor}`}
              >
                {title}
              </h1>
            </div>
            <div className="space-y-5">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className={`${
                    inView ? "animate__animated animate__zoomIn" : "opacity-0"
                  } w-full rounded-2xl border py-4 px-3 md:py-6 md:px-5 space-y-3 ${itemBgColor} ${borderColor}`}
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleItem(item.id)}
                  >
                    <h4
                      className={`font-open-sans font-bold text-lg md:text-xl leading-[120%] text-white ${textColor}`}
                    >
                      {item.question}
                    </h4>
                    <span className={`text-white ${textColor}`}>
                      {openItems[item.id] ? <ChevronUp /> : <ChevronDown />}
                    </span>
                  </div>
                  {openItems[item.id] && (
                    <p
                      className={`font-open-sans font-normal text-base md:text-xl leading-[160%] text-white ${textColor}`}
                    >
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
