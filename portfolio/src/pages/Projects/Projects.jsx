import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../data/projects";

import styles from "./Projects.module.css";

const categories = ["All", "Web", "AI", "Full-Stack", "Freelance"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.heading}>Projects</h2>

      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div className={styles.grid} layout>
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className={styles.cardLink}
          >
            <ProjectCard {...project} />
          </Link>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
