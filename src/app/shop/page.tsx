"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Filterproduct from "../components/filterproduct";
import Sidebar from "../components/sidebar";

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
    {/* Hero Section */}
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
  
      {/* Main Content */}
      <div className="md:max-w-[1320px]">
      <div className="container  mt-16 mb-16 flex flex-col md:flex-row gap-8 px-8">
         {/* Main Product Grid */}
      <main className="w-full md:w-3/4 px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl text-orange-500 font-bold">Products</h2>
          <p className="text-gray-500">Explore our wide range of products</p>
          </div>
          <div className="mt-[10px] mb-[100px] ">
            <div className="lg:flex md:w-3/4 w-full px-8 gap-4">
              
         <Filterproduct/>
            <div className="flex mt-4  h-[46px]">
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
                    href="/category"
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
            </div>
        <div className="grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item: any) => (
            <div key={item.title} className="bg-white w-[230px] rounded-lg shadow-md p-4">
                <Image
                  alt={item.title}
                  src={urlFor(item.image).url()}
                  width={300}
                  height={200}
                  className="object-cover w-[240px] h-[200px]"
                />
              <div className="mt-4 w-[200px]">
                <h3 className="font-bold">{item.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-orange-500 font-bold">${item.price}.00</p>
                  <p className="text-gray-500 line-through">${item.price + 6}.00</p>
                  </div>
                <Link href={`/products/${item._id}`}>
                  <button className=" w-[200px] bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 mt-4">
                    View Product
                  </button>
                </Link>
              </div>
              </div>
             
              
          ))}
        </div>
      </main>
      {/* Sidebar */}
    <Sidebar/>
  
      </div>
    </div>
  </>
  
  );
};

export default Page;
