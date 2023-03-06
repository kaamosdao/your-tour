import React from 'react';
import cn from 'classnames';
import styles from './LicenseConfirm.module.scss';

const LicenseConfirm = () => {
  return (
    <fieldset className={styles.licenseConfirm}>
      <legend className="visually-hidden">
        Принятие условий Лицензионного договора.
      </legend>
      <label className={styles.checkbox}>
        <input
          className={cn('visually-hidden', styles.checkboxInput)}
          type="checkbox"
          name="yep"
          required
        />
        <span className={styles.checkboxMark}></span>
        <span className={styles.checkboxLabel}>
          Нажимая кнопку, я принимаю условия&nbsp;
          <a className={styles.checkboxLink} href="#">
            Лицензионного договора
          </a>
        </span>
      </label>
    </fieldset>
  );
};

export default LicenseConfirm;
