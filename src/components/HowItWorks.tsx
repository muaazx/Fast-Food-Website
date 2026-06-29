import { motion } from 'motion/react';
import { ChefHat, MapPin, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Pick Your Meal',
      description: 'Explore our sauce-infused menu of gourmet artisanal pizzas, smash burgers, wraps, and loaded platters.',
      icon: ChefHat,
      color: '#FF2D20',
      shadow: 'rgba(255, 45, 32, 0.25)'
    },
    {
      step: '02',
      title: 'Enter Location',
      description: 'Provide your precise location coordinates in Lahore or Karachi for our nearest smoke-house kitchen.',
      icon: MapPin,
      color: '#FFB800',
      shadow: 'rgba(255, 184, 0, 0.25)'
    },
    {
      step: '03',
      title: 'Fast Delivery',
      description: 'Receive your order screamingly hot and crisp within 30 minutes, or the order is entirely free!',
      icon: Zap,
      color: '#00E676',
      shadow: 'rgba(0, 230, 118, 0.25)'
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-[#0D0D0D] border-t border-white/5 overflow-hidden">
      {/* Background ambient lights */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#FF2D20]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Title block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-[#FF2D20] font-montserrat text-sm font-extrabold tracking-widest uppercase mb-3"
          >
            Screaming Hot Service
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-5xl sm:text-6xl tracking-wide text-white"
          >
            HOW WE GET THE <span className="text-[#FFB800]">SAUCE TO YOU</span>
          </motion.h2>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 z-10">
          
          {/* Connecting Animated Dashed Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-white/10 -z-10 overflow-hidden">
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#FF2D20] to-transparent"
            />
          </div>

          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group relative"
              >
                {/* Visual Step bubble with icon */}
                <div className="relative mb-6">
                  {/* Outer glow circle */}
                  <div
                    className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"
                    style={{ backgroundColor: item.color }}
                  ></div>

                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center border bg-[#1A1A1A] transition-all duration-300 group-hover:scale-110 shadow-lg"
                    style={{
                      borderColor: `${item.color}30`,
                      boxShadow: `0 10px 20px ${item.shadow}`
                    }}
                  >
                    <IconComponent
                      className="w-9 h-9 transition-transform duration-300 group-hover:rotate-6"
                      style={{ color: item.color }}
                    />
                  </div>

                  {/* Absolute Step Number Bubble */}
                  <div
                    className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full flex items-center justify-center font-bebas text-sm text-black font-extrabold shadow-md"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.step}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="font-bebas text-2xl text-white tracking-wider mb-3 group-hover:text-[#FFB800] transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="font-inter text-sm text-[#F5F5F5]/60 max-w-xs leading-relaxed">
                  {item.description}
                </p>

                {/* Animated progress pointer inside cards (mobile only / decorative) */}
                <div className="md:hidden mt-4 text-[#FF2D20] font-bebas text-lg tracking-wider group-hover:scale-105 transition-transform duration-300">
                  {index < 2 && '⬇️'}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
