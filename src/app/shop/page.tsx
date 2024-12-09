import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";


interface OurShop {
  id: number;
  img: string;
  title: string;
  price: string;
}
export const data: OurShop[] = [
    { 
    id: 1,
    img: '/images/sh1.png',
    title: 'Fresh Lime',
    price: '$45.00' 
    },
    { 
    id: 2,
    img: '/images/sh2.png', 
    title: 'Drink', 
    price: '$23.00' 
    },
    {
    id: 3,
    img: '/images/sh3.png', 
    title: 'Pizza', 
    price: '$43.00' 
    },
    { 
    id: 4,
    img: '/images/sh4.png', 
    title: 'Cheese Butter', 
    price: '$10.00' 
    },
    { 
    id: 5,
    img: '/images/sh5.png',
    title: 'Sandwiches',
    price: '$25.00' 
    },
    { 
    id: 6,
    img: '/images/sh6.png',  
    title: 'Chicken Chup',
    price: '$25.00' 
    },
    { 
    id: 7,
    img: '/images/sh1.png',
    title: 'Fresh Lime',
    price: '$45.00'
    },
    { 
    id: 8,
    img: '/images/sh2.png', 
    title: 'Drink', 
    price: '$23.00' 
    },
    {  
    id: 9, 
    img: '/images/sh3.png', 
    title: 'Pizza', 
    price: '$43.00' 
    },
    { 
    id: 10, 
    img: '/images/sh4.png', 
    title: 'Cheese Butter', 
    price:'$10.00' 
    },
    { 
    
    id: 11, 
    img: '/images/sh5.png', 
    title: 'Sandwiches', 
    price: '$25.00'
   },
    {
    id: 12, 
    img: '/images/sh6.png', 
    title: 'Chicken Chup',
         price: '$25.00' 
        },
    { 
    id: 13, 
    img: '/images/sh1.png', 
    title: 'Fresh Lime', 
    price: '$45.00'
   },
    { 
    id: 14, 
    img: '/images/sh2.png', 
    title: 'Drink',
     price:'$23.00' 
    },
    { 
    id: 15, 
    img: '/images/sh3.png', 
    title: 'Pizza', 
    price: '$43.00',
 },
];
const Ourshop = () => {
   

  return (
    <>
      <div className="bg-[url('/images/bg.png')] bg-cover bg-center flex justify-center items-center w-full h-[320px] md:h-[500px] lg:h-[600px]">
        <div className="text-center">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white">Our Shop</h1>
          <div className="flex justify-center items-center mt-4 gap-2 text-[16px] md:text-[18px] lg:text-[20px] text-white">
            <p>
              <Link href="/">Home</Link>
            </p>
            <span>&gt;</span>
            <p className="text-[#ff9f0d]">Shop</p>
          </div>
        </div>
      </div>


      <div className="container mt-32 mb-16 flex gap-8  mx-auto px-4">
        <div className="w-[984px]">
          {/* Left Side */}
          <div className="flex gap-3 w-[317px">
            <div className="flex w-[332px] ">
              <label htmlFor="Sort By" className="mt-2 text-[20px] w-[81px]">
                Sort By:
              </label>
              <select className="opacity-30 rounded border border-gray-400 w-[236px] text-[i8pxpx] h-12">
                <option value="Newest">Newest</option>
              </select>
            </div>
            <div className="flex w-[236px] gap-2">
              <label htmlFor="Show" className="mt-2 text-[20px] w-[64px]">
                Show:
              </label>
              <select className="opacity-30 rounded border border-gray-400 text-[i8px] w-[236px] h-12">
                <option value="Default">Default</option>
              </select>
            </div>
          </div>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
          {data.map((item) => (
            <div key={item.id} className="shadow-md rounded-lg">
              <Link href={`/products/${item.id}`}>
                <Image src={item.img} alt={item.title} width={312} height={267} className='w-full'/>
              </Link>
              <h2 className="text-xl font-bold p-2 ">{item.title}</h2>
              <p className="text-gray-600 pl-2">{item.price}</p>
              <Link href={`/products/${item.
                id}`}>
                <button className="mt-2 w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Show Details
                </button>
              </Link>
            </div>
          ))}
        </div>
        <Image src="/images/bar1.png" alt="bar" width={306} height={51} className='ml-[32%] mt-10' />
        </div>
        {/* Right Side */}
        <div className='w-[312px] h-[418px]'>
            <div className='flex w-[248px] h-[46px] mt-[72px] text-center '>
                <input type="text" placeholder='Search Product' className='w-[202px] bg-[#ebe2d5] pl-4 text-gray-400'/>
                <CiSearch size={20} className='bg-[#FF9F0D] p-3 text-[#FFFFFF] w-[46px] h-[46px]' />

            </div>
            <ul className='space-y-2'>
                <h2 className='font-helvetica text-[20px] font-bold mt-2'>Category</h2>
                <li>
                    <input type="checkbox" className='font-helvetica text-[18px]'/> Sandwitch
                </li>
                <li>
                    <input type="checkbox" className='font-helvetica text-[18px]'/> Burger
                </li>
                <li>
                    <input type="checkbox" className='font-helvetica text-[18px]'/> Chicken Chup
                </li>
                 <li>
                    <input type="checkbox" className='font-helvetica text-[18px]'/> Drink
                </li> 
                <li>
                    <input type="checkbox" className='font-helvetica text-[18px]'/> Pizza
                </li> 
                <li>
                    <input type="checkbox" className='font-helvetica text-[18px]'/> Thi
                </li> 
                <li>
                    <input type="checkbox" className='font-helvetica text-[18px]'/> Non Veg
                </li> 
                <li>
                    <input type="checkbox" className='font-helvetica text-[18px]'/> Uncategorized
                </li>
            </ul>
            <div className='bg-[url(/images/shop.png)] p-4 mt-4 bg-cover w-[248px] h-[286px] '>
        <p className='font-inter font-bold text-[16px] w-[105px] text-[#FFFFFF]'> Perfect Taste</p>
        <h2 className='font-helvetica font-bold text-[20px] w-[181px] text-[#FFFFFF]'>Classic Restaurant</h2>
        <p className='font-helvetica font-bold text-[16px] w-[58px] text-[#FF9F0D]'>$45.00</p>
        <p className='flex gap-2 w-full h-[24px] mt-32'><button className='font-inter text-[16px]  text-[#FFFFFF]'>Shop Now</button><IoArrowForwardCircleOutline size={20} className='text-[#FFFFFF] mt-1'/><button/>
        </p>
            </div>
            <h2 className='font-helvetica text-[20px] font-bold mt-2 mb-2'>Filter By Price</h2>
            <div className='w-[248px] h-[11px] rounded-[4px] bg-[#ff9f0d] mb-2'></div>
            <p className='font-inter text-[14px] w-[105px] text-[#333333] mb-2'> Perfect Taste</p>
            <h2 className='font-helvetica text-[20px] font-bold mt-2 mb-2'>Latest Products</h2>
            <div className=" w-[252px] mb-2 space-y-2">
            <div className="flex items-center gap-4">
              <div className="object-cover w-[72px] h-16 relative">
                <Image 
                  src="/images/me4.png" 
                  alt="Fresh Breakfast" 
                  fill 
                  className=" w-[72px] h-[65px]"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#333333] ">Fresh Breakfast</h3>
               <div className='flex w-[63px] gap-1 mb-1 h-[9px]'>
               <FaStar size={10} className='text-[#FF9F0D] '/>
               <FaStar size={10} className='text-[#FF9F0D] '/>
               <CiStar size={10}/>
               <CiStar size={10}/>
               <CiStar size={10}/>

               </div>
                <p className="text-orange-500">14.5$</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="object-cover w-[72px] h-16 relative">
                <Image 
                  src="/images/me4.png" 
                  alt="Fresh Breakfast" 
                  fill 
                  className=" w-[72px] h-[65px]"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#333333] ">Fresh Breakfast</h3>
                <div className='flex w-[63px] gap-1 mb-1 h-[9px]'>
               <FaStar size={10} className='text-[#FF9F0D] '/>
               <FaStar size={10} className='text-[#FF9F0D] '/>
               <CiStar size={10}/>
               <CiStar size={10}/>
               <CiStar size={10}/>

               </div>
                <p className="text-orange-500">14.5$</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="object-cover w-[72px] h-16 relative">
                <Image 
                  src="/images/me4.png" 
                  alt="Fresh Breakfast" 
                  fill 
                  className=" w-[72px] h-[65px]"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#333333] ">Fresh Breakfast</h3>
                <div className='flex w-[63px] gap-1 mb-1 h-[9px]'>
               <FaStar size={10} className='text-[#FF9F0D] '/>
               <FaStar size={10} className='text-[#FF9F0D] '/>
               <CiStar size={10}/>
               <CiStar size={10}/>
               <CiStar size={10}/>

               </div>
                <p className="text-orange-500">14.5$</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="object-cover w-[72px] h-16 relative">
                <Image 
                  src="/images/me4.png" 
                  alt="Fresh Breakfast" 
                  fill 
                  className=" w-[72px] h-[65px]"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#333333] ">Fresh Breakfast</h3>
                <div className='flex w-[63px] gap-1 mb-1 h-[9px]'>
               <FaStar size={10} className='text-[#FF9F0D] '/>
               <FaStar size={10} className='text-[#FF9F0D] '/>
               <CiStar size={10}/>
               <CiStar size={10}/>
               <CiStar size={10}/>

               </div>
                <p className="text-orange-500">14.5$</p>
              </div>
            </div>
            <h2 className='font-helvetica text-[20px] font-bold mt-2 mb-2'>Product Tags</h2>
            <div className='w-[225px] h-[24px] gap-2 flex'>
            <p className='font-inter font-bold text-[16px]  hover:text-[#FF9F0D] hover:underline  text-[#333333]'>Services</p>
            <p className='font-inter font-bold text-[16px] hover:text-[#FF9F0D] hover:underline text-[#333333]'>Our Menu</p>
            <p className='font-inter font-bold text-[16px] hover:text-[#FF9F0D] hover:underline  text-[#333333]'>Pizza</p>
            </div>
            <div className='w-[225px] h-[24px] gap-2 flex'>
            <p className='font-inter font-bold text-[16px]  hover:text-[#FF9F0D] hover:underline text-[#333333]'>Cupcake</p>
            <p className='font-inter font-bold text-[16px] hover:underline hover:text-[#333333] text-[#FF9F0D]'>Burger</p>
            <p className='font-inter font-bold text-[16px]   hover:text-[#FF9F0D] hover:underlinetext-[#333333]'>Cookies</p>
            </div>
            <div className='w-[225px] h-[24px] gap-2 flex'>
            <p className='font-inter font-bold text-[16px]  hover:text-[#FF9F0D] hover:underline text-[#333333]'>Our Shop</p>
            <p className='font-inter font-bold text-[16px] hover:text-[#FF9F0D] hover:underline text-[#333333]'>Tandoori Chicken</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourshop;
