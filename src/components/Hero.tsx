import { Flame, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  // Generate random values for sparks to make it look truly organic
  const sparks = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${6 + Math.random() * 6}s`,
    size: `${Math.random() * 6 + 2}px`
  }));

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#0D0D0D]"
    >
      {/* Background Gradients & Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-[#FF2D20]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[30rem] h-[30rem] bg-[#FFB800]/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Floating Sparkles Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {sparks.map((spark) => (
          <div
            key={spark.id}
            className="absolute bg-gradient-to-t from-[#FF2D20] to-[#FFB800] rounded-full opacity-0 spark-animate"
            style={{
              left: spark.left,
              bottom: '-10px',
              width: spark.size,
              height: spark.size,
              animationDelay: spark.delay,
              animationDuration: spark.duration,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Copy */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="border-l-3 border-[#FFB800] pl-3.5 text-left mb-6 w-fit mx-auto lg:mx-0"
          >
            <div className="flex items-center space-x-1.5">
              <Flame className="w-4 h-4 text-[#FF2D20] fill-[#FF2D20] animate-pulse" />
              <span className="font-montserrat text-xs font-extrabold tracking-widest text-[#FFB800] uppercase">
                100% Charcoal-Grilled Smoke
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bebas text-7xl sm:text-8xl md:text-9xl leading-[0.9] tracking-tight text-white mb-6"
          >
            TASTE <span className="text-[#FF2D20] relative inline-block">THE BOLD<span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFB800]/20 -z-10"></span></span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-montserrat text-lg sm:text-xl md:text-2xl font-bold text-[#F5F5F5] mb-4"
          >
            Freshly Made. <span className="text-[#FFB800]">Dangerously Delicious.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-inter text-[#F5F5F5]/70 max-w-xl mx-auto lg:mx-0 mb-10 text-base leading-relaxed"
          >
            Experience the ultimate flavor bomb with our signature Pakistani wood-fired gourmet pizzas and burgers. Fresh ingredients, hand-pressed cheddar, and custom-sauced crusts baked daily.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={() => onNavigate('menu')}
              className="w-full sm:w-auto px-8 py-4 bg-[#FF2D20] hover:bg-[#D61D12] text-white font-montserrat font-extrabold tracking-widest uppercase rounded-full shadow-[0_4px_20px_rgba(255,45,32,0.4)] hover:shadow-[0_4px_30px_rgba(255,45,32,0.7)] hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('offers')}
              className="w-full sm:w-auto px-8 py-4 border-2 border-[#FFB800] hover:bg-[#FFB800]/10 text-[#FFB800] font-montserrat font-extrabold tracking-widest uppercase rounded-full hover:shadow-[0_4px_25px_rgba(255,184,0,0.3)] hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Today's Offers</span>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </button>
          </motion.div>

          {/* Quick trust metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-[#F5F5F5]/60 font-inter"
          >
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-5 h-5 text-[#FF2D20]" />
              <span>Hygienically Sourced Beef</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-5 h-5 text-[#FF2D20]" />
              <span>No Frozen Patties</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-5 h-5 text-[#FF2D20]" />
              <span>30 Min Hot Delivery Guarantee</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Burger Showcase */}
        <div className="lg:col-span-5 flex justify-center items-center relative select-none">
          {/* Sizzling Aura under burger */}
          <div className="absolute w-[80%] h-[80%] rounded-full bg-[#FF2D20]/25 blur-[60px] animate-pulse pointer-events-none -z-10"></div>
          <div className="absolute w-[60%] h-[60%] rounded-full bg-[#FFB800]/20 blur-[50px] animate-pulse pointer-events-none -z-10"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', damping: 15, stiffness: 60, delay: 0.2 }}
            className="relative max-w-[420px] sm:max-w-[480px]"
          >
            {/* Spinning decorative ring */}
            <div className="absolute inset-0 border border-dashed border-white/10 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none scale-110"></div>
            
            <img
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80"
              alt="Pizza Saucy Gourmet Pizza & Burger"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain drop-shadow-[0_15px_50px_rgba(255,45,32,0.5)] hover:rotate-3 hover:scale-105 transition-all duration-500 cursor-grab active:cursor-grabbing"
            />
            
            {/* Overlay Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute top-1/4 -right-4 sm:-right-8 bg-[#1A1A1A] border border-[#FFB800]/30 px-4 py-2.5 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            >
              <div className="text-[10px] font-bold text-[#FFB800] tracking-wider uppercase font-montserrat">Spicy Level</div>
              <div className="font-bebas text-xl text-white tracking-wide">🌶️ EXTREME FLAME</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 sm:-left-8 bg-[#FF2D20] text-white px-5 py-3 rounded-2xl shadow-[0_10px_20px_rgba(255,45,32,0.3)]"
            >
              <div className="text-[10px] font-bold text-white/80 tracking-wider uppercase font-montserrat">Hot Price</div>
              <div className="font-bebas text-2xl tracking-wide">Rs. 490 only!</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
