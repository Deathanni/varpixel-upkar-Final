
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
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
  Palette,
  Eye,
  Lightbulb
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <Navigation currentPage="about" />

      {/* 3D Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200/30 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-indigo-200/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '12s'}}></div>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
                <Link to="/services">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" size="lg" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 px-8 py-3">
                    <Eye className="mr-2 h-4 w-4" />
                    Our Portfolio
                  </Button>
                </Link>
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

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 mb-6">Our Purpose</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Mission & Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="mission-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed text-center">
                  To empower local and global brands through creativity-driven technology and purposeful design, 
                  building experiences that engage, inspire, and convert.
                </p>
              </CardContent>
            </Card>

            <Card className="vision-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed text-center">
                  To become the leading digital transformation partner, recognized globally for innovation, 
                  quality, and our ability to turn ambitious ideas into successful digital realities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            <Link to="/services">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Learn More
              </Button>
            </Link>
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
        
        .mission-card, .vision-card {
          transform: perspective(1000px);
          transition: all 0.3s ease;
        }
        
        .mission-card:hover, .vision-card:hover {
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
