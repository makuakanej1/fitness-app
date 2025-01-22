import React from 'react';
import '../css/wrapper.css';

const WorkoutWrapper = ({ children }) => {
  return <div className='workout-wrapper'>{children}</div>;
};

export default WorkoutWrapper;
