// Product Listing and Cart Components with Tailwind and Sanity Integration
"use client"
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client'; // Import your Sanity client setup
import Image from 'next/image';
import Link from 'next/link';
interface ProductListingProps {
  addToCart: (product: any) => void;
}


interface CartProps {
  cartItems: Array<{ _id: string; name: string; price: number }>;
  removeFromCart: (id: string) => void;
}

const Cart = ({ cartItems, removeFromCart }: CartProps) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
      <div className="container  mx-auto px-4 py-8">
         
      <h1 className="text-2xl font-bold text-center mb-6">Your Wishlist</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your wishlist is empty.</p>
      ) : (
        <div className='scroll-snap-container'>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item:any) => (
              
                <div  key={item._id} className="md:flex-row flex-col flex justify-between items-center py-4">
                  <Image  src={item.image?.asset?.url} alt={item.title} width={120} height={120 } className="rounded-md w-[120px] h-[120px]" />
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-700">Price: ${item.price}</p>
             
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white py-1 px-4 rounded hover:bg-red-600"
                >
                  Remove
                </button>
                </div>
            ))}
           
          
       
              
            </ul>
     
        </div>
     
      )}
    </div>
  );
};

const FoodApp = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

interface Product {
    _id: string;
    name: string;
    price: number;
    image: {
        asset: {
            url: string;
        };
    };
    category: string;
}

interface CartItem {
    _id: string;
    name: string;
    price: number;
}

  const addToCart = async (product: Product) => {
    const autoScrollToCart = () => {
      window.scrollTo({
        top:document.body.scrollHeight,
        behavior: "smooth",
      });
    };
    setCartItems((prevItems: CartItem[]) => [...prevItems, product]);

    // Store cart data in Sanity
    try {
        await client.create({
            _type: 'wishlist',
            product: {
                _ref: product._id,
                _type: 'reference',
            },
            title: product.name,
            price: product.price,
        });
    } catch (error) {
        console.error('Error adding to cart in Sanity:', error);
  }
  autoScrollToCart()
};

const removeFromCart = async (id: string) => {
    setCartItems((prevItems: CartItem[]) => prevItems.filter((item: CartItem) => item._id !== id));
   
    // Remove cart data from Sanity
    try {
        const query = `*[_type == "wishlist" && product._ref == "${id}"]`;
        const result: { _id: string }[] = await client.fetch(query);
        if (result.length > 0) {
            await client.delete(result[0]._id);
        }
    } catch (error) {
        console.error('Error removing from cart in Sanity:', error);
  }

};

  return (
      <div>
                <section
            className="bg-cover bg-center h-64 flex items-center justify-center"
            style={{ backgroundImage: "url('/images/bg.png')" }}
          >
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold">Wishlist</h2>
              <p className="pt-2">
                <Link href="/" className="text-yellow-400">
                  Home
                </Link>{" "}
                › WishList
              </p>
            </div>
          </section>
      <ProductListing addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default FoodApp;
const ProductListing = ({ addToCart }: ProductListingProps) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "foods"] {
          _id,
          title,
          price,
          image {
            asset -> { url }
          },
          category,
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
    <>
       <section
            className="bg-cover bg-center h-64 flex items-center justify-center"
            style={{ backgroundImage: "url('/images/bg.png')" }}
          >
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold">Wishlist</h2>
              <p className="pt-2">
                <Link href="/" className="text-yellow-400">
                  Home
                </Link>{" "}
                › Wishlist
              </p>
            </div>
          </section>
    <div className="container mx-auto px-4 py-8">
   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product:any) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition"
          >
            <Image
              src={product.image?.asset?.url}
              alt={product.title}
              width={120}
              height={120}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700">Price: ${product.price}</p>
            <Link href="">
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 w-full overflow-y-auto text-white py-1 px-4 rounded "
            >
              Add to Wishlist
              </button>
              </Link>
          </div>
        ))}
      </div>
      </div>
      </>
  );
};


