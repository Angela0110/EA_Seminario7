import express, { RequestHandler } from 'express';
import cors from 'cors';

import userRoutes from './routes/user';
import todoRoutes from './routes/todo';
import authRoutes from './routes/auth';
import postRoutes from './routes/post';

// Initializations
const app: express.Application = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middelwares
app.use(cors());
app.use(express.json() as RequestHandler);


// Routes
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes)

export default app;
