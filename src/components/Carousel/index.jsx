import React from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import './styles.scss';

export const Carousel = () => {
  const { instant: { title, image } } = useCarousel();

  return (
    <div className='carousel'>
      <picture className='pictures'>
        <img className='background' src={image} alt={title} />
        <div className='polaroid'>
          <img className='photo' src={image} alt={title} />
          <p className='title'>{title}</p>
        </div>
      </picture>
    </div>
  )
}