import styles from './ProjectCard.module.css'

export function ProjectCard({title, description, stack, thnail, thAlt, demoLink, githubLink, demoIcon, githubIcon, githubAlt, demoAlt}){
    return (
        <div className={styles.card}>
            <div className={styles.thContainer}>
                <img src={thnail} alt={thAlt} />
            </div>
            <div className={styles.projDesc}>
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>{stack}</h4>
                <div className={styles.demoGitIcons}>
                    <a href={demoLink} target="_blank" rel="noopener noreferrer"><img src={demoIcon} alt={demoAlt} /></a>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt={githubAlt} /></a>
                </div>
            </div>
        </div>
    )
}