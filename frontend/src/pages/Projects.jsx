import { motion } from "framer-motion";
import { useState } from "react";
import "./Projects.css";

function ProjectCard({
  title,
  year,
  description,
  tech,
  featured,
  details,
  award,
  link
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`project-card ${featured ? "featured" : ""}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{title}</h3>
      <span className="project-year">{year}</span>

      {award && <span className="project-award">{award}</span>}

      <p>{description}</p>

      <div className="tech-stack">
        {tech.map((t, index) => (
          <span key={index}>{t}</span>
        ))}
      </div>

      <a
        className="github-link"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub
      </a>

      {details && (
        <button
          className="details-btn"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "Hide Details" : "View Details"}
        </button>
      )}

      {open && (
        <motion.div
          className="project-details"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {details}
        </motion.div>
      )}
    </motion.div>
  );
}

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">

        {/* STAR SENTINEL */}
        <ProjectCard
          title="Star Sentinel – Real-Time Wearable Multimodal Fear Detection System"
          year="2025"
          featured
          award="Finalist – IEEE Sri Lanka Section FYP Arena 2025"
          description="A real-time wearable safety system that automatically detects fear-related emotional states using multimodal physiological and speech signals captured from a smartwatch."
          tech={[
            "Wear OS",
            "Kotlin",
            "TensorFlow Lite",
            "HRV & MFCC",
            "Signal Processing",
            "On-device ML"
          ]}
          link="https://github.com/ThimashaThakshali/Star_Sentinel"
          details={
            <>
              <h4>Project Overview</h4>
              <p>
                Star Sentinel automatically detects fear-related emotional states
                using smartwatch sensors, enhancing personal safety with automated
                emergency alerts.
              </p>
              <h4>Multimodal Detection</h4>
              <p>
                Heart rate variability (Mean RR, RMSSD, SDNN) is fused with audio
                features (MFCCs, pitch, intensity) to improve real-world robustness.
              </p>
              <h4>ML & Deployment</h4>
              <p>
                A lightweight neural network was trained with Python and TensorFlow,
                converted to TensorFlow Lite, and deployed on Wear OS for on-device
                inference with minimal latency and offline operation.
              </p>
              <h4>System Reliability</h4>
              <p>
                Rule-based detectors and temporal smoothing reduce false positives
                before triggering alerts.
              </p>
              <h4>Alerts & Evaluation</h4>
              <p>
                On fear detection, emergency alerts with live location are sent to
                predefined contacts. Controlled testing validated accuracy and low
                latency.
              </p>
              <h4>Highlights</h4>
              <ul>
                <li>Fully on-device detection, no servers required</li>
                <li>Multimodal physiological and speech analysis</li>
                <li>Privacy-preserving offline design</li>
                <li>Automatic emergency alerting</li>
              </ul>
            </>
          }
        />

        {/* SMART PRIVACY */}
        <ProjectCard
          title="Smart Privacy – Encrypted Health Data System"
          year="2025"
          description="A privacy-focused health data platform that anonymizes users using system IDs and encrypts sensitive data, enabling secure storage and controlled access."
          tech={[
            "Python",
            "Flask",
            "MongoDB",
            "Encryption",
            "Role-Based Access"
          ]}
          link="https://github.com/ThimashaThakshali/smart_privacy_project"
        />

        {/* Deepsense */}
        <ProjectCard
          title="Deepsense – Suicidal Text Detection Application"
          year="2023"
          description="An Android application that detects suicidal ideation from text using supervised learning models."
          tech={[
            "Kotlin",
            "Python",
            "Machine Learning",
            "SQL",
            "Android Studio"
          ]}
          link="https://github.com/ThimashaThakshali/DeepSense"
        />

        {/* SereneTrek LK */}
        <ProjectCard
          title="SereneTrek LK – Offline-First Sustainable Tourism Platform"
          year="2025"
          description="An offline-first tourism platform connecting travelers with rural hosts, featuring offline GPS navigation, sustainability scoring, and SMS-based SOS alerts."
          tech={[
            "React Native",
            "Mapbox",
            "Offline GPS",
            "SMS SOS",
            "Marketplace"
          ]}
          link="https://github.com/ThimashaThakshali/sereneTrek"
        />

        {/* Embiggen Viewer */}
        <ProjectCard
          title="Embiggen Viewer – Satellite Imagery Exploration Tool"
          year="2024"
          description="A lightweight web app visualizing high-resolution Earth and space imagery using public satellite data."
          tech={[
            "HTML",
            "CSS",
            "JavaScript",
            "Leaflet.js",
            "NASA GIBS"
          ]}
          link="https://github.com/ThimashaThakshali/embiggen-viewer"
        />

      </div>
    </section>
  );
}

export default Projects;
