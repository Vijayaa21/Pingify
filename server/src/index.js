import express from 'express';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';

const app = express();
const PORT = 5001;

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});