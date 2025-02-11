import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/addworkout.css';

const AddWorkout = () => {
  const [name, setName] = useState('');
  const [exercises, setExercises] = useState(['']);
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  // submit form to server
  const submitForm = (e) => {
    e.preventDefault();

    const newWorkout = {
      name,
      exercises,
      date,
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

  // add to button to create a new input for another exercise
  const addExerciseInput = () => {
    e.preventDefault();

    setExercises([...exercises, '']);
  };

  //
  const newExerciseInput = (index, e) => {
    const newExercises = [...exercises];
    newExercises[index] = e.target.value;
    setExercises(newExercises);
  };

  return (
    <div className='workout-container'>
      <form onSubmit={submitForm}>
        <h1 className='title'>Workout Form</h1>

        <label htmlFor='name'>Workout Name: </label>
        <input
          type='text'
          id='name'
          placeholder='Workout Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {exercises.map((value, index) => (
          <input
            key={index}
            value={value}
            type='text'
            placeholder={`Exercise #${index + 1}`}
            onChange={(e) => newExerciseInput(index, e)}
          />
        ))}
        <button id='exercise-btn' type='button' onClick={addExerciseInput}>
          Add Exercise
        </button>

        <input
          type='date'
          id='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder='date'
          required
        />

        <button>Submit Workout</button>
      </form>
    </div>
  );
};

export default AddWorkout;
