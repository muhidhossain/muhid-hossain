import React from 'react';
import { Button } from '@material-ui/core';
import styles from './Intro.module.scss';

const Intro = () => {
  return (
    <div className={`container ${styles.intro}`}>
      <div>
        <p>Hello! I am</p>
        <h1>Muhid Hossain Peal</h1>
        <br />
        <h3>Front End Developer</h3>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
        </ul>
        <a
          href="https://github.com//muhidhossain/muhid-hossain/raw/master/src/data/Muhid_Hossain_Peal_Resume.pdf"
          id="raw-url"
          role="button"
          className={styles.resume}
        >
          <Button className={styles.resumeBtn}>Get Resume</Button>
        </a>
        <a className={styles.about} href="#aboutMe">
          <Button className={styles.aboutBtn}>About Me</Button>
        </a>
      </div>
    </div>
  );
};

export default Intro;
