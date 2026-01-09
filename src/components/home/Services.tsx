import Link from 'next/link';
import { services } from '@/data/services';

export default function Services() {
  const iconMap: { [key: string]: string } = {
    heart: '❤️',
    brain: '🧠',
    baby: '👶',
    ambulance: '🚑'
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive medical services tailored to your healthcare needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 hover:border-blue-500 group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition duration-300">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}