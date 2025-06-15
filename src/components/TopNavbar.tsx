
import { Button } from "@/components/ui/button";
import { Brain, LogIn } from "lucide-react";

const TopNavbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-purple-600" />
          <span className="text-xl font-bold text-gray-800">InsightProducts</span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#creators" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group">
            Creators
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#products" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group">
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#faq" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group">
            FAQ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        
        {/* Login and CTA Buttons */}
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            className="border-purple-200 text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
