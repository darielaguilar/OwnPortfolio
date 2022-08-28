import { NavBar } from "../components/NavBar";
import { ImageProject } from '../components/ImageProject';
import styles from "../styles/Home.module.css";
import * as data from "../data/project.json"
const Projects = () => (<>
    
    <NavBar></NavBar>
    <div className={styles.description}>
        <h1>Projects</h1>
        
    </div>
    <div className={styles.projectFrame}>
        <a href="https://habana-hard-dance-next-js.vercel.app/" target="_blank" rel="noreferrer"><ImageProject  src='/hhdlogo.jpg' height={400} width={400}></ImageProject></a>
        <div className={styles.textContainer}>
            <p>{data.habana.description}</p>
        </div>
    </div>
    <div className={styles.projectFrame}>
    <a href="https://nestjs-e-commerce.herokuapp.com/" target="_blank" rel="noreferrer"><ImageProject  src='/e-commerce.png' height={400} width={400}></ImageProject></a>
        <div className={styles.textContainer}>
            <p>{data.shop.description}</p>
        </div>
    </div>
    </>
)

export default Projects;

