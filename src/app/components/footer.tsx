"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

const Footer: React.FC = () => {
  const [data1, setData1] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type=="foods"]{
          _id,
          title,
          price,
          "imageUrl":image.asset->url
        }`;
        const data = await client.fetch(query);
        setData1(data.slice(0, 3)); // Fetch the first three items
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <footer className="bg-[#0D0D0D] w-full px-4 sm:px-8 lg:px-[150px] max-w-[1920px] pt-12">
      <div className="max-w-full mx-auto border-b border-[#FF9F0D] pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="w-full md:w-[45%] mb-8 md:mb-0">
            <h2 className="text-[24px] md:text-[32px] font-helvetica font-bold text-[#FFFFFF]">
              <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
            </h2>
            <p className="text-[14px] md:text-[16px] font-helvetica font-normal text-[#FFFFFF] mt-2">
              Don’t wait; make a smart & logical quote here. It’s pretty easy.
            </p>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-[50%] mt-2 p-4">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="font-inter font-normal text-[14px] md:text-[16px] text-black bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 rounded-[4px] px-4 py-1 hover:via-orange-500 hover:to-orange-600 p-4 flex-1"
            />
            <button className="font-inter font-normal text-[14px] md:text-[16px] text-[#FF9F0D] bg-[#FFFFFF] p-2 md:p-3 rounded-[2px] hover:text-[#000000] hover:bg-[#eee3d3] transition duration-300">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-12 mt-12">
        <div className="w-full sm:w-[45%] md:w-[35%] mb-8 md:mb-0">
          <h2 className="font-helvetica text-[16px] md:text-[20px] font-bold text-[#FFFFFF] mb-2">About Us</h2>
          <p className="font-helvetica text-[14px] md:text-[16px] font-normal text-[#FFFFFF]">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional
            chauffeured car service in major cities across the world.
          </p>
          <div className="flex items-start gap-4 mt-4">
            <div className="bg-[#FF9F0D] p-2 rounded-md">
              <Image src="/images/icon.png" alt="icon" width={39} height={39} />
            </div>
            <div>
              <p className="font-inter text-[14px] md:text-[16px] font-normal text-[#FFFFFF]">Opening Hours</p>
              <p className="font-inter text-[12px] md:text-[14px] font-normal text-[#FFFFFF]">Mon - Sat (8.00 - 6.00)</p>
              <p className="font-inter text-[12px] md:text-[14px] font-normal text-[#FFFFFF]">Sunday - Closed</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[18%] hidden md:block mb-8 md:mb-0">
          <h2 className="font-bold text-[16px] md:text-[18px] text-[#FFFFFF] mb-4">Useful Links</h2>
          <ul className="space-y-2">
            {['About', 'News', 'Patrons', 'Team', 'Menu', 'Contact'].map((link, index) => (
              <li key={index} className="font-normal text-[14px] md:text-[16px] text-[#FFFFFF]">{link}</li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-[18%] hidden md:block mb-8 md:mb-0">
          <h2 className="font-bold text-[16px] md:text-[18px] text-[#FFFFFF] mb-4">Help?</h2>
          <ul className="space-y-2">
            {['FAQ', 'Terms & Conditions', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'].map((item, index) => (
              <li key={index} className="font-normal text-[14px] md:text-[16px] text-[#FFFFFF]">{item}</li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-[45%] md:w-[35%] mb-8 md:mb-0">
          <h2 className="font-bold text-[16px] md:text-[18px] text-[#FFFFFF] mb-4">Recent Posts</h2>
          {data1.map((item: any) => (
            <div key={item._id} className="flex gap-4 my-4">
              <Link href={`/products/${item._id}`}>
                <Image src={item.imageUrl} alt={item.title} width={100} height={100} className="w-[100px] h-[80px]" />
              </Link>
              <div>
                <h2 className="text-white">{item.title}</h2>
                <p className="text-orange-500">$ {item.price}.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
