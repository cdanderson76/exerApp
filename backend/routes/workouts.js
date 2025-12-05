import express from 'express';
import { createWorkout } from '../controllers/workout-controller.js';

const router = express.Router();

router.post('/', createWorkout);


export default router;