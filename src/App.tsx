/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ur'>('en');

  return (
    <div className={`min-h-screen selection:bg-brand-accent/30 selection:text-brand-ink scroll-smooth ${lang === 'ur' ? 'rtl font-serif' : ''}`}>
      <Navbar onLangToggle={() => setLang(lang === 'en' ? 'ur' : 'en')} currentLang={lang} />
      
      <main>
        <Hero lang={lang} />
        
        <Categories lang={lang} />
        
        {/* Quality Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <img 
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000" 
                alt="Craftsmanship"
                className="w-full h-full object-cover rounded-3xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-accent p-8 rounded-2xl text-white hidden md:block">
                <p className="text-4xl font-serif mb-2">15+</p>
                <p className="text-[10px] uppercase tracking-widest leading-tight">Years of Excellence <br />in Luxury Design</p>
              </div>
            </motion.div>
            
            <div className="space-y-8">
              <span className="text-brand-accent text-[11px] uppercase tracking-[0.2em] font-semibold block">
                Our Craft
              </span>
              <h3 className="text-5xl font-serif leading-tight">Designed in Dubai, <br />Crafted Globally.</h3>
              <p className="text-brand-ink/60 leading-relaxed">
                We collaborate with the world's most talented artisans to bring bespoke furniture solutions to Dubai. From selection of raw materials to the final polish, every step is a testament to our commitment to perfection.
              </p>
              <ul className="space-y-4">
                {['Premium Grade Materials', 'Bespoke Design Service', 'Complimentary White-Glove Delivery'].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 text-sm font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <button className="pt-4 border-b border-brand-ink text-sm uppercase tracking-widest font-semibold hover:text-brand-accent hover:border-brand-accent transition-all">
                Learn More About Us
              </button>
            </div>
          </div>
        </section>

        <FeaturedProducts />

        {/* Newsletter Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h3 className="text-5xl font-serif">Join the Inner Circle</h3>
            <p className="text-brand-ink/60">
              Subscribe to receive exclusive access to new collection launches, <br />interior design tips, and private events in Dubai.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow bg-white border border-brand-ink/10 px-6 py-4 outline-none focus:border-brand-accent transition-colors"
                required
              />
              <button className="bg-brand-ink text-brand-paper px-10 py-4 uppercase text-xs tracking-widest font-semibold hover:bg-brand-accent transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

