import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__navigation navigation">
        <a className="navigation__logo" href="#">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="src/assets/img/svg-icons/yourtour-mobile.svg"
              width="181"
              height="32"
            />
            <img
              src="src/assets/img/svg-icons/yourtour-mobile.svg"
              alt="YourTour logo"
              width="133"
              height="22"
              loading="lazy"
            />
          </picture>
        </a>
        <ul className="navigation__links">
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Туры
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Создать тур
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Отзывы
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Истории
            </a>
          </li>
        </ul>
        <a className="navigation__phone" href="tel:89999999999">
          +7 999 999 99 99
        </a>
      </nav>
      <div className="header__tagline tagline">
        <h2 className="tagline__title">Идеальные путешествия существуют</h2>
        <p className="tagline__description">
          Идейные соображения высшего порядка, а&nbsp;
          <br />
          также рамки и&nbsp;
          <br />
          место обучения кадров
        </p>
        <button className="tagline__button" type="button">
          Найти тур
        </button>
      </div>
    </header>
  );
};

export default Header;
