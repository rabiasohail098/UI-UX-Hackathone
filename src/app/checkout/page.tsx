"use client";

import { client } from "@/sanity/lib/client";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import Link from "next/link";
import Order from "@/app/checkout/order";
import Swal from "sweetalert2";
interface CheckoutItem {
  _id: string;
  title: string;
  price: number;
  category: string;
  quantity: number;
  imageUrl: string;
  product: { _ref: string };
}

export default function CheckoutPage() {
  const { user, isLoaded } = useUser();
  const [cartItems, setCartItems] = useState<CheckoutItem[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch cart items from Sanity
  useEffect(() => {
    if (!user) return;

    const fetchCartItems = async () => {
      try {
        setLoading(true);

        const query = `*[_type == "carts" && user._ref == $userId] {
          _id,
          "imageUrl": product->image.asset->url,
          "title": product->title,
          "price": product->price,
          "category": product->category,
          quantity,
          "product": { "_ref": product._id }
        }`;
        const result = await client.fetch(query, { userId: user.id });
        setCartItems(result);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();

    // Real-time listener for cart updates
    const subscription = client
      .listen(`*[_type == "carts" && user._ref == $userId]`, { userId: user.id })
      .subscribe(() => {
        fetchCartItems();
      });

    return () => subscription.unsubscribe();
  }, [user]);
  const handleCreateShipment = async () => {
    try {
      const response = await fetch("/api/shipment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: "orderId" }),
      });
  
      const result = await response.json();
      console.log("Shipment Created:", result);
      Swal.fire({
        position: "top",
        text: "Yourshipment has been created successfully! 🎉",
        icon: "success",
        title: `Shipment Status`,
        showConfirmButton: true,
        confirmButtonColor: "#f97316",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error creating shipment:", error);
      alert("Failed to create shipment!");
    }
  };
  
  const handlePlaceOrder = async () => {
    if (!user) {
      console.log("🚨 User not found!");
      alert("Please log in first.");
      return;
    }
    if (cartItems.length === 0) {
      console.log("🚨 No cart items!");
      alert("Your cart is empty.");
      return;
    }
  
    console.log("👤 User Data:", user);
    console.log("🛒 Cart Items:", cartItems);
  
    setLoading(true);
    try {
      const newOrder = await client.create({
        _type: "order",
        userId: user.id,
        name: user.fullName || "Guest",
        email: user.emailAddresses[0]?.emailAddress || "",
        totalAmount: cartItems.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0),
        cartItems: cartItems.map((item) => ({
          _key: item._id,
          product: item.product?._ref ? { _type: "reference", _ref: item.product._ref } : null,
          quantity: item.quantity || 1,
          price: item.price || 0,
        })),
        // Empty address fields to be updated later
        address: "123 Default St",
      city: "New York",
      state: "NY",
      zipCode: "10001"
      });
  
      console.log("✅ Order Placed Successfully:", newOrder);
      Swal.fire({
        position: "top",
        text: "Your order has been placed successfully! 🎉",
        icon: "success",
        title: `Order Added`,
        showConfirmButton: true,
        confirmButtonColor: "#f97316",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("❌ Error placing order:", JSON.stringify(error, null, 2));
      alert("⚠️ Failed to place order! Check console.");
    } finally {
      setLoading(false);
    }
  };
  
  const handleProceedToBilling = async () => {
    try {
      const response = await fetch("/api/update-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: "JdGgvq3N7DvO0fkp5gNcix", // Replace with actual orderId
          address: "123 Default St",
          city: "New York",
          state: "NY",
          zipCode: "10001",
        }),
      });
  
      const result = await response.json();
      console.log("Order Updated:", result);
      alert("Order updated successfully!");
    } catch (error) {
      console.error("Error updating order:", error);
      alert("Error updating order! Please try again.");
    }
  };
  

  return (
    <>
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Checkout Page</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Checkout
          </p>
        </div>
      </section>
      <div className=" lg:max-w-[1920px] w-full px-auto   gap-2 ">
     <div className=" lg:max-w-[1320px] w-full flex lg:px-16 flex-col lg:flex-row  py-24">
       
         
        <div className="lg:max-w-[872px] md:px-16 px-4  w-full h-auto" >
        
            <h2 className=" text-xl font-semibold mb-4">Shipping Address</h2>
            

                <div className="w-full gap-2 flex md:flex-row flex-col px-0">
                  <div className="md:w-1/2 px-4 w-full">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First name
                    </label>
                    <input
                  type="text"
               
                      id="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div className="md:w-1/2 px-4 w-full">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last name
                    </label>
                    <input
                  type="text"
              
                      id="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
            </div>
            


                <div className="flex flex-col my-4 gap-4 md:flex-row">
                  <div className="md:w-1/2 px-4 w-full">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                  id="email"
               
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div className="md:w-1/2 px-4 w-full">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone number
                    </label>
                <input
                  type="tel"
               
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col my-4 gap-4 md:flex-row">
                  <div className="md:w-1/2 px-4 w-full">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company
                    </label>
                    <input
                  type="text"
                 
                      id="company"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div className="md:w-1/2 px-4 w-full">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {" "}
                      Country
                </label>
               <div className="w-[235px]">
               <input
                      type="text"
                    id="country"
               
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Choose city"
                    />
                  </div>
                  </div>
                </div>

                <div className="flex flex-col my-4 md:flex-row gap-4">
                  <div className="md:w-1/2 px-4 w-full">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      City
                    </label>
                    <input
                      type="text"
                  id="city"
         
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Choose city"
                    />
                  </div>
                  <div className="md:w-1/2 px-4 w-full">
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Postal code
                    </label>
                    <input
                  type="text"
            
                      id="zipCode"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
            </div>
            <div className="flex flex-col my-4 gap-4 md:flex-row">
            <div className="md:w-1/2 px-4 w-full">
             
                  <label
                    htmlFor="address1"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Address 1
                  </label>
                  <input
                  type="text"
                
                    id="address1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div className="md:w-1/2 px-4 w-full">
                  <label
                    htmlFor="address2"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Address 2
                  </label>
                  <input
                  type="text"
               
                    id="address2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
            </div>
              <div>
              </div>
            </div>
            <div className=" md:max-w-[1920px] w-full px-auto   gap-4 ">
            <div className="md:max-w-[872px] my-4 w-full h-auto">
            <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="sameAsShipping"
                  className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <label
                  htmlFor="sameAsShipping"
                  className="text-sm text-gray-700"
                >
                  Same as shipping address
                </label>
              </div>
            <div className="flex flex-col md:flex-row pt-4">
                  <Link href="/addtocart">
                  <button className="py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-72 h-12 px-3">
                Back to cart
                    </button>
                  </Link>
                  <Link href="/placeanorder">
                  <button onClick={() =>handleCreateShipment()}  className="px-6 py-2 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 rounded-[4px] hover:via-orange-500 hover:to-orange-600 w-72 h-12" disabled={loading || cartItems.length === 0}>
             Proced to Billing
              </button></Link>
            </div>
            </div>
          </div>
          </div>
          <div className="flex-1">
  <div className="py-8 px-6 relative mx-auto  lg:max-w-[424px] w-full rounded-lg border-2 border-gray-300">
    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
    <Order />
    <button
        onClick={handlePlaceOrder}
        disabled={loading || cartItems.length === 0}
        className="px-6 py-2 w-full bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 rounded-[4px]  hover:via-orange-500 hover:to-orange-600"
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>
  
           
          
           
         
          </div>
          </div>
          </div>
          </div>
    
    </>
  );
}


export const ShipmentComponent = ({ orderId }: { orderId: string }) => {
  const [sanityOrderId, setSanityOrderId] = useState(null);

  // 🟢 Step 1: Fetch Order ID from Sanity
  useEffect(() => {
    const fetchOrderId = async () => {
      try {
        const response = await fetch(`/api/getOrder?orderId=${orderId}`);
        const data = await response.json();

        if (response.ok && data?.sanityOrderId) {
          setSanityOrderId(data.sanityOrderId);
        } else {
          console.error("❌ Error fetching order ID:", data.message);
        }
      } catch (error) {
        console.error("❌ Fetch Order ID Error:", error);
      }
    };

    fetchOrderId();
  }, [orderId]); // Runs when `orderId` changes

  // 🟢 Step 2: Create Shipment
  const handleCreateShipment = async () => {
    if (!sanityOrderId) {
      alert("Order ID is missing!");
      return;
    }

    try {
      const response = await fetch("/api/shipment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: sanityOrderId }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to create shipment");
      }

      console.log("✅ Shipment Created:", result);
      alert("Shipment created successfully!");
    } catch (error) {
      console.error("❌ Error creating shipment:", error);
      alert("Failed to create shipment!");
    }
  };

  return (
    <div>
      <h2>Shipment</h2>
      <p>Sanity Order ID: {sanityOrderId || "Loading..."}</p>
      <button onClick={handleCreateShipment} disabled={!sanityOrderId}>
        Create Shipment
      </button>
    </div>
  );
};


