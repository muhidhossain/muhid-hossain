import React from 'react';
import { Button } from '@material-ui/core';
import profile from '../../images/profile.jpg';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={`container ${styles.about}`} id="aboutMe">
      <div>
        <div className={styles.about__heading}>
          <h4>ABOUT ME</h4>
        </div>
        <div className={styles.about__profile}>
          <div className="col-md-6">
            <p>
              A self-taught Software Developer, looking for opportunities.
              JavaScript | TypeScript | React | Angular | React Native |
              Undergraduate Student - Geology
            </p>
            <div>
              <a
                href="https://github.com//muhidhossain/muhid-hossain/raw/master/src/data/Muhid_Hossain_Peal_Resume.pdf"
                id="raw-url"
                role="button"
                className={styles.resume}
              >
                <Button className={styles.resumeBtn}>Get Resume</Button>
              </a>
              <a className={styles.skill} href="#mySkills">
                <Button className={styles.skillBtn}>My Skills</Button>
              </a>
            </div>
          </div>
          <div className={`col-md-6 ${styles.profile}`}>
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
