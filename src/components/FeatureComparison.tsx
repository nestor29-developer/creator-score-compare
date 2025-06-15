
import { Check, X } from "lucide-react";

const FeatureComparison = () => {
  const features = [
    {
      feature: "Time to get product insights",
      traditional: "2-4 hours per product",
      ourPlatform: "3 seconds",
      traditionalIcon: "❌",
      ourIcon: "✅"
    },
    {
      feature: "Sources analyzed",
      traditional: "5-10 videos manually",
      ourPlatform: "100+ creator reviews",
      traditionalIcon: "❌",
      ourIcon: "✅"
    },
    {
      feature: "Scoring consistency",
      traditional: "Different criteria per creator",
      ourPlatform: "Standardized 10-point scale",
      traditionalIcon: "❌",
      ourIcon: "✅"
    },
    {
      feature: "Creator bias detection",
      traditional: "Manual assessment needed",
      ourPlatform: "AI-powered bias analysis",
      traditionalIcon: "❌",
      ourIcon: "✅"
    },
    {
      feature: "Product comparison",
      traditional: "Mental notes & memory",
      ourPlatform: "Side-by-side visual comparison",
      traditionalIcon: "❌",
      ourIcon: "✅"
    },
    {
      feature: "Real-time updates",
      traditional: "Manual re-research needed",
      ourPlatform: "Automatic updates",
      traditionalIcon: "❌",
      ourIcon: "✅"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Traditional vs 
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Our Platform</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI-powered approach revolutionizes the way you discover and evaluate products
            </p>
          </div>
          
          {/* Comparison Table */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-3 gap-0">
              {/* Header Row */}
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Feature</h3>
              </div>
              <div className="p-6 bg-red-50 border-b border-gray-200 border-l border-gray-200">
                <h3 className="text-lg font-semibold text-red-900">Traditional Method</h3>
              </div>
              <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 border-b border-gray-200 border-l border-gray-200">
                <h3 className="text-lg font-semibold text-purple-900">Our Platform</h3>
              </div>
              
              {/* Feature Rows */}
              {features.map((item, index) => (
                <>
                  <div key={`feature-${index}`} className="p-6 border-b border-gray-200 bg-gray-50">
                    <p className="font-medium text-gray-900">{item.feature}</p>
                  </div>
                  <div className="p-6 border-b border-gray-200 border-l border-gray-200 bg-white">
                    <div className="flex items-center gap-3">
                      <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <p className="text-gray-700">{item.traditional}</p>
                    </div>
                  </div>
                  <div className="p-6 border-b border-gray-200 border-l border-gray-200 bg-gradient-to-r from-purple-50/30 to-blue-50/30">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <p className="text-gray-700 font-medium">{item.ourPlatform}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl border border-purple-200">
              <div className="text-2xl">⚡</div>
              <div>
                <p className="text-lg font-semibold text-purple-900">Ready to revolutionize your product research?</p>
                <p className="text-purple-700">Join thousands of smart shoppers who've made the switch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparison;
