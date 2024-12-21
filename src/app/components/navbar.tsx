import React from "react";
import { IoIosSearch } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="relative max-w-[1920px] w-full bg-[#0D0D0D] h-[90px]">
      <div className="absolute max-w-full mt-[15px] bg-[#0D0D0D] w-full flex justify-between items-center px-4 sm:px-8 h-[32px]">
        <div className="max-w-[109px]">
          <h2 className="font-helvetica font-bold text-[20px] sm:text-[24px] text-[#ffffff]">
            Food<span className="text-[#FF9F0D]">Luck</span>
          </h2>
        </div>
        <div className="hidden md:flex max-w-[508px]">
          <ul className="flex gap-2 sm:gap-4">
            <li className="font-bold font-helvetica text-[#FF9F0D] text-[14px] sm:text-[16px]">
              <Link href="/">Home</Link>
            </li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
              <Link href="/faq">Pages</Link>
            </li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
              <Link href="/about">About</Link>
            </li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
              <Link href="/singin">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden sm:ml-[400px] ml-16">
          <Sheet>
            <SheetTrigger>
              <Menu className="text-white" size={24} />
            </SheetTrigger>
            <SheetContent>
              <ul className="flex flex-col text-[#ffffff] md:flex-row gap-4 p-4">
                <li className="font-bold font-helvetica text-[#FF9F0D] text-[14px] sm:text-[16px]">
                  <Link href="/">Home</Link>
                </li>
                <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
                  <Link href="/menu">Menu</Link>
                </li>
                <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
                  <Link href="/pages">Pages</Link>
                </li>
                <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
                  <Link href="/about">About</Link>
                </li>
                <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
                  <Link href="/shop">Shop</Link>
                </li>
                <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
                  <Link href="/singin">Contact</Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex gap-3">
          <IoIosSearch size="20px" className="text-[#ffffff] sm:text-[24px]" />
          <Link href="/singup">
            <LuUserRound
              size="20px"
              className="text-[#ffffff] sm:text-[24px]"
            />
          </Link>
          <Link href="/shoppingcart">
            <HiOutlineShoppingBag
              size="20px"
              className="text-[#ffffff] sm:text-[24px]"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
