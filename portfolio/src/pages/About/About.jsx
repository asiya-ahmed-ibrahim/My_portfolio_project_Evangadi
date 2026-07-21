import { motion } from "framer-motion";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about}>
      <h1 className={styles.heading}>About Me</h1>

      <p className={styles.paragraph}>
        Hi, I'm a Full-Stack web developer with a creative flair and a penchant
        for turning lines of code into captivating online experiences. My
        journey in the digital realm began years ago, and I've since honed my
        skills in front-end and back-end development.
      </p>
      <p className={styles.paragraph}>
        Currently I'm a student at Shaggar Institute of Technology, pursuing my
        bachelor's degree in AI and IT. I'm highly motivated in my academics and
        I engage well in new opportunities. I use a logical approach when it
        comes to problem solving.
      </p>

      <h2 className={styles.subheading}>My Journey</h2>
      <div className={styles.timeline}>
        <motion.div
          className={styles.timelineItem}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Shaggar Institute of Technology</h3>
          <p>Started BSc in AI and IT</p>
        </motion.div>

        <motion.div
          className={styles.timelineItem}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3>Evangadi Tech</h3>
          <p>Full-stack web development course</p>
        </motion.div>

        <motion.div
          className={styles.timelineItem}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Evangadi AI Forum</h3>
          <p>Built as frontend developer on a team project</p>
        </motion.div>

        <motion.div
          className={styles.timelineItem}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Freelance Work</h3>
          <p>Building commercial client websites</p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;