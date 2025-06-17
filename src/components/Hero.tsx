
import { ArrowRight, PlayCircle, Star, TrendingUp, Sparkles, Brain, Users, LogIn, Shield, Zap, Target, CheckCircle } from "lucide-react";
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
      
      {/* Floating AI-themed elements with much slower movement - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {/* AI Brain Icons */}
        <div className="absolute top-1/4 left-10 animate-[float_50s_ease-in-out_infinite]">
          <Brain className="h-8 w-8 text-white/20 animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-20 animate-[float_55s_ease-in-out_infinite_6s]">
          <Brain className="h-6 w-6 text-yellow-300/30 animate-pulse" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-[float_52s_ease-in-out_infinite_3s]">
          <Brain className="h-10 w-10 text-blue-300/20 animate-pulse" />
        </div>
        
        {/* Creator/User Icons */}
        <div className="absolute top-20 right-10 animate-[float_48s_ease-in-out_infinite_9s]">
          <Users className="h-7 w-7 text-pink-300/30 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-1/3 animate-[float_58s_ease-in-out_infinite_5s]">
          <Users className="h-6 w-6 text-green-300/30 animate-pulse" />
        </div>
        
        {/* Star/Sparkle elements */}
        <div className="absolute top-1/2 left-1/3 animate-[sparkle_45s_ease-in-out_infinite]">
          <Sparkles className="h-5 w-5 text-yellow-400/40" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-[sparkle_50s_ease-in-out_infinite_7s]">
          <Sparkles className="h-7 w-7 text-orange-300/30" />
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl animate-[pulse_42s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/30 rounded-full blur-xl animate-[pulse_46s_ease-in-out_infinite_4s]"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/30 rounded-full blur-xl animate-[pulse_40s_ease-in-out_infinite_2s]"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-400/20 rounded-full blur-xl animate-[pulse_44s_ease-in-out_infinite_6s]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Badge with slower gentle bounce */}
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 mb-6 md:mb-8 border border-white/20 transition-all duration-1000 animate-[gentle-bounce_6s_ease-in-out_infinite] ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-yellow-300 animate-pulse" />
            <span className="text-white/90 text-xs md:text-sm font-medium">🚀 Advanced AI-Powered Smart Product Archive</span>
          </div>
          
          {/* Main Headline with staggered animation */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight px-2">
            <span className={`block transition-all duration-1000 delay-200 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Browse Advanced</span>
            <span className={`block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent transition-all duration-1000 delay-400 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              AI-Analyzed
            </span>
            <span className={`block transition-all duration-1000 delay-600 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Creator Product Reviews</span>
          </h1>
          
          {/* Subheadline */}
          <p className={`text-base md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-800 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Stop wasting hours watching endless videos and making wrong purchases! Browse our comprehensive Smart Product Archive of creator recommendations 
            with detailed breakdowns, benefits, ingredients, and reviews - all pre-analyzed by powerful AI technology.
          </p>
          
          {/* CTA Button with enhanced animations */}
          <div className={`flex justify-center items-center mb-12 md:mb-16 px-4 transition-all duration-1000 delay-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-pulse hover:animate-none relative overflow-hidden group w-full max-w-sm md:w-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-sm md:text-base">🎉 FREE Beta Access - Browse Now!</span>
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Button>
          </div>
          
          {/* Feature Cards - 2x2 grid on mobile, 4 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto px-2">
            <div className={`text-center p-4 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-700 hover:scale-105 animate-[gentle-float_45s_ease-in-out_infinite] delay-1200 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-8 h-8 md:w-6 md:h-6 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-2">
                <Brain className="h-4 w-4 md:h-3 md:w-3 text-yellow-300" />
              </div>
              <div className="text-base md:text-sm font-semibold text-white mb-2 md:mb-1">Advanced AI Smart Product Archive</div>
              <div className="text-white/70 text-sm md:text-xs leading-relaxed">Powerful AI has pre-analyzed creator reviews and recommendations</div>
            </div>
            
            <div className={`text-center p-4 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-700 hover:scale-105 animate-[gentle-float_60s_ease-in-out_infinite_12s] delay-1400 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-8 h-8 md:w-6 md:h-6 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-2">
                <Users className="h-4 w-4 md:h-3 md:w-3 text-blue-300" />
              </div>
              <div className="text-base md:text-sm font-semibold text-white mb-2 md:mb-1">Creator Insights</div>
              <div className="text-white/70 text-sm md:text-xs leading-relaxed">Browse reviews from trusted creators with detailed breakdowns and honest opinions</div>
            </div>
            
            <div className={`text-center p-4 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-700 hover:scale-105 animate-[gentle-float_50s_ease-in-out_infinite_6s] delay-1600 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-8 h-8 md:w-6 md:h-6 bg-pink-400/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-2">
                <Sparkles className="h-4 w-4 md:h-3 md:w-3 text-pink-300" />
              </div>
              <div className="text-base md:text-sm font-semibold text-white mb-2 md:mb-1">Instant Search</div>
              <div className="text-white/70 text-sm md:text-xs leading-relaxed">Find products instantly with our smart search and filtering system</div>
            </div>
            
            <div className={`text-center p-4 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-700 hover:scale-105 animate-[gentle-float_55s_ease-in-out_infinite_18s] delay-1800 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-8 h-8 md:w-6 md:h-6 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-2">
                <CheckCircle className="h-4 w-4 md:h-3 md:w-3 text-green-300" />
              </div>
              <div className="text-base md:text-sm font-semibold text-white mb-2 md:mb-1">Smart Decisions</div>
              <div className="text-white/70 text-sm md:text-xs leading-relaxed">Make confident purchases backed by comprehensive pre-analyzed data</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
