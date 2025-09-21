"use client";

import Image from "next/image";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Sample cake data - replace with your actual images
  const cakes = [
    {
      id: 1,
      title: "Classic Chocolate Cake",
      image: "/images/chocolate-cake-1.jpg",
      description: "Rich, moist chocolate cake with dark chocolate ganache",
    },
    {
      id: 2,
      title: "Triple Layer Delight",
      image: "/images/chocolate-cake-2.jpg",
      description: "Three layers of chocolate heaven with cream filling",
    },
    {
      id: 3,
      title: "Chocolate Strawberry",
      image: "/images/chocolate-cake-3.jpg",
      description: "Chocolate cake topped with fresh strawberries",
    },
    {
      id: 4,
      title: "Decadent Truffle Cake",
      image: "/images/chocolate-cake-4.jpg",
      description: "Chocolate truffle cake with gold leaf decoration",
    },
    {
      id: 5,
      title: "Birthday Special",
      image: "/images/chocolate-cake-5.jpg",
      description: "Custom birthday cake with chocolate decorations",
    },
    {
      id: 6,
      title: "Anniversary Cake",
      image: "/images/chocolate-cake-6.jpg",
      description: "Elegant anniversary cake with chocolate roses",
    },
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Cake Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Feast your eyes on our delicious creations. Each cake tells a story
            of craftsmanship, quality ingredients, and artistic presentation.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cakes.map((cake, index) => (
            <div
              key={cake.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={cake.image}
                  alt={cake.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAQAC/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AJgNnZg5RZmzK8sEY3XH1FjOuMQrYzrCGRmIcnOzIvJgqXZFCa6yvQUjzMWY7"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-lg font-semibold mb-2">{cake.title}</h3>
                    <p className="text-sm">{cake.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-size images */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={cakes[selectedImage].image}
                alt={cakes[selectedImage].title}
                width={800}
                height={800}
                className="object-contain max-h-[80vh]"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white text-center bg-black/50 p-4 rounded">
                <h3 className="text-xl font-semibold mb-2">
                  {cakes[selectedImage].title}
                </h3>
                <p>{cakes[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Order Your Custom Cake
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
