import { Heart } from "lucide-react";
import logo from "../assets/logo.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
  ];

  return (
    <footer
      className="py-8"
      style={{
        borderTop: "1px solid rgba(124,58,237,0.12)",
        background: "rgba(0,0,0,0.3)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + Name */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              }}
            >
              <img
                src={logo}
                alt="Thimasha Logo"
                className="w-6 h-6 object-contain"
              />
            </div>

            <span
              style={{
                color: "#e8e8f0",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              Thimasha Thakshali
            </span>
          </button>

          {/* Center text */}
          <p
            className="flex items-center gap-1.5"
            style={{
              color: "rgba(232,232,240,0.3)",
              fontSize: "0.8rem",
            }}
          >
            Built with
            <Heart size={12} style={{ color: "#7c3aed", fill: "#7c3aed" }} />
            and passion © {new Date().getFullYear()}
          </p>

          {/* Footer navigation */}
          <div className="flex gap-4">
            {links.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  color: "rgba(232,232,240,0.3)",
                  fontSize: "0.8rem",
                }}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
