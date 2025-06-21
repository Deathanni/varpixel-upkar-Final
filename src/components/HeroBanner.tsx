
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ThreeDAnimations from './ThreeDAnimations';

const HeroBanner = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      {/* 3D Animations */}
      <ThreeDAnimations variant="hero" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Content */}
        <div className="text-center space-y-6">
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
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
            Crafting next-gen digital experiences for you that captivate, convert, and connect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
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
          <div className="grid grid-cols-3 gap-8 pt-8 max-w-md mx-auto">
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
      </div>

      <style>{`
        .stats-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;
