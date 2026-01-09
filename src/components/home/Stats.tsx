export default function Stats() {
  const stats = [
    {
      number: '50+',
      label: 'Doctors',
      color: 'text-blue-600'
    },
    {
      number: '5000+',
      label: 'Patients',
      color: 'text-green-600'
    },
    {
      number: '25+',
      label: 'Years',
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="bg-blue-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <h3 className="text-5xl font-bold mb-2">{stat.number}</h3>
              <p className="text-xl text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}