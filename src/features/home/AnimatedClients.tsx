"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "animate.css";

const AnimatedClients = () => {
  const { ref, inView } = useScrollAnimation();
  const [count, setCount] = useState(0);
  const targetCount = 2000;

  useEffect(() => {
    // Animation duration in milliseconds
    const duration = 3000;
    // Number of steps in the animation
    const steps = 50;
    // Time between each step
    const stepTime = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      // Calculate the new count based on easing function
      const progress = current / steps;
      // Easing function: ease-out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const newCount = Math.min(
        Math.floor(easedProgress * targetCount),
        targetCount
      );

      setCount(newCount);

      if (current >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.6,
      },
    },
  };

  return (
    <div
      ref={ref}
      className={`py-1 lg:px-2 rounded-lg items-center justify-center mx-auto ${
        inView ? "animate__animated animate__bounceIn" : "opacity-0"
      }`}
    >
      <div className="flex items-center justify-center">
        <motion.p
          className="font-bold text-3xl text-success-500"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {count}+
        </motion.p>
      </div>
      <div className="items-center justify-center">
        <motion.p
          className="font-medium lg:text-xl text-base text-success-700 mt-2"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Client Engagement
        </motion.p>
      </div>
    </div>
  );
};
export default AnimatedClients;
