import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GalleryGrid({ images, categories }) {
  const [openAlbum, setOpenAlbum] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Group images by category (exclude "All")
  const albums = (categories || [])
    .filter((cat) => cat !== 'All')
    .map((cat) => {
      const albumImages = images.filter((img) => img.category === cat);
      return {
        name: cat,
        images: albumImages,
        cover: albumImages[0]?.src || 'https://placehold.co/600x400/1a2744/d4a843?text=' + cat,
        count: albumImages.length,
      };
    })
    .filter((album) => album.count > 0);

  return (
    <div>
      <AnimatePresence mode="wait">
        {!openAlbum ? (
          /* ── Album Cards View ── */
          <motion.div
            key="albums"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {albums.map((album, index) => (
              <motion.div
                key={album.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setOpenAlbum(album.name)}
                className="cursor-pointer group relative overflow-hidden rounded-2xl bg-surface-200 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Cover Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={album.cover}
                    alt={album.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent flex flex-col justify-end p-5">
                  <h3 className="text-white text-xl font-bold">{album.name}</h3>
                  <p className="text-accent-300 text-sm mt-1">{album.count} {album.count === 1 ? 'Photo' : 'Photos'}</p>
                </div>

                {/* Stacked card effect */}
                <div className="absolute -bottom-1 left-2 right-2 h-3 bg-white/20 rounded-b-2xl -z-10" />
                <div className="absolute -bottom-2 left-4 right-4 h-3 bg-white/10 rounded-b-2xl -z-20" />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* ── Album Detail View (images inside a category) ── */
          <motion.div
            key="album-detail"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
          >
            {/* Back Button */}
            <button
              onClick={() => setOpenAlbum(null)}
              className="mb-6 flex items-center gap-2 text-primary-600 hover:text-accent-500 font-semibold transition-colors group"
            >
              <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
              Back to Albums
            </button>

            <h2 className="text-2xl font-bold text-primary-800 mb-6">{openAlbum}</h2>

            {/* Images Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {images
                  .filter((img) => img.category === openAlbum)
                  .map((img, i) => (
                    <motion.div
                      key={img.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ y: -4 }}
                      onClick={() => setLightboxImage(img)}
                      className="cursor-pointer group relative overflow-hidden rounded-2xl aspect-[4/3] bg-surface-200"
                    >
                      <img
                        src={img.src}
                        alt={img.alt || 'Gallery image'}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4">
                          <span className="text-white text-sm font-medium">{img.alt}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {albums.length === 0 && !openAlbum && (
        <p className="text-center text-primary-400 py-12">No images in the gallery yet.</p>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full"
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-700 hover:bg-accent-400 hover:text-white transition-colors shadow-lg"
              >
                ✕
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                <p className="text-white font-medium">{lightboxImage.alt}</p>
                {lightboxImage.category && (
                  <p className="text-accent-300 text-sm">{lightboxImage.category}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
