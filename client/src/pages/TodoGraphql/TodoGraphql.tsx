import { useTodoGraphql } from './useTodoGraphql';
import {
  Button,
  ButtonWrapper,
  Checkbox,
  Container,
  Form,
  FormWrapper,
  Input,
  InputWrapper,
  Label,
  LabelText,
  Section,
  Text,
  TextWrapper,
  TodosWrapper,
} from './TodoGraphql.styled';

export const TodoGraphql = () => {
  const {
    handleActive,
    handleDelete,
    handleSetEdit,
    onSubmit,
    register,
    todos,
  } = useTodoGraphql();

  return (
    <Container>
      <FormWrapper>
        <Form onSubmit={onSubmit}>
          <InputWrapper>
            <LabelText>Title</LabelText>
            <Input {...register('title')} />
          </InputWrapper>
          <InputWrapper>
            <LabelText>Description</LabelText>
            <Input {...register('description')} />
          </InputWrapper>
          <Label>
            <LabelText>Active:</LabelText>
            <Checkbox {...register('active')} type={'checkbox'} />
          </Label>
          <ButtonWrapper>
            <Button type='submit'>Submit</Button>
          </ButtonWrapper>
        </Form>
      </FormWrapper>

      <TodosWrapper>
        {todos?.map((todo) => {
          //   delete todo.__typename;
          const { _id, active, description, title } = todo;
          return (
            <Section key={_id}>
              <TextWrapper>
                <Text>{title}</Text>
                <Text>{description}</Text>
                <Text>{active + ''}</Text>
              </TextWrapper>
              <Button onClick={() => handleSetEdit(todo)}>Edit</Button>
              <Button onClick={() => handleActive(todo)}>Change active</Button>
              <Button onClick={() => handleDelete(_id)}>Delete</Button>
            </Section>
          );
        })}
      </TodosWrapper>
    </Container>
  );
};
