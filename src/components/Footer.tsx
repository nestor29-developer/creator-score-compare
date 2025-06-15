
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"></div>
                <span className="text-lg md:text-xl font-bold">CreatorInsights</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-sm md:text-base">
                Revolutionizing product discovery through AI-powered creator analysis. 
                Get instant, comprehensive product insights from thousands of trusted creators.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <span className="text-xs md:text-sm font-bold">TW</span>
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <span className="text-xs md:text-sm font-bold">LI</span>
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <span className="text-xs md:text-sm font-bold">YT</span>
                </a>
              </div>
            </div>
            
            {/* Product Column */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Product</h3>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">How it Works</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Creator Network</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">AI Analysis</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">API Access</a></li>
              </ul>
            </div>
            
            {/* Company Column */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Company</h3>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Press</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Blog</a></li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div className="border-t border-gray-800 pt-6 md:pt-8 mb-6 md:mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-base md:text-lg font-semibold mb-2">Stay in the Loop</h3>
                <p className="text-gray-300 text-sm md:text-base">Get the latest product insights and creator updates</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 sm:w-64 px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400 text-sm md:text-base"
                />
                <button className="px-4 md:px-6 py-2 md:py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm md:text-base whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-gray-400 text-xs md:text-sm">
              © 2024 CreatorInsights. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
