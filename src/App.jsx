import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, hideModal } from './slices/headerSlice.js';
import Footer from './components/Footer';
import Header from './components/header/Header';
import HeaderFixed from './components/header-fixed/HeaderFixed';
import Main from './components/Main';

const App = () => {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.header.isShow);
  
  const handleScroll = () => {
    const distance = 450;
    if (window.scrollY >= distance) {
      if (!isShow) {
        dispatch(showModal());
      }
    } else {
      if (isShow) {
        dispatch(hideModal());
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isShow]);

  return (
    <>
      <Header />
      <HeaderFixed />
      <Main />
      <Footer />
    </>
  );
};

export default App;
