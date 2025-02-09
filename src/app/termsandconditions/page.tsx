"use client"
import { useState } from "react";
import Link from 'next/link';

export default function TermsAndConditions() {
  const [agreed, setAgreed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleAgreeClick = () => {
    if (agreed) {
      setShowPopup(true);
    }
  };

  const closePopup = () => setShowPopup(false);

  return (
    <>
       <section
            className="bg-cover bg-center h-64 flex items-center justify-center"
            style={{ backgroundImage: "url('/images/bg.png')" }}
          >
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold">Terms And Conditions</h2>
              <p className="pt-2">
                <Link href="/" className="text-yellow-400">
                  Home
                </Link>{" "}
                › Terms and Conditions
              </p>
            </div>
          </section>
    
    <div className="max-w-4xl mx-auto my-12 p-8 bg-gray-100 shadow-xl rounded-xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">1. Introduction</h2>
      <p className="text-gray-600 mb-4">Welcome to Food Tuck! These Terms and Conditions govern your use of our website and services. By accessing or using Food Tuck, you agree to comply with the following terms. Please read them carefully.</p>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">2. User Responsibilities</h2>
      <ul className="list-disc pl-8 text-gray-600 mb-4">
        <li className="mb-2">You agree to provide accurate, up-to-date information about your account and orders.</li>
        <li className="mb-2">You are responsible for maintaining the confidentiality of your account information.</li>
        <li className="mb-2">You agree to use Food Tuck solely for lawful purposes and to follow our community guidelines.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">3. Payment Terms</h2>
      <p className="text-gray-600 mb-4">All payments made on Food Tuck are processed securely. By placing an order, you agree to pay the total price listed, including taxes and shipping fees. You may use any payment method accepted by our platform, such as credit cards or online payment systems.</p>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">4. Cancellation and Refund Policy</h2>
      <p className="text-gray-600 mb-4">You may cancel your order within 30 minutes of placing it for a full refund. After this period, cancellations will not be accepted, but you may be eligible for a partial refund depending on the circumstances. Please refer to our refund policy for more details.</p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-4">5. Privacy Policy</h2>
      <p className="text-gray-600 mb-4">We value your privacy. Our Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to protect your personal data. By using our services, you consent to the practices described in the Privacy Policy.</p>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">6. Limitation of Liability</h2>
      <p className="text-gray-600 mb-4">We are not responsible for any damages, losses, or expenses that may arise from your use of our platform, including service interruptions, technical issues, or loss of data. By using Food Tuck, you accept these terms.</p>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">7. Changes to Terms</h2>
      <p className="text-gray-600 mb-8">We reserve the right to modify these Terms and Conditions at any time. You will be notified of any significant changes. It is your responsibility to regularly review this page for updates.</p>
      
      <div className="flex items-center mb-6">
        <input 
          type="checkbox" 
          id="agree" 
          className="mr-3 h-5 w-5 text-blue-500 border-gray-300 rounded"
          checked={agreed} 
          onChange={() => setAgreed(!agreed)} 
        />
        <label htmlFor="agree" className="text-lg text-gray-700">
          I agree to the Terms and Conditions
        </label>
      </div>
      
      <button 
        className={`bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white p-2 rounded w-full'}`} 
        disabled={!agreed}
        onClick={handleAgreeClick}
      >
        Agree & Continue
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-96 text-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Terms Agreement</h3>
            <p className="text-gray-600 mb-6">You have successfully agreed to the Terms and Conditions. Thank you for using Food Tuck!</p>
            <button 
              className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white p-2 rounded w-full"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
      </div>
      </>
  );
}
