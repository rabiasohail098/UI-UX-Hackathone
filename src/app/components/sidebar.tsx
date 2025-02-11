"use client";

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import Filterproduct from "../components/filterproduct";


const Sidebar = () => {
     const [datas, setDatas] = useState<any[]>([]);
      const [filteredData, setFilteredData] = useState<any[]>([]);
      const [searchQuery, setSearchQuery] = useState("");
    
      useEffect(() => {
        const fetchData = async () => {
          const result = await client.fetch(`*[_type == "foods"]{
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
          setDatas(result);
          setFilteredData(result);
        };
        fetchData();
      }, []);
     
      const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = datas.filter(
          (item) =>
            item.title?.toLowerCase().includes(query) ||
            item.description?.toLowerCase().includes(query) ||
            item.category?.toLowerCase().includes(query)
        );
        setFilteredData(filtered);
      };
    
      const uniqueCategories = datas.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.category === item.category)
      );
      const price = Math.floor(Math.random()*100)
      const data1 = datas.slice(0,4)
  return (
      <div>
            <aside className="w-[250px] px-4 md:w-1/4 flex flex-col gap-8">
        {/* Filter Section */}
        <div className="space-y-4">
          <Filterproduct />
          <div className="border w-[300px] border-gray-400 rounded-lg p-4">
            <h2 className="font-bold text-lg mb-4">Category</h2>
            <ul className="space-y-2 w-[300px]">
              {datas.map((item: any) => (
                <li key={item._id} className="flex items-center gap-2">
                  <input type="checkbox" />
                  <Link href={`/products/${item._id}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Promotional Section */}
        <div className="bg-cover w-[300px] bg-center rounded-lg p-4 h-72" style={{ backgroundImage: "url('/images/shop.png')" }}>
          <p className="text-white text-lg font-bold">Perfect Taste</p>
          <h2 className="text-white text-2xl font-bold">Classic Restaurant</h2>
          <p className="text-orange-500 text-lg font-bold">$45.00</p>
          <Link href="/shop" className="flex items-center mt-4 text-white">
            Shop Now
            <IoArrowForwardCircleOutline size={20} className="ml-2" />
          </Link>
        </div>
  
        {/* Filter by Price */}
        <div className="w-[300px]">
          <h2 className="font-bold w-[250px] text-lg mb-2">Filter By Price</h2>
          <div className="h-2 bg-orange-500 rounded mb-4"></div>
        </div>
  
        {/* Latest Products */}
        <div className="w-[300px]">
          <h2 className="font-bold text-lg mb-4">Latest Products</h2>
          <ul className="space-y-4 border w-[300px] border-gray-400 rounded-lg p-4">
            {data1.map((item: any) => (
              <li key={item._id} className="flex items-center gap-4">
                <Link href={`/products/${item._id}`}>
                  <div className="flex items-center gap-4">
                <Image src={urlFor(item.image).url()} alt={item.title} width={72} height={72} className="rounded-lg h-[72px] w-[72px]" />
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar size={12} />
                    <FaStar size={12} />
                    <FaStar size={12} />
                    <CiStar size={12} />
                    <CiStar size={12} />
                  </div>
                  <p className="text-orange-500">${item.price}.00</p>
                    </div>
                    </div>
                  </Link>
              </li>
            ))}
          </ul>
        </div>
<div className="border w-[300px] border-gray-400 rounded-lg p-4">
        <h2 className="font-helvetica text-[20px] font-bold mt-2 mb-2">
              Product Tags
            </h2>
            <div className="w-[300px] h-[24px] gap-2 flex">
              <p className="font-inter font-bold text-[16px]  hover:text-[#FF9F0D] hover:underline  text-[#333333]">
                Services
              </p>
              <p className="font-inter font-bold text-[16px] hover:text-[#FF9F0D] hover:underline text-[#333333]">
                Our Menu
              </p>
            </div>
            <div className="w-[300px] h-[24px] gap-2 flex">
              <p className="font-inter font-bold text-[16px]  hover:text-[#FF9F0D] hover:underline text-[#333333]">
                Cupcake
              </p>
              <p className="font-inter font-bold text-[16px] hover:underline hover:text-[#333333] text-[#FF9F0D]">
                Burger
              </p>
              <p className="font-inter font-bold text-[16px]   hover:text-[#FF9F0D] hover:underlinetext-[#333333]">
                Cookies
              </p>
            </div>
            <div className="w-[300px] h-[24px] gap-2 flex">
              <p className="font-inter font-bold text-[16px]  hover:text-[#FF9F0D] hover:underline text-[#333333]">
                Our Shop
              </p>
              <p className="font-inter font-bold text-[16px] hover:text-[#FF9F0D] hover:underline text-[#333333]">
                Tandoori Chicken
              </p>
            </div>
            </div>
      </aside>
    </div>
  )
}

export default Sidebar