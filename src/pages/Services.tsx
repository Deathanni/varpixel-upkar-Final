
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Palette, 
  Zap, 
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Award,
  Target,
  TrendingUp,
  Search
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Bespoke websites built with user-centric design, lightning speed, and modern tech stacks. From corporate sites to eCommerce platforms, we craft web presences that drive results.",
      features: [
        "Custom Web Development",
        "E-Commerce Solutions", 
        "CMS Platforms",
        "Responsive Design"
      ],
      price: "Starting at $2,999",
      popular: false
    },
    {
      icon: Smartphone,
      title: "App Design & Development",
      description: "Intuitive, elegant, and scalable mobile apps that solve real problems and delight users across Android, iOS, and hybrid platforms.",
      features: [
        "Native & Cross-Platform Apps",
        "UI/UX for Mobile",
        "Maintenance & Support"
      ],
      price: "Starting at $4,999",
      popular: true
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Digital strategies that elevate your brand — from social media campaigns to pay-per-click and influencer outreach — tailored to get measurable growth and audience engagement.",
      features: [
        "Social Media Management",
        "Paid Ads",
        "Content Marketing",
        "Email Campaigns"
      ],
      price: "Starting at $1,499/month",
      popular: false
    },
    {
      icon: Search,
      title: "Branding & SEO",
      description: "Building brand identities that last and optimizing digital presence for visibility, traffic, and conversions.",
      features: [
        "Logo & Visual Identity",
        "On-Page & Off-Page SEO",
        "Google Rankings Boost",
        "Brand Strategy Consulting"
      ],
      price: "Starting at $1,999",
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a comprehensive project plan.",
      icon: Target
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create stunning visuals and interactive prototypes.",
      icon: Palette
    },
    {
      step: "03",
      title: "Development",
      description: "Our developers bring your project to life with clean, efficient code.",
      icon: Code
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Rigorous testing ensures your product works flawlessly before launch.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
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
                <Link to="/" className="text-cyan-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
                <Link to="/services" className="bg-cyan-100 text-cyan-900 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link to="/portfolio" className="text-cyan-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Portfolio</Link>
                <Link to="/about" className="text-cyan-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
                <Link to="/contact" className="text-cyan-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white">
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-cyan-100 text-cyan-700 mb-6">Our Services</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              Digital Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From web development to digital marketing, we provide end-to-end solutions 
            to help your business thrive in the digital world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 service-card relative ${service.popular ? 'border-cyan-300 ring-2 ring-cyan-200' : 'border-cyan-100'}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
                      {service.price}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 mb-6">Our Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures successful project delivery from concept to launch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center process-step">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-cyan-500 rounded-full flex items-center justify-center text-sm font-bold text-cyan-600">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: "50+", label: "Happy Clients" },
              { icon: Code, number: "100+", label: "Projects Completed" },
              { icon: Clock, number: "5+", label: "Years Experience" },
              { icon: Award, number: "25+", label: "Awards Won" }
            ].map((stat, index) => (
              <div key={index} className="stats-3d">
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3">
              Get Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 px-8 py-3">
              View Portfolio
            </Button>
          </div>
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
        
        .process-step {
          animation: float 6s ease-in-out infinite;
        }
        
        .process-step:nth-child(2) {
          animation-delay: -1.5s;
        }
        
        .process-step:nth-child(3) {
          animation-delay: -3s;
        }
        
        .process-step:nth-child(4) {
          animation-delay: -4.5s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
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
      `}</style>
    </div>
  );
};

export default Services;
