import React from 'react';
import AgeConfirm from './AgeConfirm';
import InputFields from './InputFields';
import LicenseConfirm from './LicenseConfirm';
import styles from './SectionConstructTour.module.scss';

const SectionConstructTour = () => {
  return (
    <section className={styles.constructTour}>
      <h2 className={styles.title}>Собери свой тур</h2>
      <p className={styles.description}>
        Идейные соображения высшего порядка,&nbsp;
        <br />а также рамки и место обучения кадров
      </p>
      <form className={styles.form}>
        <InputFields />
        <AgeConfirm />
        <LicenseConfirm />
        <div className={styles.buttons}>
          <button className={styles.buttonFind} type="submit">
            Найти тур
          </button>
          <button className={styles.buttonClear} type="reset">
            Сбросить
          </button>
        </div>
      </form>
    </section>
  );
};

export default SectionConstructTour;
