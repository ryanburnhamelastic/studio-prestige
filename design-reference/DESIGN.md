# Design System Strategy: The Nurtured Elite

## 1. Overview & Creative North Star
**Creative North Star: "The Ethereal Gallery"**

This design system is built to bridge the gap between "prestige" and "play." For a high-end dance studio catering to families, the digital experience must feel as poised as a prima ballerina yet as warm as a sun-drenched rehearsal studio. We move away from the rigid, grid-heavy "corporate" look toward a **High-End Editorial** layout.

By utilizing intentional asymmetry, expansive negative space (breathing room), and a "layered paper" philosophy, we ensure the interface feels custom-made. The system rejects standard UI patterns in favor of tonal depth, where elements float and overlap, creating a sense of movement and grace synonymous with dance.

---

## 2. Colors: Tonal Sophistication
Our palette abandons harsh contrasts for a sophisticated, organic spectrum.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections.
Boundaries must be created through **Background Color Shifts**. For instance, a `surface-container-low` section should sit directly against a `surface` background. This creates a "soft edge" that feels architectural rather than digital.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine vellum or oatmeal paper.
*   **Base:** `surface` (#fffcf7) for global backgrounds.
*   **Secondary Sections:** Use `surface-container` (#f6f3ed) to define broad content areas.
*   **Cards/High-Focus:** Use `surface-container-lowest` (#ffffff) to provide a subtle "pop" against the warmer background.

### Glass & Gradient Rule
To prevent the "flat" look of basic templates:
*   **Glassmorphism:** Use `surface_bright` with a 70% opacity and a 20px backdrop-blur for floating navigation or sticky headers.
*   **Signature Textures:** Apply a subtle linear gradient (from `primary` #825b55 to `primary_dim` #754f49) on Hero CTAs. This adds a "velvet" tactile quality to the buttons.

---

## 3. Typography: Editorial Authority
The interplay between the classic Serif and the modern Sans is the heart of our "Elite yet Approachable" brand.

*   **Display & Headlines (Noto Serif):** These are our "statement" pieces. Use `display-lg` for impactful hero messaging. The serif's high contrast conveys history, prestige, and the discipline of dance.
*   **Body & Labels (Plus Jakarta Sans):** This font provides the modern, kid-friendly balance. It is clean, highly legible, and approachable.
*   **Hierarchy Note:** Always lead with Noto Serif for titles to establish authority, then transition to Plus Jakarta Sans for instructional or descriptive text to maintain a friendly, rhythmic flow.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to create "lift"; we use light and tone.

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-highest` element behind a `surface-container-lowest` card to create a natural, receding perspective.
*   **Ambient Shadows:** If a floating action (like a "Book Now" modal) requires a shadow, it must be **Ambient**. Use a blur of 40px, an opacity of 6%, and a tint derived from `on-surface` (#383833). Never use pure black shadows.
*   **The Ghost Border Fallback:** For high-density data where separation is vital, use a "Ghost Border": `outline-variant` (#bbb9b2) at 15% opacity.
*   **Roundedness Scale:** Embrace the `lg` (1rem) and `xl` (1.5rem) tokens. Soft, generous curves are essential to the "nurturing" personality and keep the interface feeling safe and friendly for parents.

---

## 5. Components: Elite Primitives

### Buttons
*   **Primary:** Filled with `primary` (#825b55). Typography: `title-sm` (Plus Jakarta Sans), Uppercase, Letter-spacing 0.05rem.
*   **Secondary:** Ghost style using the "Ghost Border" (15% opacity `outline-variant`) with `on-primary_fixed` text.
*   **States:** On hover, primary buttons should shift to `primary_dim`.

### Cards & Lists
*   **Rule:** Forbid the use of divider lines.
*   **Separation:** Use vertical white space (32px - 64px) or a background shift from `surface` to `surface-container-low`.
*   **Content:** Group content within cards using `surface-container-lowest` and a `lg` (1rem) corner radius.

### Input Fields
*   **Style:** Minimalist. No heavy borders. Use a `surface-variant` background with a bottom-only `outline` at 20% opacity.
*   **Focus:** Transition the bottom border to `primary` (#825b55) to signify active status.

### Dance-Specific Components
*   **Schedule Chips:** Use `secondary_container` (#ffdea5) for "Open" classes and `surface-dim` for "Full" classes. Keep the corners `full` (9999px) for a soft, pebble-like feel.
*   **Instructor Profiles:** Circular imagery with a `primary_container` ring (#ffcbc4) to highlight the "Prestige" element.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts where text is left-aligned and imagery is slightly offset to the right.
*   **Do** use the logo sparingly but intentionally—place it in high-margin areas as a "seal of quality."
*   **Do** prioritize white space over content density. If a screen feels full, it is no longer "Elite."

### Don’t
*   **Don’t** use high-saturation "Barbie Pink." Always stick to the `primary` (#825b55) or `primary_container` (#ffcbc4) muted clay/rose tones.
*   **Don’t** use sharp corners (`none` or `sm`). This is a nurturing environment; sharpness creates anxiety.
*   **Don’t** use standard "Drop Shadows" from default UI kits. They muddy the clean, oatmeal-toned aesthetic.