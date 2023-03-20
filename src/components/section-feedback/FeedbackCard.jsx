import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackCard.module.scss';

const FeedbackCard = ({ name, user, tour, text }) => (
  <li className={styles.card}>
    {text.map(({ paragraph, id }) => (
      <p key={id} className={styles.text}>
        {paragraph}
      </p>
    ))}
    <div className={styles.user}>
      <p className={styles.name}>{name}</p>
      <p className={styles.tour}>
        Тур:&nbsp;
        {tour}
      </p>
      <picture className={styles.avatarPicture}>
        <source
          type="image/webp"
          srcSet={`src/assets/img/avatars/${user}.webp`}
          width="75"
          height="75"
        />
        <source
          type="image/jpeg"
          srcSet={`src/assets/img/avatars/${user}.jpg`}
          width="75"
          height="75"
        />
        <img
          className={styles.avatar}
          type="image/jpeg"
          src={`src/assets/img/avatars/${user}.jpg`}
          alt="Аватар"
          width="75"
          height="75"
        />
      </picture>
    </div>
  </li>
);

FeedbackCard.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tour: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(
    PropTypes.shape({
      paragraph: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
};

export default FeedbackCard;
