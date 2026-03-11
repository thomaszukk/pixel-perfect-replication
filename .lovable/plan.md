

## Section 2: "Na ZUKK" Card (Overlapping Hero)

### What we're building

A white card with `border-radius: 40px` and a subtle shadow that **overlaps the bottom of the hero section** by ~14px. Two-column layout inside:

- **Left column**: Bold heading "Na ZUKK, transformamos dados em estratégias vencedoras." (22px, #0B132B), body text (16px light, #191D2A), and a dark button "Conheça mais" (#001E3B, 5px radius, uppercase-style 11px Open Sans 600).
- **Right column**: The uploaded map/hand image (`Imagens-Site-Zukk-comprimido-2.png`), ~320px wide.

Card is centered, max-width ~1142px, with internal padding of 30px per column.

### Key detail: Hero overlap

The hero currently clips content with `overflow-hidden` on the rounded-corner container. To achieve the overlap:
- Remove `overflow-hidden` from HeroSection's inner div (the bg image div keeps its own overflow handling).
- Make the card section use a **negative top margin** (`-mt-[80px]` approx) so it visually sits on top of the hero's bottom area.
- The hero's white background behind the rounded corner already provides the white reveal.

### Changes

| File | Change |
|------|--------|
| `src/assets/section2-image.png` | Copy uploaded `Imagens-Site-Zukk-comprimido-2.png` |
| `src/components/AboutSection.tsx` | New component: white card, 2-col layout, overlapping positioning |
| `src/components/HeroSection.tsx` | Adjust overflow so card can overlap; ensure bg image clips independently |
| `src/pages/Index.tsx` | Add `<AboutSection />` after `<HeroSection />` |

### Component structure

```text
<section class="relative z-10 -mt-[80px] px-6 pb-12">
  <div class="max-w-[1142px] mx-auto bg-white rounded-[40px] shadow-[0_15px_70px_-10px_rgba(0,0,0,0.15)]">
    <div class="flex flex-wrap">
      <!-- Left: text (p-[30px]) -->
      <!-- Right: image (p-[30px]) -->
    </div>
  </div>
</section>
```

