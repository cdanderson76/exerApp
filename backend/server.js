import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import workoutRoutes from './routes/workouts.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/workouts', workoutRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`✅ Server running on http://localhost:${PORT}`);
});