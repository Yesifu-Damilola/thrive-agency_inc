"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/ourservices", label: "Our Services" },
    { path: "/aboutus", label: "About us" },
    { path: "/testimonials", label: "Testimonials" },
  ];

  return (
    <header className="wrapper fixed z-40 top-2 left-0 right-0 justify-center">
      <nav className="max-w-[1164px] rounded-[50px] flex items-center justify-between px-4 sm:px-6 py-3 opacity-95 bg-light-300 mx-auto">
        <Link href="/">
          <div className="w-[100px] sm:w-[135px] h-[40px] sm:h-[48px]">
            <Image
              src="/images/thrivelogo.png"
              alt="Thrive Logo"
              className="w-full h-full object-contain"
              width={135}
              height={48}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center justify-center">
          <ul className="flex gap-2 lg:gap-5">
            {navItems.map((item) => (
              <li key={item.path} className="py-2 px-2 lg:px-3">
                <a
                  href={item.path}
                  className="font-normal text-sm lg:text-base leading-[99%] text-white-100 font-open-sans hover:text-opacity-80 transition "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Link href="/contact" style={{ textDecoration: "none" }}>
            <Button
              width="120px"
              className="h-[38px] lg:h-[42px] text-dark-100 flex text-center cursor-pointer"
            >
              Contact
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white-100 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="w-full items-center justify-between mx-auto absolute top-full left-0 right-0 bg-light-300 rounded-[50px] py-8 px-6 space-y-4 opacity-[98%] md:hidden z-50">
            <ul className="w-[209px] space-y-5 flex flex-col gap-3 text-center justify-center mx-auto">
              <div className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.path} className="w-full rounded-lg py-4 px-3">
                    <a
                      href={item.path}
                      className="block py-2 px-3 font-normal text-base text-white-100 font-open-sans hover:bg-light-400 rounded-lg transition"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </div>
              <li className="mt-2">
                <Link
                  href="/contact"
                  style={{ textDecoration: "none" }}
                  onClick={toggleMenu}
                >
                  <Button
                    width=""
                    className="w-[209px] h-[48px] text-dark-100 flex items-center justify-center mx-auto cursor-pointer py-4 px-8 rounded-lg"
                  >
                    Contact us
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
