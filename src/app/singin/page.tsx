import React from "react";
import { LuUserRound } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className="bg-[url('/images/bg.png')] bg-cover bg-center flex justify-center items-center max-w-[1920px] w-full h-[320px] md:h-[500px] lg:h-[600px]">
        <div className="text-center">
   <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white">404 Error</h1>
          <div className="flex justify-center items-center mt-4 gap-2 text-[16px] md:text-[18px] lg:text-[20px] text-white">
        <p><Link href="/">Home</Link></p><span>&gt;</span><p className="text-[#ff9f0d]">404</p>
          </div>
    </div>
      </div>
      <div className="max-w-[1920px]">
      <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[1200px] px-4 md:px-8 lg:px-12 py-10 gap-6  rounded-lg">
        <form className="bg-white w-full max-w-[424px] p-6 space-y-6 rounded-md shadow-[0_0_10px_0_rgba(155,159,13,0.4)]"action="#">
          <h2 className="text-[20px] font-bold text-[#0D0D0D]">Sign Up</h2>
          <div className="flex items-center border rounded-md px-3 py-2 gap-2">
            <LuUserRound size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Name"
              className="w-full outline-none text-sm text-gray-700"
            />
          </div>
          <div className="flex items-center border rounded-md px-3 py-2 gap-2">
    <IoMailOutline size={20} className="text-gray-400" />
    <input type="email" placeholder="Email" className="w-full outline-none text-sm text-gray-700"/>
          </div>
          <div className="flex items-center border rounded-md px-3 py-2 gap-2">
            <RiLockPasswordLine size={20} className="text-gray-400" />
    <input type="password" placeholder="Password" className="w-full outline-none text-sm text-gray-700"/>
          </div>
    <div className="flex  items-center gap-2">
<input type="checkbox" className="w-4 h-4" />
<label className="text-sm  text-gray-600">Remember me?</label>
          </div>
          <Link href="/singup" >
<button className="w-full bg-[#ff9f0d] text-white mt-4 py-2 rounded-md font-medium hover:bg-[#e88e0c]">Sign Up</button>
</Link>
            <p className="text-right text-sm text-gray-500 hover:underline">Forgot Password?</p>
 <div className="flex items-center justify-center gap-2">
<hr className="w-1/3 border-gray-300" />
     <span className="text-sm text-gray-500">OR</span>
     <hr className="w-1/3 border-gray-300" />
          </div>
          <button className="flex items-center justify-center gap-2 border rounded-md w-full py-2">
            <FcGoogle size={20} />
            <span className="text-sm text-gray-600">Sign Up with Google</span>
          </button>
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

export default page;
