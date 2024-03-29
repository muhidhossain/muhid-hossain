import React from 'react';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlaneDeparture,
  faCamera,
  faBiking,
} from '@fortawesome/free-solid-svg-icons';
import styles from './LoveToDo.module.scss';

const LoveToDo = () => {
  return (
    <div className={`container ${styles.loveToDo}`} id="loveToDo">
      <div className={styles.loveToDo__heading}>
        <h4>LOVE TO DO</h4>
      </div>
      <div className={styles.loveToDo__details}>
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
