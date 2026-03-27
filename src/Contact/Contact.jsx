import email from '../assets/icons/email.svg'
import linkedIn from '../assets/icons/linkedin.svg'
import github from '../assets/icons/githubIcon.svg'
import styles from './Contact.module.css'


export function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={`${styles.contactWrapper} ${styles.fadeIn}`}>
        <h2 className={styles.contactTitle}>Get in Touch</h2>

        <p className={styles.contactIntro}>
          I'm always open to new opportunities, collaborations, and conversations.
          Feel free to reach out through email or any of the links below.
        </p>

        <ul className={styles.contactList}>
          <li>
            <a href="mailto:carlosdguezwcs@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={email} alt="email icon" className={styles.contactIcon}/>
              Email
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/carlosdominguezdev/" target="_blank" rel="noopener noreferrer">
              <img src={linkedIn} alt="LinkedIn icon" className={styles.contactIcon}/>
              LinkedIn
            </a>
          </li>

          <li>
            <a href="https://github.com/carlDguez19" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub Icon" className={styles.contactIcon}/>
              GitHub
            </a>
          </li>

        </ul>
      </div>
    </section>
  );
}

