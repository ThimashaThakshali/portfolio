import { motion } from "framer-motion";
import "./Skills.css";

function SkillBar({ name, level }) {
  return (
    <div className="skill">
      <div className="skill-header">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="skills">
      <h2>Technical Skills</h2>

      <div className="skills-grid">

        <div className="skills-category">
          <h3>Programming Languages</h3>
          <SkillBar name="Python" level={85} />
          <SkillBar name="Java" level={75} />
          <SkillBar name="SQL" level={90} />
          <SkillBar name="JavaScript" level={70} />
          <SkillBar name="C# (.NET)" level={30} />
          <SkillBar name="C/C++" level={10} />
        </div>

        <div className="skills-category">
          <h3>Web & Application Technologies</h3>
          <SkillBar name="HTML5" level={80} />
          <SkillBar name="CSS3" level={75} />
          <SkillBar name="ReactJS" level={70} />
          <SkillBar name="Node.js" level={65} />
          <SkillBar name="React Native" level={20} />
        </div>

        <div className="skills-category">
          <h3>Databases</h3>
          <SkillBar name="PostgreSQL" level={90} />
          <SkillBar name="Oracle SQL" level={85} />
        </div>

        <div className="skills-category">
          <h3>Concepts & Tools</h3>
          <SkillBar name="Object-Oriented Programming (OOP)" level={80} />
          <SkillBar name="Git & GitHub" level={80} />
          <SkillBar name="Figma (UI Design)" level={70} />
          <SkillBar name="REST APIs" level={70} />
        </div>

      </div>
    </section>
  );
}

export default Skills;
