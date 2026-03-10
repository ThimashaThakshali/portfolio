import { useState } from "react";
import {
  Github,
  ExternalLink,
  Watch,
  Building2,
  Shield,
  Brain,
  Compass,
  Image as ImageIcon,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Star Sentinel",
    subtitle: "Real-Time Wearable Multimodal Fear Detection System (2025)",
    icon: Watch,
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed20, #5b21b620)",
    category: "Mobile / ML",
    status: "Completed",
    award: "Finalist – IEEE Sri Lanka Section FYP Arena 2025",
    description:
      "A real-time wearable safety system that detects fear-related emotional states using physiological and speech signals from a smartwatch and triggers emergency alerts.",
    tech: [
      "Wear OS",
      "Kotlin",
      "TensorFlow Lite",
      "HRV & MFCC",
      "Signal Processing",
      "On-device ML",
    ],
    github: "https://github.com/ThimashaThakshali/Star_Sentinel",
    demo: "https://github.com/ThimashaThakshali/Star_Sentinel",
    details: [
      "Multimodal fusion: HRV + audio features for better robustness.",
      "Lightweight NN → TensorFlow Lite for on-device inference.",
      "Privacy-first: offline detection + low latency.",
      "Alerts with live location to predefined contacts.",
    ],
  },
  {
    id: 2,
    title: "Smart Privacy",
    subtitle: "Encrypted Health Data System (2025)",
    icon: Shield,
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b20, #d9770620)",
    category: "Security / Backend",
    status: "Completed",
    description:
      "A privacy-focused health data platform that anonymizes users and encrypts sensitive data with controlled access.",
    tech: ["Python", "Flask", "MongoDB", "Encryption", "Role-Based Access"],
    github: "https://github.com/ThimashaThakshali/smart_privacy_project",
    demo: "https://github.com/ThimashaThakshali/smart_privacy_project",
  },
  {
    id: 3,
    title: "DeepSense",
    subtitle: "Suicidal Text Detection Application (2023)",
    icon: Brain,
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b98120, #05966820)",
    category: "AI / Mobile",
    status: "Completed",
    description:
      "An Android application that detects suicidal ideation from text using supervised learning models.",
    tech: ["Kotlin", "Python", "Machine Learning", "SQL", "Android Studio"],
    github: "https://github.com/chamajay/deepsense/",
    demo: "https://github.com/chamajay/deepsense/",
  },
  {
    id: 4,
    title: "SereneTrek LK",
    subtitle: "Offline-First Sustainable Tourism Platform (2025)",
    icon: Compass,
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d420, #0891b220)",
    category: "Mobile / Product",
    status: "OnGoing",
    description:
      "An offline-first tourism platform connecting travelers with rural hosts, featuring offline GPS navigation, sustainability scoring, and SMS-based SOS alerts.",
    tech: ["React Native", "Mapbox", "Offline GPS", "SMS SOS", "Marketplace"],
    github: "https://github.com/TenuriUdana/SereneTrek-LK",
    demo: "https://github.com/TenuriUdana/SereneTrek-LK",
  },
  {
    id: 5,
    title: "Embiggen Viewer",
    subtitle: "Satellite Imagery Exploration Tool (2025)",
    icon: ImageIcon,
    color: "#a78bfa",
    gradient: "linear-gradient(135deg, #a78bfa20, #7c3aed15)",
    category: "Web / Visualization",
    status: "Completed",
    description:
      "A lightweight web app visualizing high-resolution Earth and space imagery using public satellite data.",
    tech: ["HTML", "CSS", "JavaScript", "Leaflet.js", "NASA GIBS"],
    github: "https://github.com/ThimashaThakshali/embiggen-viewer",
    demo: "https://github.com/ThimashaThakshali/embiggen-viewer",
  },
];

function Projects() {
  const [hovered, setHovered] = useState(null);
  const [openId, setOpenId] = useState(null);

  return (
    <section id="projects" className="py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
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
            Portfolio
          </span>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Featured Projects
          </h2>

          <p
            className="mt-3 max-w-md mx-auto"
            style={{ color: "rgba(232,232,240,0.5)", fontSize: "0.9rem" }}
          >
            A selection of projects that demonstrate my technical range and
            problem-solving skills.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            const isHovered = hovered === project.id;
            const isOpen = openId === project.id;

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl p-6 cursor-pointer transition-all duration-300"
                style={{
                  background: isHovered
                    ? project.gradient
                    : "rgba(255,255,255,0.02)",
                  border: `1px solid ${
                    isHovered ? project.color + "40" : "rgba(255,255,255,0.06)"
                  }`,
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? `0 20px 40px ${project.color}15`
                    : "none",
                }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setOpenId(isOpen ? null : project.id)}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${project.color}20`,
                      border: `1px solid ${project.color}35`,
                    }}
                  >
                    <Icon size={22} style={{ color: project.color }} />
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="px-2 py-0.5 rounded text-xs"
                      style={{
                        background: "rgba(16,185,129,0.12)",
                        border: "1px solid rgba(16,185,129,0.25)",
                        color: "#10b981",
                        fontWeight: 500,
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Category */}
                <div className="mb-2">
                  <span
                    style={{
                      color: project.color,
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    lineHeight: 1.3,
                    marginBottom: "0.2rem",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "rgba(232,232,240,0.5)",
                    fontSize: "0.82rem",
                    marginBottom: project.award ? "0.4rem" : "0.75rem",
                  }}
                >
                  {project.subtitle}
                </p>

                {/* Award */}
                {project.award && (
                  <div className="mb-3">
                    <span
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        background: `${project.color}12`,
                        border: `1px solid ${project.color}25`,
                        color: project.color,
                        fontWeight: 600,
                      }}
                    >
                      {project.award}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p
                  className="mb-4"
                  style={{
                    color: "rgba(232,232,240,0.6)",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs"
                      style={{
                        background: `${project.color}10`,
                        border: `1px solid ${project.color}20`,
                        color: project.color,
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all duration-200 hover:opacity-80"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(232,232,240,0.7)",
                      fontWeight: 500,
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={13} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all duration-200 hover:opacity-80"
                    style={{
                      background: `${project.color}18`,
                      border: `1px solid ${project.color}30`,
                      color: project.color,
                      fontWeight: 600,
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={13} />
                    View Project
                  </a>
                </div>

                {/* Optional details (click card to toggle) */}
                {project.details && (
                  <div
                    className="mt-5 rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: `1px solid ${project.color}20`,
                      display: isOpen ? "block" : "none",
                    }}
                  >
                    <p
                      className="mb-2"
                      style={{
                        color: "rgba(232,232,240,0.7)",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                      }}
                    >
                      Highlights
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.details.map((d) => (
                        <li
                          key={d}
                          style={{
                            color: "rgba(232,232,240,0.6)",
                            fontSize: "0.82rem",
                            lineHeight: 1.6,
                          }}
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                    <p
                      className="mt-3"
                      style={{
                        color: "rgba(232,232,240,0.35)",
                        fontSize: "0.75rem",
                      }}
                    >
                      Tip: click the card again to hide details.
                    </p>
                  </div>
                )}

                {/* Hint */}
                {project.details && !isOpen && (
                  <div className="mt-4">
                    <span
                      className="text-xs"
                      style={{ color: "rgba(232,232,240,0.35)" }}
                    >
                      Click card to view highlights
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
