import { React, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/editworkout.css';

const EditWorkout = () => {
  const [updatedWorkout, setUpdatedWorkout] = useState([]);
  const [name, setName] = useState('');
  const [exercises, setExercises] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch('http://localhost:5000/workouts');
        const data = await res.json();
        setUpdatedWorkout(data);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };

    fetchWorkouts();
  }, []);

  // submit edited form to server
  const submitNewForm = (e) => {
    e.preventDefault();

    const editedWorkout = {
      id,
      name,
      exercises,
      date,
    };

    editWorkout(editedWorkout);

    navigate('/journal');

    window.location.reload();
  };

  // updating workout with changes
  const editWorkout = async (updatedWorkout) => {
    const res = await fetch(
      `http://localhost:5000/workouts/${updatedWorkout.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'applications/json',
        },
        body: JSON.stringify(updatedWorkout),
      }
    );
  };

  return (
    <>
      <div>
        {updatedWorkout.map((update) => (
          <ul key={update.id}>
            {update.id === id ? (
              <div className='form-container'>
                <form onSubmit={submitNewForm}>
                  <h1 className='title'>Workout Form</h1>

                  <label htmlFor='name'>Workout Name: </label>
                  <input
                    type='text'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <label htmlFor='exercises'>Add full workout here: </label>

                  <textarea
                    name='exercises'
                    id='exercises'
                    rows='10'
                    placeholder='Enter Workout Here...'
                    value={exercises}
                    onChange={(e) => setExercises(e.target.value)}
                  ></textarea>

                  <input
                    type='date'
                    id='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder='date'
                  />

                  <button type='submit'>Update Workout</button>
                </form>
              </div>
            ) : null}
          </ul>
        ))}
      </div>
    </>
  );
};

export default EditWorkout;
