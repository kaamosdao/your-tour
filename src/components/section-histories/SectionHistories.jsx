import React from 'react';
import styles from './SectionHistories.module.scss';
import HistoryCard from './HistoryCard';

const histories = [
  {
    title: 'Автостопом в Стамбул',
    name: 'camping',
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
    list: ['вкусная еда', 'дешевый транспорт', 'красивый город'],
    socials: ['instagram', 'facebook', 'YouTube'],
  },
  {
    title: 'Автостопом в Стамбул',
    name: 'fire',
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.',
    list: null,
    socials: ['instagram', 'ВКонтакте'],
  },
  {
    title: 'Автостопом в Стамбул',
    name: 'shore',
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.',
    list: null,
    socials: ['instagram', 'facebook', 'ВКонтакте'],
  },
];

const SectionHistories = () => {
  return (
    <section className={styles.histories}>
      <h2 className={styles.title}>Истории путешествий</h2>
      <p className={styles.description}>
        Идейные соображения высшего порядка, а&nbsp;
        <br />
        также рамки и место обучения кадров
      </p>
      <ul className={styles.list}>
        {histories.map(({ title, name, text, list, socials }) => (
          <HistoryCard
            title={title}
            name={name}
            text={text}
            list={list}
            socials={socials}
            key={name}
          />
        ))}
      </ul>
    </section>
  );
};

export default SectionHistories;
