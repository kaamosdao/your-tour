import React from 'react';
import cn from 'classnames';
import styles from './AgeConfirm.module.scss';

const AgeConfirm = () => {
  return (
    <fieldset className={styles.ageConfirm}>
      <legend className={styles.title}>Вам есть 18 лет?</legend>
      <ul className={styles.list}>
        <li className={styles.item}>
          <label className={styles.radio}>
            <input
              className={cn('visually-hidden', styles.radioInput)}
              type="radio"
              name="age-confirmation"
              value="yep"
              required
            />
            <span className={styles.radioMark}></span>
            <span className={styles.radioLabel}>Да</span>
          </label>
        </li>
        <li className={styles.item}>
          <label className={styles.radio}>
            <input
              className={cn('visually-hidden', styles.radioInput)}
              type="radio"
              name="age-confirmation"
              value="nope"
              required
            />
            <span className={styles.radioMark}></span>
            <span className={styles.radioLabel}>Нет</span>
          </label>
        </li>
      </ul>
    </fieldset>
  );
};

export default AgeConfirm;
