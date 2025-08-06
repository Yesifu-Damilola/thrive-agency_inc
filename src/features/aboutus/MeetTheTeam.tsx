"use client";

import Image from "next/image";
import { teamMembers } from "../../components/constant/team";
import { socialmedia } from "../../components/constant/TrustedByItems";
// import ceoabout from "/images/ceoabout.png";
// import ceoaboutus from "/images/ceoaboutus.png";
import { Fade } from "react-awesome-reveal";

export const MeetTheTeam = () => {
  return (
    <section className="w-full bg-success-700">
      <div className="wrapper py-12 md:py-[100px] space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1164px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 overflow-hidden">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-[calc(50%-24px)] space-y-8 md:space-y-10">
            <div className="w-full space-y-8">
              <div className="w-[38px] h-[2px] rounded-[50px] bg-success-500 my-1 ml-4 sm:ml-10"></div>
              <Fade direction={"down"}>
                <div className="w-full max-w-[474px] space-y-5">
                  <h3 className="font-open-sans font-bold text-sm sm:text-base leading-[120%] text-success-300 to-text-success-400">
                    MEET THE TEAM
                  </h3>
                  <h2 className="font-open-sans font-bold text-2xl sm:text-3xl md:text-[40px] leading-[130%] text-dark-200">
                    Our Creative Agency Experts
                  </h2>
                </div>
                <p className="w-full max-w-[505px] font-open-sans font-normal text-base md:text-xl leading-[160%] text-dark-200">
                  Our services is the best you will ever find if you truly want
                  sales, growth, and success. Our services is the best you will
                  ever find if you truly want sales, growth, and success. Our
                  services is the best you will ever find if you truly want
                  sales, growth, and success
                </p>
              </Fade>
            </div>

            <div className="lg:w-full w-[343px] overflow-hidden rounded-[8.68px] lg:rounded-2xl border-[0.54px] lg:border p-[6.51px] lg:p-3 border-dark-200/15">
              <div className="flex items-center">
                <p className="font-bold text-sm lg:text-base leading-[99%] text-dark-200 py-[4.34px] px-[6.51px] lg:py-2 lg:px-3 shrink-0">
                  Trusted by:
                </p>
                <div className="inline-flex flex-nowrap overflow-hidden">
                  <div className="flex animate-infinite-scroll items-center">
                    {socialmedia.map((company, index) => (
                      <span
                        key={index}
                        className="font-open-sans font-normal text-sm lg:text-base leading-[99%] text-dark-200 py-[4.34px] px-[6.51px] lg:py-2 lg:px-3"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CEO Image */}
          <Fade direction={"down"}>
            <div className="w-full lg:w-[515px] h-auto lg:h-[450px] rounded-[40px] md:rounded-[50px] bg-success-300 relative flex items-center justify-center ">
              <Image
                src="/images/ceoabout.png"
                alt="CEO Image"
                className="lg:w-[400px] w-full h-full rounded-[40px] md:rounded-[100px] object-cover"
                width={420}
                height={453}
              />
              <Image
                src="/images/agencylogo.png"
                alt="agency logo"
                width={200}
                height={260}
                className="lg:w-[200px] lg:h-[155px] w-[160px] h-[110px] absolute lg:bottom-0 bottom-5 lg:left-6 left-0 pb-2"
              />
              <div className="w-full h-[80px] sm:h-[95px] rounded-2xl rounded-bl-full rounded-br-full border-t p-4  space-y-1 sm:space-y-2 bg-success-300 border-success-500 absolute bottom-0 text-center">
                <h4 className="font-bold text-lg sm:text-xl leading-[120%] text-white">
                  Faith Oladurotolu
                </h4>
                <h3 className="font-normal text-base sm:text-xl leading-[160%] text-white">
                  CEO ThriveAgency
                </h3>
              </div>
            </div>
          </Fade>
        </div>

        {/* Team Grid */}

        <div className="max-w-[1164px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[40px] ">
          <Fade direction={"up"}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full lg:w-[520px] h-full sm:h-full rounded-2xl lg:h-[450px]  lg:rounded-[100px] bg-success-300 relative flex items-center justify-center"
              >
                <Image
                  src={member.img}
                  alt={member.role}
                  className="w-full h-full object-contain "
                  width={520}
                  height={453}
                />
                <Image
                  src="/images/agencylogo.png"
                  alt="agency logo"
                  width={200}
                  height={294}
                  className="lg:w-[200px] lg:h-[170px] w-[160px] h-[100px] absolute lg:bottom-0  bottom-5 lg:right-16 right-0"
                />

                <div className="w-full rounded-2xl rounded-bl-full rounded-br-full border-t p-2 sm:p-5 space-y-1 sm:space-y-2 bg-success-300 border-success-500 absolute bottom-0 text-center">
                  <h4 className="font-bold text-lg sm:text-xl leading-[120%] text-white">
                    {member.name}
                  </h4>
                  <h3 className="font-normal text-base sm:text-xl leading-[160%] text-white">
                    {member.role}
                  </h3>
                </div>
              </div>
            ))}
          </Fade>
        </div>
        <div className="w-full lg:w-[520px] h-full sm:h-full rounded-2xl lg:h-[450px]  lg:rounded-[100px]  relative  bg-success-300  mx-auto">
          <Image
            src="/images/digitalmarketing.png"
            alt="Digital Marketing"
            className="w-full h-full object-contain "
            width={520}
            height={453}
          />
          <Image
            src="/images/agencylogo.png"
            alt="agency logo"
            width={200}
            height={294}
            className="lg:w-[200px] lg:h-[170px] w-[160px] h-[100px] absolute lg:bottom-0  bottom-5 lg:right-20 right-0"
          />
          <div className="w-full rounded-2xl rounded-bl-full rounded-br-full border-t p-2 sm:p-5 space-y-1 sm:space-y-2 bg-success-300 border-success-500 absolute bottom-0 text-center">
            <h4 className="font-bold text-lg sm:text-xl leading-[120%] text-white">
              Tobiloba Oladimeji
            </h4>
            <h3 className="font-normal text-base sm:text-xl leading-[160%] text-white">
              Digital Marketing
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
