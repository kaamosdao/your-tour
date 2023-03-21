import React from 'react';

import ChooseTourNavigation from './TourNavigation';
import TourLinks from './TourLinks';

import styles from './SectionChooseTour.module.scss';

const SectionChooseTour = () => (
  <section className={styles.chooseTour}>
    <h2 className={styles.title}>Выбери свой тур</h2>
    <ChooseTourNavigation />
    <TourLinks />
  </section>
);

export default SectionChooseTour;
