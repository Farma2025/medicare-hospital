import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">Trusted Healthcare Provider</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Health, Our Priority
            </h1>
            
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Providing compassionate, quality healthcare services with a team of experienced professionals dedicated to your wellbeing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/appointments"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-center transition duration-300 shadow-lg"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-center transition duration-300 shadow-lg"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop"
                alt="Hospital"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 bg-green-500 w-24 h-24 rounded-lg -z-10"></div>
            <div className="absolute -top-4 -left-4 bg-blue-400 w-16 h-16 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}