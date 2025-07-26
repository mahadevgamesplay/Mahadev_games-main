import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Shield, 
  Headphones, 
  Zap, 
  CreditCard, 
  Clock,
  Smartphone,
  TrendingUp,
  Target,
  Award
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Users,
      title: "Trusted by Millions",
      description: "With over 10+ lakh happy users, Mahadev Book is a name synonymous with reliability. Players keep coming back for our wide range of gaming options.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "100% Secure Platform",
      description: "You do not need to worry about anything because it is safe here. With this company, you can be sure that every move is safe and secure.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Headphones,
      title: "24x7 Live Support",
      description: "Wondering about something? Let us know if you have any issues or concerns. So you can play without concern, support is provided round-the-clock.",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Zap,
      title: "Instant Takeaways & Refills",
      description: "There is no more waiting in store! You never have to wait since your takeaways are instant and you can quickly restart your game.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: CreditCard,
      title: "Unlimited Daily Gameplay",
      description: "Every high score matters! Compete with other players and show off your skills on the daily and all-time leaderboards.",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Simple, Smart Interface",
      description: "Regardless of your knowledge in gameplay, our platform makes it easy for you. The website is easy to use, eye-catching and works great.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Award,
      title: "Bonuses That Keep On Giving",
      description: "Take part in fun promotions, collect points and get surprises that increase your winning in the game. Being faithful to Mahadev Book is always worthwhile!",
      gradient: "from-amber-500 to-yellow-600"
    },
    {
      icon: Target,
      title: "IDs for Every Game You Love",
      description: "For live games, virtual sports and real-time gameplay, we offer best gaming platform made just for your preferences. One platform. Endless opportunities.",
      gradient: "from-cyan-500 to-teal-600"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Multiplayer",
      description: "Try out live gaming and feel the excitement in each passing moment. Practice and win against the competition as soon as the results happen!",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: Clock,
      title: "Play Responsibly",
      description: "Responsible gaming is promoted through the use of advanced tools that guide players to play safely. Know how to play, get better rewards.",
      gradient: "from-emerald-500 to-green-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Mahadev Book</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Experience the most trusted and secure gaming platform access with premium features designed for your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group bg-white border-gray-200 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <feature.icon className="text-white text-2xl" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}