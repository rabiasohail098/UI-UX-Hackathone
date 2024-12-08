import React from "react";
import Image from "next/image";

const Manu7 = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 px-6 md:px-16 lg:px-24 space-y-12">
      <div className="text-center space-y-4">
    <p className="font-inter text-[16px] md:text-[18px] font-normal text-gray-600">Partners & Clients</p>
<h2 className="font-helvetica text-[28px] md:text-[36px] lg:text-[48px] font-bold text-gray-800">We work with the best people</h2>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 items-center justify-center">
        <div className="flex items-center justify-center">
          <Image
            src="/images/i1.png"
            alt="Partner 1"
            width={240}
            height={129}
            className="w-full max-w-[180px] md:max-w-[200px] lg:max-w-[240px] h-auto"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/i2.png"
            alt="Partner 2"
            width={166}
            height={129}
            className="w-full max-w-[140px] md:max-w-[160px] lg:max-w-[166px] h-auto"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/i3.png"
            alt="Partner 3"
            width={144}
            height={127}
            className="w-full max-w-[120px] md:max-w-[140px] lg:max-w-[144px] h-auto"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/i4.png"
            alt="Partner 4"
            width={130}
            height={129}
            className="w-full max-w-[110px] md:max-w-[120px] lg:max-w-[130px] h-auto"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/i5.png"
            alt="Partner 5"
            width={170}
            height={129}
            className="w-full max-w-[140px] md:max-w-[160px] lg:max-w-[170px] h-auto"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/i6.png"
            alt="Partner 6"
            width={114}
            height={129}
            className="w-full max-w-[100px] md:max-w-[110px] lg:max-w-[114px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Manu7;
