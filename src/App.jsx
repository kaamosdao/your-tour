import React from 'react';
import Footer from './components/Footer';
import Header from './components/header/Header';
import HeaderFixed from './components/header-fixed/HeaderFixed';
import Main from './components/Main';

const App = () => {
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
