import React from 'react';
import cn from 'classnames';

import styles from './LicenseConfirm.module.scss';

const LicenseConfirm = () => (
  <fieldset className={styles.licenseConfirm}>
    <legend className="visually-hidden">
      Принятие условий Лицензионного договора.
    </legend>
    <label className={styles.checkbox} htmlFor="yep">
      <input
        className={cn('visually-hidden', styles.checkboxInput)}
        type="checkbox"
        id="yep"
        name="yep"
        required
      />
      <span className={styles.checkboxMark} />
      <span className={styles.checkboxLabel}>
        Нажимая кнопку, я принимаю условия&nbsp;
        <a className={styles.checkboxLink} href="/license">
          Лицензионного договора
        </a>
      </span>
    </label>
  </fieldset>
);

export default LicenseConfirm;
