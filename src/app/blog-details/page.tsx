import React from 'react'
import Rightside from './rightside'
import Link from 'next/link'
import Blog from '../blog/leftside'
const page = () => {
  return (
    <div >
        <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Blog Details</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Blog details
          </p>
        </div>
      </section>
      <div className='md:max-w-[1920px] justify-center items-center object-cover'>
        <div className='md:max-w-[1320px] mt-16 flex flex-col lg:flex-row'>
          <div className='md:max-w-2/4'>
            <Rightside />
          </div>
          <div className='md:max-w-1/4 mb-8'>
           <Blog/>
            </div>
          </div>
      </div>
     
    </div>
  )
}

export default page