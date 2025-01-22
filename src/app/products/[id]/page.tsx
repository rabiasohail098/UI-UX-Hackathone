'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import App from "../slider";

type Product1 = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  rating: number;
  review: number;
  stock: number;
};

interface CartItem extends Product1 {
  quantity: number;
}

const ShopItemServer = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product1 | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "foods" && _id == $id]{
          _id,
          title,
          price,
          "imageUrl": image.asset->url,
          description,
          rating,
          review,
          stock
        }`;
        const data: Product1[] = await client.fetch(query, { id: params.id });

        if (data.length === 0) {
          router.push("/error");
        } else {
          setProduct(data[0]);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
        router.push("/error");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id, router]);

  const addToCart = async (product: Product1) => {
    await client.create({
      _type: "carts",
      product: {
        _ref: product._id,
        _type: "reference",
      },
      name: product.title,
      price: product.price,
      stock: product.stock,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return null;
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
            <h2 className="text-4xl font-bold">Product Details</h2>
            <p className="pt-2">
              <Link href="/" className="text-yellow-400">
                Home
              </Link>{" "}
              › Product Details
            </p>
          </div>
        </section>

        {/* Product Details */}
        <div className="md:max-w-[1320px]  my-8 px-4">
          <div className="flex flex-col px-4 gap-5 justify-between lg:flex-row">
            {/* Product Images */}
            <div className="">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={500}
                height={700}
                className="object-cover w-full lg:w-[380px] lg:h-[380px]"
              />

              <div className="md:flex hidden gap-2 my-4">
                {[...Array(3)].map((_, index) => (
                  <Image
                    key={index}
                    src={product.imageUrl}
                    alt={product.title}
                    width={110}
                    height={150}
                    className=" h-[100px] w-[100px] "
                  />
                ))}
              </div>
            </div>
            {/* Product Info */}
            <div className="w-full lg:max-w-[615px] px-3 space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <button className="w-24 bg-orange-500 text-white rounded px-3 py-1">
                  In stock
                </button>
                <Pagination className="hidden sm:block">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="/" />
                    </PaginationItem>
                    <p className="text-orange-500">Shop Details</p>
                    <PaginationItem>
                      <PaginationNext href="/shop" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
              <p className="text-base md:text-lg">{product.description}</p>
              <p className="text-xl md:text-2xl font-bold text-orange-500">
                $ {product.price}.00
              </p>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⭐ {product.rating}</span>
                <span>({product.review} reviews)</span>
              </div>
              <p>Stock: {product.stock > 0 ? product.stock : "Out of Stock"}</p>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Link href="/addtocart">
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button></Link>
                <button className="bg-gray-200 px-4 py-2 rounded">Wishlist</button>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                Description
              </button>
              <p>Reviews (24)</p>
            </div>
            <p className="text-justify mt-4">
              Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
              purus augue...
            </p>
            <h2 className="text-xl font-semibold mt-4">Key Benefits</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Lorem ipsum dolor sit amet...</li>
              <li>Maecenas ullamcorper...</li>
            </ul>
          </div>

          {/* App Component */}
          <App />
        </div>
      </div>
    </>
  );
};

export default ShopItemServer;
