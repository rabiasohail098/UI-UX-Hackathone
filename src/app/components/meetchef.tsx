import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Meetchef = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0D0D0D] px-6 md:px-16 lg:px-24 space-y-12">
    <div className="text-center space-y-4">
  <p className="font-greatvibes text-[16px] md:text-[18px] font-normal text-[#FF9F0D]"> Chefs</p>
<h2 className="font-helvetica text-[28px] md:text-[36px] lg:text-[48px] font-bold text-[#FFFFFF]"><span className='text-[#FF9F0D]'>Me</span>et Our Chef</h2>
    </div>

    <div className="w-full grid grid-cols-2 sm:grid-cols-3 px-28 gap-6 lg:grid-cols-4 gap-2 items-center justify-center">
      <div className="flex items-center justify-center">
        <Image
          src="/images/ch1.png"
          alt="Partner 1"
          width={306}
          height={329}
          className="w-full max-w-[240px] sm:max-w-[140px] lg:max-w-[240px] h-auto"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/images/ch2.png"
          alt="Partner 2"
          width={306}
          height={329}
          className="w-full max-w-[240px] sm:max-w-[140px] lg:max-w-[240px] h-auto"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/images/ch3.png"
          alt="Partner 3"
          width={306}
          height={329}
          className="w-full max-w-[240px] sm:max-w-[140px] lg:max-w-[240px] h-auto"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/images/ch4.png"
          alt="Partner 4"
          width={306}
          height={329}
          className="w-full max-w-[240px] sm:max-w-[140px] lg:max-w-[240px] h-auto"
        />
      </div>
    </div>
    <button className='w-[155px] h-[50px] rounded-[25px] border-[1px] text-[#FFFFFF] border-[#FF9F0D]'><Link href="/chef">See More</Link></button>
  </div>
  )
}

export default Meetchef