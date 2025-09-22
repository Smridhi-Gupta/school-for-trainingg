import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Contact Us
        </h2>
        <form className="space-y-6">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-600 outline-none"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-600 outline-none"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-600 outline-none"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number*"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-600 outline-none"
          />

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Your Message*"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-600 outline-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-900 transition text-white py-3 rounded-md font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
