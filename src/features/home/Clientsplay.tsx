// import Shania from "/images/Shania.png";
// import Schema from "/images/Schema.jpeg";
// import Joe from "/images/Joe.jpeg";
// import Daniela from "/images/Daniela.jpg";
"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import "animate.css";
import Image from "next/image";

const ClientDisplay = () => {
  const { ref, inView } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`flex items-center gap-2 ${
        inView ? "animate-bounce-less" : "opacity-0"
      }`}
    >
      <div className="flex -space-x-3">
        <div className="relative z-0 w-9 h-9 overflow-hidden rounded-full border-2 border-white">
          <Image
            src="/images/Shania.png"
            alt="Shania"
            className="w-8 h-8 object-cover"
            width={32}
            height={32}
          />
        </div>
        <div className="relative z-10 w-9 h-9 overflow-hidden rounded-full border-2 border-white">
          <Image
            src="/images/Schema.jpeg"
            alt="Schema"
            className="w-8 h-8 object-cover"
            width={32}
            height={32}
          />
        </div>
        <div className="relative z-20 w-9 h-9 overflow-hidden rounded-full border-2 border-white">
          <Image
            src="/images/Joe.png"
            alt="Joe"
            className="w-8 h-8 object-cover"
            width={32}
            height={32}
          />
        </div>
        <div className="relative z-30 w-9 h-9 overflow-hidden rounded-full border-2 border-white">
          <Image
            src="/images/Daniela.jpg"
            alt="Daniela"
            className="w-8 h-8 object-cover"
            width={32}
            height={32}
          />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p className="font-bold text-3xl  text-success-200">225+</p>
        <p className="font-normal text-lg text-success-100">Clients</p>
      </div>
    </div>
  );
};
export default ClientDisplay;
