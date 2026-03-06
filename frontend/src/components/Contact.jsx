import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Send,
  MapPin,
  Trophy,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ugthimashath@gmail.com",
    href: "mailto:ugthimashath@gmail.com",
    color: "#7c3aed",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/thimasha-thakshali",
    href: "https://www.linkedin.com/in/thimasha-thakshali/",
    color: "#0077b5",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ThimashaThakshali",
    href: "https://github.com/ThimashaThakshali",
    color: "#e8e8f0",
  },
  {
    icon: Trophy,
    label: "HackerRank",
    value: "hackerrank.com/thimasha_2021042",
    href: "https://www.hackerrank.com/thimasha_2021042",
    color: "#00ea64",
  },

  {
    icon: MapPin,
    label: "Location",
    value: "Nugegoda, Sri Lanka",
    href: "#",
    color: "#f59e0b",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailSubject = encodeURIComponent(formData.subject);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    window.location.href = `mailto:ugthimashath@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs mb-3"
            style={{
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.3)",
              color: "#a78bfa",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Get In Touch
          </span>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Let's Connect
          </h2>

          <p
            className="mt-3 max-w-md mx-auto"
            style={{ color: "rgba(232,232,240,0.5)", fontSize: "0.9rem" }}
          >
            I’m open to full-time opportunities, collaborations, and meaningful
            tech projects. Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <div>
            <h3
              className="mb-6"
              style={{ color: "#ffffff", fontWeight: 600, fontSize: "1.1rem" }}
            >
              Contact Details
            </h3>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => {
                const isExternal =
                  href.startsWith("http") || href.startsWith("mailto:");

                const content = (
                  <>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${color}18`,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      <Icon size={18} style={{ color }} />
                    </div>

                    <div>
                      <p
                        style={{
                          color: "rgba(232,232,240,0.4)",
                          fontSize: "0.72rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          fontWeight: 500,
                        }}
                      >
                        {label}
                      </p>
                      <p
                        style={{
                          color: "rgba(232,232,240,0.85)",
                          fontSize: "0.88rem",
                          marginTop: "0.1rem",
                        }}
                      >
                        {value}
                      </p>
                    </div>

                    {href !== "#" && (
                      <ExternalLink
                        size={14}
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: "rgba(232,232,240,0.3)" }}
                      />
                    )}
                  </>
                );

                if (href === "#") {
                  return (
                    <div
                      key={label}
                      className="flex items-center gap-4 p-4 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {content}
                    </div>
                  );
                }

                return (
                  <a
                    key={label}
                    href={href}
                    target={
                      isExternal && href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      textDecoration: "none",
                    }}
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            {/* Availability note */}
            <div
              className="mt-6 p-4 rounded-xl flex items-center gap-3"
              style={{
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.2)",
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0 animate-pulse"
                style={{ background: "#10b981" }}
              />
              <p
                style={{ color: "rgba(232,232,240,0.7)", fontSize: "0.85rem" }}
              >
                <span style={{ color: "#10b981", fontWeight: 600 }}>
                  Available
                </span>{" "}
                for full-time roles, freelance projects, and collaborations.
              </p>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div
            className="p-7 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3
              className="mb-6"
              style={{ color: "#ffffff", fontWeight: 600, fontSize: "1.1rem" }}
            >
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    style={{
                      color: "rgba(232,232,240,0.5)",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      display: "block",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="w-full px-3 py-2.5 rounded-lg outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#e8e8f0",
                      fontSize: "0.88rem",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      color: "rgba(232,232,240,0.5)",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      display: "block",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="w-full px-3 py-2.5 rounded-lg outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#e8e8f0",
                      fontSize: "0.88rem",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    color: "rgba(232,232,240,0.5)",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    display: "block",
                    marginBottom: "0.4rem",
                  }}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="e.g. Job Opportunity"
                  className="w-full px-3 py-2.5 rounded-lg outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#e8e8f0",
                    fontSize: "0.88rem",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    color: "rgba(232,232,240,0.5)",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    display: "block",
                    marginBottom: "0.4rem",
                  }}
                >
                  Message *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about the opportunity..."
                  rows={5}
                  className="w-full px-3 py-2.5 rounded-lg outline-none transition-all duration-200 resize-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#e8e8f0",
                    fontSize: "0.88rem",
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  boxShadow: "0 0 20px rgba(124,58,237,0.3)",
                }}
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
