import React, { createContext, useContext, useEffect, useState } from 'react';
import { instants } from './../utils/instants';
const INTERVAL_TIME = 6000;

const CarouselContext = createContext({
  instant: null,
  nextInstant: null,
  resetInstants: null
});

export const CarouselProvider = ({ children }) => {
  const carousel = useCarouselProvider();
  return (
    <>
      <CarouselContext.Provider value={carousel}>{children}</CarouselContext.Provider>
    </>
  );
};

export const useCarousel = () => useContext(CarouselContext);

const useCarouselProvider = () => {
  const [ firstInstant ] = instants;
  const [instant, setInstant] = useState({ ...firstInstant, index: 0 });

  const nextInstant = () => {
    setInstant(({ index: previousIndex }) =>  {
      const instantsLength = instants.length;
      const currentIndex = previousIndex + 1;
      const normalizedCurrentIndex = currentIndex >= instantsLength ? 0 : currentIndex;
      const currentInstant = { ...instants?.[normalizedCurrentIndex] };
      return {...currentInstant, index: normalizedCurrentIndex };
    });
  }

  const resetInstants = () => {
    setInstant({ ...instants?.[0], index: 0 });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextInstant();
    }, INTERVAL_TIME);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    instant,
    nextInstant,
    resetInstants
  };
};