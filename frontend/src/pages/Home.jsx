import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  ArrowRight,
  Heart,
  CookingPot,
  Wheat,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Newsletter from "../components/Newsletter";
import { useCart } from "../hook/CartHook";
import { useWishlist } from "../context/WishlistContext";
import SEO from "../components/SEO";

export default function Home() {
  const { addToCart, cart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
        setLoading(false);
      } catch {
        toast.error("Failed to load products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const philosophy = [
    {
      icon: <CookingPot size={28} />,
      title: "Stone-Ground",
      desc: "Every masala is ground on traditional stone grinders, just like our grandmothers did. No electric mills, no shortcuts.",
    },
    {
      icon: <Wheat size={28} />,
      title: "Small Batch",
      desc: "We make only what we can sell. No sitting on shelves, no stale stock. Fresh from the grinder to your kitchen.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "No Preservatives",
      desc: "Pure whole spices, nothing else. No anti-caking agents, no fillers, no artificial colors. Just honest masala.",
    },
  ];

  const features = [
    "HAND-GROUND",
    "SMALL BATCH",
    "STONE-GROUND",
    "FAMILY RECIPES",
    "NO PRESERVATIVES",
    "KOLHAPUR ORIGINS",
  ];

  const organizationLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SpiceRoot",
    url: "https://spiceroot.co",
    logo: "/uploads/07.jpg",
    description: "Traditional Maharashtrian masalas hand-ground in Kolhapur since 2012.",
    foundingDate: "2012",
    address: { "@type": "PostalAddress", addressLocality: "Kolhapur", addressRegion: "Maharashtra", addressCountry: "IN" },
    contactPoint: { "@type": "ContactPoint", email: "prince@creatordev.in", contactType: "customer service" },
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="Home"
        description="Traditional Maharashtrian masalas hand-ground in Kolhapur since 2012. Four generations of spice wisdom in every SpiceRoot blend."
        keywords="SpiceRoot, Maharashtrian masalas, Kolhapuri masala, hand-ground spices, traditional Indian spices"
        url="/"
        ld={organizationLD}
      />
      {/* =========================================
                    HERO SECTION
      ========================================= */}
      <section className="relative min-h-[90svh] md:min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-14 lg:px-24 overflow-hidden pt-20 md:pt-0">
        {/* Warm animated blob */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-saffron/10 dark:bg-saffron/5 animate-blob-morph z-0"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-earth/10 dark:bg-earth/5 animate-float-slow"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 rounded-full bg-sage/10 dark:bg-sage/5 animate-float"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 max-w-xl text-center md:text-left"
        >
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <div className="h-px w-12 bg-saffron" />
            <p className="text-[10px] sm:text-xs uppercase tracking-[4px] sm:tracking-[6px] text-saffron font-nunito font-bold">
              Est. 2012 — Kolhapur, Maharashtra
            </p>
          </div>

          <h1 className="mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-playfair text-charcoal dark:text-warm-white">
            <span>Grandmother's</span>
            <br />
            <span className="text-saffron italic">Recipes,</span>
            <br />
            <span className="text-earth dark:text-saffron-light">Modern Kitchen.</span>
          </h1>

          <p className="mb-8 sm:mb-10 max-w-md mx-auto md:mx-0 text-sm sm:text-base leading-relaxed text-charcoal/70 dark:text-warm-white/70 font-nunito">
            Hand-ground traditional Maharashtrian masalas from the Deshmukh family kitchen.
            Four generations of spice wisdom in every blend.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link to="/products" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 rounded-full bg-saffron px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-nunito font-semibold text-white shadow-lg shadow-saffron/20 transition hover:bg-saffron-dark"
              >
                Shop Masalas
                <ArrowRight size={16} />
              </motion.button>
            </Link>
            <Link to="/about" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 rounded-full border-2 border-earth/30 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-nunito font-semibold text-earth dark:text-warm-white dark:border-warm-white/20 transition hover:border-saffron hover:text-saffron"
              >
                Our Story
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT - FLOATING PRODUCT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="relative z-10 hidden lg:block shrink-0 mt-12 md:mt-0"
        >
          <div className="relative animate-float">
            <div className="w-full max-w-[480px] aspect-[12/10] rounded-[40px] bg-warm-cream dark:bg-charcoal-light overflow-hidden shadow-2xl border border-saffron/10">
              <img
                src="/uploads/01.jpg"
                alt="Traditional Maharashtrian masalas and spices"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal opacity-90 dark:opacity-80"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-saffron/10 animate-float-slow" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-earth/20" />
            <div className="absolute -bottom-6 -right-2 bg-earth text-white px-6 py-3 rounded-[16px] shadow-xl">
              <p className="font-nunito text-sm font-bold tracking-wider uppercase leading-none">Kolhapur Since 2012</p>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM FEATURES BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-6 md:bottom-10 left-0 right-0 px-4 sm:px-6 md:px-14 lg:px-24"
        >
          <div className="flex items-center gap-4 sm:gap-8 text-[10px] sm:text-xs uppercase tracking-[3px] sm:tracking-[4px] text-earth/50 dark:text-warm-white/30 font-nunito font-bold overflow-x-auto pb-1 no-scrollbar">
            {features.map((feature, i) => (
              <span key={feature} className="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                {feature}
                {i < features.length - 1 && (
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-saffron/30 dark:bg-saffron/20" />
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================
                  PHILOSOPHY SECTION
      ========================================= */}
      <section className="px-4 sm:px-6 py-20 sm:py-32 md:px-14 lg:px-24 bg-warm-cream-light/70 dark:bg-charcoal-light/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 text-center md:text-left"
          >
            <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-[4px] sm:tracking-[5px] text-saffron font-nunito font-bold">
              Our Craft
            </p>
            <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-charcoal dark:text-warm-white">
              Spices deserve patience.
            </h2>
            <p className="max-w-2xl mx-auto md:mx-0 text-sm sm:text-base leading-relaxed text-charcoal/70 dark:text-warm-white/70 font-nunito">
              Every SpiceRoot blend is prepared slowly using traditional stone grinders,
              sun-dried spices from Maharashtra's farms, and recipes that have warmed
              our family's kitchen for four generations.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {philosophy.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group rounded-[24px] sm:rounded-[32px] bg-white dark:bg-charcoal-light p-6 sm:p-10 shadow-sm border border-saffron/10 dark:border-earth/20 transition-all duration-500 hover:shadow-xl hover:border-saffron/20"
              >
                <div className="mb-5 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-saffron/10 text-saffron group-hover:bg-saffron group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-playfair text-charcoal dark:text-warm-white">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-charcoal/70 dark:text-warm-white/70 font-nunito text-sm sm:text-[15px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
                  PRODUCTS SECTION
      ========================================= */}
      <section className="px-4 sm:px-6 py-20 sm:py-32 md:px-14 lg:px-24 bg-warm-white dark:bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-14 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 sm:gap-0 text-center sm:text-left"
          >
            <div>
              <p className="mb-2 sm:mb-3 text-[10px] sm:text-xs uppercase tracking-[4px] sm:tracking-[5px] text-saffron font-nunito font-bold">
                Our Collection
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-charcoal dark:text-warm-white">
                Kitchen Favorites
              </h2>
            </div>

            <Link
              to="/products"
              className="hidden md:flex items-center gap-2 text-saffron font-nunito font-semibold transition-all hover:gap-4"
            >
              View All
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {loading ? (
            <div className="py-20 text-center">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-saffron border-t-transparent" />
            </div>
          ) : (
            <div className="grid gap-6 sm:gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  onClick={() => navigate(`/products/${product._id}`)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-[20px] sm:rounded-[32px] bg-warm-cream/60 dark:bg-earth/10 mb-3 sm:mb-5 border border-saffron/5 transition-all duration-300 group-hover:border-saffron/20 group-hover:shadow-lg">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product._id, product);
                        toast.success(
                          isInWishlist(product._id)
                            ? "Removed from Wishlist"
                            : "Added to Wishlist"
                        );
                      }}
                      className="absolute right-2 sm:right-4 top-2 sm:top-4 z-20 rounded-full bg-warm-white/80 dark:bg-charcoal-light/80 p-2 sm:p-3 shadow-md backdrop-blur-sm transition hover:bg-white dark:hover:bg-charcoal-light hover:scale-110"
                    >
                      <Heart
                        size={14}
                        className={`transition ${
                          isInWishlist(product._id)
                            ? "fill-saffron text-saffron"
                            : "text-earth dark:text-warm-white"
                        }`}
                      />
                    </button>

                    <div className="absolute inset-0 flex items-end justify-center pb-3 sm:pb-6 opacity-0 transition-all duration-500 group-hover:opacity-100 max-sm:hidden">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const existing = cart.find((i) => i._id === product._id);
                          addToCart(product);
                          toast.success(
                            existing
                              ? `${product.name} quantity increased`
                              : `${product.name} added to cart`
                          );
                        }}
                        className="flex items-center gap-2 rounded-full bg-saffron px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-white font-nunito font-semibold shadow-xl transition hover:scale-105"
                      >
                        <ShoppingCart size={14} />
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  <div className="px-0 sm:px-1">
                    <p className="mb-0.5 sm:mb-1 text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] text-saffron font-nunito font-bold">
                      {product.category || "Masala Blends"}
                    </p>
                    <h3 className="text-sm sm:text-lg md:text-xl font-playfair mb-0.5 sm:mb-1 text-charcoal dark:text-warm-white leading-tight">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={i < Math.round(product.rating) ? "fill-sage text-sage" : "text-charcoal/20"}
                        />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-nunito font-bold text-earth dark:text-saffron-light">
                      ₹{product.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="mt-10 sm:mt-12 text-center md:hidden">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-saffron font-nunito font-semibold transition-all hover:gap-4"
            >
              View All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
                  FEATURED BANNER
      ========================================= */}
      <section className="px-4 sm:px-6 py-20 sm:py-32 md:px-14 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[24px] sm:rounded-[40px] bg-earth p-6 sm:p-8 md:p-12 lg:p-20"
          >
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-earth-light/30 animate-blob-morph" />
            <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full bg-earth-light/20" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 sm:gap-12 items-center text-center md:text-left">
              <div>
                <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-[4px] sm:tracking-[5px] text-saffron/80 font-nunito">
                  The Deshmukh Legacy
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-warm-white mb-4 sm:mb-6 leading-tight">
                  Four generations of<br />spice wisdom.
                </h2>
                <p className="text-warm-white/70 font-nunito leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                  Explore our curated collection of traditional Maharashtrian masalas, crafted
                  in small batches with spices sourced from farms across Maharashtra.
                </p>
                <Link to="/products" className="inline-block">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-3 rounded-full bg-saffron px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-nunito font-semibold text-white transition hover:bg-saffron-dark"
                  >
                    Explore Collection
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>
              </div>

              <div className="relative max-md:hidden">
                <div className="h-64 md:h-72 lg:h-80 rounded-[24px] sm:rounded-[32px] bg-warm-white/10 overflow-hidden">
                  <img
                    src="/uploads/21.jpg"
                    alt="Traditional masala grinding"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
                  TESTIMONIALS SECTION
      ========================================= */}
      <section className="px-4 sm:px-6 py-20 sm:py-32 md:px-14 lg:px-24 bg-warm-cream-light/70 dark:bg-charcoal-light/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-14 text-center md:text-left"
          >
            <p className="mb-2 sm:mb-3 text-[10px] sm:text-xs uppercase tracking-[4px] sm:tracking-[5px] text-saffron font-nunito font-bold">
              What Our Customers Say
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-charcoal dark:text-warm-white">
              From our kitchen to yours
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {[
              {
                name: "Priya Patil",
                location: "Mumbai",
                quote: "The Kolhapuri Kanda Lasun Masala reminds me of my grandmother's kitchen in Kolhapur. The aroma fills the entire house. Absolutely authentic!",
                rating: 5,
              },
              {
                name: "Rohan Deshpande",
                location: "Pune",
                quote: "I've tried dozens of biryani masalas, but SpiceRoot's Pune Biryani Masala is on another level. My family thinks I've become a master chef!",
                rating: 5,
              },
              {
                name: "Sunita Jadhav",
                location: "Nashik",
                quote: "The Deshmukh Family Spice Box was the perfect gift for my daughter's wedding. Beautiful packaging and the masalas are just like homemade.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="rounded-[24px] sm:rounded-[32px] bg-white dark:bg-charcoal-light p-6 sm:p-8 shadow-sm border border-saffron/10 dark:border-earth/20 transition-all duration-500 hover:shadow-xl"
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-sage text-sage" />
                  ))}
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-charcoal/70 dark:text-warm-white/70 font-nunito mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-playfair text-charcoal dark:text-warm-white font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-charcoal/50 dark:text-warm-white/40 font-nunito">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
