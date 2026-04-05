# Project Design Review (PDR)
# Studio Prestige - Website Redesign

**Project:** Studios Prestige (École de danse Prestige)
**Date:** 2026-04-04
**Status:** Planning
**Domain:** www.studiosprestige.com
**Location:** 1774 boul. des Laurentides, Laval, QC H7M 2P6

---

## 1. Executive Summary

Studios Prestige is a well-established dance school in Laval, Quebec (operating since 1998) that requires a complete website redesign. The current site is visually outdated with a flat blue color scheme, broken images, poor typography, and no mobile optimization. The new design, created via Stitch, introduces a premium "Editorial Nurture" aesthetic with warm earth tones, editorial typography, and a modern component system.

**Critical constraint:** All existing content/copy must be preserved verbatim in French. No information can be lost during the redesign.

---

## 2. Current Site Audit

### 2.1 Current State Assessment

| Aspect | Current State | Rating |
|--------|--------------|--------|
| Visual Design | Flat blue (#2196F3) backgrounds, no visual hierarchy | Poor |
| Typography | Generic bold headings, no typographic system | Poor |
| Images | Multiple broken image links (missing src) | Critical |
| Mobile Responsiveness | Not responsive, fixed widths | Poor |
| Navigation | Single-page scrolling, no clear nav structure | Poor |
| Performance | Heavy social media embeds (Facebook/Instagram full-size) | Poor |
| SEO | Minimal meta tags, no structured data | Poor |
| Accessibility | No ARIA labels, poor contrast in places | Poor |
| Contact Form | Basic HTML form with no validation | Fair |
| Logo/Branding | Strong "PS" interlocking logo (black/white) - well known | Good |

### 2.2 Current Content Inventory (MUST PRESERVE)

#### Section: A PROPOS
- **NOS STUDIOS:** "Situee a Laval, notre ecole propose deux grands studios equipes de miroirs, parfaits pour divers evenements. Que ce soit pour des sessions corporatives, des cours prives ou des fetes d'anniversaire, nos espaces sont disponibles a la location a l'heure. N'hesitez pas a nous contacter pour plus d'informations et pour reserver votre creneau !"
- **NOTRE EQUIPE:** "Passionnee, dynamique et toujours prete a danser, notre equipe de professeurs devoues est veritablement l'ame de la famille Prestige. Leur enthousiasme et leur expertise creent un environnement inspirant ou chacun peut s'epanouir et developper ses competences."
- **NOS COURS:** "Peu importe votre age ou votre experience, notre vaste gamme de cours et nos disponibilites flexibles ont de quoi satisfaire tous les danseurs. *Cours prives sont egalement offerts selon nos disponibilites."

#### Section: SESSION HIVER 2026
- Dates: 10 JANVIER - 24 AVRIL
- Pre-inscriptions: VENDREDI 28 NOVEMBRE a 10H (pour membres de la famille Prestige)
- Inscriptions generales: 2 DECEMBRE, 2025 (en ligne seulement)
- Confirmation par courriel avec montant a payer
- *Les places sont limitees
- **Un frais d'inscription unique de $35 sera applique a chaque nouveau inscription

#### Section: HORAIRE DES COURS (Full Schedule Table)

**BALLET-JAZZ:**
| Age | Niveau | Jour | Heure |
|-----|--------|------|-------|
| 2-3 ANS | Debutant | samedi | 9H00-9H30 |
| 2-3 ANS | Debutant | samedi | 10h45-11h15 |
| 2-3 ANS | Debutant | lundi | 17H30-18H00 |
| 4-6 ANS | Debutant | samedi | 9H45-10H30 |
| 4-6 ANS | Debutant | samedi | 11H30-12H15 |

**BALLET CLASSIQUE:**
| 7-9 ANS | Debutant-Intermediaire | dimanche | 10h15-11h15 |

**FORMATION (Jazz, Claquette, Hip Hop):**
| 7-9 ANS | Debutant-Intermediaire | samedi | 13h00-14h15 |
| 13 ANS + | Debutant-Intermediaire | lundi | 18h00-19h15 |

**CONTEMPORAINE:**
| 8-11 ANS | Debutant-Intermediaire | dimanche | 11h15-12h15 |
| 12 ANS + | Debutant-Intermediaire | dimanche | 12h15-13h15 |

**STYLE LIBRE:**
| 14 ANS + | Intermediaire | "RELEVE" | lundi | 19h45-21H30 |
| ADULTE | Intermediaire-Avance | "TROUPE JR" | jeudi | 20h00-21h45 |
| ADULTE | Avance | TROUPE | mercredi | 19h30-21h45 |

**ACRO:**
| 6 ans + | Debutant-Avance | samedi | 14H15-15H15 |

**TECHNIQUE:**
| Intermediaire-Avance | dimanche | 10h30-11h45 |

**HIP HOP:**
| 4-5 ANS | Debutant | samedi | 9h15-10H00 |
| 6-7 ANS | Debutant | samedi | 10H15-11H00 |
| 8-9 ANS | Debutant | samedi | 11H00-11h45 |
| 10-11 ANS | Debutant-Intermediaire | samedi | 13H00-14H00 |
| 12 ANS+ | Debutant-Intermediaire | lundi | 19h15-20h15 |
| ADULTE | Debutant-Intermediaire | lundi | 20h15-21h15 |

**GROUPES COMPETITIFS:**
| Debutant | PRE-COMP | samedi | 11h45-13h00 |
| Intermediaire-Avance | CONTEMPORAIN | lundi | 18h30-19h45 |
| Intermediaire-Avance | HIP HOP (11 ANS -) | mardi | 18h00-19h15 |
| Intermediaire-Avance | HIP HOP (12 ANS +) | mardi | 19h15-20h45 |
| Intermediaire-Avance | LYRIQUE | mercredi | 18h15-19h30 |
| Intermediaire-Avance | JAZZ | jeudi | 18h45-20h00 |
| 16 ANS + | Intermediaire-Avance | ALIGN | dimanche | 13h30-15h30 |

**Note:** Prenez-note que tous les pratiques privees ne sont pas sur la list de cours.

#### Section: TARIFICATION 2025
- Cours de 30 mins = $180 +tx
- Cours de 45 mins = $200 +tx
- Cours de 60 mins = $215 +tx
- Cours de 75 mins = $240 +tx
- Cours de 90 mins = $275 +tx
- Cours de 120 mins = $285 +tx
- Rabais offerts:
  - -10% deuxieme enfant de la meme famille
  - -20% cours additionnelles

#### Section: SPORTS-ETUDES
- **LAVAL JUNIOR ACADEMY - DANSE ETUDES**
- Partnership with Ecole Secondaire Laval Junior Academy
- **Mission:** Nous voulons donner aux eleves un enseignement de qualite et diversifie afin de les preparer pour le monde
- **Cours offerts:** Ballet, Contemporaine, Danse Urbaine, Jazz, Lyrique, Creation & Interpretation, Mis en forme & flexibilite
- **Programme de DANSE-ETUDES PRESTIGE:**
  - 8h d'entrainement minimum par semaine
  - Participation a plusieurs competitions au printemps
  - Participation aux spectacles de fin de session de l'ecole de danse
  - Choregraphes de renoms invites a faire des ateliers
  - Approfondissement du vocabulaire de la danse et apprentissages connexes a la danse
  - Professeurs hautement qualifies et passionnes
  - Un sentiment d'appartenance a toutes epreuves et une evolution marquee chez tous les danseurs

#### Section: COIN DES PARENTS
- Dates importantes Saison A2025
- Heures du Bureau: Janvier 2026
- Politiques et Code de Danseurs: Saison A2025
- Code Vestimentaire (with download links)
- le 9 janvier: DEBUT DE COURS
- le 7 fevrier: DEBUT DES COURS (2-3 ANS, 4-5 ANS)

#### Section: NOS COURS (Detailed Descriptions)

**Ballet classique:** Cours offerts pour les enfants de 7-12 ans. Niveau: debutant

**Contemporain:** Cours offerts pour les enfants de 8 ans et plus. La danse contemporaine explore le plein potentiel de mouvement du corps. Elle est caracterisee par une expression et des mouvements plus libres.

**Ballet-Jazz:** Cours offerts a partir de 2 ans et plus. Le ballet jazz est une fusion contemporaine du vocabulaire technique du ballet classique et les elements de style du danse jazz. La danse jazz comporte des positions de base et des pas codifies, comme en danse Classique. Elle est aussi ouverte a l'improvisation et a la creation de ses propres mouvements, exprimant l'emotion que le danseur souhaite faire passer.

**Formation:** Cours offerts a partir de 7 ans et plus. Nos cours "pre-competitif", les groupes de Formation s'entrainent dans une variete de styles techniques (ballet, jazz, claquette, contemporaine) en presentent plusieurs choregraphies a la fin de l'annee.

**Hip Hop:** Cours offerts pour les enfants de 4 et plus. La danse hip-hop designe plusieurs formes de street dance principalement effectuees dans la musique hip-hop. Plus qu'une danse, le hip-hop se veut un mouvement, une attitude, un etat d'esprit.

**Acro:** Cours offerts pour les enfants de 6 ans et plus. Une fusion de danse traditionnelle et les mouvements acrobatique, avec une concentration sur la technique d'etirement.

**Groupes performance et competitifs:** Cours offerts pour les enfants et adultes par AUDITION seulement.

**Pre-competitifs:** Cours offerts pour les enfants de 8-11 ans. Pour tous les danseurs interesses par la competition, mais souhaitant un entrainement supplementaire. *Ils participeront a une competition sur le circuit, ainsi qu'a tous les spectacles.

**Cours prives:** Cours offerts selon les disponibilites des professeurs. Cours offerts dans tous les groupes d'ages, niveaux et styles.

#### Section: LOCATION
- La location comprend l'utilisation partagee de nos salles de bain et notre stationnement.
- Location longue duree est egalement disponible.
- Veuillez prendre rendez-vous pour visiter nos salles et connaitre nos tarifs.
- "RENDEZ-VOUS" CTA button

#### Section: BOUTIQUE PRESTIGE
- **CERTIFICATS CADEAUX:** Des certificats-cadeaux sont disponibles dans differents formats (valeur monetaire, sessions completes, etc.). Offrez le cadeau de la danse ! Offrez a vos proches la chance de s'epanouir, de s'amuser et de decouvrir leur passion. VENEZ NOUS VOIR AU BUREAU D'ACCEUIL POUR EN OBTENIR!
- **MARCHANDISE:**
  - T-Shirt rose: $25.00-$35.00
  - Chandail gris manche longue: $20.00
  - Sweat-shirt Crew Neck: $35.00-$45.00
- **TUQUES:** Disponibles en noir, gris ou rose $25.00
- Links: COMMANDER ICI, DANCE MOM & DANCE DAD MERCH

#### Section: NOUS JOINDRE (Contact)
- Address: 1774 Boulevard des Laurentides, Laval, QC H7M 2P6, Canada
- Google Maps embed + Directions link
- Contact form: Name, Phone, Email, Message
- Phone: 450-490-4104
- Email: ecole_de_danse_prestige@hotmail.com
- **HEURES BUREAU H2026:**
  - lundi: 18h00-21h00
  - mercredi: 18h00-21h30
  - jeudi: 17h30-19h30
  - samedi: 9h00-15h00

#### Social Media
- Facebook: Studio-Prestige page
- Instagram: linked

---

## 3. New Design System: "Editorial Nurture"

### 3.1 Design Philosophy
The new design (from Stitch) moves from the rigid blue flat design to a warm, editorial, premium experience. The "Nurtured Nest" concept creates a space that feels protective, organic, and high-end -- matching the studio's reputation and the trust parents place in them.

### 3.2 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#556346` (Muted Sage) | Primary actions, growth, vitality |
| `secondary` | `#78604b` (Clay) | Supporting warmth |
| `tertiary` | `#716252` (Oatmeal) | Grounding elements |
| `background` | `#fffcf7` (Soft Cream) | Base surface |
| `surface-container-low` | `#fcf9f3` | Secondary content areas |
| `surface-container` | `#f6f4ec` | Container backgrounds |
| `surface-container-high` | `#f0eee5` | Input field backgrounds |
| `primary-container` | `#d8e8c3` | CTA sections, highlights |
| `secondary-container` | `#fddcc3` | Supporting highlights |
| `tertiary-container` | `#fde7d3` | Floating chips, tags |
| `on-surface` | `#383831` | Primary text (never pure black) |
| `on-surface-variant` | `#65655c` | Secondary text |
| `outline-variant` | `#babab0` | Ghost borders (15% opacity) |

### 3.3 Typography

| Role | Font | Usage |
|------|------|-------|
| Display/Headlines | **Noto Serif** | `h1`, `h2`, `h3`, hero text |
| Body/Labels | **Plus Jakarta Sans** | Body copy, labels, navigation, forms |

- `display-lg`: 3.5rem with generous leading
- Left-align body text; center-align only for display hero moments
- High-contrast typographic scale for editorial rhythm

### 3.4 Key Design Rules
1. **No-Line Rule:** No 1px solid borders. Use background shifts and tonal transitions instead.
2. **No Pure Black:** Use `#383831` for text.
3. **Ambient Shadows:** 40-60px blur, 4-8% opacity, tinted (not pure black).
4. **High Roundness:** `xl` (3rem) for large containers, `full` (9999px) for buttons/chips.
5. **Asymmetric Layouts:** Embrace unconventional grid widths (e.g., 7-col hero).
6. **Whitespace as Feature:** Generous spacing between sections.
7. **Glassmorphism:** Semi-transparent surfaces with 24px backdrop blur for nav.

### 3.5 Logo Integration
The iconic interlocking "PS" logo (white on black) is well-recognized in the Laval dance community. The Stitch designs already incorporate it in the top-left nav. The logo needs to work on the warm cream background -- the Stitch designs use `mix-blend-multiply` to integrate it naturally.

---

## 4. Tech Stack

Based on the `webapp-template` architecture:

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.x | UI framework |
| **TypeScript** | 5.x | Type safety |
| **Vite** | 7.x | Build tool & dev server |
| **Tailwind CSS** | 3.x | Utility-first CSS |
| **React Router DOM** | 7.x | Client-side routing |
| **vite-plugin-pwa** | 1.x | PWA support (installable app) |
| **Netlify** | - | Hosting & deployment |
| **PostCSS + Autoprefixer** | - | CSS processing |
| **ESLint** | 9.x | Code quality |

### 4.1 Removed from Template
- **Clerk Auth** - Not needed (no user accounts)
- **Neon Database** - Not needed (static content site)
- **Netlify Functions** - Not needed initially (contact form can use Netlify Forms)

### 4.2 Added
- **Google Fonts** - Noto Serif + Plus Jakarta Sans
- **Material Symbols** - Icon set used in Stitch designs
- **Netlify Forms** - For the contact form (zero backend needed)

---

## 5. Site Architecture

### 5.1 Page Structure (React Router)

```
/                    -> Home (Landing Page)
/programmes          -> Programs / Nos Cours
/a-propos            -> About / Notre Equipe / Studios
/competitif          -> Competitive Track / Groupes Competitifs
/horaire             -> Schedule & Pricing (Horaire + Tarification)
/sports-etudes       -> Sports-Etudes / Laval Junior Academy
/parents             -> Coin des Parents (policies, dress code, dates)
/boutique            -> Boutique Prestige (merch + gift cards)
/location            -> Studio Rental (Location)
/contact             -> Nous Joindre (Contact form + map)
```

### 5.2 Shared Components

```
src/
  components/
    layout/
      Navbar.tsx           # Floating pill nav with glassmorphism
      Footer.tsx           # 3-column footer with studio info
      MobileMenu.tsx       # Slide-out mobile nav
    ui/
      Button.tsx           # Primary/Secondary/Outline variants
      Card.tsx             # Surface-layered cards with ambient shadow
      Chip.tsx             # Floating category chips (tertiary-container)
      SectionHeading.tsx   # Serif headline + subtitle pattern
      ScheduleTable.tsx    # Responsive course schedule table
      PricingCard.tsx      # Pricing display component
      ContactForm.tsx      # Netlify Forms integration
      MapEmbed.tsx         # Google Maps embed
    shared/
      SEOHead.tsx          # Meta tags per page
      ScrollToTop.tsx      # Reset scroll on route change
  pages/
    Home.tsx
    Programs.tsx
    About.tsx
    Competitive.tsx
    Schedule.tsx
    SportsEtudes.tsx
    Parents.tsx
    Boutique.tsx
    Location.tsx
    Contact.tsx
  data/
    schedule.ts            # Course schedule data (typed)
    pricing.ts             # Pricing data
    courses.ts             # Course descriptions
    contact.ts             # Contact info, hours
  assets/
    logo.svg               # PS logo (vectorized)
    images/                # Optimized dance photos
  styles/
    index.css              # Tailwind directives + custom styles
```

### 5.3 Navigation Structure

**Desktop Nav (Floating Pill):**
- Logo (left)
- Home | Programmes | A Propos | Competitif (center)
- "S'inscrire" CTA button (right)

**Mobile Nav:**
- Logo + hamburger
- Full-screen overlay with all pages

**Footer:**
- Col 1: Studios Prestige name + tagline
- Col 2: Quick Links (all pages)
- Col 3: Contact info + office hours
- Bottom bar: copyright + social links

---

## 6. Page-by-Page Design Mapping

### 6.1 Home (`/`)
**Stitch Reference:** `about_faculty_warm_neutral_updated_logo` hero section
- Hero: Large serif headline with studio founding story
- Floating quote card
- "A Propos" quick summary (3 cards: Nos Studios, Notre Equipe, Nos Cours)
- Current session announcement (Session Hiver 2026)
- CTA: "Decouvrir nos cours" + "S'inscrire"
- Quick links to key sections

### 6.2 Programmes (`/programmes`)
**Stitch Reference:** `programs_warm_neutral_updated_logo`
- Hero: "The Art of Graceful Growth" adapted to French
- Course category cards with descriptions:
  - Ballet classique, Contemporain, Ballet-Jazz, Formation, Hip Hop, Acro
  - Groupes performance et competitifs, Pre-competitifs, Cours prives
- Each card: icon, age range, description (from current site), level
- Link to full schedule

### 6.3 A Propos (`/a-propos`)
**Stitch Reference:** `about_faculty_warm_neutral_updated_logo`
- Studio history & legacy
- Facility gallery (2 studios with mirrors)
- Faculty/team section (adapt Stitch faculty grid)
- CTA: Schedule a visit

### 6.4 Competitif (`/competitif`)
**Stitch Reference:** `competitive_track_warm_neutral_updated_logo`
- Hero: Elite competitive track
- Accolades bento grid
- Standards & curriculum details
- Audition information CTA

### 6.5 Horaire (`/horaire`)
- Full course schedule in responsive table format
- Filter by: style, age group, day
- Pricing section with all tiers
- Discount information
- Registration notes ($35 fee, limited spots)
- Session dates prominently displayed

### 6.6 Sports-Etudes (`/sports-etudes`)
- Laval Junior Academy partnership
- Mission statement
- Program details (8h/week, competitions, etc.)
- Courses offered list
- CTA: "Pour plus d'infos"

### 6.7 Coin des Parents (`/parents`)
- Important dates (Saison A2025)
- Office hours
- Downloadable policies (Code de Danseurs)
- Downloadable dress code (Code Vestimentaire)

### 6.8 Boutique (`/boutique`)
- Gift certificates section
- Merchandise catalog (t-shirts, sweaters, tuques)
- Order links

### 6.9 Location (`/location`)
- Studio rental information
- Amenities (bathrooms, parking)
- Long-term rental available
- CTA: Book a visit (Rendez-vous)

### 6.10 Contact (`/contact`)
- Google Maps embed
- Contact form (Netlify Forms): Name, Phone, Email, Message
- Address: 1774 boul. des Laurentides, Laval, QC H7M 2P6
- Phone: 450-490-4104
- Email: ecole_de_danse_prestige@hotmail.com
- Office hours
- Social media links (Facebook, Instagram)

---

## 7. Tailwind Configuration

```js
// Custom theme extending the design system
theme: {
  extend: {
    colors: {
      primary: '#556346',
      'primary-dim': '#49573a',
      'primary-container': '#d8e8c3',
      'on-primary': '#edfdd7',
      'on-primary-container': '#48563a',
      secondary: '#78604b',
      'secondary-container': '#fddcc3',
      'on-secondary': '#ffffff',
      'on-secondary-container': '#644d3a',
      tertiary: '#716252',
      'tertiary-container': '#fde7d3',
      'on-tertiary': '#ffffff',
      background: '#fffcf7',
      'on-background': '#383831',
      surface: '#fffcf7',
      'surface-container-lowest': '#ffffff',
      'surface-container-low': '#fcf9f3',
      'surface-container': '#f6f4ec',
      'surface-container-high': '#f0eee5',
      'surface-container-highest': '#eae8de',
      'surface-variant': '#eae8de',
      'on-surface': '#383831',
      'on-surface-variant': '#65655c',
      outline: '#818178',
      'outline-variant': '#babab0',
      error: '#a54731',
    },
    borderRadius: {
      DEFAULT: '1rem',
      lg: '2rem',
      xl: '3rem',
      full: '9999px',
    },
    fontFamily: {
      headline: ['Noto Serif', 'serif'],
      body: ['Plus Jakarta Sans', 'sans-serif'],
    },
    boxShadow: {
      ambient: '0 40px 60px -15px rgba(56,56,49,0.06)',
      'ambient-lg': '0 40px 60px -15px rgba(56,56,49,0.08)',
    },
  },
}
```

---

## 8. SEO & Performance Strategy

### 8.1 SEO
- French-language meta tags (`lang="fr"`)
- Structured data (LocalBusiness schema for Google)
- Open Graph + Twitter cards per page
- Descriptive page titles: "Studios Prestige | Ecole de danse a Laval"
- Google Maps integration for local SEO
- Alt text on all images

### 8.2 Performance
- Vite code splitting per route (lazy loading)
- Image optimization (WebP format, responsive sizes)
- Font preloading (Noto Serif + Plus Jakarta Sans)
- PWA service worker for offline caching
- Netlify CDN for global distribution
- Target: Lighthouse 90+ across all metrics

---

## 9. Deployment Strategy

### 9.1 Netlify Configuration
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **SPA redirects:** `/* -> /index.html` (200)
- **Contact form:** Netlify Forms (form detection in HTML)
- **Custom domain:** www.studiosprestige.com (DNS transfer needed)
- **SSL:** Automatic via Netlify (Let's Encrypt)
- **Headers:** Security headers (X-Frame-Options, CSP, etc.)

### 9.2 DNS Migration Plan
1. Build & deploy to Netlify (staging URL)
2. Client review on staging
3. Add custom domain in Netlify
4. Update DNS records (A record + CNAME)
5. Verify SSL provisioning
6. Monitor for 48h post-migration

---

## 10. Implementation Phases

### Phase 1: Foundation (Current Sprint)
- [x] Project setup (repo, Vite, Tailwind, React Router)
- [x] Design system configuration (colors, typography, shadows)
- [x] Shared layout components (Navbar, Footer, MobileMenu)
- [x] PDR document

### Phase 2: Core Pages
- [ ] Home page with hero, about summary, session announcement
- [ ] Programs page with all course cards
- [ ] Schedule page with filterable table + pricing
- [ ] Contact page with form + map

### Phase 3: Secondary Pages
- [ ] About page with facility gallery + team
- [ ] Competitive Track page
- [ ] Sports-Etudes page
- [ ] Parents Corner page
- [ ] Boutique page
- [ ] Location/Rental page

### Phase 4: Polish & Launch
- [ ] SEO optimization (meta tags, structured data)
- [ ] Image sourcing & optimization
- [ ] PWA configuration (icons, manifest)
- [ ] Performance audit (Lighthouse)
- [ ] Mobile testing (iOS Safari, Android Chrome)
- [ ] Client review & content verification
- [ ] DNS migration & go-live

---

## 11. Content Migration Checklist

| Content | Source | Status |
|---------|--------|--------|
| Course descriptions (9 types) | Current site | Documented in PDR |
| Full course schedule table | Current site | Documented in PDR |
| Pricing (6 tiers + discounts) | Current site | Documented in PDR |
| Session dates (Hiver 2026) | Current site | Documented in PDR |
| Sports-Etudes program details | Current site | Documented in PDR |
| Contact info (address, phone, email) | Current site | Documented in PDR |
| Office hours | Current site | Documented in PDR |
| Boutique merchandise + prices | Current site | Documented in PDR |
| Location/rental info | Current site | Documented in PDR |
| Parent resources (policies, dress code) | Current site | Need PDF links |
| Social media links | Current site | Documented in PDR |
| PS Logo | Current site | Need SVG version |
| Dance photos | Need sourcing | Stock or studio photos |

---

## 12. Risk Register

| Risk | Impact | Mitigation |
|------|--------|------------|
| Missing content during migration | High | Full content inventory in this PDR |
| Logo doesn't work on cream background | Medium | Use mix-blend-multiply or provide alternate version |
| PDF resources (policies, dress code) need hosting | Low | Host on Netlify as static assets |
| Client needs to update schedule seasonally | Medium | Data-driven schedule from TypeScript files |
| Contact form spam | Medium | Netlify Forms built-in spam filtering + honeypot |
| French character encoding issues | Low | UTF-8 throughout, test with accented characters |

---

## 13. Appendix: Design Reference Files

- `stitch/about_faculty_warm_neutral_updated_logo/` - About & Faculty page design
- `stitch/programs_warm_neutral_updated_logo/` - Programs page design
- `stitch/competitive_track_warm_neutral_updated_logo/` - Competitive track design
- `stitch/kindred_hearth/DESIGN.md` - Full design system specification
