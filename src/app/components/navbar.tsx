import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from 'next/link';
const Header = () => {
  return (
    <header className="relative max-w-full bg-[#0D0D0D] h-[90px]">
      <div className="absolute max-w-full mt-[15px] bg-[#0D0D0D] w-full flex-wrap flex justify-between items-center px-4 sm:px-8 h-[32px]">
        <div className="max-w-[109px]">
          <h2 className="font-helvetica font-bold text-[20px] sm:text-[24px] text-[#ffffff]">
   Food<span className="text-[#FF9F0D]">Luck</span>
          </h2>
        </div>
        <div className="hidden sm:flex max-w-[508px]">
          <ul className="flex gap-2 sm:gap-4">
            <li className="font-bold font-helvetica text-[#FF9F0D] text-[14px] sm:text-[16px]"><Link href="/">Home</Link></li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]"><Link href="/manu">Menu</Link></li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">Blog</li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
              Pages
            </li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
              About
            </li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
              Shop
            </li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex gap-3">
          <IoIosSearch
            size="20px"
            className="text-[#ffffff] sm:text-[24px]"
          />
         <Link href="/singup">
         <LuUserRound
            size="20px"
            className="text-[#ffffff] sm:text-[24px]"
          /></Link>
          <HiOutlineShoppingBag
            size="20px"
            className="text-[#ffffff] sm:text-[24px]"
          />
        </div>
      </div>
    </header>
  )
}

export default Header