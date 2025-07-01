import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
// import Popup from "../components/Popup"; // Make sure this is created with the code below

const HomePage = () => {
return (
  <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg max-w-5xl mx-auto mt-10">
<Header/>
    <div className="text-center">
      <img
        src="https://lh4.googleusercontent.com/proxy/WRA594IQ5tU-kcCV3Wx9lmedwzbGRy6rAw69dKDFJNgvccG6i3tEtlceJ_y_YwjnR1UiCHCkFGZ1tZUg11q4xVFYwcjxzK7xyQ"

        alt="Vivekanand College Banner"
        className="mx-auto rounded-lg shadow-lg border w-full max-w-2xl"
        width="100%"
        height="200"
      />
      <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-gray-900">
        Welcome to Vivekanand College!
      </h1>
      <p className="text-lg mt-2 text-gray-700">
        Your journey to excellence starts here.
      </p>
      <Link>
        to="/admission"
        className="inline-block mt-4"

        <span className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition duration-300 shadow-lg">

          <input type="button" value="Apply Now!" />
        </span>
      </Link>
    </div>

    <div className="mt-50 text-lg leading-relaxed text-white-800">
      <p>
        <strong className="text-gray-900">Vivekanand College</strong> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.
      </p>
      <p className="mt-4">
        At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
      </p>
    </div>

    <div className="mt-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Why Choose Vivekanand College?
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base">
        <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
        <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
        <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
        <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
        <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
      </ul>
    </div>

    <div className="mt-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Campus Life & Facilities
      </h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/66/VIPS-TC_Campus.jpg"
        alt="Programs & Courses"
        className="rounded-lg shadow-lg border w-full"
        width="100%"
        height="250"
      />
      <iframe
        title="Vivekanand College Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.123456789!2d72.831062315367!3d19.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b123456789ab%3A0xabcdef123456789!2sVivekanand%20College!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0, borderRadius: '0.5rem' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <p className="mt-4 text-gray-700 text-lg">
        Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.
      </p>
    </div>

  </div>
);
}

export default HomePage;
