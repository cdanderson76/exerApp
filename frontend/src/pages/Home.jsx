import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkkoutForm";
import { useWorkoutContext } from "../context/WorkoutContext";


export default function Home() {

  const  { workouts, setWorkouts } = useWorkoutContext();

  async function fetchWorkouts() {

    const resp = await fetch(`${import.meta.env.VITE_HOST}/api/workouts`);
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
      {!workouts || workouts.length === 0 ? (
        <>
          <div>
            <h4 className="zero-workouts">NO WORKOUTS FOUND!</h4>
          </div>
        </>
      ) : (
        <div>
          {workouts.map((workout, index) => (
            <WorkoutDetails
              key={index}
              id={workout._id}
              title={workout.title}
              load={workout.load}
              reps={workout.reps}
              createdAt={workout.createdAt}
              setWorkouts={setWorkouts}
              workouts={workouts}
            />
          ))}
        </div>
      )}
    </div>
    <WorkoutForm setWorkouts={setWorkouts} />
  </div>
  )
};