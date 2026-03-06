import { useState } from "react";

const categories = [
  {
    name: "Languages",
    color: "#7c3aed",
    skills: [
      { name: "SQL", level: 90 },
      { name: "Java", level: 85 },
      { name: "Python", level: 85 },
      { name: "HTML", level: 80 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "C#", level: 10 },
    ],
  },
  {
    name: "Frameworks & Libraries",
    color: "#06b6d4",
    skills: [
      { name: "ReactJS", level: 70 },
      { name: "Node.js", level: 65 },
      { name: "Express.js", level: 20 },
      { name: "Tailwind CSS", level: 20 },
    ],
  },
  {
    name: "Databases",
    color: "#f59e0b",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Oracle SQL", level: 85 },
      { name: "MongoDB", level: 20 },
    ],
  },
  {
    name: "Design & Other",
    color: "#10b981",
    skills: [
      { name: "Figma", level: 82 },
      { name: "OOP Principles", level: 92 },
      { name: "Git / GitHub", level: 80 },
      { name: "REST APIs", level: 70 },
      { name: "Wear OS", level: 72 },
      { name: "Machine Learning", level: 74 },
    ],
  },
];

function SkillBar({ name, level, color }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span
          style={{
            color: "rgba(232,232,240,0.85)",
            fontSize: "0.85rem",
            fontWeight: 500,
          }}
        >
          {name}
        </span>
        <span style={{ color: color, fontSize: "0.75rem", fontWeight: 600 }}>
          {level}%
        </span>
      </div>

      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            transition: "width 1s ease",
          }}
        />
      </div>
    </div>
  );
}

function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const allChips = Array.from(
    new Set(categories.flatMap((c) => c.skills.map((s) => s.name))),
  );

  return (
    <section id="skills" className="relative py-16 scroll-mt-24">
      <div
        className="absolute left-0 right-0 top-0 h-px opacity-10"
        style={{
          background:
            "linear-gradient(90deg, transparent, #7c3aed, transparent)",
        }}
      />

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
            Technical Skills
          </span>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            My Tech Stack
          </h2>

          <p
            className="mt-3 max-w-md mx-auto"
            style={{ color: "rgba(232,232,240,0.5)", fontSize: "0.9rem" }}
          >
            A toolkit built through projects, internships, and enterprise work.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(i)}
              className="px-4 py-2 rounded-full text-sm transition-all duration-200"
              style={{
                background:
                  activeTab === i ? `${cat.color}20` : "rgba(255,255,255,0.04)",
                border: `1px solid ${
                  activeTab === i ? cat.color + "60" : "rgba(255,255,255,0.08)"
                }`,
                color: activeTab === i ? cat.color : "rgba(232,232,240,0.5)",
                fontWeight: activeTab === i ? 600 : 400,
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Bars */}
        <div
          className="p-8 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {categories[activeTab].skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={categories[activeTab].color}
              />
            ))}
          </div>
        </div>

        {/* Chips */}
        <div className="mt-12 text-center">
          <p
            className="mb-5"
            style={{
              color: "rgba(232,232,240,0.4)",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            All Technologies
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {allChips.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-xs transition-all duration-200 hover:scale-105 cursor-default"
                style={{
                  background: "rgba(124,58,237,0.08)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  color: "rgba(232,232,240,0.7)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
