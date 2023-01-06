import { ITodo, Todo, TodoModel } from './todoModel';
import { AddOrUpdateTodoInput, DeleteTodoInput } from './todoInputs';
import { MessageResponse } from '../../apollo/globalTypes';

export class TodoService {
  async getTodos(): Promise<Todo[]> {
    return await TodoModel.find({});
  }

  async addOrUpdateTodo(input: AddOrUpdateTodoInput): Promise<Todo> {
    console.log('input', input);

    if (!input?._id) {
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
