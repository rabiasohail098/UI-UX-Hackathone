import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import Link from "next/link";

export default function Aboutus() {
  return (
    <div className="max-w-[1920px]">
       <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › About
          </p>
        </div>
      </section>
      <div className="container mx-auto mt-12 flex md:flex-row px-12 items-center justify-center flex-col w-full max-w-[1220px]">
        <div className="ml-6 md:w-[669px] w-full md:h-[734px] flex md:flex-row flex-col">
          <div className="flex md:w-1/2 w-full flex-col items-center">
            <Image
              className="object-cover object-center  w-full  md:w-[309px] md:h-[536px] h-[309px] rounded-s mr-0 md:mr-4"
              alt="hero"
              src="/images/ab1.png"
              width={309}
              height={536}
            />
          </div>
          <div className="flex md:w-1/2 w-full gap-3 flex-col md:flex-col">
            <Image
              className="object-cover object-center mt-2 md:block mb-4 w-full md:w-[309px] h-[271px] radius-6px"
              alt="image2"
              src="/images/ab2.png"
              width={309}
              height={271}
            />
            <Image
              className="object-cover object-center md:block w-full md:w-[309px] h-[382px] radius-6px"
              alt="image3"
              src="/images/ab3.png"
              width={309}
              height={382}
            />
          </div>
        </div>
        <div className="ml-12 md:w-[526px] w-full space-y-4  mt-8 left-{1094px} top-{714px} flex flex-wrap ">
          <h1 className="text-sm font-medium text-yellow-400 italic">
            About us _____
          </h1>
          <p className="text-black title-font text-3xl font-bold">
            Food is an important part of a balanced Diet
          </p>
          <p className=" leading-relaxed text-[#333333]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
            velit in consequat.
          </p>
          <div className="flex justify-center">
            <Link href="/shop">
              <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button>
            </Link>
            <button className="ml-4 inline-flex text-black border-0  px-3 focus:outline-none rounded text-lg">
              <IoPlayOutline className="mr-2 mt-[6px] block" />
              Watch video
            </button>
          </div>
        </div>
      </div>
      <div className="text-white body-font ">
        <div className=" mx-auto flex md:px-4 md:py-8 px-8 py-4 items-center justify-center flex-col w-full md:w-[579px]">
          <h1 className="text-black text-lg md:text-3xl sm:2xl font-bold mt-3">
            Why Choose Us
          </h1>
          <p className="text-black md:text-[18px] text-[12px] text-center mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
        </div>
        <div className="container mx-auto flex px-8 md:px-16 items-center justify-center flex-col w-full max-w-[1220px]">
          <Image
            className="mb-10 object-cover md:w-[1273px] w-full h-[386px]"
            alt="hero"
            src="/images/ab4.png"
            width={1220}
            height={386}
          />
        </div>
      </div>
      <div className="text-white  body-font">
        <div className="container  py-20 mx-auto">
          <div className="flex mx-auto mr-12  flex-col md:flex-row  ">
            <div className="p-2 px-auto mr-12  md:w-[359px]">
              <div className="h-full flex  justify-center items-center flex-col rounded-lg overflow-hidden">
                <Image
                  src="/images/ab5.png"
                  width={80}
                  height={80}
                  alt="blog"
                />
                <div className="p-4">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    BEST CHEF
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2  mr-12 md:max-w-[359px]">
              <div className="h-full flex justify-center items-center flex-col rounded-lg overflow-hidden">
                <Image
                  className=""
                  src="/images/ab6.png"
                  width={80}
                  height={80}
                  alt="food item"
                />
                <div className="p-4">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    120 Item food
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2  mr-12 md:w-[359px]">
              <div className="h-full flex justify-center items-center flex-col rounded-lg overflow-hidden">
                <Image
                  className="flex md:flex-col flex-row  justify-center items-center"
                  src="/images/ab7.png"
                  width={80}
                  height={80}
                  alt="blog"
                />
                <div className="p-4">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    Clean Environmen
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
