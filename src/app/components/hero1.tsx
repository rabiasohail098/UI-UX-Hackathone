"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

const Hero1 = () => {
  const [data1, setData1] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type=="foods"]{
          _id,
          "imageUrl":image.asset->url
        }`;
        const data = await client.fetch(query);
        setData1(data.slice(0, 3)); // Get the first three items
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="w-full bg-[#0D0D0D] px-6 sm:px-10 md:px-32 py-12">
      {/* Container - Responsive Row/Column */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:max-w-[1320px] mx-auto w-full">
        
        {/* Text Section */}
        <div className="text-white w-full md:w-1/2 text-center md:text-left px-4 sm:px-8">
          <p className="text-2xl font-greatvibes text-[#FF9F0D]">
            About us
          </p>
          <h2 className="font-bold font-helvetica text-[32px] md:text-[44px] leading-[44px] md:leading-[60px]">
            <span className="text-[#FF9F0D]">We</span> Create the Best Foody Product
          </h2>
          <p className="text-[#FFFFFF] font-inter text-[14px] md:text-[18px] mt-4 max-w-[700px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <ul className="text-white mt-4 space-y-3 text-[14px] md:text-[16px]">
            <li className="px-2">✔ Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
            <li className="px-2">✔ Quisque diam pellentesque bibendum non dui volutpat fringilla</li>
            <li className="px-2">✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
          <Link href="/about">
            <button className="mt-6 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white w-[180px] h-[50px] md:h-[60px] rounded-full">
              Read More
            </button>
          </Link>
        </div>

        {/* Image Section (Column on All Screens) */}
        <div className="flex flex-col items-center space-y-6 w-full md:w-1/2">
          {data1.map((item:any) => (
            <div key={item._id}>
              <Link href={`/products/${item._id}`}>
                <Image
                  src={item.imageUrl}
                  alt="Food Item"
                  width={200}
                  height={200}
                  className="w-[300px] h-[220px] md:w-[300px] md:h-[200px] rounded-lg shadow-lg object-cover"
                />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Hero1;
