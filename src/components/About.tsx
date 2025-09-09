import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: "8+", label: "Years of Excellence" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Clock, number: "1000+", label: "Events Completed" },
    { icon: Heart, number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Velvet Panther</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Established as a premier event management company, Velvet Panther Event Management Pvt Ltd (R) 
              has been creating extraordinary experiences for over 8 years. We specialize in transforming 
              your vision into reality with meticulous attention to detail and flawless execution.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our team of experienced professionals brings creativity, innovation, and passion to every 
              project. From intimate gatherings to grand celebrations, we handle every aspect of event 
              planning with precision and care.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Our team at work" 
                className="w-full h-80 object-cover rounded-2xl mb-6"
              />
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To create unforgettable experiences that exceed expectations and bring joy to every celebration. 
                  We believe every event tells a story, and we're here to make yours extraordinary.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;