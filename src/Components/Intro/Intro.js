import React from 'react';
import { Button } from '@material-ui/core';
import styles from './Intro.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import leetCodeLogo from '../../images/LeetCode.png';

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
        <div className={styles.intro__social}>
          <a
            style={{ textDecoration: 'none' }}
            target="_blank"
            href="https://www.linkedin.com/in/muhidhossain/"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            style={{ textDecoration: 'none' }}
            target="_blank"
            href="https://github.com/muhidhossain"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            style={{ textDecoration: 'none' }}
            target="_blank"
            href="https://leetcode.com/muhidhossain/"
            rel="noreferrer"
          >
            <img src={leetCodeLogo} alt="leetCode" />
          </a>
          <a
            style={{ textDecoration: 'none' }}
            target="_blank"
            href="https://stackoverflow.com/users/13667519/muhid-hossain"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </div>
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
