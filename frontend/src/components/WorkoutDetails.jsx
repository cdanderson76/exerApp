import axios from "axios";

export default function WorkoutDetails({ id, title, load, reps, createdAt, setWorkouts }) {

  async function handleDelete() {

    try {

      axios.delete(`${import.meta.env.VITE_HOST}/api/workouts/${id}`);
      setWorkouts((prev) => prev.filter(item => item._id !== id));

    } catch(error) {
      console.log(error.message);
    };
  };

  return (
    <div className="workout-details">
      <h4>{title.toUpperCase()}</h4>
      <p><strong>Load (lbs): </strong>{load}</p>
      <p><strong>Reps: </strong>{reps}</p>
      <p>{createdAt}</p>
      <span onClick={handleDelete}>delete</span>
    </div>
  )
}