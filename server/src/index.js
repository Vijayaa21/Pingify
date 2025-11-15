import express from 'express';
import authRoutes from './routes/auth.route.js';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import { ENV } from './lib/env.js';

const app = express();
const PORT = ENV.PORT || 5001;
const __dirname = path.resolve();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/auth', authRoutes)

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,"../client/dist")))
  app.get(/.*/, (_, res) =>{
    res.sendFile(path.join(__dirname, "../client" , "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});