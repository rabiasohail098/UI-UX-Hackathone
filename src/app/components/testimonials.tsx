import React from "react";
import Image from "next/image";
import { PiQuotesLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Testimonials = () => {
  return (
    <div className="bg-[#0D0D0D] px-4 sm:px-8 lg:px-16 py-12">
      <div className="text-left mb-12 ml-4 sm:ml-8 lg:ml-12">
        <p className="font-greatvibes text-[24px] sm:text-[32px] text-orange-500">
          Testimonials
        </p>
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
          What our clients are saying
        </h2>
      </div>

      <div className="flex flex-col items-center text-center pb-8">
        <Image
          src="/images/test.png"
          alt="test"
          width={133}
          height={134}
          className="rounded-full relative mb-[-50px]"
        />
        <div className="max-w-4xl mx-auto  bg-[#ffffff] p-8 rounded-lg shadow-lg">
          <PiQuotesLight
            size={47}
            className="text-orange-500 mt-10 mx-auto mb-4"
          />
          <p className="leading-relaxed text-[#4F4F4F] text-lg">
            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
            taxidermy 90&apos;s cronut +1 kinfolk. Single-origin coffee ennui
            shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen
            squid fanny pack vaporware. Man bun next level coloring book
            skateboard four loko knausgaard. Kitsch keffiyeh master cleanse
            direct trade indigo juice before they sold out gentrify plaid
            gastropub normcore XOXO 90&apos;s pickled jean shorts. Slow-carb
            next level ethical authentic, scenester sriracha forage franzen
            organic drinking vinegar.
          </p>
          <span className="flex md:ml-[40%] ml-[20%] mt-4 gap-2">
            <FaStar size={24} className="text-[#FF9F0D]" />
            <FaStar size={24} className="text-[#FF9F0D]" />
            <FaStar size={24} className="text-[#FF9F0D]" />
            <FaStar size={24} className="text-[#FF9F0D]" />
            <CiStar size={24} />
          </span>
          <h2 className="text-[#333333] font-helvetica  font-bold text-2xl my-4">
            Alamin Hasan
          </h2>
          <p className="text-[#828282] text-[16px] font-helvetica ">
            Food Specialist
          </p>
        </div>
      </div>
      <Image
        src="/images/Dot.png"
        alt="dots"
        width={86}
        height={16}
        className="md:ml-[47%] ml-[27%]"
      />
    </div>
  );
};

export default Testimonials;
