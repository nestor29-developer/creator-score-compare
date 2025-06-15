
import { CheckCircle, Zap, Brain, BarChart3, Search, Filter, Heart, Star, ThumbsUp, AlertTriangle } from "lucide-react";

const SolutionSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              See What Creators Really Think
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> About Any Product</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-[fade-in_0.8s_ease-out]">
              Compare insights from multiple creators instantly. No more watching hours of videos or reading endless reviews.
            </p>
          </div>
          
          {/* 3-Creator Comparison Example */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Search & Product */}
            <div className="relative animate-[slide-in-right_1s_ease-out]">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="space-y-6">
                  {/* Search Bar */}
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 animate-pulse">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Search className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 text-gray-700 font-medium">The Ordinary Niacinamide Serum</div>
                  </div>
                  
                  {/* 3 Creator Reviews */}
                  <div className="space-y-4">
                    {/* Creator 1 - Positive */}
                    <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors">
                      <img src="https://images.unsplash.com/photo-1494790108755-2616b332c371?w=40&h=40&fit=crop&crop=face" alt="Creator" className="w-12 h-12 rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="font-semibold text-green-900">Hyram</div>
                          <div className="flex items-center gap-1">
                            {[1,2,3,4,5].map(i => (
                              <Star key={i} className="h-3 w-3 fill-green-500 text-green-500" />
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-green-700 mb-2">"Perfect for oily skin, reduces pore appearance"</div>
                        <div className="flex gap-2 flex-wrap">
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">✅ Oil Control</span>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">✅ Pore Minimizing</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Creator 2 - Mixed */}
                    <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-xl border border-yellow-200 hover:bg-yellow-100 transition-colors">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Creator" className="w-12 h-12 rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="font-semibold text-yellow-900">James Welsh</div>
                          <div className="flex items-center gap-1">
                            {[1,2,3].map(i => (
                              <Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                            ))}
                            {[4,5].map(i => (
                              <Star key={i} className="h-3 w-3 text-gray-300" />
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-yellow-700 mb-2">"Good ingredients but can be drying for some"</div>
                        <div className="flex gap-2 flex-wrap">
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">✅ Good Formula</span>
                          <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">⚠️ Can Be Drying</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Creator 3 - Cautious */}
                    <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl border border-orange-200 hover:bg-orange-100 transition-colors">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" alt="Creator" className="w-12 h-12 rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="font-semibold text-orange-900">Caroline Hirons</div>
                          <div className="flex items-center gap-1">
                            {[1,2,3].map(i => (
                              <Star key={i} className="h-3 w-3 fill-orange-500 text-orange-500" />
                            ))}
                            {[4,5].map(i => (
                              <Star key={i} className="h-3 w-3 text-gray-300" />
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-orange-700 mb-2">"Start slow, too strong for sensitive skin"</div>
                        <div className="flex gap-2 flex-wrap">
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">✅ Effective</span>
                          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">❌ Not for Sensitive</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Summary */}
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-4 w-4 text-purple-600" />
                      <span className="font-semibold text-purple-900">AI Summary</span>
                    </div>
                    <div className="text-sm text-purple-700">
                      Best for oily/combination skin. Start with 2-3 times per week. 
                      Avoid if you have sensitive skin or use retinoids.
                    </div>
                  </div>
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
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Compare Multiple Creators</h3>
                  <p className="text-blue-700">See how different creators rate the same product with detailed pros, cons, and recommendations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">AI-Powered Insights</h3>
                  <p className="text-purple-700">Get smart summaries that highlight key benefits, concerns, and best use cases for your skin type</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Instant Results</h3>
                  <p className="text-green-700">No more watching hours of videos. Get comprehensive product analysis in seconds</p>
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
