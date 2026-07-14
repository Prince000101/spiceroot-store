import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Heart,
  ShoppingCart,
  Star,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  Leaf,
  BadgeCheck,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 🔥 FIXED: Updated import path to target the correct hook file
import { useCart } from "../hook/CartHook";
import { useWishlist } from "../context/WishlistContext";
import { toast } from "react-toastify";

export default function QuickViewModal({
  product,
  isOpen,
  onClose,
}) {
  const [qty, setQty] = useState(1);

  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  useEffect(() => {
    if (isOpen) 
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setQty(1);
  
},[isOpen]);

  if (!isOpen || !product) return null;

  const increase = () => setQty((prev) => prev + 1);

  const decrease = () => {
    if (qty > 1) setQty((prev) => prev - 1);
  };

  const handleAddCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }

    toast.success(`${qty} item(s) added to cart 🌶️`);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-999 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-cream shadow-2xl dark:bg-charcoal"
        >
          <button
            onClick={onClose}
            className="fixed right-3 top-3 sm:absolute sm:right-5 sm:top-5 z-50 rounded-full bg-cream dark:bg-charcoal-light p-2.5 sm:p-3 shadow-lg transition hover:rotate-90 text-forest dark:text-cream"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col lg:grid lg:grid-cols-[45%_55%]">

            <div className="bg-sand/20 dark:bg-charcoal-light p-6 sm:p-10 flex items-center justify-center max-lg:max-h-64 sm:max-lg:max-h-80">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: .3 }}
                src={product.image}
                alt={product.name}
                className="max-h-48 sm:max-h-64 lg:max-h-[500px] rounded-2xl lg:rounded-3xl shadow-2xl object-contain"
              />
            </div>

            <div className="p-5 sm:p-8 lg:p-10 overflow-y-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-forest/10 dark:bg-forest-light/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-forest dark:text-sage font-dm">
                <BadgeCheck size={14} className="hidden sm:block" />
                In Stock
              </span>

              <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-5xl font-playfair font-bold leading-tight text-forest dark:text-cream">
                {product.name}
              </h2>

              <div className="mt-3 sm:mt-5 flex items-center gap-1.5 sm:gap-2">
                {[1,2,3,4,5].map((star)=>(
                  <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-sage font-dm">
                  (5.0 • 126 Reviews)
                </span>
              </div>

              <div className="mt-5 sm:mt-8 flex items-center gap-3 sm:gap-4 flex-wrap">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-forest dark:text-sage">
                  ₹{product.price}
                </h2>
                <span className="text-lg sm:text-xl lg:text-2xl text-sand-dark line-through">
                  ₹{Math.round(product.price * 1.25)}
                </span>
                <span className="rounded-full bg-red-100 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-bold text-red-600">
                  20% OFF
                </span>
              </div>

              <p className="mt-5 sm:mt-8 leading-7 sm:leading-8 text-sm sm:text-base text-sage dark:text-cream/70 font-dm">
                {product.description}
              </p>

              <div className="mt-5 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
                <span className="rounded-full bg-forest/10 dark:bg-forest-light/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-dm font-medium text-forest dark:text-sage">
                  🌶️ Homemade
                </span>
                <span className="rounded-full bg-forest/10 dark:bg-forest-light/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-dm font-medium text-forest dark:text-sage">
                  No Preservatives
                </span>
                <span className="rounded-full bg-forest/10 dark:bg-forest-light/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-dm font-medium text-forest dark:text-sage">
                  Stone-Ground
                </span>
                <span className="rounded-full bg-forest/10 dark:bg-forest-light/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-dm font-medium text-forest dark:text-sage">
                  Small Batch
                </span>
              </div>

              <div className="mt-6 sm:mt-10">
                <h3 className="text-lg sm:text-xl font-playfair font-bold text-forest dark:text-cream">
                  Key Benefits
                </h3>
                <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-sage dark:text-cream/70 font-dm">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Leaf size={16} className="text-forest shrink-0"/>
                    Authentic Taste
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Leaf size={16} className="text-forest shrink-0"/>
                    Freshly Ground
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Leaf size={16} className="text-forest shrink-0"/>
                    Family Recipe
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Leaf size={16} className="text-forest shrink-0"/>
                    Pure Spices Only
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-10 flex items-center gap-3 sm:gap-5">
                <button onClick={decrease} className="rounded-xl border border-sand/30 dark:border-forest-light/30 p-3 sm:p-4 hover:bg-sand/20 dark:hover:bg-forest-light/20 text-forest dark:text-cream">
                  <Minus size={16} />
                </button>
                <span className="text-xl sm:text-2xl font-bold text-forest dark:text-cream">{qty}</span>
                <button onClick={increase} className="rounded-xl border border-sand/30 dark:border-forest-light/30 p-3 sm:p-4 hover:bg-sand/20 dark:hover:bg-forest-light/20 text-forest dark:text-cream">
                  <Plus size={16} />
                </button>
              </div>

              <div className="mt-6 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
                <button onClick={handleAddCart} className="flex-1 sm:flex-none flex items-center justify-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-forest px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-dm font-semibold text-cream transition hover:bg-forest-light">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                <button className="flex-1 sm:flex-none rounded-xl sm:rounded-2xl border-2 border-forest px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-dm font-semibold text-forest dark:text-sage transition hover:bg-forest hover:text-cream">
                  ⚡ Buy Now
                </button>
                <button onClick={() => toggleWishlist(product._id || product.id, product)} className="rounded-xl sm:rounded-2xl border-2 border-sand/30 dark:border-forest-light/30 p-3 sm:p-4 text-forest dark:text-cream transition hover:bg-sand/20 dark:hover:bg-forest-light/20">
                  <Heart size={18} className={isInWishlist(product._id || product.id) ? "fill-red-500 text-red-500" : ""} />
                </button>
              </div>

              <div className="mt-6 sm:mt-10 rounded-2xl sm:rounded-3xl border border-sand/20 dark:border-forest-light/30 bg-cream-light dark:bg-charcoal-light p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Truck className="text-forest shrink-0" size={18} />
                  <h3 className="text-base sm:text-lg font-playfair font-bold text-forest dark:text-cream">Free Delivery</h3>
                </div>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-sage dark:text-cream/70 font-dm">
                  Estimated delivery in <strong>2–4 business days</strong>.
                </p>
                <div className="mt-3 sm:mt-5 space-y-2 sm:space-y-3 font-dm text-xs sm:text-sm text-sage dark:text-cream/70">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <ShieldCheck size={16} className="text-forest shrink-0" />
                    <span>100% Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <BadgeCheck size={16} className="text-forest shrink-0" />
                    <span>Authentic Homemade Masala</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Truck size={16} className="text-forest shrink-0" />
                    <span>Cash on Delivery Available</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <ShieldCheck size={16} className="text-forest shrink-0" />
                    <span>Easy 7-Day Returns</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-10">
                <h3 className="text-lg sm:text-xl font-playfair font-bold text-forest dark:text-cream">
                  Product Highlights
                </h3>
                <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm text-sage dark:text-cream/70 font-dm">
                  <li>✔ Made with premium whole spices</li>
                  <li>✔ No artificial colors or preservatives</li>
                  <li>✔ Stone-ground in small batches since 2012</li>
                  <li>✔ Traditional family recipe</li>
                  <li>✔ Kolhapur, Maharashtra origin</li>
                </ul>
              </div>

              <Link
                to={`/products/${product._id || product.id}`}
                onClick={onClose}
                className="mt-6 sm:mt-10 inline-flex items-center text-sm sm:text-base font-dm font-semibold text-forest dark:text-sage transition hover:translate-x-2 hover:underline"
              >
                View Full Details →
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>

    </AnimatePresence>
  );
}