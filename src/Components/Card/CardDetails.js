import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
import './CardDetails.css';

const CardDetails = ({ image, title, details, liveWebsite, git }) => {
  return (
    <Card className="cardDetails">
      <img src={image} alt="" />
      <Card.Body>
        <a
          className="cardDetails__link"
          target="_blank"
          href={liveWebsite}
          rel="noreferrer"
        >
          <h4>{title}</h4>
        </a>
        <Card.Text>{details}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <a
          className="cardDetails__link"
          target="_blank"
          href={git}
          rel="noreferrer"
        >
          <FontAwesomeIcon className="gitIcon" icon={faGithub} />
        </a>
        <a
          className="cardDetails__link"
          target="_blank"
          href={liveWebsite}
          rel="noreferrer"
        >
          <FontAwesomeIcon className="linkIcon" icon={faExternalLinkAlt} />
        </a>
      </Card.Footer>
    </Card>
  );
};

export default CardDetails;
