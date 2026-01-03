import { motion } from "framer-motion";
import "./Experience.css";

function ExperienceItem({ role, company, period, points }) {
  return (
    <motion.div
      className="experience-item"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="experience-dot" />
      <div className="experience-content">
        <h3>{role}</h3>
        <span className="company">{company}</span>
        <span className="period">{period}</span>
        <ul>
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function Experience() {
  return (
    <section className="experience">
      <h2>Work Experience</h2>

      <div className="experience-timeline">

        <ExperienceItem
          role="Associate Software Engineer"
          company=""
          period="11/2025 – Present"
          points={[
            "Developing and enhancing enterprise-level applications across two parallel projects",
            "Working on one project using the Agile Labs Axpert development platform",
            "Contributing to a second project focused on UI/UX design using Figma and full-stack UI development with HTML and CSS",
            "Implementing new features, handling integrations, and supporting testing activities across both projects"
          ]}
        />

        <ExperienceItem
          role="Software Engineer Trainee"
          company=""
          period="04/2024 – 10/2024"
          points={[
            "Collaborated directly with customers to gather and analyze software requirements",
            "Developed software solutions using the Agile Labs Developer Platform",
            "Designed and implemented user interfaces for enterprise applications",
            "Mentored new team members on debugging techniques and platform features",
            "Led user training sessions and facilitated system testing to ensure smooth deployment"
          ]}
        />

        <ExperienceItem
          role="Software Engineer Intern"
          company=""
          period="09/2023 – 03/2024"
          points={[
            "Optimized ERP system query performance using PostgreSQL",
            "Assisted in feature development and ensured seamless lifecycle integration",
            "Conducted system testing and supported user training while meeting delivery deadlines",
            "Contributed to UI development and testing activities"
          ]}
        />

      </div>
    </section>
  );
}

export default Experience;
