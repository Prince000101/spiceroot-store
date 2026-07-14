import { useState } from "react";
import { toast } from "react-toastify";
import { CookingPot } from "lucide-react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    const existing = JSON.parse(localStorage.getItem("spicerootNewsletter") || "[]");
    if (existing.includes(email)) {
      toast.info("Already subscribed!");
      return;
    }
    existing.push(email);
    localStorage.setItem("spicerootNewsletter", JSON.stringify(existing));
    toast.success("Subscribed! Welcome to the SpiceRoot family.");
    setEmail("");
  };

  return (
    <section className="mx-6 my-20 rounded-3xl bg-linear-to-r from-saffron to-spice-orange px-6 py-16 text-white shadow-2xl relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 animate-blob-morph" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <CookingPot size={32} strokeWidth={1.5} />
          <span className="text-2xl font-playfair font-bold">SpiceRoot</span>
        </div>
        <h2 className="text-4xl font-playfair font-bold">
          Join Our Kitchen Family
        </h2>
        <p className="mt-4 text-lg text-orange-100 font-nunito">
          Get authentic Maharashtrian recipes, spice tips, exclusive offers,
          and be the first to know about new masalas.
        </p>
        <form onSubmit={handleSubmit} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full sm:w-96 rounded-2xl border border-white/20 bg-white px-5 py-4 text-forest outline-none font-nunito"
          />
          <button
            type="submit"
            className="rounded-2xl bg-forest px-8 py-4 font-nunito font-bold text-white transition hover:scale-105 hover:bg-bark"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
