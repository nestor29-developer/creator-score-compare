
import { ArrowRight, PlayCircle, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20 animate-bounce">
            <TrendingUp className="h-4 w-4 text-yellow-300 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">🎉 FREE Beta Access - Join Now!</span>
          </div>
          
          {/* Main Headline with staggered animation */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            <span className="block animate-[fade-in_0.8s_ease-out]">Discover Products</span>
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent animate-[fade-in_1.2s_ease-out]">
              Like Never Before
            </span>
            <span className="block animate-[fade-in_1.6s_ease-out]">with Creator Insights</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-[fade-in_2s_ease-out]">
            Browse 3,000+ analyzed products with detailed breakdowns from 12+ trusted creators. 
            See ingredients, benefits, concerns, and real reviews all in one place - completely FREE!
          </p>
          
          {/* CTA Buttons with hover animations */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-[fade-in_2.4s_ease-out]">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              Explore Products FREE
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <PlayCircle className="mr-2 h-5 w-5" />
              See How It Works
            </Button>
          </div>
          
          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-[scale-in_1s_ease-out_2.6s_both] hover:scale-110 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">3K+</div>
              <div className="text-white/70">Products Analyzed</div>
            </div>
            <div className="text-center animate-[scale-in_1s_ease-out_2.8s_both] hover:scale-110 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">12+</div>
              <div className="text-white/70">Expert Creators</div>
            </div>
            <div className="text-center animate-[scale-in_1s_ease-out_3s_both] hover:scale-110 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/70">FREE Beta</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Floating Elements with animations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl animate-[pulse_3s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/30 rounded-full blur-xl animate-[pulse_4s_ease-in-out_infinite_1s]"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/30 rounded-full blur-xl animate-[pulse_2.5s_ease-in-out_infinite_0.5s]"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-400/20 rounded-full blur-xl animate-[pulse_3.5s_ease-in-out_infinite_2s]"></div>
    </div>
  );
};

export default Hero;
