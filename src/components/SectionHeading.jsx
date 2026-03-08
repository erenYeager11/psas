import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-heading font-bold ${
          light ? 'text-white' : 'text-primary-700'
        }`}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-20 h-1 bg-accent-400 mx-auto mt-4 rounded-full origin-left"
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`mt-4 text-lg max-w-2xl mx-auto ${
            light ? 'text-surface-300' : 'text-primary-400'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
