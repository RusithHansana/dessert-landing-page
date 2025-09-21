import Image from "next/image";

const Story = () => {
  return (
    <section id="story" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              My Story
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                It all started in my grandmother's kitchen when I was just eight
                years old. The smell of vanilla and chocolate, the warmth of the
                oven, and the joy on people's faces when they tasted her
                creations – that's when I knew I wanted to be a baker.
              </p>
              <p>
                After years of learning traditional techniques and experimenting
                with modern flavors, I founded Sweet Delights in 2008. What
                began as a small home-based business has grown into a beloved
                local bakery, but our commitment to quality and personal touch
                remains unchanged.
              </p>
              <p>
                Every cake that leaves our kitchen carries with it the same love
                and attention that my grandmother taught me. Because at the end
                of the day, we're not just making cakes – we're creating
                memories that will last a lifetime.
              </p>
            </div>

            {/* Personal Touch */}
            <div className="mt-8 p-6 bg-amber-50 rounded-lg border-l-4 border-amber-400">
              <blockquote className="text-lg italic text-gray-700">
                "Every cake tells a story, and I'm honored to be part of your
                special moments."
              </blockquote>
              <div className="mt-4 flex items-center">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-800 font-bold text-lg">M</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Maria Rodriguez
                  </div>
                  <div className="text-sm text-gray-600">
                    Founder & Master Baker
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-amber-600 mb-1">
                  2008
                </div>
                <div className="text-sm text-gray-600">
                  Founded Sweet Delights
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-amber-600 mb-1">5★</div>
                <div className="text-sm text-gray-600">
                  Average Customer Rating
                </div>
              </div>
            </div>
          </div>

          {/* Story Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/baker-story.jpg"
                  alt="Maria Rodriguez in her bakery"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAQAC/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AJgNnZg5RZmzK8sEY3XH1FjOuMQrYzrCGRmIcnOzIvJgqXZFCa6yvQUjzMWY7"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
