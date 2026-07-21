import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";

function ProjectCard({ title, description, image, tags, link }) {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <a href={link} className={styles.link}>
          View Project →
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
