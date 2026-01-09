import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Award, Users, Activity, Stethoscope, Baby, Brain, Phone as PhoneIcon, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Emergency: +90 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>123 Medical Center, Ankara, Turkiye</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>24/7 Available</span>
          </div>
        </div>
      </div>

      {/* Header/Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Activity className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-gray-800">MediCare</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-600 font-semibold hover:text-blue-700 transition">Home</Link>
              <Link href="/doctors" className="text-gray-600 hover:text-blue-600 transition">Doctors</Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-600 transition">Services</Link>
              <Link href="/appointments" className="text-gray-600 hover:text-blue-600 transition">Appointment</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
            </nav>
            <Link href="/appointments" className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
              Book Now
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-500 bg-opacity-50 px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold">✓ Trusted Healthcare Provider</span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Your Health, Our Priority
              </h1>
              <p className="text-lg mb-8 text-blue-100">
                Providing compassionate, quality healthcare services with a team of experienced professionals dedicated to your wellbeing.
              </p>
              <div className="flex space-x-4">
                <Link href="/appointments" className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
                  Book Appointment
                </Link>
                <Link href="/services" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Our Services
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <h3 className="text-4xl font-bold">50+</h3>
                  <p className="text-blue-200">Doctors</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold">5000+</h3>
                  <p className="text-blue-200">Patients</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold">25+</h3>
                  <p className="text-blue-200">Years</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-2">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop" 
                  alt="Hospital Corridor" 
                  className="rounded-xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive medical services tailored to your healthcare needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Cardiology</h3>
              <p className="text-gray-600 mb-4">Expert heart care with advanced diagnostics and treatment</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Neurology</h3>
              <p className="text-gray-600 mb-4">Specialized care for brain and nervous system disorders</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Pediatrics</h3>
              <p className="text-gray-600 mb-4">Compassionate care for children from infancy to adolescence</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Emergency</h3>
              <p className="text-gray-600 mb-4">24/7 emergency services with rapid response team</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet our Doctors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our experienced team of healthcare professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Doctor 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-8 flex justify-center items-end h-80">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop" 
                  alt="Dr. Sarah Johnson" 
                  className="w-48 h-64 object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Sarah Johnson</h3>
                <p className="text-blue-600 font-semibold mb-1">Cardiologist</p>
                <p className="text-gray-600 text-sm mb-4">15 years of experience</p>
                <Link href="/appointments" className="block bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Book Appointment
                </Link>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 flex justify-center items-end h-80">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=400&fit=crop" 
                  alt="Dr. Michael Chen" 
                  className="w-48 h-64 object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Michael Chen</h3>
                <p className="text-blue-600 font-semibold mb-1">Neurologist</p>
                <p className="text-gray-600 text-sm mb-4">20 years of experience</p>
                <Link href="/appointments" className="block bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Book Appointment
                </Link>
              </div>
            </div>

            {/* Doctor 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-8 flex justify-center items-end h-80">
                <img 
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=400&fit=crop" 
                  alt="Dr. Emily Davis" 
                  className="w-48 h-64 object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Emily Davis</h3>
                <p className="text-blue-600 font-semibold mb-1">Pediatrician</p>
                <p className="text-gray-600 text-sm mb-4">12 years of experience</p>
                <Link href="/appointments" className="block bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/doctors" className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
              View All Doctors
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Excellence in healthcare with patient-centered approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">24/7 Service</h3>
              <p className="text-gray-600">Round-the-clock medical care available</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Certified Doctors</h3>
              <p className="text-gray-600">Highly qualified and experienced physicians</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Modern Equipment</h3>
              <p className="text-gray-600">State-of-the-art medical technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Activity className="h-6 w-6" />
                </div>
                <span className="text-2xl font-bold">MediCare</span>
              </div>
              <p className="text-gray-400 mb-4">
                Providing quality healthcare services with compassion and excellence since 1999.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                <li><Link href="/doctors" className="text-gray-400 hover:text-white transition">Our Doctors</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
                <li><Link href="/appointments" className="text-gray-400 hover:text-white transition">Appointments</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-400 hover:text-white transition">Cardiology</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition">Neurology</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition">Pediatrics</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition">Orthopedics</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition">Emergency Care</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-500 mt-1" />
                  <span className="text-gray-400">123 Medical Center Drive<br />New York, NY 10001</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-400">info@medicare.com</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MediCare Health Center. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}