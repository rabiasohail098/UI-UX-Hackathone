'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

type Chef = {
  _id: string;
  name: string;
  position: string;
  experience: string;
  description: string;
  specialty: string;
  available: string;
  imageUrl: string;
};

const ShopItemServer = ({ params }: { params: { id: string } }) => {
  const [chef, setChef] = useState<Chef | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchChef = async () => {
      try {
        console.log("Fetching chef data for ID:", params.id);
        const query = `*[_type == "chef" && _id == $id]{
          _id,
          name,
          position,
          experience,
          description,
          specialty,
          available,
          "imageUrl": image.asset->url
        }`;
        const data: Chef[] = await client.fetch(query, { id: params.id });
  
        console.log("Fetched Chef Data:", data);
  
        if (data.length > 0) {
          setChef(data[0]);
        } else {
          console.error("Chef not found!");
          router.push("/error");
        }
      } catch (error) {
        console.error("Error fetching chef data:", error);
        router.push("/error");
      }
    };
  
    fetchChef();
  }, [params.id, router]);
  if (!chef) {
    return <div>Loading...</div>; // Loader until data is fetched.
  }

  return (
    <>
      <div>
        {/* Banner Section */}
        <section
          className="bg-cover bg-center h-64 flex items-center justify-center"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        >
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold">Chef Profile</h2>
            <p className="pt-2">
              <Link href="/" className="text-yellow-400">
                Home
              </Link>{" "}
              › Chef Profile
            </p>
          </div>
        </section>

        {/* Chef Details */}
        <div className="container mx-auto my-16 px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Chef Image */}
            <div className="flex-1">
              <Image
                src={chef.imageUrl}
                alt={chef.name}
                width={500}
                height={700}
                className="object-cover w-[380px] h-[380px]"
              />
            </div>

            {/* Chef Info */}
            <div className="md:max-w-[615px] px-3 space-y-4">
              <h1 className="text-3xl font-bold">{chef.name}</h1>
              <p className="text-lg">{chef.description}</p>
              <p className="text-lg font-semibold">
                Position: <span className="text-orange-500">{chef.position}</span>
              </p>
              <p className="text-lg font-semibold">
                Specialty: <span className="text-orange-500">{chef.specialty}</span>
              </p>
              <p className="text-lg">
                Experience: {chef.experience} years
              </p>
              <p className="text-lg">
                Availability: {chef.available}
              </p>
              <button className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 rounded-[4px] px-4 py-1 hover:via-orange-500 hover:to-orange-600">
                Contact Chef
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopItemServer;
