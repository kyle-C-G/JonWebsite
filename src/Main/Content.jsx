import styles from "./content.module.css";
import Dribble from "../Logos/Dribble";
import Instagram from "../Logos/Instagram";
import Facebook from "../Logos/Facebook";
import Twitter from "../Logos/Twitter";
import LinkedIn from "../Logos/LinkedIn";
import JonUX from "../Logos/JonUX";

function Content() {

  return (
    <div>
      <div className={styles.logoContainer}>
        <JonUX />
      </div>
      <div className={styles.svgBackground}>
        <div className={styles.headings}>
          <h1>UX & UI Design</h1>
          <h2>Hi I'm Jon Capistrano</h2>
        </div>
        <div className={styles.text}>
          <p>
            Do you need a digital product service designed, whether that'd be an
            app or a website for your business? Well you've come to the right
            place! Here at JonUX Creative, we offer UX & UI design services for
            businesses and collaborate with web developers to help their digital
            product materialise while offering the design portion of the
            development process. We also offer addional design services such as
            Branding, Digital illustraon for Markeng use and Print design for
            your business.
          </p>
          <br />
        </div>
        <div className={styles.logos}>
          <Facebook />
          <Instagram />
          <LinkedIn />
          <Twitter />
        </div>
      </div>
    </div>
  );
}

export default Content;
