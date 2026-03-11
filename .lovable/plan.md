

## Section 1: Hero (Navbar + Hero Banner)

### What we're building

The full-width hero section with:

1. **Navbar** -- ZUKK logo (left), nav links (right): Home (active/white), Soluções, Indústrias, Cases, Quem Somos, Blog, Contato (70% white opacity). Mobile hamburger menu.

2. **Hero content** -- Background image (the uploaded swirl graphic) with a dark overlay (40% opacity `#111219`). Bottom-right rounded corner (`border-radius: 0 0 150px 0`). Centered text:
   - Title: "Decisões Inteligentes / Começam no Mapa" (48px, bold, white, Poppins)
   - Subtitle: mixed weight -- "Desbloqueamos o poder da **inteligência geográfica**, transformando dados em insights precisos para decisões estratégicas" (24px)
   - Two buttons: "Saiba mais" (filled `#09A5C1`, rounded-full) and "Fale conosco" (outlined white, rounded-full)

### Technical approach

- Add **Google Fonts Poppins** to `index.html`
- Copy uploaded assets (`Capa-Site-Paginas-2.png` as hero bg, `Logo-ZUKK-Negativo-1.png` as logo) to `src/assets/`
- Create `src/components/Navbar.tsx` -- responsive with mobile menu toggle
- Create `src/components/HeroSection.tsx` -- full-width section with bg image, overlay, and centered content
- Update `src/pages/Index.tsx` to compose these components
- Update `src/index.css` with Poppins as default font family
- Key colors: background `#111219` overlay at 40%, accent `#09A5C1`, nav inactive `rgba(255,255,255,0.7)`

### Files to create/modify

| File | Action |
|------|--------|
| `index.html` | Add Poppins font link |
| `src/assets/hero-bg.png` | Copy uploaded background |
| `src/assets/logo-zukk.png` | Copy uploaded logo |
| `src/components/Navbar.tsx` | Create navbar component |
| `src/components/HeroSection.tsx` | Create hero section |
| `src/pages/Index.tsx` | Compose Navbar + HeroSection |
| `src/index.css` | Set Poppins font, remove unused styles |

