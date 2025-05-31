"use client";

import { useInView } from "react-intersection-observer";

interface ScrollAnimationHook {
  ref: (node?: Element | null) => void;
  inView: boolean;
}

const useScrollAnimation = (threshold: number = 0.35): ScrollAnimationHook => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: false, // Animates on both scroll up and down
  });

  return { ref, inView };
};

export default useScrollAnimation;
