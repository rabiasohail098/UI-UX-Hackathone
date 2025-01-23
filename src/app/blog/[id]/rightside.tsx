"use client"
import React, { useState } from 'react';
import { IoCalendarNumberOutline } from "react-icons/io5";
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
      <div>
                       
              {/* tag div */}
              <div className='md:max-w-[872px] my-6 flex flex-col md:flex-row justify-between  border-[1px] '>
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
          <div key={comment.id} className="flex md:flex-row flex-col mt-8 gap-6">
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
      <div className="md:max-w-[972px] px-4 space-y-8 my-8 h-fit">
        <h2 className="font-bold font-helvetica mt-8 text-[32px]">Post a comment</h2>
        <hr />
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row px-2  gap-4">
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
              className="border p-2 rounded md:w-1/2 px-2 w-full"
              required
            />
          </div>
          <div className="flex px-2 flex-col">
           
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
  )
}

export default Rightside