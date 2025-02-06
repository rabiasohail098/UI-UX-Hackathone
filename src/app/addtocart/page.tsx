// Product Listing and Cart Components with Tailwind and Sanity Integration
"use client"
import { useUser } from '@clerk/nextjs';
import { useState, useEffect, Suspense } from 'react';
import { client } from '@/sanity/lib/client'; // Import your Sanity client setup
import Image from 'next/image';
import Link from 'next/link';
import  Swal from "sweetalert2"
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
      <h1 className="text-2xl font-bold text-center mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
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
                  className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                >
                  Remove
                </button>
                </div>
            ))}
           
          
       
              
            </ul>
          <div className="md:max-w-[1920px] my-12 mx-2 w-full">
        <div className="flex flex-col md:max-w-[1320px]   w-full md:flex-row md:gap-6">
          <div className="md:max-w-[424px] px-2 w-full">
            <h2 className="text-xl font-bold mb-4">Coupon Code</h2>
            <div className="border p-2 rounded-md">
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non
              </p>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="text"
                  placeholder="Enter Here code"
                  className="border rounded-md px-4 py-2"
                />
                <button className="bg-orange-500 text-white md:text-[18px] text-sm px-6 py-2 rounded-md">
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className="mx-2 md:w-[648px] h-auto w-full">
            <h2 className="text-xl font-bold mb-4">Total Bill</h2>
            <div className="border p-4 rounded-md">
              <div className="border-b-[1px] space-y-4 pb-4 rounded-md">
                <div className="flex md:flex-row flex-col font-bold justify-between">
                  <span>Cart Subtotal:</span>
                  <span>
                    $
                    {cartItems.reduce((total, item) => {
                    
                      return total + (item?.price || 0) * 1;
                    }, 0)}
                  </span>
                </div>
                <div className="flex md:flex-row flex-col justify-between">
                  <span>Shipping Charge:</span>
                  <span>$00.00</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between font-bold text-lg">
                <span>Total Amount:</span>
                <span>
                  $
                  {cartItems.reduce((total, item) => {
                  
                    return total + (item?.price || 0) * 1;
                  }, 0)}
                </span>
              </div>
              <Link href="/checkout">
                <button className="w-full bg-orange-500 text-sm md:text-[18px] text-white py-3 rounded-md font-semibold">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
        </div>
     
      )}
    </div>
  );
};

// const FoodApp = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

// interface Product {
//     _id: string;
//     name: string;
//   price: number;
//   stock: boolean;
//     image: {
//         asset: {
//             url: string;
//         };
//     };
//     category: string;
// }

// interface CartItem {
//     _id: string;
//     name: string;
//     price: number;
// }

//   const addToCart = async (product: Product) => {
//     const autoScrollToCart = () => {
//       window.scrollTo({
//         top:document.body.scrollHeight,
//         behavior: "smooth",
//       });
//     };
//     setCartItems((prevItems: CartItem[]) => [...prevItems, product]);

//     // Store cart data in Sanity
//     try {
//         await client.create({
//             _type: 'carts',
//             product: {
//                 _ref: product._id,
//                 _type: 'reference',
//             },
//             title: product.name,
//           price: product.price,
//             stock:product.stock
//         });
//       Swal.fire({
//         position: "top",
//         text:"Are you sure you want to add this product in your cart?",
//         icon: "question",
//         title: `Add to Cart?`,
//         showConfirmButton: true,
//         confirmButtonColor:"#f97316",
//         confirmButtonText:"Yes, add it!",
//       })
//     } catch (error) {
//         console.error('Error adding to cart in Sanity:', error);
//   }
//   autoScrollToCart()
// };
const FoodApp = () => {
  const { user, isLoaded } = useUser();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
interface Product {
    _id: string;
    name: string;
  price: number;
  stock: boolean;
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

  useEffect(() => {
    if (user) {
      // Check if user already exists in Sanity, otherwise add them
      const addUserToSanity = async () => {
        const foodQuery = `*[_type == "foods"]{
          _id,
          title,
          price,
          "imageUrl": image.asset->url,}`;
        const foods = await client.fetch(foodQuery);
        const existingUserQuery = `*[_type == "users"  && _id == "${user.id}" ]`;
        const existingUser = await client.fetch(existingUserQuery);
console.log(existingUser)
        if (!existingUser.length && foods.length) {
          // Add user data to Sanity
          await client.create({
            _type: 'users',
            _id: user.id, 
            name: user.fullName || 'Anonymous',
            image: user.imageUrl || '',
            email: user.emailAddresses[0]?.emailAddress || '',
            orders: foods.map((food: any) => food._id) || []
         });
         
        }
      };

      addUserToSanity();
    }
  }, [user]);

  // Add the product to cart and associate it with the user in Sanity
  const addToCart = async (product: Product) => {
    if (!user) {
      alert("Please sign in first.");
      return;
    }

    setCartItems((prevItems) => [...prevItems, product]);

    try {
      await client.create({
        _type: 'carts',
        product: {
           _ref: product._id,
           _type: 'reference',
           title: product.name
        },
        user: {
           _ref: user.id, // Associate with Clerk's user ID
           _type: 'reference',
        },
        quantity: 1, // Default quantity
     });
      Swal.fire({
        position: "top",
        text: "Are you sure you want to add this product to your cart?",
        icon: "question",
        title: `Add to Cart?`,
        showConfirmButton: true,
        confirmButtonColor: "#f97316",
        confirmButtonText: "Yes, add it!",
      });
    } catch (error) {
      console.error('Error adding to cart in Sanity:', error);
    }
  };

  // Proceed to Checkout
  const handleCheckout = async () => {
    if (!user) {
      alert("Please sign in first.");
      return;
    }

    const userData = await client.fetch(`*[_type == "users" && _id == "${user.id}"]`);

    if (userData.length) {
      // Fetch user data to display at checkout
      const { name, email, image } = userData[0];
      console.log('User data for checkout:', { name, email, image });

      // You can then pass this data to the checkout page or show it to the user.
    }
  };

const removeFromCart = async (id: string) => {
    setCartItems((prevItems: CartItem[]) => prevItems.filter((item: CartItem) => item._id !== id));
   
    // Remove cart data from Sanity
    try {
        const query = `*[_type == "carts" && product._ref == "${id}"]`;
      const result: { _id: string }[] = await client.fetch(query);
      console.log(result)
        if (result.length > 0) {
            await client.delete(result[0]._id);
        }  Swal.fire({
          position: "top",
          text:"Are you sure you want to remove this product in your cart?",
          icon: "question",
          title: `Remove from Cart?`,
          showConfirmButton: true,
          confirmButtonColor:"red",
          confirmButtonText:"Yes, remove it!",
        })
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
              <h2 className="text-4xl font-bold">Shopping Cart</h2>
              <p className="pt-2">
                <Link href="/" className="text-yellow-400">
                  Home
                </Link>{" "}
                › Shopping Cart
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
          stock,
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
   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product:any) => (
          <div
            key={product._id}
            className="border  rounded-lg shadow-lg p-4 hover:shadow-xl transition"
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
              className="mt-2 bg-orange-500 w-full overflow-y-auto text-white py-1 px-4 rounded hover:bg-orange-600"
            >
              Add to Cart
              </button>
              </Link>
          </div>
        ))}
        </div>
   
    </div>
  );
};


