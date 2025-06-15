
import { CheckCircle, Zap, Brain, BarChart3, Search, Filter, Heart } from "lucide-react";

const SolutionSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Everything You Need to Know
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> In One Place</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-[fade-in_0.8s_ease-out]">
              No more jumping between platforms. Get complete product insights with detailed breakdowns from trusted creators.
            </p>
          </div>
          
          {/* Solution Illustration */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Visual */}
            <div className="relative animate-[slide-in-right_1s_ease-out]">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="space-y-6">
                  {/* Search Bar */}
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 animate-pulse">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Search className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 text-gray-700">Barrier Repair Cloud Body Cream</div>
                  </div>
                  
                  {/* Creator Analysis */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors">
                      <img src="https://images.unsplash.com/photo-1494790108755-2616b332c371?w=40&h=40&fit=crop&crop=face" alt="Creator" className="w-10 h-10 rounded-full" />
                      <div>
                        <div className="font-semibold text-green-900">Abbey Yang Review</div>
                        <div className="text-sm text-green-700">⭐ 5/5 - Body Moisturizers</div>
                      </div>
                    </div>
                    
                    {/* Product Details */}
                    <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Heart className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium">Hydrating</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm font-medium">Anti-Aging</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>✅ Hyaluronic Acid</span>
                          <span className="text-green-600">Benefits skin</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>✅ Peptides</span>
                          <span className="text-green-600">Repairs barrier</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>⚠️ May trigger acne</span>
                          <span className="text-orange-600">For oily skin</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">Instant Access</div>
                  <div className="text-gray-600">All creator insights ready</div>
                </div>
              </div>
              
              {/* Floating success indicator */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            
            {/* Right Side - Benefits */}
            <div className="space-y-6 animate-[fade-in_1s_ease-out_0.5s_both]">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Filter className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Detailed Product Analysis</h3>
                  <p className="text-blue-700">See ingredients, benefits, concerns, and ratings all organized by expert creators</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Creator Comparisons</h3>
                  <p className="text-purple-700">Compare how different creators rate the same products with standardized insights</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Smart Discovery</h3>
                  <p className="text-green-700">Find products by benefits, ingredients, skin concerns, or browse by your favorite creators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
