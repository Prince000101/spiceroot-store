import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, CookingPot, ShoppingCart, Heart, LogOut, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../hook/CartHook";
import useWishlistHook from "../hook/WishlistHook";
import useAuth from "../hook/AuthContextHook";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart = [] } = useCart() || {};
  const { wishlist: WishlistItems = [] } = useWishlistHook();
  const { user, logout } = useAuth() || {};
  const cartCount = cart.length;
  const WishlistCount = WishlistItems.length;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-saffron/95 dark:bg-charcoal-dark/95 border-b border-earth/20 dark:border-earth/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <CookingPot className="text-white" size={28} strokeWidth={1.5} />
          </motion.div>
          <span className="text-2xl md:text-3xl font-playfair font-bold text-white tracking-tight">
            SpiceRoot
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-nunito font-semibold tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-warm-white"
                      : "text-white/70 hover:text-warm-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}

          {user ? (
            <>
              {user.isAdmin && (
                <motion.div whileHover={{ y: -2 }}>
                  <NavLink
                    to="/admin"
                    className="flex items-center gap-1.5 text-sm font-nunito font-semibold text-warm-cream hover:text-white transition-colors"
                  >
                    <Shield size={14} /> Admin
                  </NavLink>
                </motion.div>
              )}
              <motion.button
                whileHover={{ y: -2 }}
                onClick={logout}
                className="text-sm font-nunito font-semibold text-white/60 hover:text-white transition-colors"
              >
                Logout
              </motion.button>
            </>
          ) : (
            <motion.div whileHover={{ y: -2 }}>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-sm font-nunito font-semibold tracking-wide transition-colors duration-300 ${
                    isActive ? "text-warm-white" : "text-white/70 hover:text-warm-white"
                  }`
                }
              >
                Login
              </NavLink>
            </motion.div>
          )}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3 md:gap-5">
          <Link to="/Wishlist" className="relative">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <Heart className="text-white" size={20} strokeWidth={1.5} />
              {WishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-maroon text-white text-[9px] font-nunito font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {WishlistCount}
                </span>
              )}
            </motion.div>
          </Link>

          <Link to="/cart" className="relative">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <ShoppingCart className="text-white" size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-earth text-white text-[9px] font-nunito font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </motion.div>
          </Link>

          <div className="hidden md:block">
            <DarkModeToggle />
          </div>

          <button
            className="lg:hidden text-white p-1 ml-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-earth dark:bg-charcoal-dark border-t border-white/10"
          >
            <div className="px-6 py-8 space-y-6">
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-playfair ${
                        isActive ? "text-saffron-light" : "text-white/80 hover:text-white"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}

                {user ? (
                  <>
                    {user.isAdmin && (
                      <NavLink
                        to="/admin"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2 text-lg font-playfair text-sage-light"
                      >
                        <Shield size={20} /> Admin Panel
                      </NavLink>
                    )}
                    <button
                      onClick={() => { logout(); setMenuOpen(false); }}
                      className="flex items-center gap-2 text-lg font-playfair text-saffron-light text-left"
                    >
                      <LogOut size={20} /> Logout
                    </button>
                  </>
                ) : (
                  <NavLink
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-playfair ${isActive ? "text-saffron-light" : "text-white/80"}`
                    }
                  >
                    Login / Register
                  </NavLink>
                )}
              </div>

              <div className="flex items-center gap-6 border-t border-white/10 pt-6">
                <Link to="/Wishlist" onClick={() => setMenuOpen(false)} className="relative">
                  <Heart className="text-white" size={22} strokeWidth={1.5} />
                  {WishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-maroon text-white text-[9px] font-nunito font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {WishlistCount}
                    </span>
                  )}
                </Link>
                <Link to="/cart" onClick={() => setMenuOpen(false)} className="relative">
                  <ShoppingCart className="text-white" size={22} strokeWidth={1.5} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-earth text-white text-[9px] font-nunito font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
                <DarkModeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
