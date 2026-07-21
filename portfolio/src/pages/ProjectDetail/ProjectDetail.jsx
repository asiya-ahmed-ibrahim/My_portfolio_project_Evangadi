import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../../data/projects";
import styles from "./ProjectDetail.module.css";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p className={styles.notFound}>Project not found.</p>;
  }

  return (
    <motion.section
      className={styles.detail}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/#projects" className={styles.back}>
        ← Back to Projects
      </Link>

      <img src={project.image} alt={project.title} className={styles.banner} />
      <h1 className={styles.title}>{project.title}</h1>

      <div className={styles.section}>
        <h2>Problem</h2>
        <p>{project.problem}</p>
      </div>

      <div className={styles.section}>
        <h2>My Role</h2>
        <p>{project.role}</p>
      </div>

      <div className={styles.section}>
        <h2>Solution</h2>
        <p>{project.solution}</p>
      </div>

      <div className={styles.section}>
        <h2>Challenges</h2>
        <p>{project.challenges}</p>
      </div>

      <div className={styles.section}>
        <h2>Tech Stack</h2>
        <div className={styles.tags}>
          {project.techStack.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.links}>
        <a href={project.liveLink} className={styles.primaryBtn}>
          Live Demo
        </a>
        <a href={project.githubLink} className={styles.secondaryBtn}>
          GitHub
        </a>
      </div>
    </motion.section>
  );
}

export default ProjectDetail;
