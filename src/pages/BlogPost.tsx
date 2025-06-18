
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { 
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2
} from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  
  // This would typically come from an API or CMS
  const blogPost = {
    title: "5 Web Design Trends Dominating 2025",
    content: `
      <h2>1. AI-Driven Personalization</h2>
      <p>Artificial Intelligence is revolutionizing how websites adapt to individual users. Modern websites now use AI to dynamically adjust content, layout, and even color schemes based on user behavior, preferences, and demographics.</p>
      
      <h2>2. Ultra-Minimalistic Interfaces</h2>
      <p>The trend towards minimalism continues to evolve, with designers focusing on essential elements while removing any unnecessary clutter. This approach not only improves user experience but also enhances website performance.</p>
      
      <h2>3. Advanced Micro-Interactions</h2>
      <p>Subtle animations and micro-interactions are becoming more sophisticated, providing instant feedback and creating delightful user experiences that guide users through their journey.</p>
      
      <h2>4. Dark Mode as Standard</h2>
      <p>Dark mode is no longer optional. Users expect websites to offer both light and dark themes, with many preferring dark interfaces for reduced eye strain and battery conservation on mobile devices.</p>
      
      <h2>5. Voice User Interface Integration</h2>
      <p>With the rise of voice assistants, websites are beginning to integrate voice commands and audio feedback, making them more accessible and convenient for users on the go.</p>
      
      <h2>Conclusion</h2>
      <p>These trends represent the future of web design, focusing on user experience, accessibility, and technological innovation. By incorporating these elements, businesses can create websites that not only look modern but also provide exceptional user experiences.</p>
    `,
    date: "January 15, 2025",
    readTime: "5 min read",
    author: "VAR PIXELS Team",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=600&fit=crop",
    category: "Web Design"
  };

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
                <Link to="/blog" className="bg-cyan-100 text-cyan-900 px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
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

      {/* Article Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-cyan-600 hover:text-blue-600 mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          
          <Badge className="bg-cyan-100 text-cyan-700 mb-6">
            {blogPost.category}
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {blogPost.title}
          </h1>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
            <img 
              src={blogPost.image} 
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Implement These Trends?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our expert team help you create a modern, trend-setting website for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3">
                View Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 px-8 py-3">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
