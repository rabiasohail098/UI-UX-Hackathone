"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuGitCompareArrows } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Link from 'next/link';
import App from '../slider';
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
interface Params{
    params:{
      [id:string]:number|never
    }
   
}
interface Data{
  [x:string]:never|number|string
    id:number;
    img:string;
    title:string;
    price:string;
}
const data: Data[] = [
  { 
    id: 1, 
    img: '/images/sh1.png', 
    title: 'Fresh Lime',
    price: '$45.00'
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
    id: 6, 
    img: '/images/sh6.png', 
    title: 'Chicken Chup', 
    price: '$25.00' 
},
  { 
    id: 9, 
    img: '/images/sh3.png', 
    title: 'Pizza', 
    price: '$43.00' 
},
  { 
    id: 11,
     img: '/images/sh5.png',
    title: 'Sandwiches', 
    price: '$25.00' 
},
  { 
    id: 4, 
    img: '/images/sh4.png', 
    title: 'Cheese Butter', 
    price: '$10.00' },
];

const Page = ({ params }: Params) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    console.log("Product added to cart:", { name: "Yummy Chicken Chup", price: 54.0, quantity });
    alert("Added to Cart!");
  };

  const router = useRouter();
  const productId = Number(params?.id);
  const filteredItem = data.find((item) => item.id === productId);

  if (!filteredItem) {
    router.push('/error'); 
    return null;
  }

  return (
    <>
      <section
    className="bg-cover bg-center h-64 flex items-center justify-center"
    style={{ backgroundImage: "url('/images/bg.png')" }}
  >
    <div className="text-center text-white">
      <h2 className="text-4xl font-bold">Shop Details</h2>
      <p className="pt-2">
        <Link href="/" className="text-yellow-400">Home</Link> › Shop Details
      </p>
    </div>
      </section>
      
     
      <div className='md:max-w-[1920px]'>
         {/* first div */}
        <div className='md:max-w-[1320px]  my-24 flex flex-col px-8 gap-6  md:flex-row'>
          {/* Left div */}
          <div className='md:max-w-[647px] flex flex-col md:flex-row gap-6  h-fit w-full'>
            <div className='h-[491px] space-y-6'>
              <Image src="/images/s2.png" alt="image" width={132 } height={129 } className='md:w-[132px] w-[200px] object-cover md:ml-[30px] h-[129px] ' />
              <Image src="/images/s3.png" alt="image" width={132 } height={129 } className='md:w-[132px] w-[200px] object-cover md:ml-[30px] h-[129px] ' />
              <Image src="/images/s4.png" alt="image" width={132 } height={129 } className='md:w-[132px] w-[200px] object-cover md:ml-[30px] h-[129px] ' />
              <Image src="/images/s5.png" alt="image" width={132 } height={129 }  className='md:w-[132px] w-[200px] object-cover md:ml-[30px] h-[129px]  '/>
          </div>
            <div>
            <Image src="/images/s1.png" alt="image" width={491} height={ 598}  className='md:max-w-[491px] w-[200px] ml-[30px] h-auto mt-[6.25rem] md:h-[598px]'/>
          </div>
          </div>
          {/* right div */}
          <div className="md:max-w-[615px] px-3 space-y-2 h-fit w-full">
          <div className='flex  flex-col md:flex-row'>
              <button className='w-[86px] h-[24px] bg-[#FF9F0D] text-[#ffffff] rounded-[6px] text-[14px] font-[400] font-[inner]'>In stock</button>
              <Pagination className='mt-[-30px] hidden md:block ml-[40%]'>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="/"/>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="/shop"/>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
      <h2 className="md:text-[48px] text-[28px]  font-helvetica font-bold md:max-w-[510px] w-full h-[56px]">Yummy Chicken Chup</h2>
      <p className="text-[18px] font-inter font-[400] text-justify  md:max-w-[510px] w-full h-auto mb-4 border-b-2 pb-4 pt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
        fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus.
        Lacus nisi, et ac dapibus sit eu velit in consequat.
      </p>
      <h2 className="text-[32px] font-helvetica font-bold md:max-w-[510px] h-[56px]">$54.00</h2>
      <div className="flex gap-2 text-[#828282]">
        <FaStar className="text-[#FF9F0D]" size={16} />
        <FaStar className="text-[#FF9F0D]" size={16} />
        <FaStar className="text-[#FF9F0D]" size={16} />
        <FaStar className="text-[#FF9F0D]" size={16} />
        <FaStar className="text-[#FF9F0D]" size={16} />
        <span className="border-x-2 px-4 text-[#828282] text-[16px] font-[400] font:inter">5.0 Rating</span>
        22 Reviews
      </div>
      <p className="text-[18px] font-inter font-[400] md:max-w-[510px] h-auto mb-4 pb-4 pt-4">Dictum/cursus/Risus</p>
      <div className="flex flex-col md:flex-row gap-6 pb-8 border-b-2">
        <div className="flex md:max-w-[181px] h-[50px]">
          <button onClick={handleDecrement} className="w-[60px] border-2 p-2 text-[28px]">
            &#45;
          </button>
          <div className="w-[60px] border-2 pt-3 p-2 text-center">{quantity}</div>
          <button onClick={handleIncrement} className="w-[60px] border-2 p-2 text-[25px]">
            &#43;
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex gap-6 w-[191px] h-[50px] rounded-[6px] bg-[#FF9F0D] text-[#ffffff] p-4"
        >
          <IoBagOutline size={20} /> <span>Add to Cart</span>
        </button>
      </div>

      <p className="flex gap-2 pt-4">
        <IoIosHeartEmpty size={20} />
        <span>Add to Wishlist</span>
        <LuGitCompareArrows size={20} />
        <span>Compare</span>
      </p>
      <p className="py-2">
        <span className="font-semibold">Category:</span> Pizza
      </p>
      <p>
        <Link href="/shop">
          <span className="font-semibold">Tag:</span> Our Shop
        </Link>
      </p>
      <p className="flex gap-3 pt-2 pb-4 border-b-2">
        <span className="font-semibold">Share:</span>
        <Link href="https://www.linkedin.com/in/rabia-sohail-684740278/">
          <FaLinkedin size={20} />
        </Link>
        <Link href="https://github.com/rabiasohail098">
          <IoLogoGithub size={20} />
        </Link>
        <Link href="www.youtube.com/@Parniya098">
          <FaYoutube size={20} />
        </Link>
        <Link href="https://www.instagram.com/rabiasohail642/">
          <FaInstagram size={20} />
        </Link>
        <Link href="https://www.facebook.com/parniyasohail098">
          <FaFacebook size={20} />
        </Link>
      </p>
          </div>
          </div>
       {/* second div */}
        <div className='md:max-w-[1320px] space-y-4 my-8 px-8 w-full'>
          <div className='flex gap-6 flex-col md:flex-row'>
            <button className='md:max-w-[165px] bg-[#FF9F0D] text-[#ffffff] p-2 rounded-[6px] '>Description</button>
            <p className='pt-2'>Reviews (24)</p>
            </div>
            <p className='md:max-w-[1320px] text-justify '>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl. <br /> <br />
            Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</p>
            <h2 className='text-[20px] font-helvetica font-semibold'>Key Benefits</h2>
          <ul className='space-y-2 px-4'>
            <li  className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className='list-disc'>Maecenas ullamcorper est et massa mattis condimentum.
            </li>
            <li className='list-disc'>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
            <li className='list-disc'>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
            <li className='list-disc'>Mauris eget diam magna, in blandit turpis.</li>
        </ul>
        </div>
        
        <App/>
      </div>
      </>
  );
};

export default Page;
