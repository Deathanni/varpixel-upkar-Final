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
  Target,
  Quote,
  Play,
  Award,
  Layers,
  Rocket
} from "lucide-react";
import { Link } from "react-router-dom";

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
      position: "CEO & Founder",
      content: "Exceptional work on our web platform. The team delivered exactly what we needed on time and within budget. Their attention to detail and technical expertise is outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=150&h=150&fit=crop&crop=faces"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      position: "CTO",
      content: "Our online sales increased by 200% after the website redesign. The user experience is seamless and the performance improvements are remarkable. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces"
    },
    {
      name: "Emily Davis",
      company: "Creative Agency",
      position: "Design Director",
      content: "Professional, creative, and reliable. They transformed our digital presence completely and helped us achieve our business goals faster than expected.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
    },
    {
      name: "David Wilson",
      company: "StartUp Ventures",
      position: "Product Manager",
      content: "The mobile app they developed for us has been a game-changer. Clean code, intuitive design, and excellent performance across all devices.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
    },
    {
      name: "Lisa Rodriguez",
      company: "Digital Solutions",
      position: "Marketing Manager",
      content: "Their digital marketing strategies helped us reach our target audience effectively. ROI improved significantly within the first quarter.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces"
    },
    {
      name: "James Thompson",
      company: "Tech Innovators",
      position: "Lead Developer",
      content: "Outstanding technical skills and project management. They delivered a complex enterprise solution that exceeded all our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-cyan-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  VarPixels
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-cyan-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
                <Link to="/services" className="text-cyan-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</Link>
                <Link to="/portfolio" className="text-cyan-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Portfolio</Link>
                <Link to="/about" className="text-cyan-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
                <Link to="/contact" className="text-cyan-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-200 pulse-badge">
                  🚀 Digital Innovation Partner
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transform Your
                  <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent block">
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
                <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3 button-3d">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 px-8 py-3 button-3d">
                  View Our Work
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center stats-mini">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center stats-mini">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center stats-mini">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="floating-3d">
                <div className="w-full h-96 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-3xl transform rotate-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-3xl transform -rotate-6 shadow-xl flex items-center justify-center hero-card">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-2xl mx-auto flex items-center justify-center icon-3d">
                        <Code className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Web Development</h3>
                      <p className="text-gray-600">Modern & Responsive</p>
                      <div className="flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Feature Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="tech-grid"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-cyan-100">
              We use the latest technologies to bring your vision to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: "3D Experiences", desc: "Immersive user interfaces" },
              { icon: Rocket, title: "Performance", desc: "Lightning-fast loading" },
              { icon: Award, title: "Quality", desc: "Award-winning designs" }
            ].map((item, index) => (
              <div key={index} className="text-center tech-card">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 icon-float">
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-cyan-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-cyan-100 text-cyan-700">Our Services</Badge>
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
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-cyan-100 hover:border-cyan-200 service-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-indigo-600/20"></div>
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
                <div className="text-cyan-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-cyan-100 text-cyan-700">Our Work</Badge>
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
                  <Badge className="bg-cyan-100 text-cyan-700 mb-3">
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

      {/* Enhanced Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-cyan-100 text-cyan-700">Client Stories</Badge>
            <h2 className="text-4xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </div>
          
          {/* Featured Testimonial */}
          <div className="mb-16">
            <Card className="max-w-4xl mx-auto testimonial-featured">
              <CardContent className="p-12 text-center">
                <Quote className="h-12 w-12 text-cyan-500 mx-auto mb-6 opacity-50" />
                <p className="text-2xl text-gray-700 mb-8 font-medium leading-relaxed">
                  "{testimonials[0].content}"
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonials[0].image} 
                    alt={testimonials[0].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-cyan-200"
                  />
                  <div className="text-left">
                    <div className="font-bold text-gray-900 text-lg">{testimonials[0].name}</div>
                    <div className="text-cyan-600 font-medium">{testimonials[0].position}</div>
                    <div className="text-gray-600">{testimonials[0].company}</div>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <Card key={index} className="testimonial-card group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-cyan-200 mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-cyan-600">{testimonial.position}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">"{testimonial.content}"</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Play className="h-3 w-3 mr-1" />
                      <span>Verified Review</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Trusted Client
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Video Testimonials Preview */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto video-testimonial">
              <CardContent className="p-8">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Play className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Video Testimonials</h3>
                      <p className="text-gray-600">Watch our clients share their success stories</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <Badge className="bg-cyan-100 text-cyan-700 mb-4">Get In Touch</Badge>
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
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">hello@varpixels.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-cyan-600" />
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
                      className="border-cyan-200 focus:border-cyan-500"
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
                      className="border-cyan-200 focus:border-cyan-500"
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
                      className="border-cyan-200 focus:border-cyan-500 h-32"
                      placeholder="Tell us about your project"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white">
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
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                VarPixels
              </h3>
              <p className="text-gray-400">
                Transforming digital visions into reality with cutting-edge technology and creative solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/services" className="hover:text-white transition-colors">Web Development</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Mobile Development</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">UI/UX Design</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
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

      <style>{`
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
        
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .shape {
          position: absolute;
          background: linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1));
          border-radius: 50%;
          animation: float-shapes 20s infinite linear;
        }
        
        .shape-1 {
          width: 80px;
          height: 80px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .shape-2 {
          width: 120px;
          height: 120px;
          top: 70%;
          left: 80%;
          animation-delay: -5s;
        }
        
        .shape-3 {
          width: 60px;
          height: 60px;
          top: 40%;
          left: 90%;
          animation-delay: -10s;
        }
        
        .shape-4 {
          width: 100px;
          height: 100px;
          top: 80%;
          left: 5%;
          animation-delay: -15s;
        }
        
        @keyframes float-shapes {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
          100% {
            transform: translateY(0px) rotate(360deg);
          }
        }
        
        .pulse-badge {
          animation: pulse-glow 2s infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(6, 182, 212, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.6);
          }
        }
        
        .button-3d {
          transform: perspective(1000px);
          transition: all 0.3s ease;
        }
        
        .button-3d:hover {
          transform: perspective(1000px) rotateX(5deg) rotateY(5deg) translateY(-2px);
        }
        
        .stats-mini {
          transform: perspective(1000px);
          animation: stats-mini-float 3s ease-in-out infinite;
        }
        
        .stats-mini:nth-child(2) {
          animation-delay: -1s;
        }
        
        .stats-mini:nth-child(3) {
          animation-delay: -2s;
        }
        
        @keyframes stats-mini-float {
          0%, 100% {
            transform: perspective(1000px) translateY(0px);
          }
          50% {
            transform: perspective(1000px) translateY(-5px);
          }
        }
        
        .hero-card {
          transition: all 0.3s ease;
        }
        
        .hero-card:hover {
          transform: scale(1.05);
        }
        
        .icon-3d {
          animation: icon-rotate 4s ease-in-out infinite;
        }
        
        @keyframes icon-rotate {
          0%, 100% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(180deg);
          }
        }
        
        .tech-grid {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }
        
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        .tech-card {
          transform: perspective(1000px);
          transition: all 0.3s ease;
        }
        
        .tech-card:hover {
          transform: perspective(1000px) rotateX(10deg) rotateY(10deg);
        }
        
        .icon-float {
          animation: icon-float 3s ease-in-out infinite;
        }
        
        @keyframes icon-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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
          background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
        }
        
        .testimonial-card:hover {
          transform: perspective(1000px) rotateY(5deg) translateY(-5px);
          box-shadow: 0 20px 40px rgba(6, 182, 212, 0.15);
        }
        
        .testimonial-featured {
          transform: perspective(1000px);
          background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.8));
          backdrop-filter: blur(15px);
          border: 1px solid rgba(6, 182, 212, 0.1);
          box-shadow: 0 25px 50px rgba(6, 182, 212, 0.1);
          transition: all 0.3s ease;
        }
        
        .testimonial-featured:hover {
          transform: perspective(1000px) rotateX(2deg) rotateY(2deg);
          box-shadow: 0 35px 70px rgba(6, 182, 212, 0.2);
        }
        
        .video-testimonial {
          transform: perspective(1000px);
          transition: all 0.3s ease;
          background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7));
          backdrop-filter: blur(10px);
        }
        
        .video-testimonial:hover {
          transform: perspective(1000px) rotateX(5deg) scale(1.02);
          box-shadow: 0 20px 40px rgba(6, 182, 212, 0.15);
        }
        
        .contact-form-3d {
          transform: perspective(1000px);
          box-shadow: 0 20px 40px rgba(6, 182, 212, 0.1);
          transition: all 0.3s ease;
        }
        
        .contact-form-3d:hover {
          transform: perspective(1000px) rotateX(2deg) rotateY(2deg);
          box-shadow: 0 30px 60px rgba(6, 182, 212, 0.15);
        }
      `}</style>
    </div>
  );
};

export default Index;
