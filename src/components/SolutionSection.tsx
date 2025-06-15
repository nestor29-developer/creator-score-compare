
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
          
          {/* Product Analysis Card - Matching Screenshot Design */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Product Analysis Card */}
            <div className="relative animate-[slide-in-right_1s_ease-out]">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="space-y-6">
                  {/* Search Bar */}
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                      <Search className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 text-gray-800 font-medium text-lg">The Ordinary Niacinamide Serum</div>
                  </div>
                  
                  {/* Creator Reviews - Table-like Design */}
                  <div className="space-y-4">
                    {/* Creator 1 - Hyram */}
                    <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-400">
                      <div className="flex items-start gap-4">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" alt="Hyram" className="w-12 h-12 rounded-full border-2 border-green-200" />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="font-bold text-green-900 text-lg">Hyram</div>
                            <div className="flex items-center gap-1">
                              {[1,2,3,4,5].map(i => (
                                <Star key={i} className="h-4 w-4 fill-green-500 text-green-500" />
                              ))}
                            </div>
                          </div>
                          <div className="text-green-800 font-medium mb-3 text-base">"Perfect for oily skin, reduces pore appearance"</div>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium border border-green-200">✅ Oil Control</span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium border border-green-200">✅ Pore Minimizing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Creator 2 - James Welsh */}
                    <div className="bg-yellow-50 rounded-2xl p-6 border-l-4 border-yellow-400">
                      <div className="flex items-start gap-4">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" alt="James Welsh" className="w-12 h-12 rounded-full border-2 border-yellow-200" />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="font-bold text-yellow-900 text-lg">James Welsh</div>
                            <div className="flex items-center gap-1">
                              {[1,2,3].map(i => (
                                <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              ))}
                              {[4,5].map(i => (
                                <Star key={i} className="h-4 w-4 text-gray-300" />
                              ))}
                            </div>
                          </div>
                          <div className="text-yellow-800 font-medium mb-3 text-base">"Good ingredients but can be drying for some"</div>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium border border-green-200">✅ Good Formula</span>
                            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full font-medium border border-orange-200">⚠️ Can Be Drying</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Creator 3 - Caroline Hirons */}
                    <div className="bg-orange-50 rounded-2xl p-6 border-l-4 border-orange-400">
                      <div className="flex items-start gap-4">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" alt="Caroline Hirons" className="w-12 h-12 rounded-full border-2 border-orange-200" />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="font-bold text-orange-900 text-lg">Caroline Hirons</div>
                            <div className="flex items-center gap-1">
                              {[1,2,3].map(i => (
                                <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                              ))}
                              {[4,5].map(i => (
                                <Star key={i} className="h-4 w-4 text-gray-300" />
                              ))}
                            </div>
                          </div>
                          <div className="text-orange-800 font-medium mb-3 text-base">"Start slow, too strong for sensitive skin"</div>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium border border-green-200">✅ Effective</span>
                            <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full font-medium border border-red-200">❌ Not for Sensitive</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Summary */}
                  <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border-l-4 border-purple-400">
                    <div className="flex items-center gap-3 mb-3">
                      <Brain className="h-5 w-5 text-purple-600" />
                      <span className="font-bold text-purple-900 text-lg">🤖 AI Summary</span>
                    </div>
                    <div className="text-purple-800 font-medium text-base">
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
