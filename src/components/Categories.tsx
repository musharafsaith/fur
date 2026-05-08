import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';

export default function Categories({ lang }: { lang: string }) {
  return (
    <section id="collection" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <span className="text-brand-accent text-[11px] uppercase tracking-[0.2em] font-semibold mb-2 block">
            {lang === 'en' ? 'Discovery' : 'دریافت'}
          </span>
          <h3 className="text-5xl font-serif">{lang === 'en' ? 'Curated Collections' : 'منتخب مجموعہ'}</h3>
        </div>
        <p className="text-brand-ink/60 max-w-xs text-sm leading-relaxed">
          {lang === 'en' 
            ? "Each piece is selected for its unique story, impeccable craftsmanship, and timeless appeal."
            : "ہر ٹکڑا اپنی منفرد کہانی، بہترین کاریگری اور لازوال اپیل کی بنیاد پر منتخب کیا گیا ہے۔"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {CATEGORIES.map((category, idx) => (
          <motion.div 
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            id={`category-${category.id}`}
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-6 rounded-2xl">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-ink/0 group-hover:bg-brand-ink/20 transition-colors duration-500" />
            </div>
            <h4 className="text-xl font-serif mb-1 group-hover:text-brand-accent transition-colors">{category.name}</h4>
            <p className="text-xs text-brand-ink/50 uppercase tracking-widest">{category.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
