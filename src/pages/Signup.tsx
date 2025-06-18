
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { UserPlus, Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Signup attempted with:', formData);
    // Add signup logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      <Navigation currentPage="signup" />
      
      {/* 3D Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200/30 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-indigo-200/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '12s'}}></div>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-cyan-100 text-cyan-700 mb-6">Join Us Today</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Create Your
              <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                VAR PIXELS Account
              </span>
            </h1>
            <p className="text-gray-600">
              Start your digital transformation journey with us
            </p>
          </div>

          <Card className="signup-card shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
              <CardDescription className="text-center">
                Create your account to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      className="focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                      className="focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a strong password"
                      required
                      className="focus:ring-2 focus:ring-cyan-500 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      required
                      className="focus:ring-2 focus:ring-cyan-500 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="agree-terms"
                    name="agree-terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                  />
                  <Label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
                    I agree to the{' '}
                    <a href="#" className="font-medium text-cyan-600 hover:text-cyan-500">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="font-medium text-cyan-600 hover:text-cyan-500">
                      Privacy Policy
                    </a>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white"
                  size="lg"
                >
                  <UserPlus className="mr-2 h-4 w-4" />
                  Create Account
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Already have an account?</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link to="/login">
                    <Button variant="outline" className="w-full border-cyan-200 text-cyan-700 hover:bg-cyan-50">
                      Sign In Instead
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <style>{`
        .signup-card {
          transform: perspective(1000px);
          transition: all 0.3s ease;
        }
        
        .signup-card:hover {
          transform: perspective(1000px) rotateX(2deg) rotateY(2deg);
        }
      `}</style>
    </div>
  );
};

export default Signup;
