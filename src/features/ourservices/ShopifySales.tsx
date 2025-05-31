"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "../../components/ui/button";
import { tabContents } from "../../components/constant/tabcontents";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "animate.css";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/navigation";

// Define tab types for type safety
type TabType =
  | "website"
  | "search-engine"
  | "social-media"
  | "logo-design"
  | "banner-design";

// Sample interface for proper typing
interface Sample {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageAlt: string;
  imageUrl: string;
  isPrimary?: boolean;
}

export const ShopifySales: React.FC = () => {
  const navigate = useRouter();
  const { ref, inView } = useScrollAnimation();
  // State to track the active tab
  const [activeTab, setActiveTab] = useState<TabType>("website");

  // Function to handle tab switching
  const handleTabChange = (tab: TabType): void => {
    setActiveTab(tab);
  };

  // Function to determine if a tab is active
  const isActiveTab = (tab: TabType): boolean => activeTab === tab;

  // Get current tab content
  const currentContent = tabContents[activeTab];

  // Function to get tab label based on tab type
  const getTabLabel = (tabType: TabType): string => {
    switch (tabType) {
      case "website":
        return "Website";
      case "search-engine":
        return "Search Engine";
      case "social-media":
        return "Social Media";
      case "logo-design":
        return "Logo Design";
      case "banner-design":
        return "Banner Design";
      default:
        return "Tab";
    }
  };

  // Function to render a tab button
  const renderTabButton = (tabType: TabType): React.ReactNode => {
    return (
      <Button
        key={tabType}
        className={`rounded-xl py-4 md:py-3 px-3 md:px-4 text-sm md:text-base leading-[99%] whitespace-nowrap flex-1 ${
          isActiveTab(tabType)
            ? "bg-gradient-to-b from-success-500 to-success-1000"
            : "bg-success-900 hover:bg-light-300"
        }`}
        onClick={() => handleTabChange(tabType)}
      >
        {getTabLabel(tabType)}
      </Button>
    );
  };

  // Function to render sample cards
  const renderSampleCard = (sample: Sample, index: number): React.ReactNode => {
    return (
      <div
        key={index}
        className={`w-full rounded-2xl p-4 space-y-3 ${
          sample.isPrimary
            ? "bg-gradient-to-b from-success-100 to-success-800"
            : "bg-success-100"
        }`}
      >
        <div className="w-full h-[164px] rounded-lg bg-success-700 overflow-hidden">
          <Image
            src={sample.imageUrl || "/placeholder.svg"}
            alt={sample.imageAlt}
            className="w-full h-full object-cover"
            width={48}
            height={48}
          />
        </div>
        <h3 className="font-bold text-lg md:text-xl leading-[120%] text-white">
          {sample.title}
        </h3>
        <p className="font-normal text-base md:text-lg lg:text-xl leading-[160%] text-white line-clamp-3">
          {sample.description}
        </p>
        <a
          href={sample.linkUrl}
          className="font-bold text-base md:text-lg leading-[99%] text-success-500 inline-block"
        >
          {sample.linkText}
        </a>
      </div>
    );
  };

  return (
    <section
      ref={ref}
      className="w-full bg-[url('/images/genbackground.png')] bg-cover bg-no-repeat relative py-8 md:py-12 lg:py-16 px-4 md:px-6 space-y-2 overflow-hidden"
    >
      <div className="w-full max-w-[1164px] rounded-2xl md:rounded-[40px] p-4 md:p-6 lg:p-[40px] space-y-2.5 bg-success-700 items-center justify-center mx-auto">
        <div className="w-full space-y-4 md:space-y-6 lg:space-y-8">
          {/* Navigation tabs - responsive with flex-wrap */}
          <div
            className={`w-full  ${
              inView ? "animate__animated animate__zoomIn" : "opacity-0"
            }`}
          >
            <div className="w-full rounded-xl px-2 py-3 bg-success-900 flex flex-wrap gap-2">
              {/* Render tab buttons using the function */}
              {(
                [
                  "website",
                  "search-engine",
                  "social-media",
                  "logo-design",
                  "banner-design",
                ] as TabType[]
              ).map((tab) => renderTabButton(tab))}
            </div>
          </div>

          {/* Description section for mobile - shows below tabs */}
          <div className="w-full lg:hidden space-y-4 mb-4">
            <div
              className={` ${
                inView ? "animate__animated animate__backInDown" : "opacity-0"
              }`}
            >
              <h1 className="font-bold text-2xl md:text-3xl leading-[130%] text-dark-200">
                {currentContent.title}
              </h1>
              <p className="font-normal text-[17px] md:text-lg leading-[160%] text-dark-200">
                {currentContent.description}
              </p>
            </div>
            <div
              className={`${
                inView ? "animate__animated animate__zoomIn" : "opacity-0"
              }`}
            >
              <Button
                onClick={() => {
                  console.log("Navigating...");
                  navigate.push("/socialmediamarketingstrategy");
                }}
                className="lg:w-full sm:w-auto w-[193.51px] rounded-lg p-4 font-bold lg:text-base text-sm leading-[99%] text-dark-100 flex gap-[6.51px]"
              >
                {currentContent.buttonText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Main content - flex column on mobile, row on desktop */}
          <div className="w-full flex flex-col lg:flex-row gap-5">
            {/* Website samples grid */}

            <div className="w-full lg:w-[60%] flex gap-4">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Fade direction={"up"}>
                  {currentContent.samples.map((sample, index) =>
                    renderSampleCard(sample, index)
                  )}
                </Fade>
              </div>
            </div>

            {/* Description section - hidden on mobile/sm, shown on lg+ */}
            <div className="hidden lg:block lg:w-[40%] space-y-4">
              <div
                className={`${
                  inView ? "animate__animated animate__backInDown" : "opacity-0"
                }`}
              >
                <h1 className="font-bold text-3xl lg:text-[40px] leading-[130%] text-dark-200">
                  {currentContent.title}
                </h1>
                <p className="font-normal text-lg lg:text-xl leading-[160%] text-dark-200">
                  {currentContent.description}
                </p>
              </div>
              <Button
                className={`${
                  inView ? "animate__animated animate__zoomIn" : "opacity-0"
                }`}
                onClick={() => {
                  console.log("Navigating...");
                  navigate.push("/socialmediamarketingstrategy");
                }}
              >
                {currentContent.buttonText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifySales;
