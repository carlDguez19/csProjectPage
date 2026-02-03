// import logo images for demo and github here

export function ProjectCard({title, description, stack, thnail, thAlt, demoLink, githubLink}){
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
                    <a href={demoLink}><img src="" alt="" /></a>
                    <a href={githubLink}><img src="" alt="" /></a>
                </div>
            </div>
        </div>
    )
}