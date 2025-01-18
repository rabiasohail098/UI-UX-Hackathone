import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero1 = () => {
  return (
    <div className="flex flex-col  sm:flex-row h-fit  gap-8  md:max-w-[1920px] w-full  bg-[#0D0D0D]">
      <div className="text-black md:max-w-1/2 w-full md:mb-16 gap-4 pr-8  md:my-0 my-[40px] pl-0 md:mt-[110px]">
        <p className="md:w-[106px] h-fit md:text-2xl font-greatvibes font-normal text-3xl pl-12  leading-[40px] text-[#FF9F0D]">About us</p>
        <h2 className="font-bold font-helvetica md:text-[40px] text-[30px] pl-5 md:pl-[50px] md:w-[446px] leading-[56px] text-[#FFFFFF]">
          {" "}<span className="text-[#FF9F0D]">We</span> Create the best foody product
        </h2>
        <p className='text-[#FFFFFF] font-inter font-normal md:text-[16px] md:leading-[24px] w-[320px] pl-5 md:pl-[59px] px-5 md:w-[526px] md:my-[20px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <p className="font-inter text-white my-[20px] pl-5 md:pl-[59px] px-5 ">
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
      <div className="space-y-4 md:p-5 w-full md:mb-12 sm:mb-20  p-1 md:w-1/2 object-cover mt-8">
        <div className="md:flex sm:w-full md:w-full sm:flex-row md:mr-[60px] gap-[12px] md:mt-[110px] sm:mt[50px] md:flex-col text-white">
          <div className="md:max-w-[660px] ">
            <Image src='/images/hero1.png' width={660} height={330} alt="hero-egg" className="rounded-[6px] object-cover sm:h-[180px] h-[400]"/>
          </div>
          <div className="flex md:max-w-[660px] flex-row sm:flex-col w-full   gap-[12px] md:mb-0 sm:mb-[30px]">
            <div className="w-full"><Image src='/images/hero2.png' width={322} height={194} alt="hero-egg" className="rounded-[6px] object-cover sm:w-[660px] h-[250px] sm:h-[180px]"/></div>
            <div className="w-full"><Image src='/images/hero3.png' width={322} height={194} alt="hero-egg" className="rounded-[6px] object-cover h-[250px] sm:w-[660px] sm:h-[180px]"/></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero1;