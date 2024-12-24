"use client"
import React, { useState } from 'react';
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { PiUserCirclePlus, PiQuotes } from "react-icons/pi";
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Rightside = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "MD Sojib Khan",
      date: "June 22, 2020",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. ",
      avatar: "/images/u1.png",
    },
    {
      id: 2,
      name: "MD Sojib Khan",
      date: "June 22, 2020",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. ",
      avatar: "/images/u2.png",
    },
    {
      id: 3,
      name: "MD Sojib Khan",
      date: "June 22, 2020",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. ",
      avatar: "/images/u3.png",
    },
  ]);

  const [newComment, setNewComment] = useState({ name: '', email: '', comment: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, comment } = newComment;

    if (!name || !email || !comment) {
      setError('All fields are required!');
      return;
    }

    setComments([
      ...comments,
      {
        id: comments.length + 1,
        name,
        date: new Date().toLocaleDateString(),
        comment,
        avatar: '/images/avatar.png', // Use a default avatar
      },
    ]);

    // Clear the form
    setNewComment({ name: '', email: '', comment: '' });
    setError('');
  };

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
                  <div className='flex gap-4 p-6 md:mt-[6rem] mt-[10rem]'>
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
              <div className='md:max-w-[872px] mb-16 px-8 flex flex-col md:flex-row justify-between p-4 border-[1px] '>
                  <div className=' flex gap-4'>
                      <label htmlFor="tags" className='font-bold text-[16px]'>Tags: </label>
                      <p>Restaurant, Dinner, Pizza, Yummy, </p>
                  </div>
                  <div className=' flex gap-4'>
                      <label htmlFor="tags" className='font-bold text-[16px]'>Share: </label>
                      <p className='flex gap-3'>
                      <Link href="https://www.linkedin.com/in/rabia-sohail-684740278/"><FaLinkedin size={20}/></Link>
            <Link href="https://github.com/rabiasohail098"><IoLogoGithub size={20}/></Link>
            <Link href="www.youtube.com/@Parniya098"><FaYoutube size={20}/></Link>
            <Link href="https://www.instagram.com/rabiasohail642/"><FaInstagram size={20}/></Link>
            <Link href="https://www.facebook.com/parniyasohail098"><FaFacebook size={20}/></Link>

                      </p>
                  </div>
              </div>
              {/* comments div */}
              <div className="md:max-w-[872px]">
      {/* Existing Code */}
      
      {/* Comments Section */}
      <div className="md:max-w-[872px] px-8 h-fit">
        <h2 className="font-bold font-helvetica text-[32px]">Comments - {comments.length}</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="flex mt-8 gap-6">
            <Image src={comment.avatar} alt="user" width={72} height={65} className="rounded-full w-[72px] h-[65px]" />
            <div className="space-y-2">
              <div className="flex gap-2">
                <h2 className="w-[126px] h-[24px] font-bold font-inter text-[16px]">{comment.name}</h2>
              </div>
              <p className="flex gap-2">
                <IoCalendarNumberOutline size={26} className="text-[#FF9F0D]" />
                <span className="opacity-30 font-[400] font-helvetica text-[14px]">{comment.date}</span>
              </p>
              <p className="font-[400] font-helvetica text-[16px]">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Post a Comment Section */}
      <div className="md:max-w-[872px] px-8 space-y-8 my-8 h-fit">
        <h2 className="font-bold font-helvetica mt-8 text-[32px]">Post a comment</h2>
        <hr />
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row  gap-4">
            <input
              id="name"
              type="text"
              placeholder='Name'
              value={newComment.name}
              onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
              className="border p-2 rounded md:w-1/2 w-full"
              required
            />
         
            <input
              id="email"
              type="email"
              placeholder='Email'
              value={newComment.email}
              onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
              className="border p-2 rounded md:w-1/2 w-full"
              required
            />
          </div>
          <div className="flex flex-col">
           
            <textarea
              id="comment"
              value={newComment.comment}
              placeholder='Write a comment'
              onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
              className="border h-[244px] p-2 rounded"
              rows={4}
              required
            />
          </div>
          <button type="submit" className="bg-[#FF9F0D] w-[212px] h-[56]  text-white p-2 rounded font-bold">Post a comment</button>
        </form>
      </div>
              </div>
          </div>
          </div>
  );
};

export default Rightside;