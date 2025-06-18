import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { 
  ExternalLink,
  Github,
  ArrowRight
} from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "The Ayodhya Skates",
      description: "Complete branding, website, and digital marketing for Ayodhya's premier skating academy — enhancing their online presence and attracting local skating enthusiasts.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Digital Marketing", "Branding"],
      category: "Web Development & Branding",
      link: "#",
      github: "#"
    },
    {
      title: "Dubey Misthan Bhandar",
      description: "Designed and developed a high-conversion, user-friendly website for one of the region's oldest sweet shops, integrating online ordering and local SEO optimization.",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=600&fit=crop",
      tech: ["E-commerce", "SEO", "Online Ordering", "Local Marketing"],
      category: "E-commerce Development",
      link: "#",
      github: "#"
    },
    {
      title: "AntarDarshnam",
      description: "A spiritual wellness platform brought to life through a minimalist design, reflecting peace and mindfulness resulting in increased user engagement and followers.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      tech: ["React", "UI/UX Design", "Content Strategy", "Social Media"],
      category: "Web Development & Design",
      link: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      description: "Crafted a sleek, personal portfolio for law professionals, blending aesthetics with functionality to showcase their work and influence clients.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
      tech: ["React", "TailwindCSS", "Professional Design", "SEO"],
      category: "Portfolio Development",
      link: "#",
      github: "#"
    }
  ];

  const categories = ["All", "Web Development & Branding", "E-commerce Development", "Web Development & Design", "Portfolio Development"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <Navigation currentPage="portfolio" />

      {/* 3D Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200/30 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-indigo-200/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '12s'}}></div>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-cyan-100 text-cyan-700 mb-6">Our Work</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Every project is a unique story and we're passionate about shaping yours into a digital masterpiece. 
            Explore our collection of successful projects that showcase our expertise.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-4 mb-12 overflow-x-auto">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeFilter === category ? "default" : "outline"}
                className={activeFilter === category
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white whitespace-nowrap" 
                  : "border-cyan-200 text-cyan-700 hover:bg-cyan-50 whitespace-nowrap"
                }
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 project-card">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </Button>
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-cyan-100 text-cyan-700 mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" className="text-cyan-600 hover:text-blue-600 p-0">
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
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
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 mb-6">Client Feedback</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "VAR PIXELS transformed our vision into a digital masterpiece. The team's professionalism, 
                  creativity, and technical skill are unmatched."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Ravinder Kumar</p>
                  <p className="text-sm text-gray-500">Founder, The Ayodhya Skates</p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Their digital marketing strategy took our local brand to new heights. Highly recommended 
                  for any business looking to grow online."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Ankit Dubey</p>
                  <p className="text-sm text-gray-500">Owner, Dubey Misthan Bhandar</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Project Success Stories
            </h2>
            <p className="text-xl text-cyan-100">
              Numbers that speak for our expertise and client satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed", icon: "🚀" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐" },
              { number: "25+", label: "Happy Clients", icon: "👥" },
              { number: "24/7", label: "Support Available", icon: "🔧" }
            ].map((stat, index) => (
              <div key={index} className="stats-3d">
                <div className="text-4xl mb-4">{stat.icon}</div>
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
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create something amazing together. Contact us to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 px-8 py-3">
                View More Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .project-card {
          transition: all 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
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
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
