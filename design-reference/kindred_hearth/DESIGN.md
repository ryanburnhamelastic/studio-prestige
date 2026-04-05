```markdown
# Design System Specification: Editorial Nurture

## 1. Overview & Creative North Star
**Creative North Star: The Nurtured Nest**

This design system moves away from the rigid, clinical grids of traditional athletic applications and toward a high-end, editorial experience that feels as fluid as dance itself. We are creating a "Digital Nest"—a space that feels protective, organic, and premium. 

To achieve this, the system rejects standard UI patterns in favor of **intentional asymmetry** and **breathable composition**. Elements should feel like they are floating in a gentle breeze rather than locked into a cage. We prioritize the "Human Touch" over "Digital Precision," utilizing extreme corner radii and tonal layering to evoke the softness of a child’s world and the elegance of a professional studio.

---

## 2. Colors
Our palette is a sophisticated blend of earthen tones designed to soothe the eye and build trust with parents.

*   **Primary (`#556346` - Muted Sage):** Used for growth, vitality, and primary actions. It represents the "Studio Floor"—the foundation of movement.
*   **Secondary & Tertiary (`#78604b` & `#716252` - Clay & Oatmeal):** These tones provide warmth and groundedness. Use these for supporting elements to prevent the UI from feeling too "cool" or detached.
*   **Neutral Surfaces (`#fffcf7` - Soft Cream):** Our stage. Everything lives on this warm, off-white base.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or containers. Physical boundaries must be established through:
1.  **Background Shifts:** Placing a `surface-container-low` section against a `background` base.
2.  **Tonal Transitions:** Using the hierarchy of `surface-container` tokens to imply depth.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, fine-art papers. 
*   **Base:** `background` (#fffcf7).
*   **Secondary Content:** `surface-container-low` (#fcf9f3).
*   **Interactive Cards:** `surface-container-lowest` (#ffffff) to provide a soft "pop" of brightness.

### The "Glass & Gradient" Rule
To add "soul" to the interface, use subtle linear gradients for hero sections, transitioning from `primary` to `primary-container`. For floating navigation or over-image overlays, use **Glassmorphism**: apply a semi-transparent `surface` color with a `24px` backdrop blur. This ensures the whimsical background colors "bleed through," creating an integrated, high-end feel.

---

## 3. Typography
We utilize a high-contrast scale to create an editorial rhythm.

*   **The Serif (Noto Serif):** Used for `display` and `headline` tiers. This typeface is friendly and rounded, evoking the classic storytelling of childhood. Use `display-lg` (3.5rem) with generous leading to make a statement.
*   **The Sans (Plus Jakarta Sans):** Used for `title`, `body`, and `label` tiers. It is modern, clean, and highly legible, ensuring that schedules and registration forms are easy for busy parents to navigate.

**Intentionality:** Never center-align large blocks of body text. Use left-alignment with wide margins to maintain the "Editorial" look. Reserve center-alignment only for `display` text in hero moments.

---

## 4. Elevation & Depth
Depth in this system is achieved through light and shadow, not lines and boxes.

### The Layering Principle
Achieve hierarchy by "stacking" the surface tiers. A `surface-container-highest` element should only ever sit on a `surface-container` or `surface-container-low` base. This creates a natural, "stepping stone" visual logic.

### Ambient Shadows
When an element must float (like a FAB or a modal), use "Ambient Shadows":
*   **Blur:** 40px - 60px.
*   **Opacity:** 4% - 8%.
*   **Color:** Use a tinted version of `on-surface` (#383831) rather than pure black to keep the shadows feeling warm and airy.

### The "Ghost Border" Fallback
If accessibility requires a container boundary, use a **Ghost Border**:
*   **Token:** `outline-variant` (#babab0).
*   **Opacity:** 15%.
*   **Rule:** This is the only exception to the "No-Line" rule. It should be barely perceptible.

---

## 5. Components

### Buttons
*   **Primary:** High-roundness (`full` / 9999px). Background: `primary`. Text: `on-primary`. 
*   **Secondary:** Background: `secondary-container`. Text: `on-secondary-container`.
*   **Interaction:** On hover, increase the elevation through a subtle shift to `primary-dim` rather than a harsh color change.

### Cards & Lists
*   **Constraint:** Forbid the use of divider lines.
*   **Separation:** Use `1.5rem` to `2rem` of vertical white space to separate list items. 
*   **Nesting:** Cards should use the `xl` (3rem) corner radius. A card containing a child element (like a "Book Now" chip) should use `md` (1.5rem) for the internal element to create a nested "nested-radius" harmony.

### Input Fields
*   **Style:** Soft-filled. Use `surface-container-high` as the background.
*   **States:** On focus, transition the background to `surface-bright` and add a `ghost border` of the `primary` color.
*   **Labels:** Use `label-md` in `on-surface-variant` for a subtle, sophisticated look.

### The "Whimsy" Component: Floating Chips
For class categories (e.g., "Ballet," "Tap," "Jazz"), use chips with `full` roundness and `tertiary-container` backgrounds. These should appear to "float" with a very slight `Ambient Shadow` to mimic the light, airy feel of a dance studio.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Let images overlap the edges of containers.
*   **Use Whitespace as a Feature:** Whitespace is not "empty"—it is the "breath" between movements.
*   **Layer Softly:** Use the `surface` tokens to create a sense of tactile paper layers.
*   **Apply High Roundness:** Everything should feel safe to touch. Use `xl` (3rem) for all large containers.

### Don't:
*   **No Hard Edges:** Avoid `none` or `sm` roundness unless for very specific utility icons.
*   **No Pure Black:** Never use `#000000`. Use `on-surface` (#383831) for maximum warmth.
*   **No Grid-Rigidity:** Avoid filling every column of a 12-column grid. Let elements breathe and occupy unconventional widths (e.g., a 7-column hero image).
*   **No Divider Lines:** If you feel the need for a line, increase the spacing or change the background tone instead. 

---
*Director's Note: This design system is about the feeling of a sun-drenched studio on a Saturday morning. Every interaction should feel soft, intentional, and effortless.*```