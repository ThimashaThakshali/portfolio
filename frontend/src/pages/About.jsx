import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="about-left">
          <h2>About Me</h2>
          <p>
            I am a Software Engineering undergraduate with a strong interest in
            building reliable, scalable, and user-focused software solutions.
            I enjoy problem-solving, competitive programming, and collaborating
            with teams to transform ideas into working systems.
          </p>

          <p>
            My academic background and industry training have provided me with
            hands-on experience in backend development, frontend engineering,
            and system integration.
          </p>
        </div>

        <div className="about-right">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>BEng (Hons) Software Engineering</strong><br />
              Informatics Institute of Technology (Affiliated with University of Westminster)
            </li>
          </ul>

          <h3>Core Strengths</h3>
          <ul>
            <li>Problem Solving & Analytical Thinking</li>
            <li>Full-Stack Development Fundamentals</li>
            <li>Team Collaboration & Communication</li>
            <li>Competitive Programming Mindset</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
