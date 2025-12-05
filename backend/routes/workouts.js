import express from 'express';
import { createWorkout, 
         getAllWorkouts, 
         getWorkout} from '../controllers/workout-controller.js';

const router = express.Router();

router.post('/', createWorkout);
router.get('/', getAllWorkouts);
router.get('/:id', getWorkout);


export default router;