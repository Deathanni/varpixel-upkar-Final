
const AnimatedBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-white font-semibold mx-8">🚀 Digital Transformation Experts</span>
        <span className="text-white font-semibold mx-8">💎 Premium Web Development</span>
        <span className="text-white font-semibold mx-8">📱 Mobile App Innovation</span>
        <span className="text-white font-semibold mx-8">🎯 Results-Driven Marketing</span>
        <span className="text-white font-semibold mx-8">🏆 Award-Winning Design</span>
        <span className="text-white font-semibold mx-8">⚡ Lightning-Fast Solutions</span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBanner;
