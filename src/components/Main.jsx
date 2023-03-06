import React from 'react';
import SectionChooseTour from './section-choose-tour/SectionChooseTour';
import SectionConstructTour from './section-construct-tour/SectionConstructTour';
import SectionContact from './SectionContact';
import SectionFeedback from './SectionFeedback';
import SectionHistories from './SectionHistories';
import SectionPhotos from './SectionPhotos';

const Main = () => {
  return (
    <main>
      <h1 className="visually-hidden">Выбери свой тур c YourTour</h1>
      <SectionChooseTour />
      <SectionConstructTour />
      <SectionFeedback />
      <SectionPhotos />
      <SectionHistories />
      <SectionContact />
    </main>
  );
};

export default Main;
