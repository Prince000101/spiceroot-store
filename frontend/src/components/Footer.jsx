import { Link } from "react-router-dom";
import { CookingPot, Mail, MapPin, Phone, ArrowUpRight, Globe, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-earth text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-14 lg:px-24 py-14 sm:py-20">
        <div className="grid gap-8 sm:gap-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="mb-4 sm:mb-6 flex items-center gap-2.5">
              <CookingPot className="text-saffron" size={22} strokeWidth={1.5} />
              <span className="text-xl sm:text-2xl font-playfair font-bold text-white">
                SpiceRoot
              </span>
            </div>
            <p className="text-sm font-nunito leading-relaxed text-white/50 max-w-xs">
              Grandmother's recipes, modern kitchen. Traditional Maharashtrian
              masalas hand-ground in Kolhapur since 2012.
            </p>
            <div className="mt-4 sm:mt-6 flex items-center gap-4">
              <a href="#" className="text-white/30 hover:text-saffron transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="text-white/30 hover:text-saffron transition-colors">
                <ExternalLink size={18} />
              </a>
              <a href="mailto:prince@creatordev.in" className="text-white/30 hover:text-saffron transition-colors">
                <Mail size={18} />
              </a>
              <a href="tel:+919876543210" className="text-white/30 hover:text-saffron transition-colors">
                <Phone size={18} />
              </a>
              <span className="text-white/30 hover:text-saffron transition-colors cursor-default">
                <MapPin size={18} />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 sm:mb-6 text-xs uppercase tracking-[3px] text-saffron font-nunito font-bold">
              Quick Links
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Shop", path: "/products" },
                { name: "Our Story", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 text-sm font-nunito text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 sm:mb-6 text-xs uppercase tracking-[3px] text-saffron font-nunito font-bold">
              Shop By
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {["Masala Blends", "Single Spices", "Specialty Mixes", "Family Packs"].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-sm font-nunito text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 sm:mb-6 text-xs uppercase tracking-[3px] text-saffron font-nunito font-bold">
              Visit Us
            </h3>
            <div className="space-y-3">
              <p className="text-sm font-nunito text-white/60">
                Deshmukh Masala House<br />
                Kolhapur, Maharashtra 416001<br />
                India
              </p>
              <p className="text-sm font-nunito text-white/60">
                prince@creatordev.in
              </p>
              <p className="text-sm font-nunito text-white/60">
                Mon - Sat: 9AM - 7PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs font-nunito text-white/30">
            &copy; {new Date().getFullYear()} SpiceRoot. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-nunito text-white/30 uppercase tracking-widest">
            <span>Kolhapur</span>
            <span className="w-1 h-1 rounded-full bg-saffron/60" />
            <span>Stone-Ground</span>
            <span className="w-1 h-1 rounded-full bg-saffron/60" />
            <span>Small Batch</span>
          </div>
          <p className="text-[10px] sm:text-xs font-nunito text-white/20">
            Crafted with &#10084; by <span className="text-saffron/60 font-semibold">Prince | Creator Dev</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
