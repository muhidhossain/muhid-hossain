import React from 'react';
import { Link } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer-area">
            <div>
                <small>Copyright © {year}</small>
            </div>
            <div className="social-icon">
                <a style={{ textDecoration: "none" }} target="blank" href="https://www.facebook.com/muhid.hossain.18">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a style={{ textDecoration: "none" }} target="blank" href="https://www.instagram.com/_abdul_muhit">
                    <FontAwesomeIcon className="instagram-icon" icon={faInstagram} />
                </a>
                <a style={{ textDecoration: "none" }} target="blank" href="https://twitter.com/MuhidHossain">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
            <p>
                Developed by ME
                <Link style={{ fontSize: "20px", color: "aqua", paddingLeft: "10px" }} target="blank" href="https://github.com/muhidhossain/muhid-hossain">
                    <FontAwesomeIcon icon={faGithub} />
                </Link>
            </p>
        </div>
    );
};

export default Footer;