import styles from './About.module.css'

export function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={`${styles.aboutWrapper} ${styles.fadeIn}`}>
        <h1 className={styles.aboutHeader}>About Me</h1>
        {/* WHO I AM */}
        <div className={styles.aboutBlock}>
          <h2 className={styles.aboutTitle}>Who I Am</h2>
          <p className={styles.aboutText}>
            I'm a software developer with a strong foundation in computer science and a
            focus on building clean, intuitive, and responsive user interfaces. I hold a
            B.S. in Computer Science from the University of Texas at El Paso, and I'm
            currently expanding my skill set into backend development to grow into a
            full-stack engineer.
          </p>
        </div>

        {/* MY PATH INTO DEVELOPMENT */}
        <div className={styles.aboutBlock}>
          <h2 className={styles.aboutTitle}>My Path Into Development</h2>
          <p className={styles.aboutText}>
            In 2022, I experienced a major health event that required me to rebuild many
            of my technical skills from the ground up. I turned to The Odin Project as a
            structured, project-driven way to relearn, strengthen, and expand my
            abilities. Working through the curriculum taught me consistency,
            problem-solving, and the value of writing code that is both expressive and
            maintainable. That journey shaped my discipline and the way I approach
            learning.
          </p>
        </div>

        {/* RESILIENCE AND GROWTH */}
        <div className={styles.aboutBlock}>
          <h2 className={styles.aboutTitle}>Resilience and Growth</h2>
          <p className={styles.aboutText}>
            Rebuilding my skills gave me a deeper appreciation for clarity, patience, and
            intentional practice. It strengthened my focus and made me a more thoughtful,
            detail-oriented developer — someone who values steady progress and clean,
            reliable solutions.
          </p>
        </div>

        {/* HOW I WORK */}
        <div className={styles.aboutBlock}>
          <h2 className={styles.aboutTitle}>How I Work</h2>
          <p className={styles.aboutText}>
            I care about clarity, structure, and thoughtful design. I enjoy breaking
            problems down into modular pieces, building interfaces that feel consistent
            and intuitive, and writing code that is easy to understand and maintain.
            Whether I'm working on a UI, a component system, or a small feature, I aim
            for solutions that balance function, performance, and simplicity.
          </p>
        </div>

        {/* OUTSIDE OF CODE */}
        <div className={styles.aboutBlock}>
          <h2 className={styles.aboutTitle}>Outside of Code</h2>
          <p className={styles.aboutText}>
            I'm someone who values creativity and rhythm in my life. I enjoy
            world-building, stand-up comedy, reading, cooking, and building
            expressive spaces that feel intentional. The gym is a grounding ritual for
            me, and I love the process of collecting meaningful artifacts and designing
            environments that tell a story. These interests shape the way I think about
            design, atmosphere, and the user experience.
          </p>
        </div>
      </div>
    </section>
  );
}

