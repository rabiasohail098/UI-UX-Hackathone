"use client";

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Filterproduct from "../components/filterproduct";

const Page = () => {
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
    <>
     <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Our Shop</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            › Our Shop
          </p>
        </div>
      </section>

    <div className="md:max-w[1920px] mt-32 mb-16 flex flex-col md:flex-row gap-8  mx-auto px-4">
     <div className="md:max-w-[1320px] flex md:flex-row flex-col px-12">
      <div className="mt-[10px] mb-[100px] ">
        <div className="lg:flex px-8 gap-4">
         <Filterproduct/>
            <div className="flex w-[332px] h-[46px]">
            <div className="dropdown dropdown-right">
              <div className="flex gap-2 justify-between px-[50px] w-[236px] h-[40px] border py-2 text-gray-500">
                <h1>Categories:</h1>
                <h1 tabIndex={0} role="button" className="">
                  <IoIosArrowDown className="pt-[5px] text-xl" />
                </h1>
              </div>
              <div
                tabIndex={0}
                className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow-lg bg-white"
              >
                {uniqueCategories.map((item) => (
                  <Link
                    href={item.category.trim().replace(/\s+/g, "-")}
                    key={item._id}
                  >
                    <h1 className="text-[14px] py-2 flex justify-center hover:bg-gray-300 rounded-lg">
                      {item.category}
                    </h1>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[20px] mb-[20px] lg:px-[20px]">
          <section className="text-gray-600 body-font">
            <div className="container ">
           
              <div className="md:max-w-[984px] px-4 w-full grid grid-cols-1 md:grid-cols-3 gap-6 -m-4">
                {filteredData.map((items: any) => (
                  <div key={items.title} className="shadow-md p-2 w-full m-4 rounded-lg">
                    <a className="block relative h-48 rounded overflow-hidden">
                    
                      <Image
                        alt="ecommerce"
                        className="object-cover w-[300px] h-[200px] "
                        src={urlFor(items.image).url()}
                        width={200}
                        height={200}
                      />
                    </a>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {items.title}
                      </h2>
                      <div className="flex py-2 justify-between px-[15px]">
                        <p className="text-[17px] text-bordercoloryello font-bold">
                          ${price+6}.00
                        </p>
                        <div className="flex gap-2">
                          <p className="line-through font-semibold text-red-600">
                            ${items.price}
                          </p>
                         
                        </div>
                      </div>
                      <Link href={`/products/${items._id}`}>
                        <button className="mt-2 w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                          View Product
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="w-[312px] md:h-[418px]">
         <Filterproduct/>
          <ul className="space-y-2 px-4 border-[1px] border-gray-400 my-6 py-4">
            <h2 className="font-helvetica text-[20px] font-bold mt-2">
              Category
              </h2>
              {datas.map((items: any) => (
                <ul key={items._id} className="space-y-2 px-4  my-4">
                  <Link href={`/products/${items._id}`}>
                  <li className="flex gap-2">
                    <input type="checkbox" />
                    {items.title}
                    </li>
                  </Link>
                </ul>
              ))}
     </ul>
          <div className="bg-[url(/images/shop.png)] p-4 mt-4 bg-cover w-[248px] h-[286px] ">
            <p className="font-inter font-bold text-[16px] w-[105px] text-[#FFFFFF]">
              {" "}
              Perfect Taste
            </p>
            <h2 className="font-helvetica font-bold text-[20px] w-[181px] text-[#FFFFFF]">
              Classic Restaurant
            </h2>
            <p className="font-helvetica font-bold text-[16px] w-[58px] text-[#FF9F0D]">
              $45.00
            </p>
            <p className="flex gap-2 w-full h-[24px] mt-32">
              <button className="font-inter text-[16px]  text-[#FFFFFF]">
                Shop Now
              </button>
              <IoArrowForwardCircleOutline
                size={20}
                className="text-[#FFFFFF] mt-1"
              />
              <button />
            </p>
          </div>
          <h2 className="font-helvetica text-[20px] font-bold mt-2 mb-2">
            Filter By Price
          </h2>
          <div className="w-[248px] h-[11px] rounded-[4px] bg-[#ff9f0d] mb-2"></div>
          <p className="font-inter text-[14px] w-[105px] text-[#333333] mb-2">
            {" "}
            Perfect Taste
          </p>
          <h2 className="font-helvetica text-[20px] font-bold mt-2 mb-2">
            Latest Products
          </h2>
            <div className=" w-[252px] mb-2 space-y-2">
              {data1.map((item:any)=>(
            <div className="flex items-center gap-4" key={item._id}>
              <div className="object-cover w-[72px] h-16 relative">
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  width={100}
                  height={100}
                  className=" w-[72px] h-[65px]"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#333333] ">
                {item.title}
                </h3>
                <div className="flex w-[63px] gap-1 mb-1 h-[9px]">
                  <FaStar size={10} className="text-[#FF9F0D] " />
                  <FaStar size={10} className="text-[#FF9F0D] " />
                  <CiStar size={10} />
                  <CiStar size={10} />
                  <CiStar size={10} />
                </div>
                    <p className="text-orange-500">$ {item.price}.00</p>
              </div>
            </div>
                ))}
          
          
            <h2 className="font-helvetica text-[20px] font-bold mt-2 mb-2">
              Product Tags
            </h2>
            <div className="w-[225px] h-[24px] gap-2 flex">
              <p className="font-inter font-bold text-[16px]  hover:text-[#FF9F0D] hover:underline  text-[#333333]">
                Services
              </p>
                <Link href="/menu">
                <p className="font-inter font-bold text-[16px] hover:text-[#FF9F0D] hover:underline text-[#333333]">
                Our Menu
                  </p>
                </Link>
            </div>
              <div className="w-[225px] h-[24px] gap-2 flex">
             
                <Link href="/category">
                <p  className="font-inter font-bold text-[16px]  hover:text-[#FF9F0D] hover:underline text-[#333333]">
                Cupcake
                  </p>
                </Link>
                 
                <Link href="/category">
                <p className="font-inter font-bold text-[16px] hover:underline hover:text-[#333333] text-[#FF9F0D]">
                Burger
              </p>
                </Link>
                <Link href="/category">
                <p className="font-inter font-bold text-[16px]   hover:text-[#FF9F0D] hover:underlinetext-[#333333]">
                Cookies
                  </p>
                </Link>
            </div>
            <div className="w-[225px] h-[24px] gap-2 flex">
                <Link href="/shop">
                <p className="font-inter font-bold text-[16px]  hover:text-[#FF9F0D] hover:underline text-[#333333]">
                Our Shop
              </p></Link>
                <Link href="/category">
                <p className="font-inter font-bold text-[16px] hover:text-[#FF9F0D] hover:underline text-[#333333]">
                Tandoori Chicken
              </p>
                </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
      </>
  );
};

export default Page;
