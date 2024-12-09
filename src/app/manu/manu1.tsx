import React from 'react'
import Link from 'next/link'
const Manu1 = () => {
  return (
    <div className="bg-[url('/images/bg.png')] bg-cover bg-center flex justify-center items-center w-full h-[320px] md:h-[500px] lg:h-[600px]">
    <div className="text-center">
<h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white">Our Menu</h1>
      <div className="flex justify-center items-center mt-4 gap-2 text-[16px] md:text-[18px] lg:text-[20px] text-white">
    <p><Link href="/">Home</Link></p><span>&gt;</span><p className="text-[#ff9f0d]">Menu</p>
      </div>
</div>
</div>
  )
}

export default Manu1