import {
  Trophy,
  Star,
  Award,
  Zap,
  Code,
  Medal,
  Target,
  Crown,
  Sparkles,
  Users,
  Shield,
  TrendingUp,
  Globe,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";

// Awards - Academic and Professional Recognition
const awards = [
  {
    title: "IIT Excellence Award 2025",
    subtitle: "Undergraduate Award for Outstanding Performance at Competitions",
    year: "2025",
    color: "#f59e0b",
    icon: Crown,
    institution: "Informatics Institute of Technology",
    type: "Academic Excellence",
  },
  {
    title: "IIT Excellence Award 2025",
    subtitle: "Undergraduate Merit Award for Performance at Competitions",
    year: "2025",
    color: "#f59e0b",
    icon: Medal,
    institution: "Informatics Institute of Technology",
    type: "Academic Merit",
  },
  {
    title: "IEEE Sri Lanka Section FYP Arena 2025",
    subtitle: "Finalist",
    year: "2025",
    color: "#10b981",
    icon: GraduationCap,
    institution: "IEEE Sri Lanka Section",
    type: "Undergraduate Project Competition",
  },
];

// Research
const research = [
  {
    title: "ICARC 2026 Research Presentation",
    subtitle:
      "Presented the paper 'A Real-Time Wearable Multimodal Fear Detection and Alert System'",
    year: "2026",
    color: "#06b6d4",
    icon: BookOpen,
    institution:
      "6th International Conference on Advanced Research in Computing (ICARC 2026)",
    type: "International Research Conference",
    location: "Belihuloya, Sri Lanka",
  },
];

// Competitions & Hackathons
const competitions = [
  {
    title: "Mini Hacksphere'25",
    place: "🥇 1st Place",
    year: "2025",
    color: "#f59e0b",
    icon: Crown,
    type: "Hackathon",
  },
  {
    title: "Coderally 6.0 (Advanced Tier)",
    place: "🥈 2nd Place",
    year: "2025",
    color: "#f59e0b",
    icon: Medal,
    type: "Programming",
  },
  {
    title: "Problem Solving International Hackathon",
    place: "🥈 2nd Place",
    year: "2025",
    color: "#f59e0b",
    icon: Globe,
    type: "International",
  },
  {
    title: "CODEDROP",
    place: "🥉 3rd Place",
    year: "2025",
    color: "#ec4899",
    icon: Trophy,
    type: "Hackathon",
  },
  {
    title: "PrologueX",
    place: "🥉 3rd Place",
    year: "2023",
    color: "#ec4899",
    icon: Trophy,
    type: "Hackathon",
  },
  {
    title: "Algothon",
    place: "5th Place",
    year: "2025",
    color: "#7c3aed",
    icon: Code,
    type: "Algorithm",
  },
  {
    title: "AdaptIQ",
    place: "Finalist",
    year: "2025",
    color: "#06b6d4",
    icon: Sparkles,
    type: "Innovation",
  },
  {
    title: "SLIITXtreme 4.0",
    place: "Finalist",
    year: "2025",
    color: "#06b6d4",
    icon: Zap,
    type: "Extreme Programming",
  },
  {
    title: "Artemia",
    place: "Finalist",
    year: "2025",
    color: "#06b6d4",
    icon: Star,
    type: "Hackathon",
  },
  {
    title: "Haxpedition – Mini Hackathon",
    place: "🥇 1st Place",
    year: "2024",
    color: "#f59e0b",
    icon: Crown,
    type: "Mini Hackathon",
  },
  {
    title: "IEEEXtreme 18.0",
    place: "5th in IIT, 52nd Nationally, 674th Globally",
    year: "2024",
    color: "#10b981",
    icon: Globe,
    type: "IEEE Global",
  },
  {
    title: "IEEEXtreme 17.0",
    place: "9th Place in IIT",
    year: "2023",
    color: "#10b981",
    icon: Globe,
    type: "IEEE",
  },
];

const certifications = [
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    color: "#10b981",
    icon: Code,
    level: "Professional",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    color: "#7c3aed",
    icon: Target,
    level: "Foundation",
  },
  {
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    color: "#f59e0b",
    icon: Zap,
    level: "Foundation",
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    color: "#06b6d4",
    icon: Sparkles,
    level: "Foundation",
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    color: "#ec4899",
    icon: Shield,
    level: "Foundation",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    color: "#8b5cf6",
    icon: Star,
    level: "Foundation",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    color: "#f97316",
    icon: BookOpen,
    level: "Foundation",
  },
];

const leadership = [
  {
    title: "Team Leader – AdaptIQ",
    organization: "Rising Tech Dragons",
    year: "2025",
    color: "#7c3aed",
    icon: Users,
    role: "Competition Team",
  },
  {
    title: "Team Leader – SLIITXtreme 4.0",
    organization: "Rising Tech Dragons",
    year: "2025",
    color: "#7c3aed",
    icon: Users,
    role: "Competition Team",
  },
  {
    title: "Team Leader – Algothon",
    organization: "Rising Tech Dragons",
    year: "2025",
    color: "#7c3aed",
    icon: Users,
    role: "Competition Team",
  },
  {
    title: "Team Leader – Operational Research and Optimization Coursework",
    organization: "Academic",
    year: "2025",
    color: "#06b6d4",
    icon: TrendingUp,
    role: "Academic Project",
  },
  {
    title: "Group Leader – Web Design and Development Coursework",
    organization: "Academic",
    year: "2022",
    color: "#06b6d4",
    icon: Code,
    role: "Academic Project",
  },
  {
    title: "Senior Prefect",
    organization: "School",
    year: "2018 – 2019",
    color: "#f59e0b",
    icon: Shield,
    role: "School Leadership",
  },
];

function Achievements() {
  const [activeTab, setActiveTab] = useState("awards");

  const tabs = [
    { id: "awards", label: "Awards", icon: Award, count: awards.length },
    {
      id: "research",
      label: "Research",
      icon: BookOpen,
      count: research.length,
    },
    {
      id: "competitions",
      label: "Competitions & Hackathons",
      icon: Trophy,
      count: competitions.length,
    },
    {
      id: "certifications",
      label: "Certifications",
      icon: Medal,
      count: certifications.length,
    },
    {
      id: "leadership",
      label: "Leadership",
      icon: Users,
      count: leadership.length,
    },
  ];

  return (
    <section id="achievements" className="py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
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
            Recognition
          </span>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Achievements & Awards
          </h2>

          <p
            className="mt-3 max-w-2xl mx-auto"
            style={{ color: "rgba(232,232,240,0.5)", fontSize: "0.9rem" }}
          >
            Proven track record of excellence in competitive programming,
            hackathons, research, and technical leadership
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-200"
                style={{
                  background:
                    activeTab === tab.id
                      ? "rgba(124,58,237,0.15)"
                      : "rgba(255,255,255,0.03)",
                  border:
                    activeTab === tab.id
                      ? "1px solid rgba(124,58,237,0.4)"
                      : "1px solid rgba(255,255,255,0.08)",
                  color:
                    activeTab === tab.id ? "#a78bfa" : "rgba(232,232,240,0.6)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                }}
              >
                <Icon size={16} />
                {tab.label}
                <span
                  className="ml-1 px-1.5 py-0.5 rounded text-xs"
                  style={{
                    background:
                      activeTab === tab.id
                        ? "rgba(124,58,237,0.3)"
                        : "rgba(255,255,255,0.1)",
                    fontWeight: 700,
                  }}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {activeTab === "awards" && (
          <div className="grid lg:grid-cols-3 gap-5">
            {awards.map((award, idx) => {
              const Icon = award.icon;
              return (
                <div
                  key={`${award.title}-${idx}`}
                  className="group p-6 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(6,182,212,0.08) 100%)",
                    border: `1.5px solid ${award.color}40`,
                    boxShadow: `0 0 20px ${award.color}15`,
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${award.color}20`,
                        border: `1.5px solid ${award.color}50`,
                      }}
                    >
                      <Icon size={22} style={{ color: award.color }} />
                    </div>

                    <span
                      className="px-2 py-0.5 rounded text-xs"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(232,232,240,0.4)",
                        fontWeight: 500,
                      }}
                    >
                      {award.year}
                    </span>
                  </div>

                  <p
                    style={{
                      color: award.color,
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {award.type}
                  </p>

                  <h3
                    style={{
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "1rem",
                      lineHeight: 1.3,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {award.title}
                  </h3>

                  <p
                    style={{
                      color: award.color,
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      marginBottom: "0.6rem",
                    }}
                  >
                    {award.subtitle}
                  </p>

                  <p
                    style={{
                      color: "rgba(232,232,240,0.6)",
                      fontSize: "0.8rem",
                      lineHeight: 1.5,
                    }}
                  >
                    🏛️ {award.institution}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "research" && (
          <div className="grid lg:grid-cols-1 gap-5">
            {research.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.title}-${idx}`}
                  className="group p-6 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(124,58,237,0.08) 100%)",
                    border: `1.5px solid ${item.color}40`,
                    boxShadow: `0 0 20px ${item.color}15`,
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${item.color}20`,
                        border: `1.5px solid ${item.color}50`,
                      }}
                    >
                      <Icon size={22} style={{ color: item.color }} />
                    </div>

                    <span
                      className="px-2 py-0.5 rounded text-xs"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(232,232,240,0.4)",
                        fontWeight: 500,
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <p
                    style={{
                      color: item.color,
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.type}
                  </p>

                  <h3
                    style={{
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "1rem",
                      lineHeight: 1.3,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: item.color,
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      marginBottom: "0.6rem",
                    }}
                  >
                    {item.subtitle}
                  </p>

                  <p
                    style={{
                      color: "rgba(232,232,240,0.6)",
                      fontSize: "0.8rem",
                      lineHeight: 1.5,
                    }}
                  >
                    📍 {item.location}
                  </p>

                  <p
                    style={{
                      color: "rgba(232,232,240,0.6)",
                      fontSize: "0.8rem",
                      lineHeight: 1.5,
                      marginTop: "0.35rem",
                    }}
                  >
                    🏛️ {item.institution}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "competitions" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {competitions.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div
                  key={`${comp.title}-${comp.year}-${idx}`}
                  className="group p-5 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${comp.color}18`,
                        border: `1px solid ${comp.color}30`,
                      }}
                    >
                      <Icon size={18} style={{ color: comp.color }} />
                    </div>

                    <span
                      className="px-2 py-0.5 rounded text-xs"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(232,232,240,0.4)",
                        fontWeight: 500,
                      }}
                    >
                      {comp.year}
                    </span>
                  </div>

                  <p
                    style={{
                      color: comp.color,
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {comp.type}
                  </p>

                  <h3
                    style={{
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      lineHeight: 1.3,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {comp.title}
                  </h3>

                  <p
                    style={{
                      color: comp.color,
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    {comp.place}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "certifications" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div
                  key={`${cert.title}-${idx}`}
                  className="group p-5 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${cert.color}18`,
                        border: `1px solid ${cert.color}30`,
                      }}
                    >
                      <Icon size={18} style={{ color: cert.color }} />
                    </div>

                    <span
                      className="px-2 py-0.5 rounded text-xs"
                      style={{
                        background: `${cert.color}15`,
                        border: `1px solid ${cert.color}30`,
                        color: cert.color,
                        fontWeight: 600,
                      }}
                    >
                      {cert.level}
                    </span>
                  </div>

                  <h3
                    style={{
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      lineHeight: 1.3,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {cert.title}
                  </h3>

                  <p
                    style={{
                      color: cert.color,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
                    📜 {cert.issuer}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "leadership" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {leadership.map((lead, idx) => {
              const Icon = lead.icon;
              return (
                <div
                  key={`${lead.title}-${lead.year}-${idx}`}
                  className="group p-5 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${lead.color}18`,
                        border: `1px solid ${lead.color}30`,
                      }}
                    >
                      <Icon size={18} style={{ color: lead.color }} />
                    </div>

                    <span
                      className="px-2 py-0.5 rounded text-xs"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(232,232,240,0.4)",
                        fontWeight: 500,
                      }}
                    >
                      {lead.year}
                    </span>
                  </div>

                  <p
                    style={{
                      color: lead.color,
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {lead.role}
                  </p>

                  <h3
                    style={{
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      lineHeight: 1.3,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {lead.title}
                  </h3>

                  <p
                    style={{
                      color: lead.color,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
                    {lead.organization}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        <div
          className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 p-6 rounded-2xl"
          style={{
            background: "rgba(124,58,237,0.06)",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          {[
            { label: "Awards", value: "3", color: "#f59e0b", icon: Award },
            { label: "Research", value: "1", color: "#06b6d4", icon: BookOpen },
            {
              label: "Competitions",
              value: "12+",
              color: "#7c3aed",
              icon: Trophy,
            },
            {
              label: "Certifications",
              value: "7",
              color: "#8b5cf6",
              icon: Medal,
            },
            {
              label: "Leadership Roles",
              value: "6",
              color: "#10b981",
              icon: Users,
            },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Icon size={20} style={{ color: stat.color }} />
                </div>
                <p
                  style={{
                    color: stat.color,
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    color: "rgba(232,232,240,0.5)",
                    fontSize: "0.8rem",
                    marginTop: "0.3rem",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
