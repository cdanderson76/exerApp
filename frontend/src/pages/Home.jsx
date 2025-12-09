import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkkoutForm";


export default function Home() {

  const  [ workouts, setWorkouts ] = useState(null);

  async function fetchWorkouts() {

    const resp = await fetch('http://localhost:4000/api/workouts');
    const data = await resp.json();
    
    if(resp.ok) {
      setWorkouts(data);
    }
  }

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => <WorkoutDetails key={workout._id} 
                                                             title={workout.title}
                                                             load={workout.load}
                                                             reps={workout.reps}
                                                             createdAt={workout.createdAt} />)}
      </div>
      <WorkoutForm />
    </div>
  )
};