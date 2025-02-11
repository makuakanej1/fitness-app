import { useState, useEffect } from 'react';
import '../css/journal.css';
import WorkoutWrapper from '../components/WorkoutWrapper';
import { useNavigate } from 'react-router-dom';

const Journal = () => {
  const [workouts, setWorkouts] = useState([]);
  const [search, setSearch] = useState('');

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
    const confirmDelete = window.confirm('Press OK if you want to delete.');

    if (!confirmDelete) return;

    const res = await fetch(`http://localhost:5000/workouts/${id}`, {
      method: 'DELETE',
    });

    window.location.reload();
  };

  // edit a workout
  const editWorkout = async (id) => {
    navigate(`/editworkout/${id}`);
  };

  // filter through workouts by name
  const filterWorkouts = workouts.filter((workout) =>
    JSON.stringify(workout).toLowerCase().includes(search.toLowerCase())
  );

  // sort workouts by earliest date
  const sortedWorkouts = filterWorkouts.sort((first, second) =>
    first.date > second.date ? 1 : -1
  );

  return (
    <div className='journal-container'>
      <div className='journal-header'>
        <h1>Welcome to your workout journal!</h1>
        <h3>All workouts your have created will show here.</h3>
      </div>
      <div className='search-container'>
        <input
          type='text'
          className='search-input'
          value={search}
          placeholder='Search'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='journal-workouts'>
        {sortedWorkouts.map((workout) => (
          <WorkoutWrapper key={workout.id}>
            <h2>Workout Name: {workout.name}</h2>
            <h3>Exercises: </h3>
            {workout.exercises.map((exercises, index) => {
              return <li key={index}>{exercises}</li>;
            })}
            <h3>Date:</h3>
            <p>{workout.date}</p>
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
        ))}
      </div>
    </div>
  );
};

export default Journal;
