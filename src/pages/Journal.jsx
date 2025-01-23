import { useState, useEffect } from 'react';
import '../css/journal.css';
import WorkoutWrapper from '../components/WorkoutWrapper';
import { useNavigate, useParams } from 'react-router-dom';

const Journal = () => {
  const [workouts, setWorkouts] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

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

  // edit a workout
  const editWorkout = async (id) => {
    navigate(`/editworkout/${id}`);
    console.log('edited', id);
  };

  return (
    <div className='journal-container'>
      <div className='journal-header'>
        <h1>Welcome to your workout journal!</h1>
        <h3>All workouts your have created will show here.</h3>
      </div>
      <div className='journal-workouts'>
        {workouts.map((workout) => (
          <ul key={workout.id}>
            <WorkoutWrapper>
              <h3
                style={{
                  backgroundColor: 'black',
                  borderRadius: '8px',
                  color: 'whitesmoke',
                }}
              >
                Workout Name: <li>{workout.name}</li>
              </h3>

              <h3>Exercises: </h3>
              <li>{workout.exercise}</li>
              <h3>Date:</h3>
              <li>
                {workout.day}/{workout.month}/{workout.year}
              </li>
              <button
                onClick={() => {
                  deleteWorkout(workout.id);
                }}
              >
                Delete Workout
              </button>
              <button
                type='button'
                id='edit-button'
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
