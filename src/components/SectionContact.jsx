import React from 'react';
import styles from './SectionContact.module.scss';

const SectionContact = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>
        Пора в путешествие
        <br />
        вместе с нами!
      </h2>
      <p className={styles.text}>
        Напиши на почту и узнай подробности
        <br />
        на&nbsp;
        <a className={styles.link} href="mailto:yourtour@gmail.com">
          yourtour@gmail.com
        </a>
      </p>
      <picture className={styles.picture}>
        <source
          type="image/webp"
          media="(min-width: 1920px)"
          srcSet="
          src/assets/img/histories/icon-village-desktop-lg.webp    1x,
          src/assets/img/histories/icon-village-desktop-lg@2x.webp 2x
        "
          width="370"
          height="370"
        />
        <source
          type="image/webp"
          media="(min-width: 500px)"
          srcSet="
          src/assets/img/histories/icon-village-desktop-md.webp    1x,
          src/assets/img/histories/icon-village-desktop-md@2x.webp 2x
        "
          width="370"
          height="370"
        />
        <source
          type="image/webp"
          srcSet="
          src/assets/img/histories/icon-village-mobile.webp    1x,
          src/assets/img/histories/icon-village-mobile@2x.webp 2x
        "
          width="133"
          height="130"
        />
        <source
          media="(min-width: 1920px)"
          srcSet="
          src/assets/img/histories/icon-village-desktop-lg.png    1x,
          src/assets/img/histories/icon-village-desktop-lg@2x.png 2x
        "
          width="370"
          height="370"
        />
        <source
          media="(min-width: 500px)"
          srcSet="
          src/assets/img/histories/icon-village-desktop-md.png    1x,
          src/assets/img/histories/icon-village-desktop-md@2x.png 2x
        "
          width="370"
          height="370"
        />
        <img
          src="src/assets/img/histories/icon-village-mobile.png"
          srcSet="src/assets/img/histories/icon-village-mobile@2x.png 2x"
          alt="Самолет в небе"
          width="133"
          height="130"
          loading="lazy"
        />
      </picture>
    </section>
  );
};

export default SectionContact;
