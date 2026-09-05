# Design System: EnergyCore Landing Page

**Project ID:** 11750849668417801992

## 1. Visual Theme & Atmosphere

EnergyCore feels like a calm command center for everyday energy. The interface combines deep graphite surfaces with precise emerald signals and restrained amber highlights. The result is technological and futuristic without becoming noisy, aggressive, or game-like. Material Design principles appear through clear elevation, predictable states, accessible hierarchy, and purposeful motion.

The signature motif is a compact lightning bolt inside a softly rounded energy cell. Imagery should show homes, workspaces, and connected devices as one understandable system. Never use blue, cyan, purple, fake customer logos, fabricated statistics, or decorative dashboards that imply unavailable functionality.

## 2. Color Palette & Roles

- **Electric Emerald (#22C55E):** primary actions, active states, focus rings, and energy signals.
- **Signal Mint (#4ADE80):** illuminated edges and small high-energy highlights.
- **Deep Emerald (#166534):** pressed actions, structural gradients, and high-contrast green surfaces.
- **Warm Amber (#F59E0B):** savings, recommendations, secondary data, and premium highlights.
- **Graphite Void (#080D09):** main page background and immersive hero field.
- **Carbon Surface (#121A14):** elevated cards, navigation, pricing panels, and overlays.
- **Soft Chalk (#F4F7F5):** primary text and icons on dark surfaces.
- **Sage Mist (#A9B4AC):** secondary copy; keep contrast at or above WCAG AA.
- **Hairline Green (rgba(74, 222, 128, 0.24)):** borders and separators.

## 3. Typography Rules

Use **Space Grotesk** for headlines, prices, and short display statements. Headlines are compact, bold, and slightly tightened. Use **Manrope** for body copy, navigation, labels, and controls because its open forms remain readable at small sizes. Use system fallbacks when web fonts are unavailable. Eyebrows use uppercase letters with generous tracking; paragraphs use relaxed line-height and short measure.

## 4. Component Stylings

- **Buttons:** pill-shaped or 12px rounded rectangles, minimum 44px target size. Primary actions use emerald with dark text; secondary actions use a translucent carbon surface and a visible border. Hover changes color, glow, or elevation without scaling the layout.
- **Cards/Containers:** generously rounded 20-24px corners, subtle green hairlines, layered graphite backgrounds, and whisper-soft shadows. Pricing cards remain comparable; Professional receives a restrained emerald border and recommendation badge.
- **Inputs/Forms:** not required for the static landing page. Any future field must use visible labels, dark carbon fill, emerald focus ring, and explicit validation text.
- **Navigation:** floating translucent carbon bar with backdrop blur, logo at the start, compact anchor links, ES/EN control, and one persistent CTA.
- **Icons:** original inline SVG icons with consistent 24px geometry and 2px strokes. No emoji and no mixed icon libraries.

## 5. Layout Principles

Use a responsive 12-column desktop grid inside a consistent 1200px maximum width. The hero is asymmetric: concise copy on the left and a high-fidelity 3D energy ecosystem on the right. Sections alternate between editorial storytelling and structured card grids. Maintain generous vertical rhythm and avoid dense walls of content.

At 768px and below, collapse to one column, simplify decorative motion, keep the CTA visible, and preserve a natural reading order. At 375px, prevent horizontal scrolling and keep all tap targets at least 44px. Include a skip link, semantic landmarks, visible focus states, ARIA only where native semantics are insufficient, and `prefers-reduced-motion` support.

## 6. Content & Conversion Rules

Lead with the outcome: see, understand, and control energy from one place. Support homes, professionals, and organizations without pretending that one segment is the only user. Repeat “Try EnergyCore” after the hero, product flow, pricing, and final section. Every conversion CTA opens the existing web application's login page. Show the verified monthly plans exactly: Starter S/29, Professional S/79, and Enterprise S/199.

English is the default language. Spanish is fully available through a persistent language control. Do not fabricate testimonials, customer counts, savings percentages, accreditations, or partner brands. The university contact is represented by a link to the official UPC website rather than a nonfunctional form.
