import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import NavigationFixed from './NavigationFixed';
import styles from './HeaderFixed.module.scss';

const cn = classNames.bind(styles);

const HeaderFixed = () => {
  const isShow = useSelector((state) => state.header.isShow);
  return (
    <header className={cn('headerFixed', { showHeaderFixed: isShow })}>
      <NavigationFixed />
    </header>
  );
};

export default HeaderFixed;
