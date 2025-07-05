import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="max-w-4xl mx-auto my-16 p-10 bg-white dark:bg-gray-900 shadow-2xl rounded-3xl transition duration-500 ease-in-out">
      <h1 className="text-4xl md:text-4xl font-extrabold mb-12 text-center text-blue-700 dark:text-blue-400 tracking-tight">
        📬 Contact Us
      </h1>

      {/* Address Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white border-b pb-3 border-gray-300 dark:border-gray-700">
          🏢 Our Address
        </h2>
        <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-2">
          <p><strong>📍 Galgotias University</strong></p>
          <p>Yamuna Expressway, Greater Noida</p>
          <p>Uttar Pradesh - 203201, India</p>
          <p>📞 <strong>Phone:</strong> +91-7859022736</p>
          <p>✉️ <strong>Email:</strong> shivamrajpoddar01@gmail.com</p>
        </div>
      </section>

      {/* Feedback Form */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white border-b pb-3 border-gray-300 dark:border-gray-700">
          🧑‍🎓 Student Feedback
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
              Message
            </label>
            <textarea
              rows="5"
              required
              placeholder="Write your feedback..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold shadow-sm"
          >
            Submit Feedback
          </button>
        </form>
      </section>

      {/* Back to Home */}
      <div className="mt-14 text-center">
        <Link
          to="/"
          className="inline-block bg-blue-100 text-blue-700 hover:bg-blue-200 px-6 py-3 rounded-lg font-medium transition duration-300 shadow-md"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Contact;
