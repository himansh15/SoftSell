import { CloudArrowUpIcon, CurrencyDollarIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <CloudArrowUpIcon className="w-12 h-12 text-[var(--primary)]" />,
    title: "Upload License",
    desc: "Provide details of your unused software licenses."
  },
  {
    icon: <CurrencyDollarIcon className="w-12 h-12 text-[var(--primary)]" />,
    title: "Get Valuation",
    desc: "Receive a market-driven valuation in minutes."
  },
  {
    icon: <CreditCardIcon className="w-12 h-12 text-[var(--primary)]" />,
    title: "Get Paid",
    desc: "Accept our offer and get paid instantly."
  }
];

// Framer Motion Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18
    }
  }
};
const card = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 14 } }
};

export default function HowItWorks() {
  return (
    <motion.section
      className="py-16 bg-[var(--bg-main)] transition-colors duration-300"
      id="how"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center"
          style={{ color: 'var(--text-main)' }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.09 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={card}
              whileHover={{
                scale: 1.06,
                boxShadow: '0px 8px 28px var(--primary, #6366f1)'
              }}
              className="flex flex-col items-center text-center bg-[var(--bg-main)] rounded-xl shadow-lg p-8 transition"
              style={{ color: 'var(--text-main)' }}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--text-main)' }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--text-main)', opacity: 0.7 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}