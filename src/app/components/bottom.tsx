import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Image from 'next/image';

const Bottom = () => {
  return (
    <div className="w-full max-w-full h-[99px] bg-[#4F4F4F] relative flex items-center justify-center">
      <div className="w-full max-w-[1318px] h-[33px] flex flex-col md:flex-row text-center justify-between items-center px-4 md:px-[150px]">
        <p className="font-inter font-normal text-[16px] text-[#FFFFFF]">
          Copyright © 2022 by Ayeman. All Rights Reserved.
        </p>
        <div className="flex gap-3 justify-center mt-2 md:mt-0">
          <p className="w-[35.85px] h-[33px] flex items-center justify-center rounded-[2px] bg-[#FFFFFF]">
            <FaFacebookF size={18} />
          </p>
          <p className="w-[35.85px] h-[33px] flex items-center justify-center rounded-[2px] bg-[#FFFFFF]">
            <FaTwitter size={18} />
          </p>
          <p className="w-[35.85px] h-[33px] flex items-center justify-center rounded-[2px] bg-[#FFFFFF]">
            <FaInstagram size={18} />
          </p>
          <p className="w-[35.85px] h-[33px] flex items-center justify-center rounded-[2px] bg-[#FFFFFF]">
            <FaYoutube size={18} className="text-[#FF9F0D]" />
          </p>
          <span className="w-[35.85px] h-[33px] flex items-center justify-center rounded-[2px] bg-[#FFFFFF]">
            <Image src="/images/pa.png" alt="pana" width={16} height={18} className="w-[16px] h-[18px]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
