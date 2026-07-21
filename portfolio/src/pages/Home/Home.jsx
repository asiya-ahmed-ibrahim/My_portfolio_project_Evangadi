import { motion } from "framer-motion";
import profileImg from "../../assets/images/asiya.jpg";
import styles from "./Home.module.css";
// import About from "../About/About";

function Home() {
  return (
    <>
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src={profileImg}
          alt="Asiya Ahmed"
          className={styles.profileImg}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className={styles.textContent}>
          <h1 className={styles.headline}>Hi, I'm Asiya Ahmed</h1>
          <p className={styles.tagline}>Full-Stack Developer & AI/IT Student</p>
          <div className={styles.buttons}>
            <motion.button
              className={styles.primaryBtn}
              whileHover={{ scale: 1.05 }}
            >
              My Works
            </motion.button>
            <motion.button
              className={styles.secondaryBtn}
              whileHover={{ scale: 1.05 }}
            >
              Contact Me
            </motion.button>
          </div>
        </div>
      </motion.section>
      {/* <About /> */}
    </>
  );
}

export default Home;
