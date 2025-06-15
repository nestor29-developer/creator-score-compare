
import { Button } from "@/components/ui/button";
import { Brain, LogIn, Menu } from "lucide-react";
import { useState } from "react";

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
          <span className="text-lg md:text-xl font-bold text-gray-800">InsightProducts</span>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5 text-gray-700" />
        </button>
        
        {/* Desktop Navigation Links */}
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
        
        {/* Desktop Login and CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
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

        {/* Mobile Menu Buttons */}
        <div className="md:hidden flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className="border-purple-200 text-purple-600 hover:bg-purple-50 px-3 py-1.5 rounded-full text-xs"
          >
            Login
          </Button>
          <Button 
            size="sm"
            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-full text-xs"
          >
            Start
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a href="#home" className="block py-2 text-gray-700 hover:text-purple-600 font-medium">Home</a>
            <a href="#creators" className="block py-2 text-gray-700 hover:text-purple-600 font-medium">Creators</a>
            <a href="#products" className="block py-2 text-gray-700 hover:text-purple-600 font-medium">Products</a>
            <a href="#faq" className="block py-2 text-gray-700 hover:text-purple-600 font-medium">FAQ</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNavbar;
