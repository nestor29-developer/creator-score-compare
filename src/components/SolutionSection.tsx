
import { CheckCircle, Zap, Brain, BarChart3, Search, Filter, Heart, Star, ThumbsUp, AlertTriangle, ArrowRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const { ref: sectionRef, hasIntersected } = useIntersectionObserver();
  const { ref: tableRef, hasIntersected: tableVisible } = useIntersectionObserver();
  const { ref: benefitsRef, hasIntersected: benefitsVisible } = useIntersectionObserver();
  const { ref: statsRef, hasIntersected: statsVisible } = useIntersectionObserver();

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See What Creators Really Think
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> About Any Product</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Compare insights from multiple creators instantly. No more watching hours of videos or reading endless reviews.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Make smarter purchasing decisions with our AI-powered platform that analyzes creator insights and helps you choose products that truly work for you.
            </p>
          </div>
          
          {/* Product Analysis Card - Mobile-First Design */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Left Side - Product Analysis */}
            <div ref={tableRef} className={`relative transition-all duration-1000 delay-300 ${tableVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-700 hover:scale-[1.02]">
                <div className="space-y-6">
                  {/* Search Bar */}
                  <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Search className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div className="flex-1 text-gray-800 font-semibold text-lg md:text-xl">The Ordinary Niacinamide Serum</div>
                  </div>
                  
                  {/* Desktop Table Header - Hidden on mobile */}
                  <div className="hidden md:grid grid-cols-4 gap-4 p-4 bg-gray-50 rounded-xl font-bold text-gray-700 text-sm border-b-2 border-gray-200">
                    <div>Creator</div>
                    <div>Sentiment</div>
                    <div>Benefits</div>
                    <div>AI Analysis</div>
                  </div>
                  
                  {/* Creator Cards - Mobile-First Design */}
                  <div className="space-y-4">
                    {/* Creator 1 - Hyram */}
                    <div className={`bg-green-50 rounded-xl border-l-4 border-green-400 hover:bg-green-100 transition-all duration-500 ${tableVisible ? 'animate-[gentle-fade-in_0.8s_ease-out_0.5s_both]' : 'opacity-0'}`}>
                      {/* Mobile Layout */}
                      <div className="md:hidden p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Hyram" className="w-10 h-10 rounded-full border-2 border-green-300" />
                            <span className="font-bold text-green-900">Hyram</span>
                          </div>
                          <div className="text-2xl">😍</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Oil Control</span>
                          <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Pore Minimizing</span>
                          <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Affordable</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/50 rounded-lg p-2">
                          <Brain className="h-4 w-4 text-purple-600" />
                          <span className="text-purple-800 text-sm font-medium">Best for oil control</span>
                        </div>
                      </div>
                      
                      {/* Desktop Layout */}
                      <div className="hidden md:grid grid-cols-4 gap-4 p-4">
                        <div className="flex items-center gap-3">
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Hyram" className="w-10 h-10 rounded-full border-2 border-green-300" />
                          <span className="font-bold text-green-900">Hyram</span>
                        </div>
                        <div className="flex items-center text-3xl">😍</div>
                        <div className="flex flex-wrap gap-1">
                          <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Oil Control</span>
                          <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Pore Minimizing</span>
                          <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Affordable</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Brain className="h-4 w-4 text-purple-600" />
                          <span className="text-purple-800 text-sm font-medium">Best for oil control</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Creator 2 - James Welsh */}
                    <div className={`bg-yellow-50 rounded-xl border-l-4 border-yellow-400 hover:bg-yellow-100 transition-all duration-500 ${tableVisible ? 'animate-[gentle-fade-in_0.8s_ease-out_0.7s_both]' : 'opacity-0'}`}>
                      {/* Mobile Layout */}
                      <div className="md:hidden p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="James Welsh" className="w-10 h-10 rounded-full border-2 border-yellow-300" />
                            <span className="font-bold text-yellow-900">James Welsh</span>
                          </div>
                          <div className="text-2xl">😐</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Effective</span>
                          <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Strong Formula</span>
                          <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Needs Caution</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/50 rounded-lg p-2">
                          <Brain className="h-4 w-4 text-purple-600" />
                          <span className="text-purple-800 text-sm font-medium">Use with moisturizer</span>
                        </div>
                      </div>
                      
                      {/* Desktop Layout */}
                      <div className="hidden md:grid grid-cols-4 gap-4 p-4">
                        <div className="flex items-center gap-3">
                          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="James Welsh" className="w-10 h-10 rounded-full border-2 border-yellow-300" />
                          <span className="font-bold text-yellow-900">James Welsh</span>
                        </div>
                        <div className="flex items-center text-3xl">😐</div>
                        <div className="flex flex-wrap gap-1">
                          <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">Effective</span>
                          <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">Strong Formula</span>
                          <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">Needs Caution</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Brain className="h-4 w-4 text-purple-600" />
                          <span className="text-purple-800 text-sm font-medium">Use with moisturizer</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Creator 3 - Caroline */}
                    <div className={`bg-orange-50 rounded-xl border-l-4 border-orange-400 hover:bg-orange-100 transition-all duration-500 ${tableVisible ? 'animate-[gentle-fade-in_0.8s_ease-out_0.9s_both]' : 'opacity-0'}`}>
                      {/* Mobile Layout */}
                      <div className="md:hidden p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" alt="Caroline" className="w-10 h-10 rounded-full border-2 border-orange-300" />
                            <span className="font-bold text-orange-900">Caroline</span>
                          </div>
                          <div className="text-2xl">😬</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Too Strong</span>
                          <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Irritating</span>
                          <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Not for Sensitive</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/50 rounded-lg p-2">
                          <Brain className="h-4 w-4 text-purple-600" />
                          <span className="text-purple-800 text-sm font-medium">Avoid if sensitive</span>
                        </div>
                      </div>
                      
                      {/* Desktop Layout */}
                      <div className="hidden md:grid grid-cols-4 gap-4 p-4">
                        <div className="flex items-center gap-3">
                          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" alt="Caroline" className="w-10 h-10 rounded-full border-2 border-orange-300" />
                          <span className="font-bold text-orange-900">Caroline</span>
                        </div>
                        <div className="flex items-center text-3xl">😬</div>
                        <div className="flex flex-wrap gap-1">
                          <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">Too Strong</span>
                          <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">Irritating</span>
                          <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">Not for Sensitive</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Brain className="h-4 w-4 text-purple-600" />
                          <span className="text-purple-800 text-sm font-medium">Avoid if sensitive</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating success indicator */}
              <div className={`absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 delay-500 ${tableVisible ? 'opacity-100 scale-100 animate-[gentle-bounce_3s_ease-in-out_infinite]' : 'opacity-0 scale-0'}`}>
                <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
            </div>
            
            {/* Right Side - Benefits */}
            <div ref={benefitsRef} className="space-y-6">
              <div className={`flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] ${benefitsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Compare Multiple Creators</h3>
                  <p className="text-blue-700">See how different creators rate the same product with detailed pros, cons, and recommendations</p>
                </div>
              </div>
              
              <div className={`flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] delay-200 ${benefitsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">AI-Powered Insights</h3>
                  <p className="text-purple-700">Get smart summaries that highlight key benefits, concerns, and best use cases for your skin type</p>
                </div>
              </div>
              
              <div className={`flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] delay-400 ${benefitsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
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

          {/* Statistics Section */}
          <div ref={statsRef} className={`text-center py-16 transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              <div className="max-w-2xl mx-auto">
                <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  90%
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Time Saved on Product Discovery
                </h3>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  Join thousands of smart shoppers who've revolutionized how they discover products from creators. 
                  Make smarter purchasing decisions with our platform that saves you hours of research.
                </p>
                <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 px-6 md:px-8 py-3 md:py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  Start Discovering Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
