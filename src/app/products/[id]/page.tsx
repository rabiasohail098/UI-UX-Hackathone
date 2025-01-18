
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import {Pagination,PaginationContent,PaginationItem,PaginationPrevious,PaginationNext} from "@/components/ui/pagination"
import App from "../slider";

type Product = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  rating: number;
  review: number;
  stock: number;
};



const ShopItemServer = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "food"]{
          _id,
          title,
          price,
          "imageUrl": image.asset->url,
          description,
          rating,
          review,
          stock
        }`;
        const data: Product[] = await client.fetch(query);
        const filteredItem = data.find((item) => item._id === params.id);

        if (!filteredItem) {
          router.push("/error");
        } else {
          setProduct(filteredItem);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
        router.push("/error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return null; // Redirected to error page if not found
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
            <h2 className="text-4xl font-bold">Shop Details</h2>
            <p className="pt-2">
              <Link href="/" className="text-yellow-400">
                Home
              </Link>{" "}
              › Shop Details
            </p>
          </div>
        </section>

        {/* Product Details */}
        <div className="container mx-auto my-8 px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Images */}
            <div className="flex-1">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={500}
                height={700}
                className="object-cover"
              />
           
            <div className="flex w-[300px] gap-2 my-4">
            <Image
                src={product.imageUrl}
                alt={product.title}
                width={110}
                height={200}
                className="object-cover h-[130px]"
              />
                  <Image
                src={product.imageUrl}
                alt={product.title}
                width={110}
                height={150}
                className="object-cover"
              />
                <Image
                src={product.imageUrl}
                alt={product.title}
                width={110}
                height={150}
                className="object-cover"
              />
            </div>
      </div>
            {/* Product Info */}
            <div className="md:max-w-[615px] px-3 space-y-2 h-fit w-full">
              <div className="space-y-4">
                <div className="flex justify-between md:max-w-[615px]">
                <div className='flex gap-52 lg:flex-row'>
             <div>
              <button className='w-[86px] h-[24px] bg-[#FF9F0D] text-[#ffffff] rounded-[6px]  mt-5 text-[14px] font-[400] font-[inner]'>In stock</button>
              </div>
              <div>
              <Pagination className='mt-2 hidden sm:block md:block lg:block'>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="/"/>
                          </PaginationItem>
                          <p className="text-orange-500">Shop Details</p>
                  <PaginationItem>
                    <PaginationNext href="/shop"/>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              </div>
            </div>
</div>
                  <h1 className="text-3xl font-bold">{product.title}</h1>
                <p className="text-lg">{product.description}</p>
                <p className="text-2xl font-bold text-orange-500">
                  $ {product.price}.00
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">⭐ {product.rating}</span>
                  <span>({product.review} reviews)</span>
                </div>
                <p>
                  Stock: {product.stock > 0 ? product.stock : "Out of Stock"}
                </p>

                {/* Add to Cart */}
                <div className="flex gap-4 items-center">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>
                  <button className="bg-gray-200 px-4 py-2 rounded">
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination */}
        

          {/* Second Div */}
          <div className="mt-8 space-y-6">
            <div className="flex gap-6 flex-col md:flex-row">
              <button className="md:max-w-[165px] bg-[#FF9F0D] text-[#ffffff] p-2 rounded-[6px]">
                Description
              </button>
              <p className="pt-2">Reviews (24)</p>
            </div>
            <p className="text-justify">
              Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla
              sed purus augue, eu euismod tellus. Nam mattis eros nec mi
              sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at
              justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada
              porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis
              justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat
              tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac,
              aliquam in nisl.
              <br />
              <br />
              Suspendisse cursus sodales placerat. Morbi eu lacinia ex.
              Curabitur blandit justo urna, id porttitor est dignissim nec.
              Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi
              rutrum accumsan et sagittis massa.
            </p>
            <h2 className="text-2xl font-semibold">Key Benefits</h2>
            <ul className="space-y-2 px-4">
              <li className="list-disc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="list-disc">
                Maecenas ullamcorper est et massa mattis condimentum.
              </li>
              <li className="list-disc">
                Vestibulum sed massa vel ipsum imperdiet malesuada id tempus
                nisl.
              </li>
              <li className="list-disc">
                Etiam nec massa et lectus faucibus ornare congue in nunc.
              </li>
              <li className="list-disc">
                Mauris eget diam magna, in blandit turpis.
              </li>
            </ul>
          </div>

          {/* App Component */}
          <App/>
        </div>
      </div>
    </>
  );
};

export default ShopItemServer;
