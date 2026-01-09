import Link from 'next/link';
import { doctors } from '@/data/doctors';

export default function FeaturedDoctors() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Doctors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our experienced team of healthcare professionals
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              {/* Doctor Image */}
              <div className="relative h-80 bg-gradient-to-br from-red-500 to-red-600">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600 mb-4">
                  {doctor.experience}
                </p>
                
                <Link
                  href="/appointments"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/doctors"
            className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            View All Doctors
          </Link>
        </div>
      </div>
    </section>
  );
}