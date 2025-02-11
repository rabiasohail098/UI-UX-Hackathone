
"use client";

import { useState, useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { UserButton, useUser } from "@clerk/nextjs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { HeartIcon, User2, User2Icon } from "lucide-react";


const Nav = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(`*[_type == "foods"]{
        _id,
        title,
        category,
        price,
        originalPrice,
        image,
        description,
        available,
        tags
      }`);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Filtering products by both name and _id
  const filteredProducts = products.filter(
    (product) =>
      product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product._id?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="w-full flex flex-col lg:px-[100px] px-[20px] bg-[#0D0D0D]  text-white lg:py-[20px] py-[10px]">
        <div className="hidden lg:flex justify-between items-center">
          <ul className="text-whitetext flex gap-[10px] font-medium leading-[24px] text-[15px]">
            <Link href={"/"}>
              <li className="w-[45px] h-[24px] font-medium leading-[24px]">Home</li>
            </Link>
            <Link href={"/menu"}>
              <li className="w-[45px] h-[24px] font-medium leading-[24px]">Menu</li>
            </Link>
            <Link href={"/blog"}>
              <li className="w-[45px] h-[24px] font-medium leading-[24px]">Blog</li>
            </Link>
            <Link href={"/chef"}>
              <li className="w-[45px] h-[24px] font-medium leading-[24px]">Chef</li>
            </Link>
            <Link href={"/about"}>
              <li className="w-[45px] h-[24px] font-medium leading-[24px]">About</li>
            </Link>
            <Link href={"/shop"}>
              <li className="w-[45px] h-[24px] font-medium leading-[24px]">Shop</li>
            </Link>
            <Link href={"/sign-in"}>
              <li className="w-[45px] h-[24px] font-medium leading-[24px]">Signin</li>
            </Link>
            <Link href={"/sign-up"}>
              <li className="w-[45px] h-[24px] font-medium leading-[24px]">Signup</li>
            </Link>
                  </ul>
                  <div className="max-w-[109px] pb-[30px]">
          <h2 className="font-helvetica font-bold text-[20px] sm:text-[24px] text-[#ffffff]">
            Food<span className="text-[#FF9F0D]">Tuck</span>
          </h2>
        </div>
          <div className="flex items-center gap-[15px] pt-2">
            {/* Search Bar */}
            <div>
              <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-bordercoloryello rounded-2xl">
                <input
                  type="text"
                  placeholder="Search by name or ID..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="bg-transparent outline-none  text-[14px] placeholder:text-whitetext w-full"
                />
                <IoSearch className="text-whitetext w-[20px] h-[20px]" />
              </div>
              {searchQuery && filteredProducts.length > 0 && (
                <div className="absolute bg-white w-[240px] mt-1 border border-gray-300 rounded-md shadow-lg z-10">
                  <ul>
                    {filteredProducts.map((product: any) => (
                      <li
                        key={product.title}
                        className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
                      >
                        <Link href={`/products/${product._id}`}>{product.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link href="/addtocart">
              <div className="relative">
                <HiOutlineShoppingBag className="text-whitetext text-[24px] cursor-pointer" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>

            <Link href="/wishlist">
              <div className="relative">
                <HeartIcon className="text-whitetext text-[24px] cursor-pointer" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>

            <a href="">
              <div className="relative mt-2">
                  <Image src="/images/dash.png" alt="icon" width={100} height={100} className="w-[28px] h-[28px] cursor-pointer"/>               
              </div>
            </a>
            
            <Link href="/sign-in">
              <div className="relative mt-3">
                <span className="text-whitetext text-[28px]  cursor-pointer">
                <UserButton/>
                </span>
              </div>
            </Link>

           
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex justify-between px-[30px]">
          <Sheet>
            <SheetTrigger>
              <GiHamburgerMenu className="text-whitetext text-[34px] cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <ul className="flex flex-col gap-[10px] font-medium text-[16px] text-orange-500">
                <Link href={"/"}>
                  <li className="font-medium hover:text-bordercoloryello">Home</li>
                </Link>
                <Link href={"/menu"}>
                  <li className="font-medium hover:text-bordercoloryello">Menu</li>
                </Link>
                <Link href={"/blog"}>
                  <li className="font-medium hover:text-bordercoloryello">Blog</li>
                </Link>
                <Link href={"/chef"}>
                  <li className="font-medium hover:text-bordercoloryello">Chef</li>
                </Link>
                <Link href={"/about"}>
                  <li className="font-medium hover:text-bordercoloryello">About</li>
                </Link>
                <Link href={"/shop"}>
                  <li className="font-medium hover:text-bordercoloryello">Shop</li>
                </Link>
                <Link href={"/sign-in"}>
              <li className="w-[45px] h-[24px] font-medium leading-[24px]">Signin</li>
            </Link>
            <Link href={"/sign-up"}>
              <li className="w-[45px] h-[24px] font-medium leading-[24px]">Signup</li>
            </Link>
              </ul>
              <div>
              <div className="flex mt-4 items-center gap-[10px] px-[15px] py-[5px] border border-bordercoloryello rounded-2xl">
                <input
                  type="text"
                  placeholder="Search by name or ID..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="bg-transparent outline-none  text-[14px] placeholder:text-whitetext w-full"
                />
                <IoSearch className="text-orange-500 w-[20px] h-[20px]" />
              </div>
              {searchQuery && filteredProducts.length > 0 && (
                <div className="absolute bg-white w-[240px] mt-1 border border-gray-300 rounded-md shadow-lg z-10">
                  <ul>
                    {filteredProducts.map((product: any) => (
                      <li
                        key={product.title}
                        className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
                      >
                        <Link href={`/products/${product._id}`}>{product.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              </div>
              <div className="flex gap-6">
              <Link href="/addtocart">
              <div className="relative mt-4">
                <HiOutlineShoppingBag className="text-whitetext text-orange-500 text-[24px] cursor-pointer" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>

            <Link href="/wishlist">
              <div className="relative mt-4">
                <HeartIcon className="text-whitetext text-orange-500 text-[24px] cursor-pointer" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
                </Link>

                <Link href="/sign-in">
              <div className="relative mt-3">
                <span className="text-whitetext text-[28px]  cursor-pointer">
                <UserButton/>
                </span>
              </div>
            </Link>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Nav;
