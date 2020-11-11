import React from 'react';
import './Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { CardDeck, Card } from 'react-bootstrap';

const Portfolio = () => {
    return (
        <div className="container portfolio-area">
            <div className="portfolio-heading">
                <h4>PORTFOLIO</h4>
            </div>
            <CardDeck className="portfolios">
                <Card className="card-details">
                <iframe title='amazon-clone' width="560" height="315" src="https://www.youtube.com/embed/H5FDb-RkeVw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <Card.Body>
                        <a target="blank" href="https://emazon-clone.web.app"><h4>Amazon clone</h4></a>
                        <Card.Text>
                        Full-Stack Amazon clone. Developed with React JS, hosted to firebase, accept payment with Stripe.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a target="blank" href="https://github.com/muhidhossain/amazon-clone">
                            <FontAwesomeIcon className="gitIcon" icon={faGithub} />
                        </a>
                        <a target="blank" href="https://emazon-clone.web.app">
                            <FontAwesomeIcon className="linkIcon" icon={faExternalLinkAlt} />
                        </a>
                    </Card.Footer>
                </Card>
                <Card className="card-details">
                    <iframe title="power-x-gym" width="560" height="315" src="https://www.youtube.com/embed/bzFNgUvB2dQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <Card.Body>
                        <a target="blank" href="https://power--x--gym.web.app"><h4>Power X Gym</h4></a>
                        <Card.Text>
                            Developed with most popular JavaScript framework React JS. Accept payment with Stripe and PayPal.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a target="blank" href="https://github.com/muhidhossain/powerxgym">
                            <FontAwesomeIcon className="gitIcon" icon={faGithub} />
                        </a>
                        <a target="blank" href="https://power--x--gym.web.app">
                            <FontAwesomeIcon className="linkIcon" icon={faExternalLinkAlt} />
                        </a>
                    </Card.Footer>
                </Card>
                <Card className="card-details">
                    <iframe title='boiwala' width="560" height="315" src="https://www.youtube.com/embed/EfPkARk3RJg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <Card.Body>
                        <a target="blank" href="https://boii-wala.web.app"><h4>Boiwlal</h4></a>
                        <Card.Text>
                            Boiwala the place where you buy knowledge. Develop with React JS, MongoDB, Node JS.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a target="blank" href="https://github.com/muhidhossain/boiwala">
                            <FontAwesomeIcon className="gitIcon" icon={faGithub} />
                        </a>
                        <a target="blank" href="https://boii-wala.web.app">
                            <FontAwesomeIcon className="linkIcon" icon={faExternalLinkAlt} />
                        </a>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <CardDeck className="portfolios">
                <Card className="card-details">
                    <iframe title="doctors-portal" width="560" height="315" src="https://www.youtube.com/embed/9BWuy9JSA-4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <Card.Body>
                        <a target="blank" href="https://doctors-portal-visit.web.app"><h4>Doctor's Portal</h4></a>
                        <Card.Text>
                            Web application for taking care for your teeth. Make your appointment now. We will take care of your precious smile.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a target="blank" href="https://github.com/muhidhossain/doctors-portal-app">
                            <FontAwesomeIcon className="gitIcon" icon={faGithub} />
                        </a>
                        <a target="blank" href="https://doctors-portal-visit.web.app">
                            <FontAwesomeIcon className="linkIcon" icon={faExternalLinkAlt} />
                        </a>
                    </Card.Footer>
                </Card>
                <Card className="card-details">
                    <iframe title="red-onion-restaurant" src="https://www.youtube.com/embed/6XGTU6Zzv8k" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <Card.Body>
                        <a target="blank" href="https://red-onion-food1.web.app"><h4>Red Onion Restaurant</h4></a>
                        <Card.Text>
                            A restaurant web application build with React JS. Ordering food is available but delivery process is closed now.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a target="blank" href="https://github.com/muhidhossain/red-onion-restaurant">
                            <FontAwesomeIcon className="gitIcon" icon={faGithub} />
                        </a>
                        <a target="blank" href="https://red-onion-food1.web.app">
                            <FontAwesomeIcon className="linkIcon" icon={faExternalLinkAlt} />
                        </a>
                    </Card.Footer>
                </Card>
                <Card style={{ backgroundColor: "#000f0f" }}></Card>
            </CardDeck>
        </div>
    );
};

export default Portfolio;