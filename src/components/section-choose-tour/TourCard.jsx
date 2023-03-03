import React from 'react';
import cn from 'classnames';
import styles from './TourCard.module.scss';

const TourCard = (props) => {
  const  { name, title, price } = props;
  return (
    <a className={cn(styles.tourCard, styles[name])} href="#">
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>{price}</p>
      <p className={cn(styles.button, 'button-more')}>Подробнее</p>
    </a>
  );
};

export default TourCard;
