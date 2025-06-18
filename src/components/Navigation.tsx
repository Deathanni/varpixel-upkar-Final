
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogIn, UserPlus } from "lucide-react";

interface NavigationProps {
  currentPage?: string;
}

const Navigation = ({ currentPage }: NavigationProps) => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-cyan-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                VAR PIXELS
              </h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/" 
                className={`${currentPage === 'home' ? 'bg-cyan-100 text-cyan-900' : 'text-cyan-700 hover:text-blue-900'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`${currentPage === 'services' ? 'bg-cyan-100 text-cyan-900' : 'text-cyan-700 hover:text-blue-900'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                Services
              </Link>
              <Link 
                to="/portfolio" 
                className={`${currentPage === 'portfolio' ? 'bg-cyan-100 text-cyan-900' : 'text-cyan-700 hover:text-blue-900'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                Portfolio
              </Link>
              <Link 
                to="/blog" 
                className={`${currentPage === 'blog' ? 'bg-cyan-100 text-cyan-900' : 'text-cyan-700 hover:text-blue-900'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className={`${currentPage === 'about' ? 'bg-cyan-100 text-cyan-900' : 'text-cyan-700 hover:text-blue-900'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`${currentPage === 'contact' ? 'bg-cyan-100 text-cyan-900' : 'text-cyan-700 hover:text-blue-900'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex gap-2">
            <Link to="/login">
              <Button variant="outline" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white">
                <UserPlus className="mr-2 h-4 w-4" />
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
