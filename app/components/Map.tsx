"use client";

import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Map = () => {
  // Replace with your actual business coordinates
  const businessAddress = "123 Baker Street, Sweet City, SC 12345";
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.00123456789!3d40.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA3JzI0LjQiTiA3NMKwMDAnMDQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus";

  const handleDirections = () => {
    const encodedAddress = encodeURIComponent(businessAddress);
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`,
      "_blank"
    );
  };

  return (
    <section id="map" className="relative">
      {/* Map Container */}
      <div className="relative h-96 w-full">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sweet Delights Location"
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />

        {/* Map Overlay */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* Location Info Overlay */}
      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-sm">
        <div className="flex items-start space-x-3 mb-4">
          <MapPin className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Visit Our Bakery
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {businessAddress}
            </p>
          </div>
        </div>

        <button
          onClick={handleDirections}
          className="flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 w-full justify-center"
        >
          <ArrowRight className="w-4 h-4" />
          <span>Get Directions</span>
        </button>
      </div>

      {/* Business Hours Overlay */}
      <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Monday - Friday</span>
            <span className="font-medium">8:00 AM - 7:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Saturday</span>
            <span className="font-medium">8:00 AM - 7:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Sunday</span>
            <span className="font-medium">9:00 AM - 5:00 PM</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-600 font-medium">Open Now</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Closes at 7:00 PM</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">
                Sweet Delights
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Creating sweet memories with handcrafted chocolate cakes since
                2008. Every cake is made with love, premium ingredients, and
                artistic passion.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#hero"
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#story"
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    My Story
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">{businessAddress}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-sm">hello@sweetdelights.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Sweet Delights. All rights reserved. Made with ❤️ for cake
              lovers everywhere.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Map;
