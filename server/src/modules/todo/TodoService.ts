import { ITodo, Todo, TodoModel } from './TodoModel';
import { AddOrUpdateTodoInput, DeleteTodoInput } from './todoInputs';
import { MessageResponse } from '../../apollo/globalTypes';

type Optional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;

export class TodoService {
  async getTodos(): Promise<Todo[]> {
    return await TodoModel.find({});
  }

  async addOrUpdateTodo(
    input: Optional<AddOrUpdateTodoInput, '_id'>,
  ): Promise<Todo> {
    if (!input?._id) {
      Object.keys(input).includes('_id') && delete input._id;

      return await new TodoModel<ITodo>(input).save();
    } else {
      const { _id, ...rest } = input;

      const updatedTodo = await TodoModel.findByIdAndUpdate(
        input._id,
        { ...rest },
        { new: true },
      );

      if (!updatedTodo) throw 'Error';

      return updatedTodo;
    }
  }

  async deleteTodo(input: DeleteTodoInput): Promise<MessageResponse> {
    await TodoModel.findByIdAndDelete(input._id);
    return { message: 'Deleted' };
  }
}
