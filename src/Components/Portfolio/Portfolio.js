import React from 'react';
import './Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
    return (
        <div className="container portfolio-area">
            <div className="portfolio-heading">
                <h4>PORTFOLIO</h4>
            </div>
            <div className="portfolio-card">
                <div className="card-details">
                <iframe title="red-onion-restaurant" src="https://www.youtube.com/embed/6XGTU6Zzv8k" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div>
                        <a href="https://red-onion-food1.web.app"><h4>Red Onion</h4></a>
                        <p>A restaurant web application with firebase authentication. Ordering food is available but delivery process is closed now.</p>
                        <a href="https://github.com/muhidhossain/red-onion-restaurant">
                            <FontAwesomeIcon className="gitIcon" icon={faGithub} />
                        </a>
                        <a href="https://red-onion-food1.web.app">
                            <FontAwesomeIcon className="linkIcon" icon={faExternalLinkAlt} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;