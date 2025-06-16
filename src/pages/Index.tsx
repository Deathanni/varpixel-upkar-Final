
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Palette, 
  Zap, 
  Shield,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  Users,
  Trophy,
  Target
} from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["React & Next.js", "Node.js Backend", "Database Integration", "API Development"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "iOS Development", "Android Development"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly designs that convert visitors into customers",
      features: ["Wireframing", "Prototyping", "User Research", "Visual Design"]
    },
    {
      icon: Code,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration and inventory management",
      features: ["Shopify", "WooCommerce", "Custom Solutions", "Payment Gateway"]
    },
    {
      icon: Zap,
      title: "Digital Marketing",
      description: "SEO, social media marketing, and online advertising strategies",
      features: ["SEO Optimization", "Social Media", "PPC Campaigns", "Content Marketing"]
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and security monitoring for your digital assets",
      features: ["24/7 Support", "Security Updates", "Performance Monitoring", "Backup Services"]
    }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with advanced features",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development"
    },
    {
      title: "Mobile Banking App",
      description: "Secure and user-friendly mobile banking application",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      tech: ["React Native", "Firebase", "Redux", "Biometric Auth"],
      category: "Mobile Development"
    },
    {
      title: "Healthcare Dashboard",
      description: "Analytics dashboard for healthcare professionals",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      tech: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      category: "Web Development"
    },
    {
      title: "Food Delivery App",
      description: "Complete food delivery solution with real-time tracking",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&h=300&fit=crop",
      tech: ["Flutter", "Firebase", "Google Maps", "Payment Integration"],
      category: "Mobile Development"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content: "Exceptional work on our web platform. The team delivered exactly what we needed on time and within budget.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      content: "Our online sales increased by 200% after the website redesign. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Davis",
      company: "Creative Agency",
      content: "Professional, creative, and reliable. They transformed our digital presence completely.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  VarPixels
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-blue-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#services" className="text-blue-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#portfolio" className="text-blue-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Portfolio</a>
                <a href="#about" className="text-blue-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-blue-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  🚀 Digital Innovation Partner
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transform Your
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                    Digital Vision
                  </span>
                  Into Reality
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We create stunning websites, mobile apps, and digital experiences that drive results. 
                  From concept to launch, we're your trusted technology partner.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-3">
                  View Our Work
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="floating-3d">
                <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl transform rotate-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-3xl transform -rotate-6 shadow-xl flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl mx-auto flex items-center justify-center">
                        <Code className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Web Development</h3>
                      <p className="text-gray-600">Modern & Responsive</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From web development to digital marketing, we offer a complete suite of services 
              to help your business thrive in the digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-blue-100 hover:border-blue-200 service-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "50+", label: "Happy Clients" },
              { icon: Trophy, number: "100+", label: "Projects Done" },
              { icon: Target, number: "98%", label: "Success Rate" },
              { icon: Star, number: "5.0", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center stats-3d">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700">Our Work</Badge>
            <h2 className="text-4xl font-bold text-gray-900">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent projects that showcase our expertise 
              and commitment to delivering exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 project-card">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-blue-100 text-blue-700 mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700">Testimonials</Badge>
            <h2 className="text-4xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <Badge className="bg-blue-100 text-blue-700 mb-4">Get In Touch</Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-xl text-gray-600">
                  Ready to start your next project? Contact us today and let's discuss 
                  how we can help bring your digital vision to life.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">hello@varpixels.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Office</div>
                    <div className="text-gray-600">123 Tech Street, Digital City</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="contact-form-3d">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="border-blue-200 focus:border-blue-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="border-blue-200 focus:border-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-blue-200 focus:border-blue-500 h-32"
                      placeholder="Tell us about your project"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                VarPixels
              </h3>
              <p className="text-gray-400">
                Transforming digital visions into reality with cutting-edge technology and creative solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VarPixels. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .floating-3d {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .service-card {
          transform: perspective(1000px);
          transition: all 0.3s ease;
        }
        
        .service-card:hover {
          transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
        }
        
        .stats-3d {
          transform: perspective(1000px);
          animation: stats-float 4s ease-in-out infinite;
        }
        
        .stats-3d:nth-child(2) {
          animation-delay: -1s;
        }
        
        .stats-3d:nth-child(3) {
          animation-delay: -2s;
        }
        
        .stats-3d:nth-child(4) {
          animation-delay: -3s;
        }
        
        @keyframes stats-float {
          0%, 100% {
            transform: perspective(1000px) translateY(0px) rotateX(0deg);
          }
          50% {
            transform: perspective(1000px) translateY(-10px) rotateX(5deg);
          }
        }
        
        .project-card {
          transition: all 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
        }
        
        .testimonial-card {
          transform: perspective(1000px);
          transition: all 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: perspective(1000px) rotateY(5deg);
        }
        
        .contact-form-3d {
          transform: perspective(1000px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1);
          transition: all 0.3s ease;
        }
        
        .contact-form-3d:hover {
          transform: perspective(1000px) rotateX(2deg) rotateY(2deg);
          box-shadow: 0 30px 60px rgba(59, 130, 246, 0.15);
        }
      `}</style>
    </div>
  );
};

export default Index;
