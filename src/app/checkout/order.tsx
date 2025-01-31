"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { groq } from "next-sanity";

interface CheckoutItem {
  _id: string;
  title: string;
  price: number;
  category: string;
  quantity: number;
  imageUrl: string;
  product: {
    _ref: string;
  };
}

export default function Order() {
  const { user } = useUser();
  const [cartItems, setCartItems] = useState<CheckoutItem[]>([]);
  const [loading, setLoading] = useState(true);
console.log(user)
  // Fetch cart items for the logged-in user
  const fetchCartItems = async (userId: string) => {
    try {
      const query = groq`*[_type == "carts" && user._ref == $userId] {
       _id,
  "imageUrl": product->image.asset->url,
  "title": product->title, // Fetch title from the referenced product
  "price": product->price, // Fetch price from the referenced product
  "category":product->category
      
      }`;
     
      const result = await client.fetch(query, { userId });
      setCartItems(result);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchCartItems(user.id);

    // Real-time listener for cart updates
    const subscription = client
      .listen(groq`*[_type == "carts" && user._ref == $userId]`, { userId: user.id })
      .subscribe((update) => {
        console.log("Live Update Received:", update);
        fetchCartItems(user.id);
      });

    return () => subscription.unsubscribe(); // Cleanup listener
  }, [user]);

  // Calculate pricing
  const subtotal = cartItems.reduce((total, item) => total + item.price * 1, 0);
  const shipping = 0; // Free shipping
  const discountPercentage = 25; // 25% discount
  const discount = (subtotal * discountPercentage) / 100;
  const taxRate = 10; // 10% tax
  const tax = (subtotal * taxRate) / 100;
  const total = subtotal + shipping - discount + tax;

  if (loading) return <div>Loading...</div>;
  if (cartItems.length === 0) return <div>Your cart is empty.</div>;

  return (
    <div className="max-w-lg mx-auto p-4 space-y-6">
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item._id} className="flex gap-4 items-center">
            <div className="relative w-[90px] h-[90px]">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={100}
                height={100}
                className="rounded-md w-[100px] h-[70px]"
              />
            </div>
            
            <div className="flex-1 -mt-4 ">
            <h3 className="font-medium text-gray-600">{item.title}</h3>
              <p className="text-sm text-red-500"><span className="text-gray-400">Rs </span>${item.price}.00</p>
              <h3 className="font-medium text-gray-600">{item.category}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 w-full space-y-6 border-t pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? "Free" : `$ ${shipping}.00`}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Discount</span>
          <span className="font-medium">${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t pt-2">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">${total.toFixed(2)}</span>
        </div>
      </div>
      <button className="w-full mt-6 px-6 py-3 bg-orange-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              Place an order
            </button>
    </div>
  );
}