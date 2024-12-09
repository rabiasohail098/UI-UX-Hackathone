import React from 'react';
import Image from 'next/image';

const FromMenu = () => {
  return (
    <div className="bg-[#0D0D0D] px-4 sm:px-8 lg:px-16 py-12">
      <div className="text-center mb-12">
        <p className="font-greatvibes text-[24px] sm:text-[32px] text-orange-500">Choose & Pick</p>
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
          <span className="text-orange-500">Fr</span>om Our Menu
        </h2>
      </div>
      <div className="flex justify-center mb-12">
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

      {/* Menu Content */}
      <div className=" flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
        <div className='bg-[url(/images/me9.png)] w-[515px] h-[406px]'>
          <Image 
            src="/images/me10.png" 
            alt="plate" 
            width={366} 
            height={362} 
            className="p-4 mt-[30px] ml-[60px] max-w-sm sm:max-w-md lg:max-w-lg "
          />
          </div>
        </div>

        {/* Menu Details */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/images/me1.png" 
                  alt="Lettuce Leaf" 
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Lettuce Leaf</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">12.5$</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/images/me2.png" 
                  alt="Lettuce Leaf" 
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Lettuce Leaf</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">12.5$</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/images/me3.png" 
                  alt="Lettuce Leaf" 
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Lettuce Leaf</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">12.5$</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/images/me4.png" 
                  alt="Fresh Breakfast" 
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Fresh Breakfast</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">14.5$</p>
              </div>
            </div>
        
          </div>
          {/* Second Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/images/me3.png" 
                  alt="Mild Butter" 
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Mild Butter</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">12.5$</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/images/me5.png" 
                  alt="Mild Butter" 
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Mild Butter</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">12.5$</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/images/me6.png" 
                  alt="Fresh Breakfast" 
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Fresh Breakfast</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">14.5$</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/images/me7.png" 
                  alt="Mild Butter" 
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Mild Butter</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">12.5$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromMenu;
