import React from "react";
import Link from "next/link";
import {SignUp} from "@clerk/nextjs"
const page = () => {
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
                 
                  <Link href="/sign-up"> <SignUp /></Link>
      </div>
    </div>
  </>
  )
}

export default page