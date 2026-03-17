import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoZukk from "@/assets/logo-zukk.png";
import logoZukkBlue from "@/assets/logo-zukk-blue.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Indústrias", href: "/industrias" },
  { label: "Cases", href: "#cases" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    return location.pathname === href;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-20 py-6 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link to="/">
          <img
            src={scrolled ? logoZukkBlue : logoZukk}
            alt="ZUKK"
            className="h-8 md:h-10 transition-none"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.href.startsWith("#") ? (
                <a
                  href={item.href}
                  className={`text-base font-medium transition-all duration-300 hover:opacity-100 ${
                    scrolled
                      ? "text-[#0B132B] opacity-70 hover:text-[#09A5C1]"
                      : "opacity-70"
                  }`}
                  style={scrolled ? {} : { color: "white" }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className={`text-base font-medium transition-all duration-300 hover:opacity-100 ${
                    scrolled
                      ? isActive(item.href)
                        ? "text-[#09A5C1] opacity-100"
                        : "text-[#0B132B] opacity-70 hover:text-[#09A5C1]"
                      : isActive(item.href)
                        ? "opacity-100"
                        : "opacity-70"
                  }`}
                  style={scrolled ? {} : { color: "white" }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden transition-colors duration-300 ${scrolled ? "text-[#0B132B]" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`lg:hidden mt-4 pb-4 ${scrolled ? "bg-white" : ""}`}>
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    className={`text-sm font-medium ${
                      scrolled
                        ? "text-[#0B132B] opacity-70"
                        : "opacity-70"
                    }`}
                    style={scrolled ? {} : { color: "white" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium ${
                      scrolled
                        ? isActive(item.href)
                          ? "text-[#09A5C1]"
                          : "text-[#0B132B] opacity-70"
                        : isActive(item.href)
                          ? "opacity-100"
                          : "opacity-70"
                    }`}
                    style={scrolled ? {} : { color: "white" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
