
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users,
  Target,
  Award,
  Heart,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Code,
  Brain,
  TrendingUp,
  Palette
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Virendra Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "B.Tech CSE, IERT Prayagraj. Visionary leader driving VAR PIXELS with a passion for cutting-edge technology and entrepreneurship.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Divyansh Shrivastava",
      role: "Technical Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "B.Tech CSE, IIT BHU | Ex-Senior Software Developer at Unify. Mastermind of architecture, coding, and building high-performance solutions.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Ajay Dubey",
      role: "AI & ML Expert",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "B.Tech IT, KIET Ghaziabad. Laying the foundation of intelligent systems with expertise in Machine Learning & Data Science.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Riya Kumari",
      role: "Marketing Head & Content Strategist",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c877?w=400&h=400&fit=crop&crop=face",
      bio: "Computer Science Graduate, University of Delhi. Specialist in Digital Marketing, SEO, and UI/UX Design — making brands stand out in the crowded digital space.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions."
    },
    {
      icon: Heart,
      title: "Quality",
      description: "Every project receives our full attention to detail, ensuring the highest standards of quality and performance."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring transparent communication throughout the project."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer service and support."
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
                <Link to="/about" className="bg-cyan-100 text-cyan-900 px-3 py-2 rounded-md text-sm font-medium">About</Link>
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-cyan-100 text-cyan-700">About Us</Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  We Are
                  <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                    VAR PIXELS
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  At VAR PIXELS, we turn ideas into interactive realities. As a full-stack agency specializing in 
                  Web Development, App Design, UI/UX Innovation, Branding, and Digital Marketing, we craft digital 
                  ecosystems that captivate users and elevate brands.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Every project is a unique story and we're passionate about shaping yours into a digital masterpiece.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 px-8 py-3">
                  Our Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="floating-3d">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                  alt="Team collaboration"
                  className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Card className="mission-card max-w-4xl mx-auto">
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  "To empower local and global brands through creativity-driven technology and purposeful design, 
                  building experiences that engage, inspire, and convert."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 mb-6">Our Values</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 value-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 mb-6">Our Visionaries</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented professionals dedicated to delivering exceptional results and shaping the future of digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 team-card">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-cyan-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <Button variant="ghost" size="sm" className="p-2">
                      <Linkedin className="h-4 w-4 text-gray-500 hover:text-cyan-600" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Twitter className="h-4 w-4 text-gray-500 hover:text-cyan-600" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Github className="h-4 w-4 text-gray-500 hover:text-cyan-600" />
                    </Button>
                  </div>
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss how we can help transform your digital presence and achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </section>

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
        
        .mission-card {
          transform: perspective(1000px);
          transition: all 0.3s ease;
        }
        
        .mission-card:hover {
          transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
        }
        
        .value-card {
          transform: perspective(1000px);
          transition: all 0.3s ease;
        }
        
        .value-card:hover {
          transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
        }
        
        .team-card {
          transition: all 0.3s ease;
        }
        
        .team-card:hover {
          transform: translateY(-10px);
        }
      `}</style>
    </div>
  );
};

export default About;
