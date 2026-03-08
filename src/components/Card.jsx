import { motion } from 'framer-motion';

export default function Card({ icon, title, description, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`glass-card p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {icon && (
        <div className="text-4xl mb-4">{icon}</div>
      )}
      <h3 className="text-xl font-heading font-semibold text-primary-700 mb-2">
        {title}
      </h3>
      <p className="text-primary-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
