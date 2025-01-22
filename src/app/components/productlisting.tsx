// Product Listing Component with Tailwind and Sanity Integration

import { useState, useEffect } from 'react';
import { client } from "../../sanity/lib/client"// Import your Sanity client setup
import Image from 'next/image';
const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "food"] {
          _id,
          name,
          price,
          image {
            asset -> { url }
          },
          category
        }`;
        const result = await client.fetch(query);
        setProducts(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-bold">Loading products...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Our Food Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product:any) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition"
          >
            <Image
              src={product.image?.asset?.url}
              alt={product.name}
              fill
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;