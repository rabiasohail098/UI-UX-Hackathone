"use client"
import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Filterproduct from "../components/filterproduct";
import { client } from "@/sanity/lib/client";

const Leftside = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type=="foods"]{
          _id,
          title,
          "imageUrl":image.asset->url
        }`;
        const data = await client.fetch(query);
        setData1(data.slice(0, 4)); // Recent Posts
        setData2(data.slice(7, 11)); // Filter by Menu
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="md:max-w-lg w-full mx-auto h-fit">
        {/* Search Bar */}
        <Filterproduct />

        {/* Blogger Section */}
        <section className="mt-8 border w-full border-gray-400 rounded-md p-4">
          <div className="text-center">
            <Image
              src="/images/cl1.png"
              alt="client"
              width={80}
              height={80}
              className="mx-auto w-20 h-20 rounded-full mb-4"
            />
            <h2 className="text-gray-900 text-lg font-medium"></h2>
            <p className="text-gray-600 hidden md:block text-sm">
              Blogger/Photographer
            </p>
            <div className="flex justify-center gap-1 mt-2">
              {[...Array(5)].map((_, index) => (
                <IoIosStar key={index} className="text-yellow-500" />
              ))}
              <span className="text-gray-500 text-sm">(1 Review)</span>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug VHS try-hard.
            </p>
            <div className="flex justify-center gap-4 text-xl text-gray-800 mt-4">
              <Link href="https://www.linkedin.com/in/rabia-sohail-684740278/">
                <FaLinkedin />
              </Link>
              <Link href="https://github.com/rabiasohail098">
                <IoLogoGithub />
              </Link>
              <Link href="https://www.instagram.com/rabiasohail642/">
                <FaInstagram />
              </Link>
              <Link href="https://www.facebook.com/parniyasohail098">
                <FaFacebook />
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <div className="mt-8 border border-gray-400 rounded-md p-4">
          <h1 className="text-lg font-bold border-b pb-2 mb-4">Recent Posts</h1>
          {data1.map((image: any) => (
            <div
              key={image._id}
              className="flex flex-col sm:flex-row gap-4 mb-4 items-start sm:items-center"
            >
              <Link href={`/products/${image._id}`}>
                <Image
                  src={image.imageUrl}
                  alt="Post Image"
                  width={80}
                  height={80}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
                />
              </Link>
              <div className="flex-1">
                <p className="text-sm text-gray-500">June 22, 2020</p>
                <h2 className="md:text-base text-[14px]  text-gray-800 font-medium hover:text-yellow-500 cursor-pointer">
                  {image.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Filter by Menu */}
        <div className="mt-8 border border-gray-400 rounded-md p-4">
          <h1 className="text-lg font-bold border-b pb-2 mb-4">Filter by Menu</h1>
          {data2.map((image: any) => (
            <div
              key={image._id}
              className="flex flex-col sm:flex-row gap-4 mb-4 items-start sm:items-center"
            >
              <Link href={`/products/${image._id}`}>
                <Image
                  src={image.imageUrl}
                  alt="Post Image"
                  width={80}
                  height={80}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
                />
              </Link>
              <div className="flex-1">
                <p className="text-sm text-gray-500">June 22, 2020</p>
                <h2 className="md:text-base text-[14px]  text-gray-800 font-medium hover:text-yellow-500 cursor-pointer">
                  {image.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        {/* Add other sections here */}
      </div>
    </div>
  );
};

export default Leftside;
