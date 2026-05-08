import { motion } from 'motion/react';
import { FEATURED_PRODUCTS } from '../constants';
import { ArrowRight, ShoppingCart } from 'lucide-react';

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-brand-ink text-brand-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <h3 className="text-5xl font-serif">Signature Selection</h3>
          <button className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-brand-accent transition-colors" id="view-all-products">
            View All Series <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {FEATURED_PRODUCTS.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
              id={`product-${product.id}`}
            >
              <div className="relative aspect-square overflow-hidden mb-6 bg-[#2a2a2a]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-screen opacity-100 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <button 
                  className="absolute bottom-4 right-4 bg-white text-brand-ink p-3 rounded-full translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-accent hover:text-white"
                  title="Add to cart"
                  id={`add-to-cart-${product.id}`}
                >
                  <ShoppingCart size={18} />
                </button>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-brand-paper/40 font-medium">{product.category}</span>
                <h4 className="text-lg font-medium">{product.name}</h4>
                <p className="text-brand-accent font-light">AED {product.price.toLocaleString()}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
