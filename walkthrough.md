# PSAS Inter College — School Website Walkthrough

## What Was Built

A complete, modern, responsive school website for **Pandit Suryadutt Anandi Saigal Inter College** using:

| Technology | Purpose |
|---|---|
| **Vite + React** | Build tool and UI framework |
| **Tailwind CSS v3** | Utility-first styling |
| **Framer Motion** | Subtle scroll and hover animations |
| **React Router v6** | Client-side routing |

---

## Pages Delivered (8 total)

| Page | Route | Key Features |
|---|---|---|
| Home | `/` | Hero, welcome, highlights, notice board, quick links, campus CTA |
| About | `/about` | History, mission/vision, principal's message, faculty grid |
| Academics | `/academics` | Classes (Nursery–12), departments, teaching approach |
| Admissions | `/admissions` | Step-by-step process, eligibility table, download form CTA |
| Gallery | `/gallery` | Category filters, image grid with lightbox |
| Gallery Upload | `/admin/upload` | Admin image upload with localStorage persistence |
| Events & News | `/events` | Event cards with date banners, news updates |
| Contact | `/contact` | Contact form, office hours, Google Map embed |

---

## Screenshots

````carousel
![Home — Notice Board & Quick Links](C:\Users\Husain\.gemini\antigravity\brain\3183c5b4-76f3-46dc-9b92-693105b35b60\.system_generated\click_feedback\click_feedback_1772962049246.png)
<!-- slide -->
![Home — Campus Section & Footer](C:\Users\Husain\.gemini\antigravity\brain\3183c5b4-76f3-46dc-9b92-693105b35b60\.system_generated\click_feedback\click_feedback_1772962044073.png)
<!-- slide -->
![Academics Page](C:\Users\Husain\.gemini\antigravity\brain\3183c5b4-76f3-46dc-9b92-693105b35b60\academics_page_top_1772962106213.png)
<!-- slide -->
![Admissions Page](C:\Users\Husain\.gemini\antigravity\brain\3183c5b4-76f3-46dc-9b92-693105b35b60\admissions_page_top_1772962120853.png)
<!-- slide -->
![Gallery Page](C:\Users\Husain\.gemini\antigravity\brain\3183c5b4-76f3-46dc-9b92-693105b35b60\gallery_page_top_1772962130393.png)
<!-- slide -->
![Events Page](C:\Users\Husain\.gemini\antigravity\brain\3183c5b4-76f3-46dc-9b92-693105b35b60\events_page_top_1772962144083.png)
<!-- slide -->
![Contact Page](C:\Users\Husain\.gemini\antigravity\brain\3183c5b4-76f3-46dc-9b92-693105b35b60\contact_page_full_1772962153350.png)
````

---

## Folder Structure

```
psas/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive nav with mobile menu
│   │   ├── Footer.jsx          # Links, social icons, copyright
│   │   ├── Card.jsx            # Reusable glass-card
│   │   ├── GalleryGrid.jsx     # Filterable grid + lightbox
│   │   ├── HeroSection.jsx     # Page hero with wave divider
│   │   ├── NoticeBoard.jsx     # Announcement list
│   │   ├── SectionHeading.jsx  # Animated section title
│   │   └── ScrollToTop.jsx     # Reset scroll on route change
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Academics.jsx
│   │   ├── Admissions.jsx
│   │   ├── Gallery.jsx
│   │   ├── UploadGallery.jsx
│   │   ├── Events.jsx
│   │   └── Contact.jsx
│   ├── router/AppRouter.jsx
│   ├── data/placeholderData.js  # ← All placeholder content here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## How to Run

```bash
# Due to path spaces, use:
node ./node_modules/vite/bin/vite.js --host

# Opens at http://localhost:5173/
```

## How to Customize

- **All placeholder text** is in [placeholderData.js](file:///d:/Cohort%20&%20Programming/psas/src/data/placeholderData.js) — update school name, address, announcements, faculty, etc.
- **Colors** are defined in [tailwind.config.js](file:///d:/Cohort%20&%20Programming/psas/tailwind.config.js) under `colors.primary` and `colors.accent`
- **Gallery images** — replace the `placehold.co` URLs in [Gallery.jsx](file:///d:/Cohort%20&%20Programming/psas/src/pages/Gallery.jsx) with real images, or use the admin upload page at `/admin/upload`

## Verification

- ✅ All 8 pages load without errors
- ✅ Navbar navigation works between all routes
- ✅ Active page highlighting in navbar
- ✅ Responsive mobile hamburger menu
- ✅ Framer Motion animations render smoothly
- ✅ Footer with quick links and social icons
- ✅ Gallery category filters functional
- ✅ Contact form renders with validation
