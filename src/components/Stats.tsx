
import { useEffect, useState } from "react";

const stats = [
  { number: 10000, suffix: "+", label: "Active Users", color: "from-blue-500 to-cyan-500" },
  { number: 99.9, suffix: "%", label: "Uptime", color: "from-green-500 to-emerald-500" },
  { number: 150, suffix: "+", label: "Countries", color: "from-purple-500 to-pink-500" },
  { number: 24, suffix: "/7", label: "Support", color: "from-orange-500 to-red-500" }
];

const AnimatedCounter = ({ number, suffix, duration = 2000 }: { number: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * number));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [number, duration]);

  return (
    <span className="text-4xl md:text-5xl font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const Stats = () => {
  return (
    <section id="stats" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Trusted by Thousands
            <span className="block text-blue-200">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join a growing community of developers and businesses who trust our platform 
            to power their most important applications.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`text-transparent bg-gradient-to-r ${stat.color} bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300`}>
                <AnimatedCounter number={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-blue-100 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
