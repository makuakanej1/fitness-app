import React from 'react';
import '../css/hero.css';

const Hero = ({
  title = 'This is the main title.',
  subtitle = 'This is a subtitle.',
}) => {
  return (
    <div className='hero-container'>
      <div className='hero-text'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
