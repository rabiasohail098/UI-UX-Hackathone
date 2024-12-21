import React from "react";
import FAQPage from "./faqdetails";
import Link from "next/link";

function Hero() {
  return (
    <>
       <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">FAQ Page</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › FAQ
          </p>
        </div>
      </section>
      <FAQPage/>
    </>
  )
}

export default Hero