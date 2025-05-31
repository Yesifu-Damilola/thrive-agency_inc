"use client";

import Image from "next/image";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "animate.css";

interface CardItem {
  img: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  backgroundColor?: string;
  containerBgColor?: string;
  accentColor?: string;
  cardBgColor?: string;
  title?: string;
  subtitle?: string;
  featuredCard?: CardItem;
  cards?: CardItem[];
}

const WhyChooseUs = ({
  backgroundColor = "bg-success-700",
  containerBgColor = "bg-success-700",
  accentColor = "bg-success-500",
  cardBgColor = "bg-success-300",
  title = "Progress With Thrive Agency",
  subtitle = "WHY CHOOSE US",
  featuredCard = {
    img: "/images/chartLinup.png",
    title: "Results-Driven",
    description:
      "Our services are designed to deliver measurable outcomes. We focus on strategic growth initiatives that directly impact your bottom line, driving sales and long-term success.",
  },
  cards = [
    {
      img: "/images/lightbulb.png",
      title: "Creativity Unleashed",
      description:
        "Our innovative approach combines cutting-edge techniques with creative thinking to develop unique solutions that set your brand apart in the market.",
    },
    {
      img: "/images/arrowsin.png",
      title: "Tailored Strategies",
      description:
        "We develop customized plans that align with your specific goals and industry needs, ensuring that every strategy we implement is uniquely crafted for your business.",
    },
    {
      img: "/images/squaresfour.png",
      title: "Top Quality",
      description:
        "Excellence is our standard. We maintain rigorous quality control processes to ensure that every deliverable exceeds expectations and reflects positively on your brand.",
    },
  ],
}: WhyChooseUsProps) => {
  const { ref, inView } = useScrollAnimation();
  return (
    <section
      ref={ref}
      className={`w-full bg-cover bg-no-repeat bg-center bg-[url('/images/genbackground.png')] ${backgroundColor}`}
    >
      <div className="wrapper lg:py-16 py-14 space-y-2 lg:space-y-[10px] ">
        <div className="max-w-[1164px] lg:rounded-[40px]  mx-auto overflow-hidden">
          <div
            className={`${containerBgColor} rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl transform transition-all`}
          >
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
              {/* Left Column - Title */}
              <div
                className={`w-full lg:w-[340px] space-y-5 ${
                  inView
                    ? "animate__animated animate__fadeInTopLeft"
                    : "opacity-0"
                }`}
              >
                <div
                  className={`w-[38px] h-[2px] rounded-[50px] ${accentColor} my-2 ml-10`}
                ></div>
                <h4
                  className={`font-open-sans font-bold text-base leading-[120%] bg-gradient-to-r from-success-300 to-success-400 text-transparent bg-clip-text ${
                    inView ? "animate-bounce-less" : "opacity-0"
                  }`}
                >
                  {subtitle}
                </h4>
                <h2 className="font-bold text-3xl lg:text-[40px] leading-[130%] text-dark-200">
                  {title}
                </h2>
              </div>

              {/* Right Column - Featured Card (Desktop) */}
              <div
                className={`w-full lg:w-[712px] hidden md:block bg-success-300 t rounded-2xl p-5 shadow-lg transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] ${
                  inView
                    ? "animate__animated animate__slideInDown"
                    : "opacity-0"
                }`}
              >
                <div className="flex flex-col space-y-4">
                  <div
                    className={`flex items-center justify-center h-16 w-16 rounded-xl ${accentColor}/20 mb-2`}
                  >
                    <Image
                      src={featuredCard.img}
                      alt="featured card"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3 className="font-bold text-xl md:text-2xl text-white">
                    {featuredCard.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-green-100">
                    {featuredCard.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`${cardBgColor} rounded-2xl p-5 shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] ${
                    inView ? "animate__animated animate__zoomIn" : "opacity-0"
                  } `}
                >
                  <div className="flex flex-col space-y-4">
                    <div
                      className={`flex items-center justify-center h-16 w-16 rounded-xl ${accentColor}/20 mb-2`}
                    >
                      <Image
                        src={card.img}
                        alt={card.title}
                        width={100}
                        height={100}
                      />
                    </div>
                    <h3 className="font-bold text-xl text-white">
                      {card.title}
                    </h3>
                    <p className="font-normal text-base leading-relaxed text-green-100">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Featured Card (Mobile) */}
              <div
                className={`w-full lg:w-[712px] md:hidden bg-success-300 rounded-2xl p-5 shadow-lg transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] ${
                  inView ? "animate__animated animate__rotateIn" : "opacity-0"
                }`}
              >
                <div className="flex flex-col space-y-4">
                  <div
                    className={`flex items-center justify-center h-16 w-16 rounded-xl ${accentColor}/20 mb-2`}
                  >
                    <Image
                      src={featuredCard.img}
                      alt={featuredCard.title}
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3 className="font-bold text-xl md:text-2xl text-white">
                    {featuredCard.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-green-100">
                    {featuredCard.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
