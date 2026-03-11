import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoZukk from "@/assets/logo-zukk.png";

const navItems = [
  { label: "Home", href: "#", active: true },
  { label: "Soluções", href: "#solucoes" },
  { label: "Indústrias", href: "#industrias" },
  { label: "Cases", href: "#cases" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-20 py-6">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <a href="#">
          <img src={logoZukk} alt="ZUKK" className="h-8 md:h-10" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-base font-medium transition-opacity hover:opacity-100 ${
                  item.active ? "opacity-100" : "opacity-70"
                }`}
                style={{ color: "white" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-4 pb-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`text-sm font-medium ${
                    item.active ? "opacity-100" : "opacity-70"
                  }`}
                  style={{ color: "white" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
