import React from 'react'
import Rightside from './rightside'
import Link from 'next/link'
import Sidebar from '../components/sidebar'
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
        <div className='md:max-w-[1320px] mt-16 px-8 flex flex-col md:flex-row'>
          <div className='md:max-w-3/4 w-full'>
            <Rightside />
          </div>
          <div className='md:max-w-1/4 sm:w-2/4 w-full mb-16'>
           <Sidebar/>
            </div>
          </div>
      </div>
     
    </div>
  )
}

export default page