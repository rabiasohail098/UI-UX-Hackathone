import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-black px-3 sm:px-6 md:px-6 gap-10 lg:px-24 xl:px-32 py-8 md:py-12 lg:py-16 flex flex-col md:flex-row md:items-center">
      <div className="hidden md:block md:w-[26px]">
        <Image
          src="/images/bar.png"
          alt="bar"
          width={25.28}
          height={492}
          className="hidden sm:block"
        />
      </div>
      <div className="text-white w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-greatvibes font-normal text-[#FF9F0D] whitespace-nowrap">
          Its Quick & Amusing!
        </h1>
        <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[50px] font-bold font-helvetica whitespace-normal mt-3">
          <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
        </h2>
        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-inter mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start mt-6">
          <Link href="/menu">
            <button className="bg-[#FF9F0D] text-white w-[100px] sm:w-[130px] md:w-[160px] lg:w-[190px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800">
              See More
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-[30px] md:mt-0 md:w-1/2 flex justify-center">
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={1000}
          height={1000}
          className="w-full max-w-[877.8px] h-auto p-4 max-h-[670px] md:p-8"
        />
      </div>
    </section>
  );
};

export default Hero;
