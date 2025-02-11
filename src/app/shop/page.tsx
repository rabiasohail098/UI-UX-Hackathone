"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Filterproduct2 from "../components/filterproduct2";
import Sidebar from "../components/sidebar";

const Page = () => {
  const [datas, setDatas] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
      setLoading(false);
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
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row gap-8 mt-16 mb-16">
          {/* Sidebar */}
          

          {/* Main Product Grid */}
          <main className="w-full md:w-3/4">
            <div className="text-center mb-8">
              <h2 className="text-2xl text-orange-500 font-bold">Products</h2>
              <p className="text-gray-500">Explore our wide range of products</p>
            </div>

            {/* Loader */}
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredData.map((item: any) => (
                  <div
                    key={item._id}
                    className="bg-white rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="relative w-full h-56 rounded-md overflow-hidden">
                      <Image
                        alt={item.title}
                        src={urlFor(item.image).url()}
                        layout="fill"
                        objectFit="cover"
                        className="hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.description.substring(0, 50)}...</p>
                      <div className="flex justify-between items-center mt-3">
                        <p className="text-orange-500 font-bold">${item.price}.00</p>
                        <p className="text-gray-500 line-through">${item.price + 6}.00</p>
                      </div>
                      <Link href={`/products/${item._id}`}>
                        <button className="w-full rounded bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600  mt-4 py-2 text-white font-medium">
                          View Product
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
          <div className="md:w-1/4">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
