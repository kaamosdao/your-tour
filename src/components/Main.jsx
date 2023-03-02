import React from 'react';
import SectionChooseTour from './SectionChooseTour';
import SectionConstructTour from './SectionConstructTour';

const Main = () => {
  return (
    <main className="main">
      <h1 className="visually-hidden">Выбери свой тур c YourTour</h1>
      <SectionChooseTour />
      <SectionConstructTour/>
    </main>
  );
};

export default Main;
