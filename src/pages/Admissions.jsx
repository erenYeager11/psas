import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import { admissionProcess, eligibility, schoolInfo } from '../data/placeholderData';

export default function Admissions() {
  return (
    <div>
      <HeroSection
        title="Admissions"
        subtitle="Join the PSAS family — Admissions Open for 2026-27"
        backgroundImage="https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079189/WhatsApp_Image_2026-03-08_at_5.47.15_PM_duq9za.jpg"
      />

      {/* Admission Process */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Admission Process"
            subtitle="A simple and transparent process to welcome your child"
          />
          <div className="max-w-3xl mx-auto">
            {admissionProcess.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent-400 text-white flex items-center justify-center font-heading font-bold text-lg shadow-lg shadow-accent-400/25">
                    {item.step}
                  </div>
                  {index < admissionProcess.length - 1 && (
                    <div className="w-0.5 h-12 bg-accent-200 mx-auto mt-2" />
                  )}
                </div>
                <div className="glass-card p-5 flex-1">
                  <h3 className="font-heading font-semibold text-primary-700 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-primary-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Eligibility Requirements"
            subtitle="Age and documentation requirements for each level"
          />
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <motion.table
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full text-left"
            >
              <thead>
                <tr className="bg-primary-700 text-white">
                  <th className="px-6 py-4 rounded-tl-xl font-heading">Level</th>
                  <th className="px-6 py-4 font-heading">Age</th>
                  <th className="px-6 py-4 rounded-tr-xl font-heading">Requirements</th>
                </tr>
              </thead>
              <tbody>
                {eligibility.map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-surface-50' : 'bg-white'
                    } hover:bg-accent-50 transition-colors duration-200`}
                  >
                    <td className="px-6 py-4 font-semibold text-primary-700 text-sm">{row.level}</td>
                    <td className="px-6 py-4 text-primary-400 text-sm">{row.age}</td>
                    <td className="px-6 py-4 text-primary-400 text-sm">{row.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>
      </section>

      {/* Download & Contact CTA */}
      <section className="section-padding bg-primary-700">
        <div className="container-custom text-center">
          <SectionHeading
            title="Ready to Apply?"
            subtitle="Download the admission form or contact our admissions office for guidance"
            light
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {/* <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Admission Form
            </motion.a> */}
            <motion.a
              href={`tel:${schoolInfo.phone}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="btn-primary border-white text-white hover:bg-white hover:text-primary-700 inline-flex items-center gap-2"
            >
              📞 Call Admissions Office
            </motion.a>
          </div>
          <div className="text-primary-300 text-sm space-y-1">
            <p>📍 {schoolInfo.address}</p>
            <p>📧 {schoolInfo.email}</p>
            <p>📞 {schoolInfo.phone}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
