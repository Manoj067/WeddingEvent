import React from 'react';
import { Heart, Building2, Users, Gift, Camera, Music } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "Complete wedding planning from engagement to reception, creating your perfect day with attention to every detail.",
      features: ["Venue Selection", "Vendor Coordination", "Timeline Management", "Day-of Coordination"]
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Professional corporate event management including conferences, product launches, and team building activities.",
      features: ["Conference Planning", "Product Launches", "Team Building", "Award Ceremonies"]
    },
    {
      icon: Users,
      title: "Social Celebrations",
      description: "Birthday parties, anniversaries, graduations, and other milestone celebrations made memorable.",
      features: ["Birthday Parties", "Anniversaries", "Graduations", "Family Reunions"]
    },
    {
      icon: Gift,
      title: "Special Occasions",
      description: "Custom event planning for unique celebrations, festivals, and cultural events with personalized touches.",
      features: ["Cultural Events", "Festivals", "Religious Ceremonies", "Custom Celebrations"]
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional photography and videography services to capture every precious moment of your event.",
      features: ["Event Photography", "Videography", "Live Streaming", "Photo Booths"]
    },
    {
      icon: Music,
      title: "Entertainment Services",
      description: "Complete entertainment solutions including DJs, live bands, performers, and audio-visual equipment.",
      features: ["DJ Services", "Live Bands", "Performers", "AV Equipment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive event management services to make your special occasions truly unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-purple-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;