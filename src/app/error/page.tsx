"use client";
import React from "react";

const Error = () => {
  return (
    <>
      <div className="bg-[url('/images/bg.png')] bg-cover bg-center flex justify-center items-center max-w-full h-[320px] md:h-[500px] lg:h-[600px]">
        <div className="text-center">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-helvetica text-[#FFFFFF] font-bold">404 Error</h1>
          <div className="flex justify-center items-center mt-4 gap-2">
    <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal font-inter text-[#FFFFFF]">Home</p>
  <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#FFFFFF]">&gt;</p>
<span className="text-[16px] md:text-[18px] lg:text-[20px] text-[#FF9F0D]">404</span>
         </div>
        </div>
      </div>
<div className="flex flex-col items-center justify-center mx-auto w-full max-w-[1200px] h-auto py-10 px-4 md:px-8 lg:px-12 gap-6 text-center bg-gray-100 rounded-[6px]">
<h2 className="text-[64px] md:text-[80px] lg:text-[96px] font-bold font-helvetica text-[#FF9F0D]">404</h2>
<h4 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold font-helvetica text-[#333333]">Oops! Looks like something went wrong</h4>
<p className="text-[16px] md:text-[18px] lg:text-[20px] font-bold font-inter text-[#4F4F4F] px-4">Page cannot be found! We’ll have it figured out in no time. Meanwhile, check out these fresh ideas:</p>
<button className="text-[16px] md:text-[18px] lg:text-[20px] font-bold font-helvetica px-6 py-3 text-[#FFFFFF] bg-[#FF9F0D] rounded-[4px] hover:bg-[#FF7F00] transition-all duration-300">Go to Home</button>
      </div>
    </>
  );
};

export default Error;
