
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      {/* Enhanced 3D Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200/30 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-indigo-200/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '12s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-purple-200/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* 3D Rotating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rotating Cube 1 */}
        <div className="absolute top-20 left-1/4 cube-container">
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>

        {/* Rotating Cube 2 */}
        <div className="absolute bottom-32 right-1/3 cube-container-small">
          <div className="cube-small">
            <div className="face-small front-small"></div>
            <div className="face-small back-small"></div>
            <div className="face-small right-small"></div>
            <div className="face-small left-small"></div>
            <div className="face-small top-small"></div>
            <div className="face-small bottom-small"></div>
          </div>
        </div>

        {/* Floating Circles */}
        <div className="absolute top-1/2 left-16 w-20 h-20 border-4 border-cyan-300/40 rounded-full animate-spin-slow"></div>
        <div className="absolute top-32 right-16 w-12 h-12 border-2 border-blue-400/50 rounded-full animate-bounce-slow"></div>
        
        {/* Geometric Wireframes */}
        <div className="absolute bottom-40 left-20 wireframe-triangle"></div>
        <div className="absolute top-40 right-40 wireframe-hexagon"></div>
        
        {/* Floating Tech Elements */}
        <div className="absolute top-28 left-1/2 tech-element-1"></div>
        <div className="absolute bottom-28 right-1/2 tech-element-2"></div>
      </div>
      
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

        /* 3D Cube Animations */
        .cube-container {
          width: 60px;
          height: 60px;
          perspective: 300px;
          animation: float-rotate 8s ease-in-out infinite;
        }

        .cube-container-small {
          width: 40px;
          height: 40px;
          perspective: 200px;
          animation: float-rotate 6s ease-in-out infinite reverse;
        }

        .cube, .cube-small {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: rotate-3d 10s linear infinite;
        }

        .face, .face-small {
          position: absolute;
          border: 2px solid rgba(6, 182, 212, 0.3);
          background: rgba(165, 243, 252, 0.1);
          backdrop-filter: blur(4px);
        }

        .face {
          width: 60px;
          height: 60px;
        }

        .face-small {
          width: 40px;
          height: 40px;
        }

        .front { transform: rotateY(0deg) translateZ(30px); }
        .back { transform: rotateY(180deg) translateZ(30px); }
        .right { transform: rotateY(90deg) translateZ(30px); }
        .left { transform: rotateY(-90deg) translateZ(30px); }
        .top { transform: rotateX(90deg) translateZ(30px); }
        .bottom { transform: rotateX(-90deg) translateZ(30px); }

        .front-small { transform: rotateY(0deg) translateZ(20px); }
        .back-small { transform: rotateY(180deg) translateZ(20px); }
        .right-small { transform: rotateY(90deg) translateZ(20px); }
        .left-small { transform: rotateY(-90deg) translateZ(20px); }
        .top-small { transform: rotateX(90deg) translateZ(20px); }
        .bottom-small { transform: rotateX(-90deg) translateZ(20px); }

        @keyframes rotate-3d {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          33% { transform: rotateX(120deg) rotateY(120deg) rotateZ(0deg); }
          66% { transform: rotateX(240deg) rotateY(240deg) rotateZ(120deg); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(240deg); }
        }

        @keyframes float-rotate {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          25% { transform: translateY(-10px) rotateZ(5deg); }
          50% { transform: translateY(-5px) rotateZ(0deg); }
          75% { transform: translateY(-15px) rotateZ(-5deg); }
        }

        /* Custom Animation Speeds */
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce 4s ease-in-out infinite;
        }

        /* Wireframe Shapes */
        .wireframe-triangle {
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 35px solid rgba(59, 130, 246, 0.3);
          animation: float-rotate 7s ease-in-out infinite;
        }

        .wireframe-hexagon {
          width: 30px;
          height: 30px;
          border: 2px solid rgba(99, 102, 241, 0.4);
          transform: rotate(45deg);
          animation: rotate-3d 12s linear infinite reverse;
        }

        /* Tech Elements */
        .tech-element-1 {
          width: 24px;
          height: 24px;
          background: linear-gradient(45deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2));
          border-radius: 4px;
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .tech-element-2 {
          width: 16px;
          height: 16px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3));
          border-radius: 50%;
          animation: pulse-glow 2s ease-in-out infinite reverse;
        }

        @keyframes pulse-glow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;
