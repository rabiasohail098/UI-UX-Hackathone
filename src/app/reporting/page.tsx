"use client"
import { useState } from "react";
import Link from "next/link";
interface ReportData {
    name: string;
    email: string;
    issueType: string;
    description: string;
    urgency: string;
}

interface Report extends ReportData {
    id: number;
}

export default function Reporting() {
  const [reportData, setReportData] = useState({
    name: "",
    email: "",
    issueType: "",
    description: "",
    urgency: "low",
  });
  const [reports, setReports] = useState<{ id: number; name: string; email: string; issueType: string; description: string; urgency: string }[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");



const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setReportData({
        ...reportData,
        [name]: value,
    });
};

  const validateForm = () => {
    if (!reportData.name || !reportData.email || !reportData.issueType || !reportData.description) {
      return "All fields are required.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(reportData.email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
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
        setReports([...reports, { ...reportData, id: Date.now() }]);
        setReportData({ name: "", email: "", issueType: "", description: "", urgency: "low" });
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
        <h2 className="text-4xl font-bold">Reporting Page</h2>
        <p className="pt-2">
          <Link href="/" className="text-yellow-400">
            Home
          </Link>{" "}
          › Reporting
        </p>
      </div>
    </section>
    <div className="max-w-3xl my-12 mx-auto p-8 bg-gray-100 shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Report an Issue</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg text-gray-700 mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border rounded-lg shadow-sm"
            value={reportData.name}
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
            value={reportData.email}
            onChange={handleInputChange}
            placeholder="Your email address"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg text-gray-700 mb-2" htmlFor="issueType">
            Issue Type
          </label>
          <input
            type="text"
            id="issueType"
            name="issueType"
            className="w-full p-3 border rounded-lg shadow-sm"
            value={reportData.issueType}
            onChange={handleInputChange}
            placeholder="Type of issue"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg text-gray-700 mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full p-3 border rounded-lg shadow-sm"
            value={reportData.description}
            onChange={handleInputChange}
            placeholder="Describe the issue"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg text-gray-700 mb-2" htmlFor="urgency">
            Urgency Level
          </label>
          <select
            id="urgency"
            name="urgency"
            className="w-full p-3 border rounded-lg shadow-sm"
            value={reportData.urgency}
            onChange={handleInputChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {formError && <p className="text-red-600 mb-4">{formError}</p>}

        <button
          type="submit"
          className={`bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white p-2 rounded w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Report"}
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Submitted Reports</h2>
        {reports.length === 0 ? (
          <p className="text-gray-600">No reports submitted yet.</p>
        ) : (
          <ul className="space-y-4">
            {reports.map((report) => (
              <li
                key={report.id}
                className="p-4 border rounded-lg shadow-sm bg-gray-50"
              >
                <h3 className="text-xl font-semibold">{report.issueType}</h3>
                <p className="text-gray-700">{report.description}</p>
                <p className="text-gray-500">Urgency: {report.urgency}</p>
                <p className="text-gray-500">Reported by: {report.name} ({report.email})</p>
              </li>
            ))}
          </ul>
        )}
      </div>
            </div>
            </>
  );
}
