
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Smartphone, TrendingUp, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-cyan-100 text-cyan-700 mb-6">About VAR PIXELS</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Your One-Stop Digital
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Powerhouse Agency
            </span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to VAR PIXELS, where creativity fuels technology. From stunning websites and sleek mobile apps to results-driven digital marketing campaigns, we design and deliver experiences that not only look exceptional but also perform flawlessly.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're a startup chasing visibility or an established brand seeking digital transformation, we design solutions tailored to your goals.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3 group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 px-8 py-3">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>

        {/* Service Preview Cards with 3D Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Globe, title: "Web Development", color: "from-cyan-500 to-blue-500" },
            { icon: Smartphone, title: "App Development", color: "from-blue-500 to-indigo-500" },
            { icon: TrendingUp, title: "Digital Marketing", color: "from-indigo-500 to-purple-500" },
            { icon: Palette, title: "Branding & SEO", color: "from-purple-500 to-pink-500" }
          ].map((service, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1 border border-gray-100">
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-md`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <div className="h-1 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* 3D shadow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/30 to-blue-100/30 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform translate-x-2 translate-y-2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
