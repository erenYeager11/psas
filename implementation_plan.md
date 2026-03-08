# Pandit Suryadutt Anandi Saigal Inter College — School Website

Build a modern, responsive school website using **React + Vite + Tailwind CSS v3 + Framer Motion + React Router v6**.

## Proposed Changes

### 1. Project Scaffolding

#### [NEW] Vite + React project at `d:\Cohort & Programming\psas`

- `npx -y create-vite@latest ./ -- --template react`
- Install dependencies: `tailwindcss@3`, `postcss`, `autoprefixer`, `react-router-dom`, `framer-motion`
- Configure Tailwind (`tailwind.config.js`, `postcss.config.js`, `index.css`)
- Add **Google Fonts** (Inter / Outfit) via `index.html` `<link>` tags

---

### 2. Design System & Global Styles

#### [MODIFY] `index.css`

- Tailwind directives (`@tailwind base / components / utilities`)
- Custom color palette: deep navy primary (`#1a2744`), gold accent (`#d4a843`), soft background (`#f8f7f4`)
- Global typography, smooth scrolling, custom component classes

#### [MODIFY] `tailwind.config.js`

- Extend theme with school colors, fonts, animation keyframes

---

### 3. Shared Components

| File | Purpose |
|------|---------|
| `src/components/Navbar.jsx` | Responsive navbar with mobile hamburger menu, dropdown, active link highlighting |
| `src/components/Footer.jsx` | Footer with quick links, social icons, school info |
| `src/components/Card.jsx` | Reusable card for highlights, events, announcements |
| `src/components/GalleryGrid.jsx` | Filterable image grid with lightbox modal |
| `src/components/NoticeBoard.jsx` | Scrollable announcement list |
| `src/components/SectionHeading.jsx` | Consistent section title with animated underline |
| `src/components/HeroSection.jsx` | Reusable hero banner with overlay text |
| `src/components/ScrollToTop.jsx` | Scrolls to top on route change |

---

### 4. Pages

| File | Key Sections |
|------|-------------|
| `src/pages/Home.jsx` | Hero, welcome, highlights, notice board, quick links, featured images |
| `src/pages/About.jsx` | History, mission/vision, principal's message, faculty overview |
| `src/pages/Academics.jsx` | Classes offered, subjects, teaching approach |
| `src/pages/Admissions.jsx` | Process, eligibility, download form button, contact info |
| `src/pages/Gallery.jsx` | Category filter tabs, image grid, lightbox |
| `src/pages/UploadGallery.jsx` | Admin upload form; images persist to localStorage, appear in Gallery |
| `src/pages/Events.jsx` | Event cards, news updates, announcements |
| `src/pages/Contact.jsx` | Address, phone/email, Google Map embed, contact form |

---

### 5. Routing

#### [NEW] `src/router/AppRouter.jsx`

- React Router v6 `<BrowserRouter>` with `<Routes>` for all 8 pages
- `<ScrollToTop>` component to reset scroll on navigation

#### [MODIFY] `src/App.jsx`

- Renders `<AppRouter />`

---

### 6. Assets

- Generate **4–6 placeholder images** using the `generate_image` tool (hero banner, campus, events, students, activities, principal)
- Store in `src/assets/images/`

---

### 7. Animations

- **Framer Motion**: fade-in on scroll (`whileInView`), stagger children on card grids
- **CSS transitions**: hover scale on cards/buttons, smooth navbar transitions
- Keep all animations ≤ 300ms, subtle and professional

---

## Folder Structure

```
psas/
├── public/
├── src/
│   ├── assets/images/          # Placeholder images
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Card.jsx
│   │   ├── GalleryGrid.jsx
│   │   ├── NoticeBoard.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── HeroSection.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Academics.jsx
│   │   ├── Admissions.jsx
│   │   ├── Gallery.jsx
│   │   ├── UploadGallery.jsx
│   │   ├── Events.jsx
│   │   └── Contact.jsx
│   ├── router/
│   │   └── AppRouter.jsx
│   ├── data/
│   │   └── placeholderData.js  # All placeholder text in one file
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## Verification Plan

### Automated (Dev Server)

1. Run `npm run dev` in `d:\Cohort & Programming\psas`
2. Open the local URL in the browser
3. Navigate through **all 8 pages** via the navbar — verify no broken routes
4. Resize browser to mobile/tablet widths — verify responsive layout
5. Test Gallery upload: upload an image on the Admin page, verify it appears on the Gallery page
6. Test lightbox: click a gallery image, verify the modal opens and closes correctly

### Manual (User Review)

- Visually inspect each page for professional styling, animations, and layout
- Confirm placeholder text and images are easy to locate and replace
