import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';
import { galleryCategories } from '../data/placeholderData';

// Default placeholder images using gradient placeholders
const defaultImages = [
  { id: 'default-1', src: 'https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079189/WhatsApp_Image_2026-03-08_at_5.47.15_PM_duq9za.jpg', alt: '', category: 'Campus' },
  { id: 'default-2', src: 'https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079192/WhatsApp_Image_2026-03-08_at_5.38.23_PM_wfklhf.jpg', alt: '', category: 'Campus' },
  { id: 'default-3', src: 'https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079186/WhatsApp_Image_2026-03-08_at_2.13.30_PM_bnw6ha.jpg', alt: '', category: 'Events' },
  { id: 'default-4', src: 'https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079186/WhatsApp_Image_2026-03-08_at_5.47.22_PM_m3rnve.jpg', alt: '', category: 'Events' },
  { id: 'default-5', src: 'https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079186/WhatsApp_Image_2026-03-08_at_2.13.30_PM_1_kkclwk.jpg', alt: '', category: 'Students' },
  { id: 'default-6', src: 'https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079188/WhatsApp_Image_2026-03-08_at_5.47.11_PM_2_ut7vhs.jpg', alt: '', category: 'Students' },
  { id: 'default-7', src: 'https://res.cloudinary.com/dxeqhu87p/image/upload/v1773228031/WhatsApp_Image_2026-03-08_at_5.47.11_PM_1_w1u0fo.jpg', alt: '', category: 'Students' },
  { id: 'default-8', src: 'https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079190/WhatsApp_Image_2026-03-08_at_5.47.16_PM_lq2ikk.jpg', alt: '', category: 'Students' },
  { id: 'default-9', src: 'https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079193/WhatsApp_Image_2026-03-08_at_2.13.25_PM_1_ysubtg.jpg', alt: '', category: 'Students' },
  { id: 'default-10', src: 'https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079191/WhatsApp_Image_2026-03-08_at_5.47.18_PM_2_nxcg9d.jpg', alt: '', category: 'Students' },
  { id: 'default-11', src: 'https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079187/WhatsApp_Image_2026-03-08_at_5.47.10_PM_1_uxfbev.jpg', alt: '', category: 'Events' },
  { id: 'default-12', src: 'https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079189/WhatsApp_Image_2026-03-08_at_5.47.14_PM_ybbl66.jpg', alt: '', category: 'Campus' },
  { id: 'default-13', src: 'https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079189/WhatsApp_Image_2026-03-08_at_5.47.13_PM_wnjxit.jpg', alt: '', category: 'Campus' },
  { id: 'default-14', src: 'https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079191/WhatsApp_Image_2026-03-08_at_5.38.54_PM_auxtw5.jpg', alt: '', category: 'Campus' },
  { id: 'default-15', src: 'https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079191/WhatsApp_Image_2026-03-08_at_5.47.18_PM_2_nxcg9d.jpg', alt: '', category: 'Campus' },
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
      <HeroSection title="Gallery" subtitle="Glimpses of Life at PSAS Inter College" 
      backgroundImage="https://res.cloudinary.com/dxeqhu87p/image/upload/v1773079189/WhatsApp_Image_2026-03-08_at_5.47.15_PM_duq9za.jpg"/>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Photo Gallery"
            subtitle="Click on an album to explore photos"
          />
          <GalleryGrid images={images} categories={galleryCategories} />
        </div>
      </section>
    </div>
  );
}
