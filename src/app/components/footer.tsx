import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className="bg-[#0D0D0D] h-[774px] w-full md:px-[150px] pt-12">
        <div className="max-w-full mx-auto border-b border-[#FF9F0D] pb-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="w-full md:w-[45%] mb-8 md:mb-0">
              <h2 className="text-[24px] md:text-[32px] font-helvetica font-bold text-[#FFFFFF]">
                <span className='text-[#FF9F0D]'>St</span>ill You Need Our Support?
              </h2>
              <p className="text-[14px] md:text-[16px] font-helvetica font-normal text-[#FFFFFF] mt-2">
                Don’t wait; make a smart & logical quote here. It’s pretty easy.
              </p>
            </div>
            <div className="flex flex-col md:flex-row w-full md:w-[50%]">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="font-inter font-normal text-[14px] md:text-[16px] text-[#FFFFFF] bg-[#FF9F0D] p-2 "
              />
              <button className="font-inter font-normal text-[14px] md:text-[16px] text-[#FF9F0D] bg-[#FFFFFF] p-2 md:p-3 rounded-[2px] hover:text-[#000000] hover:bg-[#eee3d3] transition duration-300">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-12 mt-12">
          <div className="w-full md:w-[35%] sm:w-[45%] mb-8 md:mb-0">
            <h2 className="font-helvetica text-[16px] md:text-[20px] font-bold text-[#FFFFFF] mb-2">About Us</h2>
            <p className="font-helvetica text-[14px] md:text-[16px] font-normal text-[#FFFFFF]">
              Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional
              chauffeured car service in major cities across the world.
            </p>
            <div className="flex items-start gap-4 mt-4">
              <div className="bg-[#FF9F0D] p-2 rounded-md">
                <Image src="/images/icon.png" alt="icon" width={39} height={39} />
              </div>
              <div>
                <p className="font-inter text-[14px] md:text-[16px] font-normal text-[#FFFFFF]">Opening Hours</p>
                <p className="font-inter text-[12px] md:text-[14px] font-normal text-[#FFFFFF]">Mon - Sat (8.00 - 6.00)</p>
                <p className="font-inter text-[12px] md:text-[14px] font-normal text-[#FFFFFF]">Sunday - Closed</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[18%] md:block hidden mb-8 md:mb-0">
            <h2 className="font-bold text-[16px] hidden md:text-[18px] text-[#FFFFFF] mb-4">Useful Links</h2>
            <ul className="space-y-2">
              {['About', 'News', 'Patrons', 'Team', 'Menu', 'Contact'].map((link, index) => (
                <li key={index} className="font-normal text-[14px] md:text-[16px] text-[#FFFFFF]">{link}</li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[18%] md:block hidden mb-8 md:mb-0">
            <h2 className="font-bold text-[16px] md:text-[18px]  text-[#FFFFFF] mb-4">Help?</h2>
            <ul className="space-y-2">
              {['FAQ', 'Terms & Conditions', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'].map((item, index) => (
                <li key={index} className="font-normal text-[14px] md:text-[16px] text-[#FFFFFF]">{item}</li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[35%] sm:w-[45%] mb-8 md:mb-0">
            <h2 className="font-bold text-[16px] md:text-[18px] text-[#FFFFFF] mb-4">Recent Posts</h2>
            {['Is fast food good for your body?', 'Change your food habit with organic food', 'Do you like fast food for your life?'].map((post, index) => (
              <div key={index} className="flex gap-4 mb-4">
                <Image src="/images/fo.png" alt="footer" width={80} height={80} className="w-[75px] h-[75px] object-cover" />
                <div>
                  <p className="text-[14px] md:text-[16px] font-helvetica font-normal text-[#FFFFFF]">{post}</p>
                  <p className="text-[12px] md:text-[14px] font-helvetica font-normal text-[#FFFFFF] opacity-50">February 28, 2022</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
