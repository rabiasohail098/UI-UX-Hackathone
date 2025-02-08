import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
const Page = async () => {
  const query = `*[_type=="chef"]{
  _id,
  name,
  specialty,
  "imageUrl":image.asset->url,
  }`
  const chef = await client.fetch(query)
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {chef.map((item:any) => (
      <div key={item._id} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src={item.imageUrl}
                alt="chef"
                width={312}
                height={379}
              />
              <div className="mt-4">
                <h2 className="text-lg font-bold text-center text-gray-700">{item.name}</h2>
                <p className="text-sm text-center text-orange-500 mt-1">{item.specialty}</p>
                <Link href={`/chef-details/${item._id}`}>
                  <button className=" w-full mt-2 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 rounded-[4px] px-4 py-1 hover:via-orange-500 hover:to-orange-600">
                    View Profile
                  </button>
                </Link>
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
