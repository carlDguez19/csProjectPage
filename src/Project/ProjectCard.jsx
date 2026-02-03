export function ProjectCard({title, description, stack, thnail, thAlt, demoLink, githubLink, demoIcon, gitIcon}){
    return (
        <div className="card">
            <div className="thContainer">
                <img src={thnail} alt={thAlt} />
            </div>
            <div className="projDesc">
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>{stack}</h4>
                <div className="demoGitIcons">
                    <a href={demoLink} target="_blank" rel="noopener noreferrer"><img src={demoIcon} alt="Demo" /></a>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer"><img src={gitIcon} alt="Github" /></a>
                </div>
            </div>
        </div>
    )
}