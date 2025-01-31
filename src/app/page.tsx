import React, { Suspense } from "react";
import Hero from "./components/hero";
import Hero1 from "./components/hero1";
import Hero4 from "./components/hero4";
import FromMenu from "./components/frommenu";
import Meetchef from "./components/meetchef";
import Testimonials from "./components/testimonials";
import Hero5 from "./components/hero5";
import Hero6 from "./components/hero6";
import FoodCategory1 from "./components/foodcategory";
import { SkeletonCard } from "./components/skeleton";


const page = () => {
  return (
    <div className="md:max-w-[1920px]">
    
      <Hero />
      <Suspense fallback={< div className="text-black">Loading...</div>}>
      <Hero1 />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FoodCategory1 />
     </Suspense>
      <Hero4 />
      <Suspense fallback={<div>Loading...</div>}>
        <FromMenu />
       </Suspense>
      <Meetchef />
      <Testimonials />
      <Hero5 />
      <Hero6 />
    </div>
  );
};

export default page;
