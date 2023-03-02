import React from 'react';

const SectionHistories = () => {
  return (
    <section className="histories">
      <h2 className="histories__title">Истории путешествий</h2>
      <p className="histories__description">
        Идейные соображения высшего порядка, а&nbsp;
        <br />
        также рамки и место обучения кадров
      </p>
      <ul className="histories__list">
        <li className="histories__item">
          <div className="histories__item-socials">
            <a className="histories__item-social-link" href="">
              instagram
            </a>
            <a className="histories__item-social-link" href="">
              facebook
            </a>
            <a className="histories__item-social-link" href="">
              YouTube
            </a>
          </div>
          <a
            className="histories__item-link history-card history-card--camping"
            href="#"
          >
            <h3 className="history-card__title">Автостопом в Стамбул</h3>
            <p className="history-card__text">
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров обеспечивает широкому кругу (специалистов) участие
              в формировании новых предложений:
            </p>
            <ul className="history-card__list">
              <li className="history-card__item">вкусная еда</li>
              <li className="history-card__item">дешевый транспорт</li>
              <li className="history-card__item">красивый город.</li>
            </ul>
            <footer className="history-card__footer">
              <p className="history-card__button button-more">Подробнее</p>
            </footer>
          </a>
        </li>
        <li className="histories__item">
          <div className="histories__item-socials">
            <a className="histories__item-social-link" href="#">
              instagram
            </a>
            <a className="histories__item-social-link" href="#">
              ВКонтакте
            </a>
          </div>
          <a
            className="histories__item-link history-card history-card--fire"
            href="#"
          >
            <h3 className="history-card__title">Автостопом в Стамбул</h3>
            <p className="history-card__text">
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров обеспечивает широкому кругу (специалистов) участие
              в формировании новых предложений.
            </p>
            <footer className="history-card__footer">
              <p className="history-card__button button-more">Подробнее</p>
            </footer>
          </a>
        </li>
        <li className="histories__item">
          <div className="histories__item-socials">
            <a className="histories__item-social-link" href="#">
              instagram
            </a>
            <a className="histories__item-social-link" href="#">
              facebook
            </a>
            <a className="histories__item-social-link" href="#">
              ВКонтакте
            </a>
          </div>
          <a
            className="histories__item-link history-card history-card--shore"
            href="#"
          >
            <h3 className="history-card__title">Автостопом в Стамбул</h3>
            <p className="history-card__text">
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров обеспечивает широкому кругу (специалистов) участие
              в формировании новых предложений.
            </p>
            <footer className="history-card__footer">
              <p className="history-card__button button-more" href="#">
                Подробнее
              </p>
            </footer>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SectionHistories;
