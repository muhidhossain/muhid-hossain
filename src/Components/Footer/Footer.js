import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faStackOverflow,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss';
import leetCodeLogo from '../../images/LeetCode.png';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer__socialIcon}>
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
        <p>
          Developed by ME
          <a
            style={{ fontSize: '20px', color: 'aqua', paddingLeft: '10px' }}
            target="_blank"
            href="https://github.com/muhidhossain/muhid-hossain"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © {new Date().getFullYear()}</p>
      </div>
    </>
  );
};

export default Footer;
