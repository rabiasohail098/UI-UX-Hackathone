import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import Link from "next/link";

export default function Aboutus() {
  return (
    <>
      <div className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24">
          <div className="flex  flex-col md:flex-row items-center md:space-x-4 mt-2 ml-2">
            <Image
              className="object-cover  object-center w-336px h-536px mt-530px ml-300px radius-6px"
              alt="hero"
              src= "/images/ab1.png" width={309} height={536} 
            />
          </div>
          <div className="flex flex-col space-y-2 space-x-2 mt-2 ml-2">
            <Image
              className="object-cover  object-center w-309px h-271px mt-584px ml-660px radius-6px"
              alt="image2"
              src="/images/ab2.png"
              width={309} height={271}
            />
            <Image
              className="object-cover  object-center w-[309px] h-382px mt-882px ml-[660px] radius-6px"
              alt="image3"
              src="/images/ab3.png"
              width={309} height={382}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-black title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center">
             <Link href="/shop"> <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button>
              </Link>
              <button className="ml-4 inline-flex text-black  border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2 mt-[6px] block" /> 
                Watch video
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white body-font">
        <div className="container mx-auto flex px-4 py-8 items-center justify-center flex-col w-[579px]">
            <h1 className="text-black text-3xl text-bold mt-3">Why Choose Us</h1>
            <p className="text-black text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
            pellentesque bibendum non dui volutpat fringilla bibendum.</p>
            </div>
            <div className="container mx-auto flex px-16 items-center justify-center flex-col w-full max-w-[1320px]">
          <Image
            className="mb-10 object-cover lg:w-1320px w-full h-386px mt-1552px  mt-10"
            alt="hero"
            src = "/images/ab4.png"
            width={1320} height={386}
          />
        </div>
      </div>
      <div className="text-white body-font">
  <div className="container px-3 py-20 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full  flex justify-center items-center  flex-col  rounded-lg overflow-hidden">
          <Image
        
            src="/images/ab5.png"
            width={80} height={80}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            BEST CHEF
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
            </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full flex justify-center items-center  flex-col rounded-lg overflow-hidden">
          <Image
            className=""
            src="/images/ab6.png"
            width={80} height={80}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            120 Item food
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full  flex justify-center items-center  flex-col rounded-lg overflow-hidden">
          <Image
            className=" flex flex-col justify-center items-center"
            src="/images/ab7.png"
            width={80} height={80}
            alt="blog"
            
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            Clean Environment
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  );
}