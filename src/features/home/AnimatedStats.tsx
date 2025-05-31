"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "animate.css";

const AnimatedStats = () => {
  const { ref, inView } = useScrollAnimation();
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 430, {
      duration: 4,
      ease: "easeOut",
    });

    return animation.stop;
  }, [count]);

  return (
    <div
      ref={ref}
      className={`py-1 lg:px-2 rounded-lg items-center justify-center mx-auto ${
        inView ? "animate__animated animate__bounceIn" : "opacity-0"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.p className="font-bold text-3xl text-success-500 ">
          <motion.span>{roundedCount}</motion.span>+
        </motion.p>
        <motion.p
          className="font-medium lg:text-xl text-base text-success-700 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Completed Projects
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AnimatedStats;
