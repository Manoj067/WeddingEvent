import React from 'react';    
import { ArrowRight, Star, Users, Calendar } from 'lucide-react';
import '../styles/animations.css'


const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm">Trusted by 500+ clients</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Creating
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400"> Unforgettable </span>
              Experiences
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              From intimate gatherings to grand celebrations, we transform your vision into reality with meticulous planning and flawless execution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-full font-semibold transition-all duration-300">
                View Our Work
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-gray-300">Events Managed</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-sm text-gray-300">Client Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
              <img 
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Elegant event setup" 
                className="w-full h-80 object-cover rounded-2xl mb-6"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Premium Event Planning</h3>
                <p className="text-gray-200">Luxury weddings, corporate events, and social celebrations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;