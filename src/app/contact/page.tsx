"use client"
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Link from "next/link";
interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const savedData = localStorage.getItem("contactForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);



const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("contactForm", JSON.stringify(formData));
    Swal.fire({
            position: "top",
            text: "Thank you for your feedback.",
            icon: "success",
            title: `Feedback`,
            showConfirmButton: true,
            confirmButtonColor: "#f97316",
          
          });
    
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({ ...prev, [name]: value }));
};

  return (
    <>
       <section
            className="bg-cover bg-center h-64 flex items-center justify-center"
            style={{ backgroundImage: "url('/images/bg.png')" }}
          >
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold">Contact Page</h2>
              <p className="pt-2">
                <Link href="/" className="text-yellow-400">
                  Home
                </Link>{" "}
                ›Contact
              </p>
            </div>
          </section>
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">We'd love to hear from you! Reach out to us with your queries.</p>
        <p className="text-gray-800 font-semibold">📍 Location: 123 Food Street, Food City</p>
        <p className="text-gray-800 font-semibold">📧 Email: contact@foodtuck.com</p>
        <p className="text-gray-800 font-semibold">📞 Phone: +123 456 7890</p>
        <iframe
          className="w-full h-64 mt-4 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509363!2d144.95373531531858!3d-37.8162792797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b64c1b9b92a1!2sFood%20Street!5e0!3m2!1sen!2sus!4v1619462868976!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Your Feedback</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white p-2 rounded w-full">
            Submit
          </button>
        </form>
      </div>
      </div>
      </>
  );
}
