"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Phone, MapPin, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load Leaflet CSS and JS
    const loadLeaflet = async () => {
      if (typeof window === 'undefined') return;

      // Check if already loaded
      if ((window as any).L) {
        initMap();
        return;
      }

      // Load CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);

      // Load JS
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => initMap();
      document.head.appendChild(script);
    };

    const initMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      const L = (window as any).L;
      
      // Hospital coordinates (New York - example coordinates)
      const hospitalCoords: [number, number] = [40.7580, -73.9855];

      // Initialize map
      const map = L.map(mapRef.current).setView(hospitalCoords, 15);

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      // Custom marker icon
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            background: #dc2626;
            width: 40px;
            height: 40px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <svg style="
              width: 20px;
              height: 20px;
              transform: rotate(45deg);
              fill: white;
            " viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      // Add marker
      const marker = L.marker(hospitalCoords, { icon: customIcon }).addTo(map);

      // Add popup
      marker.bindPopup(`
        <div style="text-align: center; padding: 10px;">
          <strong style="font-size: 16px; color: #1f2937;">MediCare Health Center</strong><br/>
          <span style="font-size: 14px; color: #6b7280;">123 Medical Center Drive<br/>New York, NY 10001</span><br/>
          <a href="https://www.google.com/maps/dir/?api=1&destination=40.7580,-73.9855" 
             target="_blank" 
             style="
               display: inline-block;
               margin-top: 10px;
               padding: 8px 16px;
               background: #2563eb;
               color: white;
               text-decoration: none;
               border-radius: 6px;
               font-size: 14px;
               font-weight: 600;
             ">
            Get Directions
          </a>
        </div>
      `).openPopup();

      mapInstanceRef.current = map;

      // Fix map display issues
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    };

    loadLeaflet();

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-blue-700 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Emergency: +90 552 781 9830</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>123 Medical Care, Ankara, Turkiye</span>
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
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <span className="font-bold text-xl text-gray-900">MediCare</span>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="/doctors" className="text-gray-600 hover:text-blue-600">Doctors</a>
            <a href="/services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="/appointments" className="text-gray-600 hover:text-blue-600">Appointment</a>
            <a href="/contact" className="text-blue-600 font-semibold">Contact</a>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium">
              Book Now
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Get in touch with us for any questions, appointments, or emergencies
          </p>
        </div>
      </section>

      {/* Emergency Contact Bar */}
      <div className="bg-red-500 text-white py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <Phone className="w-5 h-5" />
          <div>
            <p className="text-sm font-semibold">24/7 Emergency Contact</p>
            <p className="text-lg font-bold">+90 552 781 9830</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Address */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600 text-sm">123 Medical Center Drive</p>
                      <p className="text-gray-600 text-sm">Ankara, Turkiye 10001</p>
                      <p className="text-gray-600 text-sm">Turkiye</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600 text-sm">Main: +90 552 781 6077</p>
                      <p className="text-gray-600 text-sm">Emergency: +90 552 781 9830</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600 text-sm">info@medicare.com</p>
                      <p className="text-gray-600 text-sm">appointments@medicare.com</p>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                      <p className="text-gray-600 text-sm">Mon - Fri: 8:00 AM - 8:00 PM</p>
                      <p className="text-gray-600 text-sm">Sat - Sun: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600 text-sm">Emergency: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder-gray-400"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+90 (555) 000-0000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder-gray-400"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none text-gray-900 placeholder-gray-400"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Us Here</h2>
            <p className="text-gray-600">Visit our hospital location on the map below</p>
          </div>
          <div 
            ref={mapRef}
            className="rounded-lg overflow-hidden shadow-lg border border-gray-200" 
            style={{ height: '500px', width: '100%' }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <span className="font-bold text-xl">MediCare</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Providing quality healthcare services with compassion and excellence since 1995.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Our Doctors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Departments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Cardiology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Neurology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Pediatrics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Orthopedics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Emergency Care</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Medical Center Drive<br />Ankara, Turkiye 10003</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+90 552 781 6077</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>MediCare@gmail.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2026 MediCare Health Center. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <a
        href="tel:+905527819830"
        className="fixed bottom-8 right-8 w-14 h-14 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}