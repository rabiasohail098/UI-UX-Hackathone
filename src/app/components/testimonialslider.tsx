'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import { PiQuotesLight } from 'react-icons/pi';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  { id: 1, img: '/images/cl1.png', name: 'John Doe', role: 'Food Blogger' },
  { id: 2, img: '/images/1122.png', name: 'Sarah Lee', role: 'Chef' },
  { id: 3, img: '/images/123.png', name: 'Mark Smith', role: 'Restaurant Critic' },
  { id: 4, img: '/images/12345.png', name: 'Emily Johnson', role: 'Food Enthusiast' },
  { id: 5, img: '/images/va.png', name: 'Michael Brown', role: 'Food Photographer' }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  arrows: false // ✅ This fixes arrow-related issues
};

const HelpPage: React.FC = () => {
  return (
    <div className="bg-[#0D0D0D] px-4 sm:px-8 lg:px-16 py-12">
      <div className="text-left mb-12 ml-4 sm:ml-8 lg:ml-12">
        <p className="font-greatvibes text-[24px] sm:text-[32px] text-orange-500">Testimonials</p>
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white">What our clients are saying</h2>
      </div>

      <div className="flex flex-col items-center text-center pb-8 w-full max-w-4xl mx-auto">
        <Slider {...settings} className="w-full">
          {data.map((item) => (
            <div key={item.id} className="p-6">
              <div className="flex justify-center">
                <Image src={item.img} alt={item.name} width={133} height={134} className="rounded-full object-cover mb-4" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <PiQuotesLight size={47} className="text-orange-500 mb-4 mx-auto" />
                <p className="text-lg text-gray-700">
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
                <div className="flex justify-center mt-4 gap-1">
                  <FaStar size={20} className="text-[#FF9F0D]" />
                  <FaStar size={20} className="text-[#FF9F0D]" />
                  <FaStar size={20} className="text-[#FF9F0D]" />
                  <FaStar size={20} className="text-[#FF9F0D]" />
                  <CiStar size={20} />
                </div>
                <h2 className="text-gray-900 font-bold text-xl mt-4">{item.name}</h2>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HelpPage;
