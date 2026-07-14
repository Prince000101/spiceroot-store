import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CookingPot, ShieldCheck, Clock3 } from "lucide-react";
import SEO from "../components/SEO";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    window.location.href = `mailto:prince@creatordev.in?subject=${encodeURIComponent(subject || "Contact from SpiceRoot")}&body=${body}`;
  };

  const features = [
    { icon: <Clock3 size={28} />, title: "Fast Support", desc: "Quick assistance from our kitchen support team." },
    { icon: <ShieldCheck size={28} />, title: "Secure Experience", desc: "Your information stays safe and protected." },
    { icon: <CookingPot size={28} />, title: "Homemade Quality", desc: "Authentic Maharashtrian masalas crafted with love." },
  ];

  const localBusinessLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SpiceRoot",
    url: "https://spiceroot.co",
    email: "prince@creatordev.in",
    telephone: "+91 8178452773",
    address: { "@type": "PostalAddress", addressLocality: "Kolhapur", addressRegion: "Maharashtra", addressCountry: "IN" },
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 py-14 sm:py-20 md:px-14 lg:px-24 transition-colors duration-500 spice-pattern">
      <SEO
        title="Contact Us"
        description="Get in touch with SpiceRoot. Questions about our masalas or orders? Our Kolhapur kitchen team is ready to help."
        keywords="contact SpiceRoot, SpiceRoot support, Kolhapur masala help"
        url="/contact"
        ld={localBusinessLD}
      />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-14 sm:mb-20 max-w-3xl text-center"
      >
        <p className="mb-3 sm:mb-4 uppercase tracking-[4px] sm:tracking-[5px] text-[10px] sm:text-xs text-saffron font-nunito font-bold">SpiceRoot Support</p>
        <h1 className="mb-4 sm:mb-6 font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-forest dark:text-cream">Let's connect</h1>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-forest dark:text-cream/60 font-nunito">
          Questions about our masalas, papad, or orders? Our kitchen team is always ready to help.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-6 sm:gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="recipe-card p-6 sm:p-8 md:p-10"
        >
          <h2 className="mb-8 sm:mb-10 font-playfair text-2xl sm:text-3xl md:text-4xl text-forest dark:text-cream">Contact Information</h2>
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {[
              { icon: <Mail className="text-saffron" size={20} />, title: "Email Address", desc: "prince@creatordev.in" },
              { icon: <Phone className="text-saffron" size={20} />, title: "Phone Number", desc: "+91 8178452773" },
              { icon: <MapPin className="text-saffron" size={20} />, title: "Location", desc: "Maharashtra, India" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 sm:gap-5">
                <div className="rounded-xl sm:rounded-2xl bg-saffron/10 p-3 sm:p-4">{item.icon}</div>
                <div>
                  <h3 className="mb-0.5 sm:mb-1 text-lg sm:text-xl font-playfair text-forest dark:text-cream">{item.title}</h3>
                  <p className="text-sm sm:text-base text-forest dark:text-cream/60 font-nunito">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-10 md:mt-12 rounded-2xl sm:rounded-3xl bg-saffron/5 dark:bg-forest-light/20 p-5 sm:p-6 md:p-8 border border-saffron/10">
            <h3 className="mb-3 sm:mb-4 font-playfair text-2xl sm:text-3xl text-forest dark:text-cream">Kitchen Hours</h3>
            <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-forest dark:text-cream/60 font-nunito">
              <p>Monday – Saturday</p>
              <p>9:00 AM – 8:00 PM</p>
              <p className="text-xs text-forest/50 dark:text-cream/40 mt-2">We cook fresh every morning!</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="recipe-card p-6 sm:p-8 md:p-10"
        >
          <h2 className="mb-8 sm:mb-10 font-playfair text-2xl sm:text-3xl md:text-4xl text-forest dark:text-cream">Send Us A Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
            <input name="name" value={form.name} onChange={handleChange} required type="text" placeholder="Your Name" className="w-full rounded-xl sm:rounded-2xl border border-sand/30 dark:border-forest-light/30 bg-transparent px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none text-forest dark:text-cream font-nunito transition focus:border-saffron" />
            <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Your Email" className="w-full rounded-xl sm:rounded-2xl border border-sand/30 dark:border-forest-light/30 bg-transparent px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none text-forest dark:text-cream font-nunito transition focus:border-saffron" />
            <input name="subject" value={form.subject} onChange={handleChange} type="text" placeholder="Subject" className="w-full rounded-xl sm:rounded-2xl border border-sand/30 dark:border-forest-light/30 bg-transparent px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none text-forest dark:text-cream font-nunito transition focus:border-saffron" />
            <textarea name="message" value={form.message} onChange={handleChange} required rows="5" placeholder="Write your message..." className="w-full rounded-xl sm:rounded-2xl border border-sand/30 dark:border-forest-light/30 bg-transparent px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none text-forest dark:text-cream font-nunito transition focus:border-saffron" />
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="flex w-full items-center justify-center gap-3 rounded-xl sm:rounded-2xl bg-saffron py-3.5 sm:py-4 text-base sm:text-lg font-nunito font-bold text-white transition hover:bg-spice-orange">
              <Send size={18} /> Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 sm:mt-20 md:mt-24 grid max-w-7xl gap-5 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="recipe-card p-5 sm:p-6 md:p-8"
          >
            <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-saffron/10 text-saffron">
              {feature.icon}
            </div>
            <h3 className="mb-3 sm:mb-4 font-playfair text-xl sm:text-2xl text-forest dark:text-cream">{feature.title}</h3>
            <p className="leading-relaxed text-sm sm:text-base text-forest dark:text-cream/60 font-nunito">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
