export const SkeletonLoader = () => {
  return (
    <section className="bg-white ">
      <div className="wrapper space-y-10 py-5 animate-pulse">
        <div className="lg:w-[1164px] w-full pt-28 lg:pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[44px] items-center justify-center mx-auto lg:h-[912px]">
          {/* Left column */}
          <div className="lg:w-[596px] w-full space-y-5 lg:space-y-[32px]">
            <div className="w-full space-y-5 lg:space-y-8">
              <div className="h-20 lg:h-60 bg-gray-200 rounded w-3/4"></div>
              <div className="h-15 bg-gray-200 rounded w-[80%]"></div>
              <div className="flex gap-4">
                <div className="h-15 w-52 bg-gray-200 rounded"></div>
                <div className="h-15 w-52 bg-gray-200 rounded"></div>
              </div>
              <div className="h-14 bg-gray-200 rounded w-[60%]"></div>
              <div className="h-15 bg-gray-200 rounded w-full"></div>
            </div>
          </div>

          {/* Right column */}
          <div className="relative flex flex-col gap-6 items-center">
            <div className="h-[400px] lg:w-[524px] lg:h-[609px] w-full bg-gray-200 rounded-tl-[90px] rounded-tr-[90px]"></div>
            <div className="flex gap-4 justify-center absolute bottom-0">
              <div className="w-full lg:w-[260px] h-20 bg-gray-200 rounded-lg"></div>
              <div className="w-full lg:w-[260px] h-20 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
