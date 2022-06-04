import React from 'react';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div>
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <p>The page you requested could not be found</p>
      </div>
    </div>
  );
};

export default NotFound;
