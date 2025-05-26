import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form logic or API call here
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-12">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Text */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-300">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your visions.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
