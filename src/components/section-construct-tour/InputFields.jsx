import React from 'react';
import cn from 'classnames'
import styles from './InputFields.module.scss';

const InputFields = () => {
  return (
        <fieldset className={styles.inputFields}>
          <legend className="visually-hidden">Заполните поля</legend>
          <ul className={styles.list}>
            <li className={styles.item}>
              <label className={styles.label} htmlFor="name">
                Имя
              </label>
              <input
                className={styles.input}
                type="text"
                name="name"
                id="name"
                placeholder="Введите Ваше имя"
                required
              />
            </li>
            <li className={cn(styles.item, styles.itemSelect)}>
              <label className={styles.label} htmlFor="direction">
                Направление
              </label>
              <select
                className={styles.select}
                id="direction"
                name="direction"
                defaultValue=""
                required
              >
                <option value="" disabled hidden>
                  Куда хотите ехать
                </option>
                <option value="popular">Gravity Falls</option>
                <option value="expensive">Hogwarts</option>
                <option value="expensive">To the Moon</option>
              </select>
            </li>
            <li className={styles.item}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.input}
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
                required
              />
            </li>
            <li className={styles.item}>
              <label className={styles.label} htmlFor="phone">
                Телефон
              </label>
              <input
                className={styles.input}
                type="tel"
                name="phone"
                id="phone"
                placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
                pattern="^([+]7)\s(\([0-9]{3})\)([0-9]{3})([-])([0-9]{2})([-])([0-9]{2})"
                required
              />
            </li>
            <li className={styles.item}>
              <label className={styles.label} htmlFor="dateFrom">
                Дата от
              </label>
              <input
                className={styles.input}
                type="text"
                name="dateFrom"
                id="dateFrom"
                placeholder="ДД.ММ.ГГГГ"
                pattern="^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                required
              />
            </li>
            <li className={styles.item}>
              <label className={styles.label} htmlFor="dateTo">
                Дата до
              </label>
              <input
                className={styles.input}
                type="text"
                name="dateTo"
                id="dateTo"
                placeholder="ДД.ММ.ГГГГ"
                pattern="^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                required
              />
            </li>
            <li className={cn(styles.item, styles.itemTextarea)}>
              <label className={styles.label} htmlFor="comment">
                Комментарий
              </label>
              <textarea
                className={styles.textarea}
                name="comment"
                id="comment"
              ></textarea>
            </li>
          </ul>
        </fieldset>
  );
};

export default InputFields;
