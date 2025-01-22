import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/addworkout.css';
import Hero from '../components/Hero';
import Input from '../components/Input';

const AddWorkout = () => {
  const [name, setName] = useState('');
  const [lift, setLifts] = useState('');
  const [days, setDays] = useState('');

  const navigate = useNavigate();

  // event handlers for input fields
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLiftChange = (event) => {
    setLifts(event.target.value);
  };

  const handleDayChange = (event) => {
    setDays(event.target.value);
  };

  // submit form to server
  const submitForm = (e) => {
    e.preventDefault();

    const newWorkout = {
      name,
      lift,
      days,
    };

    addWorkout(newWorkout);

    return navigate('/journal');
  };

  // adds a new input field for additional exercises
  const addExercise = () => {};

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
            <Input
              type='text'
              id='name'
              value={name}
              onChange={handleNameChange}
            />

            <div id='full-workout'>
              <label htmlFor='exercises'>Add full workout here: </label>
              <aside>
                <Input
                  type='text'
                  id='exercises'
                  value={lift}
                  onChange={handleLiftChange}
                />
                <button type='button'>+</button>
              </aside>
            </div>

            <label htmlFor='days'>Day of the week: </label>
            <select
              name='days'
              id='days'
              value={days}
              onChange={handleDayChange}
            >
              <option value=''>--Select a day of the week--</option>
              <option value='Monday'>Monday</option>
              <option value='Tuesday'>Tuesday</option>
              <option value='Wednesday'>Wednesday</option>
              <option value='Thursday'>Thursday</option>
              <option value='Friday'>Friday</option>
              <option value='Saturday'>Saturday</option>
              <option value='Sunday'>Sunday</option>
            </select>

            <button type='submit'>Submit Workout</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWorkout;
