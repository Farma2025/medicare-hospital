import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">+</span>
              </div>
              <span className="text-2xl font-bold">MediCare</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Providing quality healthcare services with a team of experienced professionals dedicated to your wellbeing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white transition">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="hover:text-white transition">
                  Appointments
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Pediatrics</li>
              <li>Orthopedics</li>
              <li>Emergency Care</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>123 Medical Center Drive<br />Ankara, Turkiye 10002</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+90 552 781 6077</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>info@medicare.com</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition">
                f
              </a>
              <a href="#" className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center hover:bg-blue-500 transition">
                t
              </a>
              <a href="#" className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center hover:bg-pink-700 transition">
                i
              </a>
              <a href="#" className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center hover:bg-blue-800 transition">
                in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 MediCare Health Center. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}