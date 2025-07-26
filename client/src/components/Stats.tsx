import { Users, Trophy, Star, Shield } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: "10+ Lakh",
      label: "Happy Users",
      description: "Trusted by millions across India",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Trophy,
      number: "99.9%",
      label: "Success Rate",
      description: "Highest winning satisfaction",
      gradient: "from-amber-500 to-yellow-600"
    },
    {
      icon: Star,
      number: "24/7",
      label: "Live Support",
      description: "Round-the-clock assistance",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Secure Platform",
      description: "Advanced security measures",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Millions Trust</span> Mahadev Book?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join the largest community of satisfied users who have made Mahadev Book their preferred gaming platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="text-white text-2xl" size={32} />
                </div>
                
                <div className="space-y-3">
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold text-amber-600 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="text-green-400 h-5 w-5" />
              <span className="text-sm">SSL Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="text-amber-400 h-5 w-5" />
              <span className="text-sm">Award Winning Platform</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="text-purple-400 h-5 w-5" />
              <span className="text-sm">5-Star Rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="text-blue-400 h-5 w-5" />
              <span className="text-sm">Trusted Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}