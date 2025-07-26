import { Button } from "@/components/ui/button";
import { MessageCircle, Star, Trophy, Shield, Zap } from "lucide-react";

export default function Hero() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I want to get my Mahadev Book Entertainment ID for premium gaming access. Please provide me with the details.");
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "1234567890";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const features = [
    { icon: Star, text: "10+ Lakh Happy Users" },
    { icon: Shield, text: "100% Secure Platform" },
    { icon: Zap, text: "Instant Withdrawals" },
    { icon: Trophy, text: "Best Odds Guaranteed" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-full border border-amber-400/30 mb-8">
              <Star className="text-amber-400 mr-2 h-5 w-5" />
              <span className="text-amber-400 font-semibold">India's #1 Trusted Platform</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Get Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                Mahadev Book ID
              </span>{" "}
              in Minutes
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Join millions of satisfied users on India's most trusted gaming platform. 
              Get instant access to cricket games, live color challenges, sports and more with 
              complete security and 24/7 support.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300">
                  <feature.icon className="text-amber-400 h-5 w-5" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:justify-start justify-center">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Get Online Cricket ID
              </Button>
              
              <div className="text-center sm:text-left">
                <p className="text-gray-400 text-sm">
                  <Shield className="inline mr-1 h-4 w-4" />
                  100% Safe & Secure
                </p>
                <p className="text-amber-400 text-sm font-semibold">
                  ⚡ Instant Setup • 24/7 Support
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-black font-bold text-3xl">M</span>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">MAHADEV BOOK</h3>
                  <p className="text-amber-400 font-semibold">King of Online World</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-lg p-4 border border-green-500/30">
                    <div className="text-green-400 font-bold text-lg">10L+</div>
                    <div className="text-gray-400 text-sm">Happy Users</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-600/20 rounded-lg p-4 border border-blue-500/30">
                    <div className="text-blue-400 font-bold text-lg">99.9%</div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-violet-600/20 rounded-lg p-4 border border-purple-500/30">
                    <div className="text-purple-400 font-bold text-lg">24/7</div>
                    <div className="text-gray-400 text-sm">Support</div>
                  </div>
                  <div className="bg-gradient-to-r from-amber-500/20 to-yellow-600/20 rounded-lg p-4 border border-amber-500/30">
                    <div className="text-amber-400 font-bold text-lg">Instant</div>
                    <div className="text-gray-400 text-sm">Withdrawals</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-lg p-4 border border-gray-600">
                  <p className="text-white font-semibold mb-2">Quick Registration Process:</p>
                  <div className="text-gray-400 text-sm space-y-1">
                    <div>✓ WhatsApp Contact</div>
                    <div>✓ Instant Verification</div>
                    <div>✓ Start Gaming</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-xl opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
}