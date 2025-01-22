"use client"
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
    <div className="px-12 h-fit md:max-w-[1920px] w-full bg-[#0D0D0D]">
      <div className="flex flex-col sm:flex-row h-fit gap-8 md:max-w-[1320px] w-full bg-[#0D0D0D]">
        <div className="text-black md:max-w-1/2 w-full md:mb-16 gap-4 pr-8 md:my-0 my-[40px] pl-0 md:mt-[110px]">
          <p className="md:w-[106px] h-fit md:text-2xl font-greatvibes font-normal text-3xl pl-12 leading-[40px] text-[#FF9F0D]">
            About us
          </p>
          <h2 className="font-bold font-helvetica md:text-[40px] text-[30px] pl-5 md:pl-[50px] md:w-[446px] leading-[56px] text-[#FFFFFF]">
            <span className="text-[#FF9F0D]">We</span> Create the best foody product
          </h2>
          <p className="text-[#FFFFFF] font-inter font-normal md:text-[16px] md:leading-[24px] w-[320px] px-6 pl-6 md:pl-12 md:w-[526px] md:my-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <p className="font-inter text-white my-[20px] pl-5 md:pl-[59px] px-5">
            ✔ Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <p className="font-inter text-white my-[20px] pl-5 md:pl-[59px] px-5">
            ✔ Quisque diam pellentesque bibendum non dui volutpat fringilla
          </p>
          <p className="font-inter text-white my-[20px] pl-5 md:pl-[59px] px-5">
            ✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <Link href="/about">
            <button className="rounded-[30px] md:h-[60px] h-[50px] pl-5 md:ml-[64px] px-5 mx-4 w-[160px] md:w-[180px] text-[#FFFFFF] bg-[#FF9F0D]">
              Read More
            </button>
          </Link>
        </div>
        <div className="space-y-4 md:p-5 w-full md:mb-12 sm:mb-20 p-1 md:w-1/2 object-cover mt-8">
          {data1.map((item: any) => (
            <div key={item._id}>
              <Link href={`/products/${item._id}`}>
                <Image
                  src={item.imageUrl}
                  alt="Food Item"
                  width={250}
                  height={200}
                  className="w-[250px] h-[200px]"
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
