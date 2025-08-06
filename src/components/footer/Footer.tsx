"use client";

import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

import Image from "next/image";
import Button from "../ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "animate.css";
import { useRouter } from "next/navigation";
import { Tiktok } from "@/assets/icons/Tiktok";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  const { ref, inView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className=""
      style={{
        width: "100%",
        backgroundImage: "url('/images/footerbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="wrapper lg:py-32 py-16 px-4 sm:px-6 lg:px-8 space-y-[10px]">
        <div className="max-w-[1164px] w-full rounded-4xl border-4 py-5 space-y-6 border-light-400 items-center justify-center mx-auto">
          <Image
            src="/images/thrivelogo.png"
            alt="Thrive logo"
            className={`px-5 w-auto h-auto ${
              inView ? "animate-bounce-less" : "opacity-0 "
            }`}
            width={175}
            height={48}
          />

          <hr className="w-full h-1 border-2 text-light-400 " />
          <div className="w-full  items-center flex flex-col lg:flex-row justify-between px-5 space-y-10">
            <div className="lg:w-[481px] w-full lg:space-y-[38px] space-y-8 items-start justify-start">
              <h1 className="font-open-sans font-bold lg:text-[40px] text-[28px] leading-[140%] text-white">
                Let Us Take Your Brand To The Next Level.
              </h1>
              <div className="">
                <Button
                  type="button"
                  className="!w-[188px] lg:!w-[282px] lg:text-lg lg:py-5 lg:px-8 rounded-lg p-4 text-base text-dark-100"
                  onClick={() => router.push("/contact")}
                >
                  Contact us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="lg:w-[559px] w-full rounded-[20px] border-2 p-4 space-y-4 border-light-400">
              <div className="lg:w-[460px] w-full block lg:flex lg:flex-wrap lg:gap-5 gap-3 space-y-5">
                <Link
                  href="/"
                  className="py-2 px-3 font-normal text-base leading-[99%] text-white"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="py-2 px-3 font-normal text-base leading-[99%] text-white"
                >
                  Our Services
                </Link>
                <Link
                  href="/about"
                  className="py-2 px-3 font-normal text-base leading-[99%] text-white"
                >
                  About Us
                </Link>
                <Link
                  href="/testimonials"
                  className="py-2 px-3 font-normal text-base leading-[99%] text-white"
                >
                  Testimonials
                </Link>
              </div>
              <div
                className={`w-full px-2 flex flex-wrap gap-4 ${
                  inView ? "animate-bounce-less" : "opacity-0"
                }`}
              >
                <Link
                  href="https://www.instagram.com/_thriveagency?igsh=Y3hsMW10eGFwd3pq"
                  className="border rounded-full border-success-500"
                >
                  <Instagram className="w-10 h-10  p-2 text-success-500" />
                </Link>
                <Link
                  href="https://www.facebook.com/thriveagency1"
                  className="border rounded-full border-success-500"
                >
                  <Facebook className="w-10 h-10  p-2 text-success-500" />
                </Link>
                <Link
                  href="#"
                  className="border rounded-full border-success-500"
                >
                  <Linkedin className="w-10 h-10  p-2 text-success-500" />
                </Link>
                <Link
                  href="#"
                  className="border rounded-full border-success-500"
                >
                  <Twitter className="w-10 h-10  p-2 text-success-500" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@thriveagency1?_t=ZT-8xfLnKiW685&_r=1"
                  className="border rounded-full border-success-500"
                >
                  <Tiktok className="w-10 h-10 text-success-500" />
                </Link>
                <Link
                  href="#"
                  className="hidden md:block border rounded-full border-success-500"
                >
                  <Youtube className="w-10 h-10  p-2 text-success-500" />
                </Link>
              </div>
              <div className="lg:w-[502] w-full py-2 px-3 space-y-[10px]">
                <h3 className="font-open-sans font-bold text-base leading-[140%] text-white">
                  Most Active Time
                </h3>
                <p className="font-open-sans font-normal text-base lg:leading-[140px] leading-[160%] text-white">
                  Monday – Friday 09:00 am – 04:00 pm Saturday – 1:00 – 5:00 pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark-200 ">
        <div className="max-w-[1144px] w-full flex flex-col sm:flex-row items-center justify-between mx-auto py-4 sm:px-6 lg:px-8 gap-2 sm:gap-0">
          <p className="font-open-sans font-normal text-sm leading-[30px] text-white">
            © 2025 Thrive Agency. Copyright and rights reserved
          </p>
          <p className="font-open-sans font-normal text-sm leading-[100%] text-white">
            Terms of Service
            <span className="text-white mx-3"> &#8226; </span>
            Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
