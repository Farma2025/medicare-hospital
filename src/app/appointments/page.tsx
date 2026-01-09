'use client';

import { useState } from 'react';
import { Activity, Phone, MapPin, Clock, Calendar, User, Mail, FileText, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Appointments() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    { id: 'cardiology', name: 'Cardiology', icon: '❤️' },
    { id: 'neurology', name: 'Neurology', icon: '🧠' },
    { id: 'pediatrics', name: 'Pediatrics', icon: '👶' },
    { id: 'orthopedics', name: 'Orthopedics', icon: '🦴' },
    { id: 'emergency', name: 'Emergency Medicine', icon: '🚑' },
    { id: 'surgery', name: 'General Surgery', icon: '⚕️' }
  ];

  const doctors: { [key: string]: string[] } = {
    cardiology: ['Dr. Sarah Johnson', 'Dr. Michael Brown', 'Dr. David Lee'],
    neurology: ['Dr. Michael Chen', 'Dr. Robert Smith', 'Dr. Anna Williams'],
    pediatrics: ['Dr. Emily Davis', 'Dr. Jessica Martinez', 'Dr. Thomas Anderson'],
    orthopedics: ['Dr. James Wilson', 'Dr. Christopher Taylor', 'Dr. Matthew Moore'],
    emergency: ['Dr. Amanda Garcia', 'Dr. Daniel Rodriguez', 'Dr. Laura Thompson'],
    surgery: ['Dr. Lisa Anderson', 'Dr. Kevin White', 'Dr. Michelle Harris']
  };

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const steps = [
    { number: 1, title: 'Department', icon: '🏥' },
    { number: 2, title: 'Doctor', icon: '👨‍⚕️' },
    { number: 3, title: 'Date & Time', icon: '📅' },
    { number: 4, title: 'Details', icon: '✅' }
  ];

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleDepartmentSelect = (dept: string) => {
    setFormData({ ...formData, department: dept, doctor: '' });
    handleNext();
  };

  const handleDoctorSelect = (doctor: string) => {
    setFormData({ ...formData, doctor });
    handleNext();
  };

  const handleDateTimeSelect = () => {
    if (formData.date && formData.time) {
      handleNext();
    }
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setCurrentStep(1);
        setFormData({
          department: '',
          doctor: '',
          date: '',
          time: '',
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 3000);
    }
  };

  const canProceedDateTime = formData.date && formData.time;
  const canSubmit = formData.name && formData.email && formData.phone;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Emergency: +90 552 781 9830</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>123 Medical Center , Ankara, Turkiye</span>
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
              <div>
                <span className="text-2xl font-bold text-gray-800">MediCare</span>
                <p className="text-xs text-gray-500">Health is Wealth</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition">Home</a>
              <a href="/doctors" className="text-gray-600 hover:text-blue-600 transition">Doctors</a>
              <a href="/services" className="text-gray-600 hover:text-blue-600 transition">Services</a>
              <a href="/appointments" className="text-blue-600 font-semibold">Appointment</a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
            </nav>
            <button className="bg-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-600 transition">
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-xl text-blue-100">Schedule your visit with our expert doctors in just a few simple steps</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {submitted ? (
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-12 text-center">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Appointment Confirmed!</h2>
              <p className="text-gray-600 mb-8">
                Thank you for choosing MediCare. We have received your appointment request. 
                Our team will contact you shortly to confirm your appointment.
              </p>
              <a href="/" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Back to Home
              </a>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              {/* Step Indicators */}
              <div className="mb-12">
                <div className="flex items-center justify-between relative">
                  {/* Progress Line */}
                  <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200 -z-10">
                    <div 
                      className="h-full bg-blue-600 transition-all duration-500"
                      style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                    />
                  </div>

                  {steps.map((step) => (
                    <div key={step.number} className="flex flex-col items-center">
                      <div className={`
                        w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all
                        ${currentStep >= step.number 
                          ? 'bg-blue-600 text-white shadow-lg scale-110' 
                          : 'bg-gray-200 text-gray-400'
                        }
                      `}>
                        {step.icon}
                      </div>
                      <p className={`
                        mt-3 text-sm font-semibold
                        ${currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'}
                      `}>
                        {step.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Content */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-[500px]">
                {/* Step 1: Choose Department */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Choose Department</h2>
                    <p className="text-gray-600 mb-8">Select the medical department you need</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {departments.map((dept) => (
                        <button
                          key={dept.id}
                          onClick={() => handleDepartmentSelect(dept.id)}
                          className={`
                            p-6 rounded-xl border-2 text-left transition-all hover:scale-105
                            ${formData.department === dept.id 
                              ? 'border-blue-600 bg-blue-50' 
                              : 'border-gray-200 hover:border-blue-300'
                            }
                          `}
                        >
                          <div className="flex items-center space-x-4">
                            <span className="text-4xl">{dept.icon}</span>
                            <span className="text-lg font-semibold text-gray-800">{dept.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Select Doctor */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Select Doctor</h2>
                    <p className="text-gray-600 mb-8">Choose your preferred doctor from {departments.find(d => d.id === formData.department)?.name}</p>
                    
                    <div className="space-y-4">
                      {doctors[formData.department]?.map((doctor) => (
                        <button
                          key={doctor}
                          onClick={() => handleDoctorSelect(doctor)}
                          className={`
                            w-full p-6 rounded-xl border-2 text-left transition-all hover:scale-102
                            ${formData.doctor === doctor 
                              ? 'border-blue-600 bg-blue-50' 
                              : 'border-gray-200 hover:border-blue-300'
                            }
                          `}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                                <User className="w-7 h-7 text-blue-600" />
                              </div>
                              <div>
                                <p className="text-lg font-semibold text-gray-800">{doctor}</p>
                                <p className="text-sm text-gray-500">{departments.find(d => d.id === formData.department)?.name} Specialist</p>
                              </div>
                            </div>
                            {formData.doctor === doctor && (
                              <CheckCircle className="w-6 h-6 text-blue-600" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-between mt-8">
                      <button
                        onClick={handleBack}
                        className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50"
                      >
                        <ChevronLeft className="w-5 h-5" />
                        Back
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Date & Time */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Select Date & Time</h2>
                    <p className="text-gray-600 mb-8">Choose your preferred appointment date and time</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Date Selection */}
                      <div>
                        <label className="block text-gray-700 font-semibold mb-3">
                          <Calendar className="inline h-5 w-5 mr-2" />
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900"
                        />
                      </div>

                      {/* Time Selection */}
                      <div>
                        <label className="block text-gray-700 font-semibold mb-3">
                          <Clock className="inline h-5 w-5 mr-2" />
                          Preferred Time
                        </label>
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-between mt-8">
                      <button
                        onClick={handleBack}
                        className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50"
                      >
                        <ChevronLeft className="w-5 h-5" />
                        Back
                      </button>
                      <button
                        onClick={handleDateTimeSelect}
                        disabled={!canProceedDateTime}
                        className={`
                          flex items-center gap-2 px-6 py-3 rounded-lg font-semibold
                          ${canProceedDateTime 
                            ? 'bg-blue-600 text-white hover:bg-blue-700' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }
                        `}
                      >
                        Next Step
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Personal Details */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Details</h2>
                    <p className="text-gray-600 mb-8">Please provide your contact information</p>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            <User className="inline h-5 w-5 mr-2" />
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            <Mail className="inline h-5 w-5 mr-2" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          <Phone className="inline h-5 w-5 mr-2" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          <FileText className="inline h-5 w-5 mr-2" />
                          Additional Notes (Optional)
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900"
                          placeholder="Tell us about your symptoms or reasons for visit"
                        />
                      </div>

                      <div className="flex justify-between mt-8">
                        <button
                          onClick={handleBack}
                          className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50"
                        >
                          <ChevronLeft className="w-5 h-5" />
                          Back
                        </button>
                        <button
                          onClick={handleSubmit}
                          disabled={!canSubmit}
                          className={`
                            flex items-center gap-2 px-8 py-3 rounded-lg font-semibold shadow-lg
                            ${canSubmit 
                              ? 'bg-blue-600 text-white hover:bg-blue-700' 
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }
                          `}
                        >
                          Confirm Appointment
                          <CheckCircle className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Activity className="h-6 w-6" />
                </div>
                <span className="text-2xl font-bold">MediCare</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Providing quality healthcare services with compassion and excellence since 1985.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Our Doctors</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Departments</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Contact Us</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Cardiology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Neurology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Pediatrics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Orthopedics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Emergency Care</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">123 Medical Center Drive<br />Ankara, Turkiye 10004</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+90 552 781 9830</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">info@medicare.com</span>
                </li>
              </ul>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3 mt-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2026 MediCare Health Center. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Sitemap</a>
            </div>
          </div>
        </div>

        {/* Floating Call Button */}
        <a 
          href="tel:+905527819830" 
          className="fixed bottom-8 right-8 w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-all hover:scale-110"
        >
          <Phone className="h-6 w-6 text-white" />
        </a>
      </footer>
    </div>
  );
}