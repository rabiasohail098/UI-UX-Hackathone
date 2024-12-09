import React from "react";
import FAQPage from "./faqdetails";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div className="bg-[url('/images/bg.png')]  bg-cover bg-center flex justify-center items-center max-w-full h-[320px] md:h-[500px] lg:h-[600px]">
        <div className="text-center">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-helvetica text-[#FFFFFF] font-bold">FAQ Page</h1>
          <div className="flex justify-center items-center mt-4 gap-2">
    <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal font-inter text-[#FFFFFF]"><Link href="/">Home</Link></p>
  <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#FFFFFF]">&gt;</p>
<span className="text-[16px] md:text-[18px] lg:text-[20px] text-[#FF9F0D]">faq</span>
         </div>
        </div>
      </div>
      <FAQPage/>
    </>
  )
}

export default Hero