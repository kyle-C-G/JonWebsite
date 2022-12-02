import styles from "./content.module.css";
import Dribble from "../Logos/Dribble";
import Instagram from "../Logos/Instagram";
import Facebook from "../Logos/Facebook";
import Twitter from "../Logos/Twitter";
import LinkedIn from "../Logos/LinkedIn";
import JonUX from "../Logos/JonUX";
import Section from "./Section";
import BlueOval from "../assets/OvalBackgrounds/BlueOval.svg"
import PurpleOval from "../assets/OvalBackgrounds/PurpleOval.svg"
import YellowOval from "../assets/OvalBackgrounds/YellowOval.svg"
import Chocolate1 from "../assets/Mockups/Chocolate1.png"
import Chocolate2 from "../assets/Mockups/Chocolate2.png"
import Maynooth1 from "../assets/Mockups/Maynooth1.png"
import Maynooth2 from "../assets/Mockups/Maynooth2.png"
import Daily1 from "../assets/Mockups/Daily1.png"
import Daily2 from "../assets/Mockups/Daily2.png"

function Content() {

  const data = [
    {
      id: 1,
      background: BlueOval,
      mockup_1: Chocolate1,
      mockup_2: Chocolate2,
      title: "Jon's Chocolates",
      text: "An app designed for a small chocolate business that delivers chocolates to people's doors. A mockup project from an online course in Udemy.",
      position: "right",
      below: "button",
      links: []
    },
    {
      id: 2,
      background: PurpleOval,
      mockup_1: Maynooth1,
      mockup_2: Maynooth2,
      title: "Maynooth",
      text: "Maynooth Furniture is a new business selling affordable high-end design furniture made in Ireland. The brief is to build a e-commerce website for people to browse & purchase furniture for home delivery.",
      position: "left",
      below: "button",
      links: []
    },
    {
      id: 3,
      background: YellowOval,
      mockup_1: Daily1,
      mockup_2: Daily2,
      title: "100 #DailyUI Challenge",
      text: "I’ve taken part in the 100 #DailyUI challenge for my social media. Each day I was given a challenge whether to design a Landing Page, or a dashboard, email receipt, onboarding etc. I've designed a Sign up page for Day 1 as an example. Check my social media links below to look for more examples.",
      position: "right",
      below: "social",
      links: []
    }

  ]

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
      <div>
        {data.map((item) => 
        <Section 
          key={item.id}
          background={item.background}
          mockup_1={item.mockup_1}
          mockup_2={item.mockup_2}
          title={item.title}
          text={item.text}
          position={item.position}
          below={item.below}
          links={item.links}
          />)}
      </div>
    </div>
  );
}

export default Content;
