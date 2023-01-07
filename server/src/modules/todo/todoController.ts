import { Request, Response } from 'express';
import { TodoService } from './TodoService';

const todoService = new TodoService();

export class TodoController {
  static async getTodos(req: Request, res: Response) {
    return res.json(await todoService.getTodos());
  }

  static async addOrUpdateTodo(req: Request, res: Response) {
    return res.json(await todoService.addOrUpdateTodo(req.body));
  }

  static async deleteTodo(req: Request, res: Response) {
    return res.json(await todoService.deleteTodo({ _id: req.params.id }));
  }
}
