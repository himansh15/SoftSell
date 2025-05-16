import { BanknotesIcon, ShieldCheckIcon, CheckBadgeIcon, TagIcon } from '@heroicons/react/24/outline';
import { motion } from "framer-motion";

const points = [
  {
    icon: <BanknotesIcon className="w-8 h-8 text-[var(--primary)]" />,
    title: "Quick Payment",
    desc: "Receive your money within 24 hours after agreement."
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8 text-[var(--primary)]" />,
    title: "Secure Transfers",
    desc: "Trusted, secure license handling every step of the way."
  },
  {
    icon: <TagIcon className="w-8 h-8 text-[var(--primary)]" />,
    title: "Best Market Prices",
    desc: "Transparent, competitive, and fair offers — always."
  },
  {
    icon: <CheckBadgeIcon className="w-8 h-8 text-[var(--primary)]" />,
    title: "No Hidden Fees",
    desc: "Quotes are 100% free. Absolutely no hidden charges."
  }
];

// Framer motion variants for parent grid and cards
const gridVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 18 } }
};

export default function WhyChooseUs() {
  return (
    <motion.section
      className="py-16 bg-[var(--bg-main)] transition-colors duration-300"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl font-bold mb-8 text-center"
          style={{ color: "var(--text-main)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Why Choose SoftSell
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={gridVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {points.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              className="bg-[var(--bg-main)] rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition"
              style={{ color: "var(--text-main)" }}
              whileHover={{ scale: 1.04, boxShadow: "0px 8px 28px var(--primary, #6366f1)" }}
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-1" style={{ color: "var(--text-main)" }}>
                {item.title}
              </h3>
              <p style={{ color: "var(--text-main)", opacity: 0.7 }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}