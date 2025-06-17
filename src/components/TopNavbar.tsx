
import { Button } from "@/components/ui/button";
import { Brain, LogIn } from "lucide-react";

const TopNavbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
          <span className="text-lg md:text-xl font-bold text-gray-800">InsightProducts</span>
        </div>
        
        {/* Animated Login Button */}
        <div className="flex items-center">
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl animate-pulse hover:animate-none relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <LogIn className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
            <span className="relative z-10">Login</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
