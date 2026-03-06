import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

import profileImg from "../assets/profile.jpg";

const titles = [
  "Software Engineer",
  "Visiting Lecturer",
  "Full Stack Developer",
];

function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const currentTitle = titles[titleIdx];

    if (typing) {
      if (charIdx < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayed(currentTitle.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 70);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIdx > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(currentTitle.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setTitleIdx((i) => (i + 1) % titles.length);
        setTyping(true);
      }
    }
  }, [typing, charIdx, titleIdx]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden scroll-mt-24"
      style={{ paddingTop: "4rem" }}
    >
      {/* Background orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
      />

      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }}
      />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* TEXT SIDE */}
          <div
            className="flex-1 text-center lg:text-left"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#7c3aed" }}
              />
              <span className="text-xs font-medium text-purple-300">
                Open to opportunities
              </span>
            </div>

            <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold text-white leading-tight mb-2">
              Thimasha{" "}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
                Thakshali
              </span>
            </h1>

            <div className="text-purple-300 text-lg mb-4 min-h-[2rem]">
              {displayed}
              <span className="inline-block w-[2px] h-5 ml-1 bg-purple-500 animate-pulse" />
            </div>

            <p className="text-gray-400 max-w-lg mb-8">
              Passionate Software Engineer with experience in full-stack
              development, machine learning, and embedded systems. Building
              innovative solutions while mentoring future developers.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollTo("projects")}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold hover:scale-105 transition"
              >
                View Projects
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-2.5 rounded-full border border-purple-500 text-purple-300 hover:scale-105 transition"
              >
                Contact Me
              </button>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/ThimashaThakshali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-purple-500/40 hover:scale-110 transition"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/thimasha-thakshali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-purple-500/40 hover:scale-110 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:ugthimashath@gmail.com"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-purple-500/40 hover:scale-110 transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div
            className="relative flex-shrink-0"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Outer spinning ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin bg-[conic-gradient(#7c3aed,#06b6d4,#7c3aed)] p-[2px]"
                style={{ animationDuration: "8s" }}
              />

              {/* Inner background */}
              <div className="absolute inset-[2px] rounded-full bg-[#06061a]" />

              {/* ✅ Image clipping wrapper */}
              <div className="absolute inset-1 rounded-full overflow-hidden">
                <img
                  src={profileImg}
                  alt="Thimasha"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-cyan-400">
                <ExternalLink size={12} color="white" />
                <span className="text-xs font-semibold text-white">
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <button
            type="button"
            onClick={() => scrollTo("about")}
            className="flex flex-col items-center gap-1 group"
            aria-label="Scroll to About section"
          >
            <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              Scroll down
            </span>
            <ArrowDown
              size={16}
              className="text-purple-500 animate-bounce group-hover:scale-110 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
