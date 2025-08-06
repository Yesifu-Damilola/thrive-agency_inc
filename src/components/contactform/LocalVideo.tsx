"use client";

import Image from "next/image";
import type React from "react";
import { useEffect, useRef } from "react";

interface LocalVideoProps {
  className?: string;
  poster?: string;
}

export const LocalVideo: React.FC<LocalVideoProps> = ({
  className,
  // poster,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // This ensures the video loads and plays properly
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <div className={`relative ${className || ""}`}>
      <video
        ref={videoRef}
        className="w-full h-auto"
        controls
        autoPlay
        muted
        loop
        // poster={poster || "/placeholder.svg?height=400&width=800"}
      >
        <source src="/videos/thrive_agencyvideo.mp4" type="video/mp4" />
      </video>

      {/* Fallback image in case video still doesn't load */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 opacity-0 pointer-events-none">
        <Image
          src="/placeholder.svg?height=400&width=800&text=Contact+Us+Video"
          alt="Contact video "
          className="w-full h-auto"
          width={800}
          height={400}
        />
      </div>
    </div>
  );
};
