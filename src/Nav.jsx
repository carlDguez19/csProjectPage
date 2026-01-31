import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export function Nav(){
    <nav>
        <ul className={styles.navi}>
            <li>
                <Link to="/"><h2>Home</h2></Link> {/* home */}
            </li>
            <li>
                <Link to="/project"><h2>Projects</h2></Link> {/* project */}
            </li>
            <li>
                <Link to="/about"><h2>About Me</h2></Link> {/* aboutMe */}
            </li>
            <li>
                <Link to="/contact"><h2>Contact Me</h2></Link> {/* contact */}
            </li>
        </ul>
    </nav>
}