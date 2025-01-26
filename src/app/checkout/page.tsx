"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
interface Checkout {
  id: number;
  img: string;
  title: string;
  weg: string;
  price: string;
}
export default function CheckoutPage() {
  const query = `[_type=="carts"]`
  const data: Checkout[] = [
    {
      id: 1,
      img: "/images/chick.png",
      title: "Chicken Tikka Kabab",
      weg: "150 gm net",
      price: "50$",
    },
    {
      id: 2,
      img: "/images/chick.png",
      title: "Chicken Tikka Kabab",
      weg: "150 gm net",
      price: "50$",
    },
    {
      id: 3,
      img: "/images/chick.png",
      title: "Chicken Tikka Kabab",
      weg: "150 gm net",
      price: "50$",
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const subtotal = data.reduce((sum, item) => sum + parseFloat(item.price), 0);
  const discount = 0.25 * subtotal; // 25% discount
  const tax = 0.1 * subtotal; // 10% tax
  const total = subtotal - discount + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePlaceOrder = () => {
    if (!formData.firstName || !formData.email || !formData.phone || !formData.address1) {
      alert("Please fill in all required fields!");
      return;
    }
    setIsOrderPlaced(true);
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
       
         
        <div className="lg:max-w-[872px] md:px-16 px-4  w-full h-auto">
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
                    <select
                      id="country"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="" className="w-full px-3">Choose country</option>
                      <option value="us" className="w-full px-3">United States</option>
                      <option value="uk" className="w-full px-3">United Kingdom</option>
                      <option value="ca" className="w-full px-3">Canada</option>
                      <option value="pa" className="w-full px-3">Pakistan</option>
                  </select>
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
                      Zip code
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
              <button className="py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-72 h-12 px-3">
                Back to cart
              </button>
              <button className="px-6 py-2 bg-orange-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-72 h-12">
                Proceed to shipping
              </button>
            </div>
            </div>
          </div>
          </div>
          <div className="flex-1">
  <div className="py-8 px-6 relative mx-auto  lg:max-w-[424px] w-full rounded-lg border-2 border-gray-300">
    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
    <div className="space-y-6 gap-3 w-full">
      {data.map((item) => (
        <div 
          key={item.id} 
          className="flex gap-4 items-center w-full">
          <div className="relative w-[82px] h-[88px]">
            <Image
              src={item.img}
              alt="Chicken Tikka Kebab"
              fill
              className="rounded-md object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-medium md:w-[161px]">
              Chicken Tikka Kebab
            </h3>
            <p className="text-sm text-gray-500">{item.weg}</p>
            <p className="text-sm text-gray-500">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
 
  
           
            <div className="mt-6 w-full space-y-6 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">130$</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Discount</span>
                <span className="font-medium">25%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">54.76$</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">432.65$</span>
              </div>
            </div>
           
            <button className="w-full mt-6 px-6 py-3 bg-orange-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              Place an order
            </button>
          </div>
          </div>
          </div>
          </div>
    
    </>
  );
}
