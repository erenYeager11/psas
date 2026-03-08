import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';
import { galleryCategories } from '../data/placeholderData';

// Default placeholder images using gradient placeholders
const defaultImages = [
  { id: 'default-1', src: 'https://placehold.co/600x400/1a2744/d4a843?text=School+Campus', alt: 'School Campus', category: 'Campus' },
  { id: 'default-2', src: 'https://placehold.co/600x400/2e4870/ffffff?text=Main+Building', alt: 'Main Building', category: 'Campus' },
  { id: 'default-3', src: 'https://placehold.co/600x400/3a5a8c/ffffff?text=Annual+Day', alt: 'Annual Day Celebration', category: 'Events' },
  { id: 'default-4', src: 'https://placehold.co/600x400/d4a843/1a2744?text=Science+Fair', alt: 'Science Fair', category: 'Events' },
  { id: 'default-5', src: 'https://placehold.co/600x400/5573a3/ffffff?text=Students', alt: 'Students in Classroom', category: 'Students' },
  { id: 'default-6', src: 'https://placehold.co/600x400/1a2744/d4a843?text=Library', alt: 'School Library', category: 'Campus' },
  { id: 'default-7', src: 'https://placehold.co/600x400/2e4870/ffffff?text=Sports+Day', alt: 'Sports Day', category: 'Activities' },
  { id: 'default-8', src: 'https://placehold.co/600x400/c49530/ffffff?text=Art+Exhibition', alt: 'Art Exhibition', category: 'Activities' },
  { id: 'default-9', src: 'https://placehold.co/600x400/3a5a8c/ffffff?text=Computer+Lab', alt: 'Computer Lab', category: 'Campus' },
  { id: 'default-10', src: 'https://placehold.co/600x400/5573a3/ffffff?text=Morning+Assembly', alt: 'Morning Assembly', category: 'Students' },
  { id: 'default-11', src: 'https://placehold.co/600x400/1a2744/d4a843?text=Prize+Distribution', alt: 'Prize Distribution', category: 'Events' },
  { id: 'default-12', src: 'https://placehold.co/600x400/d4a843/1a2744?text=Yoga+Session', alt: 'Yoga Session', category: 'Activities' },
];

export default function Gallery() {
  const [images, setImages] = useState(defaultImages);

  useEffect(() => {
    // Load uploaded images from localStorage
    const uploaded = JSON.parse(localStorage.getItem('psas-gallery-uploads') || '[]');
    if (uploaded.length > 0) {
      setImages([...uploaded, ...defaultImages]);
    }
  }, []);

  return (
    <div>
      <HeroSection title="Gallery" subtitle="Glimpses of Life at PSAS Inter College" />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Photo Gallery"
            subtitle="Explore our campus, events, and student life"
          />
          <GalleryGrid images={images} categories={galleryCategories} />
        </div>
      </section>
    </div>
  );
}
