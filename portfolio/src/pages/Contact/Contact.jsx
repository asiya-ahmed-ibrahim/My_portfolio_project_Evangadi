import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_jbwmeu5",
        "template_z3vpzze",
        form.current,
        "GYyNpVZ4Erm7tEokp",
      )
      .then(() => {
        setStatus("sent");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.heading}>Get In Touch</h2>
      <p className={styles.subheading}>
        Have a project in mind or just want to say hi? Send me a message.
      </p>

      <div className={styles.grid}>
        <form ref={form} onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className={styles.textarea}
          />

          <motion.button
            type="submit"
            className={styles.submitBtn}
            whileHover={{ scale: 1.03 }}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>

          {status === "sent" && (
            <p className={styles.success}>Message sent — thank you!</p>
          )}
          {status === "error" && (
            <p className={styles.errorMsg}>Something went wrong. Try again.</p>
          )}
        </form>

        <div className={styles.links}>
          <a href="mailto:assiyaahmed75@gmail.com" className={styles.linkItem}>
            Email
          </a>
          <a href="https://github.com/yourusername" className={styles.linkItem}>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className={styles.linkItem}
          >
            LinkedIn
          </a>
          <a href="/resume.pdf" download className={styles.linkItem}>
            Download Resume
          </a>
          <p className={styles.location}>Addis Ababa, Ethiopia</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
