import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { Field, InputType, ObjectType } from 'type-graphql';

@ObjectType()
export class Todo {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @prop({ required: true })
  title: string;

  @Field(() => String)
  @prop({ required: true })
  description: string;

  @Field(() => Boolean)
  @prop({ required: true })
  active: boolean;
}

export const TodoModel = getModelForClass<typeof Todo>(Todo);
export type ITodo = Omit<Todo, '_id' | 'createdAt' | 'updatedAt'>;
