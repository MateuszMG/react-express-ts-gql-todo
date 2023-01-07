import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import todoRoutes from './modules/todo/todoRoutes';

const app = express();
app.use(cors({ origin: true }));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', todoRoutes);

export default app;
