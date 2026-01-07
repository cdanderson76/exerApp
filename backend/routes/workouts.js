import express from 'express';
import { createWorkout, 
         deleteWorkout, 
         getAllWorkouts, 
         getWorkout,
         updateWorkout } from '../controllers/workout-controller.js';

const router = express.Router();

router.post('/', createWorkout);
router.get('/', getAllWorkouts);
router.get('/:id', getWorkout);
router.delete('/:id', deleteWorkout);
router.put('/:id', updateWorkout);


export default router;