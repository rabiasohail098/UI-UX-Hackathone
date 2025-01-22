import React from "react";
import Hero from "./components/hero";
import Hero1 from "./components/hero1";
import Hero4 from "./components/hero4";
import FromMenu from "./components/frommenu";
import Meetchef from "./components/meetchef";
import Testimonials from "./components/testimonials";
import Hero5 from "./components/hero5";
import Hero6 from "./components/hero6";
import FoodCategory1 from "./components/foodcategory";


const page = () => {
  return (
    <div className="md:max-w-[1920px]">
    
      <Hero />
      <Hero1 />
      <FoodCategory1 />
      <Hero4 />
      <FromMenu />
      <Meetchef />
      <Testimonials />
      <Hero5 />
      <Hero6 />
    </div>
  );
};

export default page;
