import React from 'react';
import styles from './SkillsStyles.module.css';

import SkillList from '../../common/SkillList';

function Skills() {
    return (
        <section id="skills" className={styles.container}>
            <h1>Skills</h1>
            <div className={styles.skillList}>
                <SkillList skill="-> Python" />
                <SkillList skill="-> Computer Vision" />
                <SkillList skill="-> OpenCV" />
                <SkillList skill="-> Pillow" />
                <SkillList skill="-> Machine Learning" />
                <SkillList skill="-> scikit-learn" />
                <SkillList skill="-> Deep Learning" />
                <SkillList skill="-> NLP" />
            </div>
        </section>
    );
}

export default Skills;
