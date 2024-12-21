"use client";
import React, { useState } from "react";
import { LuUserRound } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import Link from "next/link";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data.message); // Show the response from API
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      {/* Header Section */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Sign Up Page</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            › Sign Up
          </p>
        </div>
      </section>

      {/* Form Section */}
      <div className="max-w-[1920px]">
        <div className="flex flex-col items-center justify-center mx-auto max-w-[1200px] px-4 md:px-8 lg:px-12 py-10 gap-6 rounded-lg">
          <form
            onSubmit={handleSubmit} // Correctly attached to handleSubmit
            className="bg-white w-full max-w-[424px] p-6 space-y-6 rounded-md shadow-[0_0_10px_0_rgba(155,159,13,0.4)]"
          >
            <h2 className="text-[20px] font-bold text-gray-800">Sign Up</h2>
            {/* Name Input */}
            <div className="flex items-center border rounded-md px-3 py-2 gap-2">
              <LuUserRound size={20} className="text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange} // Correctly attached to handleInputChange
                placeholder="Name"
                className="w-full outline-none text-sm text-gray-700"
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center border rounded-md px-3 py-2 gap-2">
              <IoMailOutline size={20} className="text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange} // Correctly attached to handleInputChange
                placeholder="Email"
                className="w-full outline-none text-sm text-gray-700"
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center border rounded-md px-3 py-2 gap-2">
              <RiLockPasswordLine size={20} className="text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange} // Correctly attached to handleInputChange
                placeholder="Password"
                className="w-full outline-none text-sm text-gray-700"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <label className="text-sm text-gray-600">Remember me?</label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#ff9f0d] text-white py-2 rounded-md font-medium hover:bg-[#e88e0c]"
            >
              Sign Up
            </button>

            {/* Forgot Password */}
            <p className="text-right text-sm text-gray-500 hover:underline">
              Forgot Password?
            </p>

            {/* OR Divider */}
            <div className="flex items-center justify-center gap-2">
              <hr className="w-1/3 border-gray-300" />
              <span className="text-sm text-gray-500">OR</span>
              <hr className="w-1/3 border-gray-300" />
            </div>

            {/* Sign Up with Google */}
            <button className="flex items-center justify-center gap-2 border rounded-md w-full py-2">
              <FcGoogle size={20} />
              <span className="text-sm text-gray-600">Sign Up with Google</span>
            </button>

            {/* Sign Up with Apple */}
            <button className="flex items-center justify-center gap-2 border rounded-md w-full py-2">
              <FaApple size={20} />
              <span className="text-sm text-gray-600">Sign Up with Apple</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
