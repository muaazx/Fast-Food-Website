import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Award, Flame, Star, Coffee } from 'lucide-react';

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix = '', duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = target;
    const stepTime = 15;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <div ref={ref} className="font-bebas text-5xl sm:text-6xl text-white tracking-wider font-extrabold">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

function AnimatedDecimalCounter({ target, suffix = '', duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = target * 10;
    const stepTime = 15;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.round(start) / 10);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <div ref={ref} className="font-bebas text-5xl sm:text-6xl text-white tracking-wider font-extrabold">
      {count.toFixed(1)}{suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0D0D0D]">
      {/* Background radial soft light */}
      <div className="absolute top-1/3 right-10 w-[40rem] h-[40rem] bg-[#FFB800]/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Bold stats layout (Est. 2015 | 50K+ Orders | 4.9★ Rating) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="col-span-2 p-8 rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#121212] border border-white/5 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex items-center space-x-6 hover:border-[#FF2D20]/20 transition-colors duration-300"
          >
            <div className="p-4 rounded-2xl bg-[#FF2D20]/10 border border-[#FF2D20]/20 text-[#FF2D20]">
              <Flame className="w-8 h-8 fill-[#FF2D20]" />
            </div>
            <div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-[#F5F5F5]/40 font-montserrat mb-1">Established</div>
              <AnimatedCounter target={2015} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#121212] border border-white/5 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:border-[#FFB800]/20 transition-colors duration-300"
          >
            <div className="p-3.5 rounded-2xl bg-[#FFB800]/10 border border-[#FFB800]/20 text-[#FFB800] w-fit mb-6">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-extrabold tracking-widest text-[#F5F5F5]/40 font-montserrat mb-1">Total Orders</div>
              <AnimatedCounter target={50} suffix="K+" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#121212] border border-white/5 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:border-[#FF2D20]/20 transition-colors duration-300"
          >
            <div className="p-3.5 rounded-2xl bg-[#FF2D20]/10 border border-[#FF2D20]/20 text-[#FF2D20] w-fit mb-6">
              <Star className="w-6 h-6 fill-[#FF2D20]" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-extrabold tracking-widest text-[#F5F5F5]/40 font-montserrat mb-1">User Rating</div>
              <AnimatedDecimalCounter target={4.9} suffix="★" />
            </div>
          </motion.div>

        </div>

        {/* Right Column: Brand Narrative Text */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-[#FF2D20] font-montserrat text-sm font-extrabold tracking-widest uppercase mb-3 text-center lg:text-left"
          >
            The FireBite Story
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-5xl sm:text-6xl tracking-wide text-white mb-6 text-center lg:text-left"
          >
            BORN IN SMOKE, <span className="text-[#FF2D20]">CRAFTED FOR THE BOLD</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="font-inter text-[#F5F5F5]/80 space-y-6 text-base leading-relaxed"
          >
            <p>
              FireBite started back in 2015 as a tiny food truck in Lahore with one simple goal: to break the monotony of bland, frozen fast food patties. We wanted to offer real, premium, smash-grilled burgers infused with authentic local spices and smoke.
            </p>
            <p>
              Every single patty we serve is made from 100% premium local beef and poultry, never frozen, and ground fresh every single morning. We seal our juices by double-smashing them over searing open fire coals, achieving those gorgeous crispy, lacey edges that lock in the flavor.
            </p>
            <p className="font-semibold text-white">
              We do not cut corners. We build flavor. That’s why we signature-brand every single toasted brioche bun with the FireBite emblem before it leaves our kitchen.
            </p>
          </motion.div>

          {/* Quick core values row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5 text-center"
          >
            <div>
              <div className="font-bebas text-xl text-[#FFB800] tracking-wider">FRESH DAILY</div>
              <div className="text-[10px] uppercase tracking-wider text-white/50 font-inter">Buns & Patties</div>
            </div>
            <div>
              <div className="font-bebas text-xl text-[#FF2D20] tracking-wider">OPEN FIRE</div>
              <div className="text-[10px] uppercase tracking-wider text-white/50 font-inter">Charcoal grill</div>
            </div>
            <div>
              <div className="font-bebas text-xl text-[#FFB800] tracking-wider">FAST DELIVERY</div>
              <div className="text-[10px] uppercase tracking-wider text-white/50 font-inter">Hot & Crispy</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
