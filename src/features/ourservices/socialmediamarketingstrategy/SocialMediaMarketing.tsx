"use client";

import { useState } from "react";
import Button from "../../../components/ui/button";
// import { useCart } from "../../../context/CartContext";
import { Fade } from "react-awesome-reveal";
import { useCart } from "@/components/context/CartContext";
import Image from "next/image";

interface ServicePackage {
  name: string;
  price: number;
  image: string;
  services: string[];
  included: number[];
}

export const SocialMediaMarketing = () => {
  const { addToCart } = useCart();

  const packages: Record<string, ServicePackage> = {
    basic: {
      name: "Basic Social Media",
      price: 250,
      image: "/images/basicsocialmedia.png",
      services: [
        "2 platforms",
        "15 days Management",
        "Page/channel evaluation",
        "Content creation",
        "Schedule posts",
        "Reporting",
        "Action plan",
      ],
      included: [0, 1, 2, 3, 4, 5, 6],
    },
    standard: {
      name: "Standard Social Media",
      price: 450,
      image: "/images/standardsocialmedia.jpg",
      services: [
        "4 platforms",
        "30 days Management",
        "Detailed page/channel evaluation",
        "Premium content creation",
        "Advanced post scheduling",
        "Detailed reporting",
        "Strategic action plan",
        "Competitor analysis",
      ],
      included: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    custom: {
      name: "Custom Social Media",
      price: 0,
      image: "/images/customsocialmedia.jpg",
      services: [
        "Platform selection (multiple)",
        "Extended management period",
        "Comprehensive evaluation",
        "Professional content creation",
        "Advanced scheduling",
        "Analytics reporting",
        "Strategic planning",
        "Competitor analysis",
        "Influencer collaboration",
      ],
      included: [],
    },
  };

  const [selectedPackage, setSelectedPackage] = useState<string>("basic");
  const [customSelections, setCustomSelections] = useState<number[]>([]);

  const handlePackageChange = (pkg: string) => {
    setSelectedPackage(pkg);
    if (pkg !== "custom") {
      setCustomSelections([]); // Clear previous custom selection
    }
  };

  const handleCustomSelection = (index: number) => {
    if (selectedPackage !== "custom") return;
    setCustomSelections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const calculateCustomPrice = (): number => {
    const basePrice = 300;
    const servicePrice = customSelections.length * 75;
    return basePrice + servicePrice;
  };

  const currentPackage = packages[selectedPackage];
  const displayPrice =
    selectedPackage === "custom"
      ? calculateCustomPrice()
      : currentPackage.price;

  const handleAddToCart = () => {
    const product = {
      id: selectedPackage,
      name: currentPackage.name,
      price: displayPrice,
      quantity: 1,
      image: currentPackage.image,
      services:
        selectedPackage === "custom"
          ? customSelections.map((i) => currentPackage.services[i])
          : currentPackage.services,
    };

    addToCart(product);
  };

  return (
    <div className="w-full min-h-screen bg-[url('/images/genbackground.png')] bg-cover bg-no-repeat relative py-24 px-4 md:pt-[140px] space-y-2.5  ">
      <div className="w-full lg:max-w-[1164px] sm:w-full rounded-2xl p-1 md:p-[40px] space-y-2.5 bg-success-700 items-center justify-center mx-auto overflow-hidden">
        <div className="w-full rounded-2xl p-4 md:p-6 space-y-5 bg-success-100">
          <div className="flex flex-col lg:flex-row gap-5">
            <Fade direction={"up"}>
              <Image
                src={currentPackage.image}
                alt={currentPackage.name}
                className="w-full lg:w-[508px] h-auto lg:h-[598px] rounded-lg bg-success-700 object-cover"
                width={508}
                height={598}
              />
            </Fade>

            <div className="space-y-5">
              <Fade direction={"up"}>
                <div className="w-full lg:max-w-[508px] rounded-xl p-2 flex flex-row justify-between bg-success-900">
                  {["basic", "standard", "custom"].map((pkg) => (
                    <Button
                      key={pkg}
                      className={`flex-1 min-w-0 mx-1 py-4 rounded-xl font-bold text-sm sm:text-base leading-[99%] cursor-pointer ${
                        selectedPackage === pkg ? "" : "bg-transparent"
                      }`}
                      onClick={() => handlePackageChange(pkg)}
                    >
                      {pkg.charAt(0).toUpperCase() + pkg.slice(1)}
                    </Button>
                  ))}
                </div>
              </Fade>

              <div className="w-full lg:max-w-[508px] space-y-5">
                <Fade direction={"top-right"}>
                  <h2 className="font-bold text-3xl md:text-[40px] leading-[135%] text-white">
                    {currentPackage.name}
                  </h2>

                  <h3 className="font-bold text-2xl md:text-[32px] leading-[99%] text-success-500">
                    ${displayPrice.toLocaleString()}
                  </h3>

                  <div className="space-y-2.5">
                    {currentPackage.services.map((service, index) => (
                      <div key={index} className="flex items-start">
                        {selectedPackage === "custom" ? (
                          <input
                            type="checkbox"
                            checked={customSelections.includes(index)}
                            onChange={() => handleCustomSelection(index)}
                            className="mt-1 h-5 w-5 text-white accent-success-500 focus:ring-success-500 cursor-pointer"
                          />
                        ) : (
                          <div className="mt-1 h-5 w-5 flex items-center justify-center">
                            {currentPackage.included.includes(index) && (
                              <span className="text-green-500">✓</span>
                            )}
                          </div>
                        )}
                        <span className="ml-2 text-white">
                          {service}
                          {selectedPackage === "custom" &&
                            customSelections.includes(index) && (
                              <span className="ml-2 text-success-500">
                                (+$75)
                              </span>
                            )}
                        </span>
                      </div>
                    ))}
                  </div>
                </Fade>
                <div className="pt-1.5">
                  <Fade direction={"bottom-right"}>
                    <Button
                      className="!w-full rounded-lg py-4 lg:py-5 px-8 font-bold text-base md:text-lg leading-[99%] text-dark-100 cursor-pointer"
                      onClick={handleAddToCart}
                      aria-label={`Add to Cart for ${displayPrice.toLocaleString()}`}
                    >
                      Add to Cart - ${displayPrice.toLocaleString()}
                    </Button>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
