import React from "react";
import { Circle } from "lucide-react";

interface InfiniteScrollBannerProps {
  mainBackgroundImage: string;
  overlayBackgroundImage: string;
  items: {
    text: string;
    showCircleAfter?: boolean;
  }[];
  scrollSpeed?: "slow" | "medium" | "fast";
  textStyle?: React.CSSProperties;
  circleStyle?: React.CSSProperties;
  overlayHeight?: string;
}

const InfiniteScrollBanner: React.FC<InfiniteScrollBannerProps> = ({
  mainBackgroundImage,
  overlayBackgroundImage,
  items,
  scrollSpeed = "medium",
  textStyle = {
    fontFamily: "Open Sans",
    // fontSize: "80px",
    lineHeight: "120%",
    color: "#333",
  },
  circleStyle = {
    fill: "#333",
    width: "30px",
    height: "30px",
    margin: "0 32px",
  },
  overlayHeight = "",
}) => {
  const speedClasses = {
    slow: "animate-infinite-scroll-slow",
    medium: "animate-infinite-scroll",
    fast: "animate-infinite-scroll-fast",
  };

  return (
    <section
      className="relative h-[373px] lg:h-[748px] bg-no-repeat bg-center lg:bg-top bg-cover  lg:bg-full"
      style={{
        width: "100%",
        height: "",
        backgroundImage: `url(${mainBackgroundImage})`,
      }}
    >
      <div
        className="absolute bottom-0 bg-no-repeat bg-center bg-cover h-[100px] lg:h-[148px]"
        style={{
          width: "100%",
          height: overlayHeight,
          backgroundImage: `url(${overlayBackgroundImage})`,
        }}
      >
        <div className="overflow-hidden relative">
          <div
            className={`whitespace-nowrap ${speedClasses[scrollSpeed]} flex items-center`}
          >
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="inline-flex items-center justify-center mx-1 lg:py-6 py-3"
              >
                {items.map((item, index) => (
                  <React.Fragment key={index}>
                    <span
                      style={textStyle}
                      className="ml-4 font-normal lg:text-[80px] text-6xl  leading-[120%] text-[#161613] items-center justify-center"
                    >
                      {item.text}
                    </span>
                    {item.showCircleAfter && (
                      <Circle style={circleStyle} className="shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteScrollBanner;
