import { useState } from "react";
import { Minus, Plus, Trash2, ShoppingBag, Tag, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useCart } from "../hook/CartHook";
import SEO from "../components/SEO";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart, totalPrice } = useCart();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "MASALA10") {
      const discountValue = totalPrice * 0.1;
      setDiscount(discountValue);
      toast.success("Coupon Applied Successfully");
    } else {
      setDiscount(0);
      toast.error("Invalid Coupon Code");
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 py-12 sm:py-16 md:px-14 lg:px-24 transition-colors duration-500">
      <SEO
        title="Shopping Cart"
        description="Review your SpiceRoot masala cart. Proceed to checkout for authentic Maharashtrian spice blends."
        url="/cart"
      />
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10 flex items-center gap-2 sm:gap-3">
          <ShoppingBag className="h-6 w-6 sm:h-8 sm:w-8 text-forest" strokeWidth={1.5} />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair text-forest dark:text-cream">Shopping Cart</h1>
        </div>

        {cart.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 sm:py-24 text-center">
            <h2 className="text-2xl sm:text-3xl font-playfair text-forest dark:text-cream">Your Cart is Empty</h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-forest dark:text-cream/60 font-dm">Add some masalas to continue shopping.</p>
            <Link to="/products" className="mt-6 sm:mt-8 inline-block rounded-full bg-forest px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-dm font-semibold text-cream transition hover:bg-forest-light hover:scale-105">
              Continue Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="grid gap-6 sm:gap-10 lg:grid-cols-3">
            <div className="space-y-4 sm:space-y-6 lg:col-span-2">
              {cart.map((item) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 rounded-[20px] sm:rounded-[28px] bg-white dark:bg-charcoal-light p-4 sm:p-5 shadow-sm border border-sand/20 dark:border-forest-light/30"
                >
                  <img src={item.image} alt={item.name} className="h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36 rounded-xl sm:rounded-2xl object-cover" />
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-playfair text-forest dark:text-cream">{item.name}</h2>
                    <p className="mt-1 sm:mt-2 text-base sm:text-lg font-bold text-forest dark:text-sage">₹{item.price}</p>
                    <div className="mt-3 sm:mt-5 flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                      <button onClick={() => decreaseQty(item._id)} className="rounded-full bg-sand/30 dark:bg-forest-light/30 p-1.5 sm:p-2 text-forest dark:text-cream hover:bg-sand/50">
                        <Minus size={16} />
                      </button>
                      <span className="text-base sm:text-lg font-bold text-forest dark:text-cream min-w-[24px] text-center">{item.qty}</span>
                      <button onClick={() => increaseQty(item._id)} className="rounded-full bg-sand/30 dark:bg-forest-light/30 p-1.5 sm:p-2 text-forest dark:text-cream hover:bg-sand/50">
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-forest dark:text-sage">₹{item.price * item.qty}</p>
                    <button onClick={() => removeFromCart(item._id)} className="mt-3 sm:mt-5 text-red-500 hover:text-red-600 transition-colors p-1">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} className="sticky top-24 h-fit rounded-[20px] sm:rounded-[28px] bg-white dark:bg-charcoal-light p-5 sm:p-6 md:p-8 shadow-sm border border-sand/20 dark:border-forest-light/30">
              <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-playfair text-forest dark:text-cream">Order Summary</h2>
              <div className="space-y-3 sm:space-y-5 font-dm text-sm sm:text-base text-forest dark:text-cream/70">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-forest dark:text-cream font-medium">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2"><Truck className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Shipping</span>
                  <span className="text-forest font-semibold">FREE</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 sm:mt-8">
                <label className="mb-2 sm:mb-3 flex items-center gap-2 font-dm font-semibold text-sm sm:text-base text-forest dark:text-cream">
                  <Tag className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Apply Coupon
                </label>
                <div className="flex gap-2">
                  <input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="MASALA10" className="w-full rounded-xl sm:rounded-2xl border border-sand/30 dark:border-forest-light/30 bg-transparent px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none text-forest dark:text-cream font-dm transition focus:border-forest" />
                  <button onClick={applyCoupon} className="rounded-xl sm:rounded-2xl bg-forest px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-cream font-dm font-medium transition hover:bg-forest-light">
                    Apply
                  </button>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 border-t border-sand/20 dark:border-forest-light/30 pt-6 sm:pt-8">
                <div className="flex justify-between text-base sm:text-lg font-dm mb-4 sm:mb-6">
                  <span className="text-forest">Total</span>
                  <span className="text-xl sm:text-2xl font-bold text-forest dark:text-sage">₹{totalPrice - discount}</span>
                </div>
                <Link to="/checkout">
                  <button className="w-full rounded-full bg-forest py-3.5 sm:py-4 text-sm sm:text-base text-cream font-dm font-bold transition hover:bg-forest-light">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
