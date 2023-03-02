import React from 'react';
import SectionChooseTour from './SectionChooseTour';
import SectionConstructTour from './SectionConstructTour';
import SectionFeedback from './SectionFeedback';
import SectionHistories from './SectionHistories';
import SectionPhotos from './SectionPhotos';

const Main = () => {
  return (
    <main className="main">
      <h1 className="visually-hidden">Выбери свой тур c YourTour</h1>
      <SectionChooseTour />
      <SectionConstructTour/>
      <SectionFeedback />
      <SectionPhotos />
      <SectionHistories/>
    </main>
  );
};

export default Main;
