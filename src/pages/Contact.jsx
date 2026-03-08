import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import { schoolInfo } from '../data/placeholderData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>
      <HeroSection title="Contact Us" subtitle="We'd Love to Hear From You" />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <SectionHeading title="Get in Touch" />
              <div className="space-y-6">
                {[
                  { icon: '📍', label: 'Address', value: schoolInfo.address },
                  { icon: '📞', label: 'Phone', value: schoolInfo.phone },
                  { icon: '📧', label: 'Email', value: schoolInfo.email },
                  { icon: '🌐', label: 'Website', value: schoolInfo.website },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-700">{item.label}</p>
                      <p className="text-primary-400 text-sm">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 glass-card p-6"
              >
                <h3 className="font-heading font-semibold text-primary-700 mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm text-primary-400">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-medium text-primary-700">8:00 AM – 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-primary-700">8:00 AM – 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-primary-700">Closed</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div>
              <SectionHeading title="Send a Message" />
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-surface-300 bg-white focus:outline-none focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-surface-300 bg-white focus:outline-none focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 transition-all text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-surface-300 bg-white focus:outline-none focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Inquiry about..."
                      className="w-full px-4 py-3 rounded-xl border border-surface-300 bg-white focus:outline-none focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 transition-all text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-surface-300 bg-white focus:outline-none focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 transition-all text-sm resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message →
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 text-green-700 px-4 py-3 rounded-xl text-sm font-medium text-center"
                  >
                    ✅ Your message has been sent successfully! We'll get back to you soon.
                  </motion.div>
                )}
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="section-padding bg-white pt-0">
        <div className="container-custom">
          <SectionHeading title="Find Us" subtitle="Visit our campus" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg h-[400px]"
          >
            <iframe
              src={schoolInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
