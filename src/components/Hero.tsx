import { ArrowRight, PlayCircle, Star, TrendingUp, Sparkles, Brain, Users, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Hero = () => {
  const { ref: heroRef, hasIntersected } = useIntersectionObserver();

  return (
    <div ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Floating AI-themed elements with movement */}
      <div className="absolute inset-0 overflow-hidden">
        {/* AI Brain Icons */}
        <div className="absolute top-1/4 left-10 animate-[float_6s_ease-in-out_infinite]">
          <Brain className="h-8 w-8 text-white/20 animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-20 animate-[float_8s_ease-in-out_infinite_2s]">
          <Brain className="h-6 w-6 text-yellow-300/30 animate-pulse" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-[float_7s_ease-in-out_infinite_1s]">
          <Brain className="h-10 w-10 text-blue-300/20 animate-pulse" />
        </div>
        
        {/* Creator/User Icons */}
        <div className="absolute top-20 right-10 animate-[float_5s_ease-in-out_infinite_3s]">
          <Users className="h-7 w-7 text-pink-300/30 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-1/3 animate-[float_9s_ease-in-out_infinite_1.5s]">
          <Users className="h-6 w-6 text-green-300/30 animate-pulse" />
        </div>
        
        {/* Star/Sparkle elements */}
        <div className="absolute top-1/2 left-1/3 animate-[sparkle_4s_ease-in-out_infinite]">
          <Sparkles className="h-5 w-5 text-yellow-400/40" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-[sparkle_6s_ease-in-out_infinite_2s]">
          <Sparkles className="h-7 w-7 text-orange-300/30" />
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl animate-[pulse_3s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/30 rounded-full blur-xl animate-[pulse_4s_ease-in-out_infinite_1s]"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/30 rounded-full blur-xl animate-[pulse_2.5s_ease-in-out_infinite_0.5s]"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-400/20 rounded-full blur-xl animate-[pulse_3.5s_ease-in-out_infinite_2s]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Badge */}
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20 transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <TrendingUp className="h-4 w-4 text-yellow-300 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">🚀 Advanced AI-Powered Analysis</span>
          </div>
          
          {/* Main Headline with staggered animation */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className={`block transition-all duration-1000 delay-200 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Get Instant</span>
            <span className={`block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent transition-all duration-1000 delay-400 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              AI-Analyzed
            </span>
            <span className={`block transition-all duration-1000 delay-600 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Product Insights from Creators</span>
          </h1>
          
          {/* Subheadline */}
          <p className={`text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-800 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Skip the endless research! Our advanced AI analyzes creator recommendations and gives you 
            detailed breakdowns, benefits, ingredients, and reviews - all in one place.
          </p>
          
          {/* CTA Button with enhanced animations */}
          <div className={`flex justify-center items-center mb-16 transition-all duration-1000 delay-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-pulse hover:animate-none relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">🎉 FREE Beta Access - Join Now!</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Button>
          </div>
          
          {/* New Feature Section - Similar to screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className={`text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:scale-105 transition-all duration-500 delay-1200 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-10 w-10 text-yellow-300" />
              </div>
              <div className="text-2xl font-bold text-white mb-4">AI Analysis</div>
              <div className="text-white/80 text-lg leading-relaxed">Advanced algorithms process creator insights and deliver personalized recommendations</div>
            </div>
            <div className={`text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:scale-105 transition-all duration-500 delay-1400 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-20 h-20 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-blue-300" />
              </div>
              <div className="text-2xl font-bold text-white mb-4">Creator Insights</div>
              <div className="text-white/80 text-lg leading-relaxed">Real reviews from trusted creators with detailed breakdowns and honest opinions</div>
            </div>
            <div className={`text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:scale-105 transition-all duration-500 delay-1600 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-20 h-20 bg-pink-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-10 w-10 text-pink-300" />
              </div>
              <div className="text-2xl font-bold text-white mb-4">Instant Results</div>
              <div className="text-white/80 text-lg leading-relaxed">Get detailed insights in seconds and save hours of research time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
