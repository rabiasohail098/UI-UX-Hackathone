// "use client"; // This directive ensures the component runs only on the client side in a Next.js app.
// // // Install @stripe/stripe-js & @stripe/react-stripe-js
// // import React, { useState, useEffect } from "react";
// // import Link from 'next/link'
// // import { loadStripe } from "@stripe/stripe-js";
// // import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";


// // // Initialize Stripe with the public key from environment variables
// // const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

// // export default function Placeorder() {
// //   // State to store the client secret, which is required for processing the payment
// //   const [clientSecret, setClientSecret] = useState<string | null>(null);

// //   // useEffect(() => {
// //   //   // When the component mounts, request a new PaymentIntent from the server
// //   //   createPaymentIntent()
// //   //     .then((res) => {
// //   //         setClientSecret(res.clientSecret); // Save the client secret to state
// //   //     })
// //   // }, []);
// //   useEffect(() => {
// //     const fetchClientSecret = async () => {
// //       try {
// //         useEffect(() => {
// //           createPaymentIntent()
// //             .then((res) => {
// //               if (res?.clientSecret) {
// //                 console.log("Client Secret received:", res.clientSecret);
// //                 setClientSecret(res.clientSecret);
// //               } else {
// //                 console.error("No clientSecret received!", res);
// //               }
// //             })
// //             .catch((error) => console.error("Error fetching PaymentIntent:", error));
// //         }, []);
        
// //       } catch (error) {
// //         console.error("Error fetching PaymentIntent:", error);
// //       }
// //     };
  
// //     fetchClientSecret();
// //   }, []);
// //   console.log(clientSecret);
  
// //   // While waiting for the client secret, show a loading message
// //   if (!clientSecret) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <>
// //     <section
// //     className="bg-cover bg-center h-64 flex items-center justify-center"
// //     style={{ backgroundImage: "url('/images/bg.png')" }}
// //   >
// //     <div className="text-center text-white">
// //       <h2 className="text-4xl font-bold">Place Order</h2>
// //       <p className="pt-2">
// //         <Link href="/" className="text-yellow-400">Home</Link> › Place Order
// //       </p>
// //     </div>
// //       </section>
// //       <div style={{ maxWidth: 400, margin: "0 auto" }}>
// //       <h1>Checkout</h1>
// //       {/* Wrap the payment form inside the Elements provider with Stripe instance and client secret */}
// //       {clientSecret ? (
// //   <Elements stripe={stripePromise} options={{ clientSecret }}>
// //     <PaymentForm />
// //   </Elements>
// // ) : (
// //   <div>Loading payment form...</div>
// // )}
// //     </div>
// //     </>
   
    
// //   );
// // }

// // // Component that handles the payment form
// // function PaymentForm() {
// //   const stripe = useStripe(); // Hook to access Stripe methods
// //   const elements = useElements(); // Hook to access Stripe elements
// //   const [isProcessing, setIsProcessing] = useState(false); // State to manage loading state while processing
// //   const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to show error messages

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault(); // Prevent page refresh when submitting the form

// //     if (!stripe || !elements) return; // Ensure Stripe is loaded before proceeding

// //     setIsProcessing(true); // Indicate that the payment is being processed

// //     // Attempt to confirm the payment
// //     const { error } = await stripe.confirmPayment({
// //       elements,
// //       redirect: "if_required", // Redirect if required by the payment method
// //     });

// //     if (error) {
// //       setErrorMessage(error.message || "An unknown error occurred"); // Display error message if payment fails
// //       setIsProcessing(false);
// //     } else {
// //       // Payment was successful
// //       setErrorMessage(null);
// //       alert("Payment successful!"); // Notify the user
// //       setIsProcessing(false);
// //       // You can optionally redirect the user to a success page here
// //     }
// //   };

// //   return (
// //     <>
      
// //     <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
// //       {/* Stripe's payment element (handles input fields for card details, etc.) */}
// //       <div style={{ display: "block", visibility: "visible" }}>
// //         <PaymentElement  className="block visible"/>
// //       </div>

// //         <button type="submit"
// //           className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 rounded-[4px] px-4 py-1 hover:via-orange-500 hover:to-orange-600"
// //       disabled={!stripe || isProcessing}>
// //         {isProcessing ? "Processing..." : "Pay Now"} {/* Show dynamic button text */}
// //       </button>
// //       {/* Display any error messages if they occur */}
// //       {errorMessage && <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>}
// //       </form>
// // </>
// //   );
// // }


// "use client";

// import React, { useState, useEffect } from "react";
// import Link from 'next/link';
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { createPaymentIntent } from "./action";

// // Initialize Stripe with the public key
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

// export default function Placeorder() {
//   const [clientSecret, setClientSecret] = useState<string | null>(null);

//   useEffect(() => {
//     createPaymentIntent()
//       .then((res) => {
//         if (res?.clientSecret) {
//           console.log("✅ Client Secret received:", res.clientSecret);
//           setClientSecret(res.clientSecret);
//         } else {
//           console.error("❌ No clientSecret received!", res);
//         }
//       })
//       .catch((error) => console.error("⚠️ Error fetching PaymentIntent:", error));
//       console.log("✅ PaymentForm Mounted");
//   }, []);

//   if (!clientSecret) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <section
//         className="bg-cover bg-center h-64 flex items-center justify-center"
//         style={{ backgroundImage: "url('/images/bg.png')" }}
//       >
//         <div className="text-center text-white">
//           <h2 className="text-4xl font-bold">Place Order</h2>
//           <p className="pt-2">
//             <Link href="/" className="text-yellow-400">Home</Link> › Place Order
//           </p>
//         </div>
//       </section>

//       <div style={{ maxWidth: 400, margin: "0 auto" }}>
//         <h1>Checkout</h1>
//         {clientSecret ? (
//   <Elements stripe={stripePromise} options={{ clientSecret }}>
//     <PaymentForm />
//   </Elements>
// ) : (
//   <div>❌ Payment form not loading...</div>
// )}

//       </div>
//     </>
//   );
// }

// function PaymentForm() {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     setIsProcessing(true);

//     const { error } = await stripe.confirmPayment({
//       elements,
//       redirect: "if_required",
//     });

//     if (error) {
//       setErrorMessage(error.message || "An unknown error occurred");
//       setIsProcessing(false);
//     } else {
//       setErrorMessage(null);
//       alert("Payment successful!");
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
//       <PaymentElement className="block visible"/>
//       <button
//         type="submit"
//         className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 rounded-[4px] px-4 py-1 hover:via-orange-500 hover:to-orange-600"
//         disabled={!stripe || isProcessing}
//       >
//         {isProcessing ? "Processing..." : "Pay Now"}
//       </button>
//       {errorMessage && <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>}
//     </form>
//   );
// }


// Enable client-side rendering in Next.js (client components).
// Enable client-side rendering in Next.js (client components).
// Enable client-side rendering in Next.js (client components).
// Enable client-side rendering in Next.js (client components).
"use client";

// Import the CheckoutPage component and a helper function to convert amounts to subcurrency.
import CheckoutPage from "../components/Checkoutpage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

// Import Stripe-specific components and methods for creating and managing payments.
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Validate that the public Stripe key is defined in the environment variables.
if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

// Initialize the Stripe instance using the provided public key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// Define the main component for the home page.
export default function Home() {
  // The amount requested for payment.
  const amount = 49.99;

  // Return the main content of the page.
  return (
    // Use Tailwind CSS classes for styling and layout.
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-slate-400 to-zinc-900">
      
      {/* A header section for displaying who requested payment and how much. */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Ali Aftab</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      {/* Wrap the checkout page in Stripe's Elements component, which provides context 
          for Stripe Elements within this part of the application. */}
      <Elements
        stripe={stripePromise}       // The promise that resolves to a Stripe instance.
        options={{
          mode: "payment",           // The payment mode for Stripe Elements.
          amount: convertToSubcurrency(amount),  // Convert amount to subcurrency (e.g., cents).
          currency: "usd",           // The currency to use for the payment.
        }}
      >
        {/* Render the CheckoutPage component, passing the amount as a prop. */}
        <CheckoutPage amount={amount} />
      </Elements>
    </main>
  );
}