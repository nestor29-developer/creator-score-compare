
import { Clock, Search, Zap, X } from "lucide-react";

const ProblemSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Old Way is 
              <span className="text-red-500"> Exhausting</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Finding reliable product recommendations shouldn't require hours of research across multiple platforms
            </p>
          </div>
          
          {/* Problem Illustration */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Problems */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-red-50 rounded-2xl border border-red-100">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Hours of Video Watching</h3>
                  <p className="text-red-700">Watch 10+ videos per product, skip through sponsored content, and try to remember what each creator said</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-red-50 rounded-2xl border border-red-100">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Search className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Scattered Information</h3>
                  <p className="text-red-700">Jump between TikTok, YouTube, Reddit, and blogs to piece together different opinions and ratings</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-red-50 rounded-2xl border border-red-100">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Inconsistent Comparisons</h3>
                  <p className="text-red-700">No standardized way to compare products across different creators' review styles and criteria</p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">YT</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                    </div>
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">TT</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">R</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">3+ Hours</div>
                  <div className="text-gray-600">Per Product Research</div>
                </div>
              </div>
              
              {/* Floating frustration indicators */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <X className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
