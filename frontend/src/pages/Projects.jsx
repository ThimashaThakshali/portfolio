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
  award
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
          award="Finalist – IEEE Sri Lanka Section FYP Arena 2025 (Undergraduate Project Competition)"
          description="A real-time wearable safety system that automatically detects fear-related emotional states using multimodal physiological and speech signals captured from a smartwatch, enabling hands-free emergency alerting."
          tech={[
            "Wear OS",
            "Kotlin",
            "TensorFlow Lite",
            "HRV & MFCC",
            "Signal Processing",
            "On-device ML"
          ]}
          details={
            <>
              <h4>Project Overview</h4>
              <p>
                Star Sentinel is a real-time wearable safety application designed
                to automatically detect fear-related emotional states using
                physiological and speech-based signals captured from a smartwatch.
                The system enhances personal safety by identifying distress
                situations and triggering emergency alerts without requiring
                manual user interaction.
              </p>

              <h4>Multimodal Detection Approach</h4>
              <p>
                The application continuously monitors heart rate signals and short
                audio segments captured from the smartwatch microphone. Heart rate
                variability features (Mean RR, RMSSD, SDNN) are fused with
                speech-related audio features such as MFCCs, pitch, and intensity
                variance to improve robustness in real-world environments.
              </p>

              <h4>Machine Learning & Deployment</h4>
              <p>
                A lightweight neural network was trained offline using Python,
                TensorFlow, and Keras, then converted to TensorFlow Lite for
                deployment. All inference runs entirely on the smartwatch,
                ensuring low latency, privacy preservation, and offline
                operation without server dependency.
              </p>

              <h4>System Reliability</h4>
              <p>
                To reduce false positives, rule-based detectors such as sudden
                heart rate spikes and scream-like audio patterns are combined
                with machine learning predictions. Temporal smoothing using
                majority voting across recent predictions ensures stable and
                reliable fear detection.
              </p>

              <h4>Alerts & Evaluation</h4>
              <p>
                Upon confirmed fear detection, the system automatically sends
                emergency alerts and shares real-time location with predefined
                contacts. The system was evaluated through controlled
                human-subject testing using fear-inducing stimuli, demonstrating
                accurate detection with low inference latency on wearable
                hardware.
              </p>

              <h4>Key Highlights</h4>
              <ul>
                <li>Fully on-device fear detection with no backend dependency</li>
                <li>Multimodal fusion of physiological and speech features</li>
                <li>Low-latency inference suitable for wearable devices</li>
                <li>Privacy-preserving, offline-first design</li>
                <li>Automatic real-time emergency alerting</li>
              </ul>
            </>
          }
        />

        {/* CONCURRENT BANKING SYSTEM */}
        <ProjectCard
          title="Concurrent Banking System"
          year="2025"
          description="A Java-based concurrent banking system supporting secure money transfers with transaction consistency, thread safety, and deadlock prevention."
          tech={[
            "Java",
            "Concurrency",
            "OOP",
            "IntelliJ IDEA"
          ]}
        />

        {/* SMART PRIVACY */}
        <ProjectCard
          title="Smart Privacy – Encrypted Health Data System"
          year="2025"
          description="A privacy-focused health data platform that anonymizes users using system-generated IDs and encrypts sensitive personal data, enabling secure storage and controlled access."
          tech={[
            "Python",
            "Flask",
            "MongoDB",
            "Encryption",
            "Role-Based Access Control"
          ]}
        />

        {/* DEEPSENSE */}
        <ProjectCard
          title="Deepsense – Suicidal Text Detection Application"
          year="2023"
          description="An Android application that detects suicidal ideation from text using supervised learning models, integrating a Kotlin-based mobile frontend with Python-based model inference."
          tech={[
            "Kotlin",
            "Python",
            "Machine Learning",
            "SQL",
            "Android Studio"
          ]}
        />

        {/* SERENETREK LK */}
        <ProjectCard
          title="SereneTrek LK – Offline-First Sustainable Tourism Platform"
          year="2025"
          description="An offline-first digital tourism platform connecting travelers with verified rural hosts, featuring offline GPS navigation, sustainability scoring, and SMS-based SOS alerts. MVP developed within 18 hours."
          tech={[
            "React Native",
            "Mapbox",
            "Offline GPS",
            "SMS-based SOS",
            "Sustainability Scoring"
          ]}
        />

        {/* EMBIGGEN VIEWER */}
        <ProjectCard
          title="Embiggen Viewer – Satellite Imagery Exploration Tool"
          year="2024"
          description="A lightweight web application for exploring high-resolution Earth and space imagery using public satellite data, designed to educate users on different spectral observation modes."
          tech={[
            "HTML",
            "CSS",
            "JavaScript",
            "Leaflet.js",
            "NASA GIBS"
          ]}
        />

      </div>
    </section>
  );
}

export default Projects;
