import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Clock, Instagram, Facebook, Globe } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/pizzasaucy' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/pizzasaucy' },
    { name: 'TikTok', icon: Globe, url: 'https://tiktok.com/@pizzasaucy' }
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#0D0D0D] border-t border-white/5">
      {/* Background radial soft red blur */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF2D20]/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#FF2D20] font-montserrat text-sm font-extrabold tracking-widest uppercase mb-3">
            Find Us
          </p>
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide text-white mb-4">
            CONNECT WITH <span className="text-[#FFB800]">THE KITCHEN</span>
          </h2>
          <p className="font-inter text-[#F5F5F5]/60 text-base">
            Craving some smoke? Drop by our primary MM Alam Road dining outlet, call our delivery hotlines, or message us directly on WhatsApp.
          </p>
        </div>

        {/* Contact details & Map grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates and Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#1A1A1A] p-8 sm:p-10 rounded-3xl border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#FF2D20]/10 border border-[#FF2D20]/20 rounded-2xl text-[#FF2D20] mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-extrabold text-white text-sm uppercase tracking-wider mb-1">Our Location</h4>
                  <p className="font-inter text-sm text-[#F5F5F5]/70 leading-relaxed">
                    Plot 12-B, M.M. Alam Road, Gulberg III, Lahore, Pakistan
                  </p>
                </div>
              </div>

              {/* Call Hotline */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#FFB800]/10 border border-[#FFB800]/20 rounded-2xl text-[#FFB800] mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-extrabold text-white text-sm uppercase tracking-wider mb-1">Call Delivery</h4>
                  <p className="font-inter text-sm text-[#F5F5F5]/70 leading-relaxed">
                    +92 (42) 111-347-324 (111-PIZZA-SAUCY)
                  </p>
                  <p className="font-inter text-xs text-[#F5F5F5]/40 mt-0.5">
                    Toll-free delivery from MM Alam, DHA, and Johar Town.
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-white/80 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-extrabold text-white text-sm uppercase tracking-wider mb-1">Kitchen Hours</h4>
                  <p className="font-inter text-sm text-[#F5F5F5]/70">
                    Mon - Thu: <span className="text-white font-semibold">12:00 PM - 02:00 AM</span>
                  </p>
                  <p className="font-inter text-sm text-[#F5F5F5]/70 mt-1">
                    Fri - Sun: <span className="text-[#FFB800] font-semibold">12:00 PM - 04:00 AM</span>
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration button */}
            <div className="pt-6 border-t border-white/5 space-y-4">
              <a
                href="https://wa.me/923001234567?text=Hey%20Pizza%20Saucy!%20I%20want%20to%20order%20some%20delicious%20pizzas%20and%20burgers!"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-montserrat font-extrabold tracking-widest uppercase rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.35)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.55)] hover:scale-102 transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-white fill-white" />
                <span>CHAT ON WHATSAPP</span>
              </a>

              {/* Social Channels Row */}
              <div className="flex items-center justify-center space-x-4 pt-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-[#111111] hover:bg-[#FF2D20] text-white/70 hover:text-white rounded-full border border-white/10 hover:border-[#FF2D20] hover:scale-110 transition-all duration-300"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Iframe styled to match the dark theme */}
          <div className="lg:col-span-7 h-full min-h-[400px] overflow-hidden rounded-3xl border border-white/5 shadow-2xl relative bg-[#111111]">
            <iframe
              title="Pizza Saucy Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5583689408665!2d74.34812327685603!3d31.508825174219468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045bdf4968eb%3A0xe5a36bc64917f8a!2sM.M.%20Alam%20Rd%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px] opacity-80 grayscale contrast-115 invert-[0.92] sepia-[0.1] hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700 rounded-3xl"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
