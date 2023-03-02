import React from 'react';

const SectionConstructTour = () => {
  return (
    <section className="construct-tour">
      <h2 className="construct-tour__title">Собери свой тур</h2>
      <p className="construct-tour__description">
        Идейные соображения высшего порядка,&nbsp;
        <br />а также рамки и место обучения кадров
      </p>
      <form className="construct-tour__form form">
        <fieldset className="form__inputs input-fields">
          <legend className="visually-hidden">Заполните поля</legend>
          <ul className="input-fields__list">
            <li className="input-fields__item">
              <label className="input-fields__label" htmlFor="name">
                Имя
              </label>
              <input
                className="input-fields__input"
                type="text"
                name="name"
                id="name"
                placeholder="Введите Ваше имя"
                required
              />
            </li>
            <li className="input-fields__item input-fields__item--select">
              <label className="input-fields__label" htmlFor="direction">
                Направление
              </label>
              <select
                className="input-fields__select"
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
            <li className="input-fields__item">
              <label className="input-fields__label" htmlFor="email">
                Email
              </label>
              <input
                className="input-fields__input"
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
                required
              />
            </li>
            <li className="input-fields__item">
              <label className="input-fields__label" htmlFor="phone">
                Телефон
              </label>
              <input
                className="input-fields__input"
                type="tel"
                name="phone"
                id="phone"
                placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
                pattern="^([+]7)\s(\([0-9]{3})\)([0-9]{3})([-])([0-9]{2})([-])([0-9]{2})"
                required
              />
            </li>
            <li className="input-fields__item">
              <label className="input-fields__label" htmlFor="dateFrom">
                Дата от
              </label>
              <input
                className="input-fields__input"
                type="text"
                name="dateFrom"
                id="dateFrom"
                placeholder="ДД.ММ.ГГГГ"
                pattern="^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                required
              />
            </li>
            <li className="input-fields__item">
              <label className="input-fields__label" htmlFor="dateTo">
                Дата до
              </label>
              <input
                className="input-fields__input"
                type="text"
                name="dateTo"
                id="dateTo"
                placeholder="ДД.ММ.ГГГГ"
                pattern="^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                required
              />
            </li>
            <li className="input-fields__item input-fields__item--textarea">
              <label className="input-fields__label" htmlFor="comment">
                Комментарий
              </label>
              <textarea
                className="input-fields__textarea"
                name="comment"
                id="comment"
              ></textarea>
            </li>
          </ul>
        </fieldset>

        <fieldset className="form__age age-confirm">
          <legend className="age-confirm__title">Вам есть 18 лет?</legend>
          <ul className="age-confirm__list">
            <li className="age-confirm__item">
              <label className="control-radio">
                <input
                  className="visually-hidden control-radio__input"
                  type="radio"
                  name="age-confirmation"
                  value="yep"
                  required
                />
                <span className="control-radio__mark"></span>
                <span className="control-radio__label">Да</span>
              </label>
            </li>
            <li className="age-confirm__item">
              <label className="control-radio">
                <input
                  className="visually-hidden control-radio__input"
                  type="radio"
                  name="age-confirmation"
                  value="nope"
                  required
                />
                <span className="control-radio__mark"></span>
                <span className="control-radio__label">Нет</span>
              </label>
            </li>
          </ul>
        </fieldset>

        <fieldset className="form__license license-confirm">
          <legend className="license-confirm__title visually-hidden">
            Принятие условий Лицензионного договора.
          </legend>
          <label className="license-confirm__label control-checkbox">
            <input
              className="visually-hidden control-checkbox__input"
              type="checkbox"
              name="yep"
              required
            />
            <span className="control-checkbox__mark"></span>
            <span className="control-checkbox__label">
              Нажимая кнопку, я принимаю условия
              <a className="control-checkbox__link" href="#">
                Лицензионного договора
              </a>
            </span>
          </label>
        </fieldset>

        <div className="form__buttons">
          <button className="form__buttons__button-find" type="submit">
            Найти тур
          </button>
          <button className="form__buttons__button-clear" type="reset">
            Сбросить
          </button>
        </div>
      </form>
    </section>
  );
};

export default SectionConstructTour;
