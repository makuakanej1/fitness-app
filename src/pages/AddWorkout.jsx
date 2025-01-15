import React, { useState } from 'react';
import '../css/addworkout.css';
import Hero from '../components/Hero';

const AddWorkout = () => {
    const [namePreview, setNamePreview] = useState('');
    const [volumePreview, setVolumePreview] = useState('');
    const [exercisePreview, setExercisePreview] = useState('');
    const [dayPreview, setDayPreview] = useState('');

   
    const handleNameChange = (event) => {
      setNamePreview(event.target.value);
    }

    const handleVolumeChange = (event) => {
      setVolumePreview(event.target.value);
    }

    const handleExerciseChange = (event) => {
      setExercisePreview(event.target.value);
    }

    const handleDayChange = (event) => {
      setDayPreview(event.target.value);
    }


  return (
    <div className="workout-container">
      <div className="workout-header">
        <Hero />
      </div>
      <div className="workout-form">
       <form action="http://localhost:5000/workouts">
        <h1 className='title'>Workout Form</h1>
        
        <label htmlFor="name-input">Workout Name </label>
        <input type="text" value={namePreview} onChange={handleNameChange} />
        
        
        <label htmlFor="">Sets x Reps </label>
        <input type="text" value={volumePreview} onChange={handleVolumeChange} />
        

        <label htmlFor="">Add Exercises </label>
        <input type="text" value={exercisePreview} onChange={handleExerciseChange} />
        

        <label htmlFor="">Day of the week </label>
        <select name="days" id="days-of-week" value={dayPreview} onChange={handleDayChange}>
          <option value="">--Select a day of the week--</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        
        <div className="workout-preview">
          <h2>{namePreview}</h2>
          <h2>{volumePreview} {exercisePreview}</h2>
          <h2>{dayPreview}</h2>
        </div>

       </form>
       
      </div>
    </div>
    
  )
}

export default AddWorkout