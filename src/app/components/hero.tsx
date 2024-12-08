import React from "react";
import Image from "next/image";
const Hero = ()=> {
  return (
    <section className="bg-black px-3 md:px-[80px] gap-10 lg:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]">
      <div>
        <Image src="/images/bar.png" alt="bar" width={25.28} height={492}/>
      </div>
      <div className="text-white w-full md:w-[50%]">
        <h1 className="text-[20px] md:text-[28px] lg:text-[32px] font-greatvibes font-normal text-[#FF9F0D] whitespace-nowrap text-center md:text-left">
          Its Quick & Amusing!
        </h1>

        <h2 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold font-helvetica whitespace-normal mt-3 text-center md:text-left">
          <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
        </h2>

        <p className="text-[12px] md:text-[14px] font-inter lg:text-[16px] font-normal mt-4 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
          <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800">
            See More
          </button>
        </div>
      </div>
      <div className="mt-[30px] md:mt-0 md:w-[50%] flex justify-center">
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={1000}
          height={1000}
          className=" md:w-auto max-w-[877.8px] h-auto p-8 max-h-[670px] md:max-w-full"
        />
      </div>
    </section>
  );
}

export default Hero;