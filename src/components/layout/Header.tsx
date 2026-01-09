import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      {/* Top Bar */}
      <div className="bg-blue-700 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span>📞</span>
              <span>Emergency: +1 (555) 123-4567</span>
            </span>
            <span className="flex items-center gap-2">
              <span>📍</span>
              <span>123 Medical Center Dr, New York, NY</span>
            </span>
          </div>
          <div>
            <span>24/7 Available</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-2xl font-bold">+</span>
            </div>
            <span className="text-2xl font-bold">MediCare</span>
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/" className="hover:text-blue-200 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/doctors" className="hover:text-blue-200 transition">
                Doctors
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-200 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/appointments" className="hover:text-blue-200 transition">
                Appointment
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-200 transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Book Now Button */}
          <Link
            href="/appointments"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition"
          >
            Book Now
          </Link>
        </div>
      </nav>
    </header>
  );
}