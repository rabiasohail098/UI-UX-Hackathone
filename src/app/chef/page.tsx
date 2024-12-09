import Image from "next/image";
import { chef } from "./chef";
import Link from "next/link";
const Page = () => {
  return (
    <>
          <div className="bg-[url('/images/bg.png')] bg-cover bg-center  flex justify-center items-center max-w-full h-[320px] md:h-[500px] lg:h-[600px]">
        <div className="text-center">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-helvetica text-[#FFFFFF] font-bold">Our Chef</h1>
          <div className="flex justify-center items-center mt-4 gap-2">
    <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal font-inter text-[#FFFFFF]"><Link href="/">Home</Link></p>
  <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#FFFFFF]">&gt;</p>
<span className="text-[16px] md:text-[18px] lg:text-[20px] text-[#FF9F0D]">Chef</span>
         </div>
        </div>
      </div>
    <div className="min-h-screen px-6 sm:px-[250px] py-12 bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {chef.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={item.image}
                alt="chef"
                width={312}
                height={379}
              />
              <div className="mt-4">
                <h2 className="text-lg font-bold text-center text-gray-700">{item.name}</h2>
                <p className="text-sm text-center text-gray-600 mt-1">{item.chef}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;
