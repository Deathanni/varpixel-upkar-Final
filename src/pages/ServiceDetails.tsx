
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowLeft,
  CheckCircle,
  Clock,
  Users,
  Award,
  Code,
  Smartphone,
  TrendingUp,
  Search
} from "lucide-react";

const ServiceDetails = () => {
  const serviceDetails = {
    "Web Design & Development": {
      icon: Code,
      description: "Complete web solutions from design to deployment",
      fullDescription: "Our web development services encompass everything from initial concept and design to final deployment and ongoing maintenance. We specialize in creating responsive, user-friendly websites that not only look stunning but also perform exceptionally across all devices and platforms.",
      features: [
        "Custom Web Development",
        "Responsive Design",
        "E-Commerce Solutions",
        "CMS Integration",
        "Performance Optimization",
        "SEO-Friendly Structure",
        "Cross-Browser Compatibility",
        "Maintenance & Support"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      timeline: "4-8 weeks",
      price: "Starting at $2,999"
    }
  };

  const whatsappNumber = "+1234567890"; // Replace with actual WhatsApp number
  const whatsappMessage = "Hi, I'm interested in your web development services. Can you provide more details?";

  const handleWhatsAppRedirect = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      {/* Enhanced Navigation with 3D elements */}
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
                <Link to="/blog" className="text-cyan-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</Link>
                <Link to="/about" className="text-cyan-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
                <Link to="/contact" className="text-cyan-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
              </div>
            </div>
            <Button onClick={handleWhatsAppRedirect} className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white">
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section with 3D Elements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200/30 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-200/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '10s'}}></div>
        
        <div className="max-w-7xl mx-auto">
          <Link to="/services" className="inline-flex items-center text-cyan-600 hover:text-blue-600 mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          
          <div className="text-center">
            <Badge className="bg-cyan-100 text-cyan-700 mb-6">Service Details</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Web Design &
              <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {serviceDetails["Web Design & Development"].fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Features */}
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceDetails["Web Design & Development"].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-50 transition-colors duration-200">
                        <CheckCircle className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technologies */}
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Technologies We Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {serviceDetails["Web Design & Development"].technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="px-4 py-2 text-sm bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200 hover:border-blue-300 transition-colors duration-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-cyan-50">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-6 w-6 text-cyan-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Timeline</p>
                        <p className="text-gray-600">{serviceDetails["Web Design & Development"].timeline}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Award className="h-6 w-6 text-cyan-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Investment</p>
                        <p className="text-gray-600">{serviceDetails["Web Design & Development"].price}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-cyan-200">
                      <Button 
                        onClick={handleWhatsAppRedirect}
                        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white mb-3"
                      >
                        Get Free Quote
                      </Button>
                      <Link to="/portfolio">
                        <Button variant="outline" className="w-full border-cyan-200 text-cyan-700 hover:bg-cyan-50">
                          View Portfolio
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
