import express from 'express';
import { TodoController } from './TodoController';

const todoRoutes = express.Router();

todoRoutes.get('/todos', TodoController.getTodos);
todoRoutes.post('/addOrUpdateTodo', TodoController.addOrUpdateTodo);
todoRoutes.delete('/todo/:id', TodoController.deleteTodo);

export default todoRoutes;
