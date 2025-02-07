// import React from "react";
// import { IoCalendarNumberOutline } from "react-icons/io5";
// import { TiMessages } from "react-icons/ti";
// import { PiUserCirclePlus } from "react-icons/pi";
// import { LuSquareArrowOutUpRight } from "react-icons/lu";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import Sidebar from "@/app/components/sidebar";


// type Blog = {
//   _id: string;
//   title: string;
//   description: string;
//   date: string,
//   quote: string;
//   imageUrl: string;
// };
// const page =async () => {
 
//       const query = `*[_type == "blog"]{
//         _id,
//         title,
//         date,
//         "imageUrl": image.asset->url
//         description,
//         quote}`;
  
//   const data: Blog[] = await client.fetch(query);
//   console.log("Fetched Data:", data)

//   return (
//     <div >
//         <section
//         className="bg-cover bg-center h-64 flex items-center justify-center"
//         style={{ backgroundImage: "url('/images/bg.png')" }}
//       >
//         <div className="text-center text-white">
//           <h2 className="text-4xl font-bold">Blog List</h2>
//           <p className="pt-2">
//             <Link href="/" className="text-yellow-400">Home</Link> › Blog
//           </p>
//         </div>
//       </section>
//       <div className='md:max-w-[1920px] justify-center items-center object-cover'>
//         <div className='md:max-w-[1320px] mt-16 px-8 flex flex-col md:flex-row'>
//         <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-6 p-4">
//       {data.map((post: Blog) => (
//         <div
//           key={post._id}
//           className="max-w-[650px] md:max-w-[550px] lg:max-w-[872px] space-y-4"
//         >
//           <div
//             className="bg-cover bg-center h-[200px] md:h-[300px] lg:h-[200px] w-full rounded-xl"
//             style={{ backgroundImage: `url('${post.imageUrl}')` }}
//           >
//             <button className="w-[45px] h-[45px] rounded-xl mt-4 ml-4 bg-[#FF9F0D] text-white text-sm  font-bold">
//               <span>14</span> <br /> Feb
//             </button>
//           </div>
//           <div className="flex gap-2 text-sm md:text-base items-center">
//             <IoCalendarNumberOutline size={20} className="text-[#FF9F0D]" />
//             <span>{post.date}</span>
//             &#47;
//             <TiMessages size={20} className="text-[#FF9F0D]" />
//             <span>3</span>
//             &#47;
//             <PiUserCirclePlus size={20} className="text-[#FF9F0D]" />
//             <span>Admin</span>
//           </div>
//           <div className="space-y-3">
//             <h2 className="font-bold text-lg text-justify md:text-xl">{post.title}</h2>
//             <p>Food is a universal experience that connects people and nourishes their bodies and souls.</p>
//             <Link href={`/blog/${post._id}`}>
//               <button className="w-[150px] md:w-[172px] mt-3 h-[40px] md:h-[52px] rounded-lg border border-[#FF9F0D] text-[#FF9F0D] flex items-center justify-center gap-2">
//                 <p>Read More</p>
//                 <LuSquareArrowOutUpRight size={16} />
//               </button>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
           
//           </div>
//           <div className='md:max-w-1/4 sm:w-2/4 w-full mb-16'>
//            <Sidebar/>
//             </div>
//           </div>
//       </div>
     

//   )
// }

// export default page

"use client";

import React, { useState, useEffect } from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { PiUserCirclePlus } from "react-icons/pi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Sidebar from "@/app/components/sidebar";

type Blog = {
  _id: string;
  title: string;
  description: string;
  date: string;
  quote: string;
  imageUrl: string;
};

const Page = () => {
  const [data, setData] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "blog"]{
        _id,
        title,
        date,
        "imageUrl": image.asset->url,
        description,
        quote
      }`;

      try {
        const fetchedData = await client.fetch(query);
        console.log("Fetched Data:", fetchedData);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Blog List</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Blog
          </p>
        </div>
      </section>
      <div className='md:max-w-[1920px] justify-center items-center object-cover'>
        <div className='md:max-w-[1320px] mt-16 px-8 flex flex-col md:flex-row'>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-6 p-4">
            {data.map((post: Blog) => (
              <div key={post._id} className="max-w-[650px] md:max-w-[550px] lg:max-w-[872px] space-y-4">
                <div
                  className="bg-cover bg-center h-[200px] md:h-[300px] lg:h-[200px] w-full rounded-xl"
                  style={{ backgroundImage: `url('${post.imageUrl}')` }}
                >
                  <button className="w-[45px] h-[45px] rounded-xl mt-4 ml-4 bg-[#FF9F0D] text-white text-sm font-bold">
                    <span>14</span> <br /> Feb
                  </button>
                </div>
                <div className="flex gap-2 text-sm md:text-base items-center">
                  <IoCalendarNumberOutline size={20} className="text-[#FF9F0D]" />
                  <span>{post.date}</span> &#47;
                  <TiMessages size={20} className="text-[#FF9F0D]" />
                  <span>3</span> &#47;
                  <PiUserCirclePlus size={20} className="text-[#FF9F0D]" />
                  <span>Admin</span>
                </div>
                <div className="space-y-3">
                  <h2 className="font-bold text-lg text-justify md:text-xl">{post.title}</h2>
                  <p className=" text-[12px] text-justify md:text-[14px]">Make sure that all the words you use to describe a dish fit well together. For example, describing something as “light” and “rich” at the same time might be confusing unless you explain how those qualities work together in the dish.</p>
                  <Link href={`/blogdetails/${post._id}`}>
                    <button className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 rounded-[4px] px-4 py-1 hover:via-orange-500 hover:to-orange-600 flex items-center justify-center gap-2">
                      <p>Read More</p>
                      <LuSquareArrowOutUpRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
       
        <div className='md:max-w-1/4 sm:w-2/4 w-full mb-16'>
          <Sidebar />
          </div>
          </div>
      </div>
    </div>
  );
}

export default Page;
