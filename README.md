# Studios Prestige — Website

The official website for **Studios Prestige**, a dance school in Laval, Québec, founded in 2008.

**Live site:** deployed on Netlify (auto-deploys from `main` branch)
**Repo:** `ryanburnhamelastic/studio-prestige`

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 7 |
| Styling | Tailwind CSS 3 |
| Routing | React Router DOM 7 |
| Hosting | Netlify (with Forms) |
| i18n | Custom React Context (no external library) |

---

## Project Structure

```
studio-prestige/
├── public/                   # Static assets served as-is
│   ├── logo-ps.png           # PS logo (navbar + favicon)
│   ├── hero-shoes.jpg        # Home page hero image
│   ├── ballet-pointe.jpg     # About page hero image
│   └── teachers.jpg          # Team photo (About + Home)
│
├── src/
│   ├── App.tsx               # Route definitions
│   ├── main.tsx              # App entry point, wraps LanguageProvider
│   ├── index.css             # Global styles, design tokens, glass-nav
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    # Top nav with logo + FR/EN selector
│   │   │   └── Footer.tsx    # Footer with links + contact info
│   │   └── shared/
│   │       └── ScrollToTop.tsx
│   │
│   ├── contexts/
│   │   └── LanguageContext.tsx  # FR/EN locale state + localStorage
│   │
│   ├── i18n/
│   │   └── translations.ts   # All UI strings in FR and EN
│   │
│   ├── data/
│   │   ├── courses.ts        # Course cards data (bilingual fr/en)
│   │   └── schedule.ts       # Schedule table, pricing, discounts
│   │
│   └── pages/
│       ├── Home.tsx
│       ├── Programs.tsx
│       ├── About.tsx
│       ├── Competitive.tsx
│       ├── Schedule.tsx
│       ├── SportsEtudes.tsx
│       ├── Parents.tsx
│       ├── Boutique.tsx
│       ├── Location.tsx
│       └── Contact.tsx
│
├── netlify.toml              # Build config, SPA redirect, headers
└── tailwind.config.js        # Design tokens (colors, fonts, shadows)
```

---

## Local Development

```bash
npm install
npm run dev       # starts at http://localhost:5173
npm run build     # production build → dist/
```

Netlify auto-deploys every push to `main`. No manual deployment needed.

---

## How to Update Common Things

### Schedule (classes, times, days)

**File:** `src/data/schedule.ts`

Each row in the schedule table is one object in the `schedule` array:

```ts
{ category: 'Hip Hop', age: '8-9 ANS', level: 'Débutant', day: 'samedi', time: '11H00-11h45' },
```

- `category` — controls the filter buttons at the top of the page. Use an existing category name for consistency, or add a new string for a new filter.
- `day` — must be lowercase French: `lundi`, `mardi`, `mercredi`, `jeudi`, `vendredi`, `samedi`, `dimanche`. The site automatically translates these to English when the EN locale is active.
- To **add a class**: copy an existing line, paste it, and update the values.
- To **remove a class**: delete that line.
- To **change a time**: edit the `time` string.

### Pricing

**File:** `src/data/schedule.ts` — `pricing` array near the bottom.

```ts
{ duration: '60 mins', price: '$215 +tx' },
```

Edit the `price` string directly. Add or remove objects to add/remove pricing tiers.

### Discounts

**File:** `src/data/schedule.ts` — `discounts` array.

```ts
export const discounts = [
  '-10% deuxième enfant de la même famille',
  '-20% cours additionnelles',
]
```

Each string is one line displayed in the discounts box. Add, edit, or remove strings as needed.

---

### Course Cards (Programs page)

**File:** `src/data/courses.ts`

Courses are defined in two parallel arrays — `coursesFr` and `coursesEn` — that must stay in the same order (same index = same course).

```ts
// French version
{
  name: 'Hip Hop',
  ageRange: 'Cours offerts pour les enfants de 4 et plus',
  description: 'La danse hip-hop désigne...',
  icon: 'headphones',
},

// English version (same position in coursesEn)
{
  name: 'Hip Hop',
  ageRange: 'Classes offered for children ages 4 and up',
  description: 'Hip-hop dance refers to...',
  icon: 'headphones',
},
```

- `icon` — any [Material Symbols](https://fonts.google.com/icons) name (e.g. `balance`, `music_note`, `star`).
- To **add a course**: add an object to the end of **both** `coursesFr` and `coursesEn`.
- To **remove a course**: delete the object from **both** arrays at the same index.

---

### Text & Translations (UI strings)

**File:** `src/i18n/translations.ts`

All button labels, headings, badges, and nav items live here. The file has two top-level keys: `fr` and `en`. Both must always have the same keys.

```ts
home: {
  badge: 'Depuis 2008',        // FR
  ...
},

// and in the en section:
home: {
  badge: 'Since 2008',         // EN
  ...
},
```

To change a label: find the key in both `fr` and `en` and update both strings.

To add a new key: add it to both `fr` and `en` at the same path, then reference it in the component with `t.section.key`.

---

### Photos / Images

**Folder:** `public/`

Drop any image file into `public/` and reference it with a root-relative path in the component:

```tsx
<img src="/my-new-photo.jpg" alt="Description" />
```

**Current images:**
| File | Used in |
|---|---|
| `logo-ps.png` | Navbar, favicon |
| `hero-shoes.jpg` | Home page hero |
| `ballet-pointe.jpg` | About page hero |
| `teachers.jpg` | About (team section) + Home (team card) |

**Still needed (showing placeholder text):**
- Competitive page — competition photo
- Location page — studio rental photo
- Sports-Études page — program photo
- About page — Studio A and Studio B photos

To replace a placeholder: add the image to `public/`, then open the relevant page file and swap the placeholder `<div>` for an `<img>` tag.

---

### Contact Info (address, phone, hours)

Contact details appear in two places: **Contact page** and **Footer**. They are hardcoded (not in translations) since they don't change by language.

- **Contact page:** `src/pages/Contact.tsx` — update the address block and office hours directly in the JSX.
- **Footer:** `src/components/layout/Footer.tsx` — same info repeated; update both files when contact details change.

---

### Navigation Links

**File:** `src/components/layout/Navbar.tsx`

The `navLinks` array controls which links appear in the **desktop nav bar**. The `allLinks` array is used for the **mobile full-screen menu** (includes all pages).

```ts
const navLinks = [
  { to: '/', label: t.nav.home },
  { to: '/programmes', label: t.nav.programs },
  { to: '/a-propos', label: t.nav.about },
  { to: '/competitif', label: t.nav.competitive },
]
```

To add a new page to the nav: add a route in `src/App.tsx`, add the link to both arrays in `Navbar.tsx`, add translation keys in `translations.ts`, and create the page file in `src/pages/`.

---

### Adding a New Page

1. Create `src/pages/NewPage.tsx`
2. Add a route in `src/App.tsx`:
   ```tsx
   const NewPage = lazy(() => import('./pages/NewPage'))
   // ...
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add nav links in `Navbar.tsx` (both `navLinks` and `allLinks` if needed)
4. Add footer link in `Footer.tsx`
5. Add translation keys in `translations.ts` under both `fr` and `en`

---

### Design Tokens (colors, fonts, spacing)

**File:** `tailwind.config.js`

The full color palette, border radii, and shadows are defined here. Key values:

| Token | Value | Used for |
|---|---|---|
| `primary` | `#825b55` | Buttons, headings, links |
| `primary-container` | `#ffcbc4` | CTA section backgrounds |
| `background` | `#fffcf7` | Page background (warm cream) |
| `surface-container-low` | `#fcf9f3` | Section alternating backgrounds |
| `surface-container-lowest` | `#ffffff` | Cards |
| `on-surface` | `#383833` | Body text (never pure black) |
| `tertiary` | `#716252` | Italic accents, secondary text |

Global CSS classes (glass nav, button styles) are in `src/index.css`.

---

### Contact Form

The contact form submits to **Netlify Forms** — no backend or third-party service required. Submissions appear in the Netlify dashboard under **Forms → contact**.

The form is configured in `src/pages/Contact.tsx` with `data-netlify="true"`. No API keys or environment variables needed.

---

### Boutique Order Links

External Google Forms links are hardcoded in `src/pages/Boutique.tsx`. To update an order form URL, find the relevant `<a href="...">` and replace the URL.

---

## Deployment

Every push to `main` triggers an automatic Netlify build (`npm run build`). The build takes ~30 seconds. Check build status in the Netlify dashboard.

If a build fails, the previous deploy stays live — no downtime.
