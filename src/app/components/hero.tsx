import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram} from "react-icons/fa6";
import {  FaYoutube } from "react-icons/fa";
import { FacebookIcon } from "lucide-react";
const Hero = () => {
  return (
    <div className="w-full bg-[#0D0D0D] text-[#FFFFFF]">
    <div className= "bg-black w-full px-32  gap-3  py-8 md:py-12 lg:py-16 flex flex-col md:flex-row ">
      
      <div className="hidden md:block w-full md:w-[130px] space-y-8">
          <div className="w-[2px] rounded bg-white h-[120px]"></div>
         
          <div className="-ml-[12px] space-y-8">
            <div>
            <Link href="https://www.facebook.com/parniyasohail098"><FacebookIcon size={ 20} />
            </Link>
          </div>
            <div>
            <Link href="www.youtube.com/@Parniya098"><FaYoutube size={ 20} className="text-orange-500"/></Link>
          </div>
            <div>
            <Link href="https://www.instagram.com/rabiasohail642/"><FaInstagram size={ 20} />
            </Link>
           </div>
          </div>
          <div className="w-[2px] rounded bg-white h-[120px]"></div>
      </div>
      <div className="text-white  md:w-[572px] flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-greatvibes md:w-[249px] w-full font-normal text-[#FF9F0D] whitespace-nowrap">
          Its Quick & Amusing!
        </h1>
        <h2 className="text-[24px] md:w-[472px] w-full  sm:text-[28px] md:text-[36px] lg:text-[50px] font-bold font-helvetica whitespace-normal mt-3">
          <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
        </h2>
        <p className="text-[12px] md:w-[418px] w-full sm:text-[14px] md:text-[16px] lg:text-[18px] font-inter mt-4">
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
      <div className="mt-[30px] md:mt-0 w-full">
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={1000}
          height={1000}
          className="w-full md:max-w-[677.8px] object-cover  md:max-h-[670px]"
        />
      </div>
      </div>
      </div>
  );
};

export default Hero;