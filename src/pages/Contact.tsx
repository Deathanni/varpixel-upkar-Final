
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  MessageCircle,
  Users,
  Headphones,
  Globe
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: "Var Pixels, Ayodhya, India",
      subtitle: "Visit our headquarters"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91-7905095656",
      subtitle: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      details: "varpixels@gmail.com",
      subtitle: "Send us an email anytime"
    },
    {
      icon: Globe,
      title: "Website",
      details: "www.varpixels.com",
      subtitle: "Visit our website"
    }
  ];

  const services = [
    "Web Design & Development",
    "App Design & Development",
    "Digital Marketing", 
    "Branding & SEO",
    "Other"
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while complex applications can take 3-6 months."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive maintenance and support packages to ensure your digital solutions continue to perform optimally."
    },
    {
      question: "What's your development process?",
      answer: "We follow an agile methodology with regular client communication, iterative development, and thorough testing throughout the project."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We often collaborate with in-house teams and can integrate seamlessly with your existing workflows."
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
                <Link to="/services" className="text-cyan-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</Link>
                <Link to="/portfolio" className="text-cyan-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Portfolio</Link>
                <Link to="/about" className="text-cyan-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
                <Link to="/contact" className="bg-cyan-100 text-cyan-900 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
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
          <Badge className="bg-cyan-100 text-cyan-700 mb-6">Contact Us</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ready to Transform
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              Your Brand Digitally?
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Let's discuss your project and bring your ideas to life. Get in touch 
            and let's start creating something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 contact-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-900 font-medium mb-1">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="contact-form-3d">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border-cyan-200 focus:border-cyan-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="border-cyan-200 focus:border-cyan-500"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="border-cyan-200 focus:border-cyan-500"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="border-cyan-200 focus:border-cyan-500"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-3 py-2 border border-cyan-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-cyan-200 focus:border-cyan-500 h-32"
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose VAR PIXELS?</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: MessageCircle,
                      title: "Quick Response",
                      description: "We respond to all inquiries within 24 hours, often much sooner."
                    },
                    {
                      icon: Users,
                      title: "Expert Team",
                      description: "Our experienced team brings diverse skills and perspectives to every project."
                    },
                    {
                      icon: Headphones,
                      title: "24/7 Support",
                      description: "Round-the-clock support to ensure your project stays on track."
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 feature-item">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <Card className="map-card">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-cyan-600 mx-auto mb-2" />
                      <p className="text-gray-600">Our Location</p>
                      <p className="text-sm text-gray-500">Var Pixels, Ayodhya, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 mb-6">FAQ</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our services and process.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="faq-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join hundreds of satisfied clients who trust VAR PIXELS with their digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3">
              Request a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      <style>{`
        .contact-card {
          transform: perspective(1000px);
          transition: all 0.3s ease;
        }
        
        .contact-card:hover {
          transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
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
        
        .feature-item {
          animation: slide-in 0.6s ease-out;
        }
        
        .feature-item:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .feature-item:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .map-card {
          transition: all 0.3s ease;
        }
        
        .map-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(6, 182, 212, 0.1);
        }
        
        .faq-card {
          transition: all 0.3s ease;
        }
        
        .faq-card:hover {
          transform: translateX(10px);
          box-shadow: 0 5px 15px rgba(6, 182, 212, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Contact;
