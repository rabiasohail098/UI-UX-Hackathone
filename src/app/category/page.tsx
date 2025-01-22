import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Filterproduct from "../components/filterproduct";
const FoodCategory = async () => {
  const foodQuery = `*[_type=="foods" && category == "Food"]{
    _id,
    title,
    price,
    "imageUrl": image.asset->url
  }`;

  const sweetQuery = `*[_type=="foods" && category == "Sweet"]{
    _id,
    title,
    price,
    "imageUrl": image.asset->url
  }`;
  const price = Math.floor(Math.random()*100)
 
    const foodData = await client.fetch(foodQuery);
    const data1 = foodData.slice(0, 4)
    const data2 = foodData
    
  const sweetData = await client.fetch(sweetQuery);
    const data3 = sweetData

  const renderItems = (data: any, categoryTitle: string) => (
    <>
      <h2 className="font-helvetica text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-black">
        <span className="text-[#FF9F0D]">Ch</span>oose {categoryTitle} Items
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {data.map((item: any) => (
          <div key={item._id} className="object-cover w-full relative bg-white p-4 shadow rounded-md">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={100}
              height={100}
              className="w-full h-[120px] object-cover rounded"
            />
            <h3 className="text-lg font-semibold text-[#333333] mt-2">{item.title}</h3>
            <div className="flex items-center gap-1 mb-1">
              <FaStar size={14} className="text-[#FF9F0D]" />
              <FaStar size={14} className="text-[#FF9F0D]" />
              <CiStar size={14} />
              <CiStar size={14} />
              <CiStar size={14} />
            </div>
                <p className="text-orange-500 font-medium">$ {item.price}.00</p>
                  <Link href={`/products/${item._id}`}>
                        <button className="mt-2 w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                          View Product
                        </button>
                      </Link>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Food Category</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            › Food Category
          </p>
        </div>
      </section>

          {/* Content Section */}
          
    <div className="md:max-w[1920px] mt-32 mb-16 flex flex-col md:flex-row gap-8  mx-auto px-4">
     <div className="md:max-w-[1320px] flex md:flex-row flex-col px-12">
      <div className="min-h-fit py-16 max-w-[895px] mx-auto flex flex-col items-center px-6 space-y-12">
        {renderItems(foodData._id, "Food")}
        {renderItems(sweetData._id, "Sweet")}
          </div>
          <div className="w-[312px] md:h-[418px]">
         <Filterproduct/>
          <ul className="space-y-2 px-4 border-[1px] border-gray-400 my-6 py-4">
            <h2 className="font-helvetica text-[20px] font-bold mt-2">
              Category
              </h2>
              {data2.map((items: any) => (
                <ul key={items._id} className="space-y-2 px-4  my-4">
                  <Link href={`/products/${items._id}`}>
                  <li className="flex gap-2">
                    <input type="checkbox" />
                    {items.title}
                    </li>
                  </Link>
                </ul>
              ))}
                           {data3.map((items: any) => (
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
                  src={item.imageUrl}
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

export default FoodCategory;
