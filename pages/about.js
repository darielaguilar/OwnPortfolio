import { NavBar } from "./components/NavBar";
import styles from "../styles/Home.module.css"
const About = () => (<>
    
    <NavBar></NavBar>
    <div className={styles.description}>
        <h1>Resume</h1>
        <hr></hr>
        <p className={styles.description}>My name is Dariel Aguilar I have 25 years old, right now I am living in Cuba, that is my current location</p>
        <p className={styles.description}>Experience in network administration with Citrix/Ardence, web, desktop and android developer, 3rd year undergraduate course in computer education, course modality for workers once a week. I have worked with REST APIs, React and Angular frontend frameworks, Django,NestJS,NextJS and Laravel backend frameworks. I have deployed with Azure,Heroku,Vercel,Cloud Clever and cPanel. On the desktop part I have worked using Python, C#, C++ on Android using the Xamarin framework with C# and React Native using typescript</p>
        
        <p></p>
    
    </div>
    </>
)

export default About;

