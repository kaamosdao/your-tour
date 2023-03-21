import React from 'react';

import styles from './Tagline.module.scss';

const Tagline = () => (
  <div className={styles.tagline}>
    <h2 className={styles.title}>Идеальные путешествия существуют</h2>
    <p className={styles.description}>
      Идейные соображения высшего порядка, а&nbsp;
      <br />
      также рамки и&nbsp;
      <br />
      место обучения кадров
    </p>
    <button className={styles.button} type="button">
      Найти тур
    </button>
  </div>
);

export default Tagline;
