import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Visiting Lecturer (Part-Time)",
    company: "Informatics Institute of Technology (IIT)",
    period: "01/2026 – Present",
    location: "Sri Lanka",
    type: "education",
    color: "#f59e0b",
    description:
      "Conducting Client–Server Architecture (CSA) tutorials with short theory recaps, hands-on guidance, and support during lab sessions to clarify core architectural concepts.",
    tags: ["Client–Server Architecture", "Teaching", "Mentoring"],
  },

  {
    role: "Associate Software Engineer",
    company: "Pentagon I Runway (Specta Solutions)",
    period: "11/2025 – 02/2026",
    location: "Sri Lanka",
    type: "work",
    color: "#7c3aed",
    description:
      "Developing and enhancing enterprise applications across two parallel projects. Working with the Agile Labs Axpert platform and contributing to UI/UX and full-stack UI development using HTML, CSS, and React. Supporting integrations and testing activities.",
    tags: ["Axpert", "HTML", "CSS", "React", "Integrations", "Testing"],
  },
  {
    role: "Software Engineer Trainee",
    company: "Pentagon I Runway (Specta Solutions)",
    period: "04/2024 – 10/2024",
    location: "Sri Lanka",
    type: "work",
    color: "#06b6d4",
    description:
      "Developed enterprise applications using the Agile Labs Axpert platform. Implemented UI components with HTML and CSS and worked with XML/JSON for validations, APIs, and system integration. Supported UAT, deployment, and user training.",
    tags: ["Axpert", "HTML", "CSS", "XML", "JSON", "UAT"],
  },
  {
    role: "Software Engineer Intern",
    company: "Pentagon I Runway (Specta Solutions)",
    period: "09/2023 – 03/2024",
    location: "Sri Lanka",
    type: "work",
    color: "#10b981",
    description:
      "Optimized ERP query performance using PostgreSQL. Assisted in feature development, system integration, testing, UI development, and user support while meeting delivery deadlines.",
    tags: ["PostgreSQL", "ERP", "Testing", "UI Development"],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-16 scroll-mt-24">
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
            Career Journey
          </span>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(180deg, #7c3aed40, #06b6d440, transparent)",
              transform: "translateX(-50%)",
            }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={`${exp.role}-${exp.period}`}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-8 lg:left-1/2 w-4 h-4 rounded-full border-2 z-10 flex-shrink-0"
                  style={{
                    background: exp.color,
                    borderColor: "#06061a",
                    transform: "translate(-50%, 6px)",
                    boxShadow: `0 0 12px ${exp.color}60`,
                  }}
                />

                {/* Spacer for centering on large screens */}
                <div className="hidden lg:block flex-1" />

                {/* Card */}
                <div
                  className="ml-16 lg:ml-0 flex-1 p-6 rounded-xl transition-all duration-200 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${exp.color}25`,
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {exp.type === "work" ? (
                          <Briefcase size={14} style={{ color: exp.color }} />
                        ) : (
                          <GraduationCap
                            size={14}
                            style={{ color: exp.color }}
                          />
                        )}

                        <span
                          style={{
                            color: exp.color,
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                          }}
                        >
                          {exp.type === "work" ? "Professional" : "Academic"}
                        </span>
                      </div>

                      <h3
                        style={{
                          color: "#ffffff",
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          lineHeight: 1.3,
                        }}
                      >
                        {exp.role}
                      </h3>

                      <p
                        style={{
                          color: "rgba(232,232,240,0.6)",
                          fontSize: "0.85rem",
                          marginTop: "0.2rem",
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                        style={{
                          background: `${exp.color}15`,
                          border: `1px solid ${exp.color}30`,
                        }}
                      >
                        <Calendar size={11} style={{ color: exp.color }} />
                        <span
                          style={{
                            color: exp.color,
                            fontSize: "0.75rem",
                            fontWeight: 500,
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 mt-1.5 justify-end">
                        <MapPin
                          size={10}
                          style={{ color: "rgba(232,232,240,0.3)" }}
                        />
                        <span
                          style={{
                            color: "rgba(232,232,240,0.3)",
                            fontSize: "0.72rem",
                          }}
                        >
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p
                    className="mb-4"
                    style={{
                      color: "rgba(232,232,240,0.6)",
                      fontSize: "0.87rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs"
                        style={{
                          background: `${exp.color}12`,
                          border: `1px solid ${exp.color}25`,
                          color: exp.color,
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
