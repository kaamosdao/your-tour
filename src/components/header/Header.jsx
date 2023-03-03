import React from 'react';
import Navigation from './Navigation';
import Tagline from './Tagline';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <Tagline />
    </header>
  );
};

export default Header;
