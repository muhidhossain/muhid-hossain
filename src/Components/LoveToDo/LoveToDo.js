import React from 'react';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture, faCamera, faBiking } from '@fortawesome/free-solid-svg-icons'
import './LoveToDo.css';

const LoveToDo = () => {
    return (
        <div className="container loveToDo-area">
            <div className="loveToDo-heading">
                <h4>LOVE TO DO</h4>
            </div>
            <div className="loveToDo-details">
                <div>
                    <span>
                        <FontAwesomeIcon icon={faPlaneDeparture} />
                    </span>
                    <h4>Travelling</h4>
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faCamera} />
                    </span>
                    <h4>Photography</h4>
                </div>
                <div>
                    <span>
                        <SportsCricketIcon style={{ fontSize: 100 }} />
                    </span>
                    <h4>Playing Cricket</h4>
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faBiking} />
                    </span>
                    <h4>Riding Bike</h4>
                </div>
            </div>
        </div>
    );
};

export default LoveToDo;