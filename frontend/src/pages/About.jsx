import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CookingPot, Wheat, ShieldCheck, Sparkles, Star, Heart } from "lucide-react";
import ImageWithSkeleton from "../components/ImageWithSkeleton";
import SEO from "../components/SEO";

export default function About() {
  const timeline = [
    {
      year: "2012",
      title: "The Beginning",
      desc: "Anand Deshmukh begins making masalas in his Kolhapur kitchen, using recipes passed down from his grandmother. Neighbors start asking to buy them.",
    },
    {
      year: "2015",
      title: "Word Spreads",
      desc: "SpiceRoot becomes a favorite in Kolhapur's local markets. The family installs traditional stone grinders to meet growing demand while maintaining quality.",
    },
    {
      year: "2018",
      title: "Maharashtra Embraces SpiceRoot",
      desc: "Online orders pour in from Pune, Mumbai, Nashik, and across Maharashtra. The Deshmukh family expands their spice sourcing network to trusted farms.",
    },
    {
      year: "2021",
      title: "Pan-India Reach",
      desc: "SpiceRoot begins shipping across India. The Kolhapuri Kanda Lasun Masala becomes the top-selling regional masala on the platform.",
    },
    {
      year: "2025",
      title: "Today",
      desc: "SpiceRoot serves customers across India and internationally. Still stone-ground. Still family recipes. Still made with love in Kolhapur.",
    },
  ];

  const values = [
    {
      icon: <CookingPot size={28} />,
      title: "Authentic",
      desc: "Every recipe traces back four generations in the Deshmukh family. No commercial shortcuts, no modern adaptations. Real Maharashtrian masalas.",
    },
    {
      icon: <Wheat size={28} />,
      title: "Handmade",
      desc: "We use traditional stone grinders, not industrial machines. This preserves the essential oils and creates the authentic texture of homemade masala.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Family-Owned",
      desc: "Three generations work together at SpiceRoot. Every decision is made at the family dining table, not in a boardroom.",
    },
    {
      icon: <Sparkles size={28} />,
      title: "Traditional",
      desc: "Our recipes come from the kitchens of Kolhapur, Pune, and the Konkan coast. We preserve Maharashtra's culinary heritage, one blend at a time.",
    },
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
    <div className="min-h-screen transition-colors duration-500">
      <SEO
        title="Our Story"
        description="The SpiceRoot story — four generations of Maharashtrian spice wisdom. Learn how a family kitchen in Kolhapur became a beloved masala brand."
        keywords="SpiceRoot story, about SpiceRoot, Kolhapur masala brand, Maharashtrian spice heritage"
        url="/about"
        ld={organizationLD}
      />
      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-14 lg:px-24 py-16 sm:py-20 gap-10 sm:gap-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-center md:text-left"
        >
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <div className="h-px w-12 bg-saffron" />
            <p className="text-xs uppercase tracking-[4px] sm:tracking-[5px] text-saffron font-nunito font-bold">
              Our Story
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-charcoal dark:text-warm-white mb-4 sm:mb-6 leading-tight">
            Born in a small<br />
            <span className="text-saffron italic">kitchen in Kolhapur.</span>
          </h1>
          <p className="text-sm sm:text-base text-charcoal/70 dark:text-warm-white/70 font-nunito mb-4 leading-relaxed">
            At SpiceRoot, we bring the warmth of a Maharashtrian grandmother's kitchen into modern homes.
            Our mission is to preserve traditional masala recipes that have been passed down through
            four generations of the Deshmukh family.
          </p>
          <p className="text-sm sm:text-base text-charcoal/70 dark:text-warm-white/70 font-nunito mb-6 sm:mb-8 leading-relaxed">
            Every blend is hand-ground in small batches using traditional stone grinders, ensuring
            the authentic taste of homemade masalas reaches your plate. Nothing here is fast,
            and nothing here is hidden.
          </p>
          <Link to="/products" className="inline-block rounded-full bg-saffron px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-nunito font-semibold text-white shadow-md hover:bg-saffron-dark transition-all hover:scale-105">
            Shop Our Masalas
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="shrink-0 w-full md:w-auto"
        >
          <div className="w-full max-w-[500px] mx-auto h-[350px] sm:h-[450px] md:h-[550px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl bg-gradient-to-br from-saffron/20 to-earth/20">
            <ImageWithSkeleton
              src="/uploads/21.jpg"
              alt="SpiceRoot masala grinding tradition"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      <div className="border-t border-saffron/20 dark:border-earth/30 mx-4 sm:mx-6 md:mx-14 lg:mx-24 mb-16" />

      {/* TIMELINE */}
      <section className="px-4 sm:px-6 md:px-14 lg:px-24 py-16 sm:py-24 bg-earth text-warm-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="mb-3 text-xs uppercase tracking-[4px] sm:tracking-[5px] text-saffron font-nunito font-bold">
              Our Journey
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair">
              The SpiceRoot Story
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-saffron/20 -translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-saffron rounded-full -translate-x-1/2 mt-1 z-10 border-2 border-earth" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-3xl sm:text-4xl font-playfair text-saffron">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-playfair mt-2 mb-2 text-warm-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-warm-white/60 font-nunito leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KOLHAPUR CONNECTION */}
      <section className="px-4 sm:px-6 md:px-14 lg:px-24 py-16 sm:py-24 bg-warm-white dark:bg-charcoal">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl"
          >
            <img
              src="/uploads/01.jpg"
              alt="SpiceRoot Kolhapur heritage"
              className="w-full h-[350px] sm:h-[450px] object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-saffron" />
              <p className="text-xs uppercase tracking-[4px] sm:tracking-[5px] text-saffron font-nunito font-bold">
                Kolhapur Roots
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair mb-6 text-charcoal dark:text-warm-white">
              From Kolhapur<br />
              <span className="text-saffron italic">with love.</span>
            </h2>
            <p className="text-base leading-relaxed text-charcoal/70 dark:text-warm-white/70 font-nunito mb-4">
              Kolhapur is not just where we are from — it is who we are. The city's fiery cuisine,
              its love for bold flavors, and its tradition of homemade masalas are baked into
              every blend we create.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 dark:text-warm-white/70 font-nunito mb-4">
              From the misal pav stalls of Rajarampuri to the nonchalant home kitchens of
              Shahupuri, SpiceRoot masalas have been part of Kolhapur's culinary fabric for
              over a decade.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 dark:text-warm-white/70 font-nunito">
              The Deshmukh kitchen still stands. The stone grinders still turn.
              And the family still stands behind every packet that leaves our hands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-4 sm:px-6 md:px-14 lg:px-24 py-16 sm:py-24 bg-warm-cream-light dark:bg-charcoal-light/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="mb-3 text-xs uppercase tracking-[4px] sm:tracking-[5px] text-saffron font-nunito font-bold">
              Our Values
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-charcoal dark:text-warm-white">
              What We <span className="text-saffron italic">Stand For</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="rounded-[24px] sm:rounded-[28px] bg-white dark:bg-charcoal p-6 sm:p-8 shadow-sm border border-saffron/10 dark:border-earth/20 hover:shadow-lg hover:border-saffron/20 transition-all duration-300"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[16px] bg-saffron/10 text-saffron">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-lg sm:text-xl mb-2 text-charcoal dark:text-warm-white">
                  {item.title}
                </h3>
                <p className="text-charcoal/70 dark:text-warm-white/60 font-nunito text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPER CREDIT */}
      <section className="px-4 sm:px-6 md:px-14 lg:px-24 py-12 bg-charcoal">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="text-saffron" size={16} />
            <p className="text-xs uppercase tracking-[3px] text-warm-white/40 font-nunito font-bold">
              Crafted With Passion
            </p>
            <Star className="text-saffron" size={16} />
          </div>
          <p className="text-sm font-nunito text-warm-white/30">
            Built by <span className="text-saffron/70 font-semibold">Prince</span> | <span className="text-sage/70 font-semibold">Creator Dev</span>
          </p>
        </div>
      </section>
    </div>
  );
}
