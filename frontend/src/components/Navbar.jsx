import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "achievements",
        "contact",
      ];

      for (const sec of [...sections].reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sec);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial active section on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(6,6,26,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(124,58,237,0.15)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-2"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#06b6d4)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <img
                src={logo}
                alt="Thimasha Logo"
                className="w-7 h-7 object-contain"
              />
            </div>

            <span className="text-white font-semibold tracking-wide">
              Thimasha Thakshali<span className="text-purple-500">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-1.5 rounded-md transition-all relative"
                  style={{
                    color: isActive ? "#7c3aed" : "rgba(232,232,240,0.7)",
                    fontSize: "0.875rem",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {link.label}

                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "#7c3aed" }}
                    />
                  )}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="ml-3 px-4 py-1.5 rounded-full text-sm"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#5b21b6)",
                color: "white",
                fontWeight: 500,
              }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-4"
          style={{
            background: "rgba(6,6,26,0.97)",
            borderTop: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block py-3 border-b"
              style={{
                color: "rgba(232,232,240,0.8)",
                borderColor: "rgba(124,58,237,0.1)",
                fontSize: "0.9rem",
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="block mt-3 text-center py-2 rounded-full text-sm"
            style={{
              background: "linear-gradient(135deg,#7c3aed,#5b21b6)",
              color: "white",
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
