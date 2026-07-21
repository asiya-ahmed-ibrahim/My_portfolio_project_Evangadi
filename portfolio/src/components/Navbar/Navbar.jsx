import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Asiya</span>
      <div className={styles.links}>
        <a href="#home" className={styles.link}>
          Home
        </a>
        <a href="#about" className={styles.link}>
          About
        </a>
        <a href="#projects" className={styles.link}>
          Projects
        </a>
        <a href="#contact" className={styles.link}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
