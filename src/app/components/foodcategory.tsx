"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

const FoodCategory1: React.FC = () => {
  const [data1, setData1] = useState([]);
  const [data3, setData3] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type=="foods" && category == "Food"]{
          _id,
          "imageUrl":image.asset->url,
        }`;
        const query1 = `*[_type=="foods" && category == "Sweet"]{
          _id,
          "imageUrl":image.asset->url,
        }`;

        const foodData = await client.fetch(query);
        const sweetData = await client.fetch(query1);

        setData1(foodData.slice(2, 4)); // Fetch and slice "Food" data
        setData3(sweetData.slice(3, 5)); // Fetch and slice "Sweet" data
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
    <div className="min-h-fit py-8 md:max-w-[1920px] w-full flex flex-col items-center justify-center bg-[#0D0D0D] px-6 md:px-16 lg:px-24 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <p className="font-greatvibes text-[16px] md:text-[18px] font-normal text-[#FF9F0D]">
          Food Category
        </p>
        <h2 className="font-helvetica text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#FFFFFF]">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Item
        </h2>
      </div>

      {/* Food Items Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
        {data1.map((data: any) => (
          <div key={data._id} className="flex w-1/2 items-center justify-center">
            <Link href={`/products/${data._id}`}>
              <Image
                src={data.imageUrl}
                alt="Food Item"
                width={306}
                height={329}
                className="w-[350px] rounded h-[200px]"
              />
            </Link>
          </div>
        ))}

        {data3.map((data: any) => (
          <div key={data._id} className="flex w-1/2 items-center justify-center">
            <Link href={`/products/${data._id}`}>
              <Image
                src={data.imageUrl}
                alt="Sweet Item"
                width={306}
                height={329}
                className="w-[350px] rounded h-[200px]"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategory1;
