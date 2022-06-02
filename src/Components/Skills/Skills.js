import React, { useState } from 'react';
import skills from '../../data/skills';
import styles from './Skills.module.scss';

const Skills = () => {
  const selectedName = Object.keys(skills);
  const [selectedType, setSelectedType] = useState(selectedName[0]);
  const selectedSkill = skills[selectedType];

  return (
    <div className={`container ${styles.skillsArea}`} id="mySkills">
      <div className={styles.skills__heading}>
        <h4>MY SKILLS</h4>
      </div>
      <div className={styles.skills}>
        <nav>
          <ul className={`nav ${styles.skills__nav}`}>
            <li
              onClick={() => setSelectedType('Skills')}
              className={selectedType === 'Skills' ? 'active' : 'deactivate'}
            >
              <span>Skills</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.skill}>
        {selectedSkill.map(({ name, percent }) => (
          <div key={name} className={styles.card}>
            <h4>{name}</h4>
            <p>{percent}%</p>
            <div
              style={{ width: percent + '%' }}
              className={styles.progress__ar}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
