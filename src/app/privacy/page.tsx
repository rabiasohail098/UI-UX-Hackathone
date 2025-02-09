"use client"
import { useState } from "react";
import  Swal from "sweetalert2"
import Link from "next/link";
interface FormEvent extends React.FormEvent<HTMLFormElement> {}
export default function PrivacyPolicy() {
  const [hasConsented, setHasConsented] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [deletionForm, setDeletionForm] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleConsentChange = () => {
    setHasConsented(!hasConsented);
  };

interface DeletionForm {
    name: string;
    email: string;
}

interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const handleInputChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setDeletionForm((prevForm: DeletionForm) => ({
        ...prevForm,
        [name]: value,
    }));
};

  const validateDeletionForm = () => {
    if (!deletionForm.name || !deletionForm.email) {
      return "Please fill in all fields.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(deletionForm.email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

// Duplicate interfaces removed

const handleSubmitDeletionRequest = (e: FormEvent) => {
    e.preventDefault();
    setFormError("");

    // Validate form before submitting
    const error = validateDeletionForm();
    if (error) {
        setFormError(error);
        return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
        setIsSubmitted(true);
        setDeletionForm({ name: "", email: "" });
        setIsSubmitting(false);
    }, 1000);
};

  const handleProceedClick = () => {
    if (hasConsented) {
      setShowModal(true); // Show the modal if user has consented
    }
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

    return (
        <>
              <section
      className="bg-cover bg-center h-64 flex items-center justify-center"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold">Our Privacy</h2>
        <p className="pt-2">
          <Link href="/" className="text-yellow-400">
            Home
          </Link>{" "}
          › Our Privacy
        </p>
      </div>
    </section>
    <div className="max-w-3xl mx-auto p-8 bg-gray-100 my-24 shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Introduction</h2>
        <p className="text-gray-600">
          This Privacy Policy explains how we collect, use, and protect your personal data when you visit or use our services.
          By using our website, you consent to the collection and use of your data as outlined in this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Data We Collect</h2>
        <p className="text-gray-600">
          We collect the following types of data from our users:
          <ul className="list-disc pl-6 text-gray-600">
            <li>Personal Information (e.g., name, email, phone number)</li>
            <li>Usage Data (e.g., browser information, IP address, pages visited)</li>
            <li>Location Data (if location services are enabled)</li>
          </ul>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. How We Use Your Data</h2>
        <p className="text-gray-600">
          We use your data to improve our services, personalize your experience, and send important notifications. Your data may be used for:
          <ul className="list-disc pl-6 text-gray-600">
            <li>Providing and improving our services</li>
            <li>Sending marketing communications (with your consent)</li>
            <li>Responding to customer support inquiries</li>
          </ul>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Data Protection</h2>
        <p className="text-gray-600">
          We take your privacy seriously and implement security measures to protect your personal data. This includes encryption and secure storage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Third-Party Services</h2>
        <p className="text-gray-600">
          We may share your data with trusted third-party service providers to improve our services, including payment processors, analytics, and marketing tools.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Your Rights</h2>
        <p className="text-gray-600">
          As a user, you have the following rights regarding your data:
          <ul className="list-disc pl-6 text-gray-600">
            <li>Right to access your data</li>
            <li>Right to correct any inaccuracies in your data</li>
            <li>Right to request the deletion of your data</li>
          </ul>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Data Deletion Request</h2>
        <form onSubmit={handleSubmitDeletionRequest}>
          <div className="mb-4">
            <label className="block text-lg text-gray-700 mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border rounded-lg shadow-sm"
              value={deletionForm.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg text-gray-700 mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border rounded-lg shadow-sm"
              value={deletionForm.email}
              onChange={handleInputChange}
              placeholder="Your email address"
              required
            />
          </div>

          {formError && <p className="text-red-600 mb-4">{formError}</p>}

          <button
            type="submit"
            className={`w-full p-3 text-lg rounded-lg transition-all duration-300 ${isSubmitting ? "":'bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white p-2 rounded w-full' }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Request Data Deletion"}
          </button>
        </form>

        {isSubmitted && (
          <p className="text-green-600 mt-4">Your data deletion request has been submitted successfully. We will process it shortly.</p>
        )}
      </section>

      <section className="mb-8">
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="consent"
            checked={hasConsented}
            onChange={handleConsentChange}
            className="mr-2"
          />
          <label htmlFor="consent" className="text-gray-700">
            I agree to the Privacy Policy.
          </label>
        </div>
      </section>

      <button
        onClick={handleProceedClick}
        className={`w-full bg-gray-200 p-3 rounded ${hasConsented ? 'bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white p-2 w-full':""}`}
        disabled={!hasConsented}
      >
        Proceed
      </button>

      {/* Modal for confirmation */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Confirmation</h2>
            <p className="text-gray-600 mb-4">You have agreed to the Privacy Policy. Would you like to proceed?</p>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-red-600 text-white p-2 rounded-lg mr-2"
              >
                Close
              </button>
              <button
                onClick={() => {
                  // Implement action on proceed (e.g., navigate to next page or perform another action)
                  closeModal();
                      Swal.fire({
                          position: "top",
                          text: "Processing to the next step.",
                          icon: "success",
                          title: `Confirmation`,
                          showConfirmButton: true,
                          confirmButtonColor: "#f97316",
                         
                        });
                }}
                className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white p-2 rounded w-full"
              >
                Proceed
              </button>
            </div>
          </div>
                    </div>
                    
      )}
            </div>
            </>
  );
}
