import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export function Nav(){
    return (
        <nav>
            <ul className={styles.navi}>
                <li>
                    <Link to="/"><p>Home</p></Link> {/* home */}
                </li>
                <li>
                    <Link to="/project"><p>Projects</p></Link> {/* project */}
                </li>
                <li>
                    <Link to="/about"><p>About Me</p></Link> {/* aboutMe */}
                </li>
                <li>
                    <Link to="/contact"><p>Contact Me</p></Link> {/* contact */}
                </li>
            </ul>
        </nav>
    )
}