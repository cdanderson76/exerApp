import { useContext, useState, createContext } from "react";

const WorkoutContext = createContext();

export function useWorkoutContext() {
  return useContext(WorkoutContext);
};

export default function AppContext({ children }) {

  const  [ workouts, setWorkouts ] = useState([]);

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts }}>
      {children}
    </WorkoutContext.Provider>
  )
}