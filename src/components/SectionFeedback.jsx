import React from 'react';

const SectionFeedback = () => {
  return (
    <section className="feedback">
      <h2 className="feedback__title">
        Отзывы наших
        <br />
        путешественников
      </h2>
      <p className="feedback__description">
        Идейные соображения высшего порядка, а&nbsp;
        <br />
        также рамки и место обучения кадров
      </p>
      <ul className="feedback__list">
        <li className="feedback__item feedback-card">
          <p className="feedback-card__text">
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров обеспечивает широкому кругу (специалистов) участие в
            формировании новых предложений. Идейные соображения высшего порядка,
            а также начало повседневной работы по формированию позиции позволяет
            оценить значение модели развития.
          </p>
          <div className="feedback-card__user user">
            <p className="user__name">Мария</p>
            <p className="user__tour">Тур: Вдали от дома</p>
            <picture className="user__avatar-picture">
              <source
                type="image/webp"
                srcSet="src/assets/img/avatars/user-maria.webp"
                width="75"
                height="75"
              />
              <source
                type="image/jpeg"
                srcSet="src/assets/img/avatars/user-maria.jpg"
                width="75"
                height="75"
              />
              <img
                className="user__avatar"
                type="image/webp"
                src="src/assets/img/avatars/user-maria.webp"
                alt="Аватар"
                width="75"
                height="75"
              />
            </picture>
          </div>
        </li>
        <li className="feedback__item feedback-card">
          <p className="feedback-card__text">
            Равным образом постоянный количественный рост и сфера нашей
            активности играет важную роль в формировании системы обучения
            кадров, соответствует насущным потребностям.
          </p>
          <p className="feedback-card__text">
            Значимость этих проблем настолько очевидна, что дальнейшее развитие
            различных форм деятельности обеспечивает широкому кругу
            (специалистов) участие в формировании новых предложений.
            Повседневная практика показывает, что реализация намеченных плановых
            заданий в значительной степени обуславливает создание модели
            развития.
          </p>
          <div className="feedback-card__user user">
            <p className="user__name">Павел</p>
            <p className="user__tour">Тур: Путешествие в горы</p>
            <picture className="user__avatar-picture">
              <source
                type="image/webp"
                srcSet="src/assets/img/avatars/user-pavel.webp"
                width="75"
                height="75"
              />
              <source
                type="image/jpeg"
                srcSet="src/assets/img/avatars/user-pavel.jpg"
                width="75"
                height="75"
              />
              <img
                type="image/jpg"
                className="user__avatar"
                src="src/assets/img/avatars/user-pavel.jpg"
                alt="Аватар"
                width="75"
                height="75"
              />
            </picture>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default SectionFeedback;
