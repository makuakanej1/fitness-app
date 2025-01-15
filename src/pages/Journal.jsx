import { useState, useEffect } from 'react';
import '../css/journal.css';
import workouts from '../workouts.json';
import Hero from '../components/Hero';

const Journal = () => {
  const [workouts, setWorkouts] = useState([]);
  
  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch('http://localhost:5000/workouts');
      const data = await res.json();
      setWorkouts(data);
    }
   }, []);

  return (
    <div className="journal-container">
      <div className="journal-header">
        <Hero
        title='Welcome to your workout planner!'
        subtitle='Add, remove, or modify workouts here'
        />
      </div>
      <div className="journal-workouts">
        {workouts.map((workout) => (
          <h1 key={workout}>{workout.title}</h1>
        ))}
      </div>
    </div>
  )
}

export default Journal