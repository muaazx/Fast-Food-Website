import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, Tag, Flame, ArrowUpRight } from 'lucide-react';
import { MenuItem } from '../types';

interface SpecialOffersProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function SpecialOffers({ onAddToCart }: SpecialOffersProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); // Sets to next midnight
      const difference = midnight.getTime() - now.getTime();

      if (difference > 0) {
        return {
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Today's promotional deal object
  const promoItem: MenuItem = {
    id: 'promo-deal',
    name: "Today's Deal: Double Smash Burger + Large Fries",
    description: "Promo package: 1x Double Smash Flame Burger paired with 1x Large Golden Fries.",
    price: 599,
    category: 'combos',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  };

  return (
    <section id="offers" className="relative py-16 overflow-hidden">
      {/* Red gradient full-width background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D61D12] via-[#FF2D20] to-[#FF8000] -z-10"></div>
      
      {/* Decorative burning graphics */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-black/25 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-[30rem] h-[30rem] bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Side: Counter & Promotional Headline */}
        <div className="lg:col-span-8 text-center lg:text-left">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-4">
            {/* Pulsing hot badge */}
            <span className="inline-flex items-center space-x-1.5 px-4.5 py-1.5 rounded-full bg-white text-[#FF2D20] font-montserrat text-xs font-black tracking-widest uppercase shadow-[0_4px_15px_rgba(255,255,255,0.3)] animate-bounce">
              <Flame className="w-3.5 h-3.5 fill-[#FF2D20] text-[#FF2D20]" />
              <span>TODAY'S FLASH OFFER</span>
            </span>

            {/* Countdown Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/30 border border-white/20 font-mono text-sm font-semibold text-white">
              <Clock className="w-4 h-4 text-[#FFB800] animate-pulse" />
              <span>CLOSING IN:</span>
              <span className="text-[#FFB800] font-black">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl leading-tight text-white mb-4 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            DOUBLE SMASH BURGER + LARGE FRIES
          </h2>
          <p className="font-montserrat text-xl sm:text-2xl font-black text-[#FFB800] mb-3">
            Rs. 599 ONLY! <span className="text-white/80 line-through text-lg sm:text-xl ml-3">Rs. 930 regular</span>
          </p>
          <p className="font-inter text-white/90 max-w-2xl text-sm sm:text-base leading-relaxed">
            Grab our legendary clay-oven charred Double Smash Beef Burger packed with double cheddar slices, caramelized sweet onions, plus a jumbo bucket of our double-fried salted fries. Available till midnight!
          </p>
        </div>

        {/* Right Side: Visual Burger Promo & Action Button */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-full max-w-[280px] sm:max-w-[320px] mb-6 select-none bg-black/10 rounded-3xl p-4 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="absolute top-3 right-3 bg-[#FFB800] text-black font-extrabold text-[10px] tracking-widest px-2.5 py-1 rounded-md uppercase shadow-md">
              Save 35%
            </div>
            <img
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&q=80"
              alt="Promo Pack"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover rounded-2xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            />
          </motion.div>

          <button
            onClick={() => onAddToCart(promoItem)}
            className="w-full max-w-xs py-4 bg-black hover:bg-zinc-900 text-[#FFB800] font-montserrat font-extrabold tracking-widest uppercase rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer border-2 border-[#FFB800]"
          >
            <Tag className="w-5 h-5 text-[#FFB800]" />
            <span>CLAIM DEAL NOW</span>
            <ArrowUpRight className="w-5 h-5 text-[#FFB800]" />
          </button>
        </div>
      </div>
    </section>
  );
}
