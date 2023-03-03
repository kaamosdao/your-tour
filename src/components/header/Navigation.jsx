import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <a className={styles.logo} href="#">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="src/assets/img/svg-icons/yourtour-mobile.svg"
            width="181"
            height="32"
          />
          <img
            src="src/assets/img/svg-icons/yourtour-mobile.svg"
            alt="YourTour logo"
            width="133"
            height="22"
            loading="lazy"
          />
        </picture>
      </a>
      <ul className={styles.links}>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Туры
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Создать тур
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Отзывы
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Истории
          </a>
        </li>
      </ul>
      <a className={styles.phone} href="tel:89999999999">
        +7 999 999 99 99
      </a>
    </nav>
  );
};

export default Navigation;
