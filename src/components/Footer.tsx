import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-paper border-t border-brand-ink/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-serif uppercase mb-6 tracking-tighter font-bold">Lumina</h2>
            <p className="text-sm text-brand-ink/60 leading-relaxed mb-8">
              Redefining luxury living in the heart of Dubai. We bring world-class design and impeccable craftsmanship to your home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-brand-ink/10 rounded-full hover:bg-brand-ink hover:text-brand-paper transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 border border-brand-ink/10 rounded-full hover:bg-brand-ink hover:text-brand-paper transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 border border-brand-ink/10 rounded-full hover:bg-brand-ink hover:text-brand-paper transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6 border-b border-brand-ink/5 pb-2">Information</h4>
            <ul className="space-y-4 text-sm text-brand-ink/60">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6 border-b border-brand-ink/5 pb-2">Experience</h4>
            <ul className="space-y-4 text-sm text-brand-ink/60">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Custom Design</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Showroom Visit</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Trade Program</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Care Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6 border-b border-brand-ink/5 pb-2">Contact</h4>
            <ul className="space-y-4 text-sm text-brand-ink/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-accent flex-shrink-0" />
                <span>Sheikh Zayed Road, Design District, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-accent flex-shrink-0" />
                <span>+971 4 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-accent flex-shrink-0" />
                <span>concierge@lumina-dubai.ae</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-brand-ink/5 gap-4">
          <p className="text-[10px] uppercase tracking-widest text-brand-ink/40">
            © 2024 Lumina Furnishings LLC. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-brand-ink/40">
            <a href="#" className="hover:text-brand-accent">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
