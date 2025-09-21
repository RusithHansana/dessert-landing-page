import { Heart, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Made with Love",
      description:
        "Every cake is crafted with passion and attention to detail, ensuring each bite is perfect.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Premium Ingredients",
      description:
        "We use only the finest Belgian chocolate and organic ingredients sourced from trusted suppliers.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Custom Orders",
      description:
        "Personalized cakes for your special occasions, tailored to your unique taste and requirements.",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Sweet Delights, we believe that every celebration deserves the
            perfect cake. Our artisan bakers combine traditional techniques with
            modern flavors to create unforgettable chocolate experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-amber-600 mb-2">15</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
            <div className="text-gray-600">Cake Varieties</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
            <div className="text-gray-600">Order Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
