"use client";
import React from "react";
import { Montserrat_Alternates } from "next/font/google";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useState } from "react";
const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"], // Supports Latin characters
  weight: ["400", "500", "700"], // Choose the weights you need
  style: ["normal", "italic"], // Optional: Include italics if needed
});
export default function Header() {
  const path = usePathname();
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <>
      <header className=" py-5 items-center justify-center shadow-sm  sticky  top-0 z-[600] bg-white">
        <div className="container">
        <div className="flex justify-between md:justify-center items-center pb-2">
          <h1 className="uppercase text-3xl tracking-wider text-sColor  text-shadow-4d">
            bouncer
          </h1>
          <span className="md:hidden " onClick={() => setOpenNav(!openNav)}>
            <FaBarsStaggered size={20} className="cursor-pointer" />
          </span>
        </div>

        <div className={montserratAlternates.className}>
          <ul
            className={`flex  italic text-sm flex-col md:justify-center md:flex-row   md:gap-4 border border-gray-200  divide-y divide-gray-300 md:divide-y-0 rounded-md md:border-none    transition-all overflow-hidden duration-1000 ${
              openNav ? "h-auto " : "h-0  border-0 md:h-auto"
            }`}
          >
            <li className="px-2 py-2">
              <Link
                href="/"
                className={`block w-full ${
                  path == "/" ? "text-mColor" : ""
                } uppercase`}
              >
                Home
              </Link>
            </li>
            <li className="px-2 py-2">
              <Link
                href="/iphone"
                className={`block w-full ${
                  path == "/iphone" ? "text-mColor" : ""
                } uppercase `}
              >
                iphone
              </Link>
            </li>
            <li className="px-2 py-2">
              <Link
                href="/ipad"
                className={`block w-full ${
                  path == "/ipad" ? "text-mColor" : ""
                } uppercase`}
              >
                ipad
              </Link>
            </li>
            <li className="px-2 py-2">
              <Link
                href="/macbook"
                className={`block w-full ${
                  path == "/macbook" ? "text-mColor" : ""
                } uppercase`}
              >
                macbokk
              </Link>
            </li>
            <li className="px-2 py-2">
              <Link
                href="/accessors"
                className={`block w-full ${
                  path == "/accessors" ? "text-mColor" : ""
                } uppercase`}
              >
                accessors
              </Link>
            </li>
          </ul>
        </div>
        </div>
        
      </header>
    </>
  );
}
