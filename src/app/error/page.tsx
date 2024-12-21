"use client";
import React from "react";
import Link from "next/link";
const Error = () => {
  return (
    <>
          <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">404 Error</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › 404
          </p>
        </div>
      </section>
<div className="flex flex-col text-center items-center  mx-auto w-full md:w-[630px] justify-center  h-auto top-{530} left-{645} py-10 px-4 md:px-8 lg:px-12 gap-6 rounded-[6px]">
<h2 className="text-[64px] md:w-[630px] w-full md:text-[80px] lg:text-[96px] font-bold font-helvetica text-[#FF9F0D]">404</h2>
<h4 className="  w-full text-[32px]  font-bold font-helvetica text-[#333333]">Oops! Looks like something went wrong</h4>
<p className="text-[18px] w-full font-bold font-inter text-[#4F4F4F] px-4">Page cannot be found! We’ll have it figured out in no time. Meanwhile, check out these fresh ideas:</p>
<Link href="/"><button className="text-[16px] w-[197px] md:text-[18px] lg:text-[20px] font-bold font-helvetica px-6 py-3 text-[#FFFFFF] bg-[#FF9F0D] rounded-[4px] hover:bg-[#FF7F00] transition-all duration-300">Go to Home</button>
</Link>
      </div>
    </>
  );
};

export default Error;
