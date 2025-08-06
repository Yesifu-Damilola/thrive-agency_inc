"use client";

import Image from "next/image";
import { useCart } from "@/components/context/CartContext";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "animate.css";

interface ServiceCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
  featured?: boolean;
}

export const OtherServiceCard = ({
  image,
  title,
  price,
  description,
  featured = false,
}: ServiceCardProps) => {
  const { addToCart } = useCart();
  const { ref, inView } = useScrollAnimation();

  const handleAddToCart = () => {
    //  Sample product data - in a real app this would come from API or props
    const product = {
      id: "1",
      name: "Social Media Pages Setup",
      price: 250,
      quantity: 1,
      image: "/images/placeholder1.png",
    };

    addToCart(product);
  };

  return (
    <div
      ref={ref}
      className={`${
        inView ? "animate__animated animate__zoomIn" : "opacity-0"
      } w-[343px]  rounded-2xl p-4 my-2.5 space-y-3 ${
        featured
          ? "bg-gradient-to-b from-success-100 to-success-800"
          : "bg-success-100"
      }`}
    >
      <Image
        src={image}
        alt={title}
        className="w-full bg-success-700 rounded-[8px]"
        width={316}
        height={164}
      />
      <h2 className="font-open-sans font-bold text-xl leading-[135%] text-white">
        {title}
      </h2>
      <h3 className="font-open-sans font-bold text-[32px] leading-[99%] text-success-500">
        {price}
      </h3>
      <p className="font-open-sans font-normal text-xl leading-[160%] text-white">
        {description}
      </p>

      <div className="w-[158px] rounded-lg py-3 px-7 bg-success-500 flex gap-[10px]">
        <button
          className="font-open-sans font-bold text-lg leading-[99%] text-dark-100 cursor-pointer"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
