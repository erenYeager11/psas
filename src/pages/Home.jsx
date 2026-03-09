import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import NoticeBoard from '../components/NoticeBoard';
import {
  schoolInfo,
  welcomeMessage,
  highlights,
  quickLinks,
} from '../data/placeholderData';

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={schoolInfo.name}
        subtitle={schoolInfo.tagline}
        backgroundImage="https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079189/WhatsApp_Image_2026-03-08_at_5.47.15_PM_duq9za.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/admissions" className="btn-primary">
            Apply Now →
          </Link>
          <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-primary-700">
            Learn More
          </Link>
        </div>
      </HeroSection>

      {/* Welcome Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading title={welcomeMessage.title} />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-primary-400 text-lg leading-relaxed"
            >
              {welcomeMessage.text}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose PSAS?"
            subtitle="Discover what makes our institution a leader in education"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {highlights.map((item) => (
              <Card
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Notice Board Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionHeading title="Notice Board" />
              <NoticeBoard />
            </div>
            <div>
              <SectionHeading title="Quick Links" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className="glass-card p-5 flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                        {link.icon}
                      </span>
                      <span className="font-heading font-semibold text-primary-700 group-hover:text-accent-500 transition-colors duration-200">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Images / CTA Section */}
      <section className="section-padding bg-primary-700">
        <div className="container-custom text-center">
          <SectionHeading
            title="Experience Our Campus"
            subtitle="Take a virtual tour of our state-of-the-art facilities"
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Modern Classrooms', emoji: '🏫' },
              { label: 'Science Labs', emoji: '🔬' },
              { label: 'Library', emoji: '📚' },
              { label: 'Sports Ground', emoji: '⚽' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-primary-600/50 border border-primary-500/30 rounded-2xl p-6 text-center hover:bg-primary-600 transition-colors duration-200"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <span className="text-white text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
          <Link to="/gallery" className="btn-primary">
            View Gallery →
          </Link>
        </div>
      </section>
    </div>
  );
}
