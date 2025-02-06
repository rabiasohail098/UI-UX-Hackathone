"use client";

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import Filterproduct from "../components/filterproduct";


const Sidebar2 = () => {
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
    const data1 = datas.slice(0, 4)
    const data2 = datas.slice(4, 10)
    const data3 = datas.slice(11,16)
  return (
      <div>
            <aside className="w-[350px] px-4 md:w-1/3 flex flex-col gap-8">
        {/* Filter Section */}
        <div className="space-y-4">
          <Filterproduct/>
          <div className="border w-[300px] border-gray-400 rounded-lg p-4">
            <h2 className="font-bold text-lg mb-4">Category</h2>
            <ul className="space-y-2">
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
              {/* recent post */}
              <div className="w-[300px]">
          <h2 className="font-bold text-lg mb-4">Recent Products</h2>
          <ul className="space-y-4 border w-[300px] border-gray-400 rounded-lg p-4">
            {data3.map((item: any) => (
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
        {/* Filter by Price */}
        <div className="w-[300px]">
          <h2 className="font-bold w-[300px] text-lg mb-2">Filter By Price</h2>
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
                  <div className="mt-8 border w-[260px] border-gray-400 rounded-md p-4">
          <h2 className="text-lg font-bold mb-4">Photo Gallery</h2>
          <div className="grid grid-cols-3 gap-2">
            {data2.map((items:any) => (
            <div key={items._id}>
                    <Link href={`/products/${items._id}`}>
<<<<<<< HEAD
                    <Image
=======
                    <Image 
>>>>>>> e50712b74b973cb3013cb6ccd4bc1ba70e81e7c3
                  src={urlFor(items.image).url()}
                    alt="Gallery"
                    width={200}
                    height={200}
                  className="w-[80px] h-[60px] object-cover rounded-lg cursor-pointer" />
                    </Link>
                </div>
              )
            )}
          </div>
        </div>

        {/* Follow Us */}
        <div className="mt-8 border border-gray-400 rounded-md p-4 text-center">
          <h1 className="text-lg font-bold mb-4">Follow Us</h1>
          <div className="flex justify-center gap-4 text-xl text-gray-800">
            <Link href="https://www.linkedin.com/in/rabia-sohail-684740278/"><FaLinkedin /></Link>
            <Link href="https://github.com/rabiasohail098"><IoLogoGithub /></Link>
            <Link href="www.youtube.com/@Parniya098"><FaYoutube /></Link>
            <Link href="https://www.instagram.com/rabiasohail642/"><FaInstagram /></Link>
            <Link href="https://www.facebook.com/parniyasohail098"><FaFacebook /></Link>
          </div>
        </div>
      </div>
              
              
      </aside>
    </div>
  )
}

export default Sidebar2