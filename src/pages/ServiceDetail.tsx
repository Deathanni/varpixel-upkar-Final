
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Search,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Star,
  Clock,
  Users
} from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams();

  const serviceDetails = {
    "web-development": {
      icon: Globe,
      title: "Web Design & Development",
      description: "Transform your digital presence with cutting-edge web solutions that captivate, convert, and scale with your business.",
      longDescription: "Our web development team crafts bespoke digital experiences that seamlessly blend stunning design with powerful functionality. From responsive corporate websites to complex e-commerce platforms, we build web solutions that drive real business results.",
      features: [
        "Custom Web Development",
        "Responsive Design",
        "E-Commerce Solutions",
        "CMS Platforms",
        "Progressive Web Apps",
        "API Integration",
        "Performance Optimization",
        "SEO-Ready Structure"
      ],
      process: [
        "Discovery & Strategy Planning",
        "UI/UX Design & Prototyping",
        "Frontend Development",
        "Backend Integration",
        "Testing & Quality Assurance",
        "Launch & Ongoing Support"
      ],
      price: "Starting at $2,999",
      timeline: "4-8 weeks",
      projects: "50+ completed"
    },
    "app-development": {
      icon: Smartphone,
      title: "App Design & Development",
      description: "Create powerful mobile experiences that users love with our comprehensive app development services.",
      longDescription: "We specialize in building intuitive, scalable mobile applications that solve real problems and delight users across all platforms. From concept to app store, we handle every aspect of mobile app development.",
      features: [
        "Native iOS Development",
        "Native Android Development",
        "Cross-Platform Solutions",
        "UI/UX for Mobile",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "Analytics Integration"
      ],
      process: [
        "App Strategy & Planning",
        "User Experience Design",
        "Native Development",
        "Cross-Platform Integration",
        "Beta Testing",
        "App Store Launch"
      ],
      price: "Starting at $4,999",
      timeline: "6-12 weeks",
      projects: "30+ completed"
    },
    "digital-marketing": {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Amplify your brand's reach and drive measurable growth with our comprehensive digital marketing strategies.",
      longDescription: "Our digital marketing experts create data-driven campaigns that boost your online presence, engage your target audience, and deliver measurable ROI across all digital channels.",
      features: [
        "Social Media Management",
        "Pay-Per-Click Advertising",
        "Content Marketing",
        "Email Campaigns",
        "Influencer Outreach",
        "Analytics & Reporting",
        "Conversion Optimization",
        "Brand Strategy"
      ],
      process: [
        "Market Research & Analysis",
        "Strategy Development",
        "Campaign Creation",
        "Multi-Channel Execution",
        "Performance Monitoring",
        "Optimization & Scaling"
      ],
      price: "Starting at $1,499/month",
      timeline: "Ongoing campaigns",
      projects: "100+ campaigns"
    },
    "branding-seo": {
      icon: Search,
      title: "Branding & SEO",
      description: "Build a memorable brand identity and dominate search results with our comprehensive branding and SEO services.",
      longDescription: "We create compelling brand identities that resonate with your audience while optimizing your digital presence for maximum visibility and organic growth.",
      features: [
        "Logo & Visual Identity",
        "Brand Guidelines",
        "On-Page SEO",
        "Off-Page SEO",
        "Technical SEO",
        "Local SEO",
        "Keyword Research",
        "Content Strategy"
      ],
      process: [
        "Brand Discovery",
        "Visual Identity Design",
        "SEO Audit & Strategy",
        "Implementation",
        "Content Optimization",
        "Performance Tracking"
      ],
      price: "Starting at $1,999",
      timeline: "3-6 weeks",
      projects: "75+ brands"
    }
  };

  const service = serviceDetails[slug] || serviceDetails["web-development"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      <Navigation currentPage="services" />

      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200/30 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-indigo-200/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '12s'}}></div>
        
        {/* 3D Cubes */}
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

        <div className="absolute top-1/2 left-16 w-20 h-20 border-4 border-cyan-300/40 rounded-full animate-spin-slow"></div>
        <div className="absolute top-32 right-16 w-12 h-12 border-2 border-blue-400/50 rounded-full animate-bounce-slow"></div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <service.icon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {service.description}
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {service.timeline}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {service.projects}
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                5.0 Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Service</h2>
              <p className="text-lg text-gray-600 mb-8">{service.longDescription}</p>
              
              <div className="mb-8">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {service.price}
                </div>
                <p className="text-gray-600">Custom pricing based on project scope</p>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Features */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 px-8 py-3">
                Back to Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
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

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ServiceDetail;
