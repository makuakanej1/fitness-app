import { useState, useEffect } from 'react';
import '../css/journal.css';
import Hero from '../components/Hero';
import WorkoutWrapper from '../components/WorkoutWrapper';

const Journal = () => {
  const [workouts, setWorkouts] = useState([]);

  // get data from json server for workouts
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch('http://localhost:5000/workouts');
        const data = await res.json();
        setWorkouts(data);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };

    fetchWorkouts();
  }, []);

  // delete a workout
  const deleteWorkout = async (id) => {
    const res = await fetch(`http://localhost:5000/workouts/${id}`, {
      method: 'DELETE',
    });

    window.location.reload();
  };

  return (
    <div className='journal-container'>
      <div className='journal-header'>
        <Hero
          title='Welcome to your workout planner!'
          subtitle='Add, remove, or modify workouts here'
        />
      </div>
      <div className='journal-workouts'>
        {workouts.map((workout) => (
          <ul key={workout.id}>
            <WorkoutWrapper>
              <h3>Workout Name: </h3>
              <li>{workout.name}</li>
              <h3>Workout: </h3>
              <li>{workout.lift}</li>
              <h3>Day of the week:</h3>
              <li>{workout.days}</li>
              <button
                onClick={() => {
                  deleteWorkout(workout.id);
                }}
              >
                Delete Workout
              </button>
              <button
                onClick={() => {
                  editWorkout(workout.id);
                }}
              >
                Edit
              </button>
            </WorkoutWrapper>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Journal;
