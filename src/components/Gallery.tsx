import { motion } from 'motion/react';
import { Eye, Flame } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

export default function Gallery() {
  // Map specific bento grid span sizes to create an organic masonry layout on desktop
  const gridClasses = [
    'md:col-span-2 md:row-span-1 h-72', // Card 1
    'md:col-span-1 md:row-span-2 h-full min-h-[300px] md:min-h-full', // Card 2 (tall vertical)
    'md:col-span-1 md:row-span-1 h-72', // Card 3
    'md:col-span-1 md:row-span-1 h-72', // Card 4
    'md:col-span-2 md:row-span-1 h-72'  // Card 5
  ];

  return (
    <section id="gallery" className="relative py-24 bg-[#0D0D0D] border-t border-white/5">
      {/* Background visual spotlight */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFB800]/3 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#FF2D20] font-montserrat text-sm font-extrabold tracking-widest uppercase mb-3">
            Kitchen Aesthetics
          </p>
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide text-white mb-4">
            VISUALS FROM THE <span className="text-[#FF2D20]">SMOKE HOUSE</span>
          </h2>
          <p className="font-inter text-[#F5F5F5]/60 text-base">
            Take a look inside our kitchens. Pure fire, fresh local ingredients, artisanal craftsmanship, and hygienic preparation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr" id="gallery-grid">
          {GALLERY_ITEMS.map((item, index) => {
            // Pick a matching class layout, or fallback to col-1 row-1
            const layoutClass = gridClasses[index] || 'md:col-span-1 md:row-span-1 h-72';
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative rounded-3xl overflow-hidden group border border-white/5 hover:border-[#FF2D20]/40 transition-all duration-300 cursor-zoom-in ${layoutClass}`}
              >
                {/* Background image */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Dark/Translucent Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  
                  {/* Floating Action icon */}
                  <div className="absolute top-4 right-4 bg-[#FF2D20] text-white p-2 rounded-full translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                    <Eye className="w-4 h-4" />
                  </div>

                  {/* Text details */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-[#FF2D20]/20 text-[#FF2D20] text-[9px] font-bold tracking-widest uppercase font-montserrat mb-2">
                      <Flame className="w-2.5 h-2.5 fill-[#FF2D20]" />
                      <span>{item.category}</span>
                    </span>
                    <h3 className="font-bebas text-2xl sm:text-3xl tracking-wide text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Ambient glow on hover */}
                <div className="absolute inset-0 border border-[#FF2D20]/0 group-hover:border-[#FF2D20]/40 rounded-3xl transition-colors duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
