import React from 'react';
import './Portfolio.css';
import portfolio1 from '../../images/portfolio/portfolio1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Portfolio = () => {
    return (
        <div className="container portfolio-area">
            <div className="portfolio-heading">
                <h4>PORTFOLIO</h4>
            </div>
            <div className="portfolio-card">
                <div className="card-details">
                    <img src={portfolio1} alt="" />
                    <div>
                        <a href="https://red-onion-food1.web.app/"><h4>Red Onion</h4></a>
                        <p>A restaurant web application with firebase authentication. Ordering food is available but delivery process is closed now.</p>
                        <FontAwesomeIcon className="gitIcon" icon={faGithub} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;