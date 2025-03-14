"use client";
import { useState } from "react";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import Image from "next/image";

/**
 * Hamburger component.
 *
 * @returns The rendered Hamburger component.
 */
const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button
        className="navbar-burger flex items-center text-white p-3 flex-row-reverse flex-grow"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="block h-10 w-10 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path
            d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            fill="black"
          ></path>
        </svg>
      </button>
      <div
        className={`${isMenuOpen ? "flex" : "hidden"} absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6`}
      ></div>
      {isMenuOpen && (
        <div className="navbar-menu relative z-50">
          <div
            className="navbar-backdrop fixed inset-0 bg-neutral-800 opacity-75"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 bottom-0 flex flex-col w-4/6 max-w-sm py-6 px-6 bg-neutral-950/90 overflow-y-auto">
            {/* Logo & Close button */}
            <div className="flex items-center mb-8">
              <Link href="/">
                <h1 className="lg:text-2xl font-bold space-x-4 flex items-center font-sansen">
                  <Image
                    src={"/img/UniPro_Logo.webp"}
                    alt="UniProject's Logo"
                    width={50}
                    height={50}
                  />
                  <div>UniProject</div>
                </h1>
              </Link>
              <button
                className="navbar-close ml-14"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              <NavLinks setIsMenuOpen={setIsMenuOpen} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hamburger;
