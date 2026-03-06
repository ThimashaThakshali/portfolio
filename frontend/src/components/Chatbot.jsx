import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Code,
  Briefcase,
  FolderOpen,
  Phone,
  ChevronDown,
} from "lucide-react";

/**
 * Privacy rules:
 * - Never reveal phone numbers, city/address, or reference contacts.
 * - Only share public info: email, LinkedIn, GitHub, HackerRank, portfolio, and general location (e.g., Sri Lanka).
 */

const quickOptions = [
  { label: "View Skills", icon: Code, action: "skills" },
  { label: "View Projects", icon: FolderOpen, action: "projects" },
  { label: "Work Experience", icon: Briefcase, action: "experience" },
  { label: "Contact Info", icon: Phone, action: "contact" },
];

// ✅ From CV (public + safe)
const PUBLIC_CONTACT = {
  email: "ugthimashath@gmail.com",
  linkedin: "https://www.linkedin.com/in/thimasha-thakshali/",
  github: "https://github.com/ThimashaThakshali",
  hackerrank: "https://www.hackerrank.com/thimasha_2021042",
  portfolio: "https://thimashathakshali.github.io/portfolio/",
};

const SAFE_SKILLS = [
  "Java",
  "Python",
  "SQL",
  "HTML5",
  "CSS3",
  "JavaScript",
  "OOP",
  "ReactJS",
  "NodeJS",
  "Figma",
  "REST APIs",
  "Agile",
];

const SAFE_PROJECTS = [
  {
    name: "Star Sentinel",
    short:
      "Wear OS safety app that detects fear using heart rate + speech (HRV & MFCC) with TensorFlow/TFLite.",
    link: "https://github.com/ThimashaThakshali/Star_Sentinel",
    team: "Individual",
    year: "2025",
  },
  {
    name: "Smart Privacy",
    short:
      "Encrypted health data system (Flask + MongoDB) with anonymization and role-based access control.",
    link: "https://github.com/ThimashaThakshali/smart_privacy_project",
    team: "Individual",
    year: "2025",
  },
  {
    name: "DeepSense",
    short:
      "Android app for suicidal text detection using ML models trained in Google Colab.",
    link: "https://github.com/chamajay/deepsense/",
    team: "Group",
    year: "2023",
  },
  {
    name: "Concurrent Banking System",
    short:
      "Java concurrent banking simulation with deadlock-free transfers and thread safety.",
    link: "", // optional; leave empty if you don't want to show link
    team: "Group",
    year: "2025",
  },
];

const SAFE_EXPERIENCE = [
  {
    role: "Associate Software Engineer",
    org: "Pentagon I Runway (Specta Solutions)",
    period: "11/2025 – Present",
    points: [
      "Developing enterprise applications across two parallel projects.",
      "Working with Agile Labs Axpert platform.",
      "UI/UX + full-stack UI using Figma, HTML, CSS, and React.",
      "Implementing features, integrations, and supporting testing.",
    ],
  },
  {
    role: "Software Engineer Trainee",
    org: "Pentagon I Runway (Specta Solutions)",
    period: "04/2024 – 10/2024",
    points: [
      "Built enterprise apps using Agile Labs Axpert platform.",
      "Implemented UI components with HTML and CSS.",
      "Used XML/JSON for validations, APIs, and integration.",
      "Supported testing, UAT, deployment, and user training.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Pentagon I Runway (Specta Solutions)",
    period: "09/2023 – 03/2024",
    points: [
      "Optimized ERP queries using PostgreSQL.",
      "Assisted feature development, integration, and testing.",
      "Contributed to UI development and user support.",
    ],
  },
  {
    role: "Visiting Lecturer (Part-Time)",
    org: "Informatics Institute of Technology (IIT)",
    period: "01/2026 – Present",
    points: [
      "Conduct CSA tutorials with theory recaps and hands-on guidance.",
      "Support students during labs and clarify core architecture concepts.",
    ],
  },
];

// Simple privacy detection (not perfect, but good enough for this portfolio bot)
function asksPrivateInfo(text) {
  const t = (text || "").toLowerCase();
  const triggers = [
    "phone",
    "mobile",
    "whatsapp",
    "number",
    "address",
    "where do you live",
    "live in",
    "city",
    "nugegoda",
    "home",
    "location",
    "reference",
    "asiri",
    "akarshani",
  ];
  return triggers.some((k) => t.includes(k));
}

function getTime() {
  return new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
}

function responseSkills() {
  return `Thimasha’s core skills include:\n• ${SAFE_SKILLS.join(
    "\n• "
  )}\n\nWant me to jump to the Skills section?`;
}

function responseProjects() {
  const lines = SAFE_PROJECTS.map((p) => {
    const tag = p.team ? `(${p.team})` : "";
    return `• ${p.name} ${tag} — ${p.short}${p.link ? `\n  Link: ${p.link}` : ""}`;
  }).join("\n\n");

  return `Here are Thimasha’s featured projects:\n\n${lines}\n\nWant me to scroll to Projects?`;
}

function responseExperience() {
  const lines = SAFE_EXPERIENCE.map((e) => {
    return `• ${e.role} — ${e.org} (${e.period})\n  - ${e.points.join("\n  - ")}`;
  }).join("\n\n");

  return `Here’s a summary of Thimasha’s experience:\n\n${lines}\n\nWant me to scroll to Experience?`;
}

function responseContact() {
  // SAFE: email + public profile links only
  return `You can reach Thimasha here:\n📧 ${PUBLIC_CONTACT.email}\n💼 LinkedIn: ${PUBLIC_CONTACT.linkedin}\n🐙 GitHub: ${PUBLIC_CONTACT.github}\n⭐ HackerRank: ${PUBLIC_CONTACT.hackerrank}\n🌐 Portfolio: ${PUBLIC_CONTACT.portfolio}\n\n(For privacy, this chat doesn’t share phone numbers or exact address.)`;
}

function responseEducation() {
  return `Education:\n• BEng (Hons) Software Engineering (2:1)\n• Informatics Institute of Technology (IIT), affiliated with University of Westminster\n\nWant me to jump to About?`;
}

function responseAchievements() {
  return `Highlights:\n• IIT Excellence Award 2025 (Outstanding Performance)\n• IIT Excellence Award 2025 (Merit Award)\n• IEEE Sri Lanka Section FYP Arena 2025 — Finalist\n• Mini Hacksphere’25 — 1st Place\n• Coderally 6.0 (Advanced Tier, 2025) — 2nd Place\n• Problem Solving International Hackathon (2025) — 2nd Place\n• IEEEXtreme 18.0 (2024) — 5th in IIT, 52nd Nationally, 674th Globally\n\nWant me to scroll to Achievements?`;
}

function responseDefault() {
  return `I can help with:\n• Skills\n• Projects\n• Work Experience\n• Achievements\n• Safe contact links (email/LinkedIn/GitHub)\n\nUse the quick buttons below or ask me something like “show projects”.`;
}

function getBotResponse(input) {
  const lower = (input || "").toLowerCase().trim();

  // Privacy guard
  if (asksPrivateInfo(lower)) {
    return "For privacy, I can’t share personal details like phone numbers, exact address/city, or references. I can share public links (email, LinkedIn, GitHub, HackerRank) and project/work information.";
  }

  // Quick actions (when quick buttons pass 'skills', etc.)
  if (lower === "skills") return responseSkills();
  if (lower === "projects") return responseProjects();
  if (lower === "experience") return responseExperience();
  if (lower === "contact") return responseContact();

  // Intent matching
  if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack") || lower.includes("language"))
    return responseSkills();

  if (lower.includes("project") || lower.includes("portfolio") || (lower.includes("work") && lower.includes("built")))
    return responseProjects();

  if (lower.includes("experience") || lower.includes("job") || lower.includes("career"))
    return responseExperience();

  if (lower.includes("contact") || lower.includes("email") || lower.includes("linkedin") || lower.includes("github") || lower.includes("hackerrank"))
    return responseContact();

  if (lower.includes("education") || lower.includes("degree") || lower.includes("university") || lower.includes("iit"))
    return responseEducation();

  if (lower.includes("achievement") || lower.includes("award") || lower.includes("competition") || lower.includes("hackathon") || lower.includes("ieeextreme"))
    return responseAchievements();

  if (lower === "hi" || lower === "hey" || lower.startsWith("hi ")) {
    return "Hi! 👋 I’m Thimasha’s portfolio assistant. Want to see her projects, skills, or experience?";
  }

  if (lower === "hello" || lower.startsWith("hello ")) {
    return "Hello! 👋 Ask me about Thimasha’s projects, skills, experience, or safe contact links.";
  }

  return responseDefault();
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "1",
      role: "bot",
      text:
        "👋 Hi! I’m Thimasha’s portfolio assistant. I can help you learn about her skills, projects, experience, achievements, and public contact links. What would you like to know?",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open && !minimized) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, minimized]);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      role: "user",
      text: text.trim(),
      time: getTime(),
    };

    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response = getBotResponse(text);

      const botMsg = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: response,
        time: getTime(),
      };

      setMessages((m) => [...m, botMsg]);
      setTyping(false);
    }, 600);
  };

  const handleQuickOption = (action) => {
    sendMessage(action);

    const sectionMap = {
      skills: "skills",
      projects: "projects",
      experience: "experience",
      contact: "contact",
    };

    if (sectionMap[action]) {
      setTimeout(() => {
        document.getElementById(sectionMap[action])?.scrollIntoView({ behavior: "smooth" });
      }, 800);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => {
          setOpen(!open);
          setMinimized(false);
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: open ? "rgba(124,58,237,0.2)" : "linear-gradient(135deg, #7c3aed, #5b21b6)",
          border: open ? "2px solid rgba(124,58,237,0.5)" : "none",
          boxShadow: open ? "none" : "0 4px 24px rgba(124,58,237,0.5)",
          color: "white",
        }}
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
        {!open && (
          <span
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs flex items-center justify-center animate-bounce"
            style={{ background: "#10b981", color: "white", fontSize: "0.6rem", fontWeight: 700 }}
          >
            1
          </span>
        )}
      </button>

      {/* Chat Panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
          style={{
            width: "min(380px, calc(100vw - 24px))",
            height: minimized ? "auto" : "520px",
            background: "#0e0e24",
            border: "1px solid rgba(124,58,237,0.3)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,237,0.1)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(91,33,182,0.3))",
              borderBottom: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
              >
                <Bot size={16} color="white" />
              </div>
              <div>
                <p style={{ color: "#ffffff", fontSize: "0.87rem", fontWeight: 600, lineHeight: 1.2 }}>
                  Portfolio Assistant
                </p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#10b981" }} />
                  <span style={{ color: "#10b981", fontSize: "0.68rem" }}>Online</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setMinimized(!minimized)}
              className="p-1 rounded transition-opacity hover:opacity-70"
              style={{ color: "rgba(232,232,240,0.6)" }}
            >
              <ChevronDown
                size={18}
                style={{ transform: minimized ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
              />
            </button>
          </div>

          {!minimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    {/* Avatar */}
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background:
                          msg.role === "bot"
                            ? "linear-gradient(135deg, #7c3aed, #06b6d4)"
                            : "rgba(255,255,255,0.1)",
                        border: msg.role === "user" ? "1px solid rgba(255,255,255,0.15)" : "none",
                      }}
                    >
                      {msg.role === "bot" ? <Bot size={13} color="white" /> : <User size={13} color="rgba(232,232,240,0.8)" />}
                    </div>

                    {/* Bubble */}
                    <div className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"} max-w-[80%]`}>
                      <div
                        className="px-3 py-2.5 rounded-2xl"
                        style={{
                          background: msg.role === "bot" ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.08)",
                          border: msg.role === "bot" ? "1px solid rgba(124,58,237,0.25)" : "1px solid rgba(255,255,255,0.1)",
                          color: "rgba(232,232,240,0.9)",
                          fontSize: "0.83rem",
                          lineHeight: 1.65,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {msg.text}
                      </div>
                      <span style={{ color: "rgba(232,232,240,0.25)", fontSize: "0.65rem", marginTop: "0.2rem" }}>
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}

                {typing && (
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
                    >
                      <Bot size={13} color="white" />
                    </div>
                    <div
                      className="px-3 py-3 rounded-2xl flex items-center gap-1"
                      style={{
                        background: "rgba(124,58,237,0.15)",
                        border: "1px solid rgba(124,58,237,0.25)",
                      }}
                    >
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            background: "#7c3aed",
                            animation: "bounce 1.2s infinite",
                            animationDelay: `${i * 0.2}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* Quick Options */}
              <div className="px-3 pb-2 flex flex-wrap gap-1.5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                {quickOptions.map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.action}
                      onClick={() => handleQuickOption(opt.action)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs transition-all duration-200 hover:scale-105 mt-2"
                      style={{
                        background: "rgba(124,58,237,0.1)",
                        border: "1px solid rgba(124,58,237,0.25)",
                        color: "#c4b5fd",
                        fontWeight: 500,
                      }}
                    >
                      <Icon size={11} />
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              {/* Input */}
              <div className="px-3 pb-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage(input);
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    className="flex-1 px-3 py-2.5 rounded-xl outline-none text-sm"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#e8e8f0",
                      fontSize: "0.82rem",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:opacity-90 disabled:opacity-30"
                    style={{
                      background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                      color: "white",
                    }}
                  >
                    <Send size={14} />
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Chatbot;