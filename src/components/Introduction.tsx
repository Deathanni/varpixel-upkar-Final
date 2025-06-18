
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Smartphone, TrendingUp, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse floating-bg"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-xl animate-bounce floating-bg" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-pink-200/15 to-red-200/15 rounded-lg rotate-45 animate-spin floating-bg" style={{animationDuration: '10s'}}></div>
      <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-yellow-200/15 to-orange-200/15 rounded-full animate-pulse floating-bg" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-cyan-100 text-cyan-700 mb-6 floating-badge">About VAR PIXELS</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Your One-Stop Digital
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent floating-title">
              Powerhouse Agency
            </span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed floating-text">
              Welcome to VAR PIXELS, where creativity fuels technology. From stunning websites and sleek mobile apps to results-driven digital marketing campaigns, we design and deliver experiences that not only look exceptional but also perform flawlessly.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed floating-text" style={{animationDelay: '0.5s'}}>
              Whether you're a startup chasing visibility or an established brand seeking digital transformation, we design solutions tailored to your goals.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3 group floating-button transform hover:scale-105 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 px-8 py-3 floating-button transform hover:scale-105 transition-all duration-300" style={{animationDelay: '0.3s'}}>
                View Our Work
              </Button>
            </Link>
          </div>
        </div>

        {/* Service Preview Cards with Enhanced 3D Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Globe, title: "Web Development", color: "from-cyan-500 to-blue-500" },
            { icon: Smartphone, title: "App Development", color: "from-blue-500 to-indigo-500" },
            { icon: TrendingUp, title: "Digital Marketing", color: "from-indigo-500 to-purple-500" },
            { icon: Palette, title: "Branding & SEO", color: "from-purple-500 to-pink-500" }
          ].map((service, index) => (
            <div key={index} className="group relative service-card-3d" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1 border border-gray-100 service-card">
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-md icon-3d`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <div className="h-1 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 progress-line"></div>
              </div>
              {/* Enhanced 3D shadow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/30 to-blue-100/30 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform translate-x-2 translate-y-2 shadow-3d"></div>
              
              {/* Additional floating particles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400/20 rounded-full animate-pulse particle" style={{animationDelay: `${index * 0.5}s`}}></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400/20 rounded-full animate-bounce particle" style={{animationDelay: `${index * 0.7}s`, animationDuration: '2s'}}></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .floating-bg {
          animation: floatBackground 8s ease-in-out infinite;
        }
        
        .floating-badge {
          animation: floatBadge 3s ease-in-out infinite;
        }
        
        .floating-title {
          animation: floatTitle 4s ease-in-out infinite;
        }
        
        .floating-text {
          animation: floatText 5s ease-in-out infinite;
        }
        
        .floating-button {
          animation: floatButton 3s ease-in-out infinite;
        }
        
        .service-card-3d {
          animation: serviceFloat 6s ease-in-out infinite;
        }
        
        .service-card {
          transform: perspective(1000px);
          transition: all 0.4s ease;
        }
        
        .service-card:hover {
          transform: perspective(1000px) rotateX(10deg) rotateY(10deg) translateY(-10px);
        }
        
        .icon-3d {
          animation: iconFloat 4s ease-in-out infinite;
        }
        
        .progress-line {
          animation: progressPulse 2s ease-in-out infinite;
        }
        
        .shadow-3d {
          animation: shadowFloat 4s ease-in-out infinite;
        }
        
        .particle {
          animation: particleFloat 3s ease-in-out infinite;
        }
        
        @keyframes floatBackground {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        
        @keyframes floatBadge {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes floatTitle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes floatText {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        
        @keyframes floatButton {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes serviceFloat {
          0%, 100% {
            transform: translateY(0px) perspective(1000px) rotateX(0deg);
          }
          50% {
            transform: translateY(-10px) perspective(1000px) rotateX(5deg);
          }
        }
        
        @keyframes iconFloat {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(5deg);
          }
        }
        
        @keyframes progressPulse {
          0%, 100% {
            opacity: 0.5;
            transform: scaleX(1);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.05);
          }
        }
        
        @keyframes shadowFloat {
          0%, 100% {
            transform: translate(2px, 2px) scale(1);
          }
          50% {
            transform: translate(4px, 4px) scale(1.02);
          }
        }
        
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.2);
          }
        }
      `}</style>
    </section>
  );
};

export default Introduction;
