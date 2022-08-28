import { NavBar } from "./components/NavBar";
import styles from "../styles/Home.module.css"
const About = () => (<>
    
    <NavBar></NavBar>
    <div className={styles.description}>
        <h1>Resume</h1>
        <hr></hr>
        <p className={styles.description}>Experiencia en administracion de redes con Citrix/Ardence, desarrollador web,desktop y android, curso 3er año de licenciatura en educacion informatica modalidad curso por trabajadores una vez a la semana. He trabajado con REST APIs, frameworks frontend React y Angular, framework backend Django,NestJS,NextJS y Laravel. He hecho deploy con Azure,Heroku,Vercel,Cloud Clever y cPanel. En la parte desktop he trabajado usando Python,C#,C++ en Android usando el framework Xamarin con C# y React Native usando typescript</p>
    </div>
    </>
)

export default About;

