'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { PiUserCirclePlus, PiQuotes } from "react-icons/pi";
import Rightside from "./rightside";
import Sidebar from "@/app/components/sidebar";

type Blog = {
  _id: string;
  title: string;
  description: string;
  date: number;
  quote: string;
  imageUrl: string;
};

// ✅ Make the component async and extract params correctly
const BlogDetails = ({ params }: { params: { id: string } }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBlog = async () => {
      if (!params.id) return; // ✅ Prevent fetching if ID is missing

      try {
        console.log("Fetching blog data for ID:", params.id);
        const query = `*[_type == "blog" && _id == $id]{
          _id,
          title,
          description,
          date,
          quote,
          "imageUrl": image.asset->url
        }`;
        const data: Blog[] = await client.fetch(query, { id: params.id });

        console.log("Fetched Blog Data:", data);

        if (data.length > 0) {
          setBlog(data[0]);
        } else {
          console.error("Blog not found!");
          router.push("/error");
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
        router.push("/error");
      }
    };

    fetchBlog();
  }, [params.id, router]);

  if (!blog) {
    return <div>Loading...</div>; // Loader until data is fetched.
  }


  return (
    <div>
      {/* Header Section */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Blog Details</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Blog details
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="md:max-w-[1920px] justify-center items-center object-cover">
        <div className="md:max-w-[1320px] mt-16 flex flex-col justify-center lg:flex-row">
          <div className="md:max-w-[840px] px-8 space-y-4">
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              width={780}
              height={430}
              className="w-[780px] h-[430px] object-cover"
            />
            <div className="flex gap-2 text-sm md:text-base items-center">
              <IoCalendarNumberOutline size={20} className="text-[#FF9F0D]" />
              <span>{blog.date}</span> &#47;
              <TiMessages size={20} className="text-[#FF9F0D]" />
              <span>3</span> &#47;
              <PiUserCirclePlus size={20} className="text-[#FF9F0D]" />
              <span>Admin</span>
            </div>
            <h2 className="font-bold text-lg md:text-xl">{blog.title}</h2>
            <p className="text-sm md:text-base text-justify">{blog.description}</p>

            {/* Quote Section */}
            <div className="md:max-w-[940px] px-4 bg-[#FF9F0D] text-[#ffffff] h-fit my-6 left-[300px]">
              <div className="flex gap-4 px-4">
                <PiQuotes size={68} />
                <p className="font-helvetica px-4 font-bold text-[24px]">{blog.quote}</p>
              </div>
            </div>

            <p className="text-[#000000] font-[400] font-inter px-4 text-justify text-[16px] my-6">
              Lorem ipsum dolor sit amet...
            </p>

            {/* Image & Text Section */}
            <div className="flex flex-col md:flex-row md:max-w-[972px] justify-around gap-3">
              <div className="md:w-1/2 w-full">
                <p className="w-full lg:hidden block text-justify px-4">
                  Lorem ipsum dolor sit amet...
                </p>
              </div>
              <div className="md:w-1/2 w-full px-4">
                <Image src={blog.imageUrl} alt="food" width={424} height={366} className="w-[350px] h-[250px]" />
              </div>
            </div>

            <p className="text-[#000000] font-[400] pl-4 text-justify font-inter text-[16px] my-4">
              Lorem ipsum dolor sit amet...
            </p>

            <Rightside />
          </div>

          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
