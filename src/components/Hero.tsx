import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ lang }: { lang: string }) {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Dubai Living Room"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-ink/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-white"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] font-medium mb-4 block">
            {lang === 'en' ? "Dubai's Premier Furnishings" : "دبئی کے بہترین فنیچر"}
          </span>
          <h2 className="text-7xl md:text-8xl font-serif font-light leading-[0.9] mb-8">
            {lang === 'en' ? (
              <>The Art of <br /><span className="italic">Luminous</span> Living</>
            ) : (
              <>خوبصورت زندگی <br /><span className="italic">کا فن</span></>
            )}
          </h2>
          <p className="text-lg font-light mb-10 text-white/80 max-w-md leading-relaxed">
            {lang === 'en' 
              ? "Discover a curated collection of world-class furniture designed for the most exclusive residences in Dubai."
              : "دبئی کی سب سے خاص رہائش گاہوں کے لیے بنائے گئے عالمی معیار کے فرنیچر کا ایک مجموعہ دریافت کریں۔"}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-brand-ink px-8 py-4 uppercase text-xs tracking-widest font-semibold hover:bg-brand-accent hover:text-white transition-all flex items-center gap-2 group" id="shop-collection-btn">
              {lang === 'en' ? 'Shop Collection' : 'کلیکشن دیکھیں'} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-8 py-4 uppercase text-xs tracking-widest font-semibold hover:bg-white hover:text-brand-ink transition-all" id="consultation-btn">
              {lang === 'en' ? 'Book a Consultation' : 'رابطہ کریں'}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical text */}
      <div className="absolute right-8 bottom-24 hidden lg:block">
        <div className="vertical-text flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white/50">
          <span className="w-12 h-px bg-white/30" />
          {lang === 'en' ? 'ESTABLISHED IN DUBAI 2024' : 'دبئی میں قائم 2024'}
        </div>
      </div>
    </section>
  );
}
