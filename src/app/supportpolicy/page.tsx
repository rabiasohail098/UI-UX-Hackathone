"use client"
import { useState } from "react";
import Link from "next/link";
interface ContactForm {
    name: string;
    email: string;
    message: string;
}
export default function SupportPolicy() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [submitted, setSubmitted] = useState(false);



interface FormEvent extends React.FormEvent<HTMLFormElement> {}

interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

const handleInputChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setContactForm((prevForm: ContactForm) => ({
        ...prevForm,
        [name]: value,
    }));
};

  const validateForm = () => {
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      return "Please fill in all fields.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(contactForm.email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError("");

    // Validate form before submitting
    const error = validateForm();
    if (error) {
        setFormError(error);
        return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
        setSubmitted(true);
        setContactForm({ name: "", email: "", message: "" });
        setIsSubmitting(false);
    }, 1000);
};

    return (
        <>
                       <section
      className="bg-cover bg-center h-64 flex items-center justify-center"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold">Support Policy</h2>
        <p className="pt-2">
          <Link href="/" className="text-yellow-400">
            Home
          </Link>{" "}
          › Support Policy
        </p>
      </div>
    </section>
    <div className="max-w-3xl mx-auto my-12 p-8 bg-gray-100 shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Support Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Introduction</h2>
        <p className="text-gray-600">
          Our support policy outlines the various ways you can get help from our support team, the expected response times,
          and the services available to assist you with any issues or questions you might have regarding our platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Support Channels</h2>
        <p className="text-gray-600">
          You can contact our support team through the following channels:
          <ul className="list-disc pl-6 text-gray-600">
            <li>Email: support@foodtuck.com</li>
            <li>Phone: +1-800-123-4567</li>
            <li>Live Chat: Available on the website</li>
          </ul>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Response Times</h2>
        <p className="text-gray-600">
          We aim to respond to all inquiries within 24 hours during business hours (Monday - Friday, 9:00 AM to 6:00 PM).
          For urgent issues, please use our live chat feature.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Support Availability</h2>
        <p className="text-gray-600">
          Our support team is available during the following hours:
          <ul className="list-disc pl-6 text-gray-600">
            <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
            <li>Weekends: Closed (except for urgent inquiries via live chat)</li>
          </ul>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Additional Services</h2>
        <p className="text-gray-600">
          We offer premium support services for an additional fee, which includes:
          <ul className="list-disc pl-6 text-gray-600">
            <li>Priority response times</li>
            <li>Dedicated support agents</li>
            <li>24/7 availability for critical issues</li>
          </ul>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Contact Support</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg text-gray-700 mb-2" htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border rounded-lg shadow-sm"
              value={contactForm.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg text-gray-700 mb-2" htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border rounded-lg shadow-sm"
              value={contactForm.email}
              onChange={handleInputChange}
              placeholder="Your email address"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg text-gray-700 mb-2" htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border rounded-lg shadow-sm"
              value={contactForm.message}
              onChange={handleInputChange}
              placeholder="Describe your issue or request"
              required
            />
          </div>

          {formError && <p className="text-red-600 mb-4">{formError}</p>}

          <button
            type="submit"
            className={`bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white p-2 rounded w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit Request"}
          </button>
        </form>

        {submitted && (
          <p className="text-green-600 mt-4">Your message has been submitted successfully! Our support team will get back to you soon.</p>
        )}
      </section>
            </div>
            </>
  );
}
