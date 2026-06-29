import { useState, FormEvent } from 'react';
import { Flame, Mail, Send, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-20 pb-10">
      {/* Immersive UI Footer Stats Bar */}
      <div className="border-b border-white/5 pb-12 mb-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-between">
          <div className="flex items-center space-x-4 justify-center md:justify-start">
            <div className="font-bebas text-4xl text-[#FF2D20]">50K+</div>
            <div className="text-[10px] uppercase font-montserrat text-[#A0A0A0] tracking-widest font-extrabold">Orders Served</div>
          </div>
          <div className="flex items-center space-x-4 justify-center md:justify-start">
            <div className="font-bebas text-4xl text-[#FFB800]">4.9★</div>
            <div className="text-[10px] uppercase font-montserrat text-[#A0A0A0] tracking-widest font-extrabold">Customer Rating</div>
          </div>
          
          <div className="lg:col-span-2 flex flex-wrap items-center justify-center lg:justify-end gap-3 md:gap-4 text-[10px] md:text-xs font-montserrat font-bold text-[#A0A0A0]">
            <div className="flex items-center space-x-1.5">
              <span className="text-lg">🍔</span>
              <span>PICK MEAL</span>
            </div>
            <div className="w-6 md:w-10 h-0.5 bg-white/10"></div>
            <div className="flex items-center space-x-1.5">
              <span className="text-lg">📍</span>
              <span>LOCATION</span>
            </div>
            <div className="w-6 md:w-10 h-0.5 bg-white/10"></div>
            <div className="flex items-center space-x-1.5">
              <span className="text-lg">🚀</span>
              <span>FAST DELIVERY</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('hero')}>
            <Flame className="w-8 h-8 text-[#FF2D20] fill-[#FF2D20]" />
            <span className="font-bebas text-3xl tracking-wide text-white">
              PIZZA<span className="text-[#FF2D20]">SAUCY</span>
            </span>
          </div>
          <p className="font-inter text-xs text-[#F5F5F5]/50 leading-relaxed max-w-sm">
            Experience the ultimate stone-baked pizza sensation. Since 2015, Pizza Saucy has been baking artisanal crusts and crafting rich signature sauces for Pakistan's boldest food lovers.
          </p>

          {/* Minimalist newsletter */}
          <div className="pt-4">
            <h5 className="font-montserrat font-extrabold text-white text-xs uppercase tracking-wider mb-3">Join the Smoke Alert</h5>
            <form onSubmit={handleSubscribe} className="relative max-w-sm">
              <input
                type="email"
                placeholder="Enter email for hot deals..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#FF2D20] rounded-full pl-4 pr-12 py-3 text-xs text-white font-inter outline-none"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-4 bg-[#FF2D20] hover:bg-[#D61D12] text-white rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                aria-label="Subscribe"
              >
                {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              </button>
            </form>
            {subscribed && (
              <p className="font-inter text-[11px] text-[#00E676] mt-2 font-semibold">
                🔥 Successfully joined! Watch your inbox.
              </p>
            )}
          </div>
        </div>

        {/* Column 1: Quick Navigation */}
        <div className="lg:col-span-2 lg:col-start-6">
          <h4 className="font-montserrat font-black text-white text-xs uppercase tracking-widest mb-6 border-b border-white/5 pb-2">Navigation</h4>
          <ul className="space-y-3 font-inter text-xs">
            {['Menu', 'Offers', 'About', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => onNavigate(item.toLowerCase())}
                  className="text-[#F5F5F5]/60 hover:text-[#FFB800] transition-colors duration-200 cursor-pointer text-left"
                >
                  {item} Page
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Outlets in Pakistan */}
        <div className="lg:col-span-3">
          <h4 className="font-montserrat font-black text-white text-xs uppercase tracking-widest mb-6 border-b border-white/5 pb-2">Active Outlets</h4>
          <ul className="space-y-3 font-inter text-xs text-[#F5F5F5]/60">
            <li>
              <span className="text-[#FF2D20] font-bold">Lahore:</span> M.M. Alam Road, Gulberg III
            </li>
            <li>
              <span className="text-[#FF2D20] font-bold">Lahore:</span> Phase 5 Commercial, DHA
            </li>
            <li>
              <span className="text-[#FF2D20] font-bold">Karachi:</span> Nishat Commercial, Phase 6 DHA
            </li>
            <li>
              <span className="text-[#FF2D20] font-bold">Islamabad:</span> F-7 Markaz (Open Late)
            </li>
          </ul>
        </div>

        {/* Column 3: Policy & Support */}
        <div className="lg:col-span-2">
          <h4 className="font-montserrat font-black text-white text-xs uppercase tracking-widest mb-6 border-b border-white/5 pb-2">Help Desk</h4>
          <ul className="space-y-3 font-inter text-xs text-[#F5F5F5]/60">
            <li>
              <a href="#contact" className="hover:text-white transition-colors">Call Support</a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-white transition-colors">Track Delivery</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Safety Protocols</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5F5F5]/40 font-inter">
        <p>
          Powered by <span className="text-white font-semibold">Pizza Saucy Restaurant Group</span> © 2026. All rights reserved.
        </p>
        <p className="mt-2 sm:mt-0">
          Crafted with charcoal smoke & extreme heat.
        </p>
      </div>
    </footer>
  );
}
