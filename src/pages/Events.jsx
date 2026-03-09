import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import { events, news } from '../data/placeholderData';

export default function Events() {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-IN', { month: 'short' }),
      year: date.getFullYear(),
    };
  };

  const categoryColors = {
    Cultural: 'bg-purple-100 text-purple-700',
    National: 'bg-orange-100 text-orange-700',
    Sports: 'bg-green-100 text-green-700',
    Academic: 'bg-blue-100 text-blue-700',
    Activities: 'bg-pink-100 text-pink-700',
  };

  return (
    <div>
      <HeroSection title="Events & News" subtitle="Stay Updated with What's Happening at PSAS"
      backgroundImage="https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079189/WhatsApp_Image_2026-03-08_at_5.47.15_PM_duq9za.jpg" />

      {/* Events */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Mark your calendar for these exciting events"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {events.map((event, index) => {
              const date = formatDate(event.date);
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Date Banner */}
                  <div className="bg-primary-700 text-white px-6 py-4 flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-heading font-bold leading-none">{date.day}</div>
                      <div className="text-xs uppercase tracking-wider text-primary-200">{date.month}</div>
                    </div>
                    <div className="w-px h-10 bg-primary-500" />
                    <div className="flex-1">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium uppercase ${
                          categoryColors[event.category] || 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-primary-700 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-primary-400 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Latest News"
            subtitle="Recent updates and achievements from our school"
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 flex gap-6 items-start hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center text-2xl">
                  📰
                </div>
                <div>
                  <p className="text-accent-500 text-xs font-medium mb-1">
                    {new Date(item.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  <h3 className="font-heading font-semibold text-primary-700 mb-1">{item.title}</h3>
                  <p className="text-primary-400 text-sm">{item.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
