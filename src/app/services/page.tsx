'use client';

import Link from 'next/link';
import { Activity, Phone, MapPin, Clock, Heart, Brain, Baby, Bone, Eye, Stethoscope, Scissors, Siren } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Expert heart care with advanced diagnostics and treatment for all cardiovascular conditions.",
      features: ["ECG & Stress Tests", "Heart Surgery", "Cardiac Rehabilitation", "24/7 Emergency Care"],
      bgColor: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Specialized care for brain and nervous system disorders with cutting-edge technology.",
      features: ["Brain Imaging", "Stroke Treatment", "Epilepsy Care", "Neurological Surgery"],
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Compassionate care for children from infancy to adolescence with specialized treatments.",
      features: ["Newborn Care", "Vaccinations", "Child Development", "Pediatric Surgery"],
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Advanced bone and joint care with comprehensive treatment for musculoskeletal conditions.",
      features: ["Joint Replacement", "Sports Medicine", "Spine Surgery", "Fracture Care"],
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care services with modern diagnostic and surgical capabilities.",
      features: ["Cataract Surgery", "LASIK", "Retina Care", "Glaucoma Treatment"],
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Comprehensive primary healthcare services for prevention, diagnosis, and treatment.",
      features: ["Health Checkups", "Chronic Disease Management", "Preventive Care", "Family Medicine"],
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600"
    },
    {
      icon: Scissors,
      title: "General Surgery",
      description: "Expert surgical care with minimally invasive techniques and advanced procedures.",
      features: ["Laparoscopic Surgery", "Emergency Surgery", "Post-op Care", "Surgical Consultation"],
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      icon: Siren,
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response and critical care capabilities.",
      features: ["Trauma Care", "Critical Care", "Ambulance Service", "Emergency Surgery"],
      bgColor: "bg-red-100",
      iconColor: "text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Emergency: +1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>123 Medical Center Dr, New York, NY</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>24/7 Available</span>
          </div>
        </div>
      </div>

      {/* Header */}
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
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
              <Link href="/doctors" className="text-gray-600 hover:text-blue-600 transition">Doctors</Link>
              <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700 transition">Services</Link>
              <Link href="/appointments" className="text-gray-600 hover:text-blue-600 transition">Appointment</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
            </nav>
            <Link href="/appointments" className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
              Book Now
            </Link>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Medical Services</h1>
          <p className="text-xl text-blue-100">Comprehensive healthcare solutions tailored to your needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
                  <div className={`${service.bgColor} w-20 h-20 rounded-full flex items-center justify-center mb-6 ${service.iconColor}`}>
                    <IconComponent className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/appointments" className="block text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Book Appointment
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide world-class healthcare with a patient-centered approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Specialists</h3>
              <p className="text-gray-600">Highly qualified doctors with years of experience</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art medical equipment and facilities</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock emergency and critical care</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Care</h3>
              <p className="text-gray-600">Customized treatment plans for each patient</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Activity className="h-6 w-6" />
                </div>
                <span className="text-2xl font-bold">MediCare</span>
              </div>
              <p className="text-gray-400">
                Providing quality healthcare services with compassion and excellence since 1999.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                <li><Link href="/doctors" className="text-gray-400 hover:text-white transition">Our Doctors</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-400 hover:text-white transition">Cardiology</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition">Neurology</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition">Pediatrics</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-500 mt-1" />
                  <span className="text-gray-400">123 Medical Center Dr, NY</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 MediCare Health Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}