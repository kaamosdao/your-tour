import React from 'react';

const Header = () => {
  return (
    <header class="header">
      <nav class="header__navigation navigation">
        <a class="navigation__logo" href="#">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcset="src/assets/img/svg-icons/yourtour-mobile.svg"
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
        <ul class="navigation__links">
          <li class="navigation__item">
            <a class="navigation__link" href="#">
              Туры
            </a>
          </li>
          <li class="navigation__item">
            <a class="navigation__link" href="#">
              Создать тур
            </a>
          </li>
          <li class="navigation__item">
            <a class="navigation__link" href="#">
              Отзывы
            </a>
          </li>
          <li class="navigation__item">
            <a class="navigation__link" href="#">
              Истории
            </a>
          </li>
        </ul>
        <a class="navigation__phone" href="tel:89999999999">
          +7 999 999 99 99
        </a>
      </nav>
      <div class="header__tagline tagline">
        <h2 class="tagline__title">Идеальные путешествия существуют</h2>
        <p class="tagline__description">
          Идейные соображения высшего порядка, а&nbsp;
          <br />
          также рамки и&nbsp;
          <br />
          место обучения кадров
        </p>
        <button class="tagline__button" type="button">
          Найти тур
        </button>
      </div>
    </header>
  );
};

export default Header;
