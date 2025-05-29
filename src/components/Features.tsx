
import { Rocket, Shield, Zap, Globe, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Built for speed with modern technologies and optimized performance that scales with your growth.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Enterprise-grade security with end-to-end encryption and compliance with industry standards.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "AI-Powered",
    description: "Intelligent automation and smart insights that help you make better decisions faster.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with our distributed infrastructure and CDN for optimal performance.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with real-time collaboration tools and shared workspaces.",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description: "Beautiful, intuitive interfaces that delight users and drive engagement.",
    gradient: "from-pink-500 to-purple-500"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Build & Scale
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to help you create, deploy, and manage applications 
            with confidence and ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/40 hover:border-white/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
