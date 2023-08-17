"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import MobileNav from "./MobileNav";

import { tools } from "@/Tools";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav className="w-full py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Image
            width={180}
            height={50}
            src={"/etools-logo.png"}
            alt="etools logo"
          />
          <div className="hidden">
            <ul className="flex items-center gap-10">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="w-[320px] hidden md:block">
            <form>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50"
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-light-blue-400 hover:bg-light-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          {isMobile ? (
            <GrClose size={24} onClick={() => setIsMobile(false)} />
          ) : (
            <RxHamburgerMenu
              size={24}
              className="md:hidden"
              onClick={() => setIsMobile(true)}
            />
          )}
        </div>
      </nav>
      <div className="w-full  border bottom-1 top-1 px-4 py-3 bg-brand-dark-400 text-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-start gap-10">
          {tools.map((tool, i) => (
            <Link
              href={tool.url}
              key={i}
              className="flex items-center gap-3 hover:text-light-blue-400"
            >
              {tool.icon}
              {tool.name}
            </Link>
          ))}
        </div>
      </div>
      {isMobile && <MobileNav tools={tools} />}
    </>
  );
};

export default Navbar;
