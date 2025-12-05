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

//GET ALL WORKOUTS
export async function getAllWorkouts(req, res) {

  try {

    const workouts = await Workout.find({}).sort({ createdAt: -1 });

    return res.status(200).json(workouts);

  } catch(error) {
    return res.status(500).json({ message: `Server Error: ${error.message}` });
  };
};

