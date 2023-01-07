import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Todo } from './TodoModel';
import { TodoService } from './TodoService';
import { MessageResponse } from '../../apollo/globalTypes';
import { AddOrUpdateTodoInput, DeleteTodoInput } from './todoInputs';

@Resolver()
export class TodoResolver {
  constructor(private todoService: TodoService) {
    this.todoService = new TodoService();
  }

  @Query(() => [Todo])
  getTodos() {
    return this.todoService.getTodos();
  }

  @Mutation(() => Todo)
  addOrUpdateTodo(@Arg('input') input: AddOrUpdateTodoInput) {
    return this.todoService.addOrUpdateTodo(input);
  }

  @Mutation(() => MessageResponse)
  deleteTodo(@Arg('input') input: DeleteTodoInput) {
    return this.todoService.deleteTodo(input);
  }
}
