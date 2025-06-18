
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      {/* Enhanced 3D Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200/30 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-indigo-200/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '12s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-purple-200/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <Badge className="bg-cyan-100 text-cyan-700 mb-4 inline-flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
            Digital Innovation Partner
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Turn Your Dream
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Online Business
            </span>
            into Pixel-Perfect Reality
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Crafting next-gen digital experiences for you that captivate, convert, and connect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3 group">
                <ArrowRight className="mr-2 h-4 w-4" />
                Get Started
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 px-8 py-3 group">
                <Eye className="mr-2 h-4 w-4" />
                View Our Work
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center stats-float">
              <div className="text-2xl font-bold text-cyan-600">50+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center stats-float" style={{animationDelay: '0.5s'}}>
              <div className="text-2xl font-bold text-cyan-600">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center stats-float" style={{animationDelay: '1s'}}>
              <div className="text-2xl font-bold text-cyan-600">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
        
        {/* Right Content - Enhanced 3D Card */}
        <div className="relative">
          <div className="relative group">
            {/* 3D Card Container with enhanced effects */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 hover:-rotate-2 transition-all duration-500 hover:shadow-3xl floating-card">
              
              {/* Enhanced floating geometric shapes */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl rotate-12 opacity-80 animate-bounce shadow-xl floating-shape"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-60 animate-pulse shadow-lg floating-shape" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/3 -right-8 w-8 h-8 bg-gradient-to-br from-pink-400 to-red-400 rounded-lg rotate-45 opacity-50 animate-spin shadow-md floating-shape" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
              
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500 shadow-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-sm"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500 shadow-sm"></div>
                  <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-1000 shadow-sm"></div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Web Development</h3>
                <p className="text-gray-600">Modern & Responsive</p>
                
                {/* Enhanced progress bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Design</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full w-[95%] animate-pulse shadow-sm progress-bar"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Development</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full w-[90%] animate-pulse delay-500 shadow-sm progress-bar"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Optimization</span>
                      <span>88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full w-[88%] animate-pulse delay-1000 shadow-sm progress-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced gradient overlay for 3D effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-50/20 rounded-3xl pointer-events-none"></div>
            </div>
            
            {/* Enhanced background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-3xl blur-xl opacity-30 -z-10 transform group-hover:scale-110 transition-transform duration-500"></div>
          </div>
          
          {/* Enhanced floating elements around the card */}
          <div className="absolute top-20 -left-8 w-8 h-8 bg-cyan-400 rounded-lg rotate-45 opacity-60 animate-spin shadow-lg floating-element" style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-16 -right-4 w-6 h-6 bg-blue-500 rounded-full opacity-70 animate-bounce delay-1000 shadow-md floating-element"></div>
          <div className="absolute top-8 right-16 w-4 h-4 bg-indigo-500 rounded-sm rotate-12 opacity-50 animate-pulse shadow-sm floating-element" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-32 left-2 w-5 h-5 bg-purple-400 rounded-full opacity-40 animate-bounce delay-2000 shadow-sm floating-element"></div>
        </div>
      </div>

      <style>{`
        .stats-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .floating-card {
          animation: cardFloat 6s ease-in-out infinite;
        }
        
        .floating-shape {
          animation: shapeFloat 4s ease-in-out infinite;
        }
        
        .floating-element {
          animation: elementFloat 5s ease-in-out infinite;
        }
        
        .progress-bar {
          animation: progressGlow 2s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes cardFloat {
          0%, 100% {
            transform: translateY(0px) perspective(1000px) rotateX(0deg);
          }
          50% {
            transform: translateY(-10px) perspective(1000px) rotateX(2deg);
          }
        }
        
        @keyframes shapeFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(5deg);
          }
        }
        
        @keyframes elementFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        
        @keyframes progressGlow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(6, 182, 212, 0.3);
          }
          50% {
            box-shadow: 0 0 15px rgba(6, 182, 212, 0.6);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;
