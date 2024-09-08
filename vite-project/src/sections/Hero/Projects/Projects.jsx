import React from 'react';
import styles from './ProjectsStyles.module.css';

function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectContainer}>
                <a href="https://breast-cancer-app-ksabcoubwvghicvnsv6pbm.streamlit.app" className={styles.projectLink}>
                    <div className={styles.projectBox}>
                        Breast-cancer predictor App
                        <p>predict breast cancer diagnosis
                            (benign/malignant)
                        </p>
                    </div>
                </a>
            </div>
            <div className={styles.projectContainer}>
                <a href="https://breast-cancer-app-ksabcoubwvghicvnsv6pbm.streamlit.app" className={styles.projectLink}>
                    <div className={styles.projectBox}>
                        MNIST Digit Classification App
                        <p>classify handwritten digits</p>

                    </div>
                </a>
            </div>
            <div className={styles.projectContainer}>
                <a href="https://github.com/muniswamivikram123/machine-learning-Flask-Apps/tree/main/flaskapp2" className={styles.projectLink}>
                    <div className={styles.projectBox}>
                        Heart-disease predictor
                    </div>
                </a>
            </div>

        </section>
    );
}

export default Projects;
