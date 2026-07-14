import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Search, SlidersHorizontal, Star } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hook/CartHook";
import { useWishlist } from "../context/WishlistContext";
import SEO from "../components/SEO";

export default function Products() {
  const navigate = useNavigate();
  const { addToCart, cart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("latest");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
        setLoading(false);
      } catch (error) {
        /* console.log(error); */
        toast.error("Failed to load products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    const allCategories = products.map((p) => p.category || "Masala Blends");
    return ["All", ...new Set(allCategories)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    if (selectedCategory !== "All") filtered = filtered.filter((p) => p.category === selectedCategory);
    if (sortOption === "low") filtered.sort((a, b) => a.price - b.price);
    if (sortOption === "high") filtered.sort((a, b) => b.price - a.price);
    if (sortOption === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));
    return filtered;
  }, [products, search, selectedCategory, sortOption]);

  const itemListLD = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SpiceRoot Masalas",
    description: "Traditional Maharashtrian masala blends hand-ground in Kolhapur",
    url: "https://spiceroot.co/products",
    numberOfItems: filteredProducts.length,
    itemListElement: filteredProducts.slice(0, 10).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://spiceroot.co/products/${p._id}`,
      name: p.name,
    })),
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 py-12 sm:py-16 md:px-14 lg:px-24 transition-colors duration-500">
      <SEO
        title="Shop Masalas"
        description="Browse SpiceRoot's collection of traditional Maharashtrian masalas. Hand-ground spice blends from Kolhapur, crafted with four generations of family recipes."
        keywords="buy masalas online, Maharashtrian spice blends, Kolhapuri masala, hand-ground spices, SpiceRoot shop"
        url="/products"
        ld={itemListLD}
      />
      {/* HEADER */}
      <div className="mb-10 sm:mb-14 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 sm:mb-3 text-[10px] sm:text-sm uppercase tracking-[4px] sm:tracking-[5px] text-sage font-dm">
          SpiceRoot Collection
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-forest dark:text-cream">
          Traditional Maharashtrian Masalas
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-forest dark:text-cream/60">
          Explore handcrafted spice blends from Kolhapur, rooted in four generations of family recipes and traditional stone-ground methods.
        </motion.p>
      </div>

      {/* FILTERS */}
      <div className="mb-10 sm:mb-12 flex flex-col gap-4 sm:gap-5 rounded-[20px] sm:rounded-[32px] bg-cream-light/80 dark:bg-charcoal-light/60 p-4 sm:p-6 shadow-sm border border-sand/20 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:w-[280px]">
          <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-forest" size={16} />
          <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-xl sm:rounded-2xl border border-sand/40 bg-white/60 dark:bg-charcoal-light py-2.5 sm:py-3 pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm outline-none transition focus:border-forest dark:border-cream/20 dark:text-cream placeholder:text-sage/50" />
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`shrink-0 rounded-xl sm:rounded-2xl px-3 sm:px-5 py-1.5 sm:py-2 font-dm font-medium text-xs sm:text-sm transition ${selectedCategory === cat ? "bg-forest text-cream shadow-md" : "bg-white/60 dark:bg-charcoal-light text-forest hover:bg-sand/30 dark:text-cream/60 dark:hover:bg-forest-light/30 border border-sand/20"}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="relative">
          <SlidersHorizontal className="absolute left-3 sm:left-3 top-1/2 -translate-y-1/2 text-forest" size={16} />
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="rounded-xl sm:rounded-2xl border border-sand/40 bg-white/60 dark:bg-charcoal-light py-2.5 sm:py-3 pl-9 sm:pl-10 pr-4 sm:pr-5 text-sm outline-none dark:border-cream/20 dark:text-cream">
            <option value="latest">Latest</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 sm:py-32">
          <div className="h-12 sm:h-16 w-12 sm:w-16 animate-spin rounded-full border-4 border-forest border-t-transparent" />
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="py-20 sm:py-32 text-center">
          <h2 className="text-2xl sm:text-4xl font-playfair text-forest dark:text-cream">No Products Found</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-forest dark:text-cream/60">Try searching something else.</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => navigate(`/products/${product._id}`)}
              className="group relative cursor-pointer overflow-hidden rounded-[30px] bg-cream-light/80 dark:bg-charcoal-light/80 shadow-sm border border-sand/20 transition-all duration-300 hover:shadow-xl hover:border-sage/30"
            >
              <button
                onClick={(e) => { e.stopPropagation(); toggleWishlist(product._id, product); toast.success(isInWishlist(product._id) ? "Removed from Wishlist" : "Added to Wishlist"); }}
                className="absolute right-2 sm:right-4 top-2 sm:top-4 z-20 rounded-full bg-white/90 dark:bg-charcoal/80 p-2 sm:p-3 shadow-md backdrop-blur-sm"
              >
                <Heart size={14} className={`transition ${isInWishlist(product._id) ? "fill-red-500 text-red-500" : "text-forest dark:text-cream"}`} />
              </button>

              <div className="relative overflow-hidden">
                <img src={product.image} alt={product.name} loading="lazy" decoding="async" className="h-48 sm:h-56 md:h-72 w-full object-cover transition duration-500 group-hover:scale-110" />
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <p className="mb-1 sm:mb-2 text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] text-sage font-dm">{product.category || "Masala Blends"}</p>
                <h2 className="font-playfair text-sm sm:text-lg md:text-xl text-forest dark:text-cream leading-tight">{product.name}</h2>
                <p className="mt-1 sm:mt-3 line-clamp-2 text-xs sm:text-sm leading-relaxed text-forest dark:text-cream/60 font-dm">{product.description}</p>
                <div className="mt-2 sm:mt-4 flex items-center gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="fill-yellow-400 text-yellow-400" size={12} />)}
                  <span className="ml-1 sm:ml-2 text-[10px] sm:text-sm text-forest">(5.0)</span>
                </div>
                <div className="mt-3 sm:mt-6 flex items-center justify-between">
                  <p className="text-base sm:text-lg md:text-2xl font-bold text-forest dark:text-sage">₹{product.price}</p>
                  <button onClick={(e) => { e.stopPropagation(); const existing = cart.find((i) => i._id === product._id); addToCart(product); toast.success(existing ? `${product.name} quantity increased` : `${product.name} added to cart`); }} className="rounded-full bg-forest p-2 sm:p-3 text-cream transition hover:scale-110 hover:bg-forest-light">
                    <ShoppingCart size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

    </div>
  );
}
