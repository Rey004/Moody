import express from 'express';
import moodRouter from './routes/mood.routes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/moods', moodRouter);

export default app;
