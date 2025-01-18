import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeftCircle } from "react-icons/fi";
import { BsArrowRightCircleFill } from "react-icons/bs";

interface Data {
  id: number;
  img: string;
  title: string;
  price: string;
}

// Data array
const data: Data[] = [
  { id: 1, img: "/images/sh1.png", title: "Fresh Lime", price: "$45.00" },
  { id: 3, img: "/images/sh3.png", title: "Pizza", price: "$43.00" },
  { id: 4, img: "/images/sh4.png", title: "Cheese Butter", price: "$10.00" },
  { id: 6, img: "/images/sh6.png", title: "Chicken Chup", price: "$25.00" },
  { id: 9, img: "/images/sh3.png", title: "Pizza", price: "$43.00" },
  { id: 11, img: "/images/sh5.png", title: "Sandwiches", price: "$25.00" },
  { id: 12, img: "/images/sh4.png", title: "Cheese Butter", price: "$10.00" },
];

interface Props {
  data: Data[];
}

const SimilarProducts: React.FC<Props> = ({ data }) => {
  // Slick slider settings
  const settings = {
    dots: false, // Pagination dots
    infinite: true, // Infinite scroll
    speed: 500, // Transition speed
      slidesToShow: 4,
      autoplay: true,
    autoplaySpeed: 2000,  // Number of slides visible
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
      <div className="px-8 py-8">
          <div className="flex justify-between">
      <h2 className="text-[32px] font-helvetica font-bold mb-6">
        Similar Products
              </h2>
              <div className="flex gap-1 justify-center items-center  mt-0">
              <FiArrowLeftCircle size={40} className="opacity-30 "/>
              <button className="rounded-full   text-[#FF9F0D]"><BsArrowRightCircleFill size={40} className="text-[#FF9F0D]"/></button>
              </div>
              </div>
          <Slider {...settings}>
         
        {data.map((item) => (
        <div key={item.id} className="w-[312px] h-[267px] mx-2 p-8">
            <Image
              src={item.img}
              alt={item.title}
              width={312}
              height={267}
              className=""
            />
            <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.price}</p>
          </div>
        ))}
                  
      </Slider>
    </div>
  );
};

// Use the component with the predefined data
const App = () => <SimilarProducts data={data} />;

export default App;