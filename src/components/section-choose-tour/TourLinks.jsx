import React from 'react';

import TourCard from './TourCard';

import styles from './TourLinks.module.scss';

const TourLinks = () => (
  <ul className={styles.links}>
    <li className={styles.linksItem}>
      <TourCard name="car" title="Путешествие в горы" price="от 80 000 руб" />
    </li>
    <li className={styles.linksItem}>
      <TourCard name="sand" title="Путешествие в горы" price="от 80 000 руб" />
    </li>
    <li className={styles.linksItem}>
      <TourCard name="fjord" title="Путешествие в горы" price="от 80 000 руб" />
    </li>
    <li className={styles.linksItem}>
      <TourCard
        name="street"
        title="Путешествие в горы"
        price="от 80 000 руб"
      />
    </li>
    <li className={styles.linksItem}>
      <TourCard name="beach" title="Путешествие в горы" price="от 80 000 руб" />
    </li>
    <li className={styles.linksItem}>
      <TourCard name="lake" title="Путешествие в горы" price="от 80 000 руб" />
    </li>
  </ul>
);

export default TourLinks;
