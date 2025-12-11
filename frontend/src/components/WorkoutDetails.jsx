import axios from "axios";
import { useNavigate } from "react-router-dom";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function WorkoutDetails({ id, title, load, reps, createdAt, setWorkouts }) {

  const navigate = useNavigate();

  async function handleDelete() {

    try {
      axios.delete(`${import.meta.env.VITE_HOST}/api/workouts/${id}`);
      setWorkouts((prev) => prev.filter(item => item._id !== id));

    } catch(error) {
      console.log(error.message);
    };
  };

  function handleUpdate() {
    navigate(`/workouts/${id}`);
  };

  return (
    <div className="workout-details">
      <h4>{title}</h4>
      <p><strong>Load (lbs): </strong>{load}</p>
      <p><strong>Reps: </strong>{reps}</p>
      <p>
        {createdAt && !isNaN(new Date(createdAt) ? 
          formatDistanceToNow(new Date(createdAt), { addSuffix: true }) : 'Date unavailable...')}
      </p>
      <button className="update-button" onClick={handleUpdate}>Update</button>
      <button className='cancel-button' onClick={handleDelete}>Delete</button>
    </div>
  );
};