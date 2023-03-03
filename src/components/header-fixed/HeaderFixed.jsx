import React from 'react';
import NavigationFixed from './NavigationFixed';
import styles from './HeaderFixed.module.scss';

const HeaderFixed = () => {
  return (
    <header className={styles.headerFixed}>
      <NavigationFixed />
    </header>
  );
};

export default HeaderFixed;
