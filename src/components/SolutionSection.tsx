
import { CheckCircle, Zap, Brain, BarChart3 } from "lucide-react";

const SolutionSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The AI-Powered 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Solution</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform analyzes thousands of creator videos instantly, giving you comprehensive product insights in seconds
            </p>
          </div>
          
          {/* Solution Illustration */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Visual */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100">
                <div className="space-y-6">
                  {/* Search Bar */}
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 text-gray-700">iPhone 15 Pro review</div>
                  </div>
                  
                  {/* AI Analysis */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <Brain className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-green-900">AI Analysis Complete</div>
                        <div className="text-sm text-green-700">Processed 247 creator reviews</div>
                      </div>
                    </div>
                    
                    {/* Aggregate Score */}
                    <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
                      <div className="flex items-center justify-between mb-4">
                        <div className="font-semibold text-gray-900">Overall Score</div>
                        <div className="text-3xl font-bold text-purple-600">8.7/10</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Camera Quality</span>
                          <span className="font-semibold">9.2/10</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Battery Life</span>
                          <span className="font-semibold">8.5/10</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Performance</span>
                          <span className="font-semibold">9.8/10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">3 Seconds</div>
                  <div className="text-gray-600">Complete Analysis</div>
                </div>
              </div>
              
              {/* Floating success indicator */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            
            {/* Right Side - Benefits */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-blue-100">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Instant AI Analysis</h3>
                  <p className="text-blue-700">Get comprehensive product insights from hundreds of creator reviews in seconds, not hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-blue-100">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Unified Scoring System</h3>
                  <p className="text-purple-700">Compare products with standardized scores across all creators, categories, and features</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-blue-100">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Smart Recommendations</h3>
                  <p className="text-green-700">AI understands context, sentiment, and nuance to give you the most relevant product insights</p>
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
