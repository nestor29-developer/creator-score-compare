
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"></div>
                <span className="text-xl font-bold">CreatorInsights</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Revolutionizing product discovery through AI-powered creator analysis. 
                Get instant, comprehensive product insights from thousands of trusted creators.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <span className="text-sm font-bold">TW</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <span className="text-sm font-bold">LI</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <span className="text-sm font-bold">YT</span>
                </a>
              </div>
            </div>
            
            {/* Product Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Creator Network</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AI Analysis</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API Access</a></li>
              </ul>
            </div>
            
            {/* Company Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Stay in the Loop</h3>
                <p className="text-gray-300">Get the latest product insights and creator updates</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
                />
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors flex items-center gap-2">
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 CreatorInsights. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
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
