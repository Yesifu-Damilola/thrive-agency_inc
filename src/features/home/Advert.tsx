"use client";

import InfiniteScrollBanner from "@/components/reusable/Advert";

const Advert = () => {
  const items = [
    { text: "Social Media Strategy", showCircleAfter: true },
    { text: "Paid Advertising", showCircleAfter: true },
    { text: "Content Creation", showCircleAfter: true },
  ];
  return (
    <section>
      <InfiniteScrollBanner
        mainBackgroundImage="/images/paidadvert.svg"
        overlayBackgroundImage="/images/advertbg.png"
        items={items}
      />
    </section>
  );
};

export default Advert;
