"use client"

import InfiniteScrollBanner from "../../components/reusable/Advert";

export const BusinessStrategy = () => {
  return (
    <InfiniteScrollBanner
      mainBackgroundImage="/images/businessstrategybg.png"
      overlayBackgroundImage="/images/advertbg.png"
      items={[
        { text: "Social Media Strategy", showCircleAfter: true },
        { text: "Paid Advertising", showCircleAfter: true },
        { text: "Content Creation", showCircleAfter: false },
      ]}
    />
  );
};
