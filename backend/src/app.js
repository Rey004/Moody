import express from 'express';
import moodRouter from './routes/mood.routes.js';

const app = express();

app.use(express.json());

app.use('/api/moods', moodRouter);

export default app;
