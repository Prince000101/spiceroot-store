import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function OrderSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 transition-colors duration-500">
      <SEO
        title="Order Confirmed"
        description="Your SpiceRoot order has been placed successfully. Thank you for choosing traditional Maharashtrian masalas."
        url="/order-success"
      />
      <div className="bg-white dark:bg-charcoal-light rounded-[20px] sm:rounded-[28px] shadow-sm border border-sand/20 dark:border-forest-light/30 p-6 sm:p-8 md:p-10 text-center max-w-lg mx-auto">
        <CheckCircle size={64} className="mx-auto text-forest" strokeWidth={1.5} />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-playfair text-forest dark:text-cream mt-4 sm:mt-6">Order Placed Successfully</h1>
        <p className="text-sm sm:text-base text-forest dark:text-cream/60 font-dm mt-3 sm:mt-4">Thank you for shopping with SpiceRoot.</p>
        <Link to="/products" className="inline-block mt-6 sm:mt-8 rounded-full bg-forest px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-cream font-dm font-semibold transition hover:bg-forest-light">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;
