import { motion } from "framer-motion";
import "./Projects.css";

function ProjectCard({ title, description, tech, link, featured }) {
  return (
    <motion.div
      className={`project-card ${featured ? "featured" : ""}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tech-stack">
        {tech.map((t, index) => (
          <span key={index}>{t}</span>
        ))}
      </div>

      <a href={link} target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </motion.div>
  );
}

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">

        <ProjectCard
          title="Star Sentinel"
          featured
          description="A real-time wearable multimodal fear detection and alert system. The system analyzes heart rate variability and speech features using lightweight machine learning models optimized for wearable devices."
          tech={[
            "Python",
            "Machine Learning",
            "Signal Processing",
            "Flask",
            "Wearable Computing"
          ]}
          link="https://github.com/your-username/star-sentinel"
        />

        <ProjectCard
          title="Emotion Detection from Speech"
          description="A speech-based emotion classification system using extracted audio features and supervised learning models, focusing on fear detection in real-world conditions."
          tech={[
            "Python",
            "Audio Processing",
            "Machine Learning"
          ]}
          link="https://github.com/your-username/emotion-detection-speech"
        />

        <ProjectCard
          title="Portfolio Website"
          description="A responsive personal portfolio built using React with animated UI components and modern routing."
          tech={[
            "React",
            "JavaScript",
            "CSS",
            "Framer Motion"
          ]}
          link="https://github.com/your-username/portfolio"
        />

      </div>
    </section>
  );
}

export default Projects;
