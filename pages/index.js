import Layout from './Components/Layout/layout';
import styles from "./main.module.css"
import PrefilledHead from './Components/head';
import Image from 'next/image';

export default function Home() {
  return (<>
    <Layout>
      <PrefilledHead/>
        <div className={styles.mainPage}>
          <div className={styles.mainLogo}>
            <Image 
              src="/Logos/JonUX.svg"
              height={690}
              width={1980}
              alt="JonUX Creative Full Logo"
            />
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <div className={styles.contentNav}>
                <div className={styles.smallLogo}>
                  <Image 
                    src="/Logos/Logo.svg"
                    height={100}
                    width={100}
                    alt="JonUX Creative Logo"
                  />
                </div>
              </div>
              <div className={styles.banner}>
                <Image 
                    src="/banner.png"
                    height={690}
                    width={1980}
                    alt="Picture of Jon in front of a lake."
                  />
              </div>
              <div className={styles.graphicDesign}>
                <h1>Graphic Design</h1>
                <div className={styles.jobs}>
                  <div className={styles.jobSection}>
                    <h2>UX & UI</h2>
                    <div className={styles.verticalLine}></div>
                  </div>
                  <div className={styles.jobSection}>
                    <h2>Marketing & Print</h2>
                    <div className={styles.verticalLine}></div>
                  </div>
                  <div className={styles.jobSection}>
                    <h2>Branding</h2>
                  </div>
                </div>
              </div>
              <div className={styles.info}>
                <p className={styles.infoText}>
                  Do you need a well-made design for a website or an app,
                  complemented with a great customer experience? As UX & UI
                  front-end designers, we understand how important it is for your
                  business to have a website, so we collaborate with web developers
                  to materialise your digital product/service into a reality. We
                  also offer additional services for your business such as branding
                  and print designs and other marketing materials.
                </p>
              </div>
              <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <div className={styles.portfolioImages}>
                  <div className={styles.imageContainer}>
                    <a href="Portfolio/Page/PearlEats/">
                      <Image 
                        src="/portfolio1.png"
                        height={500}
                        width={500}
                        alt="Pearl Eats Design."
                      />
                    </a>
                  </div>
                  <div className={styles.imageContainer}>
                    <a href="Portfolio/Page/FittLife/">
                      <Image 
                        src="/portfolio2.png"
                        height={500}
                        width={500}
                        alt="FittLife Design."
                      />
                    </a>
                  </div>
                  <div className={styles.imageContainer}>
                    <a href="Portfolio/Page/FittLife/">
                      <Image 
                        src="/portfolio3.png"
                        height={500}
                        width={500}
                        alt="Design."
                      />
                    </a>
                  </div>
                  <div className={styles.imageContainer}>
                    <a href="Portfolio/Page/DanceShark/">
                      <Image 
                        src="/portfolio4.png"
                        height={500}
                        width={500}
                        alt="Dance Shark Design."
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.browse}>
                <a href="Portfolio/">Browse</a>
              </div>
              <div className={styles.socials}>
                <h1>Socials</h1>
                <div className={styles.socialIcons}>
                  <ul>
                    <li>
                      <a
                        className={styles.socialImageContainer}
                        href="https://www.facebook.com/jonuxcreative"
                        target="_blank"
                      >
                        <Image 
                          id="facebook" 
                          src="/Logos/Facebook.svg" 
                          height={200}
                          width={200}
                          alt="Facebook Logo"  
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.socialImageContainer}
                        href="https://www.instagram.com/jonuxcreative/"
                        target="_blank"
                      >
                        <Image 
                          id="instagram" 
                          src="/Logos/Instagram.svg"
                          height={200}
                          width={200}
                          alt="Instagram Logo." 
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.socialImageContainer}
                        href="https://www.linkedin.com/company/jonux-creative/"
                        target="_blank"
                      >
                        <Image 
                          id="linkedIn" 
                          src="/Logos/LinkedIn.svg" 
                          height={200}
                          width={200}
                          alt="LinkedIn Logo."
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/JonuxCreative"
                        className={styles.socialImageContainer}
                        target="_blank"
                      >
                        <Image 
                          id="twitter" 
                          src="/Logos/Twitter.svg"
                          height={200}
                          width={200}
                          alt="Twitter Logo." 
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://dribbble.com/JonuxCreative"
                        className={styles.socialImageContainer}
                        target="_blank"
                      >
                        <Image 
                          id="dribble" 
                          src="/Logos/Dribble.svg"
                          height={200}
                          width={200}
                          alt="Dribble Logo." 
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.contact}>
                <h1>Contact</h1>
                <h2>
                  Email:
                  <a
                    target="_blank"
                    href="mailto:jon@jonuxcreative.co.uk?subject=Inquiry"
                    >jon@jonuxcreative.co.uk</a
                  >
                </h2>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  </>
  )
}
