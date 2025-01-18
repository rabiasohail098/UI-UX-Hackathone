import React from 'react';
import Image from 'next/image';

const FromMenu = () => {
  return (
    <div className='max-w-[1920px] h-fit  bg-[#0D0D0D] text-[#ffffff]'>
    <div className="bg-[#0D0D0D] md:max-w-[1320px]  px-4 sm:px-8 lg:px-16 lg:py-12 ">
      <div className="text-center ">
        <p className="font-greatvibes text-[24px] sm:text-[32px] text-orange-500">Choose & Pick</p>
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
          <span className="text-orange-500">Fr</span>om Our Menu
        </h2>
      </div>
      <div className="  flex justify-center mb-12">
        <ul className="flex flex-wrap justify-center gap-4 text-white text-sm sm:text-base">
          <li className="text-orange-500 font-bold">Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
          <li>Dessert</li>
          <li>Drink</li>
          <li>Snack</li>
          <li>Soups</li>
        </ul>
      </div>
      <div className="md:max-w-[1320px]  flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className=" md:lg:w-[515px] bg-[url(/images/me9.png)] sm:w-[400px] w-full flex justify-center">
        <div className='  '>
          <Image 
            src="/images/me10.png" 
            alt="plate" 
            width={366} 
            height={362} 
            className="p-2 lg:mt-[30px] md:mt-[40px] sm:mt-[50px] mt-[60px]  lg:pl-[20px] md:pl-[30px] sm:pl-[40px] pl-[50px] md:max-w-[336px] w-full sm:max-w-sm lg:max-w-md "
          />
          </div>
        </div>
        <div className=" lg:w-[70%] grid md:3-[65%]  w-full grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-6">
            <div className="flex items-center  md:max-w-[376px] w-full gap-4">
              <div className="w-[80px]  h-[79px] relative">
                <Image 
                  src="/images/me1.png" 
                  alt="Lettuce Leaf" 
                  fill 
                  className="rounded-[2px] w-full object-cover"
                />
              </div>
              <div  className='md:w-[180px] w-full'>
                <h3 className="text-lg font-semibold text-white">Lettuce Leaf</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">12.5$</p>
              </div>
            </div>
            <div className="flex items-center md:max-w-[376px] w-full gap-4">
              <div className="w-[80px] h-[79px] relative">
                <Image 
                  src="/images/me2.png" 
                  alt="Lettuce Leaf" 
                  fill 
                  className="rounded-[2px] object-cover"
                />
              </div>
              <div  className='md:w-[180px] w-full'>
                <h3 className="text-lg font-semibold text-white">Lettuce Leaf</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">12.5$</p>
              </div>
            </div>
            <div className="flex items-center md:max-w-[376px] w-full gap-4">
              <div className="w-[80px] h-[79px] relative">
                <Image 
                  src="/images/me3.png" 
                  alt="Lettuce Leaf" 
                  fill 
                  className="rounded-[2px] object-cover"
                />
              </div>
              <div  className='md:w-[180px] w-full'>
                <h3 className="text-lg font-semibold text-white">Lettuce Leaf</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">12.5$</p>
              </div>
            </div>
            <div className="flex items-center md:max-w-[376px] w-full gap-4">
              <div className="w-[80px] h-[79px] relative">
                <Image 
                  src="/images/me4.png" 
                  alt="Fresh Breakfast" 
                  fill 
                  className="rounded-[2px] object-cover"
                />
              </div>
              <div  className='md:w-[180px] w-full'>
                <h3 className="text-lg font-semibold text-white">Fresh Breakfast</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">14.5$</p>
              </div>
            </div>
        
          </div>
          <div className="space-y-6">
            <div className="flex items-center md:max-md:max-w-[376px] w-full  gap-4">
              <div className="w-[80px] h-[79px] relative">
                <Image 
                  src="/images/me3.png" 
                  alt="Mild Butter" 
                  fill 
                  className="rounded-[2px] object-cover"
                />
              </div>
              <div className='md:w-[180px] w-full'>
                <h3 className="text-lg font-semibold text-white">Mild Butter</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">12.5$</p>
              </div>
            </div>
            <div className="flex items-center md:max-md:max-w-[376px] w-full  gap-4">
              <div className="w-[80px] h-[79px] relative">
                <Image 
                  src="/images/me5.png" 
                  alt="Mild Butter" 
                  fill 
                  className="rounded-[2px] object-cover"
                />
              </div>
              <div  className='md:w-[180px] w-full'>
                <h3 className="text-lg font-semibold text-white">Mild Butter</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">12.5$</p>
              </div>
            </div>
            <div className="flex items-center md:max-md:max-w-[376px] w-full  gap-4">
              <div className="w-[80px] h-[79px] relative">
                <Image 
                  src="/images/me6.png" 
                  alt="Fresh Breakfast" 
                  fill 
                  className="rounded-[2px] object-cover"
                />
              </div>
              <div  className='md:w-[180px] w-full'>
                <h3 className="text-lg font-semibold text-white">Fresh Breakfast</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">14.5$</p>
              </div>
            </div>
            <div className="flex items-center md:max-md:max-w-[376px] w-full gap-4">
              <div className="w-[80px]  h-[79px] relative">
                <Image 
                  src="/images/me7.png" 
                  alt="Mild Butter" 
                  fill 
                  className="rounded-[2px] "
                />
              </div>
              <div  className='md:w-[180px] w-full'>
                <h3 className="text-lg font-semibold text-white">Mild Butter</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">12.5$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default FromMenu;