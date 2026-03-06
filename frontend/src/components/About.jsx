import { GraduationCap, Briefcase, Heart, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "Recent Role",
    value: "Associate Software Engineer",
    sub: "Pentagon I Runway (Specta Solutions)",
    color: "#7c3aed",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "BEng (Hons) Software Engineering",
    sub: "IIT – University of Westminster",
    color: "#06b6d4",
  },
  {
    icon: Heart,
    label: "Visiting Lecturer",
    value: "Informatics Institute of Technology",
    sub: "Teaching Client–Server Architecture",
    color: "#f59e0b",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nugegoda, Sri Lanka",
    sub: "Open to remote & relocation",
    color: "#10b981",
  },
];

function About() {
  return (
    <section id="about" className="py-16 scroll-mt-24">
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
            About Me
          </span>

          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-white">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE BIO */}
          <div>
            <p className="text-gray-400 mb-5 leading-relaxed">
              I am a Software Engineer with a strong foundation in both academic
              and practical software development. I completed my
              <span className="text-purple-400 font-medium">
                {" "}
                BEng (Hons) in Software Engineering at the Informatics Institute
                of Technology (affiliated with the University of Westminster)
              </span>
              .
            </p>

            <p className="text-gray-400 mb-5 leading-relaxed">
              I previously worked as an
              <span className="text-purple-400 font-medium">
                {" "}
                Associate Software Engineer at Pentagon I Runway (Specta
                Solutions)
              </span>
              , where I contributed to building and improving scalable
              enterprise web applications.
            </p>

            <p className="text-gray-400 mb-5 leading-relaxed">
              Alongside my industry experience, I serve as a
              <span className="text-cyan-400 font-medium">
                {" "}
                Visiting Lecturer at the Informatics Institute of Technology
              </span>
              , mentoring undergraduate students and supporting modules related
              to software architecture and client–server systems.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My interests include full-stack development, machine learning,
              wearable technology, and privacy-focused systems. I enjoy solving
              complex problems and building software solutions that create
              meaningful real-world impact.
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Problem Solver",
                "Team Player",
                "Quick Learner",
                "Mentor",
                "Innovator",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    background: "rgba(124,58,237,0.08)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    color: "#c4b5fd",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE HIGHLIGHTS */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, value, sub, color }) => (
              <div
                key={label}
                className="p-5 rounded-xl hover:scale-105 transition"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{
                    background: `${color}18`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon size={18} style={{ color }} />
                </div>

                <p className="text-[0.7rem] text-gray-500 uppercase font-medium">
                  {label}
                </p>

                <p className="text-sm font-semibold text-gray-200 mt-1">
                  {value}
                </p>

                <p className="text-xs text-gray-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
