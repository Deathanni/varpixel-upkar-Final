
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, CheckCircle } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();

  // Project data - in a real app this would come from an API
  const projects = {
    "ayodhya-skates": {
      title: "The Ayodhya Skates",
      description: "Complete branding, website, and digital marketing for Ayodhya's premier skating academy — enhancing their online presence and attracting local skating enthusiasts.",
      fullDescription: "A comprehensive digital transformation project for The Ayodhya Skates, one of the region's premier skating academies. We delivered a complete branding overhaul, modern website development, and strategic digital marketing campaigns that significantly increased their online visibility and student enrollment.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
      ],
      tech: ["React", "Node.js", "MongoDB", "Digital Marketing", "Branding"],
      category: "Web Development & Branding",
      client: "The Ayodhya Skates",
      duration: "3 months",
      year: "2024",
      challenges: [
        "Creating a modern digital presence for a traditional sport",
        "Attracting younger demographics while maintaining existing clientele",
        "Building an online booking system for skating sessions"
      ],
      solutions: [
        "Developed a vibrant, youth-oriented brand identity",
        "Created engaging social media campaigns showcasing skating culture",
        "Implemented a user-friendly booking and payment system"
      ],
      results: [
        "300% increase in online inquiries",
        "150% growth in social media followers",
        "40% increase in new student enrollments"
      ]
    },
    "dubey-misthan": {
      title: "Dubey Misthan Bhandar",
      description: "High-conversion website for one of the region's oldest sweet shops with online ordering system and local SEO optimization.",
      fullDescription: "Digital transformation of a century-old sweet shop, bringing traditional Indian sweets to the digital age with a modern e-commerce platform and comprehensive digital marketing strategy.",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop"
      ],
      tech: ["E-commerce", "SEO", "Online Ordering", "Local Marketing"],
      category: "E-commerce Development",
      client: "Dubey Misthan Bhandar",
      duration: "4 months",
      year: "2024",
      challenges: [
        "Digitizing a traditional business model",
        "Managing inventory for perishable goods",
        "Competing with modern food delivery platforms"
      ],
      solutions: [
        "Built a custom e-commerce platform with real-time inventory",
        "Implemented location-based delivery optimization",
        "Created compelling product photography and descriptions"
      ],
      results: [
        "250% increase in online orders",
        "85% improvement in local search rankings",
        "60% growth in overall revenue"
      ]
    },
    "antardarshnam": {
      title: "AntarDarshnam",
      description: "A spiritual wellness platform brought to life through minimalist design, reflecting peace and mindfulness with increased user engagement.",
      fullDescription: "A comprehensive spiritual wellness platform designed to provide users with meditation guidance, spiritual content, and community features through a serene and intuitive digital experience.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop"
      ],
      tech: ["React", "UI/UX Design", "Content Strategy", "Social Media"],
      category: "Web Development & Design",
      client: "AntarDarshnam",
      duration: "2 months",
      year: "2024",
      challenges: [
        "Conveying spirituality through digital design",
        "Creating an engaging yet peaceful user experience",
        "Building a community around mindfulness practices"
      ],
      solutions: [
        "Designed with calming colors and minimalist aesthetics",
        "Integrated meditation timers and progress tracking",
        "Built community features for sharing and discussion"
      ],
      results: [
        "400% increase in user engagement",
        "200% growth in daily active users",
        "90% user retention rate after 30 days"
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
        <Navigation />
        <div className="max-w-4xl mx-auto py-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/portfolio">
            <Button className="bg-gradient-to-r from-cyan-600 to-blue-600">
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      {/* Enhanced 3D Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-xl animate-pulse floating-bg"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-xl animate-bounce floating-bg" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-pink-200/20 to-red-200/20 rounded-lg rotate-45 animate-spin floating-bg" style={{animationDuration: '12s'}}></div>
      <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full animate-pulse floating-bg" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-green-200/25 to-emerald-200/25 rounded-xl rotate-12 animate-bounce floating-bg" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
      <div className="absolute bottom-40 left-16 w-20 h-20 bg-gradient-to-br from-violet-200/25 to-purple-200/25 rounded-lg animate-spin floating-bg" style={{animationDuration: '8s'}}></div>

      {/* Hero Section with Enhanced 3D */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link to="/portfolio">
              <Button variant="outline" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 floating-button transform hover:scale-105 transition-all duration-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-cyan-100 text-cyan-700 floating-badge">
                {project.category}
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 floating-title">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 floating-text">
                {project.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white floating-button transform hover:scale-105 transition-all duration-300">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
                <Button variant="outline" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 floating-button transform hover:scale-105 transition-all duration-300" style={{animationDelay: '0.3s'}}>
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
              </div>
            </div>
            
            <div className="relative project-image-3d">
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform translate-x-4 translate-y-4"></div>
              </div>
              
              {/* Floating project stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl floating-stats transform hover:scale-110 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">{project.year}</div>
                  <div className="text-sm text-gray-600">Year</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl floating-stats transform hover:scale-110 transition-all duration-300" style={{animationDelay: '1s'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">{project.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Info */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-8 hover:shadow-xl transition-all duration-300 project-card-3d">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-6 w-6 text-cyan-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Duration</div>
                      <div className="text-gray-600">{project.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-cyan-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Client</div>
                      <div className="text-gray-600">{project.client}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-cyan-700 border-cyan-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 hover:shadow-xl transition-all duration-300 project-card-3d">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="mr-3 h-6 w-6 text-cyan-600" />
                  Challenges & Solutions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Challenges</h4>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Solutions</h4>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Results Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-xl transition-all duration-300 results-card-3d">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Results Achieved</h3>
                <div className="space-y-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg result-item" style={{animationDelay: `${index * 0.2}s`}}>
                      <div className="text-sm font-medium text-cyan-700">{result}</div>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="p-6 hover:shadow-xl transition-all duration-300 gallery-card-3d">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Gallery</h3>
                <div className="space-y-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="aspect-video overflow-hidden rounded-lg gallery-image" style={{animationDelay: `${index * 0.3}s`}}>
                      <img 
                        src={image} 
                        alt={`${project.title} ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 relative overflow-hidden">
        {/* Enhanced 3D CTA Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-bounce" style={{animationDuration: '5s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-lg rotate-45 animate-spin" style={{animationDuration: '15s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6 floating-title">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 floating-text">
            Let's create something amazing together like this project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 floating-button transform hover:scale-105 transition-all duration-300">
                Start Your Project
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 floating-button transform hover:scale-105 transition-all duration-300" style={{animationDelay: '0.3s'}}>
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
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
        
        .project-image-3d {
          animation: projectFloat 6s ease-in-out infinite;
        }
        
        .floating-stats {
          animation: statsFloat 4s ease-in-out infinite;
        }
        
        .project-card-3d {
          transform: perspective(1000px);
          transition: all 0.4s ease;
        }
        
        .project-card-3d:hover {
          transform: perspective(1000px) rotateX(5deg) rotateY(5deg) translateY(-10px);
        }
        
        .results-card-3d {
          animation: resultsFloat 5s ease-in-out infinite;
        }
        
        .gallery-card-3d {
          animation: galleryFloat 6s ease-in-out infinite;
        }
        
        .result-item {
          animation: resultItemFloat 3s ease-in-out infinite;
        }
        
        .gallery-image {
          animation: galleryImageFloat 4s ease-in-out infinite;
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
        
        @keyframes projectFloat {
          0%, 100% {
            transform: translateY(0px) perspective(1000px) rotateX(0deg);
          }
          50% {
            transform: translateY(-15px) perspective(1000px) rotateX(3deg);
          }
        }
        
        @keyframes statsFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
        }
        
        @keyframes resultsFloat {
          0%, 100% {
            transform: translateY(0px) perspective(1000px) rotateY(0deg);
          }
          50% {
            transform: translateY(-8px) perspective(1000px) rotateY(2deg);
          }
        }
        
        @keyframes galleryFloat {
          0%, 100% {
            transform: translateY(0px) perspective(1000px) rotateX(0deg);
          }
          50% {
            transform: translateY(-6px) perspective(1000px) rotateX(2deg);
          }
        }
        
        @keyframes resultItemFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-3px) scale(1.02);
          }
        }
        
        @keyframes galleryImageFloat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;
