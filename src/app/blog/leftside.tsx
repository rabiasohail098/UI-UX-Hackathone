import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="md:max-w-lg w-full mx-auto">
        {/* Search Bar */}
        <div className="flex items-center gap-2 w-full h-10 border border-gray-500 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none text-gray-800 px-2 text-sm placeholder-gray-500"
          />
          <IoSearch className="text-gray-500 w-8 h-8 p-1 cursor-pointer" />
        </div>

        {/* Blogger Section */}
        <section className="mt-8 border w-full border-gray-400 rounded-md p-4">
          <div className="text-center">
            <img
              src="/images/cl1.png"
              alt="client"
              className="mx-auto w-20 h-20 rounded-full mb-4"
            />
            <h2 className="text-gray-900 text-lg font-medium">Prince Miyako</h2>
            <p className="text-gray-600 hidden md:block text-sm">Blogger/Photographer</p>
            <div className="flex justify-center gap-1 mt-2">
              {[...Array(5)].map((_, index) => (
                <IoIosStar key={index} className="text-yellow-500" />
              ))}
              <span className="text-gray-500 text-sm">(1 Review)</span>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug VHS try-hard.
            </p>
            <div className="flex justify-center gap-4 text-xl text-gray-800 mt-4">
              <Link href=""><FaLinkedin /></Link>
              <Link href=""><IoLogoGithub /></Link>
              <Link href=""><FaInstagram /></Link>
              <Link href=""><FaFacebook /></Link>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
<div className="mt-8 border border-gray-400 rounded-md p-4">
  <h1 className="text-lg font-bold border-b pb-2 mb-4">Recent Posts</h1>
  {["/images/me7.png", "images/sh2.png", "images/ab3.png", "images/me6.png"].map((image, index) => (
    <div
      key={index}
      className="flex flex-col sm:flex-row gap-4 mb-4 items-start sm:items-center"
    >
      <img
        src={image}
        alt="Post Image"
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
      />
      <div className="flex-1">
        <p className="text-sm text-gray-500">June 22, 2020</p>
        <h2 className="md:text-base text-[14px]  text-gray-800 font-medium hover:text-yellow-500 cursor-pointer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
      </div>
    </div>
  ))}
</div>


        {/* Filter by Menu */}
        <div className="mt-8 border border-gray-400 rounded-md p-4">
          <h1 className="text-lg font-bold border-b pb-2 mb-4">Filter by Menu</h1>
          {["chicken Fry", "Pizza", "Biryani", "Vegetables"].map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 mb-4">
              <img
                src={`/images/${item}.png`}
                alt={item}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm text-gray-500">{item}</p>
                <h2 className="text-base text-gray-800 font-medium">26</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Tags Section */}
        <div className="mt-8 border border-gray-400 rounded-md p-4">
          <h1 className="text-lg font-bold mb-4">Tags</h1>
          <div className="flex flex-wrap gap-2">
            {["Restaurant", "Sandwich", "Tikka", "BBQ", "Pizza", "Health", "FastFood"].map(
              (tag, index) => (
                <span
                  key={index}
                  className="border border-gray-400 text-gray-800 py-1 px-3 text-sm rounded-md cursor-pointer hover:bg-gray-100"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mt-8 border border-gray-400 rounded-md p-4">
          <h2 className="text-lg font-bold mb-4">Photo Gallery</h2>
          <div className="grid grid-cols-3 gap-4">
            {["la1.png", "sh1.png", "me2.png", "menu.png", "la3.png", "sh6.png"].map(
              (photo, index) => (
                <img
                  key={index}
                  src={`/images/${photo}`}
                  alt="Gallery"
                  className="w-full h-16 object-cover rounded-lg cursor-pointer"
                />
              )
            )}
          </div>
        </div>

        {/* Follow Us */}
        <div className="mt-8 border border-gray-400 rounded-md p-4 text-center">
          <h1 className="text-lg font-bold mb-4">Follow Us</h1>
          <div className="flex justify-center gap-4 text-xl text-gray-800">
            <Link href=""><FaLinkedin /></Link>
            <Link href=""><IoLogoGithub /></Link>
            <Link href=""><FaYoutube /></Link>
            <Link href=""><FaInstagram /></Link>
            <Link href=""><FaFacebook /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
