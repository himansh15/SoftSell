import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="py-16 bg-[var(--bg-main)] transition-colors duration-300">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
          style={{ color: 'var(--primary)' }}
        >
          Unlock Value from Unused Software Licenses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="text-lg md:text-xl mb-8"
          style={{ color: 'var(--text-main)' }}
        >
          SoftSell helps you turn unused software into cash, connecting you with buyers instantly and securely.
        </motion.p>
        <a
          href="#contact"
          className="bg-[var(--primary)] hover:opacity-90 text-white px-8 py-3 rounded-[var(--button-radius)] font-semibold shadow transition inline-block"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
}