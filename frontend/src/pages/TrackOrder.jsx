import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import { Package, Truck, CheckCircle, Clock, Search } from "lucide-react";
import SEO from "../components/SEO";

function TrackOrder() {
  const [searchParams] = useSearchParams();
  const initialOrderId = searchParams.get("id") || "";
  const [orderId, setOrderId] = useState(initialOrderId);
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (id) => {
    const idToSearch = id || orderId;
    if (!idToSearch) return;
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("token");
      const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
      const { data } = await axios.get(`/api/orders/${idToSearch}`, config);
      setOrder(data);
    } catch { setOrder(null); setError("Order not found"); }
    finally { setLoading(false); }
  };

  const statusSteps = ["Placed", "Processing", "Shipped", "Delivered"];
  const currentStatusIndex = order ? statusSteps.indexOf(order.isDelivered ? "Delivered" : order.status || "Placed") : -1;

  return (
    <div className="min-h-screen px-4 sm:px-6 py-12 sm:py-16 md:px-14 lg:px-24 transition-colors duration-500">
      <SEO
        title="Track Your Order"
        description="Track the status of your SpiceRoot order. Enter your order ID to see real-time delivery updates."
        url="/track-order"
      />
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 sm:mb-10 text-center">
          <Package className="mx-auto text-forest dark:text-sage" size={36} strokeWidth={1.5} />
          <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-playfair text-forest dark:text-cream">Track Your Order</h1>
          <p className="mt-2 text-sm sm:text-base text-forest dark:text-cream/60 font-dm">Enter your order ID to check the status</p>
        </div>

        <div className="flex gap-2 sm:gap-3">
          <input value={orderId} onChange={(e) => setOrderId(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSearch()} placeholder="Enter Order ID"
            className="flex-1 rounded-xl sm:rounded-2xl border border-sand/30 dark:border-forest-light/30 bg-white dark:bg-charcoal-light p-3 sm:p-4 text-sm sm:text-base text-forest dark:text-cream outline-none transition focus:border-forest font-dm" />
          <button onClick={() => handleSearch()} disabled={loading} className="rounded-xl sm:rounded-2xl bg-forest px-5 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-dm font-semibold text-cream transition hover:bg-forest-light disabled:opacity-50 flex items-center gap-1 sm:gap-2">
            <Search size={16} /> {loading ? "..." : "Track"}
          </button>
        </div>

        {error && <p className="mt-4 text-center text-red-500 font-dm">{error}</p>}

        {order && (
          <div className="mt-8 sm:mt-10 rounded-[20px] sm:rounded-[28px] bg-white dark:bg-charcoal-light p-5 sm:p-6 md:p-8 shadow-sm border border-sand/20 dark:border-forest-light/30">
            <div className="mb-4 sm:mb-6 border-b border-sand/20 dark:border-forest-light/30 pb-4 sm:pb-6">
              <h2 className="text-xs sm:text-sm font-dm text-forest dark:text-cream/60">Order ID</h2>
              <p className="text-base sm:text-lg md:text-2xl font-bold text-forest dark:text-cream font-dm break-all">{order._id}</p>
              <p className="mt-1 sm:mt-2 text-lg sm:text-xl md:text-2xl font-bold text-forest dark:text-sage">₹{order.totalPrice}</p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {statusSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-3 sm:gap-4">
                  <div className={`flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full ${i <= currentStatusIndex ? "bg-forest text-cream" : "bg-sand/30 dark:bg-forest-light/30 text-forest dark:text-cream/60"}`}>
                    {i === 0 && <Clock size={14} />}
                    {i === 1 && <Package size={14} />}
                    {i === 2 && <Truck size={14} />}
                    {i === 3 && <CheckCircle size={14} />}
                  </div>
                  <div>
                    <p className={`font-dm font-semibold text-sm sm:text-base ${i <= currentStatusIndex ? "text-forest" : "text-forest dark:text-cream/60"}`}>{step}</p>
                    {i === currentStatusIndex && <p className="text-xs sm:text-sm text-forest font-dm">Current</p>}
                  </div>
                </div>
              ))}
            </div>

            {order.shippingAddress && (
              <div className="mt-6 sm:mt-8 border-t border-sand/20 dark:border-forest-light/30 pt-4 sm:pt-6">
                <h3 className="mb-2 sm:mb-3 font-playfair text-base sm:text-lg text-forest dark:text-cream">Shipping Address</h3>
                <p className="text-forest dark:text-cream/60 font-dm text-xs sm:text-sm">
                  {order.shippingAddress.name}<br />
                  {order.shippingAddress.address}, {order.shippingAddress.city}<br />
                  {order.shippingAddress.phone} — {order.shippingAddress.postalCode}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 sm:mt-8 text-center">
          <Link to="/products" className="text-sm sm:text-base font-dm font-medium text-forest dark:text-sage hover:text-forest-light">Continue Shopping →</Link>
        </div>
      </div>
    </div>
  );
}

export default TrackOrder;
