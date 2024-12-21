import React from 'react'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { PiUserCirclePlus } from "react-icons/pi";
import { PiQuotes } from "react-icons/pi";
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Rightside = () => {
  return (
      <div className='md:max-w-[872px] '>
          <div>
              {/* First div */}
      <div className='md:max-w-[872px] h-[832px] top-[530px] px-8 space-y-4 left-[300px]'>
          <div  className="bg-cover bg-center md:h-[520px] h-[300px] md:max-w-[872px] "
        style={{ backgroundImage: "url('/images/ab2.png')" }}>
          </div>
          <div className='md:max-w-[872px] h-fit flex gap-2 '>
              <IoCalendarNumberOutline size={24} className='text-[#ff9f0d]' /><span className='text-[16px] font-[400] font-inter'>Feb 14, 2022</span>&#47;
              <TiMessages size={24} className='text-[#ff9f0d]' /><span className='text-[16px] font-[400] font-inter'>3</span>&#47;
              <PiUserCirclePlus size={24} className='text-[#ff9f0d]' /><span className='text-[16px] font-[400] font-inter'>Admin</span>
          </div>
   <h2 className='md:max-w-[860px] font-helvetica font-bold text-[24px]'>10 Reasons To Do A Digital Detox Challenge</h2>
                  <p className='md:max-w-[850px] md:h-[96px] text-justify h-fit text-[16px] font-[400] justify-normal mb-4 font-inter'>Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum suspendisse hac integer leo erat aliquam ut himenaeos. <br /> <br />
                  Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac.
 Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat 
himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.</p>   
              </div>
              {/* second div */}
              <div className='md:max-w-[840px] mx-8 bg-[#FF9F0D] md:mt-8  mb-8 text-[#ffffff] h-[176px] top-[1431px] left-[300px]'>
                  <div className='flex gap-4 p-6 mt-[5rem]'>
                      <PiQuotes size={ 98} />
<p className='font-helvetica font-bold text-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. </p>
                  </div>
                  </div>           
                  <p className='text-[#000000] font-[400] font-inter px-8 text-justify text-[16px] mt-8 mb-8'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </p>
              {/* third div */}
              <div className='flex flex-col md:flex-row md:max-w-[872px] gap-6'>
                  {/* leftside div */}
                  <div className='md:w-1/2 w-full '>
                      <p className='w-full lg:hidden block p-4  text-justify px-8'>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br /><br />
                          </p> <span className='w-full p-4 block text-justify px-8'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
                         </span>
                      
                  </div>
                  {/* image div */}
                  <div className='md:w-1/2 w-full'>
                      <Image src="/images/b1.png" alt="food" width={ 424} height={366 }  className="object-cover px-8 mt-8"/> 
                  </div>
              </div>
              <p className='text-[#000000] font-[400] px-8 text-justify font-inter text-[16px] mt-8 mb-8'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br/> <br />
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.     </p>
              {/* tag div */}
              <div className='md:max-w-[872px] px-8 flex flex-col md:flex-row justify-between p-4 border-[1px] '>
                  <div className=' flex gap-4'>
                      <label htmlFor="tags" className='font-bold text-[16px]'>Tags: </label>
                      <p>Restaurant, Dinner, Pizza, Yummy, </p>
                  </div>
                  <div className=' flex gap-4'>
                      <label htmlFor="tags" className='font-bold text-[16px]'>Share: </label>
                      <p className='flex gap-3'>
                      <FaFacebookF size={18} />
                      <FaTwitter size={18} />
                      <FaInstagram size={18} />
                      <FaLinkedin size={18} />

                      </p>
                  </div>
              </div>
          </div>
          </div>
  )
}

export default Rightside