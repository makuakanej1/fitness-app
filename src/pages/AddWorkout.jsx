import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/addworkout.css';

const AddWorkout = () => {
  const [name, setName] = useState('');
  const [exercise, setExercises] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const navigate = useNavigate();

  // submit form to server
  const submitForm = (e) => {
    e.preventDefault();

    const newWorkout = {
      name,
      exercise,
      day,
      month,
      year,
    };

    addWorkout(newWorkout);

    return navigate('/journal');
  };

  // add a new workout
  const addWorkout = async (newWorkout) => {
    const res = await fetch('http://localhost:5000/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'applications/json',
      },
      body: JSON.stringify(newWorkout),
    });
  };

  return (
    <div className='workout-container'>
      <div className='workout-body'>
        <form onSubmit={submitForm}>
          <div className='workout-inputs'>
            <h1 className='title'>Workout Form</h1>

            <label htmlFor='name'>Workout Name: </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div id='full-workout'>
              <label htmlFor='exercises'>Add full workout here: </label>
              <aside>
                <input
                  type='text'
                  id='exercises'
                  value={exercise}
                  onChange={(e) => setExercises(e.target.value)}
                />
                <button type='button'>add exercise</button>
              </aside>
            </div>

            <input
              type='text'
              id='day'
              value={day}
              onChange={(e) => setDay(e.target.value)}
              placeholder='day'
            />
            <input
              type='text'
              id='month'
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder='month'
            />
            <input
              type='text'
              id='year'
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder='year'
            />

            <button
              type='submit'
              onClick={() => {
                navigate('/journal');
              }}
            >
              Submit Workout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWorkout;
