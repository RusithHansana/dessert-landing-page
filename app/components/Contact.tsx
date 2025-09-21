"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cakeType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this to your backend
    alert("Thank you for your inquiry! We'll get back to you soon.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      cakeType: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-amber-600" />,
      title: "Phone",
      content: "(555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <Mail className="w-6 h-6 text-amber-600" />,
      title: "Email",
      content: "hello@sweetdelights.com",
      link: "mailto:hello@sweetdelights.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-600" />,
      title: "Address",
      content: "123 Baker Street, Sweet City, SC 12345",
      link: "#map",
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      title: "Hours",
      content: "Mon-Sat: 8AM-7PM, Sun: 9AM-5PM",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to order your perfect cake? Have questions about our services?
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Order Your Cake
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cakeType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Cake Type
                  </label>
                  <select
                    id="cakeType"
                    name="cakeType"
                    value={formData.cakeType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                  >
                    <option value="">Select a cake type</option>
                    <option value="birthday">Birthday Cake</option>
                    <option value="wedding">Wedding Cake</option>
                    <option value="anniversary">Anniversary Cake</option>
                    <option value="custom">Custom Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors resize-vertical"
                  placeholder="Tell us about your cake requirements, size, flavors, special decorations, delivery date, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-amber-600 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Notice */}
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <h4 className="font-semibold text-amber-800 mb-2">
                Order in Advance
              </h4>
              <p className="text-amber-700 text-sm">
                Custom cakes require 48-72 hours notice. For large orders or
                special events, please contact us at least one week in advance
                to ensure availability.
              </p>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-2">
                Quick Response
              </h4>
              <p className="text-green-700 text-sm">
                We typically respond to all inquiries within 2-4 hours during
                business hours. For urgent requests, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
