import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroBanner from "@/components/HeroBanner";
import Introduction from "@/components/Introduction";
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp,
  Users,
  Award,
  Star,
  CheckCircle,
  Globe,
  Zap,
  Heart
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Bespoke websites built with user-centric design, lightning speed, and modern tech stacks.",
      features: ["Custom Web Development", "E-Commerce Solutions", "CMS Platforms", "Responsive Design"]
    },
    {
      icon: Smartphone,
      title: "App Design & Development", 
      description: "Intuitive, elegant, and scalable mobile apps that solve real problems and delight users.",
      features: ["Native & Cross-Platform Apps", "UI/UX for Mobile", "Maintenance & Support"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Digital strategies that elevate your brand with measurable growth and audience engagement.",
      features: ["Social Media Management", "Paid Ads", "Content Marketing", "Email Campaigns"]
    },
    {
      icon: Palette,
      title: "Branding & SEO",
      description: "Building brand identities that last and optimizing digital presence for visibility.",
      features: ["Logo & Visual Identity", "On-Page & Off-Page SEO", "Google Rankings Boost", "Brand Strategy"]
    }
  ];

  const portfolio = [
    {
      id: "ayodhya-skates",
      title: "The Ayodhya Skates",
      description: "Complete branding, website, and digital marketing for Ayodhya's premier skating academy.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    },
    {
      id: "dubey-misthan",
      title: "Dubey Misthan Bhandar", 
      description: "High-conversion website for one of the region's oldest sweet shops with online ordering.",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=600&fit=crop"
    },
    {
      id: "antardarshnam",
      title: "AntarDarshnam",
      description: "Spiritual wellness platform with minimalist design reflecting peace and mindfulness.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Ravinder Kumar",
      company: "The Ayodhya Skates",
      text: "VAR PIXELS transformed our vision into a digital masterpiece. The team's professionalism, creativity, and technical skill are unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ankit Dubey", 
      company: "Dubey Misthan Bhandar",
      text: "Their digital marketing strategy took our local brand to new heights. Highly recommended for any business looking to grow online.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Hero Banner with 3D Elements */}
      <HeroBanner />

      {/* Introduction Section */}
      <Introduction />

      {/* Services Section with Enhanced 3D Effects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Enhanced 3D Background Elements */}
        <div className="absolute top-10 left-10 w-36 h-36 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-xl animate-pulse floating-bg"></div>
        <div className="absolute bottom-20 right-20 w-52 h-52 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-xl animate-bounce floating-bg" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-purple-200/25 to-pink-200/25 rounded-lg rotate-45 animate-spin floating-bg" style={{animationDuration: '10s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-br from-emerald-200/25 to-teal-200/25 rounded-full animate-pulse floating-bg" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-20 right-10 w-14 h-14 bg-gradient-to-br from-orange-200/25 to-yellow-200/25 rounded-xl rotate-12 animate-bounce floating-bg" style={{animationDelay: '2s', animationDuration: '3s'}}></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 mb-6 floating-badge">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 floating-title">
              Digital Solutions That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto floating-text">
              From web development to digital marketing, we provide comprehensive solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 service-card relative" style={{animationDelay: `${index * 0.2}s`}}>
                {/* Enhanced 3D Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/30 to-blue-100/30 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform translate-x-2 translate-y-2"></div>
                
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg icon-3d">
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
                        <CheckCircle className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                {/* Additional floating particles */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400/20 rounded-full animate-pulse particle" style={{animationDelay: `${index * 0.5}s`}}></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400/20 rounded-full animate-bounce particle" style={{animationDelay: `${index * 0.7}s`, animationDuration: '2s'}}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview with Enhanced 3D */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Enhanced 3D Background Elements */}
        <div className="absolute top-20 left-1/4 w-28 h-28 bg-gradient-to-br from-indigo-200/25 to-purple-200/25 rounded-lg rotate-45 animate-spin floating-bg" style={{animationDuration: '12s'}}></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-gradient-to-br from-purple-200/25 to-pink-200/25 rounded-full animate-pulse floating-bg"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-xl animate-bounce floating-bg" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-1/3 right-20 w-24 h-24 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-lg rotate-12 animate-spin floating-bg" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 mb-6 floating-badge">Our Work</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 floating-title">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto floating-text">
              Every project is a unique story and we're passionate about shaping yours into a digital masterpiece.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1 portfolio-card" style={{animationDelay: `${index * 0.3}s`}}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link to={`/portfolio/${project.id}`}>
                    <Button variant="ghost" className="text-cyan-600 hover:text-blue-600 p-0 floating-link">
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
                
                {/* 3D Card Enhancement */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform translate-x-3 translate-y-3"></div>
                
                {/* Floating elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-cyan-400/30 rounded-full animate-pulse portfolio-particle" style={{animationDelay: `${index * 0.4}s`}}></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-blue-400/30 rounded-lg rotate-45 animate-bounce portfolio-particle" style={{animationDelay: `${index * 0.6}s`, animationDuration: '3s'}}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Client Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 mb-6">Client Feedback</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover shadow-md"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Enhanced 3D Background for Blog Section */}
        <div className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-br from-violet-200/25 to-purple-200/25 rounded-full blur-xl animate-pulse floating-bg"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-200/25 to-rose-200/25 rounded-full blur-xl animate-bounce floating-bg" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-18 h-18 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-lg rotate-45 animate-spin floating-bg" style={{animationDuration: '14s'}}></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 mb-6 floating-badge">Latest Insights</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 floating-title">
              From Our Blog
            </h2>
          </div>
          <Card className="max-w-3xl mx-auto hover:shadow-xl transition-all duration-300 transform hover:scale-105 blog-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                5 Web Design Trends Dominating 2025
              </h3>
              <p className="text-gray-600 mb-6">
                Discover the cutting-edge design trends that are shaping the digital landscape — from AI-driven 
                personalization to ultra-minimalistic interfaces. Learn how your business website can stay 
                ahead of the curve.
              </p>
              <Link to="/blog/1">
                <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white floating-button">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
            
            {/* 3D Blog Card Enhancement */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-lg blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 transform translate-x-4 translate-y-4"></div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 relative overflow-hidden">
        {/* Enhanced 3D CTA Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-20 w-36 h-36 bg-white/10 rounded-full blur-xl animate-pulse floating-bg"></div>
          <div className="absolute bottom-20 right-20 w-44 h-44 bg-white/10 rounded-full blur-xl animate-bounce floating-bg" style={{animationDuration: '5s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/5 rounded-lg rotate-45 animate-spin floating-bg" style={{animationDuration: '15s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/8 rounded-xl animate-pulse floating-bg" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6 floating-title">
            Ready to Transform Your Brand Digitally?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 floating-text">
            Let's discuss your project and bring your ideas to life.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 floating-button transform hover:scale-105 transition-all duration-300">
              Request a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <style>{`
        .service-card {
          transform: perspective(1000px);
          transition: all 0.3s ease;
          animation: serviceFloat 6s ease-in-out infinite;
        }
        
        .service-card:hover {
          transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
        }
        
        .portfolio-card {
          animation: portfolioFloat 5s ease-in-out infinite;
        }
        
        .blog-card {
          animation: blogFloat 7s ease-in-out infinite;
        }
        
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
        
        .floating-link {
          animation: linkFloat 2s ease-in-out infinite;
        }
        
        .icon-3d {
          animation: iconFloat 4s ease-in-out infinite;
        }
        
        .particle {
          animation: particleFloat 3s ease-in-out infinite;
        }
        
        .portfolio-particle {
          animation: portfolioParticleFloat 4s ease-in-out infinite;
        }
        
        @keyframes serviceFloat {
          0%, 100% {
            transform: perspective(1000px) translateY(0px) rotateX(0deg);
          }
          50% {
            transform: perspective(1000px) translateY(-8px) rotateX(2deg);
          }
        }
        
        @keyframes portfolioFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-6px) scale(1.02);
          }
        }
        
        @keyframes blogFloat {
          0%, 100% {
            transform: perspective(1000px) translateY(0px) rotateY(0deg);
          }
          50% {
            transform: perspective(1000px) translateY(-10px) rotateY(1deg);
          }
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
        
        @keyframes linkFloat {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(3px);
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
        
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.2);
          }
        }
        
        @keyframes portfolioParticleFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-6px) rotate(15deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
