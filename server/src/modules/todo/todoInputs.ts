import { IsBoolean, IsString } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class AddOrUpdateTodoInput {
  @IsString()
  @Field({ nullable: true })
  _id: string;

  @IsString()
  @Field()
  title: string;

  @IsString()
  @Field()
  description: string;

  @IsBoolean()
  @Field()
  active: boolean;
}

@InputType()
export class DeleteTodoInput {
  @IsString()
  @Field()
  _id: string;
}
