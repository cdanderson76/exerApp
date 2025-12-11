import { useState } from "react";
import axios from 'axios'

export default function WorkoutForm({ setWorkouts }) {

  const [ title, setTitle ] = useState('');
  const [ load, setLoad ] = useState('');
  const [ reps, setReps ] = useState('');
  const [ error, setError ] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    
    const workout = {
      title,
      load,
      reps,
    };

    try {

      const resp = await axios.post(`${import.meta.env.VITE_HOST}/api/workouts`, workout, 
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setWorkouts((prev) => [resp.data, ...prev]);
      setTitle('');
      setLoad('');
      setReps('');
      setError(null);
      console.log('New workout added');
    } catch(error) {
      if(error.response) {
        setError(error.response.data.error);
      } else {
        setError('Something went wrong');
        console.log(error.message);
      }
    }
  };

  // WITHOUT USING AXIOS ********************
  //   const resp = await fetch(`${import.meta.env.VITE_HOST}/api/workouts`, {
  //     method: 'POST',
  //     body: JSON.stringify(workout),
  //     headers: { 'Content-Type': 'application/json' }
  //   });
  //   const data = await resp.json();

  //   if(!resp.ok) {
  //     setError(data.error);
  //   };

  //   if(resp.ok) {
  //     setTitle('');
  //     setLoad('');
  //     setReps('');
  //     setError(null);
  //     console.log('New workout added', data);
  //   };
  // };

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
      { error && <div className="error">{error}</div>}
    </form>
  )
}