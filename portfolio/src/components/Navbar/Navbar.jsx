import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Asiya</span>
      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <Link to="/projects" className={styles.link}>
          Projects
        </Link>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
