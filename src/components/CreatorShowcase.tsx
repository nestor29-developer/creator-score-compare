
import { Star, Users, TrendingUp, Play } from "lucide-react";

const CreatorShowcase = () => {
  const creators = [
    {
      name: "TechReviewer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      specialty: "Tech & Gadgets",
      followers: "2.3M",
      videosAnalyzed: 1250,
      avgScore: 8.4,
      platform: "YouTube"
    },
    {
      name: "LifestyleLena",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c371?w=80&h=80&fit=crop&crop=face",
      specialty: "Lifestyle & Beauty",
      followers: "1.8M",
      videosAnalyzed: 890,
      avgScore: 9.1,
      platform: "TikTok"
    },
    {
      name: "GadgetGuru",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      specialty: "Consumer Electronics",
      followers: "3.1M",
      videosAnalyzed: 2100,
      avgScore: 8.8,
      platform: "YouTube"
    },
    {
      name: "HomeHacker",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      specialty: "Home & Garden",
      followers: "950K",
      videosAnalyzed: 420,
      avgScore: 8.6,
      platform: "Instagram"
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by Top 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Creators</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We analyze content from thousands of trusted creators across all major platforms to give you the most comprehensive product insights
            </p>
          </div>
          
          {/* Creator Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {creators.map((creator, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={creator.avatar} 
                    alt={creator.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{creator.name}</h3>
                    <p className="text-sm text-gray-400">{creator.platform}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-gray-300">{creator.followers} followers</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Play className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">{creator.videosAnalyzed} videos analyzed</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">Avg score: {creator.avgScore}/10</span>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-700">
                    <span className="text-xs text-purple-400 font-medium">{creator.specialty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Creators Tracked</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10M+</div>
              <div className="text-gray-400">Videos Analyzed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500K+</div>
              <div className="text-gray-400">Products Reviewed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Real-time Updates</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorShowcase;
