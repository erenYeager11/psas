import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import { classesOffered, departments, teachingApproach } from '../data/placeholderData';

export default function Academics() {
  return (
    <div>
      <HeroSection title="Academics" subtitle="Comprehensive Education from Nursery to Class 12" 
      backgroundImage="https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079189/WhatsApp_Image_2026-03-08_at_5.47.15_PM_duq9za.jpg"/>

      {/* Classes Offered */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Classes Offered"
            subtitle="We provide a structured academic journey from pre-primary to senior secondary"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {classesOffered.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="font-heading font-bold text-primary-700 text-lg mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center text-sm">
                    📖
                  </span>
                  {group.level}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.classes.map((cls) => (
                    <span
                      key={cls}
                      className="px-3 py-1 bg-surface-200 text-primary-500 text-sm rounded-full"
                    >
                      {cls}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Subjects & Departments"
            subtitle="Diverse streams and subjects to match every student's interest"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-3">{dept.icon}</div>
                <h3 className="font-heading font-bold text-primary-700 text-lg mb-3">{dept.name}</h3>
                <ul className="space-y-1">
                  {dept.subjects.map((sub) => (
                    <li key={sub} className="text-primary-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent-400 rounded-full flex-shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="section-padding bg-primary-700">
        <div className="container-custom">
          <SectionHeading
            title="Our Teaching Approach"
            subtitle="Modern, student-centered pedagogy that prepares learners for the future"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teachingApproach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="bg-primary-600/50 border border-primary-500/30 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent-400/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-accent-400 text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="font-heading font-semibold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-primary-200 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
