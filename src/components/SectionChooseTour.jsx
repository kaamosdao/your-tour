import React from 'react';

const SectionChooseTour = () => {
  return (
    <section className="choose-tour">
      <h2 className="choose-tour__title">Выбери свой тур</h2>
      <ul className="choose-tour__nav">
        <li className="choose-tour__nav-item">
          <a
            className="choose-tour__nav-link choose-tour__nav-link--current"
            href="#"
          >
            Популярные
          </a>
        </li>
        <li className="choose-tour__nav-item">
          <a className="choose-tour__nav-link" href="#">
            Авторские
          </a>
        </li>
        <li className="choose-tour__nav-item">
          <a className="choose-tour__nav-link" href="#">
            Походы
          </a>
        </li>
        <li className="choose-tour__nav-item">
          <a className="choose-tour__nav-link" href="#">
            Сплавы
          </a>
        </li>
        <li className="choose-tour__nav-item">
          <a className="choose-tour__nav-link" href="#">
            Велопрогулки
          </a>
        </li>
      </ul>
      <ul className="choose-tour__links">
        <li className="choose-tour__links-item">
          <a className="tour-card tour-card--car" href="#">
            <h3 className="tour-card__title">Путешествие в горы</h3>
            <p className="tour-card__price">от 80 000 руб</p>
            <p className="tour-card__button button-more">Подробнее</p>
          </a>
        </li>
        <li className="choose-tour__links-item">
          <a className="tour-card tour-card--sand" href="#">
            <h3 className="tour-card__title">Путешествие в горы</h3>
            <p className="tour-card__price">от 80 000 руб</p>
            <p className="tour-card__button button-more">Подробнее</p>
          </a>
        </li>
        <li className="choose-tour__links-item">
          <a className="tour-card tour-card--fjord" href="#">
            <h3 className="tour-card__title">Путешествие в горы</h3>
            <p className="tour-card__price">от 80 000 руб</p>
            <p className="tour-card__button button-more">Подробнее</p>
          </a>
        </li>
        <li className="choose-tour__links-item">
          <a className="tour-card tour-card--street" href="#">
            <h3 className="tour-card__title">Путешествие в горы</h3>
            <p className="tour-card__price">от 80 000 руб</p>
            <p className="tour-card__button button-more">Подробнее</p>
          </a>
        </li>
        <li className="choose-tour__links-item">
          <a className="tour-card tour-card--beach" href="#">
            <h3 className="tour-card__title">Путешествие в горы</h3>
            <p className="tour-card__price">от 80 000 руб</p>
            <p className="tour-card__button button-more">Подробнее</p>
          </a>
        </li>
        <li className="choose-tour__links-item">
          <a className="tour-card tour-card--lake" href="#">
            <h3 className="tour-card__title">Путешествие в горы</h3>
            <p className="tour-card__price">от 80 000 руб</p>
            <p className="tour-card__button button-more">Подробнее</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SectionChooseTour;
