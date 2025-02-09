"use client"
import { useEffect, useState } from 'react';
import React from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { AiOutlineLike } from "react-icons/ai";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import Link from 'next/link';


type Blog = {
  _id: string;
  title: string;
  description: string;
  date: string;
  quote: string;
  imageUrl: string;
};
const Hero6 = () => {
  const [data, setData] = useState<Blog[]>([]);
   const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     const fetchData = async () => {
       const query = `*[_type == "blog"]{
         _id,
         title,
         date,
         "imageUrl": image.asset->url,
         description,
         quote
       }`;
 
       try {
         const fetchedData = await client.fetch(query);
         const data1 = fetchedData.slice(0,3)
         console.log("Fetched Data:", fetchedData);
         setData(data1);
       } catch (error) {
         console.error("Error fetching data:", error);
       } finally {
         setLoading(false);
       }
     };
 
     fetchData();
   }, []);
 
   if (loading) {
     return <div>Loading...</div>;
   }
 

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center py-16 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-12">
        <p className="font-greatvibes text-[16px] md:text-[18px] text-[#FF9F0D]">Blog Post</p>
        <h2 className="font-helvetica text-[28px] md:text-[36px] lg:text-[48px] font-bold text-[#FFFFFF]">
          <span className='text-[#FF9F0D]'>La</span>test News & Blog
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((post:any)=>(
        <div className='bg-[#1A1A1A] p-6 rounded-2 flex flex-col' key={post.id}>
          <Image
              src={post.imageUrl}
            alt={post.name}
            width={240}
            height={329}
            className="w-[350px] h-[250px] "
          />
          <p className='font-inter text-[16px] text-[#FF9F0D] my-2'>10 February 2022</p>
          <h3 className="font-helvetica font-bold text-[#ffffff] text-[20px] mb-4">
            Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
          </h3>
          <div className='flex justify-between w-full px-4'>
          <Link href={`/blogdetails/${post._id}`}>
              <p className='font-inter text-[16px] text-[#ffffff] cursor-pointer'>Learn More</p>
              </Link>
           
            <div className='flex gap-2 text-[#ffffff]'>
              <AiOutlineLike size={20} className='hover:text-[#FF9F0D]'/>
              <LuMessageSquareMore size={20} className='hover:text-[#ffffff] text-[#FF9F0D]' />
              <IoShareSocialOutline size={20} className='hover:text-[#FF9F0D]'/>
            </div>
          </div>
        </div>
           ))}
        
        
      </div>
    </div>
  );
};

export default Hero6;
