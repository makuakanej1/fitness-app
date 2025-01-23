import { React, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/editworkout.css';

const EditWorkout = () => {
  const [updatedWorkout, setUpdatedWorkout] = useState([]);
  const [name, setName] = useState('');
  const [exercise, setExercises] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

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
      exercise,
      day,
      month,
      year,
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

                    <button type='submit'>Update Workout</button>
                  </div>
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
