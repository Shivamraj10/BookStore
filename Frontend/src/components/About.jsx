import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="max-w-5xl mx-auto my-16 p-10 bg-white dark:bg-gray-900 shadow-2xl rounded-3xl transition duration-500 ease-in-out">
      <h1 className="text-4xl md:text-4xl font-extrabold mb-10 text-center text-blue-700 dark:text-blue-400 tracking-tight">
        📚 About BookStore
      </h1>

      {/* Overview Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white border-b pb-2 border-gray-300 dark:border-gray-700">
          🔍 Overview
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          BookStore is a modern web application that enables users to browse, search, and purchase books online with ease. Built with <strong>React.js</strong> and styled using <strong>Tailwind CSS</strong>, this app is optimized for speed, user experience, and cross-device compatibility.
        </p>
      </section>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white border-b pb-2 border-gray-300 dark:border-gray-700">
          🚀 Key Features
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Responsive, clean UI with dark/light theme toggle</li>
          <li>Book search and filtering</li>
          <li>User authentication (login/signup/logout)</li>
          <li>Cart functionality with real-time badge updates</li>
          <li>Seamless navigation using React Router</li>
        </ul>
      </section>

      {/* Technologies Used */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white border-b pb-2 border-gray-300 dark:border-gray-700">
          🛠️ Technologies Used
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Frontend:</strong> React.js, Tailwind CSS</li>
          <li><strong>Backend:</strong> Node.js, Express.js (planned)</li>
          <li><strong>Database:</strong> MongoDB (for books and user data)</li>
          <li><strong>Auth:</strong> Custom Context API or Firebase</li>
        </ul>
      </section>

      {/* Developer Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white border-b pb-2 border-gray-300 dark:border-gray-700">
          👨‍💻 About the Developer
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Hello! I'm <strong>Shivam Raj</strong>, a passionate Computer Science Engineering student at <strong>Galgotias University</strong>. With a deep interest in web development and building real-world applications, I enjoy solving challenges that blend creativity with functionality.
        </p>
        <p className="text-lg mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          I created <strong>BookStore</strong> as part of my ongoing learning in modern frontend technologies like React.js. My goal is to continuously improve and build useful tools that make user experiences smoother and more enjoyable.
        </p>
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

export default About;
