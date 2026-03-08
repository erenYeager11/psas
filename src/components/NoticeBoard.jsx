import { motion } from 'framer-motion';
import { announcements } from '../data/placeholderData';

export default function NoticeBoard() {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const typeColors = {
    event: 'bg-blue-100 text-blue-700',
    admission: 'bg-green-100 text-green-700',
    academic: 'bg-purple-100 text-purple-700',
    achievement: 'bg-amber-100 text-amber-700',
    general: 'bg-gray-100 text-gray-700',
  };

  return (
    <div className="glass-card p-6 max-h-[400px] overflow-y-auto">
      <div className="space-y-4">
        {announcements.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex gap-4 p-3 rounded-xl hover:bg-surface-200/50 transition-colors duration-200 border-b border-surface-200 last:border-0"
          >
            <div className="flex-shrink-0 text-center min-w-[60px]">
              <div className="text-sm font-medium text-accent-500">
                {formatDate(item.date)}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-primary-700 text-sm">
                  {item.title}
                </h4>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium uppercase ${
                    typeColors[item.type] || typeColors.general
                  }`}
                >
                  {item.type}
                </span>
              </div>
              <p className="text-primary-400 text-sm">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
