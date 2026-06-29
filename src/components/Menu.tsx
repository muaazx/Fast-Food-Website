import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Flame, Star, ArrowUpRight } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function Menu({ onAddToCart }: MenuProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'burgers' | 'wraps' | 'sides' | 'drinks' | 'combos'>('burgers');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlySpicy, setOnlySpicy] = useState(false);
  const [onlyPopular, setOnlyPopular] = useState(false);

  const tabs: { id: typeof activeTab; name: string }[] = [
    { id: 'all', name: 'All' },
    { id: 'burgers', name: 'Burgers 🍔' },
    { id: 'wraps', name: 'Wraps 🌯' },
    { id: 'sides', name: 'Sides 🍟' },
    { id: 'drinks', name: 'Drinks 🥤' },
    { id: 'combos', name: 'Combos 🍱' }
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpicy = !onlySpicy || item.isSpicy;
    const matchesPopular = !onlyPopular || item.isPopular;

    return matchesTab && matchesSearch && matchesSpicy && matchesPopular;
  });

  return (
    <section id="menu" className="relative py-24 bg-[#0D0D0D] border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-[#FF2D20]/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-[#FF2D20] font-montserrat text-sm font-extrabold tracking-widest uppercase mb-3"
          >
            Sizzle & Crunch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-5xl sm:text-6xl tracking-wide text-white mb-4"
          >
            DISCOVER THE <span className="text-[#FFB800]">SAUCY MENU</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="font-inter text-[#F5F5F5]/60 text-base"
          >
            Choose from our premium wood-smoked beef burgers, crispy double-fried chicken zingers, golden sides, and ice-cold margaritas. Crafted fresh, customized with our signature sauces.
          </motion.p>
        </div>

        {/* Search and Filters Block */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center items-center gap-2 bg-[#141414] p-1.5 rounded-full border border-white/5 w-full lg:w-auto max-w-full overflow-x-auto scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full font-montserrat text-xs font-bold tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#FF2D20] text-white shadow-[0_4px_15px_rgba(255,45,32,0.3)] scale-105'
                    : 'text-[#F5F5F5]/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Search bar & quick filters */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-white/40" />
              <input
                type="text"
                placeholder="Search food items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1A1A1A] border border-white/10 hover:border-white/20 focus:border-[#FF2D20] rounded-full pl-10 pr-4 py-2.5 text-sm text-white font-inter outline-none transition-colors duration-300"
              />
            </div>

            {/* Quick checkbox triggers */}
            <div className="flex items-center space-x-4 w-full sm:w-auto justify-center">
              <button
                onClick={() => setOnlySpicy(!onlySpicy)}
                className={`px-4 py-2 rounded-full border text-xs font-bold font-montserrat transition-all duration-300 flex items-center space-x-1 cursor-pointer ${
                  onlySpicy
                    ? 'bg-[#FF2D20]/20 border-[#FF2D20] text-[#FF2D20]'
                    : 'bg-[#1A1A1A] border-white/10 text-white/60 hover:text-white'
                }`}
              >
                <span>🌶️ Spicy Only</span>
              </button>
              <button
                onClick={() => setOnlyPopular(!onlyPopular)}
                className={`px-4 py-2 rounded-full border text-xs font-bold font-montserrat transition-all duration-300 flex items-center space-x-1 cursor-pointer ${
                  onlyPopular
                    ? 'bg-[#FFB800]/20 border-[#FFB800] text-[#FFB800]'
                    : 'bg-[#1A1A1A] border-white/10 text-white/60 hover:text-white'
                }`}
              >
                <span>⭐ Popular</span>
              </button>
            </div>
          </div>
        </div>

        {/* Menu Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="menu-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="relative rounded-3xl overflow-hidden bg-[#1A1A1A] border border-white/5 hover:border-[#FF2D20]/30 hover:shadow-[0_15px_35px_rgba(255,45,32,0.15)] group transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Showcase */}
                <div className="relative h-56 overflow-hidden bg-zinc-900">
                  {/* Glowing upper-left gradient */}
                  <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/60 to-transparent z-10"></div>
                  
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlaid Badges */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    {item.isSpicy && (
                      <span className="bg-[#FF2D20] text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-[0_2px_10px_rgba(255,45,32,0.4)] flex items-center space-x-1">
                        <span>🌶️ FIERY SPICY</span>
                      </span>
                    )}
                    {item.isPopular && (
                      <span className="bg-[#FFB800] text-black text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-[0_2px_10px_rgba(255,184,0,0.4)] flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-black inline" />
                        <span>BEST SELLER</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Item Title & Category */}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bebas text-2xl tracking-wider text-white group-hover:text-[#FFB800] transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="text-[10px] font-black text-[#FF2D20]/80 tracking-widest uppercase bg-[#FF2D20]/10 px-2 py-0.5 rounded-md">
                        {item.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-inter text-xs text-[#F5F5F5]/60 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer - Price & Add To Cart Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest font-montserrat text-[#F5F5F5]/40 font-bold">Price</span>
                      <span className="font-bebas text-2xl text-[#FFB800] tracking-wide">
                        Rs. {item.price}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => onAddToCart(item)}
                      className="px-5 py-2.5 bg-[#FF2D20]/10 hover:bg-[#FF2D20] text-[#FF2D20] hover:text-white border border-[#FF2D20]/20 hover:border-[#FF2D20] rounded-full font-montserrat text-xs font-extrabold tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-1.5 cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_15px_rgba(255,45,32,0.3)]"
                    >
                      <span>ADD +</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Fallback */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-[#1A1A1A] rounded-3xl border border-white/5 max-w-xl mx-auto"
          >
            <Flame className="w-12 h-12 text-[#FF2D20]/40 mx-auto mb-4" />
            <h3 className="font-bebas text-2xl text-white tracking-wider mb-2">NO DISHES MATCH YOUR CRITERIA</h3>
            <p className="font-inter text-sm text-[#F5F5F5]/60 px-6">
              Our ovens are hot but we couldn't find matches for "{searchQuery}". Try exploring other categories or clearing your active filters.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
