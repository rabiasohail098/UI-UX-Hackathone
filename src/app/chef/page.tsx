import Image from "next/image";
import { chef } from "./chef";
import Link from "next/link";
const Page = () => {
  return (
    <>
       <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Our Chef</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Chef
          </p>
        </div>
      </section>
    <div className="min-h-screen px-6 sm:px-[250px] py-12 bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {chef.map((item) => (
      <div key={item.id} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
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
