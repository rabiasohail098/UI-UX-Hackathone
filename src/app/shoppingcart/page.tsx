import React from 'react';
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Page = () => {
    const prices = ["531.00", "498.00", "221.00", "441.00", "325.00"];
    const total = ["221.00", "521.00", "521.00", "421.00", "321.00"];
    const products = ["Burger", "Fresh Lime", "Pizza", "Chocolate Muffin", "Cheese Butter"];

    return (
        <div className="px-32 h-[1200px]">
            {/* Centralized Content Container */}
            <div className="max-w-[1320px] mx-auto space-y-6 h-[765px]">
                {/* Product Table */}
                <div className="flex justify-center">
                    <div className="w-full border border-gray-300 rounded-md">
                        {/* Table Header */}
                        <div className="grid grid-cols-5 gap-4 items-center bg-gray-100 p-2 font-bold text-gray-700">
                            <div>Product</div>
                            <div>Price</div>
                            <div>Quantity</div>
                            <div>Total</div>
                            <div>Remove</div>
                        </div>

                        {/* Product Rows */}
                        {products.map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-5 gap-4 w-[225px] items-center border-b py-4"
                            >
                                {/* Product Details */}
                                <div className="flex items-center gap-4">
                                    <div className="relative w-20 h-16">
                                        <Image
                                            src="/images/me4.png"
                                            alt={item}
                                            fill
                                            className="object-cover rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{item}</h3>
                                        <div className="flex gap-1">
                                            <FaStar size={12} className="text-yellow-400" />
                                            <FaStar size={12} className="text-yellow-400" />
                                            <CiStar size={12} />
                                            <CiStar size={12} />
                                            <CiStar size={12} />
                                        </div>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="text-gray-800">${prices[index]}</div>

                                {/* Quantity */}
                                <div className="flex items-center">
                                    <button className="flex items-center gap-2 border rounded-full px-4 py-1">
                                        <span>1</span>
                                        <span className="text-orange-500">+</span>
                                    </button>
                                </div>

                                {/* Total */}
                                <div className="text-gray-800">${total[index]}</div>

                                {/* Remove */}
                                <div>
                                    <RxCross2 className="text-red-500 cursor-pointer" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coupon and Billing Section */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Coupon Code */}
                    <div className="flex-1">
                        <h2 className="text-xl font-bold mb-4">Coupon Code</h2>
                        <div className="border p-4 rounded-md">
                            <p className="text-gray-600 mb-4">
                                Apply a coupon code to avail discounts on your total bill.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="text"
                                    placeholder="Enter coupon code"
                                    className="flex-1 border rounded-md px-4 py-2"
                                />
                                <button className="bg-orange-500 text-white px-6 py-2 rounded-md">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Billing Summary */}
                    <div className="flex-1">
                        <h2 className="text-xl font-bold mb-4">Total Bill</h2>
                        <div className="border p-4 rounded-md space-y-4">
                            <div className="flex justify-between">
                                <span>Cart Subtotal:</span>
                                <span>$120.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping Charge:</span>
                                <span>$00.00</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total Amount:</span>
                                <span>$120.00</span>
                            </div>
                            <button className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;

// <div className="container mx-auto px-4">
// {/* Product Table */}
// <div
//     className="flex flex-col items-center border border-gray-300 rounded-md"
//     style={{ width: "765px" }}
// >
//     {/* Table Header */}
//     <div className="grid grid-cols-5 gap-4 items-center bg-gray-100 p-2 font-bold text-gray-700 w-full">
//         <div>Product</div>
//         <div>Price</div>
//         <div>Quantity</div>
//         <div>Total</div>
//         <div>Remove</div>
//     </div>

//     {/* Product Rows */}
//     {products.map((item, index) => (
//         <div
//             key={index}
//             className="grid grid-cols-5 gap-4 items-center border-b py-4 w-full"
//         >
//             {/* Product Details */}
//             <div className="flex items-center gap-4">
//                 <div className="relative w-20 h-16">
//                     <Image
//                         src="/images/me4.png"
//                         alt={item}
//                         fill
//                         className="object-cover rounded-md"
//                     />
//                 </div>
//                 <div>
//                     <h3 className="text-lg font-semibold text-gray-800">{item}</h3>
//                     <div className="flex gap-1">
//                         <FaStar size={12} className="text-yellow-400" />
//                         <FaStar size={12} className="text-yellow-400" />
//                         <CiStar size={12} />
//                         <CiStar size={12} />
//                         <CiStar size={12} />
//                     </div>
//                 </div>
//             </div>

//             {/* Price */}
//             <div className="text-gray-800">${prices[index]}</div>

//             {/* Quantity */}
//             <div className="flex items-center">
//                 <button className="flex items-center gap-2 border rounded-full px-4 py-1">
//                     <span>1</span>
//                     <span className="text-orange-500">+</span>
//                 </button>
//             </div>

//             {/* Total */}
//             <div className="text-gray-800">
//                 ${total[index]} {/* Replace `1` with dynamic quantity */}
//             </div>

//             {/* Remove */}
//             <div>
//                 <RxCross2 className="text-red-500 cursor-pointer" />
//             </div>
//         </div>
//     ))}
// </div>
// </div>
