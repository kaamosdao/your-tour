import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './HistoryCard.module.scss';

const List = ({ items }) => (
  <ul className={styles.historyCardList}>
    {items.map((name) => (
      <li className={styles.historyCardItem} key={name}>
        {name}
      </li>
    ))}
  </ul>
);

const HistoryCard = ({ title, name, text, list, socials }) => (
  <li className={styles.item}>
    <div className={styles.socials}>
      {socials.map((social) => (
        <a className={styles.socialLink} key={social} href="/">
          {social}
        </a>
      ))}
    </div>
    <a className={cn(styles.historyCard, styles[name])} href="/">
      <h3 className={styles.historyCardTitle}>{title}</h3>
      <p className={styles.historyCardText}>{text}</p>
      {list && <List items={list} />}
      <footer className={styles.historyCardFooter}>
        <p className={cn(styles.historyCardButton, 'button-more')}>Подробнее</p>
      </footer>
    </a>
  </li>
);

HistoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  socials: PropTypes.arrayOf(PropTypes.string).isRequired,
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HistoryCard;
