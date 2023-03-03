import React from 'react';
import './NavigationFixed.scss';

const NavigationFixed = () => {
  return (
    <nav className="navigation-fixed">
      <a className="navigation-fixed__logo" href="#">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="src/assets/img/svg-icons/yourtour-mobile-black.svg"
            width="181"
            height="32"
          />
          <img
            src="src/assets/img/svg-icons/yourtour-mobile-black.svg"
            alt="YourTour logo"
            width="133"
            height="22"
            loading="lazy"
          />
        </picture>
      </a>
      <ul className="navigation-fixed__links">
        <li className="navigation-fixed__item">
          <a className="navigation-fixed__link" href="#">
            Туры
          </a>
        </li>
        <li className="navigation-fixed__item">
          <a className="navigation-fixed__link" href="#">
            Создать тур
          </a>
        </li>
        <li className="navigation-fixed__item">
          <a className="navigation-fixed__link" href="#">
            Отзывы
          </a>
        </li>
        <li className="navigation-fixed__item">
          <a className="navigation-fixed__link" href="#">
            Истории
          </a>
        </li>
      </ul>
      <a className="navigation-fixed__phone" href="tel:89999999999">
        +7 999 999 99 99
      </a>
    </nav>
  );
};

export default NavigationFixed;
