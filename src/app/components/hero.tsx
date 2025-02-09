import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FacebookIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full bg-[#0D0D0D] text-[#FFFFFF]">
      <div className="bg-black w-full px-6 sm:px-10 md:px-32 gap-6 py-8 md:py-12 lg:py-16 flex flex-col-reverse md:flex-row items-center">
        {/* Social Media Icons (Hidden on Mobile) */}
        
         <div className="hidden md:flex flex-col items-center w-[130px] space-y-12">
          <div className="w-[2px] bg-white h-[120px]"></div>
          <div className="-ml-[8px] space-y-4">
            <p><Link href="https://www.facebook.com/parniyasohail098"><FacebookIcon size={20} /></Link></p>
            <p><Link href="www.youtube.com/@Parniya098"><FaYoutube size={20} className="text-orange-500"/></Link></p>
            <p><Link href="https://www.instagram.com/rabiasohail642/"><FaInstagram size={20} /></Link></p>
          </div>
          <div className="w-[2px] bg-white h-[120px]"></div>
        </div>

        {/* Text Content */}
        <div className="text-white md:w-[572px] flex flex-col items-center md:items-start text-center md:text-left px-4 sm:px-8">
          <h1 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-greatvibes font-normal text-[#FF9F0D]">
            Its Quick & Amusing!
          </h1>
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[50px] font-bold font-helvetica mt-3">
            <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
          </h2>
          <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-inter mt-4 max-w-[418px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start mt-6">
            <Link href="/menu">
              <button className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white w-[130px] sm:w-[160px] md:w-[190px] h-[40px] sm:h-[50px] md:h-[60px] rounded-[40px]">
                See More
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full max-w-[677px]">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={1000}
            height={1000}
            className="w-full object-cover"
          />
        </div>

       

      </div>
    </div>
  );
};

export default Hero;
