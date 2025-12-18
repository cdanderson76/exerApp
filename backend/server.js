import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import workoutRoutes from './routes/workouts.js';
import userWorkouts from './routes/user.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userWorkouts);

app.listen(PORT, () => {
  connectDB();
  console.log(`✅ Server running on http://localhost:${PORT}`);
});