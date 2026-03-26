import { ProjectCard } from "./ProjectCard"
import demoIcon from '../assets/icons/demoIcon.svg'
import githubIcon from '../assets/icons/githubIcon.svg'
import battleshipTh from '../assets/thumbnails/battleshipTh.png'
import reactShopTh from '../assets/thumbnails/reactShopTh.png'
import sqlzooTh from '../assets/thumbnails/sqlzooTh.png'
import pokeMemGame from '../assets/thumbnails/pokeMemGameTh.png'
import cvappTh from '../assets/thumbnails/cvappTh.png'
import climateApp from '../assets/thumbnails/climateAppTh.png'
import todoListTh from '../assets/thumbnails/todolistTh.png'
import libraryTh from '../assets/thumbnails/libraryTh.png'
import calculatorTh from '../assets/thumbnails/calculatorTh.png'
import etchTh from '../assets/thumbnails/etchTh.png'
import styles from './Project.module.css'

export function Project(){
    const battleshipDesc = "A fully interactive Batleship game built with modular css," +
    " responsive layout techniques, and a clean game-state logic. Designed for clarity," +
    " smooth gameplay, and a polished user experience";

    const reactShoppingDesc = "A responsive React application featuring dynamic product listings," +
    " real-time cart updates, and a clean, intuitive sshopping experiece. Users can browse items," +
    " adjust quantities, and view a live cart summary powered by component-based management." +
    " Built with modular architecture and reusable UI components for maintainability and scalability."

    const sqlzooDesc = "A structured collection of SQL solutions built while completing the SQLZoo" +
    " exercises, rewritten into clean, well-organized .sql files. Each section includes questions," +
    " and formatted queries to demonstrate understanding of joins, subqueries, grouping, and relational logic." +
    " This repo serves as both a mastery checkpoint and a reusable referance for future SQl work."

    return (
        <section className= {styles.projectsSec}>
            <div className={styles.projectsSection}>
                <h2 className={styles.projectHeader}>Featured Projects</h2>
                {/* each card will contain the following: title, description, stack, thnail, thAlt, demoLink, githubLink, demoIcon, githubIcon */}
                <ProjectCard title="Battleship" description={battleshipDesc} stack="Javascript, CSS, HTML, Netlify" thnail={battleshipTh} thAlt="Battleship Thumbnail" demoLink="https://battleship-carlos.netlify.app/" githubLink="https://github.com/carlDguez19/odinBattleship2" demoIcon={demoIcon} githubIcon={githubIcon} githubAlt="Github link" demoAlt="Demo link"/>
                <ProjectCard title="React Shopping Cart" description={reactShoppingDesc} stack="React, Javascript, CSS Modules, React Router, Netlify" thnail={reactShopTh} thAlt="React Shop Thumbnail" demoLink="https://carlosreactshp.netlify.app" githubLink="https://github.com/carlDguez19/odinShoppingCart" demoIcon={demoIcon} githubIcon={githubIcon} githubAlt="Github link" demoAlt="Demo link"/>
                <ProjectCard title="SQLZoo Mastery Repository" description={sqlzooDesc} stack="SQL, PostgreSQL(syntax-compatible), SQLZoo problem sets" thnail={sqlzooTh} thAlt="sqlzoo repo Thumbnail" githubLink="https://github.com/carlDguez19/odinSqlPractice" githubIcon={githubIcon} githubAlt="Github link"/>
                <h2 className={styles.projectHeader}>Side Projects</h2>
                <div className={styles.sideProjGrid}>
                    <ProjectCard small title="Memory Game" stack="React, Javascript, CSS, Vite, PokeAPI" thnail={pokeMemGame} thAlt="Pokemon Memory Game Thumbnail" demoLink="https://memorygamecarlos.netlify.app/" githubLink="https://github.com/carlDguez19/odinMemoryGame" demoIcon={demoIcon} githubIcon={githubIcon} githubAlt="Github link" demoAlt="Demo link"/>
                    <ProjectCard small title="CV App" stack="React, Javascript, CSS, Vite" thnail={cvappTh} thAlt="cvApp Thumbnail" demoLink="https://cvapp-carlos.netlify.app/" githubLink="https://github.com/carlDguez19/odinCvapp" demoIcon={demoIcon} githubIcon={githubIcon} githubAlt="Github link" demoAlt="Demo link"/>
                    <ProjectCard small title="Climate App" stack="Javascript, Webpack, CSS, HTML5, WeatherAPI" thnail={climateApp} thAlt="Climate app Thumbnail" demoLink="https://climateapp-carlos.netlify.app/" githubLink="https://github.com/carlDguez19/odinClimate" demoIcon={demoIcon} githubIcon={githubIcon} githubAlt="Github link" demoAlt="Demo link"/>
                    <ProjectCard small title="To-Do List" stack="Javascript, CSS, HTML5, Webpack, date-fns, localStorage" thnail={todoListTh} thAlt="To Do List Thumbnail" demoLink="https://to-dolist-carlos.netlify.app/" githubLink="https://github.com/carlDguez19/odinToDoList" demoIcon={demoIcon} githubIcon={githubIcon} githubAlt="Github link" demoAlt="Demo link"/>
                    <ProjectCard small title="Library" stack="Javascript, CSS, HTML" thnail={libraryTh} thAlt="Library app Thumbnail" demoLink="https://library-carlos.netlify.app/" githubLink="https://github.com/carlDguez19/odinLibrary" demoIcon={demoIcon} githubIcon={githubIcon} githubAlt="Github link" demoAlt="Demo link"/>
                    <ProjectCard small title="Calculator App" stack="Javascript, CSS, HTML" thnail={calculatorTh} thAlt="Calculator app Thumbnail" demoLink="https://calculator-carlos.netlify.app/" githubLink="https://github.com/carlDguez19/odinCalculator" demoIcon={demoIcon} githubIcon={githubIcon} githubAlt="Github link" demoAlt="Demo link"/>
                    <ProjectCard small title="Etch-A-Sketch" stack="Javascript, CSS, HTML" thnail={etchTh} thAlt="Etch-a-Sketch Thumbnail" demoLink="https://etchasketch-carlos.netlify.app/" githubLink="https://github.com/carlDguez19/odinEtchASketch" demoIcon={demoIcon} githubIcon={githubIcon} githubAlt="Github link" demoAlt="Demo link"/>
                </div>
            
            </div>

        </section>
    )
}