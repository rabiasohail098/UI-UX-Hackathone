import React from 'react'
import Blog from './leftside'
import Rightside from './rightside'
import Link from 'next/link'
const page = () => {
  return (
    <div >
        <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Blog List</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Blog
          </p>
        </div>
      </section>
      <div className='md:max-w-[1920px] justify-center items-center object-cover'>
        <div className='md:max-w-[1320px] mt-16 px-24 flex flex-col lg:flex-row'>
          <div className='md:max-w-3/4'>
            <Rightside />
          </div>
          <div className='md:max-w-1/4'>
            <Blog />
            </div>
          </div>
      </div>
     
    </div>
  )
}

export default page