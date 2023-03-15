import React from 'react';
import styles from './SectionFeedback.module.scss';
import FeedbackCard from './FeedbackCard';

const feedbacks = [
  {
    name: 'Мария',
    user: 'user-maria',
    tour: 'Вдали от дома',
    text: [
      {
        paragraph:
          'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.',
        id: 1,
      },
    ],
  },
  {
    name: 'Павел',
    user: 'user-pavel',
    tour: 'Путешествие в горы',
    text: [
      {
        paragraph:
          'Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
        id: 1,
      },
      {
        paragraph:
          'Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.',
        id: 2,
      },
    ],
  },
];

const SectionFeedback = () => (
  <section className={styles.feedback}>
    <h2 className={styles.title}>
      Отзывы наших
      <br />
      путешественников
    </h2>
    <p className={styles.description}>
      Идейные соображения высшего порядка, а&nbsp;
      <br />
      также рамки и место обучения кадров
    </p>
    <ul className={styles.list}>
      {feedbacks.map(({
        name, user, tour, text,
      }) => (
        <FeedbackCard
          name={name}
          user={user}
          tour={tour}
          text={text}
          key={user}
        />
      ))}
    </ul>
  </section>
);

export default SectionFeedback;
