import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";
import { useWorkoutContext } from "../context/WorkoutContext";

export default function EditWorkout() {

  const { setWorkouts } = useWorkoutContext();

  const [ title, setTitle ] = useState('');
  const [ load, setLoad ] = useState('');
  const [ reps, setReps ] = useState('');
  const [ error, setError ] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();


  //FETCH WORKOUT DATA
  async function fetchWorkout() {

    try {
      const resp = await axios.get(`${import.meta.env.VITE_HOST}/api/workouts/${id}`);

      setTitle(resp.data.title);
      setLoad(resp.data.load);
      setReps(resp.data.reps);

    } catch(error) {
      setError('Failed to load workout');
    };
  };

  //LOADS DATA ON MOUNT
  useEffect(() => {
    fetchWorkout()
  }, [id])
 
  ///UPDATE WORKOUT INSTEAD OF CREATE
  async function handleSubmit(e) {
    e.preventDefault();
    
    const workout = {
      title,
      load,
      reps,
    };

    try {
      const resp = await axios.put(`${import.meta.env.VITE_HOST}/api/workouts/${id}`, workout, 
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setWorkouts(prev => prev.map(workout => (workout._id === id ? resp.data : workout)));
      
      setError(null);
      navigate('/');

    } catch(error) {
      if(error.response) {
        setError(error.response.data.error);
      } else {
        setError('Something went wrong');
        console.log(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create">
      <h3>Add A New Workout</h3>

      {/* TITLE */}
      <label>Exercise Title:</label>
      <input type="text"
             value={title}
             onChange={(e) => setTitle(e.target.value)} />
      {/* LOAD */}
      <label>Load (in lbs):</label>
      <input type="text"
             value={load}
             onChange={(e) => setLoad(e.target.value)} />
      {/* REPS */}
      <label>Reps:</label>
      <input type="text"
             value={reps}
             onChange={(e) => setReps(e.target.value)} />
      <button type="submit">Add Workout</button>
      <button className="cancel-button" onClick={() => navigate(-1)}>Cancel</button>
      { error && <div className="error">{error}</div>}
    </form>
  )
}