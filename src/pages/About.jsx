import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import {
  aboutHistory,
  missionVision,
  principalMessage,
  faculty,
} from '../data/placeholderData';

export default function About() {
  return (
    <div>
      <HeroSection title="About Us" subtitle="A Legacy of Excellence in Education" 
      backgroundImage="https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079189/WhatsApp_Image_2026-03-08_at_5.47.15_PM_duq9za.jpg"/>

      {/* History */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title={aboutHistory.title} />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-primary-400 text-lg leading-relaxed text-center"
            >
              {aboutHistory.text}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading title="Mission & Vision" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center text-2xl">
                  🎯
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-700">Our Mission</h3>
              </div>
              <p className="text-primary-400 leading-relaxed">{missionVision.mission}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center text-2xl">
                  🌟
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-700">Our Vision</h3>
              </div>
              <p className="text-primary-400 leading-relaxed">{missionVision.vision}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding bg-surface-100">
        <div className="container-custom">
          <SectionHeading title="Principal's Message" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto glass-card p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-primary-200 flex items-center justify-center text-5xl">
                    <img
                      src="https://res.cloudinary.com/dxeqhu87p/image/upload/v1773224660/Gemini_Generated_Image_5c07m65c07m65c07_mbpjye.png"
                      alt={principalMessage.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                </div>
              </div>
              <div>
                <blockquote className="text-primary-400 text-lg leading-relaxed italic mb-4 relative">
                  <span className="text-accent-400 text-4xl absolute -top-4 -left-2">"</span>
                  <span className="pl-6">{principalMessage.message}</span>
                </blockquote>
                <div className="pl-6">
                  <p className="font-heading font-bold text-primary-700">{principalMessage.name}</p>
                  <p className="text-accent-500 text-sm">{principalMessage.title}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Faculty */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Faculty"
            subtitle="Dedicated educators committed to your child's success"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="font-heading font-semibold text-primary-700">{member.name}</h4>
                <p className="text-accent-500 text-sm font-medium">{member.role}</p>
                <p className="text-primary-400 text-sm mt-1">{member.department}</p>
                <p className="text-primary-300 text-xs mt-1">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
