"use client"

import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function DoctorsPage() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Ahmed Hassan",
      specialty: "Cardiology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=entropy",
      details: [
        "Advanced Heart Care",
        "15+ Years of Experience",
        "Specialized in Cardiac Surgery"
      ]
    },
    {
      id: 2,
      name: "Dr. Fatima Mohamed",
      specialty: "Neurology",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=entropy",
      details: [
        "Brain & Nervous System",
        "12+ Years of Experience",
        "Neurological Disorders Specialist"
      ]
    },
    {
      id: 3,
      name: "Dr. Omar Ali",
      specialty: "Pediatrics",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&crop=entropy",
      details: [
        "Children's Healthcare",
        "10+ Years of Experience",
        "Child Development Expert"
      ]
    },
    {
      id: 4,
      name: "Dr. Abdi Ibrahim",
      specialty: "Orthopedics",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop&crop=faces",
      details: [
        "Bone & Joint Specialist",
        "18+ Years of Experience",
        "Sports Medicine Expert"
      ]
    },
    {
      id: 5,
      name: "Dr. Amina Yusuf",
      specialty: "Emergency Medicine",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=faces",
      details: [
        "Emergency Care",
        "14+ Years of Experience",
        "Critical Care Specialist"
      ]
    },
    {
      id: 6,
      name: "Dr. Mahad Abdulle",
      specialty: "General Surgery",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop&crop=entropy",
      details: [
        "Minimally Invasive Surgery",
        "20+ Years of Experience",
        "Surgical Procedures Expert"
      ]
    }
  ];

  const handleBookAppointment = (doctorName: string, specialty: string) => {
    window.location.href = `/appointments?doctor=${encodeURIComponent(doctorName)}&specialty=${encodeURIComponent(specialty)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-blue-700 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Emergency: +1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>123 Medical Center Dr, New York, NY</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>24/7 Available</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              M
            </div>
            <span className="font-bold text-xl text-gray-900">MediCare</span>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="/doctors" className="text-blue-600 font-semibold">Doctors</a>
            <a href="/services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="/appointments" className="text-gray-600 hover:text-blue-600">Appointment</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            <button 
              onClick={() => window.location.href = '/appointments'}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium"
            >
              Book Now
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Doctors</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Meet our team of experienced and certified medical professionals
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b py-6 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{doctors.length}</span> doctors
          </p>
          <select className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option>All Departments</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Pediatrics</option>
            <option>Orthopedics</option>
            <option>Emergency Medicine</option>
            <option>General Surgery</option>
          </select>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-4">
                {/* Doctor Image */}
                <div className="relative h-64 mb-4 overflow-hidden rounded-2xl bg-gray-100">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Doctor Info */}
                <div className="px-2 pb-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{doctor.specialty}</p>
                  
                  {/* Details List */}
                  <ul className="space-y-2 mb-6">
                    {doctor.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Book Button */}
                  <button 
                    onClick={() => handleBookAppointment(doctor.name, doctor.specialty)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors cursor-pointer"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="font-bold text-xl">MediCare</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing quality healthcare services with a team of experienced professionals dedicated to your wellbeing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
              <li><a href="/doctors" className="text-gray-400 hover:text-white text-sm">Our Doctors</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white text-sm">Services</a></li>
              <li><a href="/appointments" className="text-gray-400 hover:text-white text-sm">Appointments</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-white text-sm">Cardiology</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white text-sm">Neurology</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white text-sm">Pediatrics</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white text-sm">Orthopedics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Medical Center Drive<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span>24/7 Emergency Care</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2026 MediCare Health Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}