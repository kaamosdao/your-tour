import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './TourCard.module.scss';

const TourCard = ({ name, title, price }) => (
  <a className={cn(styles.tourCard, styles[name])} href="/tour">
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.price}>{price}</p>
    <p className={cn(styles.button, 'button-more')}>Подробнее</p>
  </a>
);

TourCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default TourCard;
