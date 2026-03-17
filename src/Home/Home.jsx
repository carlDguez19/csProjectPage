export function Home(){
    return (
        <>
            <section className="heroSection">
                <div className="heroContent">
                    <h1>
                        Software Developer
                    </h1>
                    <p className="heroDesc">
                        I build clean, responsive, and expressive web experiences using modern Javascript, React, and modular UI design.
                        I'm currently expanding into backend development to grow into a full-stack engineer.
                    </p>
                    <h3 className="heroCred">
                        B.S. in Computer Science - University of Texas at El Paso
                    </h3>
                </div>
            </section>
            <section className="introSection">
                <p className="introTxt">
                    I enjoy building interfaces that feel intuitive, consistent, and
                    thoughtfully structured. My approach centers on writing clean, maintainable
                    code, designing with clarity in mind, and breaking problems down into
                    modular, reusable pieces. I enjoy turning ideas into polished experiences
                    that balance function, performance, and simplicity.
                </p>
            </section>
            <section className="techSection">
                <h2 className="techStackTitle"> Tech Stack</h2>

                <ul className="techList">
                    <li>HTML5</li>
                    <li>CSS3 / SCSS</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Git & Github</li>
                    <li>Responsive Design</li>
                    <li>Backend Fundamentals (in progress)</li>
                </ul>
            </section>
        </>
    )
}