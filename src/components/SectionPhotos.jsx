import React from 'react';
import cn from 'classnames';
import styles from './SectionPhotos.module.scss';

const SectionPhotos = () => {
  return (
    <section className={styles.photos}>
      <h2 className={styles.title}>Фотографии путешествий</h2>
      <p className={styles.description}>
        Идейные соображения высшего порядка, а&nbsp;
        <br />
        также рамки и место обучения кадров
      </p>
      <ul className={styles.list}>
        <li className={cn(styles.item, styles.itemAirplane)}>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/airplane-desktop-lg.webp    1x,
              src/assets/img/photos/airplane-desktop-lg@2x.webp 2x
            "
              width="442"
              height="300"
            />
            <source
              type="image/webp"
              media="(min-width: 500px)"
              srcSet="
              src/assets/img/photos/airplane-desktop-md.webp    1x,
              src/assets/img/photos/airplane-desktop-md@2x.webp 2x
            "
              width="314"
              height="300"
            />
            <source
              type="image/webp"
              srcSet="
              src/assets/img/photos/airplane-mobile.webp    1x,
              src/assets/img/photos/airplane-mobile@2x.webp 2x
            "
              width="150"
              height="110"
            />
            <source
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/airplane-desktop-lg.png    1x,
              src/assets/img/photos/airplane-desktop-lg@2x.png 2x
            "
              width="442"
              height="300"
            />
            <source
              media="(min-width: 500px)"
              srcSet="
              src/assets/img/photos/airplane-desktop-md.png    1x,
              src/assets/img/photos/airplane-desktop-md@2x.png 2x
            "
              width="314"
              height="300"
            />
            <img
              src="src/assets/img/photos/airplane-mobile.png"
              srcSet="src/assets/img/photos/airplane-mobile@2x.png 2x"
              alt="Самолет в небе"
              width="150"
              height="110"
              loading="lazy"
            />
          </picture>
        </li>
        <li className={cn(styles.item, styles.itemCanyon)}>
          <picture>
            <source
              type="image/webp"
              srcSet="
              src/assets/img/photos/canyon-desktop-lg.webp    1x,
              src/assets/img/photos/canyon-desktop-lg@2x.webp 2x
            "
              width="442"
              height="301"
            />
            <img
              src="src/assets/img/photos/canyon-desktop-lg.png"
              srcSet="src/assets/img/photos/canyon-desktop-lg@2x.png 2x"
              alt="Палатка в каньоне."
              width="442"
              height="301"
              loading="lazy"
            />
          </picture>
        </li>
        <li className={cn(styles.item, styles.itemSunset)}>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/sunset-desktop-lg.webp    1x,
              src/assets/img/photos/sunset-desktop-lg@2x.webp 2x
            "
              width="442"
              height="301"
            />
            <source
              type="image/webp"
              srcSet="
              src/assets/img/photos/sunset-desktop-md.webp    1x,
              src/assets/img/photos/sunset-desktop-md@2x.webp 2x
            "
              width="314"
              height="301"
            />
            <source
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/sunset-desktop-lg.png    1x,
              src/assets/img/photos/sunset-desktop-lg@2x.png 2x
            "
              width="442"
              height="301"
            />
            <img
              src="src/assets/img/photos/sunset-desktop-md.png"
              srcSet="src/assets/img/photos/sunset-desktop-md@2x.png 2x"
              alt="Закат в горах."
              width="314"
              height="301"
              loading="lazy"
            />
          </picture>
        </li>
        <li className={cn(styles.item, styles.itemRoad)}>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/road-desktop-lg.webp    1x,
              src/assets/img/photos/road-desktop-lg@2x.webp 2x
            "
              width="442"
              height="300"
            />
            <source
              type="image/webp"
              media="(min-width: 500px)"
              srcSet="
              src/assets/img/photos/road-desktop-md.webp    1x,
              src/assets/img/photos/road-desktop-md@2x.webp 2x
            "
              width="314"
              height="300"
            />
            <source
              type="image/webp"
              srcSet="
              src/assets/img/photos/road-mobile.webp    1x,
              src/assets/img/photos/road-mobile@2x.webp 2x
            "
              width="150"
              height="110"
            />
            <source
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/road-desktop-lg.png    1x,
              src/assets/img/photos/road-desktop-lg@2x.png 2x
            "
              width="442"
              height="300"
            />
            <source
              media="(min-width: 500px)"
              srcSet="
              src/assets/img/photos/road-desktop-md.png    1x,
              src/assets/img/photos/road-desktop-md@2x.png 2x
            "
              width="314"
              height="300"
            />
            <img
              src="src/assets/img/photos/road-mobile.png"
              srcSet="src/assets/img/photos/road-mobile@2x.png 2x"
              alt="Туманная дорога в горах"
              width="150"
              height="110"
              loading="lazy"
            />
          </picture>
        </li>
        <li className={cn(styles.item, styles.itemCliff)}>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/cliff-desktop-lg.webp    1x,
              src/assets/img/photos/cliff-desktop-lg@2x.webp 2x
            "
              width="349"
              height="301"
            />
            <source
              type="image/webp"
              media="(min-width: 500px)"
              srcSet="
              src/assets/img/photos/cliff-desktop-md.webp    1x,
              src/assets/img/photos/cliff-desktop-md@2x.webp 2x
            "
              width="231"
              height="301"
            />
            <source
              type="image/webp"
              srcSet="
              src/assets/img/photos/cliff-mobile.webp    1x,
              src/assets/img/photos/cliff-mobile@2x.webp 2x
            "
              width="99"
              height="110"
            />
            <source
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/cliff-desktop-lg.png    1x,
              src/assets/img/photos/cliff-desktop-lg@2x.png 2x
            "
              width="349"
              height="301"
            />
            <source
              media="(min-width: 500px)"
              srcSet="
              src/assets/img/photos/cliff-desktop-md.png    1x,
              src/assets/img/photos/cliff-desktop-md@2x.png 2x
            "
              width="231"
              height="301"
            />
            <img
              src="src/assets/img/photos/cliff-mobile.png"
              srcSet="src/assets/img/photos/cliff-mobile@2x.png 2x"
              alt="Люди на утесе"
              width="99"
              height="110"
              loading="lazy"
            />
          </picture>
        </li>
        <li className={cn(styles.item, styles.itemMap)}>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/map-desktop-lg.webp    1x,
              src/assets/img/photos/map-desktop-lg@2x.webp 2x
            "
              width="347"
              height="301"
            />
            <source
              type="image/webp"
              srcSet="
              src/assets/img/photos/map-desktop-md.webp    1x,
              src/assets/img/photos/map-desktop-md@2x.webp 2x
            "
              width="231"
              height="301"
            />
            <source
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/map-desktop-lg.png    1x,
              src/assets/img/photos/map-desktop-lg@2x.png 2x
            "
              width="347"
              height="301"
            />
            <img
              src="src/assets/img/photos/map-desktop-md.png"
              srcSet="src/assets/img/photos/map-desktop-md@2x.png 2x"
              alt="Рука указывает на карту"
              width="231"
              height="301"
              loading="lazy"
            />
          </picture>
        </li>
        <li className={cn(styles.item, styles.itemBridge)}>
          <picture>
            <source
              type="image/webp"
              srcSet="
              src/assets/img/photos/bridge-desktop-lg.webp    1x,
              src/assets/img/photos/bridge-desktop-lg@2x.webp 2x
            "
              width="347"
              height="301"
            />
            <img
              src="src/assets/img/photos/bridge-desktop-lg.png"
              srcSet="src/assets/img/photos/bridge-desktop-lg@2x.png 2x"
              alt="Мост в лесу"
              width="347"
              height="301"
              loading="lazy"
            />
          </picture>
        </li>
        <li className={cn(styles.item, styles.itemCar)}>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/car-desktop-lg.webp    1x,
              src/assets/img/photos/car-desktop-lg@2x.webp 2x
            "
              width="347"
              height="301"
            />
            <source
              type="image/webp"
              media="(min-width: 500px)"
              srcSet="
              src/assets/img/photos/car-desktop-md.webp    1x,
              src/assets/img/photos/car-desktop-md@2x.webp 2x
            "
              width="231"
              height="301"
            />
            <source
              type="image/webp"
              srcSet="
              src/assets/img/photos/car-mobile.webp    1x,
              src/assets/img/photos/car-mobile@2x.webp 2x
            "
              width="99"
              height="110"
            />
            <source
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/car-desktop-lg.png    1x,
              src/assets/img/photos/car-desktop-lg@2x.png 2x
            "
              width="347"
              height="301"
            />
            <source
              media="(min-width: 500px)"
              srcSet="
              src/assets/img/photos/car-desktop-md.png    1x,
              src/assets/img/photos/car-desktop-md@2x.png 2x
            "
              width="231"
              height="301"
            />
            <img
              src="src/assets/img/photos/car-mobile.png"
              srcSet="src/assets/img/photos/car-mobile@2x.png 2x"
              alt="Машина с палаткой у воды"
              width="99"
              height="110"
              loading="lazy"
            />
          </picture>
        </li>
        <li className={cn(styles.item, styles.itemStreet)}>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/street-desktop-lg.webp    1x,
              src/assets/img/photos/street-desktop-lg@2x.webp 2x
            "
              width="348"
              height="301"
            />
            <source
              type="image/webp"
              media="(min-width: 500px)"
              srcSet="
              src/assets/img/photos/street-desktop-md.webp    1x,
              src/assets/img/photos/street-desktop-md@2x.webp 2x
            "
              width="231"
              height="301"
            />
            <source
              type="image/webp"
              srcSet="
              src/assets/img/photos/street-mobile.webp    1x,
              src/assets/img/photos/street-mobile@2x.webp 2x
            "
              width="99"
              height="110"
            />
            <source
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/street-desktop-lg.png    1x,
              src/assets/img/photos/street-desktop-lg@2x.png 2x
            "
              width="348"
              height="301"
            />
            <source
              media="(min-width: 500px)"
              srcSet="
              src/assets/img/photos/street-desktop-md.png    1x,
              src/assets/img/photos/street-desktop-md@2x.png 2x
            "
              width="231"
              height="301"
            />
            <img
              src="src/assets/img/photos/street-mobile.png"
              srcSet="src/assets/img/photos/street-mobile@2x.png 2x"
              alt="Пустая улица"
              width="99"
              height="110"
              loading="lazy"
            />
          </picture>
        </li>
        <li className={cn(styles.item, styles.itemHouses)}>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/houses-desktop-lg.webp    1x,
              src/assets/img/photos/houses-desktop-lg@2x.webp 2x
            "
              width="442"
              height="300"
            />
            <source
              type="image/webp"
              media="(min-width: 500px)"
              srcSet="
              src/assets/img/photos/houses-desktop-md.webp    1x,
              src/assets/img/photos/houses-desktop-md@2x.webp 2x
            "
              width="314"
              height="300"
            />
            <source
              type="image/webp"
              srcSet="
              src/assets/img/photos/houses-mobile.webp    1x,
              src/assets/img/photos/houses-mobile@2x.webp 2x
            "
              width="154"
              height="110"
            />
            <source
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/houses-desktop-lg.png    1x,
              src/assets/img/photos/houses-desktop-lg@2x.png 2x
            "
              width="442"
              height="300"
            />
            <source
              media="(min-width: 500px)"
              srcSet="
              src/assets/img/photos/houses-desktop-md.png    1x,
              src/assets/img/photos/houses-desktop-md@2x.png 2x
            "
              width="314"
              height="300"
            />
            <img
              src="src/assets/img/photos/houses-mobile.png"
              srcSet="src/assets/img/photos/houses-mobile@2x.png 2x"
              alt="Дома на улице"
              width="154"
              height="110"
              loading="lazy"
            />
          </picture>
        </li>
        <li className={cn(styles.item, styles.itemLake)}>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/lake-desktop-lg.webp    1x,
              src/assets/img/photos/lake-desktop-lg@2x.webp 2x
            "
              width="442"
              height="300"
            />
            <source
              type="image/webp"
              media="(min-width: 500px)"
              srcSet="
              src/assets/img/photos/lake-desktop-md.webp    1x,
              src/assets/img/photos/lake-desktop-md@2x.webp 2x
            "
              width="314"
              height="300"
            />
            <source
              type="image/webp"
              srcSet="
              src/assets/img/photos/lake-mobile.webp    1x,
              src/assets/img/photos/lake-mobile@2x.webp 2x
            "
              width="154"
              height="110"
            />
            <source
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/lake-desktop-lg.png    1x,
              src/assets/img/photos/lake-desktop-lg@2x.png 2x
            "
              width="442"
              height="300"
            />
            <source
              media="(min-width: 500px)"
              srcSet="
              src/assets/img/photos/lake-desktop-md.png    1x,
              src/assets/img/photos/lake-desktop-md@2x.png 2x
            "
              width="314"
              height="300"
            />
            <img
              src="src/assets/img/photos/lake-mobile.png"
              srcSet="src/assets/img/photos/lake-mobile@2x.png 2x"
              alt="Озеро в горах"
              width="154"
              height="110"
              loading="lazy"
            />
          </picture>
        </li>
        <li className={cn(styles.item, styles.itemTown)}>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/town-desktop-lg.webp    1x,
              src/assets/img/photos/town-desktop-lg@2x.webp 2x
            "
              width="442"
              height="300"
            />
            <source
              type="image/webp"
              srcSet="
              src/assets/img/photos/town-desktop-md.webp    1x,
              src/assets/img/photos/town-desktop-md@2x.webp 2x
            "
              width="314"
              height="300"
            />
            <source
              media="(min-width: 1920px)"
              srcSet="
              src/assets/img/photos/town-desktop-lg.png    1x,
              src/assets/img/photos/town-desktop-lg@2x.png 2x
            "
              width="442"
              height="300"
            />
            <img
              src="src/assets/img/photos/town-desktop-md.png"
              srcSet="src/assets/img/photos/town-desktop-md@2x.png 2x"
              alt="Оживленная улица"
              width="314"
              height="300"
              loading="lazy"
            />
          </picture>
        </li>
        <li className={cn(styles.item, styles.itemSupboard)}>
          <picture>
            <source
              type="image/webp"
              srcSet="
              src/assets/img/photos/supboard-desktop-lg.webp    1x,
              src/assets/img/photos/supboard-desktop-lg@2x.webp 2x
            "
              width="442"
              height="300"
            />
            <img
              src="src/assets/img/photos/supboard-desktop-lg.png"
              srcSet="src/assets/img/photos/supboard-desktop-lg@2x.png 2x"
              alt="SUP борд на воде"
              width="442"
              height="300"
              loading="lazy"
            />
          </picture>
        </li>
      </ul>
    </section>
  );
};

export default SectionPhotos;
