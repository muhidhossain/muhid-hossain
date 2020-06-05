import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer-area">
            <div>
                <small>Copyright © {year}</small>
            </div>
            <div className="social-icon">
                <a style={{ textDecoration: "none" }} href="https://www.facebook.com/muhid.hossain.18">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a style={{ textDecoration: "none" }} href="https://www.instagram.com/_abdul_muhit">
                    <FontAwesomeIcon className="instagram-icon" icon={faInstagram} />
                </a>
                <FontAwesomeIcon icon={faTwitter} />
            </div>
            <p>Developed by ME</p>
        </div>
    );
};

export default Footer;