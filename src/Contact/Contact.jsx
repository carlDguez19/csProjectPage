import email from '../assets/icons/email.svg'
import linkedIn from '../assets/icons/linkedin.svg'
import github from '../assets/icons/githubIcon.svg'
import styles from './Contact.module.css'


export function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactWrapper}>
        <h2 className={styles.contactTitle}>Get in Touch</h2>

        <p className="contactIntro">
          The best way to reach me is through email or any of the links below.
        </p>

        <ul className="contactList">
          <li>
            <a href="mailto:carlosdguezwcs@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={email} alt="email icon" />
              Email
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/carlosdominguezdev/" target="_blank" rel="noopener noreferrer">
              <img src={linkedIn} alt="LinkedIn icon" />
              LinkedIn
            </a>
          </li>

          <li>
            <a href="https://github.com/carlDguez19" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub Icon" />
              GitHub
            </a>
          </li>

        </ul>
      </div>
    </section>
  );
}

