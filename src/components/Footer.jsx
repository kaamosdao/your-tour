import React from 'react';
import cn from 'classnames'
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>Наши социальные сети</p>
        <ul className={styles.socials}>
          <li className={cn(styles.socialsItem, styles.socialsInstagram)}>
            <a className={styles.socialsLink} href="#">
              instagram
            </a>
          </li>
          <li className={cn(styles.socialsItem, styles.socialsFacebook)}>
            <a className={styles.socialsLink} href="#">
              facebook
            </a>
          </li>
          <li className={cn(styles.socialsItem, styles.socialsVkontakte)}>
            <a className={styles.socialsLink} href="#">
              vkontakte
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
