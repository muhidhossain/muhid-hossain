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
                <FontAwesomeIcon icon={faFacebookSquare} />
                <FontAwesomeIcon className="instagram-icon" icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
            </div>
            <p>Developed by ME</p>
        </div>
    );
};

export default Footer;