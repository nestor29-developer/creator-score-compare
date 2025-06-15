
import { Star, Users, TrendingUp, Play, Heart, Zap } from "lucide-react";

const CreatorShowcase = () => {
  const creators = [
    {
      name: "Abbey Yang",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c371?w=80&h=80&fit=crop&crop=face",
      specialty: "Body Care & Moisturizers",
      totalReviews: "150+",
      avgScore: "4.8",
      platform: "Multiple",
      featured: true
    },
    {
      name: "Dr. Shereene Idriss",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
      specialty: "Dermatology & Treatments",
      totalReviews: "200+",
      avgScore: "4.9",
      platform: "Expert Reviews",
      featured: true
    },
    {
      name: "Hyram",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      specialty: "Skincare & Ingredients",
      totalReviews: "300+",
      avgScore: "4.7",
      platform: "Social Media",
      featured: false
    },
    {
      name: "James Welsh",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      specialty: "K-Beauty & Reviews",
      totalReviews: "180+",
      avgScore: "4.6",
      platform: "YouTube",
      featured: false
    }
  ];

  return (
    <div className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Trusted by
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Expert Creators</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-[fade-in_0.8s_ease-out]">
              Our platform features detailed reviews and insights from beauty and skincare experts who know products inside and out
            </p>
          </div>
          
          {/* Creator Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {creators.map((creator, index) => (
              <div 
                key={index} 
                className={`bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-[scale-in_0.5s_ease-out_${index * 0.2}s_both] ${creator.featured ? 'ring-2 ring-yellow-400/50' : ''}`}
              >
                {creator.featured && (
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                    ⭐ Featured
                  </div>
                )}
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img 
                      src={creator.avatar} 
                      alt={creator.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500/50"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{creator.name}</h3>
                    <p className="text-sm text-gray-400">{creator.platform}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-pink-400" />
                    <span className="text-sm text-gray-300">{creator.specialty}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Play className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">{creator.totalReviews} products reviewed</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">Avg rating: {creator.avgScore}/5</span>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-700">
                    <span className="text-xs text-purple-400 font-medium flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      Active in Beta
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-[scale-in_0.8s_ease-out_1s_both] hover:scale-110 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">12+</div>
              <div className="text-gray-400">Expert Creators</div>
            </div>
            <div className="animate-[scale-in_0.8s_ease-out_1.2s_both] hover:scale-110 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">3K+</div>
              <div className="text-gray-400">Products Analyzed</div>
            </div>
            <div className="animate-[scale-in_0.8s_ease-out_1.4s_both] hover:scale-110 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Free Access</div>
            </div>
            <div className="animate-[scale-in_0.8s_ease-out_1.6s_both] hover:scale-110 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Beta</div>
              <div className="text-gray-400">Early Access</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorShowcase;
