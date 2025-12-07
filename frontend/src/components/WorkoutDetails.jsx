

export default function WorkoutDetails({ title, load, reps, createdAt }) {

  return (
    <div className="workout-details">
      <h4>{title.toUpperCase()}</h4>
      <p><strong>Load (lbs): </strong>{load}</p>
      <p><strong>Reps: </strong>{reps}</p>
      <p>{createdAt}</p>
    </div>
  )
}