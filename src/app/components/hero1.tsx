import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero1 = () => {
  return (
    <div className=" flex flex-col sm:flex-row sm:h-[562px] h-[400px]  gap-12 max-w-[1920px] w-full md:h-[800px] bg-black">
      <div className="text-black md:ml-[100px] lg:ml[150px] md:my-0 my-[40px] ml-0 md:mt-[110px] ">
        <p className="md:w-[106px]  md:h-[40px] md:text-2xl font-greatvibes font-normal text-3xl md:ml-0 ml-[160px] leading-[40px] text-[#FF9F0D]">About us</p>
        <h2 className="font-bold font-helvetica md:text-[40px] text-[30px] md:ml-0 ml-[70px] md:w-[446px] leading-[56px] text-[#FFFFFF]">{" "}<span className="text-[#FF9F0D]">We</span> Create the best foody product</h2>
        <p className=' text-[#FFFFFF] font-inter font-normal md:text-[16px] md:leading-[24px] w-[320px] md:ml-0 ml-[64px] md:w-[526px] md:my-[20px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <p className="font-inter text-white my-[20px] md:ml-0 ml-[64px]">
          ✔ Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <p className="font-inter text-white my-[20px] md:ml-0 ml-[64px]">
          ✔ Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
        </p>
        <p className="font-inter text-white my-[20px] md:ml-0 ml-[64px]">
          ✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <Link href="/about">
      <button className="rounded-[30px] md:h-[60px] h-[90px] w-[160px] text-[#FFFFFF] bg-[#FF9F0D]">Read More</button>
      </Link>
      </div>
      <div>
        <div className="flex md:flex-col  lg:h-[680px] h-[400px]    flex-row md:mt-[110px] md:mr-[100px] lg:mr-[150px] text-white">
          <div className="mt-12">
            <Image src='/images/hero1.png' width={660} height={330} alt="hero-egg" className="rounded-[3px]"/>
          </div>
          <div className="flex mt-4 gap-4 md:mb-0 mb-[120px]">
            <div><Image src='/images/hero2.png' width={322} height={194} alt="hero-egg" className="rounded-[3px]"/></div>
            <div><Image src='/images/hero3.png' width={322} height={194} alt="hero-egg" className="rounded-[3px]"/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;