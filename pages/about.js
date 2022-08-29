import { NavBar } from "../components/NavBar";
import styles from "../styles/Home.module.css"
const About = () => (<>
    
    <NavBar></NavBar>
    <div className={styles.description}>
        <h1>Resume</h1>
        <hr></hr>
        <p className={styles.descriptionBio}>My name is Dariel Aguilar I have 25 years old, right now I am living in Cuba, that is my current location</p>
        <p className={styles.descriptionBio}>Experience in network administration with Citrix/Ardence, web, desktop and android developer, 3rd year undergraduate course in computer education, course modality for workers once a week. I have worked with REST APIs, React and Angular frontend frameworks, Django,NestJS,NextJS and Laravel backend frameworks. I have deployed with Azure,Heroku,Vercel,Cloud Clever and cPanel. On the desktop part I have worked using Python, C#, C++ on Android using the Xamarin framework with C# and React Native using typescript</p>
        
        <p></p>
    
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
    </div>
    </>
)

export default About;

