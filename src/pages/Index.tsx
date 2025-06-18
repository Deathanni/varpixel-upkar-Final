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
      title: "The Ayodhya Skates",
      description: "Complete branding, website, and digital marketing for Ayodhya's premier skating academy.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    },
    {
      title: "Dubey Misthan Bhandar", 
      description: "High-conversion website for one of the region's oldest sweet shops with online ordering.",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=600&fit=crop"
    },
    {
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
        {/* 3D Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200/20 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 mb-6">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Digital Solutions That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From web development to digital marketing, we provide comprehensive solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 service-card relative">
                {/* 3D Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/30 to-blue-100/30 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform translate-x-2 translate-y-2"></div>
                
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview with Enhanced 3D */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute top-20 left-1/4 w-24 h-24 bg-indigo-200/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '12s'}}></div>
        <div className="absolute bottom-10 right-1/3 w-16 h-16 bg-purple-200/20 rounded-full animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 mb-6">Our Work</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every project is a unique story and we're passionate about shaping yours into a digital masterpiece.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
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
                  <Button variant="ghost" className="text-cyan-600 hover:text-blue-600 p-0">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 mb-6">Latest Insights</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              From Our Blog
            </h2>
          </div>
          <Card className="max-w-3xl mx-auto hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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
                <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Brand Digitally?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss your project and bring your ideas to life.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3">
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
        }
        
        .service-card:hover {
          transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
        }
      `}</style>
    </div>
  );
};

export default Index;
