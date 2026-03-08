import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import { galleryCategories } from '../data/placeholderData';

export default function UploadGallery() {
  const [uploads, setUploads] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Campus');
  const [altText, setAltText] = useState('');
  const [preview, setPreview] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('psas-gallery-uploads') || '[]');
    setUploads(stored);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      setPreview(ev.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    if (!preview) return;

    const newImage = {
      id: `upload-${Date.now()}`,
      src: preview,
      alt: altText || 'Uploaded Image',
      category: selectedCategory,
    };

    const updated = [newImage, ...uploads];
    setUploads(updated);
    localStorage.setItem('psas-gallery-uploads', JSON.stringify(updated));

    // Reset form
    setPreview(null);
    setAltText('');
    if (fileInputRef.current) fileInputRef.current.value = '';
    setSuccessMsg('Image uploaded successfully! It will now appear in the Gallery.');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleDelete = (id) => {
    const updated = uploads.filter((img) => img.id !== id);
    setUploads(updated);
    localStorage.setItem('psas-gallery-uploads', JSON.stringify(updated));
  };

  return (
    <div>
      <HeroSection title="Gallery Upload" subtitle="Admin — Upload Images to the School Gallery" />

      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto">
          <SectionHeading title="Upload New Image" />

          {/* Upload Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8"
          >
            <div className="space-y-6">
              {/* File Input */}
              <div>
                <label className="block text-sm font-semibold text-primary-700 mb-2">
                  Select Image
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full text-sm text-primary-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-accent-100 file:text-accent-700 hover:file:bg-accent-200 transition-colors"
                />
              </div>

              {/* Preview */}
              {preview && (
                <div className="relative rounded-xl overflow-hidden aspect-video bg-surface-200">
                  <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}

              {/* Alt Text */}
              <div>
                <label className="block text-sm font-semibold text-primary-700 mb-2">
                  Image Title / Alt Text
                </label>
                <input
                  type="text"
                  value={altText}
                  onChange={(e) => setAltText(e.target.value)}
                  placeholder="e.g. Annual Day Stage Performance"
                  className="w-full px-4 py-3 rounded-xl border border-surface-300 bg-white focus:outline-none focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 transition-all text-sm"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-primary-700 mb-2">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {galleryCategories.filter((c) => c !== 'All').map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedCategory === cat
                          ? 'bg-accent-400 text-white shadow-md'
                          : 'bg-surface-200 text-primary-500 hover:bg-surface-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Upload Button */}
              <button
                onClick={handleUpload}
                disabled={!preview}
                className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-200 ${
                  preview
                    ? 'bg-accent-400 hover:bg-accent-500 shadow-lg shadow-accent-400/25'
                    : 'bg-surface-300 cursor-not-allowed'
                }`}
              >
                Upload to Gallery
              </button>

              {/* Success Message */}
              {successMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 text-green-700 px-4 py-3 rounded-xl text-sm font-medium text-center"
                >
                  ✅ {successMsg}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Uploaded Images List */}
          {uploads.length > 0 && (
            <div className="mt-12">
              <SectionHeading title="Uploaded Images" subtitle={`${uploads.length} image(s) uploaded`} />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {uploads.map((img) => (
                  <div key={img.id} className="relative group rounded-xl overflow-hidden aspect-[4/3] bg-surface-200">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <button
                        onClick={() => handleDelete(img.id)}
                        className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                      <p className="text-white text-xs truncate">{img.alt}</p>
                      <span className="text-accent-300 text-[10px]">{img.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
