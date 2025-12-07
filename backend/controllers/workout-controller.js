import Workout from "../models/workoutModel.js";
import mongoose from "mongoose";

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

//GET WORKOUT
export async function getWorkout(req, res) {

  const { id } = req.params;

  try {

    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'No such workout' });
    }

    const workout = await Workout.findById(id);

    if(!workout) {
      return res.status(404).json({ message: `No workout found...` });
    };
    return res.status(200).json(workout);

  } catch(error) {
    return res.status(500).json({ message: `Server Error: ${error.message}` });
  };
};



//DELETE WORKOUT
export async function deleteWorkout(req ,res) {

  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'No such workout' });
  }

  try {

    const workout = await Workout.findByIdAndDelete(id);

    if(!workout) {
      return res.status(500).json({ message: 'No workout found...'})
    };

    return res.status(200).json({ message: 'Workout deleted successfully', workout });

  } catch(error) {
    return res.status(500).json({ message: `Server Error: ${error.message}` });
  };
};