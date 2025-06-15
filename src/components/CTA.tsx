
import { ArrowRight, Sparkles, Gift, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20 animate-bounce">
            <Gift className="h-4 w-4 text-yellow-300 animate-spin" />
            <span className="text-white/90 text-sm font-medium">🎉 FREE Beta Access - Limited Time!</span>
          </div>
          
          {/* Main CTA with staggered animation */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            <span className="block animate-[fade-in_0.8s_ease-out]">Ready to Discover</span>
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent animate-[fade-in_1.2s_ease-out]">
              Amazing Products?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto animate-[fade-in_1.6s_ease-out]">
            Join thousands exploring 3,000+ products with expert creator insights. Everything is FREE during our beta phase!
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-[fade-in_2s_ease-out]">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2">
              <Zap className="mr-2 h-5 w-5" />
              Start Exploring FREE
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm hover:scale-105 transition-all duration-300">
              Learn More
            </Button>
          </div>
          
          {/* Enhanced Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/70 animate-[fade-in_2.4s_ease-out]">
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>✨ Completely FREE</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
              <span>⚡ Instant Access</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-700"></div>
              <span>🎯 3K+ Products Ready</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl animate-[pulse_3s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/30 rounded-full blur-xl animate-[pulse_4s_ease-in-out_infinite_1s]"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/30 rounded-full blur-xl animate-[pulse_2.5s_ease-in-out_infinite_0.5s]"></div>
      <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-green-400/30 rounded-full blur-xl animate-[pulse_3.5s_ease-in-out_infinite_2s]"></div>
      <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-purple-400/20 rounded-full blur-xl animate-[pulse_4.5s_ease-in-out_infinite_1.5s]"></div>
    </div>
  );
};

export default CTA;
