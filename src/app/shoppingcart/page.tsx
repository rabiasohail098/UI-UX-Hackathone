import React from 'react';
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
const Page = () => {
    const prices = ["531.00", "498.00", "221.00", "441.00", "325.00"];
    const total = ["221.00", "521.00", "521.00", "421.00", "321.00"];
    const products = ["Burger", "Fresh Lime", "Pizza", "Chocolate Muffin", "Cheese Butter"];

 return (
    <>
    <div className="bg-[url('/images/bg.png')] bg-cover bg-center flex justify-center items-center max-w-full h-[320px] md:h-[500px] lg:h-[600px]">
        <div className="text-center">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-helvetica text-[#FFFFFF] font-bold">Shopping Cart</h1>
          <div className="flex  justify-center items-center mt-4 gap-2">
    <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal font-inter text-[#FFFFFF]"><Link href="/">Home</Link></p>
  <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#FFFFFF]">&gt;</p>
<span className="text-[16px] md:text-[18px] lg:text-[20px] text-[#FF9F0D]">Shopping Cart</span>
         </div>
        </div>
      </div>
        <div className="px-4 w-full my-20 pb-10">
      <div className="md:max-w-[1320px] w-full mx-auto space-y-6 md:h-[765px] h-auto ">
    <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full rounded-md">
        <div className="grid grid-cols-5 gap-4 items-center p-2 font-bold text-gray-700">
        <div>Product</div>
        <div className='md:pl-14 pl-0 md:block hidden'>Price</div>
        <div className='pl-1 md:block hidden'>Quantity</div>
        <div className='pl-0 md:block hidden'>Total</div>
        <div className='pl-8 md:block hidden'>Remove</div>
    </div>
            {products.map((item, index) => (
    <div key={index} className="grid grid-cols-5  gap-4 items-center border-b py-4">     
    <div className="flex flex-col md:flex-row items-center md:w-[225px] h-auto w-full gap-4">
    <div className="relative md:w-20 md:h-16 w-48 h-44">
    <Image src="/images/me4.png" alt={item} width={100} height={100} className="object-cover w-full  rounded-md"/>
</div>
<div>
    <h3 className="text-lg font-semibold text-gray-800">{item}</h3>
    <div className="flex gap-1">
    <FaStar size={12} className="text-yellow-400" />
    <FaStar size={12} className="text-yellow-400" />
    <CiStar size={12} />
    <CiStar size={12} />
    <CiStar size={12} />
    </div>
        </div>
    </div>
<div className="text-gray-800 md:block hidden font-bold ml-16 w-[58px]">${prices[index]}</div>
   <div className="md:flex hidden items-center">
   <button className="flex w-[94px] pl-12 items-center gap-2 border rounded-full px-4 py-1"><span>1</span><span className="text-orange-500">+</span></button>
</div>
<div className="text-gray-800 md:block hidden w-[70px] font-bold">${total[index]}</div>
    <div>
        <RxCross2 className="text-red-500 md:block hidden w-[121px] cursor-pointer" />
    </div>
        </div>
    ))}
    </div>
                 </div>
                 
              <div className='md:max-w-[1920px] mx-2 w-full'>  
    <div className="flex flex-col md:max-w-[1320px] mb-8 h-auto w-full md:flex-row md:gap-6">
        <div className=" md:max-w-[424px] px-2 w-full ">
    <h2 className="text-xl font-bold mb-4">Coupon Code</h2>
        <div className="border p-2 rounded-md">
    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</p>
    <div className="flex flex-col sm:flex-row">
    <input type="text" placeholder="Enter Here code" className=" border rounded-md px-4 py-2"/>
    <button className="bg-orange-500 text-white md:text-[18px] text-sm px-6 py-2 rounded-md">Apply</button>
    </div>
        </div>
        </div>
        <div className="  mx-2 md:w-[648px] h-auto w-full ">
    <h2 className="text-xl font-bold mb-4">Total Bill</h2>
    <div className="border p-4 rounded-md">
        <div className='border-b-[1px] space-y-4 pb-4 rounded-md'>
    <div className="flex md:flex-row flex-col font-bold justify-between">
    <span>Cart Subtotal:</span>
    <span>$120.00</span>
        </div>
    <div className="flex md:flex-row flex-col justify-between">
    <span>Shipping Charge:</span>
    <span>$00.00</span>
    </div>
        </div>
    <div className="flex flex-col md:flex-row justify-between font-bold text-lg">
    <span>Total Amount:</span>
    <span>$120.00</span>
    </div>
      <Link href="/checkout"> <button className="w-full bg-orange-500 text-sm md:text-[18px] text-white py-3 rounded-md font-semibold">Proceed to Checkout</button>
      </Link>
    </div>
        </div>
                 </div>
                 </div>
        </div>
            
             
             
             </div>

        </>
    );
};

export default Page;
