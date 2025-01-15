import React from 'react';
import '../css/card.css';

const Card = ({ children }) => {
  return (
    <div className="card-wrapper">
      {children}
    </div>
  )
}

export default Card