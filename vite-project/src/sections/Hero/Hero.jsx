import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/vikramm8.svg";

import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg"
import linkedinIcon from "../../assets/linkedin-light.svg"
import CV from "../../assets/cv.pdf";
function Hero() {

    return (

        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img
                    classname={styles.hero}
                    src={heroImg}
                    alt="Profile picture of Vikram_muniswami"
                />




                <div
                    classname={styles.info}>
                    <h1>Vikram Muniswami</h1>
                    <h4>ML engineer</h4>
                    <span>
                        <a href="https://twitter.com/" target="_blank">
                            <img src={twitterIcon} alt="Twitter icon" />
                        </a>
                        <a href="https://github.com/" target="_blank">
                            <img src={githubIcon} alt="github icon" />
                        </a>
                        <a href="https://linkedin.com/" target="_blank">
                            <img src={linkedinIcon} alt="linkedin icon" />
                        </a>
                    </span>
                    <br></br>
                    <p>
                        with a passion for developing ml apps
                    </p>
                    <br></br>
                    <a href={CV} download>
                        <button className="hover">Resume</button>

                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
