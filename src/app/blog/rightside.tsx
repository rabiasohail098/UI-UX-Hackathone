// import React from "react";
// import { IoCalendarNumberOutline } from "react-icons/io5";
// import { TiMessages } from "react-icons/ti";
// import { PiUserCirclePlus } from "react-icons/pi";
// import { LuSquareArrowOutUpRight } from "react-icons/lu";
// import Link from "next/link";
// const Rightside = () => {
//   const posts = [
//     {
//       id: 1,
//       image: "/images/la3.png",
//       date: "Feb 14, 2022",
//       title: "10 Reasons To Do A Digital Detox Challenge",
//       description:
//         "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
//     },
//     {
//       id: 2,
//       image: "/images/la2.png",
//       date: "Feb 14, 2022",
//       title: "Traditional Soft Pretzels with Sweet Beer Cheese",
//       description:
//         "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
//     },
//     {
//       id: 3,
//       image: "/images/la3.png",
//       date: "Feb 14, 2022",
//       title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
//       description:
//         "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
//     },
//     {
//       id: 4,
//       image: "/images/sh8.png",
//       date: "Feb 14, 2022",
//       title: "My Favorite Easy Black Pizza Toast Recipe",
//       description:
//         "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
//     },
//   ];

//   return (
//     <div className="flex flex-wrap justify-center gap-6 p-4">
//       {posts.map((post) => (
//         <div
//           key={post.id}
//           className="max-w-[650px] md:max-w-[550px] lg:max-w-[872px] space-y-4"
//         >
//           <div
//             className="bg-cover bg-center h-[300px] md:h-[400px] lg:h-[520px] w-full rounded-xl"
//             style={{ backgroundImage: `url('${post.image}')` }}
//           >
//             <button className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-xl mt-4 ml-4 bg-[#FF9F0D] text-white text-sm md:text-base font-bold">
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
//           <h2 className="font-bold text-lg md:text-xl">{post.title}</h2>
//           <p className="text-sm md:text-base text-justify">{post.description}</p>
//          <Link href="/blog-details"> <button className="w-[150px] md:w-[172px] h-[40px] md:h-[52px] rounded-lg border border-[#FF9F0D] text-[#FF9F0D] flex items-center justify-center gap-2">
//             <p>Read More</p>
//             <LuSquareArrowOutUpRight size={16} />
//           </button>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Rightside;
"use client"; // Required if using Next.js app router with React hooks
import React, { useState, useEffect } from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { PiUserCirclePlus } from "react-icons/pi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import Link from "next/link";

const Rightside = () => {
  const [posts, setPosts] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://677c0f1720824100c07bb9bc.mockapi.io/blog");
        const data = await res.json();
        setPosts(data); // Set fetched data to state
        setLoading(false); // Turn off loading state
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div className="grid grid-cols-3 justify-center gap-6 p-4">
      {posts.map((post:any) => (
        <div
          key={post.id}
          className="max-w-[650px] md:max-w-[550px] lg:max-w-[872px] space-y-4"
        >
          <div
            className="bg-cover bg-center h-[200px] md:h-[300px] lg:h-[200px] w-full rounded-xl"
            style={{ backgroundImage: `url('${post.image}')` }}
          >
            <button className="w-[45px] h-[45px] rounded-xl mt-4 ml-4 bg-[#FF9F0D] text-white text-sm  font-bold">
              <span>14</span> <br /> Feb
            </button>
          </div>
          <div className="flex gap-2 text-sm md:text-base items-center">
            <IoCalendarNumberOutline size={20} className="text-[#FF9F0D]" />
            <span>{post.date}</span>
            &#47;
            <TiMessages size={20} className="text-[#FF9F0D]" />
            <span>3</span>
            &#47;
            <PiUserCirclePlus size={20} className="text-[#FF9F0D]" />
            <span>Admin</span>
          </div>
          <h2 className="font-bold text-lg md:text-xl">{post.title}</h2>
          Food is a universal experience that connects people and nourishes their bodies and souls.          <Link href={`/blog/${post.id}`}>
  <button className="w-[150px] md:w-[172px] h-[40px] md:h-[52px] rounded-lg border border-[#FF9F0D] text-[#FF9F0D] flex items-center justify-center gap-2">
    <p>Read More</p>
    <LuSquareArrowOutUpRight size={16} />
  </button>
</Link>

        </div>
      ))}
    </div>
  );
};

export default Rightside;
