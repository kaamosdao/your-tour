import React from 'react';
import cn from 'classnames';
import styles from './TourNavigation.module.scss';

const TourNavigation = () => (
  <ul className={styles.nav}>
    <li className={styles.navItem}>
      <a className={cn(styles.navLink, styles.navLinkCurrent)} href="/">
        Популярные
      </a>
    </li>
    <li className={styles.navItem}>
      <a className={styles.navLink} href="/">
        Авторские
      </a>
    </li>
    <li className={styles.navItem}>
      <a className={styles.navLink} href="/">
        Походы
      </a>
    </li>
    <li className={styles.navItem}>
      <a className={styles.navLink} href="/">
        Сплавы
      </a>
    </li>
    <li className={styles.navItem}>
      <a className={styles.navLink} href="/">
        Велопрогулки
      </a>
    </li>
  </ul>
);

export default TourNavigation;
