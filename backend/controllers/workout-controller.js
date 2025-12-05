import Workout from "../models/workoutModel.js";

//CREATE WORKOUT
export async function createWorkout(req, res) {

  const { title, load, reps } = req.body;

  try {

    const workout = await Workout.create({
      title,
      load,
      reps
    });
    res.status(201).json(workout);

  } catch(error) {
    return res.status(500).json({ message: `Server Error: ${error.message}` });
  };
};

