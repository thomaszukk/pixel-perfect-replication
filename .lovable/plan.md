

## Pixel-Perfect Adjustments for Hero Section

Comparing the original vs our build, here are the issues and fixes:

### Issues Identified

1. **Hero not filling viewport** -- Original fits exactly to screen. Our build uses `min-h-[648px]` instead of `100vh`.
2. **Nav links too small** -- Original uses ~16px nav text, ours uses `text-sm` (14px).
3. **Navbar not fixed** -- Should be `fixed` instead of `absolute` so it stays on scroll.
4. **Content too high** -- The text block needs to be vertically centered with a slight downward bias to account for the navbar. The `py-32` top padding pushes content up.
5. **App.css #root constraints** -- The `max-width: 1280px`, `padding: 2rem`, and `margin: 0 auto` on `#root` are constraining the layout and preventing full-width.
6. **Button sizing** -- Original buttons are slightly larger (~16px text, more padding).

### Changes

| File | Change |
|------|--------|
| `src/App.css` | Remove `#root` constraints (max-width, padding, margin, text-align) |
| `src/components/Navbar.tsx` | Change `absolute` to `fixed`, increase nav link text to `text-base` |
| `src/components/HeroSection.tsx` | Change `min-h-[648px]` to `h-screen`, adjust content padding to center lower, increase button text/padding |

