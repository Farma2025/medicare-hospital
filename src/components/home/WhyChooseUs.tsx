export default function WhyChooseUs() {
  const features = [
    {
      icon: '🕐',
      title: '24/7 Service',
      description: 'Round-the-clock medical care available'
    },
    {
      icon: '👨‍⚕️',
      title: 'Certified Doctors',
      description: 'Highly qualified and experienced physicians'
    },
    {
      icon: '🏥',
      title: 'Modern Equipment',
      description: 'State-of-the-art medical technology'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Excellence in healthcare with patient-centered approach
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}