import { motion } from "framer-motion";
import "./Achievements.css";

function Section({ title, items }) {
  return (
    <motion.div
      className="achievement-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function Achievements() {
  return (
    <section className="achievements">
      <h2>Achievements & Certifications</h2>

      {/* AWARDS & RECOGNITIONS */}
      <Section
        title="Awards & Recognitions"
        items={[
          "IIT Excellence Award 2025 – Undergraduate Award for Outstanding Performance at Competitions",
          "IIT Excellence Award 2025 – Undergraduate Merit Award for Performance at Competitions",
          "IEEE Sri Lanka Section FYP Arena 2025 – Finalist (Undergraduate Project Competition)"
        ]}
      />

      {/* COMPETITIONS & HACKATHONS */}
      <Section
        title="Competitions & Hackathons"
        items={[
          "Mini Hacksphere’25 – 1st Place",
          "Coderally 6.0 (Advanced Tier, 2025) – 2nd Place",
          "Problem Solving International Hackathon (2025) – 2nd Place",
          "CODEDROP (2025) – 3rd Place",
          "PrologueX (2023) – 3rd Place",
          "Algothon (2025) – 5th Place",
          "AdaptIQ (2025) – Finalist",
          "SLIIT Xtreme 4.0 (2025) – Finalist",
          "Artemia (2025) – Finalist",
          "Haxpedition – Mini Hackathon (2024) – 1st Place",
          "IEEEXtreme 18.0 (2024) – 5th in IIT, 52nd Nationally, 674th Globally",
          "IEEEXtreme 17.0 (2023) – 9th Place in IIT"
        ]}
      />

      {/* CERTIFICATIONS */}
      <Section
        title="Certifications"
        items={[
          "Software Engineer Intern – HackerRank",
          "Problem Solving (Basic) – HackerRank",
          "JavaScript (Basic) – HackerRank",
          "React (Basic) – HackerRank"
        ]}
      />

      {/* LEADERSHIP */}
      <Section
        title="Leadership"
        items={[
          "Team Leader – AdaptIQ (Rising Tech Dragons, 2025)",
          "Team Leader – Algothon (Rising Tech Dragons, 2025)",
          "Team Leader – Operational Research and Optimization Coursework (2025)",
          "Group Leader – Web Design and Development Coursework (2022)",
          "Senior Prefect (2018 – 2019)"
        ]}
      />
    </section>
  );``
}

export default Achievements;
