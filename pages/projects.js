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
    <footer className={styles.footer}>
        <div >
          <small>Copyright 2022 &copy;</small>
          <p></p>
          <small >darielaguilar2012@gmail.com</small>
        </div>
        <div className={styles.faContainer}>
          <a  href="https://www.facebook.com/DarielAguilar9612/" className="fa  fa-facebook order-3 my-3 "/>
          <a  href="https://www.instagram.com/aguilar.dariel/" className="fa fa-instagram my-3 order-1" target="_blank" rel="noreferrer"/>
          <a  href="https://www.linkedin.com/in/dariel-aguilar-3475a1187/" target="_blank" rel="noreferrer" className=" fa fa-linkedin my-3 order-1"/>
          <a  href="https://github.com/darielaguilar" target="_blank" rel="noreferrer" className="sm:transition ease-in delay-150 duration-300 hover:scale-150 hover:-translate-y-1 fa fa-github my-3 order-1"/>
        </div>
      </footer>
    </>
)

export default Projects;

