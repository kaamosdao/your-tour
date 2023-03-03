import React from 'react';
import ChooseTourNavigation from './TourNavigation';
import styles from './SectionChooseTour.module.scss';
import TourLinks from './TourLinks';

const SectionChooseTour = () => {
  return (
    <section className={styles.chooseTour}>
      <h2 className={styles.title}>Выбери свой тур</h2>
      <ChooseTourNavigation />
      <TourLinks />
    </section>
  );
};

export default SectionChooseTour;
