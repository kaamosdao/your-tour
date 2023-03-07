import React from 'react';
import cn from 'classnames';
import styles from './HistoryCard.module.scss';

const List = ({ items }) => {
  return (
    <ul className={styles.historyCardList}>
      {items.map((name, i) => (
        <li className={styles.historyCardItem} key={i}>
          {name}
        </li>
      ))}
    </ul>
  );
};

const HistoryCard = ({ title, name, text, list, socials }) => {
  return (
    <li className={styles.item}>
      <div className={styles.socials}>
        {socials.map((name, i) => <a className={styles.socialLink} key={i} href="">{name}</a>)}
      </div>
      <a className={cn(styles.historyCard, styles[name])} href="#">
        <h3 className={styles.historyCardTitle}>{title}</h3>
        <p className={styles.historyCardText}>{text}</p>
        {list && <List items={list} />}
        <footer className={styles.historyCardFooter}>
          <p className={cn(styles.historyCardButton, 'button-more')}>
            Подробнее
          </p>
        </footer>
      </a>
    </li>
  );
};

export default HistoryCard;
